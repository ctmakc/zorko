'use client'
import { Spark } from './Spark'
import { Heartbeat } from './Heartbeat'
import type { Metric } from '@/lib/types'

const DISPLAY_KEYS: Record<string, string> = {
  revenue_day: 'Выручка день', avg_check: 'Средний чек', receipts: 'Чеки',
  returns: 'Возвраты', rating: 'Рейтинг', queue_min: 'Очередь·мин',
  margin: 'Маржа', nps: 'NPS·гость',
}

function fmt(m: Metric) {
  if (m.key === 'revenue_day') return m.value.toLocaleString('ru-RU')
  if (m.key === 'queue_min') {
    const mins = Math.floor(m.value); const secs = Math.round((m.value - mins) * 60)
    return `${mins}:${String(secs).padStart(2, '0')}`
  }
  return String(m.value)
}

export function PulseView({ metrics }: { metrics: Metric[] }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gridAutoRows: 'minmax(180px,auto)', height: '100%', overflow: 'auto' }}>
      {/* Heartbeat cell */}
      <div style={{ gridColumn: 'span 2', gridRow: 'span 2', borderRight: '1px solid var(--line)', borderBottom: '1px solid var(--line)', padding: 18, display: 'flex', flexDirection: 'column', gap: 10, background: 'var(--bg)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--muted)' }}>
          <span>I · ПУЛЬС · ЧАСТОТА СЕРДЦА БИЗНЕСА</span>
          <b style={{ color: 'var(--ink)', fontWeight: 500 }}>сейчас</b>
        </div>
        <div style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 300, fontSize: 96, lineHeight: 1, letterSpacing: '-0.03em', color: 'var(--ink)' }}>
          72<small style={{ fontSize: 14, fontStyle: 'normal', fontFamily: 'var(--mono)', color: 'var(--muted)', marginLeft: 6 }}>уд/мин</small>
        </div>
        <div style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '.06em', color: 'var(--moss)' }}>в норме · стабильно 14 мин</div>
        <Heartbeat hot />
        <p style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 13, color: 'var(--ink-2)', lineHeight: 1.4, marginTop: 'auto' }}>
          Сердечный ритм — это плотность транзакций, нормированная на смену. Сейчас вы дышите ровно.
        </p>
      </div>

      {metrics.map((m, i) => (
        <div key={m.id} style={{ borderRight: (i + 1) % 2 !== 0 ? '1px solid var(--line)' : 'none', borderBottom: '1px solid var(--line)', padding: 18, display: 'flex', flexDirection: 'column', gap: 10, background: 'var(--bg)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--muted)' }}>
            <span>{String(i + 2).padStart(2, '0')} · {DISPLAY_KEYS[m.key] ?? m.key}</span>
          </div>
          <div style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 300, fontSize: 48, lineHeight: 1, letterSpacing: '-0.03em', color: 'var(--ink)' }}>
            {fmt(m)}<small style={{ fontSize: 14, fontStyle: 'normal', fontFamily: 'var(--mono)', color: 'var(--muted)', marginLeft: 6 }}>{m.unit}</small>
          </div>
          <div style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '.06em', color: m.direction === 'down' ? 'var(--signal)' : 'var(--moss)' }}>{m.delta}</div>
          <div style={{ marginTop: 'auto', height: 50 }}><Spark shape={m.shape} hot={m.direction === 'down'} /></div>
          {m.note && <p style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 13, color: 'var(--ink-2)', lineHeight: 1.4, marginTop: 'auto' }}>{m.note}</p>}
        </div>
      ))}
    </div>
  )
}
