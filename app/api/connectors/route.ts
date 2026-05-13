import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

const ALL_CONNECTOR_TYPES = [
  { type: 'weather',   label: 'Погода',    desc: 'Open-Meteo — прогноз и текущие условия', ready: true,  fields: [{ key: 'city', label: 'Город', placeholder: 'Москва', required: false }] },
  { type: 'reviews',   label: 'Отзывы',    desc: 'Google Places — рейтинг и отзывы', ready: true,  fields: [{ key: 'place_id', label: 'Google Place ID', placeholder: 'ChIJ...', required: true }, { key: 'api_key', label: 'Google API Key', placeholder: 'AIza...', required: true }] },
  { type: 'pos',       label: 'Касса',     desc: 'iiko, r_keeper, Poster, ЮKassa', ready: false, fields: [] },
  { type: 'inventory', label: 'Склад',     desc: 'Учёт товаров и поставок', ready: false, fields: [] },
  { type: 'telegram',  label: 'TG-чат',    desc: 'Telegram-чат команды', ready: false, fields: [] },
  { type: 'calendar',  label: 'Календарь', desc: 'Google Calendar — поставки и события', ready: false, fields: [] },
  { type: 'events',    label: 'Афиша',     desc: 'Мероприятия рядом с точкой', ready: false, fields: [] },
  { type: 'maps',      label: 'Карты',     desc: 'Яндекс.Карты / 2ГИС аналитика', ready: false, fields: [] },
]

export async function GET() {
  try {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (user) {
      const { data: existing, error } = await supabase
        .from('connectors').select('*').eq('tenant_id', user.id)
      if (error) {
        console.error('[/api/connectors] DB error:', error.message)
        return NextResponse.json({ error: 'Database error' }, { status: 500 })
      }
      const existingMap = new Map((existing ?? []).map(c => [c.type, c]))
      return NextResponse.json(ALL_CONNECTOR_TYPES.map(def => ({
        ...def,
        connector: existingMap.get(def.type) ?? null,
      })))
    }
  } catch (err) {
    console.error('[/api/connectors] Unexpected error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }

  return NextResponse.json(ALL_CONNECTOR_TYPES.map(def => ({ ...def, connector: null })))
}
