import type { Metadata } from 'next'
import Link from 'next/link'
import { MarketingNav } from '@/components/marketing/MarketingNav'
import { MarketingFooter } from '@/components/marketing/MarketingFooter'

export const metadata: Metadata = {
  title: 'The 10 KPIs Every Small Business Owner Should Track Daily | ZORKO',
  description: 'Revenue vs target, customer acquisition cost, churn, review score, social mentions — the 10 KPIs that matter most for small business owners, with actionable thresholds.',
  alternates: {
    canonical: 'https://zorko-three.vercel.app/blog/small-business-kpis-to-track',
  },
  openGraph: {
    title: 'The 10 KPIs Every Small Business Owner Should Track Daily',
    description: 'The KPIs that actually matter for small business owners — with thresholds and daily tracking guidance.',
    url: 'https://zorko-three.vercel.app/blog/small-business-kpis-to-track',
    type: 'article',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'The 10 KPIs Every Small Business Owner Should Track Daily',
  description: 'Revenue vs target, customer acquisition, churn, review score, social mentions — with thresholds and daily tracking guidance.',
  url: 'https://zorko-three.vercel.app/blog/small-business-kpis-to-track',
  datePublished: '2026-05-15',
  dateModified: '2026-05-15',
  author: { '@type': 'Organization', name: 'ZORKO' },
  publisher: { '@type': 'Organization', name: 'ZORKO', url: 'https://zorko-three.vercel.app' },
  keywords: ['small business kpis', 'kpis to track small business', 'business metrics daily', 'small business performance indicators'],
  articleSection: 'Small Business Analytics',
}

const kpis = [
  {
    num: '01',
    name: 'Daily Revenue vs Target',
    desc: 'Compare yesterday\'s revenue against your daily target (annual goal ÷ 365, adjusted for seasonality). This single number tells you whether you\'re on track before you do anything else.',
    threshold: 'Alert if below 80% of target for 3 consecutive days.',
  },
  {
    num: '02',
    name: 'Customer Count (Transactions)',
    desc: 'How many customers did you serve yesterday? Tracked separately from revenue, this catches situations where revenue is up but customer count is down — which may signal price sensitivity.',
    threshold: 'Alert if down more than 20% vs same day last week.',
  },
  {
    num: '03',
    name: 'Average Transaction Value',
    desc: 'Revenue divided by customer count. A rising ATV with falling customer count can mean you\'re serving fewer but higher-value customers — which may or may not be your strategy.',
    threshold: 'Watch for sustained drops below your 30-day average.',
  },
  {
    num: '04',
    name: 'Google Rating (Rolling 30-day)',
    desc: 'Your aggregate Google rating for reviews received in the past 30 days, not your all-time average. This is a leading indicator — it moves before your overall star rating does.',
    threshold: 'Alert if rolling 30-day drops below 4.0.',
  },
  {
    num: '05',
    name: 'New Review Count',
    desc: 'How many new Google reviews arrived this week? Review velocity is a signal of customer engagement. A drop in new reviews can indicate a drop in foot traffic before your sales confirm it.',
    threshold: 'Alert if weekly count drops below 50% of your 4-week average.',
  },
  {
    num: '06',
    name: 'Review Response Rate',
    desc: 'What percentage of reviews (positive and negative) are you responding to within 48 hours? Google favors responsive businesses in local search.',
    threshold: 'Target: 100% of negative reviews, 80%+ of all reviews.',
  },
  {
    num: '07',
    name: 'Booking / Reservation Fill Rate',
    desc: 'For service businesses: what percentage of available appointment slots were filled? For restaurants: what percentage of covers were seated vs available? A leading indicator of demand.',
    threshold: 'Alert if weekly fill rate drops below 70% without explanation.',
  },
  {
    num: '08',
    name: 'Repeat Customer Rate',
    desc: 'What percentage of transactions are from returning customers? Tracking this weekly helps you see whether your retention is holding or eroding. For most small businesses, retention is cheaper than acquisition.',
    threshold: 'Alert if weekly repeat rate drops more than 10 points vs prior month.',
  },
  {
    num: '09',
    name: 'Social Mentions (Brand + Product)',
    desc: 'How many times was your business name, location, or key products mentioned on social platforms this week? Social mention velocity often precedes review velocity.',
    threshold: 'Track trend direction; alert on sudden negative sentiment spike.',
  },
  {
    num: '10',
    name: 'Inventory / Supply Threshold',
    desc: 'For product-based businesses: what percentage of SKUs are below reorder level? Stockouts cost you sales and damage customer experience. Early warning beats reactive reordering.',
    threshold: 'Alert if more than 3 high-velocity SKUs are below reorder point.',
  },
]

export default function BlogPostKPIs() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', overflowY: 'auto', overflow: 'auto' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <MarketingNav lang="en" />

      <article style={{ maxWidth: 680, margin: '0 auto', padding: '72px 32px 96px' }}>
        <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 40, display: 'flex', gap: 12, alignItems: 'center' }}>
          <Link href="/blog" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Blog</Link>
          <span>→</span>
          <span>Small Business KPIs</span>
        </div>

        <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 16 }}>
          May 2026 · 9 min read
        </div>
        <h1 style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400, fontSize: 44, lineHeight: 1.1, letterSpacing: '-0.02em', color: 'var(--ink)', marginBottom: 32 }}>
          The 10 KPIs Every Small Business Owner Should Track Daily
        </h1>
        <p style={{ fontFamily: 'var(--serif)', fontSize: 19, color: 'var(--ink-2)', lineHeight: 1.75, marginBottom: 56, fontStyle: 'italic' }}>
          Most small business owners track too many things or too few. Here are the 10 metrics that actually predict business health — with the thresholds that tell you when to pay attention.
        </p>

        <div style={{ fontFamily: 'var(--sans)', fontSize: 16, color: 'var(--ink-2)', lineHeight: 1.85 }}>

          <h2 style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400, fontSize: 28, color: 'var(--ink)', margin: '48px 0 20px' }}>Why most business owners track the wrong things</h2>

          <p style={{ marginBottom: 20 }}>
            The KPIs that get tracked are usually the ones that are easiest to see — total revenue, total customers. These are lagging indicators. By the time they move, the problem (or opportunity) has already been present for weeks.
          </p>

          <p style={{ marginBottom: 20 }}>
            Leading indicators — the metrics that change before revenue changes — are what give you time to act. Review sentiment, booking fill rate, repeat customer rate: these move first. Track them daily and you respond to problems before they become crises.
          </p>

          <p style={{ marginBottom: 20 }}>
            Below are the 10 KPIs we've seen matter most across retail, food service, and personal service businesses. Each comes with a threshold — the number or direction that should prompt action.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 32, margin: '40px 0' }}>
            {kpis.map(({ num, name, desc, threshold }) => (
              <div key={num} style={{ display: 'grid', gridTemplateColumns: '48px 1fr', gap: 20, alignItems: 'start', paddingBottom: 32, borderBottom: '1px solid var(--line)' }}>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 22, color: 'var(--signal)', fontWeight: 700, lineHeight: 1 }}>{num}</div>
                <div>
                  <div style={{ fontFamily: 'var(--sans)', fontSize: 17, fontWeight: 600, color: 'var(--ink)', marginBottom: 10 }}>{name}</div>
                  <p style={{ marginBottom: 12 }}>{desc}</p>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--muted)', background: 'var(--paper)', padding: '8px 14px', borderLeft: '3px solid var(--signal)', lineHeight: 1.6 }}>
                    {threshold}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h2 style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400, fontSize: 28, color: 'var(--ink)', margin: '48px 0 20px' }}>How to track these without spending your morning on dashboards</h2>

          <p style={{ marginBottom: 20 }}>
            The challenge with daily KPI tracking isn't knowing what to track — it's finding the time to actually do it. Pulling data from five different sources before your business opens is not a sustainable habit for a business owner who also needs to manage staff, inventory, and customers.
          </p>

          <p style={{ marginBottom: 20 }}>
            This is what ZORKO's <Link href="/blog/ai-morning-brief-small-business" style={{ color: 'var(--ink)', textDecoration: 'underline' }}>AI morning brief</Link> is designed to solve. It connects to your data sources overnight, pulls these KPIs automatically, flags anomalies against your thresholds, and presents everything in a two-minute read before you open.
          </p>

          <p style={{ marginBottom: 20 }}>
            You don't need a data team. You don't need to know how to build dashboards. You need the right numbers, in plain language, at the right time.
          </p>

          <blockquote style={{ borderLeft: '3px solid var(--signal)', paddingLeft: 24, margin: '36px 0', fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 20, color: 'var(--ink)', lineHeight: 1.6 }}>
            "The KPIs that predict your future are usually not the ones you're measuring today."
          </blockquote>

        </div>

        <div style={{ marginTop: 64, padding: '40px', background: 'var(--ink)', display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'flex-start' }}>
          <div style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 24, color: 'var(--paper)' }}>
            Track your KPIs automatically every morning
          </div>
          <p style={{ fontFamily: 'var(--sans)', fontSize: 14, color: 'var(--muted-2)', lineHeight: 1.6 }}>
            ZORKO monitors your key metrics overnight and delivers a briefing before you open. 7-day free trial.
          </p>
          <Link href="/pricing" style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--ink)', background: 'var(--paper)', textDecoration: 'none', padding: '12px 24px', display: 'inline-block' }}>
            Try ZORKO Free →
          </Link>
        </div>

        <div style={{ marginTop: 48, paddingTop: 40, borderTop: '1px solid var(--line)' }}>
          <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 24 }}>More from the blog</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <Link href="/blog/small-business-ai-dashboard-guide" style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 18, color: 'var(--ink)', textDecoration: 'none' }}>
              Small Business AI Dashboard: What It Is and Why You Need One in 2026 →
            </Link>
            <Link href="/blog/morning-routine-small-business-owner" style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 18, color: 'var(--ink)', textDecoration: 'none' }}>
              The Perfect Morning Routine for Small Business Owners (Data-Driven) →
            </Link>
          </div>
        </div>
      </article>

      <MarketingFooter lang="en" />
    </div>
  )
}
