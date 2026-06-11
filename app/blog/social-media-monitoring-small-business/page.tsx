import type { Metadata } from 'next'
import Link from 'next/link'
import { MarketingNav } from '@/components/marketing/MarketingNav'
import { MarketingFooter } from '@/components/marketing/MarketingFooter'

export const metadata: Metadata = {
  title: 'Social Media Monitoring for Small Businesses (Without a Marketing Team) | ZORKO',
  description: 'What to monitor on social (mentions, hashtags, competitors), free vs paid tools, and a practical weekly workflow for small business owners without a dedicated marketing team.',
  alternates: {
    canonical: 'https://zorko-three.vercel.app/blog/social-media-monitoring-small-business',
  },
  openGraph: {
    title: 'Social Media Monitoring for Small Businesses (Without a Marketing Team)',
    description: 'What to monitor, which tools to use, and a weekly workflow for small business social listening.',
    url: 'https://zorko-three.vercel.app/blog/social-media-monitoring-small-business',
    type: 'article',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Social Media Monitoring for Small Businesses (Without a Marketing Team)',
  description: 'What to monitor (mentions, hashtags, competitor), free vs paid tools, weekly workflow for small businesses.',
  url: 'https://zorko-three.vercel.app/blog/social-media-monitoring-small-business',
  datePublished: '2026-05-15',
  dateModified: '2026-05-15',
  author: { '@type': 'Organization', name: 'ZORKO' },
  publisher: { '@type': 'Organization', name: 'ZORKO', url: 'https://zorko-three.vercel.app' },
  keywords: ['social media monitoring small business', 'brand monitoring small business', 'social listening small business', 'small business social media'],
  articleSection: 'Social Media',
}

export default function BlogPostSocialMonitoring() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', overflowY: 'auto', overflow: 'auto' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <MarketingNav lang="en" />

      <article style={{ maxWidth: 680, margin: '0 auto', padding: '72px 32px 96px' }}>
        <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 40, display: 'flex', gap: 12, alignItems: 'center' }}>
          <Link href="/blog" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Blog</Link>
          <span>→</span>
          <span>Social Media Monitoring</span>
        </div>

        <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 16 }}>
          May 2026 · 7 min read
        </div>
        <h1 style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400, fontSize: 44, lineHeight: 1.1, letterSpacing: '-0.02em', color: 'var(--ink)', marginBottom: 32 }}>
          Social Media Monitoring for Small Businesses (Without a Marketing Team)
        </h1>
        <p style={{ fontFamily: 'var(--serif)', fontSize: 19, color: 'var(--ink-2)', lineHeight: 1.75, marginBottom: 56, fontStyle: 'italic' }}>
          People talk about your business on social media whether you're listening or not. Here's how to monitor what matters — without hiring a marketing team or spending your day on social media.
        </p>

        <div style={{ fontFamily: 'var(--sans)', fontSize: 16, color: 'var(--ink-2)', lineHeight: 1.85 }}>

          <h2 style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400, fontSize: 28, color: 'var(--ink)', margin: '48px 0 20px' }}>What social monitoring actually means for small businesses</h2>

          <p style={{ marginBottom: 20 }}>
            Social media monitoring — sometimes called social listening — is tracking mentions of your brand, products, or relevant topics across social platforms. For large businesses, this means expensive enterprise tools, dedicated analysts, and real-time dashboards. For small businesses, it can be much simpler — but it still matters.
          </p>

          <p style={{ marginBottom: 20 }}>
            A customer posts a photo of your café on Instagram with a complaint about the cold coffee. Two hundred of their followers see it. You don't. Two weeks later, you notice your coffee mentions have a slightly negative tone — but the moment to respond has passed.
          </p>

          <p style={{ marginBottom: 20 }}>
            Social monitoring at the small business level isn't about catching everything in real time. It's about having a weekly check-in process that surfaces the signals worth acting on.
          </p>

          <h2 style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400, fontSize: 28, color: 'var(--ink)', margin: '48px 0 20px' }}>What to monitor: the three signal types</h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 24, margin: '28px 0' }}>
            {[
              {
                type: 'Direct brand mentions',
                desc: 'Your business name, location address, and any common misspellings or nicknames. These are the most important — someone is talking directly about you.',
                platforms: 'Instagram, Facebook, TikTok, Twitter/X, Nextdoor',
              },
              {
                type: 'Hashtag monitoring',
                desc: 'Location-based hashtags (#[YourCity]Eats, #[YourNeighborhood]) and category hashtags (#LocalCafe, #SmallBizSaturday) where customers post about businesses like yours.',
                platforms: 'Instagram and TikTok primarily',
              },
              {
                type: 'Competitor monitoring',
                desc: 'Your top 2–3 competitors\' names and their brand hashtags. When their sentiment dips, it\'s your opportunity. When they launch a new offer, you want to know.',
                platforms: 'All platforms, plus Google reviews',
              },
            ].map(({ type, desc, platforms }) => (
              <div key={type} style={{ paddingBottom: 20, borderBottom: '1px solid var(--line)' }}>
                <div style={{ fontFamily: 'var(--sans)', fontSize: 16, fontWeight: 600, color: 'var(--ink)', marginBottom: 8 }}>{type}</div>
                <p style={{ marginBottom: 8, fontSize: 15 }}>{desc}</p>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--muted)', letterSpacing: '.04em' }}>Platforms: {platforms}</div>
              </div>
            ))}
          </div>

          <h2 style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400, fontSize: 28, color: 'var(--ink)', margin: '48px 0 20px' }}>Free tools that do most of what you need</h2>

          <p style={{ marginBottom: 20 }}>
            You don't need expensive software for basic social monitoring. These free tools cover the essentials:
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, margin: '20px 0', padding: '24px', background: 'var(--paper)', border: '1px solid var(--line)' }}>
            {[
              { tool: 'Google Alerts', use: 'Set up alerts for your business name and competitors. Google emails you when new web content (including some social) mentions your terms. Free, takes 5 minutes to set up.' },
              { tool: 'Instagram search', use: 'Search your business name and location tags weekly. Instagram\'s native search shows recent posts — it\'s not comprehensive, but it catches tagged posts quickly.' },
              { tool: 'Facebook Page insights', use: 'If you have a Facebook page, native Insights show you mentions and tags. Check weekly.' },
              { tool: 'Nextdoor notifications', use: 'For local businesses, Nextdoor mentions can be highly valuable — local residents asking for recommendations are active buyers. Claim your business listing and turn on notifications.' },
            ].map(({ tool, use }) => (
              <div key={tool} style={{ display: 'grid', gridTemplateColumns: '10px 1fr', gap: 14, alignItems: 'start' }}>
                <div style={{ width: 10, height: 10, background: 'var(--signal)', marginTop: 5, flexShrink: 0 }} />
                <div>
                  <div style={{ fontFamily: 'var(--sans)', fontWeight: 600, color: 'var(--ink)', marginBottom: 4 }}>{tool}</div>
                  <div style={{ fontFamily: 'var(--sans)', fontSize: 14, color: 'var(--muted)', lineHeight: 1.6 }}>{use}</div>
                </div>
              </div>
            ))}
          </div>

          <h2 style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400, fontSize: 28, color: 'var(--ink)', margin: '48px 0 20px' }}>When to consider paid tools</h2>

          <p style={{ marginBottom: 20 }}>
            Free tools have real limitations: they're not comprehensive, they require manual checking, and they provide no analysis — just raw mentions. Paid tools like Mention, Brand24, or Sprout Social automate the collection, aggregate across platforms, and surface sentiment analysis.
          </p>

          <p style={{ marginBottom: 20 }}>
            For most small businesses, paid social monitoring tools make sense when: you're receiving more than 50 mentions per week, you have multiple locations, or a negative social mention could cause significant damage (e.g., a restaurant with a food safety incident).
          </p>

          <h2 style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400, fontSize: 28, color: 'var(--ink)', margin: '48px 0 20px' }}>A weekly social monitoring workflow</h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, margin: '24px 0' }}>
            {[
              { day: 'Monday', task: 'Check Google Alerts digest from the past week. Flag anything worth responding to or saving.' },
              { day: 'Wednesday', task: 'Search your business name and top location hashtag on Instagram and TikTok. Note any tagged posts.' },
              { day: 'Friday', task: 'Check Nextdoor for business mentions or category recommendations. Check Facebook Page insights.' },
              { day: 'Weekly total', task: '~20 minutes of focused checking beats hours of unfocused social scrolling.' },
            ].map(({ day, task }) => (
              <div key={day} style={{ display: 'grid', gridTemplateColumns: '100px 1fr', gap: 16, alignItems: 'start', padding: '12px 0', borderBottom: '1px solid var(--line)' }}>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--signal)', fontWeight: 600, letterSpacing: '.04em' }}>{day}</div>
                <div style={{ fontFamily: 'var(--sans)', fontSize: 14, color: 'var(--muted)', lineHeight: 1.6 }}>{task}</div>
              </div>
            ))}
          </div>

          <blockquote style={{ borderLeft: '3px solid var(--signal)', paddingLeft: 24, margin: '36px 0', fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 20, color: 'var(--ink)', lineHeight: 1.6 }}>
            "The goal isn't to be on social media constantly. It's to not be the last person to find out when something important is said about your business."
          </blockquote>

          <h2 style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400, fontSize: 28, color: 'var(--ink)', margin: '48px 0 20px' }}>Where ZORKO fits</h2>

          <p style={{ marginBottom: 20 }}>
            ZORKO surfaces social mention signals as part of the daily <Link href="/blog/ai-morning-brief-small-business" style={{ color: 'var(--ink)', textDecoration: 'underline' }}>morning brief</Link> — you see a synthesized view of what's being said about your business across channels, without manually checking each one. Combined with Google review monitoring, the brief gives you a unified picture of your reputation at the start of each day.
          </p>

        </div>

        <div style={{ marginTop: 64, padding: '40px', background: 'var(--ink)', display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'flex-start' }}>
          <div style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 24, color: 'var(--paper)' }}>
            Monitor your brand reputation automatically
          </div>
          <p style={{ fontFamily: 'var(--sans)', fontSize: 14, color: 'var(--muted-2)', lineHeight: 1.6 }}>
            ZORKO tracks your reviews and brand signals overnight and surfaces them in your morning brief. 7-day free trial.
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
            <Link href="/blog/zorko-vs-hootsuite" style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 18, color: 'var(--ink)', textDecoration: 'none' }}>
              ZORKO vs Hootsuite: Different Tools, Different Jobs →
            </Link>
          </div>
        </div>
      </article>

      <MarketingFooter lang="en" />
    </div>
  )
}
