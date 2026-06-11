import type { Metadata } from 'next'
import Link from 'next/link'
import { MarketingNav } from '@/components/marketing/MarketingNav'
import { MarketingFooter } from '@/components/marketing/MarketingFooter'

export const metadata: Metadata = {
  title: 'Тарифы ЗОРКО — ИИ-дашборд для малого бизнеса',
  description: 'Бесплатный тариф и Pro за $19/месяц. 7 дней пробного периода. Неограниченные источники данных, ежедневный AI-бриф, шёпоты и прогноз.',
  alternates: {
    canonical: 'https://zorko-three.vercel.app/ru/tseny',
    languages: {
      'ru': 'https://zorko-three.vercel.app/ru/tseny',
      'en': 'https://zorko-three.vercel.app/pricing',
    },
  },
  openGraph: {
    title: 'Тарифы ЗОРКО — ИИ-дашборд для малого бизнеса',
    description: 'Бесплатно или $19/мес Pro. 7 дней пробного периода без карты.',
    url: 'https://zorko-three.vercel.app/ru/tseny',
    locale: 'ru_RU',
  },
}

const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'ЗОРКО — ИИ-дашборд для малого бизнеса',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  url: 'https://zorko-three.vercel.app/ru',
  offers: [
    { '@type': 'Offer', price: '0', priceCurrency: 'USD', name: 'Бесплатно', description: '1 источник данных, 3 брифа в неделю, демо-режим' },
    { '@type': 'Offer', price: '19', priceCurrency: 'USD', billingDuration: 'P1M', name: 'Pro', description: 'Неограниченные коннекторы, ежедневный AI-бриф, шёпоты, фокус дня, 7-дневный прогноз' },
  ],
}

const faq = [
  { q: 'Как работает пробный период?', a: '7 дней бесплатно при первой оплате. Введите карту — списание $19 только через 7 дней. Отмена в один клик.' },
  { q: 'Можно ли отменить в любой момент?', a: 'Да. Через портал управления подпиской — без штрафов и звонков в поддержку.' },
  { q: 'Что если у меня нет реальных данных?', a: 'Демо-режим работает всегда. Подключите хотя бы один источник — ЗОРКО покажет реальную картину.' },
  { q: 'Нужен ли разработчик для подключения?', a: 'Нет. Подключение занимает несколько кликов. Никакого кода, никаких API-ключей вручную.' },
]

export default function RuTsenyPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', overflowY: 'auto', overflow: 'auto' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      <MarketingNav lang="ru" />

      <main>
        <section style={{ maxWidth: 820, margin: '0 auto', padding: '80px 32px 40px' }}>
          <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 20 }}>Тарифы</div>
          <h1 style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400, fontSize: 52, lineHeight: 1.05, letterSpacing: '-0.02em', color: 'var(--ink)', marginBottom: 16 }}>
            Острое зрение — без ограничений
          </h1>
          <p style={{ fontFamily: 'var(--sans)', fontSize: 16, color: 'var(--muted)', lineHeight: 1.6 }}>
            Подключайте данные, получайте AI-бриф каждый день.
          </p>
        </section>

        <section style={{ maxWidth: 820, margin: '0 auto', padding: '0 32px 80px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, border: '1px solid var(--ink)', marginBottom: 60 }}>
            {/* Free */}
            <div style={{ padding: '36px 32px', background: 'var(--bg-2)', borderRight: '1px solid var(--ink)' }}>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.24em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 16 }}>Бесплатно</div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 28 }}>
                <span style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 48, fontWeight: 400, color: 'var(--ink)', lineHeight: 1 }}>$0</span>
                <span style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--muted)', letterSpacing: '.06em' }}>/мес</span>
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 32 }}>
                {['1 источник данных', '3 AI-брифа в неделю', 'Базовая аналитика', 'Демо-режим'].map(f => (
                  <li key={f} style={{ display: 'flex', gap: 10, fontFamily: 'var(--sans)', fontSize: 13, color: 'var(--ink-2)', lineHeight: 1.4 }}>
                    <span style={{ color: 'var(--muted-2)', fontFamily: 'var(--mono)' }}>–</span>{f}
                  </li>
                ))}
              </ul>
              <Link href="/pricing" style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--muted)', textDecoration: 'none', padding: '10px 0', display: 'block', borderTop: '1px solid var(--line)' }}>
                Начать бесплатно
              </Link>
            </div>

            {/* Pro */}
            <div style={{ padding: '36px 32px', background: 'var(--paper)', position: 'relative' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'var(--signal)' }} />
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.24em', textTransform: 'uppercase', color: 'var(--muted)' }}>Pro</div>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '.12em', textTransform: 'uppercase', background: 'var(--signal)', color: 'var(--paper)', padding: '2px 7px' }}>Рекомендуем</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 28 }}>
                <span style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 48, fontWeight: 400, color: 'var(--ink)', lineHeight: 1 }}>$19</span>
                <span style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--muted)', letterSpacing: '.06em' }}>/мес</span>
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 32 }}>
                {[
                  'Неограниченные источники данных',
                  'AI-бриф каждое утро',
                  'Шёпоты в реальном времени',
                  'Фокус дня и рекомендации',
                  '7-дневный прогноз',
                  '7 дней бесплатного периода',
                ].map(f => (
                  <li key={f} style={{ display: 'flex', gap: 10, fontFamily: 'var(--sans)', fontSize: 13, color: 'var(--ink-2)', lineHeight: 1.4 }}>
                    <span style={{ color: 'var(--signal)', fontFamily: 'var(--mono)' }}>→</span>{f}
                  </li>
                ))}
              </ul>
              <Link href="/pricing" style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--paper)', background: 'var(--signal)', textDecoration: 'none', padding: '12px 20px', display: 'inline-block' }}>
                Начать 7 дней бесплатно →
              </Link>
            </div>
          </div>

          {/* FAQ */}
          <h2 style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400, fontSize: 28, color: 'var(--ink)', marginBottom: 32 }}>
            Часто задаваемые вопросы
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28 }}>
            {faq.map(({ q, a }) => (
              <div key={q}>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--ink)', marginBottom: 8, fontWeight: 500, lineHeight: 1.5 }}>{q}</div>
                <div style={{ fontFamily: 'var(--sans)', fontSize: 13, color: 'var(--muted)', lineHeight: 1.7 }}>{a}</div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <MarketingFooter lang="ru" />
    </div>
  )
}
