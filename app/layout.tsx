import type { Metadata } from "next";
import { Newsreader, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const newsreader = Newsreader({ subsets: ["latin"], variable: "--font-newsreader", display: "swap", weight: ["300","400","500","600","700"], style: ["normal","italic"] });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk", display: "swap" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains-mono", display: "swap" });

const BASE = 'https://zorko-three.vercel.app'

export const metadata: Metadata = {
  title: {
    default: "ЗОРКО — AI-дашборд для малого бизнеса",
    template: "%s | ЗОРКО",
  },
  description: "AI-дашборд для малого бизнеса. Ежедневный брифинг, инсайты, прогнозы — всё утром, до открытия.",
  metadataBase: new URL(BASE),
  alternates: {
    canonical: BASE,
    languages: {
      'ru': `${BASE}/ru`,
      'en': BASE,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    alternateLocale: 'en_US',
    siteName: 'ЗОРКО',
    title: 'ЗОРКО — AI-дашборд для малого бизнеса',
    description: 'Ежедневный AI-брифинг для владельцев малого бизнеса. Инсайты, шёпоты, фокус дня.',
    url: BASE,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ЗОРКО — AI-дашборд для малого бизнеса',
    description: 'Ежедневный AI-брифинг для владельцев малого бизнеса.',
  },
};

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'ZORKO',
  alternateName: 'ЗОРКО',
  url: BASE,
  description: 'AI morning brief dashboard for small business owners',
  sameAs: [],
};

const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'ZORKO — AI Morning Brief Dashboard',
  alternateName: 'ЗОРКО',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  url: BASE,
  description: 'AI-powered daily brief dashboard for small business owners. Analyzes reviews, sales data, and social signals to deliver morning insights.',
  offers: [
    {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      name: 'Free',
      description: '1 data source, 3 AI briefs per week',
    },
    {
      '@type': 'Offer',
      price: '19',
      priceCurrency: 'USD',
      billingDuration: 'P1M',
      name: 'Pro',
      description: 'Unlimited connectors, daily AI briefs, whispers, focus mode',
    },
  ],
  featureList: [
    'Daily AI morning brief',
    'Whispers — micro-insight alerts',
    'Focus mode — one priority per day',
    'Google Places reviews integration',
    'Gemini AI analysis engine',
    '7-day forecast',
    'Connector system',
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${newsreader.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="alternate" hrefLang="ru" href={`${BASE}/ru`} />
        <link rel="alternate" hrefLang="en" href={BASE} />
        <link rel="alternate" hrefLang="x-default" href={BASE} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
