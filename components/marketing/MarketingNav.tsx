import Link from 'next/link'

interface MarketingNavProps {
  lang?: 'ru' | 'en'
}

export function MarketingNav({ lang = 'en' }: MarketingNavProps) {
  const isRu = lang === 'ru'

  const navLinks = isRu
    ? [
        { href: '/ru/funktsii', label: 'Функции' },
        { href: '/ru/tseny', label: 'Тарифы' },
        { href: '/about', label: 'О нас' },
        { href: '/blog', label: 'Блог' },
      ]
    : [
        { href: '/features', label: 'Features' },
        { href: '/use-cases', label: 'Use Cases' },
        { href: '/compare/zorko-vs-google-analytics', label: 'Compare' },
        { href: '/pricing', label: 'Pricing' },
        { href: '/blog', label: 'Blog' },
      ]

  return (
    <header style={{
      borderBottom: '1px solid var(--line)',
      padding: '20px 32px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      background: 'var(--bg)',
      position: 'sticky',
      top: 0,
      zIndex: 100,
    }}>
      <Link href={isRu ? '/ru' : '/'} style={{
        fontFamily: 'var(--serif)',
        fontStyle: 'italic',
        fontSize: 22,
        color: 'var(--ink)',
        textDecoration: 'none',
        letterSpacing: '-0.01em',
      }}>
        ЗОРКО
      </Link>

      <nav style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
        {navLinks.map(({ href, label }) => (
          <Link key={href} href={href} style={{
            fontFamily: 'var(--mono)',
            fontSize: 10,
            letterSpacing: '.14em',
            textTransform: 'uppercase',
            color: 'var(--muted)',
            textDecoration: 'none',
          }}>
            {label}
          </Link>
        ))}
        {isRu
          ? <Link href="/" style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--muted)', textDecoration: 'none', opacity: 0.6 }}>EN</Link>
          : <Link href="/ru" style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--muted)', textDecoration: 'none', opacity: 0.6 }}>RU</Link>
        }
        <Link href="/pricing" style={{
          fontFamily: 'var(--mono)',
          fontSize: 10,
          letterSpacing: '.12em',
          textTransform: 'uppercase',
          color: 'var(--paper)',
          background: 'var(--signal)',
          textDecoration: 'none',
          padding: '8px 16px',
        }}>
          {isRu ? 'Начать →' : 'Get Started →'}
        </Link>
      </nav>
    </header>
  )
}
