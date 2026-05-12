export type Sev = 'warn' | 'good' | 'idea'
export type Direction = 'up' | 'down' | 'flat'
export type FocusStatus = 'active' | 'accepted' | 'skipped'
export type ConnectorType = 'weather' | 'reviews' | 'pos' | 'inventory' | 'telegram' | 'calendar' | 'events' | 'maps'

export interface Tenant {
  id: string
  name: string
  city: string
  timezone: string
  created_at: string
}

export interface Whisper {
  id: string
  tenant_id: string
  src: string
  msg: string
  meta: string
  sev: Sev
  dismissed: boolean
  is_mock: boolean
  created_at: string
}

export interface Metric {
  id: string
  tenant_id: string
  key: string
  value: number
  unit: string
  delta: string
  direction: Direction
  note: string
  shape: 'wave' | 'steps' | 'flat'
  is_mock: boolean
  recorded_at: string
}

export interface ForecastDay {
  id: string
  tenant_id: string
  date: string
  hourly_bars: number[]
  summary: string
  is_hot: boolean
  is_today: boolean
  is_mock: boolean
}

export interface Event {
  id: string
  tenant_id: string
  when_label: string
  what: string
  impact: string
  is_warning: boolean
  event_at: string
  is_mock: boolean
}

export interface FocusMeta {
  k: string
  v: string
}

export interface FocusCard {
  id: string
  tenant_id: string
  tag: string
  title: string
  body: string
  meta: FocusMeta[]
  status: FocusStatus
  is_mock: boolean
  created_at: string
}

export interface Brief {
  id: string
  tenant_id: string
  content: string
  headline: string
  is_mock: boolean
  created_at: string
}

export interface Connector {
  id: string
  tenant_id: string
  type: ConnectorType
  config: Record<string, string>
  enabled: boolean
  last_synced_at: string | null
  error: string | null
}

export interface DashboardData {
  brief: Brief | null
  focus: FocusCard | null
  whispers: Whisper[]
  metrics: Metric[]
  forecast: ForecastDay[]
  events: Event[]
}
