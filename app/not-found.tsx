import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return <main className="flex min-h-[65vh] items-center bg-background px-5 py-20"><div className="mx-auto max-w-3xl"><p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">404 · Page not found</p><h1 className="mt-5 font-serif text-5xl leading-tight sm:text-7xl">This page has moved on.</h1><p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">The link may be out of date, or the page may no longer be here. Let&apos;s get you back to the work.</p><Link href="/" className="mt-8 inline-flex items-center rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground"><ArrowLeft className="mr-2 h-4 w-4" />Back to home</Link></div></main>
}
