import type { Metadata } from 'next'
import Link from 'next/link'
import { MarketingNav } from '@/components/marketing/MarketingNav'
import { MarketingFooter } from '@/components/marketing/MarketingFooter'

export const metadata: Metadata = {
  title: 'ЗОРКО — ИИ-дашборд для малого бизнеса',
  description: 'Ежедневный ИИ-брифинг для владельцев малого бизнеса. Подключите данные — получайте аналитику каждое утро. Отзывы, продажи, прогноз — в одном месте.',
  alternates: {
    canonical: 'https://zorko-three.vercel.app/ru',
    languages: {
      'ru': 'https://zorko-three.vercel.app/ru',
      'en': 'https://zorko-three.vercel.app',
    },
  },
  openGraph: {
    title: 'ЗОРКО — ИИ-дашборд для малого бизнеса',
    description: 'Ежедневный ИИ-брифинг для владельцев малого бизнеса. Аналитика Google, продажи, прогноз — каждое утро до открытия.',
    url: 'https://zorko-three.vercel.app/ru',
    locale: 'ru_RU',
  },
}

const features = [
  { label: 'Утренний AI-бриф', desc: 'Анализ прошлого дня готов до открытия. Отзывы, продажи, сигналы — в двухминутном чтении.' },
  { label: 'Шёпоты', desc: 'Тихие сигналы: смещение настроений, аномалии категорий, паттерны жалоб. То, что легко пропустить в рутине.' },
  { label: 'Фокус дня', desc: 'Один чёткий приоритет на сегодня — не список из двадцати пунктов, а единственное действие на основе данных.' },
  { label: '7-дневный прогноз', desc: 'Предсказуемые пиковые периоды, влияние погоды, трендовые проекции — для планирования персонала и запасов.' },
]

