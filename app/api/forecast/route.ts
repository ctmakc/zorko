import { NextResponse } from 'next/server'
import { getMockForecast, getMockEvents } from '@/lib/mock'
import { createClient } from '@/lib/supabase/server'

export async function GET() {
  try {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (user) {
      const [{ data: days }, { data: evts }] = await Promise.all([
        supabase.from('forecasts').select('*').eq('tenant_id', user.id).order('date').limit(7),
        supabase.from('events').select('*').eq('tenant_id', user.id).order('event_at').limit(10),
      ])
      if (days?.length) return NextResponse.json({ days, events: evts ?? [] })
    }
  } catch {}

  return NextResponse.json({ days: getMockForecast(), events: getMockEvents() })
}
