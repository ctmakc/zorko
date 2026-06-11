import type { Metadata } from 'next'
import Link from 'next/link'
import { MarketingNav } from '@/components/marketing/MarketingNav'
import { MarketingFooter } from '@/components/marketing/MarketingFooter'

export const metadata: Metadata = {
  title: 'Customer Sentiment Analysis for Small Business: What Your Reviews Are Really Saying | ZORKO',
  description: 'NPS vs star ratings, theme extraction, trend detection, and acting on sentiment data — a guide to customer sentiment analysis for small business owners.',
  alternates: {
    canonical: 'https://zorko-three.vercel.app/blog/customer-sentiment-analysis-small-business',
  },
  openGraph: {
    title: 'Customer Sentiment Analysis for Small Business: What Your Reviews Are Really Saying',
    description: 'NPS vs star ratings, theme extraction, trend detection — understanding what customer sentiment analysis reveals for small businesses.',
    url: 'https://zorko-three.vercel.app/blog/customer-sentiment-analysis-small-business',
    type: 'article',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Customer Sentiment Analysis for Small Business: What Your Reviews Are Really Saying',
  description: 'NPS vs star ratings, theme extraction, trend detection, acting on sentiment data for small business owners.',
  url: 'https://zorko-three.vercel.app/blog/customer-sentiment-analysis-small-business',
  datePublished: '2026-05-15',
  dateModified: '2026-05-15',
  author: { '@type': 'Organization', name: 'ZORKO' },
  publisher: { '@type': 'Organization', name: 'ZORKO', url: 'https://zorko-three.vercel.app' },
  keywords: ['customer sentiment analysis small business', 'review sentiment analysis', 'sentiment analysis reviews', 'customer feedback analysis small business'],
  articleSection: 'Customer Analytics',
}

export default function BlogPostSentimentAnalysis() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', overflowY: 'auto', overflow: 'auto' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <MarketingNav lang="en" />

      <article style={{ maxWidth: 680, margin: '0 auto', padding: '72px 32px 96px' }}>
        <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 40, display: 'flex', gap: 12, alignItems: 'center' }}>
          <Link href="/blog" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Blog</Link>
          <span>→</span>
          <span>Customer Sentiment Analysis</span>
        </div>

        <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 16 }}>
          May 2026 · 8 min read
        </div>
        <h1 style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400, fontSize: 44, lineHeight: 1.1, letterSpacing: '-0.02em', color: 'var(--ink)', marginBottom: 32 }}>
          Customer Sentiment Analysis for Small Business: What Your Reviews Are Really Saying
        </h1>
        <p style={{ fontFamily: 'var(--serif)', fontSize: 19, color: 'var(--ink-2)', lineHeight: 1.75, marginBottom: 56, fontStyle: 'italic' }}>
          Your star rating tells you a number. Sentiment analysis tells you a story — what customers feel, what they value, and what's quietly eroding their experience before it shows in your revenue.
        </p>

        <div style={{ fontFamily: 'var(--sans)', fontSize: 16, color: 'var(--ink-2)', lineHeight: 1.85 }}>

          <h2 style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400, fontSize: 28, color: 'var(--ink)', margin: '48px 0 20px' }}>The difference between a rating and sentiment</h2>

          <p style={{ marginBottom: 20 }}>
            A 4.3-star rating tells you that customers, on average, are somewhat satisfied. That's it. It tells you nothing about what they're satisfied or dissatisfied with, whether that satisfaction is stable or drifting, or which specific aspects of their experience are driving the number.
          </p>

          <p style={{ marginBottom: 20 }}>
            Sentiment analysis reads the text of reviews and classifies the emotional tone — positive, negative, or neutral — around specific topics. A 4.3-star business might have strongly positive sentiment around food quality but quietly deteriorating sentiment around wait times. The star rating won't show that distinction for months, but the sentiment data shows it the week it starts.
          </p>

          <p style={{ marginBottom: 20 }}>
            For small businesses, this early-warning capability is the most valuable aspect of sentiment analysis. You get to fix problems while they're still small — not after they've driven your rating from 4.3 to 4.0.
          </p>

          <h2 style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400, fontSize: 28, color: 'var(--ink)', margin: '48px 0 20px' }}>NPS vs star ratings: which one matters more?</h2>

          <p style={{ marginBottom: 20 }}>
            Net Promoter Score (NPS) is a survey-based metric that asks customers one question: "How likely are you to recommend us to a friend?" on a 0–10 scale. Promoters (9–10), Passives (7–8), and Detractors (0–6) produce a score from -100 to 100.
          </p>

          <p style={{ marginBottom: 20 }}>
            NPS and Google ratings measure related but different things. NPS measures loyalty intent — whether customers would recommend you. Google ratings measure satisfaction with a specific visit. A business can have high NPS (loyal regular customers) but mediocre Google ratings (because regulars don't leave reviews; first-time visitors do).
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, margin: '24px 0', padding: '24px', background: 'var(--paper)', border: '1px solid var(--line)' }}>
            <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 4 }}>When to use each</div>
            {[
              { metric: 'Google/review sentiment', use: 'Understanding how first-time and recent customers perceive specific aspects of your business. Best for identifying operational improvements.' },
              { metric: 'NPS surveys', use: 'Understanding loyalty among established customers. Best for retention strategy and identifying advocates who can be turned into referral sources.' },
              { metric: 'Both together', use: 'A complete picture. High NPS + declining review sentiment = you\'re retaining existing customers but losing the ability to attract new ones.' },
            ].map(({ metric, use }) => (
              <div key={metric} style={{ paddingBottom: 12, borderBottom: '1px solid var(--line)' }}>
                <div style={{ fontFamily: 'var(--sans)', fontWeight: 600, color: 'var(--ink)', marginBottom: 4 }}>{metric}</div>
                <div style={{ fontFamily: 'var(--sans)', fontSize: 13, color: 'var(--muted)', lineHeight: 1.6 }}>{use}</div>
              </div>
            ))}
          </div>

          <h2 style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400, fontSize: 28, color: 'var(--ink)', margin: '48px 0 20px' }}>Theme extraction: what customers actually care about</h2>

          <p style={{ marginBottom: 20 }}>
            Theme extraction is the process of identifying which topics appear most frequently across reviews. For a restaurant, typical themes include: food quality, portion size, wait time, staff attitude, value for money, ambience, and parking. For a salon, typical themes include: staff skill, appointment availability, price, cleanliness, and atmosphere.
          </p>

          <p style={{ marginBottom: 20 }}>
            Theme extraction reveals what customers actually prioritize — which is often different from what owners assume. Many restaurant owners believe customers care most about food quality, but sentiment analysis frequently shows that wait time and staff attitude appear more prominently in both positive and negative reviews.
          </p>

          <p style={{ marginBottom: 20 }}>
            Knowing which themes are most prominent tells you where to invest improvement efforts. A business spending money on menu upgrades while "wait time" is its most negative theme is optimizing the wrong thing.
          </p>

          <h2 style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400, fontSize: 28, color: 'var(--ink)', margin: '48px 0 20px' }}>Trend detection: the signal that matters most</h2>

          <p style={{ marginBottom: 20 }}>
            Trend detection is tracking how sentiment around specific themes changes over time. A sudden spike in "parking" mentions in negative reviews might indicate a nearby construction project has affected your lot. A gradual increase in "slow service" mentions might indicate a staffing problem that started three weeks ago.
          </p>

          <blockquote style={{ borderLeft: '3px solid var(--signal)', paddingLeft: 24, margin: '36px 0', fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 20, color: 'var(--ink)', lineHeight: 1.6 }}>
            "Sentiment trends are the earliest warning system in your business. They move weeks before your revenue does."
          </blockquote>

          <p style={{ marginBottom: 20 }}>
            ZORKO tracks sentiment trends automatically as part of the <Link href="/blog/ai-morning-brief-small-business" style={{ color: 'var(--ink)', textDecoration: 'underline' }}>morning brief</Link>. Instead of manually reading every review and trying to spot patterns, you see a synthesized view: which themes are trending positive, which are trending negative, and what's changed since last week.
          </p>

          <h2 style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400, fontSize: 28, color: 'var(--ink)', margin: '48px 0 20px' }}>Acting on sentiment data: the practical steps</h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 20, margin: '28px 0' }}>
            {[
              { title: 'Identify your top negative theme', desc: 'What is customers\' most common complaint? This is your first improvement priority. Fix this before anything else — it\'s costing you customers and reviews.' },
              { title: 'Protect your top positive theme', desc: 'What do customers love most? This is your core differentiator. Don\'t accidentally erode it while fixing other things.' },
              { title: 'Set a monthly review', desc: 'Once a month, look at how your sentiment themes have moved. Did the complaint you worked on improve? Did a new theme emerge? This monthly review should take 10 minutes.' },
              { title: 'Share with your team', desc: 'Sentiment data is most effective when your staff sees it. Sharing a monthly summary of what customers are saying — without naming individuals — creates shared ownership of the guest experience.' },
            ].map(({ title, desc }) => (
              <div key={title} style={{ display: 'grid', gridTemplateColumns: '10px 1fr', gap: 16, alignItems: 'start' }}>
                <div style={{ width: 10, height: 10, background: 'var(--signal)', marginTop: 5, flexShrink: 0 }} />
                <div>
                  <div style={{ fontFamily: 'var(--sans)', fontWeight: 600, color: 'var(--ink)', marginBottom: 6 }}>{title}</div>
                  <div style={{ fontFamily: 'var(--sans)', fontSize: 14, color: 'var(--muted)', lineHeight: 1.7 }}>{desc}</div>
                </div>
              </div>
            ))}
          </div>

        </div>

        <div style={{ marginTop: 64, padding: '40px', background: 'var(--ink)', display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'flex-start' }}>
          <div style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 24, color: 'var(--paper)' }}>
            See what your reviews are really saying
          </div>
          <p style={{ fontFamily: 'var(--sans)', fontSize: 14, color: 'var(--muted-2)', lineHeight: 1.6 }}>
            ZORKO analyzes your Google reviews for sentiment themes and trend signals, delivered in your morning brief. Free for 7 days.
          </p>
          <Link href="/pricing" style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--ink)', background: 'var(--paper)', textDecoration: 'none', padding: '12px 24px', display: 'inline-block' }}>
            Try ZORKO Free →
          </Link>
        </div>

        <div style={{ marginTop: 48, paddingTop: 40, borderTop: '1px solid var(--line)' }}>
          <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 24 }}>More from the blog</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <Link href="/blog/how-to-monitor-google-reviews-ai" style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 18, color: 'var(--ink)', textDecoration: 'none' }}>
              How to Monitor Your Google Reviews with AI →
            </Link>
            <Link href="/blog/negative-review-response-guide" style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 18, color: 'var(--ink)', textDecoration: 'none' }}>
              How to Respond to Negative Reviews →
            </Link>
          </div>
        </div>
      </article>

      <MarketingFooter lang="en" />
    </div>
  )
}
