'use client'
import type { Whisper } from '@/lib/types'

interface WhispersViewProps {
  whispers: Whisper[]
  onDismiss: (id: string, dismissed: boolean) => void
}

export function WhispersView({ whispers, onDismiss }: WhispersViewProps) {
  const grouped = {
    warn: whispers.filter(w => w.sev === 'warn'),
    idea: whispers.filter(w => w.sev === 'idea'),
    good: whispers.filter(w => w.sev === 'good'),
  }
  const labels = { warn: 'Риски', idea: 'Идеи', good: 'Рост' }
  const colors = { warn: 'var(--signal)', idea: 'var(--ink)', good: 'var(--moss)' }

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', height: '100%' }}>
      {(['warn', 'idea', 'good'] as const).map((k, col) => (
        <div key={k} style={{ borderRight: col < 2 ? '1px solid var(--line)' : 'none', padding: 24, overflow: 'auto', display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--muted)', paddingBottom: 8, borderBottom: '1px dashed var(--line)' }}>
            <span style={{ color: 'var(--ink)', fontWeight: 500 }}>{String(col + 1).padStart(2, '0')}</span>
            {labels[k]}
            <span style={{ flex: 1 }} />
            <span>{grouped[k].length}</span>
          </div>
          {grouped[k].map((w, i) => (
            <div key={w.id} style={{ border: '1px solid var(--line)', background: 'var(--paper)', padding: 18, display: 'flex', flexDirection: 'column', gap: 12, opacity: w.dismissed ? 0.4 : 1, cursor: 'pointer' }}>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.16em', textTransform: 'uppercase', color: colors[k] }}>
                {w.src} · {String(i + 1).padStart(2, '0')}
              </div>
              <h4 style={{ fontFamily: 'var(--serif)', fontWeight: 400, fontSize: 20, lineHeight: 1.2 }}>{w.msg}</h4>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--muted)', paddingTop: 10, borderTop: '1px dashed var(--line)' }}>
                <span>{w.meta}</span>
                <span style={{ display: 'flex', gap: 6 }}>
                  <button onClick={() => onDismiss(w.id, !w.dismissed)}
                    style={{ border: '1px solid var(--line)', background: 'transparent', color: 'var(--muted)', padding: '6px 10px', cursor: 'pointer', fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.1em', textTransform: 'uppercase' }}>
                    {w.dismissed ? 'Вернуть' : 'Отложить'}
                  </button>
                  <button style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '6px 10px', border: '1px solid var(--ink)', background: 'var(--ink)', color: 'var(--paper)', fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.1em', textTransform: 'uppercase', cursor: 'pointer' }}>
                    В план →
                  </button>
                </span>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
