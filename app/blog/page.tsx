import type { Metadata } from 'next'
import Link from 'next/link'
import { MarketingNav } from '@/components/marketing/MarketingNav'
import { MarketingFooter } from '@/components/marketing/MarketingFooter'

export const metadata: Metadata = {
  title: 'Blog — AI Dashboard for Small Business | ZORKO',
  description: 'Guides and insights on using AI to run a better small business. Morning briefs, dashboard analytics, data-driven decisions for owners without a data team.',
  alternates: {
    canonical: 'https://zorko-three.vercel.app/blog',
  },
  openGraph: {
    title: 'ZORKO Blog — AI & Small Business Insights',
    description: 'Practical guides on AI dashboards, morning briefs, and data-driven small business management.',
    url: 'https://zorko-three.vercel.app/blog',
  },
}

const posts = [
  {
    slug: 'ai-morning-brief-small-business',
    lang: 'EN',
    date: 'May 2026',
    title: 'How an AI Morning Brief Can Transform Your Small Business Day',
    excerpt: 'Information overload is the silent killer of small business efficiency. Here\'s how a daily AI-generated brief helps you cut through the noise and start every day with the right priorities.',
    readTime: '8 min read',
    tags: ['AI Morning Brief', 'Small Business', 'Productivity'],
  },
  {
    slug: 'small-business-ai-dashboard-guide',
    lang: 'EN',
    date: 'May 2026',
    title: 'Small Business AI Dashboard: What It Is and Why You Need One in 2026',
    excerpt: 'AI dashboards aren\'t just for enterprises anymore. In 2026, small business owners have access to the same AI analysis capabilities — without needing a data team or a six-figure budget.',
    readTime: '7 min read',
    tags: ['AI Dashboard', 'Small Business', 'Guide'],
  },
  {
    slug: 'how-to-monitor-google-reviews-ai',
    lang: 'EN',
    date: 'May 2026',
    title: 'How to Monitor Your Google Reviews with AI (And Why It Matters)',
    excerpt: 'Review velocity signals, sentiment trends, competitor monitoring, and AI-assisted response drafting — a practical guide to Google review monitoring for small businesses.',
    readTime: '7 min read',
    tags: ['Google Reviews', 'AI Monitoring', 'Reputation'],
  },
  {
    slug: 'small-business-kpis-to-track',
    lang: 'EN',
    date: 'May 2026',
    title: 'The 10 KPIs Every Small Business Owner Should Track Daily',
    excerpt: 'Revenue vs target, customer acquisition, churn, review score, social mentions — the 10 KPIs that actually predict business health, with actionable thresholds.',
    readTime: '9 min read',
    tags: ['KPIs', 'Small Business', 'Analytics'],
  },
  {
    slug: 'ai-tools-retail-store-owners',
    lang: 'EN',
    date: 'May 2026',
    title: 'Best AI Tools for Retail Store Owners in 2026',
    excerpt: 'Inventory AI, sales prediction, customer insights, review monitoring — the AI tools actually worth using for retail store owners in 2026.',
    readTime: '8 min read',
    tags: ['Retail', 'AI Tools', '2026'],
  },
  {
    slug: 'restaurant-analytics-ai-guide',
    lang: 'EN',
    date: 'May 2026',
    title: 'AI Analytics for Restaurant Owners: What to Track and How',
    excerpt: 'Review sentiment, peak hours, menu performance signals, delivery platform ratings — a practical guide to AI analytics for restaurant and café owners.',
    readTime: '8 min read',
    tags: ['Restaurant', 'AI Analytics', 'Guide'],
  },
  {
    slug: 'morning-routine-small-business-owner',
    lang: 'EN',
    date: 'May 2026',
    title: 'The Perfect Morning Routine for Small Business Owners (Data-Driven)',
    excerpt: 'Why the first 30 minutes of your business day matter most, what to check, and how AI digests compare to manual data checking.',
    readTime: '7 min read',
    tags: ['Morning Routine', 'Productivity', 'Small Business'],
  },
  {
    slug: 'google-business-profile-optimization',
    lang: 'EN',
    date: 'May 2026',
    title: 'Google Business Profile Optimization for Small Businesses: 2026 Guide',
    excerpt: 'Categories, photos, posts, Q&A, review responses, and a weekly maintenance checklist — the complete guide to GBP optimization for small businesses.',
    readTime: '9 min read',
    tags: ['Google Business Profile', 'Local SEO', 'Guide'],
  },
  {
    slug: 'negative-review-response-guide',
    lang: 'EN',
    date: 'May 2026',
    title: 'How to Respond to Negative Reviews: A Small Business Owner\'s Guide',
    excerpt: 'The 4-step framework, what not to say, when to flag a review, real examples, and AI-assisted drafting for negative review responses.',
    readTime: '8 min read',
    tags: ['Reviews', 'Customer Service', 'Guide'],
  },
  {
    slug: 'social-media-monitoring-small-business',
    lang: 'EN',
    date: 'May 2026',
    title: 'Social Media Monitoring for Small Businesses (Without a Marketing Team)',
    excerpt: 'What to monitor on social (mentions, hashtags, competitors), free vs paid tools, and a practical weekly workflow for small business owners.',
    readTime: '7 min read',
    tags: ['Social Media', 'Monitoring', 'Small Business'],
  },
  {
    slug: 'business-intelligence-budget-guide',
    lang: 'EN',
    date: 'May 2026',
    title: 'Business Intelligence on a Budget: How Small Businesses Can Compete with Data',
    excerpt: 'DIY BI stack, Google Looker Studio, AI summaries, and what data to collect first — a practical guide to business intelligence without enterprise budgets.',
    readTime: '9 min read',
    tags: ['Business Intelligence', 'Analytics', 'Budget'],
  },
  {
    slug: 'customer-sentiment-analysis-small-business',
    lang: 'EN',
    date: 'May 2026',
    title: 'Customer Sentiment Analysis for Small Business: What Your Reviews Are Really Saying',
    excerpt: 'NPS vs star ratings, theme extraction, trend detection, and acting on sentiment data for small business owners.',
    readTime: '8 min read',
    tags: ['Sentiment Analysis', 'Reviews', 'Customer Analytics'],
  },
  {
    slug: 'service-business-ai-tools',
    lang: 'EN',
    date: 'May 2026',
    title: 'AI Tools for Service Businesses: Salons, Clinics, and Trades in 2026',
    excerpt: 'Booking AI, review monitoring, no-show prediction, and client communication tools for salons, clinics, and trades businesses in 2026.',
    readTime: '8 min read',
    tags: ['Service Business', 'AI Tools', 'Salons & Clinics'],
  },
  {
    slug: 'zorko-vs-hootsuite',
    lang: 'EN',
    date: 'May 2026',
    title: 'ZORKO vs Hootsuite for Small Business: Different Tools, Different Jobs',
    excerpt: 'Hootsuite is for social media scheduling and publishing. ZORKO is for morning business intelligence. They complement each other — here\'s the distinction.',
    readTime: '6 min read',
    tags: ['Product Comparison', 'Hootsuite', 'ZORKO'],
  },
  {
    slug: '/ru/blog/utrenniy-briefing-ii-dlya-biznesa',
    lang: 'RU',
    date: 'Май 2026',
    title: 'Утренний ИИ-брифинг для владельца бизнеса: как сэкономить 2 часа в день',
    excerpt: 'Каждое утро вы тратите до двух часов, чтобы понять, что происходит в бизнесе. ИИ-брифинг собирает всё это за вас и кладёт на стол до открытия.',
    readTime: '7 мин',
    tags: ['ИИ-брифинг', 'Малый бизнес', 'Аналитика'],
  },
  {
    slug: '/ru/blog/kak-ii-pomogaet-malomu-biznesu',
    lang: 'RU',
    date: 'Май 2026',
    title: 'Как ИИ реально помогает малому бизнесу — без лишних слов',
    excerpt: 'Конкретные примеры экономии времени: отзывы, аналитика, брифинги. Без технического жаргона — только то, что работает.',
    readTime: '7 мин',
    tags: ['ИИ', 'Малый бизнес', 'Автоматизация'],
  },
  {
    slug: '/ru/blog/metriki-dlya-kafe-restorana',
    lang: 'RU',
    date: 'Май 2026',
    title: 'Какие метрики отслеживать владельцу кафе или ресторана',
    excerpt: 'Средний чек, покрытие, отзывы, заполняемость, сезонность — с конкретными цифрами-ориентирами для ресторанного бизнеса.',
    readTime: '9 мин',
    tags: ['Ресторан', 'Метрики', 'Аналитика'],
  },
  {
    slug: '/ru/blog/monitoring-otzyvov-google',
    lang: 'RU',
    date: 'Май 2026',
    title: 'Мониторинг отзывов Google для малого бизнеса: зачем и как',
    excerpt: 'Почему отзывы Google = деньги, как отслеживать, как отвечать, что делать с негативом.',
    readTime: '7 мин',
    tags: ['Google Отзывы', 'Репутация', 'Мониторинг'],
  },
  {
    slug: '/ru/blog/ii-instrumenty-malyy-biznes-2026',
    lang: 'RU',
    date: 'Май 2026',
    title: 'ИИ-инструменты для малого бизнеса в 2026 году: что реально работает',
    excerpt: 'Обзор 6 ИИ-инструментов с честными оценками — ChatGPT, ЗОРКО, Canva AI, Notion AI, Rev.ai, Tidio.',
    readTime: '8 мин',
    tags: ['ИИ-инструменты', 'Обзор', '2026'],
  },
  {
    slug: '/ru/blog/analitika-bez-analitika',
    lang: 'RU',
    date: 'Май 2026',
    title: 'Как анализировать данные бизнеса без штатного аналитика',
    excerpt: 'Таблицы vs BI-системы vs ИИ-дайджест — пошаговый подход к аналитике для владельца без технических навыков.',
    readTime: '8 мин',
    tags: ['Аналитика', 'Малый бизнес', 'BI'],
  },
  {
    slug: '/ru/blog/avtomatizatsiya-otchetnosti',
    lang: 'RU',
    date: 'Май 2026',
    title: 'Автоматизация отчётности для малого бизнеса: с чего начать',
    excerpt: 'Какие отчёты нужны еженедельно, ежемесячно, ежеквартально — и как автоматизировать каждый.',
    readTime: '7 мин',
    tags: ['Автоматизация', 'Отчётность', 'Малый бизнес'],
  },
  {
    slug: '/ru/blog/sravnenie-ii-vs-marketolog',
    lang: 'RU',
    date: 'Май 2026',
    title: 'ИИ-аналитика vs нанять маркетолога: что выгоднее для малого бизнеса',
    excerpt: 'Честное сравнение: что умеет каждый, стоимость, когда переходить к живому специалисту.',
    readTime: '8 мин',
    tags: ['ИИ', 'Маркетинг', 'Сравнение'],
  },
  {
    slug: '/ru/blog/kak-sledit-za-konkurentami',
    lang: 'RU',
    date: 'Май 2026',
    title: 'Как следить за конкурентами с помощью ИИ (законно и эффективно)',
    excerpt: 'Мониторинг отзывов конкурентов, ценовая разведка, соцсети, Google Alerts — конкурентная разведка для малого бизнеса.',
    readTime: '7 мин',
    tags: ['Конкуренты', 'Мониторинг', 'ИИ'],
  },
]

