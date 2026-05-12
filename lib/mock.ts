import type { Whisper, Metric, ForecastDay, Event, FocusCard, Brief } from './types'

let _mockCounter = 0
const MOCK_ID = () => `mock-${++_mockCounter}`
const TENANT = 'mock-tenant'

export function getMockBrief(): Brief {
  return {
    id: MOCK_ID(), tenant_id: TENANT,
    headline: 'Утро идёт хорошо, но завтра приходит солнце.',
    content: 'Утро <em>идёт хорошо</em>: средний чек подрос, очередь стала на <span class="mark">22 секунды короче</span>. Но завтра <em>солнце +14°</em>, и если терраса <em>останется закрытой</em>, вы потеряете около двадцати двух чеков.',
    is_mock: true, created_at: new Date().toISOString(),
  }
}

export function getMockFocus(): FocusCard {
  return {
    id: MOCK_ID(), tenant_id: TENANT,
    tag: 'ФОКУС ДНЯ · 1 ИЗ 3',
    title: 'Открой террасу до 11:00 — завтра +14° и солнце.',
    body: 'Похожее окно в апреле дало +22 чека и удержало рейтинг. Уборка 25 мин, инвентарь на месте — Лена подтвердила в 09:42.',
    meta: [{ k: 'Эффект', v: '+22 чека' }, { k: 'Окно', v: 'до 11:00' }, { k: 'Источник', v: 'Погода · История' }],
    status: 'active', is_mock: true, created_at: new Date().toISOString(),
  }
}

export function getMockWhispers(): Whisper[] {
  const items = [
    { src: 'Касса',     msg: 'Средний чек по утрам растёт пятый день — кофе+круассан тянет +14₽.', meta: '06:00–10:30 · +14 ₽', sev: 'good' as const },
    { src: 'Отзывы',    msg: 'Слово «душно» появилось в трёх отзывах за неделю — впервые за два месяца.', meta: '3 упоминания · 2-я линия', sev: 'warn' as const },
    { src: 'Склад',     msg: 'Молоко овсяное закончится к четвергу, если не заказать сегодня до 17:00.', meta: 'ETA 4 дня · 6 пачек', sev: 'warn' as const },
    { src: 'Календарь', msg: 'Лена в пятницу одна на смене — поток в полдень обычно даёт очередь от 6 человек.', meta: 'ПТ 12:00 · риск-индекс 0.71', sev: 'warn' as const },
    { src: 'Карты',     msg: 'Двое из тех, кто ставит 5★, живут в радиусе 400 м. Может быть, дать им именной кофе?', meta: 'Гео · повтор-визит 4×', sev: 'idea' as const },
    { src: 'Афиша',     msg: 'В субботу в 19:00 рядом фестиваль уличной еды. В прошлый раз поток вырос на 38%.', meta: 'СБ 19:00–22:00 · +38%', sev: 'good' as const },
    { src: 'TG-чат',    msg: 'Гость спрашивал, есть ли матча на кокосовом. Третий раз за месяц — это, кажется, сигнал.', meta: '3 запроса · 3 чел.', sev: 'idea' as const },
    { src: 'Погода',    msg: 'Завтра внезапно +14° и солнце. Терраса не открыта — потеряете ~22 чека.', meta: 'ВТ · +14° солнечно', sev: 'warn' as const },
  ]
  return items.map(w => ({ id: MOCK_ID(), tenant_id: TENANT, dismissed: false, is_mock: true, created_at: new Date().toISOString(), ...w }))
}

