import { NextRequest, NextResponse } from 'next/server'
import { getMockFocus } from '@/lib/mock'
import { createClient } from '@/lib/supabase/server'

export async function GET() {
  try {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (user) {
      const { data, error } = await supabase
        .from('focus_cards').select('*')
        .eq('tenant_id', user.id)
        .eq('status', 'active')
        .order('created_at', { ascending: false })
        .limit(1).single()
      if (error && error.code !== 'PGRST116') {
        console.error('[/api/focus] DB error:', error.message)
        return NextResponse.json({ error: 'Database error' }, { status: 500 })
      }
      if (data) return NextResponse.json(data)
    }
  } catch (err) {
    console.error('[/api/focus] Unexpected error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }

  return NextResponse.json(getMockFocus())
}

export async function POST(req: NextRequest) {
  let id: unknown, action: unknown
  try {
    ;({ id, action } = await req.json())
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  if (!id || typeof id !== 'string') {
    return NextResponse.json({ error: 'id is required' }, { status: 400 })
  }
  if (action !== 'accept' && action !== 'skip') {
    return NextResponse.json({ error: 'action must be "accept" or "skip"' }, { status: 400 })
  }

  const status = action === 'accept' ? 'accepted' : 'skipped'

  if (id === 'mock') return NextResponse.json({ ok: true, status })

  try {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const { error } = await supabase
      .from('focus_cards').update({ status })
      .eq('id', id).eq('tenant_id', user.id)
    if (error) {
      console.error('[/api/focus POST] DB error:', error.message)
      return NextResponse.json({ error: 'Database error' }, { status: 500 })
    }
  } catch (err) {
    console.error('[/api/focus POST] Unexpected error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }

  return NextResponse.json({ ok: true, status })
}
