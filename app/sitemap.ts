import type { MetadataRoute } from 'next'
import { newsPosts } from '@/lib/data/news'
import { programs } from '@/lib/data/programs'

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://davo.v0.build'
  const routes = ['/', '/about', '/programs', '/impact', '/news', '/events', '/get-involved', '/reports', '/contact', '/donate', '/privacy', '/terms', '/cookies']
  const staticPages = routes.map((route) => ({ url: new URL(route, siteUrl).toString(), changeFrequency: 'monthly' as const, priority: route === '/' ? 1 : 0.7 }))
  const programPages = programs.map((program) => ({ url: new URL(`/programs/${program.slug}`, siteUrl).toString(), changeFrequency: 'monthly' as const, priority: 0.6 }))
  const newsPages = newsPosts.map((post) => ({ url: new URL(`/news/${post.slug}`, siteUrl).toString(), changeFrequency: 'monthly' as const, priority: 0.6 }))
  return [...staticPages, ...programPages, ...newsPages]
}
