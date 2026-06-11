import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { FREE_CONNECTOR_LIMIT, getTier } from '@/lib/stripe'

type Params = { params: Promise<{ type: string }> }

const CONNECTOR_DEFS: Record<string, { required: string[] }> = {
  weather:   { required: [] },
  reviews:   { required: ['place_id', 'api_key'] },
  pos:       { required: [] },
  inventory: { required: [] },
  telegram:  { required: [] },
  calendar:  { required: [] },
  events:    { required: [] },
  maps:      { required: [] },
}

export async function PUT(req: NextRequest, { params }: Params) {
  const { type } = await params

  if (!CONNECTOR_DEFS[type]) {
    return NextResponse.json({ error: 'Unknown connector type' }, { status: 400 })
  }

  let body: { config?: Record<string, string>; enabled?: boolean }
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const config = body.config ?? {}
  const missing = CONNECTOR_DEFS[type].required.filter(f => !config[f]?.trim())
  if (missing.length) {
    return NextResponse.json({ error: `Missing required fields: ${missing.join(', ')}` }, { status: 400 })
  }

  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  // --- Freemium gate: check connector limit for free/expired-trial users ---
  if (body.enabled) {
    const { data: tenant } = await supabase
      .from('tenants')
      .select('subscription_status, trial_ends_at')
      .eq('id', user.id)
      .single()

    const tier = getTier(tenant?.subscription_status, tenant?.trial_ends_at)

    if (tier === 'free') {
      // Count currently enabled connectors (excluding this one, since upsert may already exist)
      const { data: existing } = await supabase
        .from('connectors')
        .select('type, enabled')
        .eq('tenant_id', user.id)

      const enabledOther = (existing ?? []).filter(c => c.enabled && c.type !== type).length
      if (enabledOther >= FREE_CONNECTOR_LIMIT) {
        return NextResponse.json(
          { error: 'connector_limit', message: 'Free plan allows only 1 connector. Upgrade to Pro.' },
          { status: 403 }
        )
      }
    }
  }

  const { error } = await supabase.from('connectors').upsert({
    tenant_id: user.id,
    type,
    config,
    enabled: body.enabled ?? false,
  }, { onConflict: 'tenant_id,type' })

  if (error) {
    console.error('[/api/connectors PUT] DB error:', error.message)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
  return NextResponse.json({ ok: true })
}

export async function DELETE(_req: NextRequest, { params }: Params) {
  const { type } = await params

  if (!CONNECTOR_DEFS[type]) {
    return NextResponse.json({ error: 'Unknown connector type' }, { status: 400 })
  }

  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { error } = await supabase
    .from('connectors').update({ enabled: false, config: {} })
    .eq('tenant_id', user.id).eq('type', type)
  if (error) {
    console.error('[/api/connectors DELETE] DB error:', error.message)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
  return NextResponse.json({ ok: true })
}
