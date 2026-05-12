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

  // Upsert brief
  await supabase.from('briefs').insert({
    tenant_id: tenantId,
    content: insights.brief,
    headline: insights.headline,
    is_mock: false,
    created_at: now,
  })

  // Upsert focus card (mark previous as skipped)
  await supabase.from('focus_cards').update({ status: 'skipped' }).eq('tenant_id', tenantId).eq('status', 'active')
  await supabase.from('focus_cards').insert({
    tenant_id: tenantId,
    tag: 'ФОКУС ДНЯ · AI',
    title: insights.focus.title,
    body: insights.focus.body,
    meta: insights.focus.meta,
    status: 'active',
    is_mock: false,
    created_at: now,
  })

  // Insert whispers (keep today's, add new)
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
  await supabase.from('whispers').insert(whispers)

  console.log(`[AI Pipeline] Tenant ${tenantId}: ${whispers.length} whispers generated`)
  return true
}
