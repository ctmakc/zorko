import { ZorkoDashboard } from '@/components/zorko/ZorkoDashboard'
import { getMockBrief, getMockFocus, getMockWhispers, getMockMetrics, getMockForecast, getMockEvents } from '@/lib/mock'
import { getSubscription } from '@/lib/subscription'
import { PaywallBanner } from '@/components/billing/PaywallBanner'
import type { DashboardData } from '@/lib/types'

export default async function Home() {
  const initial: DashboardData = {
    brief: getMockBrief(),
    focus: getMockFocus(),
    whispers: getMockWhispers(),
    metrics: getMockMetrics(),
    forecast: getMockForecast(),
    events: getMockEvents(),
  }

  const sub = await getSubscription()
  const tier = sub?.tier ?? 'free'
  const trialEndsAt = sub?.trialEndsAt ?? null

  // Days left in trial
  let daysLeftInTrial: number | null = null
  if (tier === 'trial' && trialEndsAt) {
    const ms = new Date(trialEndsAt).getTime() - Date.now()
    daysLeftInTrial = Math.max(0, Math.ceil(ms / (1000 * 60 * 60 * 24)))
  }

  return (
    <main style={{ height: '100vh', position: 'relative', zIndex: 2 }}>
      <ZorkoDashboard initial={initial} tier={tier} daysLeftInTrial={daysLeftInTrial} />
      <PaywallBanner tier={tier} trialEndsAt={trialEndsAt} />
    </main>
  )
}
