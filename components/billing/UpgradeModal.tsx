'use client'
import { useState } from 'react'

interface Props {
  onClose: () => void
  reason?: 'connector_limit' | 'paywall' | 'brief_limit'
}

const REASON_MESSAGES: Record<string, string> = {
  connector_limit: 'Бесплатный план — только 1 источник данных. Подключите больше с Pro.',
  brief_limit: 'Исчерпан лимит брифов на неделе. Pro даёт ежедневный AI-бриф.',
  paywall: 'Пробный период завершён. Перейдите на Pro, чтобы продолжить.',
}

export function UpgradeModal({ onClose, reason = 'paywall' }: Props) {
  const [loading, setLoading] = useState(false)

  const handleUpgrade = async () => {
    setLoading(true)
    const res = await fetch('/api/stripe/checkout', { method: 'POST' })
    const data = await res.json()
    if (data.url) {
      window.location.href = data.url
    } else {
      setLoading(false)
    }
  }

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 200,
      background: 'rgba(20,18,16,0.7)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: 24,
    }} onClick={onClose}>
      <div
        onClick={e => e.stopPropagation()}
        style={{
          width: '100%', maxWidth: 480,
          background: 'var(--paper)',
          border: '1px solid var(--ink)',
          padding: '40px 40px 32px',
          position: 'relative',
        }}
      >
        {/* Close */}
        <button
          onClick={onClose}
          style={{ position: 'absolute', top: 16, right: 16, background: 'none', border: 'none', fontFamily: 'var(--mono)', fontSize: 18, color: 'var(--muted)', cursor: 'pointer', lineHeight: 1 }}
        >×</button>

        {/* Logo */}
        <div style={{ fontFamily: 'var(--serif)', fontWeight: 400, fontStyle: 'italic', fontSize: 36, letterSpacing: '-0.04em', color: 'var(--ink)', lineHeight: 1, marginBottom: 8 }}>ЗОРКО</div>
        <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.3em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 28 }}>
          {REASON_MESSAGES[reason]}
        </div>

        {/* Plan card */}
        <div style={{ border: '2px solid var(--signal)', padding: '24px 24px 20px', marginBottom: 24, position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'var(--signal)' }} />
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 16 }}>
            <span style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 42, fontWeight: 400, color: 'var(--ink)', lineHeight: 1 }}>$19</span>
            <span style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '.08em', color: 'var(--muted)' }}>/мес</span>
            <span style={{ marginLeft: 'auto', fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.12em', textTransform: 'uppercase', background: 'var(--signal)', color: 'var(--paper)', padding: '3px 8px' }}>PRO</span>
          </div>

          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 9 }}>
            {[
              'Неограниченные источники данных',
              'Ежедневный AI-бриф',
              'Шёпоты и фокус дня',
              'Прогнозы и аналитика',
              '7 дней бесплатно при первом подключении',
            ].map(item => (
              <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontFamily: 'var(--sans)', fontSize: 13, color: 'var(--ink-2)', lineHeight: 1.4 }}>
                <span style={{ color: 'var(--signal)', fontFamily: 'var(--mono)', marginTop: 1 }}>→</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <button
          onClick={handleUpgrade}
          disabled={loading}
          style={{
            width: '100%',
            padding: '14px 20px',
            background: loading ? 'var(--muted-2)' : 'var(--ink)',
            color: 'var(--paper)',
            border: 'none',
            fontFamily: 'var(--mono)',
            fontSize: 12,
            letterSpacing: '.16em',
            textTransform: 'uppercase',
            cursor: loading ? 'not-allowed' : 'pointer',
            marginBottom: 12,
          }}
        >
          {loading ? 'Открываю Stripe...' : 'Начать пробный период →'}
        </button>

        <div style={{ textAlign: 'center', fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--muted-2)', letterSpacing: '.06em' }}>
          7 дней бесплатно · отмена в любой момент · без скрытых платежей
        </div>
      </div>
    </div>
  )
}
