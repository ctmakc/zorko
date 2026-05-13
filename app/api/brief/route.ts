import { NextResponse } from 'next/server'
import { getMockBrief } from '@/lib/mock'
import { createClient } from '@/lib/supabase/server'

export async function GET() {
  try {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (user) {
      const { data, error } = await supabase
        .from('briefs').select('*')
        .eq('tenant_id', user.id)
        .order('created_at', { ascending: false })
        .limit(1).single()
      if (error && error.code !== 'PGRST116') {
        console.error('[/api/brief] DB error:', error.message)
        return NextResponse.json({ error: 'Database error' }, { status: 500 })
      }
      if (data) return NextResponse.json(data)
    }
  } catch (err) {
    console.error('[/api/brief] Unexpected error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }

  return NextResponse.json(getMockBrief())
}
