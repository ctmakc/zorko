'use client'
export const dynamic = 'force-dynamic'
import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [mode, setMode] = useState<'login' | 'register'>('login')
  const [loading, setLoading] = useState(false)
  const [msg, setMsg] = useState('')
  const supabase = createClient()

  const handleGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: `${window.location.origin}/auth/callback` },
    })
  }

  const handleEmail = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    const { error } = mode === 'login'
      ? await supabase.auth.signInWithOtp({ email, options: { emailRedirectTo: `${window.location.origin}/auth/callback` } })
      : await supabase.auth.signInWithOtp({ email, options: { emailRedirectTo: `${window.location.origin}/auth/callback` } })
    setLoading(false)
    if (error) setMsg(error.message)
    else setMsg('Проверьте почту — отправили ссылку для входа')
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg)', fontFamily: 'var(--sans)' }}>
      <div style={{ width: 380, padding: 40, border: '1px solid var(--line)', background: 'var(--paper)' }}>
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <div style={{ fontFamily: 'var(--serif)', fontWeight: 400, fontStyle: 'italic', fontSize: 48, letterSpacing: '-0.04em', color: 'var(--ink)', lineHeight: 1 }}>ЗОРКО</div>
          <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.3em', textTransform: 'uppercase', color: 'var(--muted)', marginTop: 8 }}>острое зрение для бизнеса</div>
        </div>

        <button onClick={handleGoogle}
          style={{ width: '100%', padding: '12px 16px', border: '1px solid var(--ink)', background: 'var(--ink)', color: 'var(--paper)', fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '.12em', textTransform: 'uppercase', cursor: 'pointer', marginBottom: 20 }}>
          Войти через Google →
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
          <div style={{ flex: 1, height: 1, background: 'var(--line)' }} />
          <span style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--muted-2)', letterSpacing: '.1em' }}>ИЛИ</span>
          <div style={{ flex: 1, height: 1, background: 'var(--line)' }} />
        </div>

        <form onSubmit={handleEmail} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <input
            type="email" value={email} onChange={e => setEmail(e.target.value)}
            placeholder="email@example.com" required
            style={{ padding: '10px 12px', border: '1px solid var(--line)', background: 'var(--bg)', fontFamily: 'var(--sans)', fontSize: 14, color: 'var(--ink)', outline: 'none' }}
          />
          <button type="submit" disabled={loading}
            style={{ padding: '10px 16px', border: '1px solid var(--line)', background: 'transparent', color: 'var(--ink)', fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.12em', textTransform: 'uppercase', cursor: 'pointer', opacity: loading ? 0.6 : 1 }}>
            {loading ? 'Отправляю...' : mode === 'login' ? 'Войти по ссылке →' : 'Зарегистрироваться →'}
          </button>
        </form>

        {msg && (
          <div style={{ marginTop: 16, padding: '10px 12px', background: 'rgba(47,61,42,0.06)', border: '1px solid var(--moss)', fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--moss)', lineHeight: 1.5 }}>{msg}</div>
        )}

        <div style={{ marginTop: 20, textAlign: 'center' }}>
          <button onClick={() => setMode(m => m === 'login' ? 'register' : 'login')}
            style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--muted)', background: 'none', border: 'none', cursor: 'pointer' }}>
            {mode === 'login' ? 'Нет аккаунта? Зарегистрироваться' : 'Уже есть аккаунт? Войти'}
          </button>
        </div>
      </div>
    </div>
  )
}
