'use client'

interface Signal { label: string; hot: boolean }
interface LensProps {
  value: string
  label: string
  ctx: string
  delta: string
  signals: Signal[]
}

export function Lens({ value, label, ctx, delta, signals }: LensProps) {
  const ticks = Array.from({ length: 60 }, (_, i) => {
    const angle = (i / 60) * 360
    const big = i % 5 === 0
    return (
      <line key={i}
        x1="250" y1={big ? 12 : 18} x2="250" y2={big ? 26 : 22}
        stroke={big ? '#141210' : 'rgba(20,18,16,0.4)'}
        strokeWidth={big ? 1.2 : 0.7}
        transform={`rotate(${angle} 250 250)`}
      />
    )
  })

  const points = signals.map((s, i) => {
    const angle = (i / signals.length) * 360 - 90
    const r = 215
    const x = 250 + Math.cos(angle * Math.PI / 180) * r
    const y = 250 + Math.sin(angle * Math.PI / 180) * r
    const lx = 250 + Math.cos(angle * Math.PI / 180) * (r + 22)
    const ly = 250 + Math.sin(angle * Math.PI / 180) * (r + 22)
    const cos = Math.cos(angle * Math.PI / 180)
    const anchor = cos > 0.1 ? 'start' : cos < -0.1 ? 'end' : 'middle'
    return (
      <g key={i}>
        <circle cx={x} cy={y} r={s.hot ? 5 : 3} fill={s.hot ? '#d9410e' : '#141210'} />
        <text x={lx} y={ly} textAnchor={anchor} dominantBaseline="middle"
          style={{ fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '0.14em', textTransform: 'uppercase', fill: s.hot ? '#d9410e' : '#7a7368' }}>
          {s.label}
        </text>
      </g>
    )
  })

  return (
    <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 12px', background: 'linear-gradient(180deg,rgba(251,248,241,0) 0%,rgba(251,248,241,0.6) 50%,rgba(251,248,241,0) 100%), var(--bg)', height: '100%' }}>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 18, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', padding: '0 28px', fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--muted)' }}>
        <span suppressHydrationWarning>Линза · фокус · {typeof window !== 'undefined' ? new Date().toLocaleDateString('ru-RU') : ''}</span>
        <span style={{ color: 'var(--signal)', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--signal)', boxShadow: '0 0 0 3px rgba(217,65,14,0.2)', display: 'inline-block' }} />
          Сигнал захвачен
        </span>
      </div>

      <div style={{ width: 'min(520px,92%)', aspectRatio: '1/1', position: 'relative' }}>
        <svg viewBox="0 0 500 500" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', overflow: 'visible' }}>
          <circle cx="250" cy="250" r="240" fill="none" stroke="rgba(20,18,16,0.14)" />
          <circle cx="250" cy="250" r="222" fill="none" stroke="rgba(20,18,16,0.06)" />
          <g style={{ transformOrigin: '250px 250px', animation: 'rot 240s linear infinite' }}>{ticks}</g>
          <text x="250" y="6" textAnchor="middle" style={{ fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '.14em', textTransform: 'uppercase', fill: '#141210', fontWeight: 500 }}>N</text>
          <text x="494" y="254" textAnchor="end" style={{ fontFamily: 'var(--mono)', fontSize: 9, fill: '#7a7368' }}>E</text>
          <text x="250" y="498" textAnchor="middle" style={{ fontFamily: 'var(--mono)', fontSize: 9, fill: '#7a7368' }}>S</text>
          <text x="6" y="254" style={{ fontFamily: 'var(--mono)', fontSize: 9, fill: '#7a7368' }}>W</text>
          {points}
          <circle cx="250" cy="250" r="160" fill="none" stroke="rgba(20,18,16,0.18)" strokeDasharray="2 4" />
          <line x1="60" y1="250" x2="110" y2="250" stroke="rgba(20,18,16,0.3)" />
          <line x1="390" y1="250" x2="440" y2="250" stroke="rgba(20,18,16,0.3)" />
          <line x1="250" y1="60" x2="250" y2="110" stroke="rgba(20,18,16,0.3)" />
          <line x1="250" y1="390" x2="250" y2="440" stroke="rgba(20,18,16,0.3)" />
        </svg>

        <div style={{ position: 'absolute', inset: '22%', borderRadius: '50%', background: 'radial-gradient(circle at 30% 25%,rgba(255,255,255,0.85),rgba(251,248,241,0.4) 35%,rgba(235,229,214,0.7) 75%)', boxShadow: 'inset 0 0 60px rgba(20,18,16,0.08),inset 0 -20px 40px rgba(217,65,14,0.05),0 30px 60px -30px rgba(20,18,16,0.25)', border: '1px solid rgba(20,18,16,0.1)', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: 'radial-gradient(ellipse at 25% 18%,rgba(255,255,255,0.9),transparent 30%)', mixBlendMode: 'screen', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ position: 'absolute', width: 1, height: '100%', background: 'rgba(20,18,16,0.25)' }} />
            <div style={{ position: 'absolute', width: '100%', height: 1, background: 'rgba(20,18,16,0.25)' }} />
          </div>
          <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '8% 12%' }}>
            <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 4 }}>{label}</div>
            <div style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 300, fontSize: 88, lineHeight: 0.95, letterSpacing: '-0.04em', color: 'var(--ink)' }}>{value}</div>
            <div style={{ fontFamily: 'var(--mono)', fontSize: 12, letterSpacing: '.06em', color: 'var(--signal)', marginTop: 8 }}>{delta}</div>
            <div style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 14, color: 'var(--ink-2)', marginTop: 14, maxWidth: '80%', lineHeight: 1.3 }}>«{ctx}»</div>
          </div>
        </div>
      </div>

      <div style={{ position: 'absolute', left: 0, right: 0, bottom: 18, display: 'flex', justifyContent: 'space-between', padding: '0 28px', fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--muted)' }}>
        <span>Калибровка <b style={{ color: 'var(--ink)', fontWeight: 500 }}>03.2</b> · диафрагма <b style={{ color: 'var(--ink)', fontWeight: 500 }}>f/1.4</b></span>
        <span>Сегодня · смена №<b style={{ color: 'var(--ink)', fontWeight: 500 }}>1284</b></span>
      </div>
    </div>
  )
}
