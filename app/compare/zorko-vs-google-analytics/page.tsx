import type { Metadata } from 'next'
import Link from 'next/link'
import { MarketingNav } from '@/components/marketing/MarketingNav'
import { MarketingFooter } from '@/components/marketing/MarketingFooter'

export const metadata: Metadata = {
  title: 'ZORKO vs Google Analytics for Small Business Owners | ZORKO',
  description: 'Google Analytics shows you raw data you have to analyze yourself. ZORKO delivers AI-analyzed insights ready to act on. Understand the difference and pick the right tool.',
  alternates: {
    canonical: 'https://zorko-three.vercel.app/compare/zorko-vs-google-analytics',
  },
  openGraph: {
    title: 'ZORKO vs Google Analytics — What\'s the Difference?',
    description: 'GA = raw data you have to analyze. ZORKO = AI already analyzed it for you. See the comparison.',
    url: 'https://zorko-three.vercel.app/compare/zorko-vs-google-analytics',
  },
}

const comparisonRows = [
  {
    dimension: 'Primary use case',
    zorko: 'Daily AI-generated business brief with insights and recommendations',
    ga: 'Web traffic analysis and user behavior on your website',
  },
  {
    dimension: 'Data sources',
    zorko: 'Google Reviews, sales data, weather, social signals, POS (roadmap)',
    ga: 'Website sessions, pageviews, conversions, audience demographics',
  },
  {
    dimension: 'Output format',
    zorko: 'Natural language insights and prioritized recommendations',
    ga: 'Charts, tables, and raw metrics requiring interpretation',
  },
  {
    dimension: 'Who analyzes the data',
    zorko: 'Google Gemini AI does the analysis and surfaces key findings',
    ga: 'You do — requires analytics knowledge to extract meaning',
  },
  {
    dimension: 'Delivery model',
    zorko: 'Morning brief delivered before you open — asynchronous, ready to read',
    ga: 'On-demand dashboard — you visit when you have time to look',
  },
  {
    dimension: 'Required expertise',
    zorko: 'None. Built for business owners, not analysts',
    ga: 'Moderate to high — understanding GA4 reports takes training',
  },
  {
    dimension: 'Customer review analysis',
    zorko: 'Yes — Google Places review analysis built in',
    ga: 'No — GA doesn\'t analyze reviews or customer feedback',
  },
  {
    dimension: 'Business forecast',
    zorko: '7-day forward-looking forecast based on trends',
    ga: 'Historical data only — no forward forecasting',
  },
  {
    dimension: 'Cost',
    zorko: 'Free (3 briefs/week) or $19/month Pro (daily briefs, unlimited connectors)',
    ga: 'Free (with significant implementation time investment)',
  },
  {
    dimension: 'Setup time',
    zorko: 'Under 10 minutes — no developer required',
    ga: 'Hours to days — proper GA4 setup requires technical configuration',
  },
]

