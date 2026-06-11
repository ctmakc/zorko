import type { Metadata } from 'next'
import Link from 'next/link'
import { MarketingNav } from '@/components/marketing/MarketingNav'
import { MarketingFooter } from '@/components/marketing/MarketingFooter'

export const metadata: Metadata = {
  title: 'Как ИИ реально помогает малому бизнесу — без лишних слов | ЗОРКО',
  description: 'Конкретные примеры экономии времени с помощью ИИ: отзывы, аналитика, брифинги. Без технического жаргона — только то, что работает для владельца малого бизнеса.',
  alternates: {
    canonical: 'https://zorko-three.vercel.app/ru/blog/kak-ii-pomogaet-malomu-biznesu',
  },
  openGraph: {
    title: 'Как ИИ реально помогает малому бизнесу — без лишних слов',
    description: 'Конкретные примеры: отзывы, аналитика, брифинги. Что ИИ реально делает для малого бизнеса в 2026 году.',
    url: 'https://zorko-three.vercel.app/ru/blog/kak-ii-pomogaet-malomu-biznesu',
    locale: 'ru_RU',
    type: 'article',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Как ИИ реально помогает малому бизнесу — без лишних слов',
  description: 'Конкретные примеры экономии времени с помощью ИИ для малого бизнеса: отзывы, аналитика, брифинги.',
  url: 'https://zorko-three.vercel.app/ru/blog/kak-ii-pomogaet-malomu-biznesu',
  datePublished: '2026-05-15',
  dateModified: '2026-05-15',
  inLanguage: 'ru',
  author: { '@type': 'Organization', name: 'ЗОРКО' },
  publisher: { '@type': 'Organization', name: 'ЗОРКО', url: 'https://zorko-three.vercel.app' },
  keywords: ['ии для малого бизнеса', 'искусственный интеллект малый бизнес', 'ии инструменты для бизнеса', 'автоматизация малого бизнеса'],
}

export default function RuBlogPostAIHelps() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', overflowY: 'auto', overflow: 'auto' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <MarketingNav lang="ru" />

      <article style={{ maxWidth: 680, margin: '0 auto', padding: '72px 32px 96px' }}>
        <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 40, display: 'flex', gap: 12, alignItems: 'center' }}>
          <Link href="/blog" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Блог</Link>
          <span>→</span>
          <span>ИИ для малого бизнеса</span>
        </div>

        <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 16 }}>
          Май 2026 · 7 мин чтения
        </div>
        <h1 style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400, fontSize: 44, lineHeight: 1.1, letterSpacing: '-0.02em', color: 'var(--ink)', marginBottom: 32 }}>
          Как ИИ реально помогает малому бизнесу — без лишних слов
        </h1>
        <p style={{ fontFamily: 'var(--serif)', fontSize: 19, color: 'var(--ink-2)', lineHeight: 1.75, marginBottom: 56, fontStyle: 'italic' }}>
          Вокруг ИИ много шума. Большинство статей написано для технарей или инвесторов. Эта — для владельца малого бизнеса, которому нужно понять: что конкретно изменится, если я начну использовать ИИ?
        </p>

        <div style={{ fontFamily: 'var(--sans)', fontSize: 16, color: 'var(--ink-2)', lineHeight: 1.85 }}>

          <h2 style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400, fontSize: 28, color: 'var(--ink)', margin: '48px 0 20px' }}>Что ИИ не делает (и что это значит для вас)</h2>

          <p style={{ marginBottom: 20 }}>
            ИИ не заменяет вас. Он не принимает решения вместо вас. Он не управляет персоналом, не выбирает поставщиков и не придумывает стратегию. Всё это по-прежнему ваша работа.
          </p>

          <p style={{ marginBottom: 20 }}>
            Что делает ИИ — экономит время на механических задачах: сборе данных, чтении отзывов по одному, составлении стандартных ответов. И помогает замечать паттерны, которые вы бы не увидели, читая информацию по кусочкам.
          </p>

          <h2 style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400, fontSize: 28, color: 'var(--ink)', margin: '48px 0 20px' }}>Пример 1: отзывы</h2>

          <p style={{ marginBottom: 20 }}>
            Каждую неделю кофейня получает 15–20 новых отзывов в Google. Владелец читает их, когда есть время — то есть редко. Паттерны, которые видны в совокупности, не замечаются при чтении по одному.
          </p>

          <p style={{ marginBottom: 20 }}>
            ИИ читает все отзывы и говорит: «На этой неделе "медленное обслуживание" упоминается в 6 из 12 новых отзывов — это больше, чем обычно. Тема появилась после того, как вы сменили смену в понедельник». Это не магия — это просто анализ данных, на который у владельца нет времени делать вручную.
          </p>

          <blockquote style={{ borderLeft: '3px solid var(--signal)', paddingLeft: 24, margin: '36px 0', fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 20, color: 'var(--ink)', lineHeight: 1.6 }}>
            «Я читал каждый отзыв, но не видел связи. ИИ увидел её за три дня.»
          </blockquote>

          <h2 style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400, fontSize: 28, color: 'var(--ink)', margin: '48px 0 20px' }}>Пример 2: ежедневная аналитика</h2>

          <p style={{ marginBottom: 20 }}>
            Владелец салона тратит 40 минут каждое утро на сбор данных: смотрит загрузку расписания, проверяет выручку, читает сообщения клиентов. В итоге — неполная картина, сделанная из кусочков.
          </p>

          <p style={{ marginBottom: 20 }}>
            С ИИ-брифингом: один экран, готовый до открытия, содержит всё — загрузка, выручка, отзывы, аномалии. Не 40 минут, а 2 минуты. Сэкономленные 38 минут — это реальные деньги или время для клиентов.
          </p>

          <h2 style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400, fontSize: 28, color: 'var(--ink)', margin: '48px 0 20px' }}>Пример 3: ответы на отзывы</h2>

          <p style={{ marginBottom: 20 }}>
            Написать хороший ответ на негативный отзыв — сложнее, чем кажется. Нужно быть профессиональным, не оборонительным, конкретным, коротким. Большинство владельцев либо не отвечают вовсе, либо пишут раздражённо.
          </p>

          <p style={{ marginBottom: 20 }}>
            ИИ составляет черновик ответа по каждому отзыву — вы проверяете и отправляете. 45 секунд вместо 10 минут. И, что важнее, без эмоциональной реакции в момент, когда хочется защищаться.
          </p>

          <h2 style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400, fontSize: 28, color: 'var(--ink)', margin: '48px 0 20px' }}>Какие задачи ИИ решает лучше всего</h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, margin: '24px 0' }}>
            {[
              { task: 'Агрегация данных из разных источников', saving: 'Экономия: 30–60 мин/день' },
              { task: 'Выявление паттернов в отзывах', saving: 'Экономия: 2–3 ч/неделю' },
              { task: 'Черновики ответов на отзывы', saving: 'Экономия: 10–15 мин на каждый' },
              { task: 'Прогнозирование спроса и загрузки', saving: 'Лучше: решения о персонале' },
              { task: 'Алерты об аномалиях', saving: 'Ценность: обнаружение до кризиса' },
            ].map(({ task, saving }) => (
              <div key={task} style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 16, padding: '12px 0', borderBottom: '1px solid var(--line)', alignItems: 'center' }}>
                <div style={{ fontFamily: 'var(--sans)', fontSize: 15, color: 'var(--ink)' }}>{task}</div>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--signal)', letterSpacing: '.04em', whiteSpace: 'nowrap' }}>{saving}</div>
              </div>
            ))}
          </div>

          <h2 style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400, fontSize: 28, color: 'var(--ink)', margin: '48px 0 20px' }}>С чего начать</h2>

          <p style={{ marginBottom: 20 }}>
            Не пытайтесь внедрить всё сразу. Начните с одного источника данных — обычно это Google Отзывы, потому что именно там больше всего немедленных инсайтов. Подключите, прочитайте первый бриф, посмотрите, изменилось ли что-то в том, как вы видите свой бизнес.
          </p>

          <p style={{ marginBottom: 20 }}>
            Если изменилось — вы поняли, зачем это нужно. Если нет — значит, пока не ваш инструмент. Честный ответ лучше, чем обещание революции.
          </p>

        </div>

        <div style={{ marginTop: 64, padding: '40px', background: 'var(--ink)', display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'flex-start' }}>
          <div style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 24, color: 'var(--paper)' }}>
            Начните с первого брифинга
          </div>
          <p style={{ fontFamily: 'var(--sans)', fontSize: 14, color: 'var(--muted-2)', lineHeight: 1.6 }}>
            7 дней бесплатно. Подключите Google Места и получите первый ИИ-бриф в течение суток.
          </p>
          <Link href="/pricing" style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--ink)', background: 'var(--paper)', textDecoration: 'none', padding: '12px 24px', display: 'inline-block' }}>
            Попробовать ЗОРКО бесплатно →
          </Link>
        </div>

        <div style={{ marginTop: 48, paddingTop: 40, borderTop: '1px solid var(--line)' }}>
          <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 24 }}>Ещё из блога</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <Link href="/ru/blog/utrenniy-briefing-ii-dlya-biznesa" style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 18, color: 'var(--ink)', textDecoration: 'none' }}>
              Утренний ИИ-брифинг: как сэкономить 2 часа в день →
            </Link>
            <Link href="/ru/blog/ii-instrumenty-malyy-biznes-2026" style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 18, color: 'var(--ink)', textDecoration: 'none' }}>
              ИИ-инструменты для малого бизнеса в 2026 году →
            </Link>
          </div>
        </div>
      </article>

      <MarketingFooter lang="ru" />
    </div>
  )
}
