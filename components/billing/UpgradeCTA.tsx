'use client'
import { useState } from 'react'
import { UpgradeModal } from './UpgradeModal'

interface Props {
  tier: 'free' | 'trial' | 'pro'
  daysLeftInTrial?: number | null
}

export function UpgradeCTA({ tier, daysLeftInTrial }: Props) {
  const [showModal, setShowModal] = useState(false)

  if (tier === 'pro') {
    return (
      <span style={{
        fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '.2em',
        textTransform: 'uppercase', padding: '3px 8px',
        background: 'var(--moss)', color: 'var(--paper)',
      }}>PRO</span>
    )
  }

  const label = tier === 'trial'
    ? `Пробный${daysLeftInTrial != null ? ` · ${daysLeftInTrial}д` : ''}`
    : 'Upgrade'

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        style={{
          fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '.14em',
          textTransform: 'uppercase', padding: '4px 10px',
          background: 'var(--signal)', color: 'var(--paper)',
          border: 'none', cursor: 'pointer',
        }}
      >
        {label} →
      </button>

      {showModal && (
        <UpgradeModal
          onClose={() => setShowModal(false)}
          reason={tier === 'trial' ? 'paywall' : 'paywall'}
        />
      )}
    </>
  )
}
