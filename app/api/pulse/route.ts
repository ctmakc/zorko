import { NextResponse } from 'next/server'
import { getMockMetrics } from '@/lib/mock'
import { createClient } from '@/lib/supabase/server'

export async function GET() {
  try {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (user) {
      const { data, error } = await supabase
        .from('metrics').select('*')
        .eq('tenant_id', user.id)
        .order('recorded_at', { ascending: false })
      if (error) {
        console.error('[/api/pulse] DB error:', error.message)
        return NextResponse.json({ error: 'Database error' }, { status: 500 })
      }
      if (data?.length) {
        const seen = new Set<string>()
        const unique = data.filter(m => { if (seen.has(m.key)) return false; seen.add(m.key); return true })
        return NextResponse.json(unique)
      }
    }
  } catch (err) {
    console.error('[/api/pulse] Unexpected error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }

  return NextResponse.json(getMockMetrics())
}
