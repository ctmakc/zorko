import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { getStripe } from '@/lib/stripe'

export async function POST() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const stripe = getStripe()

  // Fetch existing tenant row so we can reuse stripe_customer_id
  const { data: tenant } = await supabase
    .from('tenants').select('stripe_customer_id').eq('id', user.id).single()

  let customerId: string | undefined = tenant?.stripe_customer_id ?? undefined

  // Create customer in Stripe if we don't have one yet
  if (!customerId) {
    const customer = await stripe.customers.create({
      email: user.email,
      metadata: { supabase_user_id: user.id },
    })
    customerId = customer.id

    // Persist immediately so we don't create duplicates on retries
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    await supabase.from('tenants').update({ stripe_customer_id: customerId } as any).eq('id', user.id)
  }

  const origin = process.env.NEXT_PUBLIC_APP_URL ?? 'https://zorko-three.vercel.app'

  const session = await stripe.checkout.sessions.create({
    customer: customerId,
    mode: 'subscription',
    payment_method_types: ['card'],
    line_items: [
      {
        price: process.env.STRIPE_PRICE_ID_PRO_MONTHLY!,
        quantity: 1,
      },
    ],
    subscription_data: {
      trial_period_days: 7,
    },
    success_url: `${origin}/?upgraded=1`,
    cancel_url: `${origin}/pricing`,
    allow_promotion_codes: true,
  })

  return NextResponse.json({ url: session.url })
}
