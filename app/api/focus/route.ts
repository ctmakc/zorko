import { NextRequest, NextResponse } from 'next/server'
import { getMockFocus } from '@/lib/mock'
import { createClient } from '@/lib/supabase/server'

export async function GET() {
  try {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (user) {
      const { data } = await supabase.from('focus_cards').select('*').eq('tenant_id', user.id).eq('status', 'active').order('created_at', { ascending: false }).limit(1).single()
      if (data) return NextResponse.json(data)
    }
  } catch {}

  return NextResponse.json(getMockFocus())
}

export async function POST(req: NextRequest) {
  const { id, action } = await req.json() // action: 'accept' | 'skip'
  const status = action === 'accept' ? 'accepted' : 'skipped'

  try {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (user && id !== 'mock') {
      await supabase.from('focus_cards').update({ status }).eq('id', id).eq('tenant_id', user.id)
    }
  } catch {}

  return NextResponse.json({ ok: true, status })
}
