import type { Metadata } from 'next'
import Link from 'next/link'
import { MarketingNav } from '@/components/marketing/MarketingNav'
import { MarketingFooter } from '@/components/marketing/MarketingFooter'

export const metadata: Metadata = {
  title: 'Мониторинг отзывов Google для малого бизнеса: зачем и как | ЗОРКО',
  description: 'Почему отзывы Google = деньги, как их отслеживать с помощью ИИ, как отвечать, что делать с негативом. Руководство для владельца малого бизнеса.',
  alternates: {
    canonical: 'https://zorko-three.vercel.app/ru/blog/monitoring-otzyvov-google',
  },
  openGraph: {
    title: 'Мониторинг отзывов Google для малого бизнеса: зачем и как',
    description: 'Почему отзывы Google = деньги, как отслеживать, как отвечать, что делать с негативом.',
    url: 'https://zorko-three.vercel.app/ru/blog/monitoring-otzyvov-google',
    locale: 'ru_RU',
    type: 'article',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Мониторинг отзывов Google для малого бизнеса: зачем и как',
  description: 'Почему отзывы Google влияют на выручку, как отслеживать с помощью ИИ, как отвечать и что делать с негативом.',
  url: 'https://zorko-three.vercel.app/ru/blog/monitoring-otzyvov-google',
  datePublished: '2026-05-15',
  dateModified: '2026-05-15',
  inLanguage: 'ru',
  author: { '@type': 'Organization', name: 'ЗОРКО' },
  publisher: { '@type': 'Organization', name: 'ЗОРКО', url: 'https://zorko-three.vercel.app' },
  keywords: ['мониторинг отзывов гугл', 'отзывы google малый бизнес', 'мониторинг отзывов бизнес', 'управление репутацией гугл'],
}

export default function RuBlogPostGoogleReviewMonitoring() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', overflowY: 'auto', overflow: 'auto' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <MarketingNav lang="ru" />

      <article style={{ maxWidth: 680, margin: '0 auto', padding: '72px 32px 96px' }}>
        <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 40, display: 'flex', gap: 12, alignItems: 'center' }}>
          <Link href="/blog" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Блог</Link>
          <span>→</span>
          <span>Мониторинг отзывов Google</span>
        </div>

        <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 16 }}>
          Май 2026 · 7 мин чтения
        </div>
        <h1 style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400, fontSize: 44, lineHeight: 1.1, letterSpacing: '-0.02em', color: 'var(--ink)', marginBottom: 32 }}>
          Мониторинг отзывов Google для малого бизнеса: зачем и как
        </h1>
        <p style={{ fontFamily: 'var(--serif)', fontSize: 19, color: 'var(--ink-2)', lineHeight: 1.75, marginBottom: 56, fontStyle: 'italic' }}>
          Большинство владельцев читают отзывы случайно — когда пришло уведомление. Систематический мониторинг отзывов — это уже другое. Он превращает поток текстов в управляемый сигнал.
        </p>

        <div style={{ fontFamily: 'var(--sans)', fontSize: 16, color: 'var(--ink-2)', lineHeight: 1.85 }}>

          <h2 style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400, fontSize: 28, color: 'var(--ink)', margin: '48px 0 20px' }}>Почему отзывы Google = деньги</h2>

          <p style={{ marginBottom: 20 }}>
            Исследования показывают: переход рейтинга с 3.5 до 4.0 звезды коррелирует с ростом выручки от 5 до 9% в зависимости от ниши. Это не теория — это данные, собранные на основе поведения потребителей при принятии решения о посещении.
          </p>

          <p style={{ marginBottom: 20 }}>
            Когда потенциальный клиент ищет «кафе рядом» или «сантехник срочно», Google Карты выдают 3 результата — бизнесы с лучшей комбинацией рейтинга, количества отзывов и релевантности. Попасть в эти три — значит получить 60–80% кликов. Выпасть — значит отдать их конкурентам.
          </p>

          <p style={{ marginBottom: 20 }}>
            Рейтинг формируется в реальном времени. Его нельзя купить — только заработать. И потерять его можно быстрее, чем построить.
          </p>

          <blockquote style={{ borderLeft: '3px solid var(--signal)', paddingLeft: 24, margin: '36px 0', fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 20, color: 'var(--ink)', lineHeight: 1.6 }}>
            «Один непрочитанный негативный отзыв, оставшийся без ответа — это не просто плохое впечатление. Это сигнал для алгоритма Google, что бизнес неактивен.»
          </blockquote>

          <h2 style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400, fontSize: 28, color: 'var(--ink)', margin: '48px 0 20px' }}>Что значит мониторить отзывы правильно</h2>

          <p style={{ marginBottom: 20 }}>
            Читать каждый отзыв по уведомлению — это не мониторинг. Это реагирование. Настоящий мониторинг включает:
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, margin: '24px 0' }}>
            {[
              { point: 'Скорость появления отзывов', desc: 'Сколько новых отзывов в день / неделю? Резкое падение — сигнал снижения потока. Резкий рост — значит что-то произошло (хорошее или плохое).' },
              { point: 'Тональность по темам', desc: 'Что пишут о еде, сервисе, ожидании, цене? Какая тема растёт в негативе — не вся оценка, а конкретная тема?' },
              { point: 'Тренд рейтинга', desc: '4.3 звезды в среднем — это статус-кво. 4.3, но падает третью неделю подряд — это проблема. Без скользящего расчёта вы не видите тренда.' },
              { point: 'Ответы и их тайминг', desc: 'Сколько отзывов остаются без ответа? Какой процент негативных отзывов получили ответ в течение 24 часов?' },
            ].map(({ point, desc }) => (
              <div key={point} style={{ display: 'grid', gridTemplateColumns: '10px 1fr', gap: 16, alignItems: 'start', paddingBottom: 14, borderBottom: '1px solid var(--line)' }}>
                <div style={{ width: 10, height: 10, background: 'var(--signal)', marginTop: 5, flexShrink: 0 }} />
                <div>
                  <div style={{ fontFamily: 'var(--sans)', fontWeight: 600, color: 'var(--ink)', marginBottom: 4 }}>{point}</div>
                  <div style={{ fontFamily: 'var(--sans)', fontSize: 14, color: 'var(--muted)', lineHeight: 1.6 }}>{desc}</div>
                </div>
              </div>
            ))}
          </div>

          <h2 style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400, fontSize: 28, color: 'var(--ink)', margin: '48px 0 20px' }}>Как отвечать на отзывы: коротко и по делу</h2>

          <p style={{ marginBottom: 20 }}>
            На положительные отзывы: персонализированный короткий ответ лучше шаблона. Упомяните что-то конкретное из отзыва — имя блюда, событие, деталь. Это занимает 30 секунд и оставляет принципиально другое впечатление.
          </p>

          <p style={{ marginBottom: 20 }}>
            На негативные: четыре шага — признать, принять ответственность там, где она есть, предложить решить офлайн, завершить позитивно. Не защищайтесь публично. Не пишите длинно. Не используйте фразы «сожалеем, что вы так почувствовали» — это читается как отказ от ответственности.
          </p>

          <p style={{ marginBottom: 20 }}>
            ЗОРКО составляет черновики ответов автоматически — вы проверяете и отправляете. Это убирает задержку и снижает вероятность эмоциональной реакции в момент, когда хочется защититься.
          </p>

          <h2 style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400, fontSize: 28, color: 'var(--ink)', margin: '48px 0 20px' }}>Что делать с негативом системно</h2>

          <p style={{ marginBottom: 20 }}>
            Один плохой отзыв — не проблема. Паттерн из трёх плохих отзывов об одном и том же — сигнал. ИИ-мониторинг видит этот паттерн сразу, вы — только если читаете отзывы системно и помните предыдущие.
          </p>

          <p style={{ marginBottom: 20 }}>
            Когда негативная тема выявлена: проверьте операционный процесс на этом участке. Поговорите с персоналом. Сделайте изменение. Затем следите, изменилась ли тема в следующих отзывах. Это реальная обратная связь от рынка — быстрее и честнее любого опроса.
          </p>

        </div>

        <div style={{ marginTop: 64, padding: '40px', background: 'var(--ink)', display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'flex-start' }}>
          <div style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 24, color: 'var(--paper)' }}>
            Мониторьте отзывы автоматически
          </div>
          <p style={{ fontFamily: 'var(--sans)', fontSize: 14, color: 'var(--muted-2)', lineHeight: 1.6 }}>
            ЗОРКО отслеживает ваши отзывы за ночь и включает аналитику в утренний бриф. 7 дней бесплатно.
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
            <Link href="/blog/negative-review-response-guide" style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 18, color: 'var(--ink)', textDecoration: 'none' }}>
              How to Respond to Negative Reviews (EN) →
            </Link>
          </div>
        </div>
      </article>

      <MarketingFooter lang="ru" />
    </div>
  )
}
