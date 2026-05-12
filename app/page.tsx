import { ZorkoDashboard } from '@/components/zorko/ZorkoDashboard'
import { getMockBrief, getMockFocus, getMockWhispers, getMockMetrics, getMockForecast, getMockEvents } from '@/lib/mock'
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

  return (
    <main style={{ height: '100vh', position: 'relative', zIndex: 2 }}>
      <ZorkoDashboard initial={initial} />
    </main>
  )
}