export default function BlogPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', overflowY: 'auto', overflow: 'auto' }}>
      <MarketingNav lang="en" />

      <main>
        <section style={{ maxWidth: 820, margin: '0 auto', padding: '80px 32px 64px' }}>
          <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 20 }}>
            Blog
          </div>
          <h1 style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400, fontSize: 52, lineHeight: 1.05, letterSpacing: '-0.02em', color: 'var(--ink)', marginBottom: 28 }}>
            AI & Small Business
          </h1>
          <p style={{ fontFamily: 'var(--sans)', fontSize: 16, color: 'var(--muted)', lineHeight: 1.7, maxWidth: 480 }}>
            Practical guides on using AI to run a better business — without a data team.
          </p>
        </section>

        <section style={{ borderTop: '1px solid var(--line)' }}>
          <div style={{ maxWidth: 820, margin: '0 auto', padding: '0 32px' }}>
            {posts.map((post, i) => (
              <Link
                key={post.slug}
                href={post.slug.startsWith('/') ? post.slug : `/blog/${post.slug}`}
                style={{ textDecoration: 'none' }}
              >
                <article style={{
                  display: 'grid',
                  gridTemplateColumns: '100px 1fr',
                  gap: 40,
                  padding: '48px 0',
                  borderBottom: '1px solid var(--line)',
                  cursor: 'pointer',
                }}>
                  <div>
                    <div style={{ fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--muted-2)', marginBottom: 8 }}>
                      {post.date}
                    </div>
                    <div style={{ fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--ink)', padding: '3px 7px', border: '1px solid var(--line)', display: 'inline-block' }}>
                      {post.lang}
                    </div>
                  </div>
                  <div>
                    <h2 style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400, fontSize: 26, color: 'var(--ink)', marginBottom: 14, lineHeight: 1.25 }}>
                      {post.title}
                    </h2>
                    <p style={{ fontFamily: 'var(--sans)', fontSize: 14, color: 'var(--muted)', lineHeight: 1.7, marginBottom: 16 }}>
                      {post.excerpt}
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                      <span style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--muted-2)', letterSpacing: '.06em' }}>{post.readTime}</span>
                      {post.tags.map(tag => (
                        <span key={tag} style={{ fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--muted-2)', padding: '2px 6px', border: '1px solid var(--line)' }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <MarketingFooter lang="en" />
    </div>
  )
}