export default function ComparePage() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', overflowY: 'auto', overflow: 'auto' }}>
      <MarketingNav lang="en" />

      <main>
        {/* Hero */}
        <section style={{ maxWidth: 820, margin: '0 auto', padding: '80px 32px 64px' }}>
          <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 20 }}>
            Compare
          </div>
          <h1 style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400, fontSize: 48, lineHeight: 1.05, letterSpacing: '-0.02em', color: 'var(--ink)', marginBottom: 28 }}>
            ZORKO vs Google Analytics<br />for Small Business Owners
          </h1>
          <p style={{ fontFamily: 'var(--sans)', fontSize: 17, color: 'var(--ink-2)', lineHeight: 1.7, maxWidth: 580 }}>
            Google Analytics is a powerful tool — for website analysis. ZORKO is a different kind of tool entirely: an AI that analyzes your whole business and tells you what it found. Here's how they differ, and why most small business owners need both.
          </p>
        </section>

        {/* Core difference callout */}
        <section style={{ borderTop: '2px solid var(--ink)', borderBottom: '2px solid var(--ink)', background: 'var(--paper)' }}>
          <div style={{ maxWidth: 820, margin: '0 auto', padding: '56px 32px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, border: '1px solid var(--line)' }}>
              <div style={{ padding: '36px 32px', borderRight: '1px solid var(--ink)' }}>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--muted-2)', marginBottom: 12 }}>Google Analytics</div>
                <div style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 26, color: 'var(--ink)', lineHeight: 1.3, marginBottom: 16 }}>
                  Raw data you have to analyze yourself
                </div>
                <p style={{ fontFamily: 'var(--sans)', fontSize: 14, color: 'var(--muted)', lineHeight: 1.7 }}>
                  GA shows you what happened on your website. Sessions, bounce rate, conversions. To turn this into a business decision, you need to interpret the numbers, understand the trends, and figure out what to do next. That takes time and analytics expertise.
                </p>
              </div>
              <div style={{ padding: '36px 32px', position: 'relative' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'var(--signal)' }} />
                <div style={{ fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--muted-2)', marginBottom: 12 }}>ZORKO</div>
                <div style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 26, color: 'var(--ink)', lineHeight: 1.3, marginBottom: 16 }}>
                  AI already analyzed it for you
                </div>
                <p style={{ fontFamily: 'var(--sans)', fontSize: 14, color: 'var(--muted)', lineHeight: 1.7 }}>
                  ZORKO pulls from your Google reviews, sales, and other business sources, runs Gemini AI analysis overnight, and delivers a plain-language brief each morning. You read what the AI found and act on it. No charts to decipher, no expertise required.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison table */}
        <section>
          <div style={{ maxWidth: 820, margin: '0 auto', padding: '64px 32px' }}>
            <h2 style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400, fontSize: 32, color: 'var(--ink)', marginBottom: 40 }}>
              Feature by feature
            </h2>
            <div style={{ border: '1px solid var(--ink)' }}>
              {/* Header row */}
              <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr 1fr', background: 'var(--ink)', padding: '14px 20px' }}>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--muted-2)' }}>Dimension</div>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--signal)' }}>ZORKO</div>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--muted-2)' }}>Google Analytics</div>
              </div>
              {comparisonRows.map((row, i) => (
                <div key={row.dimension} style={{
                  display: 'grid',
                  gridTemplateColumns: '220px 1fr 1fr',
                  borderTop: '1px solid var(--line)',
                  background: i % 2 === 0 ? 'var(--bg)' : 'var(--paper)',
                }}>
                  <div style={{ padding: '18px 20px', fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.04em', textTransform: 'uppercase', color: 'var(--muted)', borderRight: '1px solid var(--line)' }}>
                    {row.dimension}
                  </div>
                  <div style={{ padding: '18px 20px', fontFamily: 'var(--sans)', fontSize: 13, color: 'var(--ink-2)', lineHeight: 1.6, borderRight: '1px solid var(--line)' }}>
                    {row.zorko}
                  </div>
                  <div style={{ padding: '18px 20px', fontFamily: 'var(--sans)', fontSize: 13, color: 'var(--muted)', lineHeight: 1.6 }}>
                    {row.ga}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* When to use each */}
        <section style={{ background: 'var(--paper)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
          <div style={{ maxWidth: 820, margin: '0 auto', padding: '64px 32px' }}>
            <h2 style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400, fontSize: 32, color: 'var(--ink)', marginBottom: 36 }}>
              Which one do you need?
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40 }}>
              <div>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 16 }}>Use Google Analytics if...</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {[
                    'You run digital marketing campaigns and need to track conversions',
                    'You sell online and need to understand website funnel performance',
                    'You have someone on your team who can interpret web analytics',
                    'You need attribution data to optimize ad spend',
                  ].map(item => (
                    <div key={item} style={{ display: 'flex', gap: 12, fontFamily: 'var(--sans)', fontSize: 13, color: 'var(--ink-2)', lineHeight: 1.6 }}>
                      <span style={{ color: 'var(--muted-2)', flexShrink: 0, fontFamily: 'var(--mono)' }}>–</span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--signal)', marginBottom: 16 }}>Use ZORKO if...</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {[
                    'You want to understand your whole business, not just your website',
                    'You need actionable insights without having to analyze data yourself',
                    'You want to monitor customer reviews automatically',
                    'You want a forward-looking view to plan staffing and inventory',
                    'You don\'t have time to dig through reports every morning',
                  ].map(item => (
                    <div key={item} style={{ display: 'flex', gap: 12, fontFamily: 'var(--sans)', fontSize: 13, color: 'var(--ink-2)', lineHeight: 1.6 }}>
                      <span style={{ color: 'var(--signal)', flexShrink: 0, fontFamily: 'var(--mono)' }}>→</span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div style={{ marginTop: 36, padding: '20px 24px', border: '1px solid var(--line)', background: 'var(--bg)', fontFamily: 'var(--sans)', fontSize: 14, color: 'var(--ink-2)', lineHeight: 1.7 }}>
              <strong>Bottom line:</strong> Most small businesses benefit from having both. GA handles your digital marketing analysis. ZORKO handles your daily business intelligence. They don't overlap — they complement each other.
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: 'var(--ink)', padding: '64px 32px', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400, fontSize: 32, color: 'var(--paper)', marginBottom: 16 }}>
            See the difference for yourself
          </h2>
          <p style={{ fontFamily: 'var(--sans)', fontSize: 15, color: 'var(--muted-2)', marginBottom: 32 }}>
            7-day free trial. Your first AI brief within 24 hours.
          </p>
          <Link href="/pricing" style={{
            fontFamily: 'var(--mono)',
            fontSize: 11,
            letterSpacing: '.14em',
            textTransform: 'uppercase',
            color: 'var(--ink)',
            background: 'var(--paper)',
            textDecoration: 'none',
            padding: '14px 28px',
            display: 'inline-block',
          }}>
            Start Free Trial →
          </Link>
        </section>
      </main>

      <MarketingFooter lang="en" />
    </div>
  )
}
