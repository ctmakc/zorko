import { MetadataRoute } from 'next'

const BASE = 'https://zorko-three.vercel.app'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // Marketing pages (EN)
    { url: `${BASE}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/features`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/use-cases`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/pricing`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/compare/zorko-vs-google-analytics`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },

    // Blog (EN)
    { url: `${BASE}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${BASE}/blog/ai-morning-brief-small-business`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/blog/small-business-ai-dashboard-guide`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },

    // Russian pages
    { url: `${BASE}/ru`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/ru/funktsii`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/ru/tseny`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/ru/blog/utrenniy-briefing-ii-dlya-biznesa`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  ]
}
