import { createClient } from '@/lib/supabase/server'
import { getTier } from '@/lib/stripe'

export interface SubscriptionInfo {
  tier: 'pro' | 'trial' | 'free'
  status: string
  trialEndsAt: string | null
  subscriptionEndsAt: string | null
  stripeCustomerId: string | null
}

export async function getSubscription(): Promise<SubscriptionInfo | null> {
  try {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return null

    const { data: tenant } = await supabase
      .from('tenants')
      .select('subscription_status, trial_ends_at, subscription_ends_at, stripe_customer_id')
      .eq('id', user.id)
      .single()

    if (!tenant) return null

    const status = tenant.subscription_status ?? 'free'
    const tier = getTier(status, tenant.trial_ends_at)

    return {
      tier,
      status,
      trialEndsAt: tenant.trial_ends_at ?? null,
      subscriptionEndsAt: tenant.subscription_ends_at ?? null,
      stripeCustomerId: tenant.stripe_customer_id ?? null,
    }
  } catch {
    return null
  }
}
