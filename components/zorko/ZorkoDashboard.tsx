'use client'
import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { TodayView } from './TodayView'
import { PulseView } from './PulseView'
import { WhispersView } from './WhispersView'
import { ForecastView } from './ForecastView'
import { UpgradeCTA } from '@/components/billing/UpgradeCTA'
import type { DashboardData, Whisper } from '@/lib/types'

const TABS = [
  { k: 'today',    n: '01', l: 'Сегодня' },
  { k: 'pulse',    n: '02', l: 'Пульс' },
  { k: 'whispers', n: '03', l: 'Шёпоты' },
  { k: 'forecast', n: '04', l: 'Прогноз' },
] as const

type Tab = typeof TABS[number]['k']

interface DashboardProps {
  initial: DashboardData
  tier?: 'free' | 'trial' | 'pro'
  daysLeftInTrial?: number | null
}

export function ZorkoDashboard({ initial, tier = 'free', daysLeftInTrial }: DashboardProps) {
  const [tab, setTab] = useState<Tab>('today')
  const [data, setData] = useState(initial)
  const [now, setNow] = useState<Date | null>(null)

  useEffect(() => {
    setNow(new Date())
    const t = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(t)
  }, [])

  const handleFocusAction = useCallback(async (id: string, action: 'accept' | 'skip') => {
    await fetch('/api/focus', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id, action }) })
    setData(d => ({ ...d, focus: null }))
  }, [])

  const handleWhisperDismiss = useCallback(async (id: string, dismissed: boolean) => {
    await fetch('/api/whispers', { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id, dismissed }) })
    setData(d => ({ ...d, whispers: d.whispers.map((w: Whisper) => w.id === id ? { ...w, dismissed } : w) }))
  }, [])

  const time = now ? now.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit', second: '2-digit' }) : '--:--:--'
  const date = now ? now.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', weekday: 'long' }) : ''

  return (
    <div style={{ position: 'relative', zIndex: 2, height: '100%', display: 'flex', flexDirection: 'column', minHeight: 0 }}>
      {/* TOP STRIP */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 24, padding: '14px 32px', borderBottom: '1px solid var(--line)', fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '.04em', textTransform: 'uppercase', color: 'var(--ink-2)', background: 'rgba(251,248,241,0.5)' }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
          <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--signal)', boxShadow: '0 0 0 4px rgba(217,65,14,0.18)', animation: 'pulse-dot 1.8s infinite ease-in-out', display: 'inline-block' }} />
          В эфире
        </span>
        <span style={{ width: 1, height: 14, background: 'var(--line)', display: 'inline-block' }} />
        <span>{date}</span>
        <span style={{ width: 1, height: 14, background: 'var(--line)', display: 'inline-block' }} />
        <span>острое зрение · для бизнеса</span>
        <span style={{ flex: 1 }} />
        <span style={{ color: 'var(--muted)' }}>v 1.0 · контур: продакшн</span>
      </div>

      {/* MASTHEAD */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'end', padding: '28px 32px 24px', borderBottom: '2px solid var(--ink)', background: 'var(--bg)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6, fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--muted)' }}>
          <span>Острое зрение</span>
          <span>для малого бизнеса</span>
          <span>выпуск №<b style={{ color: 'var(--ink)', fontWeight: 500 }}>284</b></span>
        </div>
        <div style={{ fontFamily: 'var(--serif)', fontWeight: 400, fontStyle: 'italic', fontSize: 64, lineHeight: 0.9, letterSpacing: '-0.04em', textAlign: 'center', color: 'var(--ink)', position: 'relative' }}>
          <span>ЗОР</span>
          <span style={{ display: 'inline-block', position: 'relative' }}>
            К
            <span style={{ position: 'absolute', inset: '14% 14% 14% 14%', border: '1.5px solid var(--signal)', borderRadius: '50%', boxShadow: 'inset 0 0 0 2px var(--bg)' }} />
          </span>
          <span>О</span>
          <span style={{ display: 'block', fontFamily: 'var(--sans)', fontStyle: 'normal', fontWeight: 400, fontSize: 11, letterSpacing: '.4em', textTransform: 'uppercase', color: 'var(--muted)', marginTop: 8 }}>— а что я мог не заметить?</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6, fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--muted)', textAlign: 'right', alignItems: 'flex-end' }}>
          <span>смена № <b style={{ color: 'var(--ink)', fontWeight: 500 }}>1284</b></span>
          <span>линза 50 мм · f/1.4</span>
          <span>экспозиция · 12 ч 04 мин</span>
        </div>
      </div>

      {/* NAV */}
      <div style={{ display: 'flex', alignItems: 'stretch', borderBottom: '1px solid var(--line)', background: 'var(--bg)' }}>
        {TABS.map(t => (
          <button key={t.k} onClick={() => setTab(t.k)}
            style={{ flex: 1, padding: '14px 18px', background: tab === t.k ? 'var(--paper)' : 'transparent', border: 'none', borderRight: '1px solid var(--line)', fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '.12em', textTransform: 'uppercase', color: tab === t.k ? 'var(--ink)' : 'var(--muted)', cursor: 'pointer', textAlign: 'left', display: 'flex', alignItems: 'center', gap: 10, position: 'relative' }}>
            {tab === t.k && <span style={{ position: 'absolute', left: 0, top: 0, width: '100%', height: 2, background: 'var(--signal)' }} />}
            <span style={{ color: tab === t.k ? 'var(--signal)' : 'var(--muted-2)', fontSize: 10 }}>{t.n}</span>
            <span>{t.l}</span>
            {tab === t.k && <span style={{ marginLeft: 'auto', color: 'var(--signal)' }}>●</span>}
          </button>
        ))}
        <div style={{ marginLeft: 'auto', padding: '14px 24px', fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '.08em', color: 'var(--muted)', borderLeft: '1px solid var(--line)', display: 'flex', alignItems: 'center', gap: 10 }}>
          <span>{time}</span>
          <span style={{ color: 'var(--signal)' }}>●</span>
          <span>фокус активен</span>
          <span style={{ width: 1, height: 14, background: 'var(--line)', display: 'inline-block' }} />
          <UpgradeCTA tier={tier} daysLeftInTrial={daysLeftInTrial} />
          <span style={{ width: 1, height: 14, background: 'var(--line)', display: 'inline-block' }} />
          <Link href="/settings" style={{ color: 'var(--muted)', textDecoration: 'none', letterSpacing: '.12em' }}>⚙ настройки</Link>
        </div>
      </div>

      {/* STAGE */}
      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr', position: 'relative', overflow: 'hidden', minHeight: 0 }}>
        {tab === 'today' && (
          <div style={{ height: '100%', minHeight: 0, animation: 'viewIn 0.25s ease' }}>
            <TodayView brief={data.brief} focus={data.focus} whispers={data.whispers} onFocusAction={handleFocusAction} onWhisperDismiss={handleWhisperDismiss} />
          </div>
        )}
        {tab === 'pulse' && (
          <div style={{ height: '100%', animation: 'viewIn 0.25s ease' }}>
            <PulseView metrics={data.metrics} />
          </div>
        )}
        {tab === 'whispers' && (
          <div style={{ height: '100%', animation: 'viewIn 0.25s ease' }}>
            <WhispersView whispers={data.whispers} onDismiss={handleWhisperDismiss} />
          </div>
        )}
        {tab === 'forecast' && (
          <div style={{ height: '100%', animation: 'viewIn 0.25s ease' }}>
            <ForecastView days={data.forecast} events={data.events} />
          </div>
        )}
      </div>

      {/* FOOT BAR */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 18, padding: '10px 32px', borderTop: '1px solid var(--line)', background: 'var(--paper)', fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--muted)' }}>
        {[
          ['пульс', '72'],
          ['маржа', '62%'],
          ['очередь', '1:42'],
        ].map(([k, v]) => (
          <span key={k} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            {k} <b style={{ color: 'var(--ink)', fontWeight: 500 }}>{v}</b>
          </span>
        ))}
        <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          молоко <b style={{ color: 'var(--signal)', fontWeight: 500 }}>4 дня</b>
        </span>
        <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>смена · Лена</span>
        <span style={{ marginLeft: 'auto', display: 'flex', gap: 18 }}>
          <span>⌘ J — шепни мне</span>
          <span style={{ color: 'var(--signal)' }}>● связь</span>
        </span>
      </div>
    </div>
  )
}
