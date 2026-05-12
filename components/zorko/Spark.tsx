'use client'
import { useMemo } from 'react'

interface SparkProps { shape?: 'wave' | 'steps' | 'flat'; hot?: boolean }

export function Spark({ shape = 'wave', hot = false }: SparkProps) {
  const pts = useMemo(() => {
    const n = 32
    return Array.from({ length: n }, (_, i) => {
      let y: number
      if (shape === 'wave') y = 30 + Math.sin(i / 2.4) * 12 + Math.sin(i / 0.8) * 4 + i * 0.3
      else if (shape === 'steps') y = 50 - Math.floor(i / 4) * 4 + (i % 4 === 0 ? 2 : 0)
      else y = 32 + (i % 2 === 0 ? 0 : 1)
      return [i * (200 / (n - 1)), Math.max(8, Math.min(56, y))]
    })
  }, [shape])

  const d = pts.map((p, i) => `${i === 0 ? 'M' : 'L'}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(' ')
  const last = pts[pts.length - 1]
  const color = hot ? '#d9410e' : '#141210'

  return (
    <svg viewBox="0 0 200 60" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
      <path d={d} fill="none" stroke={color} strokeWidth="1.2" />
      <circle cx={last[0]} cy={last[1]} r="2.5" fill={color} />
    </svg>
  )
}
