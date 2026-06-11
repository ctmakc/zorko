import type { Metadata } from 'next'
import Link from 'next/link'
import { MarketingNav } from '@/components/marketing/MarketingNav'
import { MarketingFooter } from '@/components/marketing/MarketingFooter'

export const metadata: Metadata = {
  title: 'ИИ-инструменты для малого бизнеса в 2026 году: что реально работает | ЗОРКО',
  description: 'Обзор 6 ИИ-инструментов для малого бизнеса: ChatGPT, ЗОРКО, Canva AI, Notion AI, Rev.ai, Tidio — с честными оценками того, что работает, а что нет.',
  alternates: {
    canonical: 'https://zorko-three.vercel.app/ru/blog/ii-instrumenty-malyy-biznes-2026',
  },
  openGraph: {
    title: 'ИИ-инструменты для малого бизнеса в 2026 году: что реально работает',
    description: 'Обзор 6 ИИ-инструментов с честными оценками — для владельца малого бизнеса, а не для технаря.',
    url: 'https://zorko-three.vercel.app/ru/blog/ii-instrumenty-malyy-biznes-2026',
    locale: 'ru_RU',
    type: 'article',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'ИИ-инструменты для малого бизнеса в 2026 году: что реально работает',
  description: 'Обзор 6 ИИ-инструментов для малого бизнеса с честными оценками: ChatGPT, ЗОРКО, Canva AI, Notion AI, Rev.ai, Tidio.',
  url: 'https://zorko-three.vercel.app/ru/blog/ii-instrumenty-malyy-biznes-2026',
  datePublished: '2026-05-15',
  dateModified: '2026-05-15',
  inLanguage: 'ru',
  author: { '@type': 'Organization', name: 'ЗОРКО' },
  publisher: { '@type': 'Organization', name: 'ЗОРКО', url: 'https://zorko-three.vercel.app' },
  keywords: ['ии инструменты малый бизнес', 'лучшие ии инструменты 2026', 'ии для бизнеса 2026', 'искусственный интеллект инструменты'],
}

const tools = [
  {
    name: 'ChatGPT (OpenAI)',
    category: 'Текст и контент',
    rating: '★★★★☆',
    what: 'Генерация текстов, ответы на вопросы, черновики писем и постов, помощь с анализом информации.',
    works: 'Хорошо работает для контента, писем клиентам, описания продуктов. Экономит время на черновиках.',
    doesnt: 'Не видит ваши бизнес-данные. Не знает ваших клиентов. Требует чёткого промпта — без него даёт общие ответы.',
    price: 'Бесплатно / $20 в месяц за Plus',
  },
  {
    name: 'ЗОРКО',
    category: 'Аналитика и брифинги',
    rating: '★★★★★',
    what: 'Ежедневный ИИ-брифинг на основе ваших данных: отзывы Google, метрики бизнеса, сигналы конкурентов.',
    works: 'Лучше всего работает для владельцев, которые тратят время на ручной сбор данных каждое утро. Видит паттерны, которые не видны в ручном режиме.',
    doesnt: 'Не публикует контент, не управляет соцсетями. Нужен хотя бы один источник данных для подключения.',
    price: 'Бесплатно 7 дней, от $19/мес',
  },
  {
    name: 'Canva AI',
    category: 'Дизайн и визуал',
    rating: '★★★★☆',
    what: 'Генерация изображений, автоматическое изменение размеров, ИИ-предложения по дизайну, Magic Write для текста.',
    works: 'Существенно ускоряет создание визуального контента для соцсетей, меню, постеров. Не требует дизайнерских навыков.',
    doesnt: 'Качество сгенерированных изображений нестабильно. Для серьёзного брендинга нужен человек.',
    price: 'Бесплатно / Canva Pro $15/мес',
  },
  {
    name: 'Notion AI',
    category: 'Документы и заметки',
    rating: '★★★☆☆',
    what: 'Суммаризация документов, генерация текста внутри Notion, авто-заполнение таблиц, помощь с задачами.',
    works: 'Полезно, если вы уже работаете в Notion. Экономит время на оформлении внутренних документов.',
    doesnt: 'Если вы не используете Notion как основной инструмент, ценность низкая. Встроен в платформу, не автономен.',
    price: 'Notion AI: $10/мес поверх плана Notion',
  },
  {
    name: 'Rev.ai / Otter.ai',
    category: 'Транскрипция и голос',
    rating: '★★★★☆',
    what: 'Автоматическая расшифровка аудио и видео, суммаризация совещаний, создание субтитров.',
    works: 'Отлично для бизнесов с совещаниями, тренингами, обучающими материалами. Экономит часы ручной транскрипции.',
    doesnt: 'Менее полезно для розничного ритейла или ресторанов без регулярных совещаний.',
    price: 'Бесплатно базово / $9–29/мес',
  },
  {
    name: 'Tidio',
    category: 'Чат и клиентский сервис',
    rating: '★★★★☆',
    what: 'ИИ-чатбот для сайта, автоматические ответы на типовые вопросы, интеграция с мессенджерами.',
    works: 'Хорошо для бизнесов с повторяющимися вопросами: часы работы, цены, запись, доставка. Снижает нагрузку на команду.',
    doesnt: 'Нестандартные запросы всё равно требуют живого ответа. Нужна начальная настройка сценариев.',
    price: 'Бесплатно базово / $19–39/мес',
  },
]

export default function RuBlogPostAITools2026() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', overflowY: 'auto', overflow: 'auto' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <MarketingNav lang="ru" />

      <article style={{ maxWidth: 680, margin: '0 auto', padding: '72px 32px 96px' }}>
        <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 40, display: 'flex', gap: 12, alignItems: 'center' }}>
          <Link href="/blog" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Блог</Link>
          <span>→</span>
          <span>ИИ-инструменты 2026</span>
        </div>

        <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 16 }}>
          Май 2026 · 8 мин чтения
        </div>
        <h1 style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400, fontSize: 44, lineHeight: 1.1, letterSpacing: '-0.02em', color: 'var(--ink)', marginBottom: 32 }}>
          ИИ-инструменты для малого бизнеса в 2026 году: что реально работает
        </h1>
        <p style={{ fontFamily: 'var(--serif)', fontSize: 19, color: 'var(--ink-2)', lineHeight: 1.75, marginBottom: 56, fontStyle: 'italic' }}>
          Обзор 6 инструментов с честными оценками. Без маркетинговых обещаний — только что работает на практике для владельца малого бизнеса.
        </p>

        <div style={{ fontFamily: 'var(--sans)', fontSize: 16, color: 'var(--ink-2)', lineHeight: 1.85 }}>

          <h2 style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400, fontSize: 28, color: 'var(--ink)', margin: '48px 0 20px' }}>Как выбирать ИИ-инструмент для бизнеса</h2>

          <p style={{ marginBottom: 20 }}>
            Правильный вопрос при выборе — не «какой ИИ самый мощный?», а «какую конкретную задачу он решит для меня?». ИИ-инструменты резко отличаются по тому, для чего они созданы. Инструмент, идеальный для маркетолога, может быть бесполезен для ресторатора.
          </p>

          <p style={{ marginBottom: 20 }}>
            В обзоре ниже для каждого инструмента указано: что он делает хорошо, что плохо, и для какого бизнеса он подходит.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 36, margin: '40px 0' }}>
            {tools.map(({ name, category, rating, what, works, doesnt, price }) => (
              <div key={name} style={{ paddingBottom: 32, borderBottom: '1px solid var(--line)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8, flexWrap: 'wrap', gap: 8 }}>
                  <div>
                    <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--signal)', marginBottom: 4 }}>{category}</div>
                    <div style={{ fontFamily: 'var(--sans)', fontSize: 20, fontWeight: 600, color: 'var(--ink)' }}>{name}</div>
                  </div>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 14, color: 'var(--signal)' }}>{rating}</div>
                </div>
                <p style={{ marginBottom: 12, fontSize: 15 }}>{what}</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 12 }}>
                  <div style={{ fontFamily: 'var(--sans)', fontSize: 13, color: 'var(--ink)', background: 'var(--paper)', padding: '6px 12px', borderLeft: '3px solid var(--signal)' }}>
                    Работает: {works}
                  </div>
                  <div style={{ fontFamily: 'var(--sans)', fontSize: 13, color: 'var(--muted)', padding: '6px 12px', borderLeft: '3px solid var(--line)' }}>
                    Не работает: {doesnt}
                  </div>
                </div>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--muted)', letterSpacing: '.04em' }}>Цена: {price}</div>
              </div>
            ))}
          </div>

          <h2 style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400, fontSize: 28, color: 'var(--ink)', margin: '48px 0 20px' }}>Рекомендуемый стартовый набор</h2>

          <p style={{ marginBottom: 20 }}>
            Если вы только начинаете с ИИ-инструментами, не берите всё сразу. Начните с двух:
          </p>

          <ul style={{ paddingLeft: 24, marginBottom: 24, display: 'flex', flexDirection: 'column', gap: 12 }}>
            <li><strong>ChatGPT</strong> — для черновиков текстов, ответов клиентам, описания меню или услуг. Ежедневный инструмент с широким применением.</li>
            <li><strong>ЗОРКО</strong> — для утреннего брифинга по данным бизнеса. Решает конкретную задачу: вы начинаете день с полной картиной, а не с кусочками информации из разных источников.</li>
          </ul>

          <p style={{ marginBottom: 20 }}>
            Освоите эти два — добавляйте остальные по мере необходимости. Перегруз инструментами так же вреден, как их отсутствие.
          </p>

          <blockquote style={{ borderLeft: '3px solid var(--signal)', paddingLeft: 24, margin: '36px 0', fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 20, color: 'var(--ink)', lineHeight: 1.6 }}>
            «Лучший ИИ-инструмент — тот, который вы используете каждый день. Не самый мощный.»
          </blockquote>

        </div>

        <div style={{ marginTop: 64, padding: '40px', background: 'var(--ink)', display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'flex-start' }}>
          <div style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 24, color: 'var(--paper)' }}>
            Попробуйте ЗОРКО бесплатно
          </div>
          <p style={{ fontFamily: 'var(--sans)', fontSize: 14, color: 'var(--muted-2)', lineHeight: 1.6 }}>
            7 дней. Подключите Google Места и получите первый ИИ-бриф в течение суток. Карта не нужна.
          </p>
          <Link href="/pricing" style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--ink)', background: 'var(--paper)', textDecoration: 'none', padding: '12px 24px', display: 'inline-block' }}>
            Попробовать ЗОРКО бесплатно →
          </Link>
        </div>

        <div style={{ marginTop: 48, paddingTop: 40, borderTop: '1px solid var(--line)' }}>
          <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 24 }}>Ещё из блога</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <Link href="/ru/blog/kak-ii-pomogaet-malomu-biznesu" style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 18, color: 'var(--ink)', textDecoration: 'none' }}>
              Как ИИ реально помогает малому бизнесу →
            </Link>
            <Link href="/ru/blog/sravnenie-ii-vs-marketolog" style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 18, color: 'var(--ink)', textDecoration: 'none' }}>
              ИИ-аналитика vs нанять маркетолога: что выгоднее →
            </Link>
          </div>
        </div>
      </article>

      <MarketingFooter lang="ru" />
    </div>
  )
}
