import Stripe from 'stripe'

let _stripe: Stripe | null = null

export function getStripe() {
  if (!_stripe) {
    _stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
      apiVersion: '2026-04-22.dahlia',
    })
  }
  return _stripe
}

/** Free tier limits */
export const FREE_CONNECTOR_LIMIT = 1
export const FREE_BRIEFS_PER_WEEK = 3

/** Return true if user is on an active paid plan */
export function isPro(status: string | null | undefined): boolean {
  return status === 'active' || status === 'trialing'
}

/** Return true if user is in their free trial window */
export function isInTrial(trialEndsAt: string | null | undefined): boolean {
  if (!trialEndsAt) return false
  return new Date(trialEndsAt) > new Date()
}

/** Effective tier: 'pro' | 'trial' | 'free' */
export function getTier(status: string | null | undefined, trialEndsAt: string | null | undefined): 'pro' | 'trial' | 'free' {
  if (isPro(status)) return 'pro'
  if (isInTrial(trialEndsAt)) return 'trial'
  return 'free'
}
