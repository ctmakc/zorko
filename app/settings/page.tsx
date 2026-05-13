'use client'
import { useEffect, useState, useCallback } from 'react'
import { ConnectorCard } from '@/components/settings/ConnectorCard'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

interface ConnectorDef {
  type: string; label: string; desc: string; ready: boolean
  fields: { key: string; label: string; placeholder: string; required: boolean }[]
  connector: null | { id: string; enabled: boolean; config: Record<string, string>; last_synced_at: string | null; error: string | null }
}

export default function SettingsPage() {
  const [defs, setDefs] = useState<ConnectorDef[]>([])
  const router = useRouter()

  const handleLogout = useCallback(async () => {
    await fetch('/api/auth/logout', { method: 'POST' })
    router.push('/login')
  }, [router])

  const reload = useCallback(async () => {
    const r = await fetch('/api/connectors')
    if (r.ok) setDefs(await r.json())
  }, [])

  useEffect(() => { reload() }, [reload])

  const enabledCount = defs.filter(d => d.connector?.enabled).length

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', fontFamily: 'var(--sans)' }}>
      {/* Header */}
      <div style={{ borderBottom: '2px solid var(--ink)', padding: '28px 32px 24px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', background: 'var(--bg)' }}>
        <div>
          <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 8 }}>ЗОРКО · Настройки</div>
          <h1 style={{ fontFamily: 'var(--serif)', fontWeight: 400, fontStyle: 'italic', fontSize: 40, lineHeight: 1, letterSpacing: '-0.02em', color: 'var(--ink)' }}>Источники данных</h1>
          <p style={{ fontFamily: 'var(--sans)', fontSize: 13, color: 'var(--muted)', marginTop: 8 }}>Подключите реальные данные — ЗОРКО заменит демо на ваши</p>
        </div>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <Link href="/" style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--muted)', textDecoration: 'none', padding: '8px 14px', border: '1px solid var(--line)' }}>
            ← Дашборд
          </Link>
          <button onClick={handleLogout}
            style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--muted)', background: 'none', padding: '8px 14px', border: '1px solid var(--line)', cursor: 'pointer' }}>
            Выйти →
          </button>
        </div>
      </div>

      <div style={{ maxWidth: 720, margin: '0 auto', padding: '32px 24px' }}>
        <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 20, display: 'flex', gap: 24 }}>
          <span>Коннекторов активно: <b style={{ color: 'var(--ink)' }}>{enabledCount}</b></span>
          <span>Доступно: <b style={{ color: 'var(--ink)' }}>{defs.filter(d => d.ready).length}</b></span>
          <span>Скоро: <b style={{ color: 'var(--ink)' }}>{defs.filter(d => !d.ready).length}</b></span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 1, border: '1px solid var(--line)' }}>
          {defs.map(def => (
            <ConnectorCard key={def.type} def={def} onSave={reload} />
          ))}
        </div>

        <div style={{ marginTop: 32, padding: 20, border: '1px solid var(--line)', background: 'var(--paper)', fontFamily: 'var(--mono)', fontSize: 11, lineHeight: 1.7, color: 'var(--muted)' }}>
          <div style={{ color: 'var(--ink)', fontWeight: 500, marginBottom: 8 }}>Как это работает</div>
          <div>1. Подключите источники — ЗОРКО начнёт собирать реальные данные каждые 30 минут</div>
          <div>2. AI анализирует данные и генерирует шёпоты, бриф и фокус дня</div>
          <div>3. Без подключения — работают демо-данные, чтобы вы видели ценность продукта</div>
        </div>
      </div>
    </div>
  )
}
