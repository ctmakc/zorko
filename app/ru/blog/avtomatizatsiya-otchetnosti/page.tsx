import type { Metadata } from 'next'
import Link from 'next/link'
import { MarketingNav } from '@/components/marketing/MarketingNav'
import { MarketingFooter } from '@/components/marketing/MarketingFooter'

export const metadata: Metadata = {
  title: 'Автоматизация отчётности для малого бизнеса: с чего начать | ЗОРКО',
  description: 'Какие отчёты нужны еженедельно, ежемесячно и ежеквартально — и как автоматизировать каждый. Практическое руководство для владельца малого бизнеса.',
  alternates: {
    canonical: 'https://zorko-three.vercel.app/ru/blog/avtomatizatsiya-otchetnosti',
  },
  openGraph: {
    title: 'Автоматизация отчётности для малого бизнеса: с чего начать',
    description: 'Какие отчёты нужны еженедельно, ежемесячно, ежеквартально — и как автоматизировать каждый.',
    url: 'https://zorko-three.vercel.app/ru/blog/avtomatizatsiya-otchetnosti',
    locale: 'ru_RU',
    type: 'article',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Автоматизация отчётности для малого бизнеса: с чего начать',
  description: 'Какие отчёты нужны еженедельно, ежемесячно, ежеквартально и как автоматизировать каждый для малого бизнеса.',
  url: 'https://zorko-three.vercel.app/ru/blog/avtomatizatsiya-otchetnosti',
  datePublished: '2026-05-15',
  dateModified: '2026-05-15',
  inLanguage: 'ru',
  author: { '@type': 'Organization', name: 'ЗОРКО' },
  publisher: { '@type': 'Organization', name: 'ЗОРКО', url: 'https://zorko-three.vercel.app' },
  keywords: ['автоматизация отчётности бизнес', 'автоматические отчёты малый бизнес', 'отчётность малый бизнес', 'автоматизация бизнеса'],
}

const reports = [
  {
    freq: 'Ежедневно',
    reports: [
      { name: 'Дневная выручка', how: 'Автоматически из POS-системы (Square, iiko, r_keeper). Установите дневной алерт, если выручка ниже целевого порога.' },
      { name: 'Новые отзывы', how: 'ЗОРКО отслеживает Google Отзывы за ночь и включает в утренний бриф. Уведомление о новом негативном отзыве в течение часа.' },
    ],
  },
  {
    freq: 'Еженедельно',
    reports: [
      { name: 'Недельная выручка vs план', how: 'Настройте автоматический отчёт в POS-системе на воскресенье или понедельник утром. Большинство современных касс отправляют на email.' },
      { name: 'Анализ отзывов за неделю', how: 'ЗОРКО формирует еженедельный обзор тем и тональности — приходит в начале недели без ручных действий.' },
      { name: 'Загрузка расписания', how: 'Для сервисных бизнесов: отчёт из системы записи (Yclients, Booksy) о заполняемости слотов за неделю.' },
    ],
  },
  {
    freq: 'Ежемесячно',
    reports: [
      { name: 'P&L упрощённый', how: 'Выручка минус основные затраты. Можно автоматизировать через Google Таблицы с подтягиванием данных из банка через API или вручную за 20 минут.' },
      { name: 'Динамика рейтинга', how: 'Скользящий 30-дневный рейтинг Google vs предыдущий месяц. ЗОРКО отслеживает автоматически и включает в ежемесячный обзор.' },
      { name: 'Retention: повторные клиенты', how: 'Из CRM или системы записи: какой процент клиентов этого месяца были в прошлом месяце? Большинство систем умеют этот отчёт.' },
    ],
  },
  {
    freq: 'Ежеквартально',
    reports: [
      { name: 'Обзор сезонности', how: 'Сравнение выручки по месяцам текущего и прошлого года. Выявляет паттерны, которые помогают планировать персонал и запасы на следующий квартал.' },
      { name: 'Анализ клиентской базы', how: 'Сколько новых клиентов? Сколько потерянных (не было больше 90 дней)? Это входные данные для удержания.' },
      { name: 'Конкурентный обзор', how: 'Ручной: посмотрите на рейтинги и новые отзывы ключевых конкурентов. Занимает 30 минут, но важно делать регулярно.' },
    ],
  },
]

export default function RuBlogPostReportingAutomation() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', overflowY: 'auto', overflow: 'auto' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <MarketingNav lang="ru" />

      <article style={{ maxWidth: 680, margin: '0 auto', padding: '72px 32px 96px' }}>
        <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 40, display: 'flex', gap: 12, alignItems: 'center' }}>
          <Link href="/blog" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Блог</Link>
          <span>→</span>
          <span>Автоматизация отчётности</span>
        </div>

        <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 16 }}>
          Май 2026 · 7 мин чтения
        </div>
        <h1 style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400, fontSize: 44, lineHeight: 1.1, letterSpacing: '-0.02em', color: 'var(--ink)', marginBottom: 32 }}>
          Автоматизация отчётности для малого бизнеса: с чего начать
        </h1>
        <p style={{ fontFamily: 'var(--serif)', fontSize: 19, color: 'var(--ink-2)', lineHeight: 1.75, marginBottom: 56, fontStyle: 'italic' }}>
          Ручная отчётность отнимает время, которого у владельца малого бизнеса и так нет. Большинство нужных отчётов можно автоматизировать — вот конкретный план.
        </p>

        <div style={{ fontFamily: 'var(--sans)', fontSize: 16, color: 'var(--ink-2)', lineHeight: 1.85 }}>

          <h2 style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400, fontSize: 28, color: 'var(--ink)', margin: '48px 0 20px' }}>Зачем автоматизировать отчётность</h2>

          <p style={{ marginBottom: 20 }}>
            Проблема ручной отчётности не в том, что она неточная — а в том, что она не делается. Когда отчёт требует 2 часа ручной работы, он откладывается до «когда будет время». Время не появляется. Решения принимаются без данных.
          </p>

          <p style={{ marginBottom: 20 }}>
            Автоматизация превращает «когда-нибудь сделаю» в «уже готово». Отчёт, который генерируется сам и приходит на почту в нужный день, всегда актуален. Его читают. По нему принимают решения.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 32, margin: '40px 0' }}>
            {reports.map(({ freq, reports: reps }) => (
              <div key={freq} style={{ paddingBottom: 28, borderBottom: '1px solid var(--line)' }}>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--signal)', marginBottom: 16 }}>{freq}</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  {reps.map(({ name, how }) => (
                    <div key={name} style={{ display: 'grid', gridTemplateColumns: '10px 1fr', gap: 14, alignItems: 'start' }}>
                      <div style={{ width: 10, height: 10, background: 'var(--signal)', marginTop: 5, flexShrink: 0 }} />
                      <div>
                        <div style={{ fontFamily: 'var(--sans)', fontWeight: 600, color: 'var(--ink)', marginBottom: 4 }}>{name}</div>
                        <div style={{ fontFamily: 'var(--sans)', fontSize: 14, color: 'var(--muted)', lineHeight: 1.6 }}>{how}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <h2 style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400, fontSize: 28, color: 'var(--ink)', margin: '48px 0 20px' }}>Приоритет автоматизации: начните отсюда</h2>

          <p style={{ marginBottom: 20 }}>
            Не нужно автоматизировать всё сразу. Начните с отчёта, который вы откладываете чаще всего. Для большинства владельцев это либо ежедневный обзор выручки, либо мониторинг отзывов.
          </p>

          <p style={{ marginBottom: 20 }}>
            Ежедневный мониторинг отзывов — один из самых простых в автоматизации: <Link href="/ru/blog/utrenniy-briefing-ii-dlya-biznesa" style={{ color: 'var(--ink)', textDecoration: 'underline' }}>ЗОРКО</Link> делает это за ночь и включает в утренний бриф. Отчёт готов до открытия без единого ручного действия.
          </p>

          <blockquote style={{ borderLeft: '3px solid var(--signal)', paddingLeft: 24, margin: '36px 0', fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 20, color: 'var(--ink)', lineHeight: 1.6 }}>
            «Отчёт, который делается сам — читается. Отчёт, который нужно делать вручную — откладывается.»
          </blockquote>

          <h2 style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400, fontSize: 28, color: 'var(--ink)', margin: '48px 0 20px' }}>Что нельзя полностью автоматизировать</h2>

          <p style={{ marginBottom: 20 }}>
            Автоматизация собирает и агрегирует данные. Интерпретация и решение — по-прежнему за вами. Отчёт о падении выручки показывает факт. Понять, почему упало и что с этим делать — задача владельца, а не отчёта.
          </p>

          <p style={{ marginBottom: 20 }}>
            ИИ-аналитика (как ЗОРКО) делает шаг вперёд: не просто показывает данные, но предлагает интерпретацию. Это не замена вашему суждению — это помощник, который берёт на себя механическую часть анализа.
          </p>

        </div>

        <div style={{ marginTop: 64, padding: '40px', background: 'var(--ink)', display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'flex-start' }}>
          <div style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 24, color: 'var(--paper)' }}>
            Автоматизируйте мониторинг отзывов прямо сейчас
          </div>
          <p style={{ fontFamily: 'var(--sans)', fontSize: 14, color: 'var(--muted-2)', lineHeight: 1.6 }}>
            ЗОРКО отслеживает Google Отзывы за ночь и готовит сводку до открытия. 7 дней бесплатно.
          </p>
          <Link href="/pricing" style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--ink)', background: 'var(--paper)', textDecoration: 'none', padding: '12px 24px', display: 'inline-block' }}>
            Попробовать ЗОРКО бесплатно →
          </Link>
        </div>

        <div style={{ marginTop: 48, paddingTop: 40, borderTop: '1px solid var(--line)' }}>
          <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 24 }}>Ещё из блога</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <Link href="/ru/blog/analitika-bez-analitika" style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 18, color: 'var(--ink)', textDecoration: 'none' }}>
              Как анализировать данные бизнеса без штатного аналитика →
            </Link>
            <Link href="/ru/blog/metriki-dlya-kafe-restorana" style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 18, color: 'var(--ink)', textDecoration: 'none' }}>
              Какие метрики отслеживать владельцу кафе или ресторана →
            </Link>
          </div>
        </div>
      </article>

      <MarketingFooter lang="ru" />
    </div>
  )
}
