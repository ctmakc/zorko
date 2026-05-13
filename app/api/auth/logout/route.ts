import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export async function POST(req: NextRequest) {
  try {
    const supabase = await createClient()
    await supabase.auth.signOut()
  } catch (err) {
    console.error('[/api/auth/logout] Error:', err)
  }
  return NextResponse.redirect(new URL('/login', req.url))
}
