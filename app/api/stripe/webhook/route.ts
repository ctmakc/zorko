import { NextRequest, NextResponse } from 'next/server'
import { getStripe } from '@/lib/stripe'
import { getAdmin } from '@/lib/supabase/admin'
import Stripe from 'stripe'

export const dynamic = 'force-dynamic'

async function getRawBody(req: NextRequest): Promise<Buffer> {
  const chunks: Uint8Array[] = []
  const reader = req.body?.getReader()
  if (!reader) return Buffer.alloc(0)
  while (true) {
    const { done, value } = await reader.read()
    if (done) break
    if (value) chunks.push(value)
  }
  return Buffer.concat(chunks)
}

/** Get the period end timestamp from a Subscription (Stripe v22: it lives on items) */
function getPeriodEnd(sub: Stripe.Subscription): string | null {
  const item = sub.items?.data?.[0]
  if (item && 'current_period_end' in item) {
    const ts = (item as Stripe.SubscriptionItem & { current_period_end: number }).current_period_end
    return ts ? new Date(ts * 1000).toISOString() : null
  }
  return null
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyRecord = Record<string, any>

export async function POST(req: NextRequest) {
  const rawBody = await getRawBody(req)
  const sig = req.headers.get('stripe-signature')

  if (!sig) return NextResponse.json({ error: 'No signature' }, { status: 400 })

  let event: Stripe.Event
  try {
    event = getStripe().webhooks.constructEvent(
      rawBody,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    )
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err)
    console.error('[stripe/webhook] Signature verification failed:', msg)
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
  }

  const admin = getAdmin()

  switch (event.type) {
    case 'checkout.session.completed': {
      const session = event.data.object as Stripe.Checkout.Session
      if (session.mode !== 'subscription') break

      const customerId = typeof session.customer === 'string'
        ? session.customer
        : (session.customer as Stripe.Customer | null)?.id

      const subscriptionId = typeof session.subscription === 'string'
        ? session.subscription
        : (session.subscription as Stripe.Subscription | null)?.id

      if (!customerId || !subscriptionId) break

      const sub = await getStripe().subscriptions.retrieve(subscriptionId, {
        expand: ['items'],
      })

      const updates: AnyRecord = {
        stripe_customer_id: customerId,
        subscription_id: subscriptionId,
        subscription_status: sub.status,
        subscription_ends_at: getPeriodEnd(sub),
      }

      const { error } = await admin.from('tenants')
        .update(updates as never)
        .eq('stripe_customer_id', customerId)

      if (error) {
        console.error('[stripe/webhook] checkout.session.completed DB error:', error.message)
      }
      break
    }

    case 'customer.subscription.updated': {
      const sub = event.data.object as Stripe.Subscription
      const customerId = typeof sub.customer === 'string' ? sub.customer : (sub.customer as Stripe.Customer).id

      // Re-fetch with items expanded so we can read current_period_end
      const fullSub = await getStripe().subscriptions.retrieve(sub.id, {
        expand: ['items'],
      })

      const updates: AnyRecord = {
        subscription_id: sub.id,
        subscription_status: sub.status,
        subscription_ends_at: getPeriodEnd(fullSub),
      }

      const { error } = await admin.from('tenants')
        .update(updates as never)
        .eq('stripe_customer_id', customerId)

      if (error) {
        console.error('[stripe/webhook] subscription.updated DB error:', error.message)
      }
      break
    }

    case 'customer.subscription.deleted': {
      const sub = event.data.object as Stripe.Subscription
      const customerId = typeof sub.customer === 'string' ? sub.customer : (sub.customer as Stripe.Customer).id

      const updates: AnyRecord = {
        subscription_status: 'canceled',
        subscription_id: null,
        subscription_ends_at: sub.canceled_at
          ? new Date(sub.canceled_at * 1000).toISOString()
          : null,
      }

      const { error } = await admin.from('tenants')
        .update(updates as never)
        .eq('stripe_customer_id', customerId)

      if (error) {
        console.error('[stripe/webhook] subscription.deleted DB error:', error.message)
      }
      break
    }

    default:
      break
  }

  return NextResponse.json({ received: true })
}
