import './connectors/weather'
import './connectors/reviews'
import './connectors/mock'
import { registry } from './connectors/base'
import { runAIPipeline } from './ai/pipeline'
import { getAdmin } from '../lib/supabase/admin'

const INTERVAL_MS = 30 * 60 * 1000 // 30 min

async function getAllTenants() {
  const supabase = getAdmin()
  const { data, error } = await supabase.from('tenants').select('id, name, city, timezone')
  if (error) { console.error('[Scheduler] Failed to fetch tenants:', error); return [] }
  return data ?? []
}

async function getConnectors(tenantId: string) {
  const supabase = getAdmin()
  const { data } = await supabase.from('connectors').select('*').eq('tenant_id', tenantId).eq('enabled', true)
  return (data ?? []) as Array<{ id: string; type: string; config: Record<string, string> }>
}

async function upsertMetrics(tenantId: string, pos: Record<string, unknown>) {
  const supabase = getAdmin()
  const now = new Date().toISOString()
  const isMock = Boolean(pos.isMock ?? true)
  type MetricRow = { tenant_id: string; key: string; value: unknown; unit: string; delta: string; direction: string; shape: string; note: string; is_mock: boolean; recorded_at: string }
  const rows: MetricRow[] = [
    { tenant_id: tenantId, key: 'revenue_day', value: pos.revenue_day, unit: '₽', delta: '+12.4%', direction: 'up', shape: 'wave', note: 'Данные из кассы', is_mock: isMock, recorded_at: now },
    { tenant_id: tenantId, key: 'avg_check', value: pos.avg_check, unit: '₽', delta: '+14 ₽', direction: 'up', shape: 'steps', note: '', is_mock: isMock, recorded_at: now },
    { tenant_id: tenantId, key: 'receipts', value: pos.receipts, unit: 'шт.', delta: '-3%', direction: 'down', shape: 'wave', note: '', is_mock: isMock, recorded_at: now },
    { tenant_id: tenantId, key: 'margin', value: pos.margin_pct, unit: '%', delta: '+1.1 пп', direction: 'up', shape: 'steps', note: '', is_mock: isMock, recorded_at: now },
  ]
  await (supabase.from('metrics') as ReturnType<typeof supabase.from>).insert(rows)
}

async function processTenant(tenant: { id: string; name: string; city: string }) {
  console.log(`[Scheduler] Processing tenant: ${tenant.name} (${tenant.id})`)
  const connectors = await getConnectors(tenant.id)
  const bundle: Record<string, unknown> = { tenant }

  for (const conn of connectors) {
    const def = registry.get(conn.type)
    if (!def) continue
    try {
      const result = await def.fetch(conn.config ?? {}, tenant.city ?? 'Москва')
      bundle[conn.type] = result.raw
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      await (getAdmin().from('connectors') as any).update({ last_synced_at: new Date().toISOString(), error: null }).eq('id', conn.id)
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err)
      console.error('[Scheduler] Connector failed:', conn.type, msg)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      await (getAdmin().from('connectors') as any).update({ error: msg }).eq('id', conn.id)
    }
  }

  // Always run mock POS if no real POS connector
  if (!bundle.pos) {
    const mockPos = registry.get('pos_mock')
    if (mockPos) {
      const r = await mockPos.fetch({}, tenant.city)
      bundle.pos = r.raw
    }
  }

  if (bundle.pos) await upsertMetrics(tenant.id, bundle.pos as Record<string, unknown>)

  await runAIPipeline({ tenant, ...bundle } as Parameters<typeof runAIPipeline>[0], getAdmin())
}

async function runCycle() {
  console.log('[Scheduler] Starting sync cycle', new Date().toISOString())
  const tenants = await getAllTenants()
  await Promise.allSettled(tenants.map(processTenant))
  console.log('[Scheduler] Cycle complete')
}

console.log('[ЗОРКО Worker] Starting...')
runCycle().catch(console.error)
setInterval(() => { runCycle().catch(console.error) }, INTERVAL_MS)
