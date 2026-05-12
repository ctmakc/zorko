-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- Tenants (one per user)
create table tenants (
  id uuid primary key references auth.users(id) on delete cascade,
  name text not null default 'Мой бизнес',
  city text default 'Москва',
  timezone text default 'Europe/Moscow',
  created_at timestamptz default now()
);
alter table tenants enable row level security;
create policy "tenant own" on tenants for all using (id = auth.uid());

-- Connector configurations
create table connectors (
  id uuid primary key default uuid_generate_v4(),
  tenant_id uuid references tenants(id) on delete cascade not null,
  type text not null,
  config jsonb default '{}',
  enabled boolean default false,
  last_synced_at timestamptz,
  error text,
  unique(tenant_id, type)
);
alter table connectors enable row level security;
create policy "connector own" on connectors for all using (tenant_id = auth.uid());

-- AI-generated whispers / insights
create table whispers (
  id uuid primary key default uuid_generate_v4(),
  tenant_id uuid references tenants(id) on delete cascade not null,
  src text not null,
  msg text not null,
  meta text,
  sev text not null check (sev in ('warn', 'good', 'idea')),
  dismissed boolean default false,
  is_mock boolean default true,
  created_at timestamptz default now()
);
alter table whispers enable row level security;
create policy "whisper own" on whispers for all using (tenant_id = auth.uid());
create index whispers_tenant_created on whispers(tenant_id, created_at desc);

-- KPI metrics snapshots
create table metrics (
  id uuid primary key default uuid_generate_v4(),
  tenant_id uuid references tenants(id) on delete cascade not null,
  key text not null,
  value numeric,
  unit text,
  delta text,
  direction text check (direction in ('up', 'down', 'flat')),
  note text,
  shape text default 'wave',
  is_mock boolean default true,
  recorded_at timestamptz default now()
);
alter table metrics enable row level security;
create policy "metric own" on metrics for all using (tenant_id = auth.uid());
create index metrics_tenant_key on metrics(tenant_id, key, recorded_at desc);

-- 7-day forecast rows (one per day per tenant)
create table forecasts (
  id uuid primary key default uuid_generate_v4(),
  tenant_id uuid references tenants(id) on delete cascade not null,
  date date not null,
  hourly_bars integer[] not null,
  summary text,
  is_hot boolean default false,
  is_today boolean default false,
  is_mock boolean default true,
  created_at timestamptz default now(),
  unique(tenant_id, date)
);
alter table forecasts enable row level security;
create policy "forecast own" on forecasts for all using (tenant_id = auth.uid());

-- Events timeline
create table events (
  id uuid primary key default uuid_generate_v4(),
  tenant_id uuid references tenants(id) on delete cascade not null,
  when_label text,
  what text not null,
  impact text,
  is_warning boolean default false,
  event_at timestamptz,
  is_mock boolean default true
);
alter table events enable row level security;
create policy "event own" on events for all using (tenant_id = auth.uid());

-- Focus cards (actionable daily recommendation)
create table focus_cards (
  id uuid primary key default uuid_generate_v4(),
  tenant_id uuid references tenants(id) on delete cascade not null,
  tag text,
  title text not null,
  body text,
  meta jsonb default '[]',
  status text default 'active' check (status in ('active', 'accepted', 'skipped')),
  is_mock boolean default true,
  created_at timestamptz default now()
);
alter table focus_cards enable row level security;
create policy "focus own" on focus_cards for all using (tenant_id = auth.uid());

-- Morning brief
create table briefs (
  id uuid primary key default uuid_generate_v4(),
  tenant_id uuid references tenants(id) on delete cascade not null,
  content text not null,
  headline text,
  is_mock boolean default true,
  created_at timestamptz default now()
);
alter table briefs enable row level security;
create policy "brief own" on briefs for all using (tenant_id = auth.uid());
