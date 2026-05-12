# ЗОРКО — Design Spec v1
*2026-05-12*

## Problem

Small business owners (cafes, restaurants, retail) spend 1-2 hours daily aggregating data from 5-8 separate tools. They miss signals. ЗОРКО reads all sources and surfaces only what matters as daily "whispers."

## Product

An AI-powered daily intelligence SaaS dashboard. Mock data by default; tenants connect real integrations via settings. UI design already complete (HTML/JSX prototype in `/tmp/umop/`).

---

## Architecture

**Monorepo: Next.js 15 App Router**

```
zorko/
├── app/
│   ├── (auth)/            # /login, /register
│   ├── (dashboard)/       # / — main ЗОРКО UI (4 tabs)
│   └── settings/          # /settings — connector admin panel
├── app/api/
│   ├── auth/[...nextauth]/ # Supabase Auth
│   ├── whispers/          # GET ?limit=&sev=
│   ├── pulse/             # GET — KPI snapshots
│   ├── forecast/          # GET — 7-day forecast
│   ├── focus/             # GET current, POST accept/skip
│   └── connectors/[type]/ # GET status, POST enable/disable, PUT config
├── workers/
│   ├── scheduler.ts       # Entry: cron every 30 min, runs all tenants
│   ├── connectors/
│   │   ├── base.ts        # Connector interface
│   │   ├── weather.ts     # Open-Meteo (free, no key)
│   │   ├── reviews.ts     # Google Places API
│   │   └── mock.ts        # Realistic mock generator for unconnected sources
│   └── ai/
│       └── pipeline.ts    # Gemini Flash → whispers + brief + focus
├── lib/
│   ├── supabase.ts        # Client + server + admin instances
│   ├── redis.ts           # Upstash Redis client
│   └── ai.ts              # Gemini client via cloudcode-pa OAuth
└── components/
    ├── zorko/             # Dashboard components (ported from design)
    │   ├── TodayView.tsx
    │   ├── PulseView.tsx
    │   ├── WhispersView.tsx
    │   ├── ForecastView.tsx
    │   └── Lens.tsx
    └── settings/
        └── ConnectorCard.tsx
```

---

## Data Model (Supabase + RLS)

All tables include `tenant_id uuid references auth.users(id)`. RLS policy: `tenant_id = auth.uid()`.

```sql
-- Business profile
tenants (
  id uuid primary key references auth.users(id),
  name text not null,
  city text,
  timezone text default 'Europe/Moscow',
  created_at timestamptz default now()
)

-- Connector configuration (one row per connector type per tenant)
connectors (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid references tenants(id) on delete cascade,
  type text not null,  -- 'weather' | 'reviews' | 'pos' | etc
  config jsonb,        -- stored in Supabase (encrypted at rest); no app-layer encryption in v1
  enabled boolean default false,
  last_synced_at timestamptz,
  error text,
  unique(tenant_id, type)
)

-- AI-generated insights
whispers (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid references tenants(id) on delete cascade,
  src text not null,   -- 'Погода' | 'Отзывы' | 'Касса' etc
  msg text not null,
  meta text,
  sev text not null check (sev in ('warn', 'good', 'idea')),
  dismissed boolean default false,
  is_mock boolean default true,
  created_at timestamptz default now()
)

-- KPI metrics (point-in-time snapshots)
metrics (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid references tenants(id) on delete cascade,
  key text not null,   -- 'revenue_day' | 'avg_check' | 'rating' etc
  value numeric,
  unit text,
  delta text,
  direction text check (direction in ('up', 'down', 'flat')),
  note text,
  is_mock boolean default true,
  recorded_at timestamptz default now()
)

-- 7-day forecast
forecasts (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid references tenants(id) on delete cascade,
  date date not null,
  hourly_bars integer[],   -- 12 hourly traffic values
  summary text,
  is_hot boolean default false,
  is_today boolean default false,
  is_mock boolean default true,
  created_at timestamptz default now(),
  unique(tenant_id, date)
)

-- Weekly events
events (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid references tenants(id) on delete cascade,
  when_label text,         -- 'ВТ 14:00'
  what text,
  impact text,
  is_warning boolean default false,
  event_at timestamptz,
  is_mock boolean default true
)

-- Daily focus card
focus_cards (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid references tenants(id) on delete cascade,
  tag text,
  title text not null,
  body text,
  meta jsonb,              -- [{k, v}] array
  status text default 'active' check (status in ('active', 'accepted', 'skipped')),
  is_mock boolean default true,
  created_at timestamptz default now()
)

-- Morning brief (LLM-generated summary)
briefs (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid references tenants(id) on delete cascade,
  content text not null,
  is_mock boolean default true,
  created_at timestamptz default now()
)
```

---

## Connector System

### Interface

```typescript
interface ConnectorConfig {
  [key: string]: string | number | boolean
}

interface ConnectorResult {
  raw: Record<string, unknown>
  isMock: boolean
}

interface Connector {
  type: string
  requiredFields: string[]   // config keys needed to run
  fetch(config: ConnectorConfig, tenant: Tenant): Promise<ConnectorResult>
}
```

### Weather Connector (v1 — real)
- Provider: Open-Meteo (free, no API key)
- Input: city name → geocoded to lat/lon on first run
- Output: current conditions, 7-day forecast, hourly temperatures
- Fallback: if city not set, uses mock weather

