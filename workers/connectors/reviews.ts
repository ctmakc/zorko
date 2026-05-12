import { registerConnector } from './base'

registerConnector({
  type: 'reviews',
  requiredFields: ['place_id', 'api_key'],
  async fetch(config, _city) {
    const { place_id, api_key } = config
    if (!place_id || !api_key) return { raw: {}, isMock: true }

    const url = `https://maps.googleapis.com/maps/api/place/details/json` +
      `?place_id=${place_id}&fields=rating,user_ratings_total,reviews&language=ru&key=${api_key}`

    const r = await fetch(url)
    if (!r.ok) return { raw: {}, isMock: true }

    const data = await r.json()
    if (data.status !== 'OK') return { raw: {}, isMock: true }

    return { raw: data.result, isMock: false }
  },
})
