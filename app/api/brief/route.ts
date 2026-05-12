import { NextResponse } from 'next/server'
import { getMockBrief } from '@/lib/mock'
import { createClient } from '@/lib/supabase/server'

export async function GET() {
  try {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (user) {
      const { data } = await supabase.from('briefs').select('*').eq('tenant_id', user.id).order('created_at', { ascending: false }).limit(1).single()
      if (data) return NextResponse.json(data)
    }
  } catch {}

  return NextResponse.json(getMockBrief())
}
