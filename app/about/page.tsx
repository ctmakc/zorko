import type { Metadata } from 'next'
import Link from 'next/link'
import { MarketingNav } from '@/components/marketing/MarketingNav'
import { MarketingFooter } from '@/components/marketing/MarketingFooter'

export const metadata: Metadata = {
  title: 'About ZORKO — AI Morning Brief Dashboard',
  description: 'ZORKO delivers a daily AI-generated brief for small business owners. Learn how it works, who it\'s for, and why we built it.',
  alternates: {
    canonical: 'https://zorko-three.vercel.app/about',
    languages: {
      'ru': 'https://zorko-three.vercel.app/ru',
      'en': 'https://zorko-three.vercel.app/about',
    },
  },
  openGraph: {
    title: 'About ZORKO — AI Morning Brief Dashboard',
    description: 'How ZORKO helps small business owners start every day with clarity.',
    url: 'https://zorko-three.vercel.app/about',
  },
}

const steps = [
  {
    number: '01',
    title: 'Connect Your Data Sources',
    description: 'Link Google Places reviews, your sales system, social mentions, and weather. Takes under 5 minutes. No developer required.',
  },
  {
    number: '02',
    title: 'Configure Your Brief',
    description: 'Tell ZORKO what matters most — peak hours, top products, customer sentiment, competitor mentions. The AI learns your priorities.',
  },
  {
    number: '03',
    title: 'Get Your Morning Brief',
    description: 'Every morning before you open, ZORKO delivers a concise AI brief: what happened yesterday, what to watch, and your single focus for today.',
  },
]

export default function AboutPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', overflowY: 'auto', overflow: 'auto' }}>
      <MarketingNav lang="en" />

      <main>
        {/* Hero */}
        <section style={{ maxWidth: 820, margin: '0 auto', padding: '80px 32px 64px' }}>
          <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 20 }}>
            About ZORKO
          </div>
          <h1 style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400, fontSize: 52, lineHeight: 1.05, letterSpacing: '-0.02em', color: 'var(--ink)', marginBottom: 28 }}>
            Sharp vision for small<br />business owners
          </h1>
          <p style={{ fontFamily: 'var(--sans)', fontSize: 17, color: 'var(--ink-2)', lineHeight: 1.7, maxWidth: 560 }}>
            Running a small business means wearing every hat. You're the manager, the analyst, the customer service team, and the strategist — all before noon. ZORKO gives you back clarity by distilling your business data into one sharp morning brief.
          </p>
        </section>

        {/* What it does */}
        <section style={{ borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)', background: 'var(--paper)' }}>
          <div style={{ maxWidth: 820, margin: '0 auto', padding: '56px 32px' }}>
            <h2 style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400, fontSize: 36, color: 'var(--ink)', marginBottom: 20 }}>
              What ZORKO does
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, marginTop: 12 }}>
              <div>
                <p style={{ fontFamily: 'var(--sans)', fontSize: 15, color: 'var(--ink-2)', lineHeight: 1.7 }}>
                  ZORKO connects to your data — Google Places reviews, sales metrics, social signals, weather — and runs it through Google Gemini AI every morning. The result is a structured brief that tells you exactly what changed, what it means, and what to do about it.
                </p>
              </div>
              <div>
                <p style={{ fontFamily: 'var(--sans)', fontSize: 15, color: 'var(--ink-2)', lineHeight: 1.7 }}>
                  No dashboards to dig through. No spreadsheets to update. Just a sharp morning read — like having a data analyst who worked through the night and left you a note on the desk.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How it works — 3 steps */}
        <section style={{ maxWidth: 820, margin: '0 auto', padding: '72px 32px' }}>
          <h2 style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400, fontSize: 36, color: 'var(--ink)', marginBottom: 48 }}>
            How it works
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            {steps.map((step) => (
              <div key={step.number} style={{
                display: 'grid',
                gridTemplateColumns: '80px 1fr',
                gap: 32,
                padding: '32px 0',
                borderTop: '1px solid var(--line)',
              }}>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 28, color: 'var(--muted-2)', letterSpacing: '-.02em' }}>
                  {step.number}
                </div>
                <div>
                  <h3 style={{ fontFamily: 'var(--sans)', fontSize: 16, fontWeight: 600, color: 'var(--ink)', marginBottom: 8 }}>
                    {step.title}
                  </h3>
                  <p style={{ fontFamily: 'var(--sans)', fontSize: 14, color: 'var(--muted)', lineHeight: 1.7 }}>
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Who it's for */}
        <section style={{ background: 'var(--bg-2)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
          <div style={{ maxWidth: 820, margin: '0 auto', padding: '64px 32px' }}>
            <h2 style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400, fontSize: 36, color: 'var(--ink)', marginBottom: 36 }}>
              Who uses ZORKO
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1, border: '1px solid var(--ink)' }}>
              {[
                { icon: '🏪', type: 'Retail Owners', desc: 'Track daily sales, customer reviews, foot traffic patterns, and inventory signals.' },
                { icon: '🍽', type: 'Restaurant Owners', desc: 'Monitor reservation trends, Google reviews, weekend forecasts, and staff focus.' },
                { icon: '✂', type: 'Service Businesses', desc: 'Salons, repair shops, clinics — manage client feedback, booking trends, and daily priorities.' },
              ].map(({ icon, type, desc }) => (
                <div key={type} style={{ padding: '32px 28px', borderRight: '1px solid var(--ink)', background: 'var(--paper)' }}>
                  <div style={{ fontSize: 24, marginBottom: 12 }}>{icon}</div>
                  <h3 style={{ fontFamily: 'var(--sans)', fontSize: 14, fontWeight: 600, color: 'var(--ink)', marginBottom: 8 }}>{type}</h3>
                  <p style={{ fontFamily: 'var(--sans)', fontSize: 13, color: 'var(--muted)', lineHeight: 1.6 }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Story */}
        <section style={{ maxWidth: 820, margin: '0 auto', padding: '72px 32px' }}>
          <h2 style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400, fontSize: 36, color: 'var(--ink)', marginBottom: 24 }}>
            Why we built this
          </h2>
          <div style={{ maxWidth: 580 }}>
            <p style={{ fontFamily: 'var(--sans)', fontSize: 15, color: 'var(--ink-2)', lineHeight: 1.8, marginBottom: 20 }}>
              Small business owners told us the same thing over and over: they have more data than ever, but less time to make sense of it. Google Analytics, review platforms, point-of-sale reports — all siloed, all requiring interpretation.
            </p>
            <p style={{ fontFamily: 'var(--sans)', fontSize: 15, color: 'var(--ink-2)', lineHeight: 1.8, marginBottom: 20 }}>
              ZORKO was built to solve that. We pull from the sources that matter, run Gemini AI analysis overnight, and hand you a brief you can read in two minutes — before your first coffee gets cold.
            </p>
            <p style={{ fontFamily: 'var(--sans)', fontSize: 15, color: 'var(--muted)', lineHeight: 1.8 }}>
              The name ЗОРКО (zorko) means "sharp-sighted" in Russian — exactly the kind of vision we want to give every small business owner, regardless of their analytics background.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: 'var(--ink)', padding: '64px 32px', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400, fontSize: 36, color: 'var(--paper)', marginBottom: 16 }}>
            Start your free trial
          </h2>
          <p style={{ fontFamily: 'var(--sans)', fontSize: 15, color: 'var(--muted-2)', marginBottom: 32 }}>
            7 days free. No credit card required upfront.
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
            See Pricing →
          </Link>
        </section>
      </main>

      <MarketingFooter lang="en" />
    </div>
  )
}
