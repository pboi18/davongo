import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Fraunces, Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const fraunces = Fraunces({ subsets: ['latin'], variable: '--font-fraunces' })
import { ThemeProvider } from '@/components/theme-provider'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://davo.v0.build'),
  title: {
    default: 'DAVO | Building a Nigeria where everyone can thrive',
    template: '%s | DAVO',
  },
  description: 'DAVO partners with communities to create lasting change through opportunity, dignity, and collective action.',
  applicationName: 'DAVO',
  openGraph: {
    type: 'website',
    locale: 'en_NG',
    siteName: 'DAVO',
    title: 'DAVO | Building a Nigeria where everyone can thrive',
    description: 'DAVO partners with communities to create lasting change through opportunity, dignity, and collective action.',
    url: '/',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'DAVO — building a Nigeria where everyone can thrive' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DAVO | Building a Nigeria where everyone can thrive',
    description: 'DAVO partners with communities to create lasting change through opportunity, dignity, and collective action.',
    images: ['/opengraph-image'],
  },
  robots: { index: true, follow: true },
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${fraunces.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <SiteHeader />
          {children}
          <SiteFooter />
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
