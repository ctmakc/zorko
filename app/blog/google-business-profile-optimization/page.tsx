import type { Metadata } from 'next'
import Link from 'next/link'
import { MarketingNav } from '@/components/marketing/MarketingNav'
import { MarketingFooter } from '@/components/marketing/MarketingFooter'

export const metadata: Metadata = {
  title: 'Google Business Profile Optimization for Small Businesses: 2026 Guide | ZORKO',
  description: 'Categories, photos, posts, Q&A, review responses, and a weekly maintenance checklist — the complete guide to Google Business Profile optimization for small businesses in 2026.',
  alternates: {
    canonical: 'https://zorko-three.vercel.app/blog/google-business-profile-optimization',
  },
  openGraph: {
    title: 'Google Business Profile Optimization for Small Businesses: 2026 Guide',
    description: 'Categories, photos, posts, Q&A, review responses — the complete GBP optimization guide for small businesses.',
    url: 'https://zorko-three.vercel.app/blog/google-business-profile-optimization',
    type: 'article',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Google Business Profile Optimization for Small Businesses: 2026 Guide',
  description: 'Categories, photos, posts, Q&A, review responses, and weekly maintenance checklist for Google Business Profile optimization.',
  url: 'https://zorko-three.vercel.app/blog/google-business-profile-optimization',
  datePublished: '2026-05-15',
  dateModified: '2026-05-15',
  author: { '@type': 'Organization', name: 'ZORKO' },
  publisher: { '@type': 'Organization', name: 'ZORKO', url: 'https://zorko-three.vercel.app' },
  keywords: ['google business profile optimization', 'google my business small business', 'gbp optimization 2026', 'google business listing optimization'],
  articleSection: 'Local SEO',
}

const checklist = [
  { freq: 'Daily', items: ['Check for new reviews and respond within 24 hours', 'Monitor for Q&A questions needing answers'] },
  { freq: 'Weekly', items: ['Post one update (offer, event, or news post)', 'Add 2–3 new photos from the week', 'Check your profile views and search queries in Insights'] },
  { freq: 'Monthly', items: ['Review and update your service/product listings', 'Check that your hours are accurate (holidays, seasonal changes)', 'Review your category selection — has your business expanded?'] },
  { freq: 'Quarterly', items: ['Audit your photos — remove outdated or low-quality images', 'Update your business description to reflect any changes', 'Review competitor profiles to see what they\'re doing differently'] },
]

export default function BlogPostGBPOptimization() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', overflowY: 'auto', overflow: 'auto' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <MarketingNav lang="en" />

      <article style={{ maxWidth: 680, margin: '0 auto', padding: '72px 32px 96px' }}>
        <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 40, display: 'flex', gap: 12, alignItems: 'center' }}>
          <Link href="/blog" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Blog</Link>
          <span>→</span>
          <span>Google Business Profile</span>
        </div>

        <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 16 }}>
          May 2026 · 9 min read
        </div>
        <h1 style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400, fontSize: 44, lineHeight: 1.1, letterSpacing: '-0.02em', color: 'var(--ink)', marginBottom: 32 }}>
          Google Business Profile Optimization for Small Businesses: 2026 Guide
        </h1>
        <p style={{ fontFamily: 'var(--serif)', fontSize: 19, color: 'var(--ink-2)', lineHeight: 1.75, marginBottom: 56, fontStyle: 'italic' }}>
          Your Google Business Profile is often the first thing a potential customer sees. For local businesses, it's more important than your website. Here's how to optimize every element — and maintain it effectively.
        </p>

        <div style={{ fontFamily: 'var(--sans)', fontSize: 16, color: 'var(--ink-2)', lineHeight: 1.85 }}>

          <h2 style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400, fontSize: 28, color: 'var(--ink)', margin: '48px 0 20px' }}>Why GBP matters more than most small business owners realize</h2>

          <p style={{ marginBottom: 20 }}>
            For a local business, Google Business Profile placement in local search (the "Map Pack") drives more foot traffic than any other channel. When someone searches "café near me" or "plumber in [city]," the three businesses that appear in the Map Pack capture a disproportionate share of clicks — often 60–80% of all local search traffic.
          </p>

          <p style={{ marginBottom: 20 }}>
            Google's local ranking algorithm weighs three factors: relevance (does your profile match what was searched?), distance (how close are you to the searcher?), and prominence (how well-known and highly-rated are you?). Profile optimization directly affects relevance and prominence.
          </p>

          <h2 style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400, fontSize: 28, color: 'var(--ink)', margin: '48px 0 20px' }}>Category selection: the most underestimated setting</h2>

          <p style={{ marginBottom: 20 }}>
            Your primary category tells Google what your business is. This is the single most impactful setting on your profile. Choose too broadly ("Restaurant" instead of "Italian Restaurant") and you compete for generic terms your specific business can't win. Choose too narrowly and you miss searches from customers who would be a perfect fit.
          </p>

          <p style={{ marginBottom: 20 }}>
            Use secondary categories to cover your secondary offerings. A salon that also offers nail services should have both "Hair salon" and "Nail salon" as categories. A bakery that does custom cakes should have "Bakery" and "Wedding cake shop" if those searches are relevant.
          </p>

          <p style={{ marginBottom: 20 }}>
            Review your categories quarterly. If you've expanded your services, your categories should reflect that.
          </p>

          <h2 style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400, fontSize: 28, color: 'var(--ink)', margin: '48px 0 20px' }}>Photos: the conversion driver most businesses ignore</h2>

          <p style={{ marginBottom: 20 }}>
            Profiles with photos receive significantly more direction requests and website clicks than profiles without. The quality and recency of photos also matters — a profile whose most recent photo is from 2022 signals to both Google and potential customers that the business may not be actively maintained.
          </p>

          <p style={{ marginBottom: 20 }}>
            Aim for at least 10 high-quality photos across these categories: exterior (so customers can recognize your location), interior, product/service shots, team, and atmosphere. Update them regularly — add 2–3 new photos per week to signal active management.
          </p>

          <h2 style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400, fontSize: 28, color: 'var(--ink)', margin: '48px 0 20px' }}>Posts: the feature 80% of businesses never use</h2>

          <p style={{ marginBottom: 20 }}>
            Google Business Profile Posts are short updates that appear directly on your profile. They can feature offers, events, product highlights, or general news. They expire after 7 days (offers can run longer), which means Google expects them to be updated regularly.
          </p>

          <p style={{ marginBottom: 20 }}>
            Businesses that post weekly see measurably better profile engagement than those that don't. Posts require no technical skill — write a sentence or two, add a photo, optionally add a link. It takes five minutes and most businesses never do it. That's an advantage for those who do.
          </p>

          <h2 style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400, fontSize: 28, color: 'var(--ink)', margin: '48px 0 20px' }}>Review responses: a ranking signal, not just courtesy</h2>

          <p style={{ marginBottom: 20 }}>
            Responding to reviews — both positive and negative — is a signal to Google that your business is actively engaged with customers. It also influences whether potential customers choose you: a business that responds thoughtfully to a negative review often converts more customers than one that has only positive reviews with no responses.
          </p>

          <p style={{ marginBottom: 20 }}>
            For negative reviews, aim to respond within 24 hours. Acknowledge the experience, apologize genuinely if warranted, and offer to resolve the issue offline. For positive reviews, a short personalized acknowledgment is better than a generic template. Using the customer's name and referencing something specific in their review takes 30 seconds and leaves a completely different impression.
          </p>

          <p style={{ marginBottom: 20 }}>
            ZORKO's <Link href="/blog/how-to-monitor-google-reviews-ai" style={{ color: 'var(--ink)', textDecoration: 'underline' }}>AI review monitoring</Link> drafts responses for you, dramatically reducing the time investment while maintaining response quality and consistency.
          </p>

          <h2 style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400, fontSize: 28, color: 'var(--ink)', margin: '48px 0 20px' }}>Q&A: populate your own answers before customers ask</h2>

          <p style={{ marginBottom: 20 }}>
            Google's Q&A feature allows anyone — including the business owner — to add questions and answers to the profile. Most businesses wait for customers to ask questions. Smart businesses preemptively add the top 5–10 questions they hear in person: hours, parking, payment methods, reservations, accessibility, pet-friendliness.
          </p>

          <p style={{ marginBottom: 20 }}>
            Answering your own questions with accurate, keyword-rich answers both improves conversion and adds relevance signals to your profile.
          </p>

          <h2 style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400, fontSize: 28, color: 'var(--ink)', margin: '48px 0 20px' }}>Weekly maintenance checklist</h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 24, margin: '32px 0' }}>
            {checklist.map(({ freq, items }) => (
              <div key={freq} style={{ paddingBottom: 20, borderBottom: '1px solid var(--line)' }}>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--signal)', marginBottom: 12 }}>{freq}</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {items.map((item) => (
                    <div key={item} style={{ display: 'grid', gridTemplateColumns: '10px 1fr', gap: 12, alignItems: 'start' }}>
                      <div style={{ width: 10, height: 10, background: 'var(--signal)', marginTop: 5, flexShrink: 0 }} />
                      <div style={{ fontFamily: 'var(--sans)', fontSize: 14, color: 'var(--muted)', lineHeight: 1.6 }}>{item}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <blockquote style={{ borderLeft: '3px solid var(--signal)', paddingLeft: 24, margin: '36px 0', fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 20, color: 'var(--ink)', lineHeight: 1.6 }}>
            "Treating your Google Business Profile like a living asset — not a one-time setup — is the difference between local search visibility and invisibility."
          </blockquote>

        </div>

        <div style={{ marginTop: 64, padding: '40px', background: 'var(--ink)', display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'flex-start' }}>
          <div style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 24, color: 'var(--paper)' }}>
            Monitor your Google profile performance daily
          </div>
          <p style={{ fontFamily: 'var(--sans)', fontSize: 14, color: 'var(--muted-2)', lineHeight: 1.6 }}>
            ZORKO tracks your review velocity, sentiment, and profile signals overnight and delivers insights before you open. Free for 7 days.
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
              How to Respond to Negative Reviews: A Small Business Owner's Guide →
            </Link>
          </div>
        </div>
      </article>

      <MarketingFooter lang="en" />
    </div>
  )
}
