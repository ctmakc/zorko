import { NextRequest, NextResponse } from 'next/server'
import { getMockWhispers } from '@/lib/mock'
import { createClient } from '@/lib/supabase/server'

export async function GET(req: NextRequest) {
  const sev = req.nextUrl.searchParams.get('sev')

  try {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (user) {
      let query = supabase.from('whispers').select('*').eq('tenant_id', user.id).order('created_at', { ascending: false }).limit(20)
      if (sev) query = query.eq('sev', sev)
      const { data, error } = await query
      if (!error && data?.length) return NextResponse.json(data)
    }
  } catch {}

  let whispers = getMockWhispers()
  if (sev) whispers = whispers.filter(w => w.sev === sev)
  return NextResponse.json(whispers)
}

export async function PATCH(req: NextRequest) {
  const { id, dismissed } = await req.json()
  try {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (user) {
      await supabase.from('whispers').update({ dismissed }).eq('id', id).eq('tenant_id', user.id)
    }
  } catch {}
  return NextResponse.json({ ok: true })
}