### Reviews Connector (v1 — real)
- Provider: Google Places API
- Input: Place ID (user provides in settings) or business name + city
- Output: rating, recent reviews (last 10), review count
- API key: user provides their own Google API key
- Fallback: mock reviews if not configured

### Mock Generator
- Produces realistic data for all sources not connected
- Uses city/timezone to make weather mocks locally plausible
- Uses previous day's metrics to show realistic deltas (± 5-15%)
- Sources covered: Касса, Склад, TG-чат, Карты (offline), Афиша

---

## AI Pipeline

**Model:** Gemini Flash 2.0 (via cloudcode-pa OAuth — existing setup, $0 cost)

**Trigger:** Runs after each connector sync cycle (every 30 min) per tenant.

**Input bundle:**
```json
{
  "tenant": { "name": "...", "city": "...", "timezone": "..." },
  "weather": { "current": {...}, "forecast": [...] },
  "reviews": { "rating": 4.78, "recent": [...] },
  "pos_mock": { "revenue": 48720, "avg_check": 412, ... },
  "events_nearby": [...],
  "previous_whispers": [...]  // last 24h, to avoid repetition
}
```

**Output (structured JSON):**
```json
{
  "brief": "3-4 sentence morning summary in Russian",
  "focus": {
    "title": "One actionable item",
    "body": "Why this matters with evidence",
    "meta": [{"k": "Эффект", "v": "+22 чека"}],
    "deadline": "до 11:00"
  },
  "whispers": [
    {
      "src": "Погода",
      "msg": "Завтра внезапно +14° и солнце...",
      "meta": "ВТ · +14° солнечно",
      "sev": "warn"
    }
  ]
}
```

**Prompt strategy:** System prompt establishes ЗОРКО's voice ("a silent, attentive manager who notices what others miss"). User message contains the data bundle. Output format enforced via structured output schema.

---

## Auth Flow

1. Landing page `/login` — "Войти через Google" or email/password
2. Supabase Auth handles OAuth callback
3. On first login: create `tenants` row, seed mock data, redirect to `/settings` with onboarding prompt
4. Subsequent logins: redirect to `/` (dashboard)
5. RLS ensures complete data isolation

---

## Frontend

### Design Fidelity
Port `ЗОРКО.html` + `app.jsx` 1:1 to Next.js components. Match the visual output exactly — warm paper background (#f1ece1), grain overlay, Newsreader serif + Space Grotesk + JetBrains Mono typography, orange-red signal color (#d9410e).

### Data Flow
- Server Components: initial page load with Supabase server client (no loading flash)
- Client Components: interactive parts (tab switching, dismiss whispers, accept focus)
- Realtime: Supabase channel subscription updates whispers/metrics without page reload
- SWR: periodic revalidation every 5 min as fallback

### Pages
- `/` → dashboard (TodayView default tab)
- `/settings` → connector admin panel
- `/login` → auth page
- `/register` → registration

### Settings Page Connectors
8 connector cards, grid layout:
- Weather: active — city input field, shows current status
- Google Reviews: active — Place ID + API key inputs
- Касса, Склад, TG-чат, Карты, Афиша, Календарь: "Скоро" badge, disabled form

---

## Worker Process

Separate process (`bun run workers/scheduler.ts`), not a Next.js API route.

```
Every 30 minutes:
  FOR each tenant:
    1. Load active connectors
    2. Run fetch() for each (real or mock)
    3. Cache results in Redis (TTL: 35 min)
    4. Run AI pipeline with bundled data
    5. Upsert results to Supabase
    6. Supabase Realtime notifies connected clients
```

In development: `concurrently "next dev" "bun run workers/scheduler.ts"`

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | Next.js 15, React 19, Tailwind CSS |
| Auth | Supabase Auth (Google OAuth + email) |
| Database | Supabase (Postgres + RLS + Realtime) |
| Cache / Queue | Redis via Docker (local dev) / Upstash (production) |
| Workers | Bun runtime (scheduler.ts) |
| AI | Gemini Flash 2.0 via cloudcode-pa OAuth |
| Weather API | Open-Meteo (free, no key) |
| Reviews API | Google Places API (user-supplied key) |
| Dev | concurrently, tsx, dotenv |

---

## Environment Variables

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
REDIS_URL=redis://localhost:6379    # local dev via Docker
GOOGLE_CLIENT_ID=          # for Google OAuth login
GOOGLE_CLIENT_SECRET=
# cloudcode-pa OAuth is already set up in the environment
```

---

## Scope Boundaries (v1)

**In scope:**
- Auth (Google OAuth + email), multi-tenant
- Full ЗОРКО dashboard UI (4 tabs) with real-time updates
- Weather connector (real data)
- Google Reviews connector (real data)
- Mock data for all other sources (realistic, personalized to tenant)
- AI pipeline (whispers + brief + focus card)
- Settings page with connector management
- Worker scheduler (30 min cadence)
- Git repo initialized

**Out of scope (v1):**
- POS/Kassa real connector
- Inventory real connector
- Telegram connector
- Mobile app / PWA
- Billing / subscriptions
- Multi-location per account
- Email/push notifications
