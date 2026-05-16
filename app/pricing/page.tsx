import Link from 'next/link'
import { getSubscription } from '@/lib/subscription'
import { PricingClient } from './PricingClient'

export default async function PricingPage() {
  const sub = await getSubscription()
  const tier = sub?.tier ?? 'free'
  const hasCustomer = !!sub?.stripeCustomerId

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', fontFamily: 'var(--sans)' }}>
      {/* Header */}
      <div style={{ borderBottom: '2px solid var(--ink)', padding: '28px 32px 24px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', background: 'var(--bg)' }}>
        <div>
          <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 8 }}>ЗОРКО · Тарифы</div>
          <h1 style={{ fontFamily: 'var(--serif)', fontWeight: 400, fontStyle: 'italic', fontSize: 40, lineHeight: 1, letterSpacing: '-0.02em', color: 'var(--ink)' }}>Острое зрение — без ограничений</h1>
          <p style={{ fontFamily: 'var(--sans)', fontSize: 13, color: 'var(--muted)', marginTop: 8 }}>Подключайте данные, получайте AI-бриф каждый день</p>
        </div>
        <Link href="/" style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--muted)', textDecoration: 'none', padding: '8px 14px', border: '1px solid var(--line)' }}>
          ← Дашборд
        </Link>
      </div>

      <div style={{ maxWidth: 820, margin: '0 auto', padding: '56px 24px' }}>
        {/* Tier indicator if logged in */}
        {sub && (
          <div style={{ marginBottom: 40, padding: '12px 20px', border: '1px solid var(--line)', background: 'var(--paper)', display: 'flex', alignItems: 'center', gap: 10, fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '.06em' }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: tier === 'pro' ? 'var(--moss)' : tier === 'trial' ? 'var(--sky)' : 'var(--muted-2)', display: 'inline-block' }} />
            <span style={{ color: 'var(--muted)', textTransform: 'uppercase' }}>Ваш тариф:</span>
            <span style={{ color: 'var(--ink)', fontWeight: 500, textTransform: 'uppercase' }}>
              {tier === 'pro' ? 'Pro — активен' : tier === 'trial' ? `Пробный период${sub.trialEndsAt ? ` · до ${new Date(sub.trialEndsAt).toLocaleDateString('ru-RU')}` : ''}` : 'Бесплатный'}
            </span>
          </div>
        )}

        {/* Plans grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, border: '1px solid var(--ink)', marginBottom: 48 }}>
          {/* Free */}
          <div style={{ padding: '36px 32px', background: 'var(--bg-2)', borderRight: '1px solid var(--ink)' }}>
            <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.24em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 16 }}>Бесплатно</div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 28 }}>
              <span style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 48, fontWeight: 400, color: 'var(--ink)', lineHeight: 1 }}>$0</span>
              <span style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--muted)', letterSpacing: '.06em' }}>/мес</span>
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 32 }}>
              {[
                '1 источник данных',
                '3 AI-брифа в неделю',
                'Базовая аналитика',
                'Демо-режим',
              ].map(f => (
                <li key={f} style={{ display: 'flex', gap: 10, fontFamily: 'var(--sans)', fontSize: 13, color: 'var(--ink-2)', lineHeight: 1.4 }}>
                  <span style={{ color: 'var(--muted-2)', fontFamily: 'var(--mono)' }}>–</span>
                  {f}
                </li>
              ))}
            </ul>
            <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--muted-2)', padding: '10px 0', borderTop: '1px solid var(--line)' }}>
              {tier === 'free' ? '✓ Текущий тариф' : 'Входит в Pro'}
            </div>
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
                '7 дней бесплатного пробного периода',
              ].map(f => (
                <li key={f} style={{ display: 'flex', gap: 10, fontFamily: 'var(--sans)', fontSize: 13, color: 'var(--ink-2)', lineHeight: 1.4 }}>
                  <span style={{ color: 'var(--signal)', fontFamily: 'var(--mono)' }}>→</span>
                  {f}
                </li>
              ))}
            </ul>

            <PricingClient tier={tier} hasCustomer={hasCustomer} />
          </div>
        </div>

        {/* FAQ / footnote */}
        <div style={{ borderTop: '1px solid var(--line)', paddingTop: 32, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28 }}>
          {[
            { q: 'Как работает пробный период?', a: '7 дней бесплатно при первой оплате. Введите карту, спишем $19 только через 7 дней. Отмена в один клик.' },
            { q: 'Можно ли отменить в любой момент?', a: 'Да. Через портал управления подпиской — без штрафов, без звонков в поддержку.' },
            { q: 'Что если у меня нет реальных данных?', a: 'Демо-режим работает всегда. Подключите хотя бы один источник — ЗОРКО покажет реальную картину.' },
            { q: 'Когда появятся новые источники?', a: 'Касса, склад, Telegram-чат, Google Calendar — в разработке. Pro-пользователи получат доступ первыми.' },
          ].map(({ q, a }) => (
            <div key={q}>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--ink)', marginBottom: 6, fontWeight: 500 }}>{q}</div>
              <div style={{ fontFamily: 'var(--sans)', fontSize: 13, color: 'var(--muted)', lineHeight: 1.6 }}>{a}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
