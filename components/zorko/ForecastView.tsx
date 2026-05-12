'use client'
import { useState } from 'react'
import type { ForecastDay, Event } from '@/lib/types'

interface ForecastViewProps { days: ForecastDay[]; events: Event[] }

export function ForecastView({ days, events }: ForecastViewProps) {
  const [active, setActive] = useState(0)

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', height: '100%' }}>
      <div style={{ borderRight: '1px solid var(--line)', padding: 24, display: 'flex', flexDirection: 'column', gap: 14, background: 'var(--paper)' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--muted)', paddingBottom: 8, borderBottom: '1px dashed var(--line)' }}>
          <span style={{ color: 'var(--ink)', fontWeight: 500 }}>04</span> Прогноз · 7 дней
        </div>
        <h3 style={{ fontFamily: 'var(--serif)', fontSize: 24, lineHeight: 1.1, fontWeight: 400 }}>Неделя, как её увидит линза.</h3>
        <p style={{ fontSize: 13, color: 'var(--ink-2)', lineHeight: 1.5 }}>Модель смотрит на погоду, афишу, ваши прошлые недели и шёпоты, которые вы приняли. Каждый столбик — час. Высота — ожидаемый поток.</p>
        <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.5 }}>Доверие: <b style={{ color: 'var(--ink)' }}>0.81</b> на 3 дня, 0.62 на 7 дней. Модель учится — добавьте календарь поставщиков для +0.09.</p>
        <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 8, fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--muted)' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}><i style={{ width: 14, height: 6, display: 'inline-block', background: '#141210' }} />обычный час</span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}><i style={{ width: 14, height: 6, display: 'inline-block', background: '#d9410e' }} />горячий час</span>
        </div>
      </div>

      <div style={{ padding: '24px 28px', display: 'flex', flexDirection: 'column', gap: 18, overflow: 'auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7,1fr)', gap: 8, flex: 1, minHeight: 300 }}>
          {days.map((d, i) => {
            const max = Math.max(...d.hourly_bars)
            const isActive = active === i
            return (
              <div key={d.id} onClick={() => setActive(i)}
                style={{ border: `1px solid ${isActive ? 'var(--signal)' : 'var(--line)'}`, background: d.is_today ? 'var(--ink)' : 'var(--bg)', padding: 12, display: 'flex', flexDirection: 'column', gap: 8, position: 'relative', overflow: 'hidden', cursor: 'pointer', boxShadow: isActive ? '0 12px 24px -16px rgba(217,65,14,0.4)' : 'none' }}>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.14em', textTransform: 'uppercase', color: d.is_today ? 'rgba(251,248,241,0.7)' : 'var(--muted)' }}>
                  {new Date(d.date + 'T12:00:00').toLocaleDateString('ru-RU', { weekday: 'short' }).toUpperCase()}{d.is_today ? ' · сегодня' : ''}
                </div>
                <div style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 28, lineHeight: 1, letterSpacing: '-0.02em', color: d.is_today ? 'var(--paper)' : 'var(--ink)' }}>
                  {new Date(d.date + 'T12:00:00').getDate()}
                </div>
                <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'flex-end', gap: 2, height: 120 }}>
                  {d.hourly_bars.map((b, j) => (
                    <i key={j} style={{ flex: 1, background: d.is_today ? (d.is_hot && b > max * 0.75 ? 'var(--signal-2)' : 'var(--paper)') : (d.is_hot && b > max * 0.75 ? 'var(--signal)' : 'var(--ink)'), minHeight: 4, height: `${(b / max) * 100}%`, display: 'block' }} />
                  ))}
                </div>
                <div style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 13, lineHeight: 1.3, color: d.is_today ? 'rgba(251,248,241,0.7)' : 'var(--ink-2)' }}>{d.summary}</div>
              </div>
            )
          })}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 0, borderTop: '1px solid var(--line)', paddingTop: 18 }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--muted)', paddingBottom: 8, borderBottom: '1px dashed var(--line)', marginBottom: 6 }}>
            <span style={{ color: 'var(--ink)', fontWeight: 500 }}>05</span> События недели
            <span style={{ flex: 1 }} /><span>{events.length}</span>
          </div>
          {events.map((e, i) => (
            <div key={e.id} style={{ display: 'grid', gridTemplateColumns: '90px 1fr auto', gap: 18, padding: '12px 0', borderBottom: i < events.length - 1 ? '1px dashed var(--line)' : 'none', alignItems: 'baseline' }}>
              <span style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--muted)' }}>{e.when_label}</span>
              <span style={{ fontFamily: 'var(--serif)', fontSize: 18, lineHeight: 1.2, letterSpacing: '-0.005em' }}>{e.what}</span>
              <span style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '.08em', textTransform: 'uppercase', color: e.is_warning ? 'var(--signal)' : 'var(--moss)' }}>{e.impact}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
