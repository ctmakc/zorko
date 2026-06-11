import type { Metadata } from 'next'
import Link from 'next/link'
import { MarketingNav } from '@/components/marketing/MarketingNav'
import { MarketingFooter } from '@/components/marketing/MarketingFooter'

export const metadata: Metadata = {
  title: 'ИИ-аналитика vs нанять маркетолога: что выгоднее для малого бизнеса | ЗОРКО',
  description: 'Честное сравнение: что умеет ИИ-аналитика, что умеет маркетолог, сколько стоит каждый вариант, и когда переходить к человеку.',
  alternates: {
    canonical: 'https://zorko-three.vercel.app/ru/blog/sravnenie-ii-vs-marketolog',
  },
  openGraph: {
    title: 'ИИ-аналитика vs нанять маркетолога: что выгоднее для малого бизнеса',
    description: 'Честное сравнение ИИ-инструментов и штатного маркетолога для малого бизнеса.',
    url: 'https://zorko-three.vercel.app/ru/blog/sravnenie-ii-vs-marketolog',
    locale: 'ru_RU',
    type: 'article',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'ИИ-аналитика vs нанять маркетолога: что выгоднее для малого бизнеса',
  description: 'Что умеет каждый, стоимость, когда переходить к человеку — честное сравнение для малого бизнеса.',
  url: 'https://zorko-three.vercel.app/ru/blog/sravnenie-ii-vs-marketolog',
  datePublished: '2026-05-15',
  dateModified: '2026-05-15',
  inLanguage: 'ru',
  author: { '@type': 'Organization', name: 'ЗОРКО' },
  publisher: { '@type': 'Organization', name: 'ЗОРКО', url: 'https://zorko-three.vercel.app' },
  keywords: ['ии аналитика vs маркетолог', 'нанять маркетолога малый бизнес', 'ии вместо маркетолога', 'маркетинг малого бизнеса'],
}

export default function RuBlogPostAIvsMarketer() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', overflowY: 'auto', overflow: 'auto' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <MarketingNav lang="ru" />

      <article style={{ maxWidth: 680, margin: '0 auto', padding: '72px 32px 96px' }}>
        <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 40, display: 'flex', gap: 12, alignItems: 'center' }}>
          <Link href="/blog" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Блог</Link>
          <span>→</span>
          <span>ИИ vs маркетолог</span>
        </div>

        <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 16 }}>
          Май 2026 · 8 мин чтения
        </div>
        <h1 style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400, fontSize: 44, lineHeight: 1.1, letterSpacing: '-0.02em', color: 'var(--ink)', marginBottom: 32 }}>
          ИИ-аналитика vs нанять маркетолога: что выгоднее для малого бизнеса
        </h1>
        <p style={{ fontFamily: 'var(--serif)', fontSize: 19, color: 'var(--ink-2)', lineHeight: 1.75, marginBottom: 56, fontStyle: 'italic' }}>
          Честный ответ: это разные вещи. ИИ не заменяет маркетолога. Маркетолог не делает то, что делает ИИ. Вопрос в том, что вам нужно прямо сейчас.
        </p>

        <div style={{ fontFamily: 'var(--sans)', fontSize: 16, color: 'var(--ink-2)', lineHeight: 1.85 }}>

          <h2 style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400, fontSize: 28, color: 'var(--ink)', margin: '48px 0 20px' }}>Что умеет маркетолог — и чего не умеет ИИ</h2>

          <p style={{ marginBottom: 20 }}>
            Хороший маркетолог создаёт стратегию: понимает вашу аудиторию, разрабатывает позиционирование, придумывает кампании, строит долгосрочный план. Он принимает творческие решения, работает с неопределённостью и адаптируется к нестандартным ситуациям.
          </p>

          <p style={{ marginBottom: 20 }}>
            Маркетолог также строит отношения: с клиентами, блогерами, партнёрами. Договаривается, переговоривается, убеждает. Это живой человек с собственной сетью и репутацией.
          </p>

          <p style={{ marginBottom: 20 }}>
            ИИ ничего из этого не делает. Он не придумывает стратегию с нуля, не строит отношения и не принимает творческих решений в полном смысле.
          </p>

          <h2 style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400, fontSize: 28, color: 'var(--ink)', margin: '48px 0 20px' }}>Что умеет ИИ — и чего не умеет маркетолог</h2>

          <p style={{ marginBottom: 20 }}>
            ИИ анализирует большие объёмы данных быстро и без эмоций. Он читает 500 отзывов за секунды и выдаёт структурированный вывод. Мониторит конкурентов ежедневно. Строит прогноз на основе исторических паттернов.
          </p>

          <p style={{ marginBottom: 20 }}>
            ИИ доступен 24/7, не устаёт, не болеет и не уходит в отпуск. Один и тот же качественный анализ каждый день — без «хорошего» и «плохого» дня.
          </p>

          <p style={{ marginBottom: 20 }}>
            Маркетолог всё это сделает хуже по скорости и масштабу. Читать 500 отзывов и видеть паттерны — это часы работы для человека. ИИ делает это за минуты.
          </p>

          <div style={{ margin: '36px 0', padding: '28px', background: 'var(--paper)', border: '1px solid var(--line)' }}>
            <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 20 }}>Сравнение по задачам</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 0 }}>
              <div style={{ padding: '8px 0', borderBottom: '1px solid var(--line)', fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--muted)', letterSpacing: '.06em' }}>Задача</div>
              <div style={{ padding: '8px 0 8px 12px', borderBottom: '1px solid var(--line)', fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--muted)', letterSpacing: '.06em' }}>ИИ</div>
              <div style={{ padding: '8px 0 8px 12px', borderBottom: '1px solid var(--line)', fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--muted)', letterSpacing: '.06em' }}>Маркетолог</div>
              {[
                ['Анализ отзывов ежедневно', '★★★★★', '★★☆☆☆'],
                ['Стратегия позиционирования', '★☆☆☆☆', '★★★★★'],
                ['Мониторинг конкурентов', '★★★★★', '★★★☆☆'],
                ['Создание контента', '★★★☆☆', '★★★★★'],
                ['Прогноз на основе данных', '★★★★☆', '★★☆☆☆'],
                ['Переговоры с партнёрами', '—', '★★★★★'],
                ['24/7 мониторинг', '★★★★★', '—'],
              ].map(([task, ai, human]) => (
                <div key={task} style={{ display: 'contents' }}>
                  <div style={{ padding: '10px 0', borderBottom: '1px solid var(--line)', fontFamily: 'var(--sans)', fontSize: 13, color: 'var(--ink)' }}>{task}</div>
                  <div style={{ padding: '10px 0 10px 12px', borderBottom: '1px solid var(--line)', fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--signal)' }}>{ai}</div>
                  <div style={{ padding: '10px 0 10px 12px', borderBottom: '1px solid var(--line)', fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--ink)' }}>{human}</div>
                </div>
              ))}
            </div>
          </div>

          <h2 style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400, fontSize: 28, color: 'var(--ink)', margin: '48px 0 20px' }}>Стоимость: честный расчёт</h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, margin: '24px 0', padding: '24px', background: 'var(--paper)', border: '1px solid var(--line)' }}>
            {[
              { option: 'Штатный маркетолог (джун)', cost: '60 000–80 000 ₽/мес', note: 'Налоги + рабочее место + обучение = ×1.5 к окладу реальных затрат' },
              { option: 'Маркетолог на аутсорс', cost: '30 000–60 000 ₽/мес', note: 'Обычно частичная занятость, стратегия и контент — не аналитика' },
              { option: 'Фриланс-маркетолог (проектно)', cost: '5 000–15 000 ₽/проект', note: 'Разово, не системная работа' },
              { option: 'ИИ-инструменты (ЗОРКО + ChatGPT)', cost: '1 500–3 000 ₽/мес', note: 'Закрывает аналитику и мониторинг. Не закрывает стратегию и отношения.' },
            ].map(({ option, cost, note }) => (
              <div key={option} style={{ paddingBottom: 12, borderBottom: '1px solid var(--line)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 8, marginBottom: 4 }}>
                  <div style={{ fontFamily: 'var(--sans)', fontWeight: 600, color: 'var(--ink)' }}>{option}</div>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--signal)', whiteSpace: 'nowrap' }}>{cost}</div>
                </div>
                <div style={{ fontFamily: 'var(--sans)', fontSize: 13, color: 'var(--muted)', lineHeight: 1.6 }}>{note}</div>
              </div>
            ))}
          </div>

          <h2 style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400, fontSize: 28, color: 'var(--ink)', margin: '48px 0 20px' }}>Когда ИИ достаточно</h2>

          <p style={{ marginBottom: 20 }}>
            Если ваш бизнес работает менее двух лет, вы одна точка, и главная задача — понимать, что происходит с клиентами и репутацией — ИИ-инструменты справятся с большей частью аналитических задач за 2–5% стоимости штатного специалиста.
          </p>

          <h2 style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400, fontSize: 28, color: 'var(--ink)', margin: '48px 0 20px' }}>Когда нужен живой человек</h2>

          <p style={{ marginBottom: 20 }}>
            Маркетолог нужен, когда вы готовы к росту и вам нужна стратегия: выход в новый район, запуск второй точки, ребрендинг, построение лояльной аудитории. ИИ даст вам данные для принятия этих решений — но стратегическое мышление и исполнение требуют человека.
          </p>

          <blockquote style={{ borderLeft: '3px solid var(--signal)', paddingLeft: 24, margin: '36px 0', fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 20, color: 'var(--ink)', lineHeight: 1.6 }}>
            «ИИ экономит деньги на аналитике. Маркетолог зарабатывает деньги на стратегии. Это разные вещи.»
          </blockquote>

        </div>

        <div style={{ marginTop: 64, padding: '40px', background: 'var(--ink)', display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'flex-start' }}>
          <div style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 24, color: 'var(--paper)' }}>
            Начните с ИИ-аналитики — это быстрее и дешевле
          </div>
          <p style={{ fontFamily: 'var(--sans)', fontSize: 14, color: 'var(--muted-2)', lineHeight: 1.6 }}>
            ЗОРКО берёт на себя ежедневный мониторинг отзывов и аналитику. От $19/мес. 7 дней бесплатно.
          </p>
          <Link href="/pricing" style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--ink)', background: 'var(--paper)', textDecoration: 'none', padding: '12px 24px', display: 'inline-block' }}>
            Попробовать ЗОРКО бесплатно →
          </Link>
        </div>

        <div style={{ marginTop: 48, paddingTop: 40, borderTop: '1px solid var(--line)' }}>
          <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 24 }}>Ещё из блога</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <Link href="/ru/blog/ii-instrumenty-malyy-biznes-2026" style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 18, color: 'var(--ink)', textDecoration: 'none' }}>
              ИИ-инструменты для малого бизнеса в 2026 году →
            </Link>
            <Link href="/ru/blog/analitika-bez-analitika" style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 18, color: 'var(--ink)', textDecoration: 'none' }}>
              Как анализировать данные без штатного аналитика →
            </Link>
          </div>
        </div>
      </article>

      <MarketingFooter lang="ru" />
    </div>
  )
}
