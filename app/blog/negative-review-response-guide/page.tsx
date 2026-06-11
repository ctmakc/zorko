import type { Metadata } from 'next'
import Link from 'next/link'
import { MarketingNav } from '@/components/marketing/MarketingNav'
import { MarketingFooter } from '@/components/marketing/MarketingFooter'

export const metadata: Metadata = {
  title: 'How to Respond to Negative Reviews: A Small Business Owner\'s Guide | ZORKO',
  description: 'The 4-step framework for responding to negative reviews, what never to say, when to flag a review, real examples, and how AI-assisted drafting saves time without sacrificing quality.',
  alternates: {
    canonical: 'https://zorko-three.vercel.app/blog/negative-review-response-guide',
  },
  openGraph: {
    title: 'How to Respond to Negative Reviews: A Small Business Owner\'s Guide',
    description: 'The 4-step framework, what not to say, when to flag, real examples, and AI-assisted drafting for negative review responses.',
    url: 'https://zorko-three.vercel.app/blog/negative-review-response-guide',
    type: 'article',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: "How to Respond to Negative Reviews: A Small Business Owner's Guide",
  description: 'The 4-step framework for responding to negative reviews, what never to say, when to flag, real examples, and AI-assisted drafting.',
  url: 'https://zorko-three.vercel.app/blog/negative-review-response-guide',
  datePublished: '2026-05-15',
  dateModified: '2026-05-15',
  author: { '@type': 'Organization', name: 'ZORKO' },
  publisher: { '@type': 'Organization', name: 'ZORKO', url: 'https://zorko-three.vercel.app' },
  keywords: ['respond to negative reviews', 'negative review response small business', 'how to handle bad reviews', 'google review response guide'],
  articleSection: 'Review Management',
}

export default function BlogPostNegativeReviews() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', overflowY: 'auto', overflow: 'auto' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <MarketingNav lang="en" />

      <article style={{ maxWidth: 680, margin: '0 auto', padding: '72px 32px 96px' }}>
        <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 40, display: 'flex', gap: 12, alignItems: 'center' }}>
          <Link href="/blog" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Blog</Link>
          <span>→</span>
          <span>Negative Review Response</span>
        </div>

        <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 16 }}>
          May 2026 · 8 min read
        </div>
        <h1 style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400, fontSize: 44, lineHeight: 1.1, letterSpacing: '-0.02em', color: 'var(--ink)', marginBottom: 32 }}>
          How to Respond to Negative Reviews: A Small Business Owner's Guide
        </h1>
        <p style={{ fontFamily: 'var(--serif)', fontSize: 19, color: 'var(--ink-2)', lineHeight: 1.75, marginBottom: 56, fontStyle: 'italic' }}>
          A negative review is never comfortable. But how you respond — publicly, within 24 hours — is often more persuasive to future customers than the original complaint. Here's how to get it right.
        </p>

        <div style={{ fontFamily: 'var(--sans)', fontSize: 16, color: 'var(--ink-2)', lineHeight: 1.85 }}>

          <h2 style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400, fontSize: 28, color: 'var(--ink)', margin: '48px 0 20px' }}>Why negative reviews aren't as bad as you think</h2>

          <p style={{ marginBottom: 20 }}>
            Studies consistently show that a business with a 4.2-star rating and visible owner responses to negative reviews outperforms a 4.7-star business with no responses in terms of customer trust. The reason is counterintuitive: perfect ratings look suspicious. Handled complaints look professional.
          </p>

          <p style={{ marginBottom: 20 }}>
            Potential customers don't just read the negative review — they read your response. A thoughtful, professional response to a complaint demonstrates how you treat customers when things go wrong. That's actually very useful information for someone deciding whether to trust you with their money.
          </p>

          <h2 style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400, fontSize: 28, color: 'var(--ink)', margin: '48px 0 20px' }}>The 4-step response framework</h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 28, margin: '32px 0' }}>
            {[
              {
                step: '1',
                title: 'Acknowledge',
                desc: 'Start by acknowledging that the customer had a negative experience — without immediately defending yourself. "Thank you for taking the time to share this" sounds hollow; "I\'m sorry to hear your visit didn\'t meet expectations" lands better. Specificity helps: if they mentioned a specific issue, reference it.',
              },
              {
                step: '2',
                title: 'Take responsibility (where appropriate)',
                desc: 'If the complaint is valid, say so clearly. Avoid hedging language ("I\'m sorry you felt that way" implies the problem is their feeling, not your service). "We clearly let you down on this one" is more effective. If the complaint is inaccurate, you can gently clarify — but don\'t make that the first thing you do.',
              },
              {
                step: '3',
                title: 'Offer to resolve',
                desc: 'Move the conversation offline. "Please reach out to us at [email/phone] — we\'d like to make this right." This serves two purposes: it shows potential customers you\'re willing to fix problems, and it prevents a public back-and-forth that rarely ends well for either party.',
              },
              {
                step: '4',
                title: 'End positively and briefly',
                desc: 'Close with a forward-looking statement — not an apology repeat, not a defense. "We value your business and hope to have the opportunity to serve you better." Then stop. Long responses feel defensive; short ones feel confident.',
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

          <h2 style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400, fontSize: 28, color: 'var(--ink)', margin: '48px 0 20px' }}>What not to say</h2>

          <p style={{ marginBottom: 16 }}>The phrases that make things worse:</p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, margin: '16px 0', padding: '24px', background: 'var(--paper)', border: '1px solid var(--line)' }}>
            {[
              { bad: '"This is the first we\'ve heard of this."', why: 'Sounds defensive. Even if true, it\'s not helpful to say it.' },
              { bad: '"I\'m sorry you feel that way."', why: 'The word "feel" implies their experience was subjective. It comes across as dismissive.' },
              { bad: '"We have hundreds of satisfied customers..."', why: 'Irrelevant to this customer\'s specific experience. Reads as deflection.' },
              { bad: '"This review is inaccurate."', why: 'Even if true, starting with a denial makes you look untrustworthy to readers.' },
              { bad: 'Nothing. Silence.', why: 'No response is read as indifference. It\'s worse than any imperfect response.' },
            ].map(({ bad, why }) => (
              <div key={bad} style={{ paddingBottom: 12, borderBottom: '1px solid var(--line)' }}>
                <div style={{ fontFamily: 'var(--sans)', fontSize: 14, fontWeight: 600, color: 'var(--ink)', marginBottom: 4 }}>{bad}</div>
                <div style={{ fontFamily: 'var(--sans)', fontSize: 13, color: 'var(--muted)', lineHeight: 1.6 }}>{why}</div>
              </div>
            ))}
          </div>

          <h2 style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400, fontSize: 28, color: 'var(--ink)', margin: '48px 0 20px' }}>When to flag a review instead of responding</h2>

          <p style={{ marginBottom: 20 }}>
            Not every negative review deserves a response — some deserve a flag. Google allows businesses to flag reviews that violate their policies. Reviews you can flag include: spam or fake reviews, reviews from people who were never your customer, reviews with off-topic content, and reviews that contain hate speech or personal attacks.
          </p>

          <p style={{ marginBottom: 20 }}>
            The flagging process is not instant — Google review it, and it may take days or weeks. Don't respond to a review you plan to flag; responding may be seen as acknowledging its legitimacy.
          </p>

          <blockquote style={{ borderLeft: '3px solid var(--signal)', paddingLeft: 24, margin: '36px 0', fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 20, color: 'var(--ink)', lineHeight: 1.6 }}>
            "A handled complaint is an advertisement. It shows exactly how you treat customers when things go wrong — which is exactly what new customers want to know."
          </blockquote>

          <h2 style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400, fontSize: 28, color: 'var(--ink)', margin: '48px 0 20px' }}>AI-assisted drafting: faster without sacrificing quality</h2>

          <p style={{ marginBottom: 20 }}>
            Writing a thoughtful response to a negative review takes more time than it looks. You need to read carefully, not respond reactively, craft language that's professional but not cold, and do this consistently across every negative review you receive.
          </p>

          <p style={{ marginBottom: 20 }}>
            ZORKO's AI drafts responses based on the content of each review. The draft follows the 4-step framework, matches the tone of your business, and is ready for you to review and send. What used to take 10 minutes per review now takes 45 seconds. You still approve every response — the AI just removes the blank-page problem and the reactive impulse to defend first.
          </p>

          <p style={{ marginBottom: 20 }}>
            Combined with <Link href="/blog/how-to-monitor-google-reviews-ai" style={{ color: 'var(--ink)', textDecoration: 'underline' }}>review monitoring</Link>, you're alerted to negative reviews immediately and have a draft response waiting — turning a potential crisis into a handled situation before it compounds.
          </p>

        </div>

        <div style={{ marginTop: 64, padding: '40px', background: 'var(--ink)', display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'flex-start' }}>
          <div style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 24, color: 'var(--paper)' }}>
            Get AI-drafted review responses delivered every morning
          </div>
          <p style={{ fontFamily: 'var(--sans)', fontSize: 14, color: 'var(--muted-2)', lineHeight: 1.6 }}>
            ZORKO monitors new reviews overnight and drafts responses. 7-day free trial, no card required.
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
            <Link href="/blog/google-business-profile-optimization" style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 18, color: 'var(--ink)', textDecoration: 'none' }}>
              Google Business Profile Optimization: 2026 Guide →
            </Link>
            <Link href="/blog/customer-sentiment-analysis-small-business" style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 18, color: 'var(--ink)', textDecoration: 'none' }}>
              Customer Sentiment Analysis for Small Business →
            </Link>
          </div>
        </div>
      </article>

      <MarketingFooter lang="en" />
    </div>
  )
}
