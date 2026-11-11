'use client'

import { RefreshCw } from 'lucide-react'

export default function ErrorPage({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return <main className="flex min-h-[65vh] items-center bg-background px-5 py-20"><div className="mx-auto max-w-3xl"><p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Something went wrong</p><h1 className="mt-5 font-serif text-5xl leading-tight sm:text-7xl">We couldn&apos;t load this page.</h1><p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">Please try again. If the problem continues, our team would be glad to help.</p><button onClick={() => reset()} className="mt-8 inline-flex items-center rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground"><RefreshCw className="mr-2 h-4 w-4" />Try again</button></div></main>
}
