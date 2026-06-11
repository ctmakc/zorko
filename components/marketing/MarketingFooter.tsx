import Link from 'next/link'

interface MarketingFooterProps {
  lang?: 'ru' | 'en'
}

export function MarketingFooter({ lang = 'en' }: MarketingFooterProps) {
  const isRu = lang === 'ru'

  return (
    <footer style={{
      borderTop: '1px solid var(--line)',
      padding: '40px 32px',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: 32,
      background: 'var(--bg-2)',
    }}>
      <div>
        <div style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 20, color: 'var(--ink)', marginBottom: 8 }}>ЗОРКО</div>
        <p style={{ fontFamily: 'var(--sans)', fontSize: 12, color: 'var(--muted)', lineHeight: 1.6 }}>
          {isRu
            ? 'AI-брифинг для малого бизнеса каждое утро.'
            : 'AI morning brief for small business owners. Daily insights, whispers, focus.'}
        </p>
      </div>
      <div>
        <div style={{ fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--muted-2)', marginBottom: 14 }}>
          {isRu ? 'Навигация' : 'Product'}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {(isRu
            ? [
                { href: '/ru/funktsii', label: 'Функции' },
                { href: '/ru/tseny', label: 'Тарифы' },
                { href: '/about', label: 'О нас' },
              ]
            : [
                { href: '/features', label: 'Features' },
                { href: '/use-cases', label: 'Use Cases' },
                { href: '/pricing', label: 'Pricing' },
                { href: '/compare/zorko-vs-google-analytics', label: 'ZORKO vs Google Analytics' },
              ]
          ).map(({ href, label }) => (
            <Link key={href} href={href} style={{ fontFamily: 'var(--sans)', fontSize: 12, color: 'var(--muted)', textDecoration: 'none' }}>
              {label}
            </Link>
          ))}
        </div>
      </div>
      <div>
        <div style={{ fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--muted-2)', marginBottom: 14 }}>
          {isRu ? 'Блог' : 'Blog'}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {(isRu
            ? [{ href: '/ru/blog/utrenniy-briefing-ii-dlya-biznesa', label: 'Утренний ИИ-брифинг' }]
            : [
                { href: '/blog/ai-morning-brief-small-business', label: 'AI Morning Brief Guide' },
                { href: '/blog/small-business-ai-dashboard-guide', label: 'AI Dashboard Guide 2026' },
              ]
          ).map(({ href, label }) => (
            <Link key={href} href={href} style={{ fontFamily: 'var(--sans)', fontSize: 12, color: 'var(--muted)', textDecoration: 'none' }}>
              {label}
            </Link>
          ))}
        </div>
      </div>

      <div style={{ gridColumn: '1 / -1', borderTop: '1px solid var(--line)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--muted-2)', letterSpacing: '.06em' }}>
          © 2026 ZORKO · AI Dashboard
        </span>
        <div style={{ display: 'flex', gap: 20 }}>
          <Link href="/ru" style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--muted-2)', textDecoration: 'none', letterSpacing: '.06em' }}>RU</Link>
          <Link href="/" style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--muted-2)', textDecoration: 'none', letterSpacing: '.06em' }}>EN</Link>
        </div>
      </div>
    </footer>
  )
}
