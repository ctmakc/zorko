'use client'
import { useState } from 'react'

interface Props {
  tier: 'free' | 'trial' | 'pro'
  hasCustomer: boolean
}

export function PricingClient({ tier, hasCustomer }: Props) {
  const [loading, setLoading] = useState(false)

  const handleCheckout = async () => {
    setLoading(true)
    const res = await fetch('/api/stripe/checkout', { method: 'POST' })
    const data = await res.json()
    if (data.url) window.location.href = data.url
    else setLoading(false)
  }

  const handlePortal = async () => {
    setLoading(true)
    const res = await fetch('/api/stripe/portal', { method: 'POST' })
    const data = await res.json()
    if (data.url) window.location.href = data.url
    else setLoading(false)
  }

  if (tier === 'pro') {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        <div style={{ padding: '12px 16px', border: '1px solid var(--moss)', background: 'rgba(47,61,42,0.06)', fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--moss)' }}>
          ✓ Pro — активен
        </div>
        <button
          onClick={handlePortal}
          disabled={loading}
          style={{ padding: '11px 20px', background: 'transparent', color: 'var(--ink)', border: '1px solid var(--ink)', fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', cursor: loading ? 'not-allowed' : 'pointer', opacity: loading ? 0.6 : 1 }}
        >
          {loading ? 'Открываю портал...' : 'Управление подпиской →'}
        </button>
      </div>
    )
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      <button
        onClick={handleCheckout}
        disabled={loading}
        style={{ padding: '14px 20px', background: loading ? 'var(--muted-2)' : 'var(--ink)', color: 'var(--paper)', border: 'none', fontFamily: 'var(--mono)', fontSize: 12, letterSpacing: '.16em', textTransform: 'uppercase', cursor: loading ? 'not-allowed' : 'pointer' }}
      >
        {loading ? 'Открываю Stripe...' : tier === 'trial' ? 'Продолжить с Pro →' : 'Начать пробный период →'}
      </button>
      <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.06em', color: 'var(--muted-2)', textAlign: 'center' }}>
        7 дней бесплатно · отмена в любой момент
      </div>
    </div>
  )
}
