import { registerConnector } from './base'

function jitter(base: number, pct = 0.1) {
  return base * (1 + (Math.random() - 0.5) * 2 * pct)
}

registerConnector({
  type: 'pos_mock',
  requiredFields: [],
  async fetch(_config, _city) {
    return {
      isMock: true,
      raw: {
        revenue_day: Math.round(jitter(48720)),
        avg_check: Math.round(jitter(412)),
        receipts: Math.round(jitter(118)),
        returns: Math.random() < 0.1 ? 1 : 0,
        margin_pct: Math.round(jitter(62)),
        queue_seconds: Math.round(jitter(102)),
      },
    }
  },
})

registerConnector({
  type: 'inventory_mock',
  requiredFields: [],
  async fetch(_config, _city) {
    const daysLeft = Math.round(jitter(4))
    return {
      isMock: true,
      raw: {
        oat_milk_days: daysLeft,
        oat_milk_alert: daysLeft <= 4,
      },
    }
  },
})

registerConnector({
  type: 'reviews_mock',
  requiredFields: [],
  async fetch(_config, _city) {
    return {
      isMock: true,
      raw: {
        rating: parseFloat((4.78 + (Math.random() - 0.5) * 0.04).toFixed(2)),
        total_reviews: 284,
        new_today: Math.random() < 0.6 ? Math.floor(Math.random() * 3) + 1 : 0,
        recent_keywords: Math.random() < 0.3 ? ['душно'] : [],
      },
    }
  },
})
