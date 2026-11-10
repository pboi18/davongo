'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { ThemeToggle } from './theme-toggle'

const links = ['About', 'Programs', 'Impact', 'News', 'Get Involved', 'Reports']

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link href="/" aria-label="DAVO home" className="shrink-0">
          <Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/davo-logo-for-light-bg-lReMO9sDiwCdlcdJsoLQfE5wXTD22H.png" alt="DAVO" width={126} height={46} className="h-11 w-auto dark:hidden" priority />
          <Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/davo-logo-for-dark-bg-UNgliPn27GSoQQG8kg9eOMFf98wYw8.png" alt="DAVO" width={126} height={46} className="hidden h-11 w-auto dark:block" priority />
        </Link>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
          {links.map((link) => <Link key={link} href={`/${link.toLowerCase().replace(' ', '-')}`} className="text-sm font-medium text-muted-foreground transition hover:text-foreground">{link}</Link>)}
        </nav>
        <div className="hidden items-center gap-3 lg:flex"><ThemeToggle /><Link href="/get-involved" className="rounded-full border border-primary px-5 py-2.5 text-sm font-semibold text-primary hover:bg-primary/10">Volunteer</Link><Link href="/donate" className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90">Donate</Link></div>
        <div className="flex items-center gap-2 lg:hidden"><ThemeToggle /><button type="button" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border">{open ? <X /> : <Menu />}</button></div>
      </div>
      {open && <div className="border-t border-border bg-background px-5 py-5 lg:hidden"><nav className="flex flex-col gap-5" aria-label="Mobile navigation">{links.map((link) => <Link key={link} href={`/${link.toLowerCase().replace(' ', '-')}`} onClick={() => setOpen(false)} className="text-base font-medium">{link}</Link>)}<div className="flex gap-3 pt-2"><Link href="/get-involved" className="flex-1 rounded-full border border-primary px-4 py-3 text-center text-sm font-semibold text-primary">Volunteer</Link><Link href="/donate" className="flex-1 rounded-full bg-primary px-4 py-3 text-center text-sm font-semibold text-primary-foreground">Donate</Link></div></nav></div>}
    </header>
  )
}
