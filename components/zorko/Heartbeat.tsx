'use client'

export function Heartbeat({ hot = false }: { hot?: boolean }) {
  const d = "M0,30 L20,30 L24,30 L28,30 L32,30 L36,30 L40,30 L44,15 L48,45 L52,5 L56,50 L60,30 L80,30 L100,30 L104,30 L120,30 L124,22 L128,38 L132,30 L160,30 L180,30 L200,30"
  return (
    <svg style={{ height: 60, width: '100%', display: 'block' }} viewBox="0 0 200 60" preserveAspectRatio="none">
      <line x1="0" y1="30" x2="200" y2="30" stroke="rgba(20,18,16,0.1)" strokeDasharray="2 3" />
      <path d={d} fill="none" stroke={hot ? '#d9410e' : '#141210'} strokeWidth="1.4"
        style={{ strokeDasharray: 600, strokeDashoffset: 600, animation: 'beat 3.2s linear infinite' }} />
    </svg>
  )
}
