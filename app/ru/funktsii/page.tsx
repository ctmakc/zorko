import type { Metadata } from 'next'
import Link from 'next/link'
import { MarketingNav } from '@/components/marketing/MarketingNav'
import { MarketingFooter } from '@/components/marketing/MarketingFooter'

export const metadata: Metadata = {
  title: 'Функции ЗОРКО — ИИ-дашборд для малого бизнеса',
  description: 'Утренний ИИ-бриф, шёпоты (микроинсайты), фокус дня, интеграция с Google Места, движок Gemini AI. Аналитика малого бизнеса без команды аналитиков.',
  alternates: {
    canonical: 'https://zorko-three.vercel.app/ru/funktsii',
    languages: {
      'ru': 'https://zorko-three.vercel.app/ru/funktsii',
      'en': 'https://zorko-three.vercel.app/features',
    },
  },
  openGraph: {
    title: 'Функции ЗОРКО — ИИ-дашборд для малого бизнеса',
    description: 'Утренний AI-бриф, шёпоты, фокус дня, Google Места, Gemini AI. Всё необходимое для аналитики малого бизнеса.',
    url: 'https://zorko-three.vercel.app/ru/funktsii',
    locale: 'ru_RU',
  },
}

const features = [
  {
    n: '01',
    label: 'Утренний AI-бриф',
    heading: 'Ваш бизнес — проанализирован за ночь',
    desc: 'Каждое утро до открытия ЗОРКО проводит полный анализ данных за прошедший день. Тренды продаж, обратная связь клиентов, социальные сигналы — всё это уложено в двухминутное чтение. Никакого копания, никакой интерпретации. Только сигнал.',
    tags: ['Gemini AI', 'Ежедневная доставка', 'Персональные приоритеты'],
  },
  {
    n: '02',
    label: 'Шёпоты',
    heading: 'Микроинсайты, которые легко пропустить',
    desc: 'Шёпоты — это тонкие сдвиги в данных, которые не вызывают алерт, но заслуживают внимания. Небольшое падение настроений в отзывах. Тихий рост категории товаров. Паттерн в жалобах клиентов. ЗОРКО обнаруживает их до того, как они становятся проблемами.',
    tags: ['Обнаружение паттернов', 'Мониторинг трендов', 'Ранние сигналы'],
  },
  {
    n: '03',
    label: 'Фокус дня',
    heading: 'Один приоритет. Каждый день.',
    desc: 'Слишком много информации ведёт к отсутствию действия. Фокус дня отсекает шум и выводит единственное рекомендуемое действие для вашего бизнеса — на основе того, что данные говорят прямо сейчас.',
    tags: ['Определение приоритетов', 'Ориентация на действие', 'Поддержка решений'],
  },
  {
    n: '04',
    label: 'Google Места',
    heading: 'Ваши отзывы — анализируются автоматически',
    desc: 'ЗОРКО подключается к вашему аккаунту Google Бизнес. Новые отзывы анализируются по настроению, повторяющимся темам и срочности. Каждое утро вы видите сводку — вместо того, чтобы читать каждый отзыв отдельно.',
    tags: ['Анализ отзывов', 'Оценка тональности', 'Кластеризация тем'],
  },
  {
    n: '05',
    label: 'Движок Gemini AI',
    heading: 'Корпоративный ИИ — по цене малого бизнеса',
    desc: 'Работает на Google Gemini — той же ИИ-технологии, которую используют крупные компании. ЗОРКО делает продвинутую бизнес-аналитику доступной для владельцев без команды аналитиков.',
    tags: ['Google Gemini', 'Естественный язык', 'Синтез из нескольких источников'],
  },
  {
    n: '06',
    label: 'Система коннекторов',
    heading: 'Подключайте то, что важно вашему бизнесу',
    desc: 'Каждый бизнес разный. Система коннекторов позволяет выбрать, какие источники данных питают ваш бриф. Подключите Google Места, данные продаж, погоду и другие источники. В разработке: кассы, склад, Telegram, Google Календарь.',
    tags: ['Модульная настройка', 'Без кода', 'Расширяемость'],
  },
  {
    n: '07',
    label: '7-дневный прогноз',
    heading: 'Смотрите вперёд',
    desc: 'Помимо вчерашнего — ЗОРКО также формирует прогноз на 7 дней вперёд. Предсказуемые пиковые периоды, влияние погоды, проекции трендов. Планируйте персонал и запасы на основе данных, а не интуиции.',
    tags: ['Прогнозирование', 'Планирование персонала', 'Сигналы запасов'],
  },
]

export default function RuFunktsiiPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', overflowY: 'auto', overflow: 'auto' }}>
      <MarketingNav lang="ru" />

      <main>
        {/* Hero */}
        <section style={{ maxWidth: 820, margin: '0 auto', padding: '80px 32px 64px' }}>
          <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 20 }}>
            Функции
          </div>
          <h1 style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400, fontSize: 52, lineHeight: 1.05, letterSpacing: '-0.02em', color: 'var(--ink)', marginBottom: 28 }}>
            ИИ-дашборд для<br />аналитики малого бизнеса
          </h1>
          <p style={{ fontFamily: 'var(--sans)', fontSize: 17, color: 'var(--ink-2)', lineHeight: 1.7, maxWidth: 560 }}>
            ЗОРКО подключает данные вашего бизнеса, запускает анализ Google Gemini AI за ночь и каждое утро доставляет чёткий брифинг — чтобы вы начинали день, уже зная, что произошло и на чём сосредоточиться.
          </p>
        </section>

        {/* Features list */}
        <section style={{ borderTop: '1px solid var(--line)' }}>
          <div style={{ maxWidth: 820, margin: '0 auto', padding: '0 32px' }}>
            {features.map((feature) => (
              <div key={feature.n} style={{
                display: 'grid',
                gridTemplateColumns: '220px 1fr',
                gap: 48,
                padding: '56px 0',
                borderBottom: '1px solid var(--line)',
              }}>
                <div>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--muted-2)', marginBottom: 8 }}>{feature.n}</div>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 12, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--ink)', marginBottom: 20, fontWeight: 500 }}>{feature.label}</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                    {feature.tags.map(tag => (
                      <span key={tag} style={{ fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--muted)', padding: '3px 0', borderBottom: '1px solid var(--line)' }}>{tag}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h2 style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400, fontSize: 28, color: 'var(--ink)', marginBottom: 16, lineHeight: 1.2 }}>{feature.heading}</h2>
                  <p style={{ fontFamily: 'var(--sans)', fontSize: 15, color: 'var(--ink-2)', lineHeight: 1.8 }}>{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: 'var(--ink)', padding: '64px 32px', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400, fontSize: 32, color: 'var(--paper)', marginBottom: 16 }}>
            Начните утро с ясностью
          </h2>
          <p style={{ fontFamily: 'var(--sans)', fontSize: 14, color: 'var(--muted-2)', marginBottom: 32 }}>7 дней бесплатно. Карта не нужна.</p>
          <Link href="/pricing" style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--ink)', background: 'var(--paper)', textDecoration: 'none', padding: '14px 28px', display: 'inline-block' }}>
            Попробовать бесплатно →
          </Link>
        </section>
      </main>

      <MarketingFooter lang="ru" />
    </div>
  )
}
