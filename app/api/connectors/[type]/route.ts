import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

type Params = { params: Promise<{ type: string }> }

export async function PUT(req: NextRequest, { params }: Params) {
  const { type } = await params
  const body = await req.json()
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { error } = await supabase.from('connectors').upsert({
    tenant_id: user.id,
    type,
    config: body.config ?? {},
    enabled: body.enabled ?? false,
  }, { onConflict: 'tenant_id,type' })

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ ok: true })
}

export async function DELETE(_req: NextRequest, { params }: Params) {
  const { type } = await params
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  await supabase.from('connectors').update({ enabled: false, config: {} }).eq('tenant_id', user.id).eq('type', type)
  return NextResponse.json({ ok: true })
}
