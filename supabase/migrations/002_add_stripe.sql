-- Add Stripe subscription columns to tenants table
-- (tenants.id = auth.users.id, so "tenants" is the profiles/accounts table)

ALTER TABLE tenants ADD COLUMN IF NOT EXISTS stripe_customer_id TEXT UNIQUE;
ALTER TABLE tenants ADD COLUMN IF NOT EXISTS subscription_status TEXT NOT NULL DEFAULT 'free';
ALTER TABLE tenants ADD COLUMN IF NOT EXISTS subscription_id TEXT UNIQUE;
ALTER TABLE tenants ADD COLUMN IF NOT EXISTS trial_ends_at TIMESTAMPTZ DEFAULT (NOW() + INTERVAL '7 days');
ALTER TABLE tenants ADD COLUMN IF NOT EXISTS subscription_ends_at TIMESTAMPTZ;

-- Index for quick subscription lookups (e.g. webhook by stripe_customer_id)
CREATE INDEX IF NOT EXISTS tenants_stripe_customer_id ON tenants(stripe_customer_id);

-- Helper: how many connectors does this tenant have enabled?
-- Used by the paywall check below.
-- (No function needed — we check from API routes.)

COMMENT ON COLUMN tenants.subscription_status IS 'free | trialing | active | past_due | canceled | paused';
