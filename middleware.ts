import { createServerClient } from '@supabase/ssr'
import { NextRequest, NextResponse } from 'next/server'

export async function middleware(req: NextRequest) {
  let res = NextResponse.next({ request: req })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll: () => req.cookies.getAll(),
        setAll: (toSet) => {
          toSet.forEach(({ name, value, options }) => {
            res = NextResponse.next({ request: req })
            res.cookies.set(name, value, {
              path: options?.path ?? '/',
              maxAge: options?.maxAge,
              expires: options?.expires,
              httpOnly: true,
              secure: true,
              sameSite: 'lax',
            })
          })
        },
      },
    }
  )

  const { data: { user } } = await supabase.auth.getUser()
  const path = req.nextUrl.pathname

  // If env vars not set, skip auth (demo mode)
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL.includes('your-project')) {
    return res
  }

  const publicPaths = ['/login', '/auth/callback']
  if (!user && !publicPaths.some(p => path.startsWith(p))) {
    return NextResponse.redirect(new URL('/login', req.url))
  }

  if (user && path === '/login') {
    return NextResponse.redirect(new URL('/', req.url))
  }

  return res
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|api/auth).*)'],
}
