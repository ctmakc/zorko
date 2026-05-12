import { registerConnector } from './base'

const GEOCODE_URL = 'https://geocoding-api.open-meteo.com/v1/search'
const FORECAST_URL = 'https://api.open-meteo.com/v1/forecast'

async function geocode(city: string): Promise<{ lat: number; lon: number } | null> {
  const r = await fetch(`${GEOCODE_URL}?name=${encodeURIComponent(city)}&count=1&language=ru`)
  if (!r.ok) return null
  const d = await r.json()
  const loc = d.results?.[0]
  if (!loc) return null
  return { lat: loc.latitude, lon: loc.longitude }
}

registerConnector({
  type: 'weather',
  requiredFields: [],
  async fetch(_config, city) {
    const geo = await geocode(city || 'Москва')
    if (!geo) return { raw: {}, isMock: true }

    const url = `${FORECAST_URL}?latitude=${geo.lat}&longitude=${geo.lon}` +
      `&current=temperature_2m,wind_speed_10m,weather_code` +
      `&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,weather_code` +
      `&forecast_days=7&timezone=auto`

    const r = await fetch(url)
    if (!r.ok) return { raw: {}, isMock: true }

    const data = await r.json()
    return { raw: data, isMock: false }
  },
})
