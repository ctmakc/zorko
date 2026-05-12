import { NextResponse } from 'next/server'
import { getMockMetrics } from '@/lib/mock'
import { createClient } from '@/lib/supabase/server'

export async function GET() {
  try {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (user) {
      const { data, error } = await supabase
        .from('metrics').select('*').eq('tenant_id', user.id)
        .order('recorded_at', { ascending: false })
      if (!error && data?.length) {
        // deduplicate: latest snapshot per key
        const seen = new Set<string>()
        const unique = data.filter(m => { if (seen.has(m.key)) return false; seen.add(m.key); return true })
        return NextResponse.json(unique)
      }
    }
  } catch {}

  return NextResponse.json(getMockMetrics())
}
