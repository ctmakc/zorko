# ЗОРКО — Setup Guide

## Prerequisites

- Node.js 20+
- Supabase project (free tier works)
- Redis (local Docker or Upstash for production)
- Stripe account
- Google Cloud project (for Google OAuth + Gemini via cloudcode-pa)

---

## 1. Supabase

### Run migrations

```bash
# From the Supabase dashboard → SQL Editor, or via CLI:
supabase db push

# Or run each migration manually:
# supabase/migrations/001_initial_schema.sql
# supabase/migrations/002_add_stripe.sql
```

### Enable Google OAuth

Supabase Dashboard → Authentication → Providers → Google  
Callback URL: `https://zorko-three.vercel.app/auth/callback`

---

## 2. Stripe

### Create a product + price

1. Stripe Dashboard → Products → Add product
2. Name: **ЗОРКО Pro**
3. Price: **$19/month** recurring
4. Copy the `price_XXXX` ID → `STRIPE_PRICE_ID_PRO_MONTHLY`

### Webhook endpoint

Register in Stripe Dashboard → Developers → Webhooks:

```
URL: https://zorko-three.vercel.app/api/stripe/webhook
Events to listen for:
  - checkout.session.completed
  - customer.subscription.updated
  - customer.subscription.deleted
```

Copy the `whsec_...` signing secret → `STRIPE_WEBHOOK_SECRET`

### Customer Portal

Stripe Dashboard → Settings → Billing → Customer portal  
Enable it and configure what customers can do (cancel, update card).

---

## 3. Environment Variables

### `.env.local` (local development)

```env
NEXT_PUBLIC_SUPABASE_URL=https://sfpdchhrakmevngfyihk.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
SUPABASE_SERVICE_ROLE_KEY=...
REDIS_URL=redis://localhost:6379
GEMINI_API_KEY=...

STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_PRICE_ID_PRO_MONTHLY=price_...
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### Vercel environment variables

Add all of the above in Vercel Dashboard → Project → Settings → Environment Variables.  
Set `NEXT_PUBLIC_APP_URL=https://zorko-three.vercel.app` in production.

---

## 4. Local Redis

```bash
docker-compose up -d redis
```

Or use Upstash (serverless Redis) — set `REDIS_URL` to the Upstash REST URL.

---

## 5. Cron worker

The AI brief / whispers / metrics scheduler runs as a separate Node process.  
It requires a persistent server (VPS, Railway, Render, etc.) — **it cannot run on Vercel**.

```bash
# Development
npm run dev:all   # starts Next.js + worker together

# Production (on VPS / Railway)
npm run worker
```

The worker connects to Supabase and Redis, so all env vars above must be available.

---

## 6. Freemium model summary

| Feature | Free (trial expired) | Trial (7 days) | Pro ($19/mo) |
|---|---|---|---|
| Connectors | 1 | unlimited | unlimited |
| AI Briefs | 3/week | daily | daily |
| Whispers | ✓ | ✓ | ✓ |
| Focus day | ✓ | ✓ | ✓ |
| Forecast | ✓ | ✓ | ✓ |

Trial starts automatically for all new users (`trial_ends_at = NOW() + 7 days` set in migration default).

---

## 7. Testing Stripe locally

```bash
# Install Stripe CLI
brew install stripe/stripe-cli/stripe

# Forward webhooks to local
stripe listen --forward-to localhost:3000/api/stripe/webhook

# Trigger a test event
stripe trigger checkout.session.completed
```
