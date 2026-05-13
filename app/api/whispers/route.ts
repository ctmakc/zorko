import { NextRequest, NextResponse } from 'next/server'
import { getMockWhispers } from '@/lib/mock'
import { createClient } from '@/lib/supabase/server'

const VALID_SEV = new Set(['warn', 'good', 'idea'])

export async function GET(req: NextRequest) {
  const sev = req.nextUrl.searchParams.get('sev')
  if (sev && !VALID_SEV.has(sev)) {
    return NextResponse.json({ error: 'Invalid sev value' }, { status: 400 })
  }

  try {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (user) {
      let query = supabase
        .from('whispers').select('*')
        .eq('tenant_id', user.id)
        .order('created_at', { ascending: false })
        .limit(20)
      if (sev) query = query.eq('sev', sev)
      const { data, error } = await query
      if (error) {
        console.error('[/api/whispers] DB error:', error.message)
        return NextResponse.json({ error: 'Database error' }, { status: 500 })
      }
      if (data?.length) return NextResponse.json(data)
    }
  } catch (err) {
    console.error('[/api/whispers] Unexpected error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }

  let whispers = getMockWhispers()
  if (sev) whispers = whispers.filter(w => w.sev === sev)
  return NextResponse.json(whispers)
}

export async function PATCH(req: NextRequest) {
  let id: unknown, dismissed: unknown
  try {
    ;({ id, dismissed } = await req.json())
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  if (!id || typeof id !== 'string') {
    return NextResponse.json({ error: 'id is required' }, { status: 400 })
  }
  if (typeof dismissed !== 'boolean') {
    return NextResponse.json({ error: 'dismissed must be boolean' }, { status: 400 })
  }

  try {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const { error } = await supabase
      .from('whispers').update({ dismissed })
      .eq('id', id).eq('tenant_id', user.id)
    if (error) {
      console.error('[/api/whispers PATCH] DB error:', error.message)
      return NextResponse.json({ error: 'Database error' }, { status: 500 })
    }
  } catch (err) {
    console.error('[/api/whispers PATCH] Unexpected error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
