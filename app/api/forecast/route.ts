import { NextResponse } from 'next/server'
import { getMockForecast, getMockEvents } from '@/lib/mock'
import { createClient } from '@/lib/supabase/server'

export async function GET() {
  try {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (user) {
      const [{ data: days, error: e1 }, { data: evts, error: e2 }] = await Promise.all([
        supabase.from('forecasts').select('*').eq('tenant_id', user.id).order('date').limit(7),
        supabase.from('events').select('*').eq('tenant_id', user.id).order('event_at').limit(10),
      ])
      if (e1 || e2) {
        console.error('[/api/forecast] DB error:', e1?.message ?? e2?.message)
        return NextResponse.json({ error: 'Database error' }, { status: 500 })
      }
      if (days?.length) return NextResponse.json({ days, events: evts ?? [] })
    }
  } catch (err) {
    console.error('[/api/forecast] Unexpected error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }

  return NextResponse.json({ days: getMockForecast(), events: getMockEvents() })
}
