'use client'
import { useState } from 'react'
import { UpgradeModal } from './UpgradeModal'

interface Props {
  tier: 'free' | 'trial' | 'pro'
  trialEndsAt: string | null
}

export function PaywallBanner({ tier, trialEndsAt }: Props) {
  const [showModal, setShowModal] = useState(false)

  // Don't show if pro, or if still in trial
  if (tier === 'pro' || tier === 'trial') return null

  return (
    <>
      <div style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: 'var(--ink)',
        borderTop: '2px solid var(--signal)',
        padding: '14px 32px',
        display: 'flex',
        alignItems: 'center',
        gap: 20,
        fontFamily: 'var(--mono)',
      }}>
        <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--signal)', boxShadow: '0 0 0 4px rgba(217,65,14,0.3)', display: 'inline-block', flexShrink: 0 }} />
        <div style={{ flex: 1 }}>
          <span style={{ fontSize: 12, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--paper)' }}>
            Пробный период завершён
          </span>
          <span style={{ marginLeft: 16, fontSize: 11, color: 'var(--muted-2)', letterSpacing: '.04em' }}>
            Перейдите на Pro, чтобы продолжить использовать ЗОРКО без ограничений
          </span>
        </div>
        <button
          onClick={() => setShowModal(true)}
          style={{
            padding: '9px 20px',
            background: 'var(--signal)',
            color: 'var(--paper)',
            border: 'none',
            fontFamily: 'var(--mono)',
            fontSize: 11,
            letterSpacing: '.14em',
            textTransform: 'uppercase',
            cursor: 'pointer',
            flexShrink: 0,
          }}
        >
          Перейти на Pro →
        </button>
        <button
          onClick={() => window.location.href = '/pricing'}
          style={{
            padding: '9px 16px',
            background: 'transparent',
            color: 'var(--muted-2)',
            border: '1px solid rgba(255,255,255,0.15)',
            fontFamily: 'var(--mono)',
            fontSize: 11,
            letterSpacing: '.14em',
            textTransform: 'uppercase',
            cursor: 'pointer',
            flexShrink: 0,
          }}
        >
          Узнать больше
        </button>
      </div>

      {showModal && <UpgradeModal onClose={() => setShowModal(false)} />}
    </>
  )
}
