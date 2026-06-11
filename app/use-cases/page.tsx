import type { Metadata } from 'next'
import Link from 'next/link'
import { MarketingNav } from '@/components/marketing/MarketingNav'
import { MarketingFooter } from '@/components/marketing/MarketingFooter'

export const metadata: Metadata = {
  title: 'Use Cases — How Small Businesses Use ZORKO AI Dashboard',
  description: 'See how retail store owners, restaurant owners, and service businesses use ZORKO\'s AI morning brief to run their businesses with less guesswork.',
  alternates: {
    canonical: 'https://zorko-three.vercel.app/use-cases',
  },
  openGraph: {
    title: 'ZORKO Use Cases — AI Dashboard for Small Business',
    description: 'Retail, restaurants, salons — how real business owners use ZORKO\'s daily AI brief.',
    url: 'https://zorko-three.vercel.app/use-cases',
  },
}

const useCases = [
  {
    id: 'retail',
    label: 'Retail Store',
    headline: 'The retail owner who stopped guessing what to restock',
    intro: 'Maria runs a specialty kitchen goods store. Before ZORKO, she spent every Monday morning pulling sales reports, reading Google reviews, and trying to figure out why last week was slow.',
    challenge: 'Her challenge was classic: too much data from too many places, not enough time to analyze it. She had Google reviews she hadn\'t read in weeks, a point-of-sale report she\'d forgotten to check, and a vague sense that something in the cookware section wasn\'t moving.',
    solution: 'ZORKO connected to her Google Business reviews and sales data. The first morning brief told her: three recent reviews mentioned the same product — the cast iron skillet display — was disorganized and hard to browse. Whispers flagged that cast iron sales were down 22% while the category trend on social was up. One signal: merchandising problem, not product problem.',
    result: 'She reorganized the display. The following week, cast iron sales recovered. She hadn\'t needed more data — she\'d needed the right data, synthesized.',
    metrics: ['Google Reviews connected', 'Sales trend analysis', 'Weekly category whispers'],
  },
  {
    id: 'restaurant',
    label: 'Restaurant',
    headline: 'The restaurant owner who stopped losing Saturday nights',
    intro: 'Daniel runs a 40-seat Italian restaurant. He was consistently understaffed on Saturday evenings despite thinking he had enough people on the schedule.',
    challenge: 'The problem wasn\'t visible in the data he was checking. He looked at last week\'s reservation count and assumed next Saturday would be similar. But he wasn\'t accounting for the local events calendar, weather forecasts, or the uptick in walk-in demand on evenings when a nearby venue was running a show.',
    solution: 'ZORKO pulled together weather data, reservation trends, and Google review analysis. The first week, the 7-day forecast flagged: "Saturday high probability of above-normal demand. Arts centre event within 0.5km. Historical correlation: +35% walk-ins." The Focus for the day: confirm extra staffing.',
    result: 'He added two floor staff. The Saturday ran smoothly. He hadn\'t needed a data scientist — he needed the signal that was already in the data, surfaced in plain language.',
    metrics: ['Demand forecasting', 'Weather + event correlation', 'Review sentiment daily'],
  },
  {
    id: 'salon',
    label: 'Service Business (Salon)',
    headline: 'The salon owner who turned reviews into retention',
    intro: 'Yuki owns a hair salon with four chairs. She was getting decent Google reviews overall — 4.3 stars — but wasn\'t sure why she kept losing first-time clients after their second visit.',
    challenge: 'The churn was invisible in aggregate ratings. Individual reviews were a mix of positive and negative — hard to read as a trend when you\'re cutting hair six days a week and barely have time to check your phone.',
    solution: 'ZORKO analyzed all her reviews and found a Whisper: clients who mentioned "wait time" in their review were 60% less likely to leave a second review (a proxy for rebooking). The issue: the salon\'s online booking wasn\'t showing real-time availability, so clients arrived for a slot that was already filled.',
    result: 'She fixed the booking sync. The wait-time mentions dropped. Repeat review rate — her proxy metric — improved over the next two months.',
    metrics: ['Review theme clustering', 'Churn signal detection', 'Customer sentiment trend'],
  },
]

export default function UseCasesPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', overflowY: 'auto', overflow: 'auto' }}>
      <MarketingNav lang="en" />

      <main>
        {/* Hero */}
        <section style={{ maxWidth: 820, margin: '0 auto', padding: '80px 32px 64px' }}>
          <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 20 }}>
            Use Cases
          </div>
          <h1 style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400, fontSize: 52, lineHeight: 1.05, letterSpacing: '-0.02em', color: 'var(--ink)', marginBottom: 28 }}>
            How small businesses use<br />their morning brief
          </h1>
          <p style={{ fontFamily: 'var(--sans)', fontSize: 17, color: 'var(--ink-2)', lineHeight: 1.7, maxWidth: 560 }}>
            Three business types. Three different challenges. One thing in common: the answer was already in their data — they just needed it surfaced.
          </p>
        </section>

        {/* Use cases */}
        {useCases.map((uc, i) => (
          <section key={uc.id} style={{ borderTop: '2px solid var(--ink)', background: i % 2 === 0 ? 'var(--bg)' : 'var(--paper)' }}>
            <div style={{ maxWidth: 820, margin: '0 auto', padding: '64px 32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 32 }}>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--muted)' }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--ink)', fontWeight: 500, padding: '4px 10px', border: '1px solid var(--ink)' }}>
                  {uc.label}
                </div>
              </div>

              <h2 style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400, fontSize: 34, color: 'var(--ink)', marginBottom: 24, lineHeight: 1.2, maxWidth: 620 }}>
                {uc.headline}
              </h2>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, marginBottom: 36 }}>
                <div>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--muted-2)', marginBottom: 10 }}>Context</div>
                  <p style={{ fontFamily: 'var(--sans)', fontSize: 14, color: 'var(--ink-2)', lineHeight: 1.8 }}>{uc.intro}</p>
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--muted-2)', marginBottom: 10 }}>The Challenge</div>
                  <p style={{ fontFamily: 'var(--sans)', fontSize: 14, color: 'var(--ink-2)', lineHeight: 1.8 }}>{uc.challenge}</p>
                </div>
              </div>

              <div style={{ borderLeft: '3px solid var(--signal)', paddingLeft: 24, marginBottom: 28 }}>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--signal)', marginBottom: 8 }}>What ZORKO Found</div>
                <p style={{ fontFamily: 'var(--sans)', fontSize: 14, color: 'var(--ink-2)', lineHeight: 1.8 }}>{uc.solution}</p>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 40 }}>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--muted-2)', marginBottom: 8 }}>Result</div>
                  <p style={{ fontFamily: 'var(--sans)', fontSize: 14, color: 'var(--muted)', lineHeight: 1.8 }}>{uc.result}</p>
                </div>
                <div style={{ minWidth: 180 }}>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--muted-2)', marginBottom: 10 }}>Features Used</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                    {uc.metrics.map(m => (
                      <div key={m} style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--ink)', letterSpacing: '.04em' }}>→ {m}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* CTA */}
        <section style={{ background: 'var(--ink)', padding: '64px 32px', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400, fontSize: 32, color: 'var(--paper)', marginBottom: 16 }}>
            What's in your data?
          </h2>
          <p style={{ fontFamily: 'var(--sans)', fontSize: 15, color: 'var(--muted-2)', marginBottom: 32, maxWidth: 440, margin: '0 auto 32px' }}>
            Connect your first source and get your first brief in under 10 minutes. 7-day free trial.
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
