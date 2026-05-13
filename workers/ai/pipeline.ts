import { generateInsights } from '../../lib/ai'
import type { SupabaseClient } from '@supabase/supabase-js'

export interface RawBundle extends Record<string, unknown> {
  tenant: { id: string; name: string; city: string }
  weather?: Record<string, unknown>
  reviews?: Record<string, unknown>
  pos?: Record<string, unknown>
  inventory?: Record<string, unknown>
}

export async function runAIPipeline(bundle: RawBundle, supabase: SupabaseClient) {
  const tenantId = bundle.tenant.id

  let insights: Awaited<ReturnType<typeof generateInsights>>
  try {
    insights = await generateInsights(bundle)
  } catch (err) {
    console.error('[AI Pipeline] Gemini error:', err)
    return false
  }

  const now = new Date().toISOString()

  const { error: briefErr } = await supabase.from('briefs').insert({
    tenant_id: tenantId,
    content: insights.brief,
    headline: insights.headline,
    is_mock: false,
    created_at: now,
  })
  if (briefErr) console.error('[AI Pipeline] Failed to insert brief:', briefErr.message)

  const { error: skipErr } = await supabase
    .from('focus_cards').update({ status: 'skipped' })
    .eq('tenant_id', tenantId).eq('status', 'active')
  if (skipErr) console.error('[AI Pipeline] Failed to skip old focus:', skipErr.message)

  const { error: focusErr } = await supabase.from('focus_cards').insert({
    tenant_id: tenantId,
    tag: 'ФОКУС ДНЯ · AI',
    title: insights.focus.title,
    body: insights.focus.body,
    meta: insights.focus.meta,
    status: 'active',
    is_mock: false,
    created_at: now,
  })
  if (focusErr) console.error('[AI Pipeline] Failed to insert focus card:', focusErr.message)

  const whispers = insights.whispers.map((w: { src: string; msg: string; meta: string; sev: string }) => ({
    tenant_id: tenantId,
    src: w.src,
    msg: w.msg,
    meta: w.meta,
    sev: w.sev,
    dismissed: false,
    is_mock: false,
    created_at: now,
  }))
  const { error: whispErr } = await supabase.from('whispers').insert(whispers)
  if (whispErr) console.error('[AI Pipeline] Failed to insert whispers:', whispErr.message)

  // Prune old data (keep last 30 days)
  const cutoff = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString()
  await Promise.all([
    supabase.from('briefs').delete().eq('tenant_id', tenantId).lt('created_at', cutoff),
    supabase.from('whispers').delete().eq('tenant_id', tenantId).lt('created_at', cutoff),
    supabase.from('metrics').delete().eq('tenant_id', tenantId).lt('recorded_at', cutoff),
  ])

  console.log(`[AI Pipeline] Tenant ${tenantId}: ${whispers.length} whispers generated`)
  return true
}