export function getMockMetrics(): Metric[] {
  const items = [
    { key: 'revenue_day',  value: 48720, unit: '₽',    delta: '+12.4%',   direction: 'up' as const,   shape: 'wave' as const,  note: 'Утро тянет вверх. Вечер ещё не закрыт.' },
    { key: 'avg_check',    value: 412,   unit: '₽',    delta: '+14 ₽',    direction: 'up' as const,   shape: 'steps' as const, note: 'Кофе+круассан, пятый день подряд.' },
    { key: 'receipts',     value: 118,   unit: 'шт.',  delta: '-3%',      direction: 'down' as const, shape: 'wave' as const,  note: 'Чуть меньше, но крупнее.' },
    { key: 'returns',      value: 2,     unit: '',     delta: 'норма',    direction: 'up' as const,   shape: 'flat' as const,  note: 'Один — забыли соль, второй — пересоленное.' },
    { key: 'rating',       value: 4.78,  unit: '/5',   delta: '+0.04',    direction: 'up' as const,   shape: 'wave' as const,  note: 'Три новых отзыва за сутки, два пятёрочных.' },
    { key: 'queue_min',    value: 1.7,   unit: '',     delta: '-22 сек',  direction: 'up' as const,   shape: 'wave' as const,  note: 'Лена бариста — ускорилась.' },
    { key: 'margin',       value: 62,    unit: '%',    delta: '+1.1 пп',  direction: 'up' as const,   shape: 'steps' as const, note: 'Закупка молока подешевела.' },
    { key: 'nps',          value: 71,    unit: '',     delta: '+4',       direction: 'up' as const,   shape: 'wave' as const,  note: 'Тёплая волна. Береги её.' },
  ]
  return items.map(m => ({ id: MOCK_ID(), tenant_id: TENANT, is_mock: true, recorded_at: new Date().toISOString(), ...m }))
}

export function getMockForecast(): ForecastDay[] {
  const days = [
    { dow: 'ПН', bars: [3,4,6,5,8,9,12,10,7,5,4,3], summary: 'Спокойный старт недели', is_hot: false, is_today: true },
    { dow: 'ВТ', bars: [4,5,7,9,11,13,16,14,10,7,5,4], summary: 'Солнце +14°: открой террасу', is_hot: true, is_today: false },
    { dow: 'СР', bars: [3,4,5,5,7,8,10,9,7,5,4,3], summary: 'Без сюрпризов', is_hot: false, is_today: false },
    { dow: 'ЧТ', bars: [3,4,5,7,9,10,11,10,8,6,5,4], summary: 'Поставка молока — успей до 17:00', is_hot: false, is_today: false },
    { dow: 'ПТ', bars: [4,6,9,11,13,15,17,16,13,11,9,8], summary: 'Пик. Поставь второго на смену', is_hot: true, is_today: false },
    { dow: 'СБ', bars: [5,7,9,11,13,14,15,17,19,18,15,12], summary: 'Фестиваль рядом — будь готов', is_hot: true, is_today: false },
    { dow: 'ВС', bars: [4,5,7,8,10,11,12,11,9,7,6,5], summary: 'Семейные завтраки до 12:00', is_hot: false, is_today: false },
  ]
  const BASE = '2026-05-12'
  return days.map((d, i) => {
    const base = new Date(BASE + 'T12:00:00Z'); base.setUTCDate(base.getUTCDate() + i)
    return { id: MOCK_ID(), tenant_id: TENANT, date: base.toISOString().split('T')[0], hourly_bars: d.bars, summary: d.summary, is_hot: d.is_hot, is_today: d.is_today, is_mock: true }
  })
}

export function getMockEvents(): Event[] {
  return [
    { id: MOCK_ID(), tenant_id: TENANT, when_label: 'ВТ 14:00', what: 'Солнце +14°, открытие террасы', impact: '+22 чека', is_warning: false, event_at: '', is_mock: true },
    { id: MOCK_ID(), tenant_id: TENANT, when_label: 'ЧТ 17:00', what: 'Дедлайн заказа молока овсяного', impact: 'риск дефицита', is_warning: true, event_at: '', is_mock: true },
    { id: MOCK_ID(), tenant_id: TENANT, when_label: 'ПТ 12:00', what: 'Пиковая смена — Лена одна', impact: 'нужен второй', is_warning: true, event_at: '', is_mock: true },
    { id: MOCK_ID(), tenant_id: TENANT, when_label: 'СБ 19:00', what: 'Уличный фестиваль в 200 м', impact: '+38% потока', is_warning: false, event_at: '', is_mock: true },
    { id: MOCK_ID(), tenant_id: TENANT, when_label: 'ВС 09:00', what: 'Семейный завтрак (повторный гость №47)', impact: 'удержание', is_warning: false, event_at: '', is_mock: true },
  ]
}