export default function RuHomePage() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', overflowY: 'auto', overflow: 'auto' }}>
      <MarketingNav lang="ru" />

      <main>
        {/* Hero */}
        <section style={{ maxWidth: 820, margin: '0 auto', padding: '80px 32px 80px' }}>
          <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 20 }}>
            ЗОРКО · ИИ-дашборд для бизнеса
          </div>
          <h1 style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400, fontSize: 58, lineHeight: 1.0, letterSpacing: '-0.02em', color: 'var(--ink)', marginBottom: 32 }}>
            Острое зрение<br />для малого бизнеса
          </h1>
          <p style={{ fontFamily: 'var(--sans)', fontSize: 18, color: 'var(--ink-2)', lineHeight: 1.75, maxWidth: 520, marginBottom: 40 }}>
            ЗОРКО подключает ваши данные — отзывы в Google, продажи, социальные сигналы — и каждое утро делает ИИ-анализ. Вы открываете дверь, уже зная, что происходит и на чём сосредоточиться.
          </p>
          <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
            <Link href="/pricing" style={{
              fontFamily: 'var(--mono)',
              fontSize: 11,
              letterSpacing: '.14em',
              textTransform: 'uppercase',
              color: 'var(--paper)',
              background: 'var(--signal)',
              textDecoration: 'none',
              padding: '14px 28px',
              display: 'inline-block',
            }}>
              Начать бесплатно →
            </Link>
            <Link href="/ru/funktsii" style={{
              fontFamily: 'var(--mono)',
              fontSize: 11,
              letterSpacing: '.14em',
              textTransform: 'uppercase',
              color: 'var(--muted)',
              textDecoration: 'none',
              padding: '14px 0',
            }}>
              Все функции
            </Link>
          </div>
          <div style={{ marginTop: 20, fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--muted-2)', letterSpacing: '.06em' }}>
            7 дней бесплатно · $19/мес после
          </div>
        </section>

        {/* Features */}
        <section style={{ borderTop: '2px solid var(--ink)', borderBottom: '2px solid var(--ink)', background: 'var(--paper)' }}>
          <div style={{ maxWidth: 820, margin: '0 auto', padding: '64px 32px' }}>
            <h2 style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400, fontSize: 36, color: 'var(--ink)', marginBottom: 48 }}>
              Что делает ЗОРКО
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, border: '1px solid var(--line)' }}>
              {features.map((f, i) => (
                <div key={f.label} style={{
                  padding: '32px 28px',
                  background: i % 2 === 0 ? 'var(--bg)' : 'var(--paper)',
                  borderRight: i % 2 === 0 ? '1px solid var(--line)' : 'none',
                  borderBottom: i < 2 ? '1px solid var(--line)' : 'none',
                }}>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--ink)', marginBottom: 12, fontWeight: 500 }}>
                    {f.label}
                  </div>
                  <p style={{ fontFamily: 'var(--sans)', fontSize: 14, color: 'var(--muted)', lineHeight: 1.7 }}>
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section style={{ maxWidth: 820, margin: '0 auto', padding: '72px 32px' }}>
          <h2 style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400, fontSize: 36, color: 'var(--ink)', marginBottom: 48 }}>
            Как это работает
          </h2>
          {[
            { n: '01', title: 'Подключите источники', desc: 'Добавьте Google Места, данные продаж, погоду. Занимает 5 минут — без разработчика и API-ключей.' },
            { n: '02', title: 'Настройте приоритеты', desc: 'Скажите ЗОРКО, что важно именно вашему бизнесу: ключевые товары, часы пик, тематики отзывов.' },
            { n: '03', title: 'Читайте бриф каждое утро', desc: 'До открытия ЗОРКО отправляет вам чёткий анализ: что изменилось, что важно, на чём сосредоточиться сегодня.' },
          ].map(step => (
            <div key={step.n} style={{
              display: 'grid',
              gridTemplateColumns: '80px 1fr',
              gap: 32,
              padding: '32px 0',
              borderTop: '1px solid var(--line)',
            }}>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 28, color: 'var(--muted-2)' }}>{step.n}</div>
              <div>
                <h3 style={{ fontFamily: 'var(--sans)', fontSize: 16, fontWeight: 600, color: 'var(--ink)', marginBottom: 8 }}>{step.title}</h3>
                <p style={{ fontFamily: 'var(--sans)', fontSize: 14, color: 'var(--muted)', lineHeight: 1.7 }}>{step.desc}</p>
              </div>
            </div>
          ))}
        </section>

        {/* For whom */}
        <section style={{ background: 'var(--bg-2)', borderTop: '1px solid var(--line)' }}>
          <div style={{ maxWidth: 820, margin: '0 auto', padding: '64px 32px' }}>
            <h2 style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400, fontSize: 32, color: 'var(--ink)', marginBottom: 32 }}>
              Для кого ЗОРКО
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
              {[
                { type: 'Розничная торговля', desc: 'Продажи, запасы, отзывы покупателей, анализ категорий товаров каждое утро.' },
                { type: 'Рестораны и кафе', desc: 'Бронирования, отзывы, прогноз на выходные, влияние погоды на поток гостей.' },
                { type: 'Сервисный бизнес', desc: 'Салоны, клиники, мастерские — обратная связь клиентов, запись, приоритет дня.' },
              ].map(({ type, desc }) => (
                <div key={type} style={{ padding: '24px', background: 'var(--paper)', border: '1px solid var(--line)' }}>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--ink)', marginBottom: 10, fontWeight: 500 }}>{type}</div>
                  <p style={{ fontFamily: 'var(--sans)', fontSize: 13, color: 'var(--muted)', lineHeight: 1.6 }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing block */}
        <section style={{ maxWidth: 820, margin: '0 auto', padding: '72px 32px' }}>
          <h2 style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400, fontSize: 32, color: 'var(--ink)', marginBottom: 32 }}>
            Тарифы
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, border: '1px solid var(--ink)' }}>
            <div style={{ padding: '32px 28px', background: 'var(--bg-2)', borderRight: '1px solid var(--ink)' }}>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '.24em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 12 }}>Бесплатно</div>
              <div style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 40, color: 'var(--ink)', marginBottom: 20 }}>$0</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8, fontFamily: 'var(--sans)', fontSize: 13, color: 'var(--ink-2)' }}>
                <div>1 источник данных</div>
                <div>3 брифа в неделю</div>
                <div>Демо-режим</div>
              </div>
            </div>
            <div style={{ padding: '32px 28px', background: 'var(--paper)', position: 'relative' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'var(--signal)' }} />
              <div style={{ fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '.24em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 12 }}>Pro</div>
              <div style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 40, color: 'var(--ink)', marginBottom: 20 }}>$19<span style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--muted)' }}>/мес</span></div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8, fontFamily: 'var(--sans)', fontSize: 13, color: 'var(--ink-2)', marginBottom: 24 }}>
                <div>Неограниченные источники</div>
                <div>AI-бриф каждое утро</div>
                <div>Шёпоты и фокус дня</div>
                <div>7-дневный прогноз</div>
                <div>7 дней бесплатного периода</div>
              </div>
              <Link href="/pricing" style={{
                fontFamily: 'var(--mono)',
                fontSize: 10,
                letterSpacing: '.12em',
                textTransform: 'uppercase',
                color: 'var(--paper)',
                background: 'var(--signal)',
                textDecoration: 'none',
                padding: '10px 20px',
                display: 'inline-block',
              }}>
                Начать →
              </Link>
            </div>
          </div>
        </section>

        {/* CTA band */}
        <section style={{ background: 'var(--ink)', padding: '56px 32px', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400, fontSize: 32, color: 'var(--paper)', marginBottom: 16 }}>
            Начните первое утро с ясностью
          </h2>
          <p style={{ fontFamily: 'var(--sans)', fontSize: 15, color: 'var(--muted-2)', marginBottom: 32 }}>
            7 дней бесплатно. Первый бриф — в течение суток после подключения.
          </p>
          <Link href="/pricing" style={{
            fontFamily: 'var(--mono)',
            fontSize: 11,
            letterSpacing: '.14em',
            textTransform: 'uppercase',
            color: 'var(--ink)',
            background: 'var(--paper)',
            textDecoration: 'none',
            padding: '14px 28px',
            display: 'inline-block',
          }}>
            Попробовать бесплатно →
          </Link>
        </section>
      </main>

      <MarketingFooter lang="ru" />
    </div>
  )
}
