import type { Metadata } from 'next'
import Link from 'next/link'
import { MarketingNav } from '@/components/marketing/MarketingNav'
import { MarketingFooter } from '@/components/marketing/MarketingFooter'

export const metadata: Metadata = {
  title: 'Как анализировать данные бизнеса без штатного аналитика | ЗОРКО',
  description: 'Таблицы vs BI-системы vs ИИ-дайджест: пошаговый подход к аналитике для владельца малого бизнеса без технических навыков.',
  alternates: {
    canonical: 'https://zorko-three.vercel.app/ru/blog/analitika-bez-analitika',
  },
  openGraph: {
    title: 'Как анализировать данные бизнеса без штатного аналитика',
    description: 'Таблицы, BI-системы, ИИ-дайджест — пошаговый подход к аналитике малого бизнеса.',
    url: 'https://zorko-three.vercel.app/ru/blog/analitika-bez-analitika',
    locale: 'ru_RU',
    type: 'article',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Как анализировать данные бизнеса без штатного аналитика',
  description: 'Таблицы vs BI-системы vs ИИ-дайджест, пошаговый подход к бизнес-аналитике без технических навыков.',
  url: 'https://zorko-three.vercel.app/ru/blog/analitika-bez-analitika',
  datePublished: '2026-05-15',
  dateModified: '2026-05-15',
  inLanguage: 'ru',
  author: { '@type': 'Organization', name: 'ЗОРКО' },
  publisher: { '@type': 'Organization', name: 'ЗОРКО', url: 'https://zorko-three.vercel.app' },
  keywords: ['аналитика малого бизнеса без аналитика', 'бизнес-аналитика самостоятельно', 'анализ данных малый бизнес', 'бизнес аналитика инструменты'],
}

export default function RuBlogPostAnalyticsWithoutAnalyst() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', overflowY: 'auto', overflow: 'auto' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <MarketingNav lang="ru" />

      <article style={{ maxWidth: 680, margin: '0 auto', padding: '72px 32px 96px' }}>
        <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 40, display: 'flex', gap: 12, alignItems: 'center' }}>
          <Link href="/blog" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Блог</Link>
          <span>→</span>
          <span>Аналитика без аналитика</span>
        </div>

        <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 16 }}>
          Май 2026 · 8 мин чтения
        </div>
        <h1 style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400, fontSize: 44, lineHeight: 1.1, letterSpacing: '-0.02em', color: 'var(--ink)', marginBottom: 32 }}>
          Как анализировать данные бизнеса без штатного аналитика
        </h1>
        <p style={{ fontFamily: 'var(--serif)', fontSize: 19, color: 'var(--ink-2)', lineHeight: 1.75, marginBottom: 56, fontStyle: 'italic' }}>
          Аналитик в штат стоит 80–150 тысяч рублей в месяц. Для большинства малых бизнесов это нереально. Но без анализа данных — принимать решения вслепую. Вот пошаговый подход, который работает без специалиста.
        </p>

        <div style={{ fontFamily: 'var(--sans)', fontSize: 16, color: 'var(--ink-2)', lineHeight: 1.85 }}>

          <h2 style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400, fontSize: 28, color: 'var(--ink)', margin: '48px 0 20px' }}>Три уровня аналитики: выберите свой</h2>

          <p style={{ marginBottom: 20 }}>
            Не всем нужен одинаковый уровень аналитики. Кафе с одной точкой и кофейная сеть из семи точек имеют разные потребности. Начните с уровня, который соответствует вашей ситуации сейчас.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 28, margin: '32px 0' }}>
            {[
              {
                level: 'Уровень 1: Таблицы',
                for: 'Бизнес до 3 лет, одна точка, менее 100 транзакций в неделю',
                desc: 'Google Таблицы или Excel. Записывайте ежедневную выручку, количество чеков, ключевые расходы. Делайте недельный итог по пятницам. Простая диаграмма с трендом — уже лучше, чем ничего.',
                tool: 'Инструмент: Google Таблицы (бесплатно)',
              },
              {
                level: 'Уровень 2: BI-дашборд',
                for: 'Бизнес 3+ лет, стабильный поток, данные в нескольких системах',
                desc: 'Google Looker Studio подключается к вашим источникам данных и строит дашборды визуально. Требует начальной настройки (2–4 часа), но потом обновляется автоматически. Вы видите тренды, а не только последние числа.',
                tool: 'Инструмент: Google Looker Studio (бесплатно)',
              },
              {
                level: 'Уровень 3: ИИ-интерпретация',
                for: 'Бизнес с онлайн-присутствием, Google отзывы, желание экономить время на анализе',
                desc: 'ИИ-инструменты читают ваши данные и говорят, что они означают — в понятном тексте. Вместо таблицы с числами вы получаете: «Выручка вчера была ниже целевой на 18%. Вероятная причина — вторник после длинных выходных, исторически спад на 20–25%. Ничего аномального.»',
                tool: 'Инструмент: ЗОРКО (от $19/мес)',
              },
            ].map(({ level, for: forWho, desc, tool }) => (
              <div key={level} style={{ padding: '24px', background: 'var(--paper)', border: '1px solid var(--line)' }}>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--signal)', marginBottom: 8 }}>{level}</div>
                <div style={{ fontFamily: 'var(--sans)', fontSize: 12, color: 'var(--muted)', marginBottom: 14, fontStyle: 'italic' }}>Подходит: {forWho}</div>
                <p style={{ marginBottom: 14, fontSize: 15 }}>{desc}</p>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--muted)', letterSpacing: '.04em' }}>{tool}</div>
              </div>
            ))}
          </div>

          <h2 style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400, fontSize: 28, color: 'var(--ink)', margin: '48px 0 20px' }}>С чего начать: три шага</h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 24, margin: '28px 0' }}>
            {[
              {
                step: '1',
                title: 'Определите три главных вопроса',
                desc: 'Что вы чаще всего хотите знать о своём бизнесе? «Как прошёл день?», «Почему упала выручка в среду?», «Что пишут клиенты?» Начните с трёх вопросов — и найдите данные, которые на них отвечают.',
              },
              {
                step: '2',
                title: 'Подключите один источник данных',
                desc: 'Не пытайтесь собрать всё сразу. Начните с одного источника, который даёт самые важные ответы. Для большинства — это Google Отзывы или кассовые данные из POS-системы.',
              },
              {
                step: '3',
                title: 'Сделайте аналитику привычкой',
                desc: 'Аналитика работает только если её делать регулярно. 15 минут в пятницу утром для недельного обзора — лучше, чем 3 часа раз в месяц в панике. Привычка важнее инструмента.',
              },
            ].map(({ step, title, desc }) => (
              <div key={step} style={{ display: 'grid', gridTemplateColumns: '32px 1fr', gap: 16, alignItems: 'start' }}>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 13, color: 'var(--signal)', fontWeight: 700 }}>{step}.</div>
                <div>
                  <div style={{ fontFamily: 'var(--sans)', fontSize: 16, fontWeight: 600, color: 'var(--ink)', marginBottom: 8 }}>{title}</div>
                  <div style={{ fontFamily: 'var(--sans)', fontSize: 14, color: 'var(--muted)', lineHeight: 1.7 }}>{desc}</div>
                </div>
              </div>
            ))}
          </div>

          <h2 style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400, fontSize: 28, color: 'var(--ink)', margin: '48px 0 20px' }}>Что делает ИИ-аналитика иначе</h2>

          <p style={{ marginBottom: 20 }}>
            Разница между таблицей и ИИ-анализом — не в точности данных, а в интерпретации. Таблица показывает: выручка вчера 47 000 рублей. ИИ говорит: «47 000 рублей — это на 12% ниже вашего среднего вторника за последние 4 недели. При этом Google Отзывы вчера были нейтральными, а погода была дождливой — что исторически снижает у вас утренний поток на 8–15%.»
          </p>

          <p style={{ marginBottom: 20 }}>
            Это не аналитик — но это и не просто цифра. Это контекст, который помогает принять решение.
          </p>

          <blockquote style={{ borderLeft: '3px solid var(--signal)', paddingLeft: 24, margin: '36px 0', fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 20, color: 'var(--ink)', lineHeight: 1.6 }}>
            «Данные без интерпретации — это просто числа. ИИ добавляет интерпретацию без аналитика в штате.»
          </blockquote>

        </div>

        <div style={{ marginTop: 64, padding: '40px', background: 'var(--ink)', display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'flex-start' }}>
          <div style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 24, color: 'var(--paper)' }}>
            Попробуйте ИИ-аналитику для вашего бизнеса
          </div>
          <p style={{ fontFamily: 'var(--sans)', fontSize: 14, color: 'var(--muted-2)', lineHeight: 1.6 }}>
            ЗОРКО анализирует данные вашего бизнеса за ночь и даёт интерпретацию каждое утро. 7 дней бесплатно.
          </p>
          <Link href="/pricing" style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--ink)', background: 'var(--paper)', textDecoration: 'none', padding: '12px 24px', display: 'inline-block' }}>
            Попробовать ЗОРКО бесплатно →
          </Link>
        </div>

        <div style={{ marginTop: 48, paddingTop: 40, borderTop: '1px solid var(--line)' }}>
          <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 24 }}>Ещё из блога</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <Link href="/ru/blog/avtomatizatsiya-otchetnosti" style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 18, color: 'var(--ink)', textDecoration: 'none' }}>
              Автоматизация отчётности для малого бизнеса: с чего начать →
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
