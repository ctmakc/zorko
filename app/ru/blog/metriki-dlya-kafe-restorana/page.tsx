import type { Metadata } from 'next'
import Link from 'next/link'
import { MarketingNav } from '@/components/marketing/MarketingNav'
import { MarketingFooter } from '@/components/marketing/MarketingFooter'

export const metadata: Metadata = {
  title: 'Какие метрики отслеживать владельцу кафе или ресторана | ЗОРКО',
  description: 'Средний чек, покрытие, отзывы, заполняемость, сезонность — ключевые метрики для кафе и ресторана с конкретными цифрами-ориентирами.',
  alternates: {
    canonical: 'https://zorko-three.vercel.app/ru/blog/metriki-dlya-kafe-restorana',
  },
  openGraph: {
    title: 'Какие метрики отслеживать владельцу кафе или ресторана',
    description: 'Средний чек, покрытие, отзывы, заполняемость — ключевые показатели для ресторанного бизнеса с цифрами-ориентирами.',
    url: 'https://zorko-three.vercel.app/ru/blog/metriki-dlya-kafe-restorana',
    locale: 'ru_RU',
    type: 'article',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Какие метрики отслеживать владельцу кафе или ресторана',
  description: 'Средний чек, покрытие, отзывы, заполняемость, сезонность — с конкретными цифрами-ориентирами.',
  url: 'https://zorko-three.vercel.app/ru/blog/metriki-dlya-kafe-restorana',
  datePublished: '2026-05-15',
  dateModified: '2026-05-15',
  inLanguage: 'ru',
  author: { '@type': 'Organization', name: 'ЗОРКО' },
  publisher: { '@type': 'Organization', name: 'ЗОРКО', url: 'https://zorko-three.vercel.app' },
  keywords: ['метрики для ресторана', 'аналитика кафе показатели', 'кпи ресторана', 'метрики кафе', 'аналитика ресторана'],
}

const metrics = [
  {
    num: '01',
    name: 'Средний чек',
    desc: 'Выручка за период, делённая на количество чеков. Отслеживайте в разрезе: завтрак / обед / ужин отдельно. Рост среднего чека без роста гостей — хороший сигнал. Падение при стабильном потоке — повод пересмотреть меню или обучение персонала.',
    benchmark: 'Ориентир: +5% к среднему чеку за квартал при сохранении потока.',
  },
  {
    num: '02',
    name: 'Покрытие (covers)',
    desc: 'Количество гостей за период. Сравнивайте с тем же днём прошлой недели и прошлого месяца. Покрытие — опережающий индикатор выручки. Падение покрытия сейчас = падение выручки через неделю.',
    benchmark: 'Алерт: минус 20% к аналогичному дню прошлой недели без внешней причины.',
  },
  {
    num: '03',
    name: 'Оборот стола (table turn time)',
    desc: 'Среднее время занятости стола от посадки до освобождения. Оптимальное время зависит от формата: кафе — 25–40 мин, casual dining — 45–70 мин, fine dining — 90+ мин. Слишком быстрый оборот снижает средний чек; слишком медленный — блокирует поток.',
    benchmark: 'Отклонение от норматива более 30% в пиковые часы требует анализа.',
  },
  {
    num: '04',
    name: 'Рейтинг Google (скользящий 30-дней)',
    desc: 'Ваш агрегированный рейтинг по отзывам за последние 30 дней, а не общий — он меняется медленнее и маскирует текущую ситуацию. Скользящий рейтинг показывает тренд до того, как он попадёт в итоговую оценку.',
    benchmark: 'Алерт: скользящий 30-дневный рейтинг ниже 4.0.',
  },
  {
    num: '05',
    name: 'Тональность отзывов по темам',
    desc: 'Какие темы упоминаются в отзывах: еда, обслуживание, ожидание, атмосфера, ценность. Тема с резким ростом негатива — сигнал к действию раньше, чем упадёт сам рейтинг.',
    benchmark: 'Тема с ростом упоминаний более 50% за две недели требует немедленного внимания.',
  },
  {
    num: '06',
    name: 'Заполняемость (утилизация)',
    desc: 'Процент заполненных столов / принятых бронирований от доступного числа. Отслеживайте по смене. Пятничный вечер 95% — норма; среда в обед 30% — возможность для акции.',
    benchmark: 'Целевая утилизация: 70–85% в пиковые периоды.',
  },
  {
    num: '07',
    name: 'Сезонность и внешние факторы',
    desc: 'Соотносите данные с внешними событиями: погода, праздники, городские события, работа ближайших офисов. ИИ помогает строить корреляции автоматически — вы видите, что в дождливые дни завтраки +12%, а в жару спад в обед.',
    benchmark: 'Базис: 12 месяцев исторических данных для качественного сезонного анализа.',
  },
]

export default function RuBlogPostCafeMetrics() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', overflowY: 'auto', overflow: 'auto' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <MarketingNav lang="ru" />

      <article style={{ maxWidth: 680, margin: '0 auto', padding: '72px 32px 96px' }}>
        <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 40, display: 'flex', gap: 12, alignItems: 'center' }}>
          <Link href="/blog" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Блог</Link>
          <span>→</span>
          <span>Метрики ресторана</span>
        </div>

        <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 16 }}>
          Май 2026 · 9 мин чтения
        </div>
        <h1 style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400, fontSize: 44, lineHeight: 1.1, letterSpacing: '-0.02em', color: 'var(--ink)', marginBottom: 32 }}>
          Какие метрики отслеживать владельцу кафе или ресторана
        </h1>
        <p style={{ fontFamily: 'var(--serif)', fontSize: 19, color: 'var(--ink-2)', lineHeight: 1.75, marginBottom: 56, fontStyle: 'italic' }}>
          Ресторанный бизнес сложен тем, что важных показателей много, а времени — мало. Вот 7 метрик с конкретными ориентирами, которые стоит отслеживать каждый день.
        </p>

        <div style={{ fontFamily: 'var(--sans)', fontSize: 16, color: 'var(--ink-2)', lineHeight: 1.85 }}>

          <h2 style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400, fontSize: 28, color: 'var(--ink)', margin: '48px 0 20px' }}>Почему ресторанная аналитика особенная</h2>

          <p style={{ marginBottom: 20 }}>
            В ресторанном бизнесе всё взаимосвязано сложнее, чем в рознице. Средний чек зависит от состава меню и умения официантов продавать. Заполняемость — от репутации и сезона. Оборот стола — от кухни и сервиса одновременно. Отзывы влияют на всё.
          </p>

          <p style={{ marginBottom: 20 }}>
            Именно поэтому смотреть на один показатель недостаточно. Нужна система метрик, которые дополняют друг друга — и которую можно читать быстро, каждый день.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 32, margin: '40px 0' }}>
            {metrics.map(({ num, name, desc, benchmark }) => (
              <div key={num} style={{ display: 'grid', gridTemplateColumns: '48px 1fr', gap: 20, alignItems: 'start', paddingBottom: 32, borderBottom: '1px solid var(--line)' }}>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 22, color: 'var(--signal)', fontWeight: 700, lineHeight: 1 }}>{num}</div>
                <div>
                  <div style={{ fontFamily: 'var(--sans)', fontSize: 17, fontWeight: 600, color: 'var(--ink)', marginBottom: 10 }}>{name}</div>
                  <p style={{ marginBottom: 12 }}>{desc}</p>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--muted)', background: 'var(--paper)', padding: '8px 14px', borderLeft: '3px solid var(--signal)', lineHeight: 1.6 }}>
                    {benchmark}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h2 style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400, fontSize: 28, color: 'var(--ink)', margin: '48px 0 20px' }}>Как отслеживать всё это без отдельного аналитика</h2>

          <p style={{ marginBottom: 20 }}>
            Ручной сбор этих данных занимает 40–60 минут ежедневно. Для большинства владельцев это нереально — есть открытие, персонал, поставки, гости.
          </p>

          <p style={{ marginBottom: 20 }}>
            ЗОРКО собирает часть этих данных автоматически — особенно всё, что связано с отзывами и репутацией — и включает в <Link href="/ru/blog/utrenniy-briefing-ii-dlya-biznesa" style={{ color: 'var(--ink)', textDecoration: 'underline' }}>утренний брифинг</Link>. Вы видите сводку до открытия, без ручного сбора.
          </p>

          <blockquote style={{ borderLeft: '3px solid var(--signal)', paddingLeft: 24, margin: '36px 0', fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 20, color: 'var(--ink)', lineHeight: 1.6 }}>
            «Ресторан генерирует больше данных, чем любой другой малый бизнес. Проблема — не в нехватке данных, а в том, что на их анализ нет времени.»
          </blockquote>

        </div>

        <div style={{ marginTop: 64, padding: '40px', background: 'var(--ink)', display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'flex-start' }}>
          <div style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 24, color: 'var(--paper)' }}>
            Начните с ежедневного аналитического брифинга
          </div>
          <p style={{ fontFamily: 'var(--sans)', fontSize: 14, color: 'var(--muted-2)', lineHeight: 1.6 }}>
            ЗОРКО анализирует данные вашего ресторана за ночь и готовит сводку до открытия. 7 дней бесплатно.
          </p>
          <Link href="/pricing" style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--ink)', background: 'var(--paper)', textDecoration: 'none', padding: '12px 24px', display: 'inline-block' }}>
            Попробовать ЗОРКО бесплатно →
          </Link>
        </div>

        <div style={{ marginTop: 48, paddingTop: 40, borderTop: '1px solid var(--line)' }}>
          <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 24 }}>Ещё из блога</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <Link href="/ru/blog/monitoring-otzyvov-google" style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 18, color: 'var(--ink)', textDecoration: 'none' }}>
              Мониторинг отзывов Google для малого бизнеса →
            </Link>
            <Link href="/ru/blog/analitika-bez-analitika" style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 18, color: 'var(--ink)', textDecoration: 'none' }}>
              Как анализировать данные бизнеса без штатного аналитика →
            </Link>
          </div>
        </div>
      </article>

      <MarketingFooter lang="ru" />
    </div>
  )
}
