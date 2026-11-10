'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Heart, HandHeart, Handshake, MapPin, Users, Sprout } from 'lucide-react'
import { useEffect, useState } from 'react'
import { images } from '@/lib/data/images'
import { programs } from '@/lib/data/programs'

const stats = [
  // TODO: replace with real data.
  { label: 'People reached', value: 12000, suffix: '+', icon: Users },
  // TODO: replace with real data.
  { label: 'Communities served', value: 42, suffix: '', icon: MapPin },
  // TODO: replace with real data.
  { label: 'Active volunteers', value: 680, suffix: '+', icon: Heart },
  // TODO: replace with real data.
  { label: 'Years of service', value: 12, suffix: '', icon: Sprout },
]

const news = [
  { category: 'Field notes', date: 'June 18, 2024', title: 'What community-led change looks like in practice', copy: 'Three lessons from our partners building stronger local systems in Kaduna.', color: 'bg-[#EAF5FF] dark:bg-[#132A43]' },
  { category: 'People', date: 'May 30, 2024', title: 'Meet the volunteers turning weekends into momentum', copy: 'The DAVO volunteers making room for service, one Saturday at a time.', color: 'bg-[#F0F8E9] dark:bg-[#1D3425]' },
  { category: 'Updates', date: 'May 07, 2024', title: 'A new chapter for youth leadership', copy: 'How our latest cohort is taking bold ideas from the classroom into communities.', color: 'bg-[#FFF5E7] dark:bg-[#3A2A18]' },
]

function AnimatedStat({ value, suffix, label, icon: Icon }: typeof stats[number]) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    let frame = 0
    const start = performance.now()
    const duration = 1300
    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      setCount(Math.floor(progress * value))
      if (progress < 1) frame = requestAnimationFrame(animate)
    }
    frame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frame)
  }, [value])
  return <div className="flex items-start gap-4"><div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary"><Icon className="h-5 w-5" aria-hidden="true" /></div><div><p className="font-serif text-3xl font-semibold tabular-nums">{count.toLocaleString()}{suffix}</p><p className="mt-1 text-sm text-muted-foreground">{label}</p></div></div>
}

export function HomePage() {
  return <main>
    <section aria-labelledby="hero-title" className="relative overflow-hidden bg-[#0B1220] text-white"><div className="mx-auto grid min-h-[650px] max-w-7xl items-end gap-10 px-5 pb-16 pt-20 lg:grid-cols-[1fr_0.85fr] lg:items-center lg:px-8 lg:pb-20"><div className="relative z-10 max-w-2xl"><p className="mb-6 text-sm font-semibold uppercase tracking-[0.22em] text-[#4CC22F]">People. Purpose. Progress.</p><h1 id="hero-title" className="font-serif text-5xl leading-[1.02] tracking-tight sm:text-7xl">Building a Nigeria where everyone can thrive.</h1><p className="mt-7 max-w-lg text-lg leading-8 text-white/70">Together with communities, we turn local ideas into lasting opportunity.</p><div className="mt-9 flex flex-wrap gap-3"><Link href="/donate" className="rounded-full bg-[#3AA0FF] px-6 py-3.5 text-sm font-semibold text-white hover:bg-[#3AA0FF]/90">Donate</Link><Link href="/get-involved" className="rounded-full border border-white/30 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/10">Volunteer</Link></div></div><div className="relative h-72 overflow-hidden rounded-[2rem] lg:h-[440px]"><Image src={images.hero.src} alt={images.hero.alt} fill className="object-cover" priority sizes="(max-width: 1024px) 100vw, 45vw" /><div className="absolute inset-0 bg-[#0B1220]/20" /></div></div></section>

    <section aria-label="DAVO impact" className="border-b border-border bg-background px-5 py-10 lg:px-8"><div className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-4">{stats.map((stat) => <AnimatedStat key={stat.label} {...stat} />)}</div></section>

    <section aria-labelledby="programs-title" className="bg-muted/40 px-5 py-20 lg:px-8 lg:py-28"><div className="mx-auto max-w-7xl"><div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2EA812]">Where we focus</p><h2 id="programs-title" className="mt-3 font-serif text-4xl tracking-tight sm:text-5xl">Small steps. Shared power.</h2></div><Link href="/programs" className="font-semibold text-primary">Explore all programs <ArrowRight className="ml-1 inline h-4 w-4" /></Link></div><div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{programs.map((program) => <article key={program.number} className={`group min-h-[250px] rounded-2xl p-7 transition hover:-translate-y-1 hover:shadow-lg ${program.color}`}><span className="text-sm font-semibold text-primary">{program.number}</span><h3 className="mt-12 font-serif text-2xl">{program.title}</h3><p className="mt-3 max-w-sm text-sm leading-6 text-muted-foreground">{program.description}</p><ArrowRight className="mt-6 h-5 w-5 text-primary transition group-hover:translate-x-1" aria-hidden="true" /></article>)}</div></div></section>

    <section aria-labelledby="story-title" className="bg-background px-5 py-20 lg:px-8 lg:py-28"><div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center"><div className="relative min-h-[420px] overflow-hidden rounded-[2rem]"><Image src={images.featuredStory.src} alt={images.featuredStory.alt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 52vw" /></div><div className="lg:pl-8"><p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Featured story</p><h2 id="story-title" className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">“The best solutions are already living in our communities.”</h2><p className="mt-6 leading-7 text-muted-foreground">From a reading club in Kano to a women-led cooperative in Lagos, lasting progress starts with people who know what their neighbourhoods need most.</p><p className="mt-6 text-sm font-semibold">— Amina Yusuf, DAVO community partner</p><Link href="/news" className="mt-8 inline-flex items-center font-semibold text-primary">Read the story <ArrowRight className="ml-2 h-4 w-4" /></Link></div></div></section>

    <section aria-labelledby="help-title" className="bg-[#0B1220] px-5 py-20 text-white lg:px-8 lg:py-24"><div className="mx-auto max-w-7xl"><p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#4CC22F]">Make it personal</p><h2 id="help-title" className="mt-3 font-serif text-4xl sm:text-5xl">How you can help</h2><div className="mt-12 grid gap-4 md:grid-cols-3">{[[Heart, 'Donate', 'Your gift helps local partners keep vital work moving.', '/donate'], [HandHeart, 'Volunteer', 'Bring your time, skills, and curiosity to the work.', '/get-involved'], [Handshake, 'Partner', 'Build a stronger future with us, side by side.', '/contact']].map(([Icon, title, copy, href]) => <Link key={title as string} href={href as string} className="group rounded-2xl border border-white/15 bg-white/[0.04] p-7 transition hover:border-[#3AA0FF] hover:bg-white/[0.08]"><div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#3AA0FF]/15 text-[#3AA0FF]"><Icon className="h-5 w-5" aria-hidden="true" /></div><h3 className="mt-10 font-serif text-2xl">{title as string}</h3><p className="mt-3 leading-7 text-white/60">{copy as string}</p><ArrowRight className="mt-7 h-5 w-5 text-[#4CC22F] transition group-hover:translate-x-1" /></Link>)}</div></div></section>

    <section aria-labelledby="partners-title" className="border-b border-border bg-background px-5 py-12 lg:px-8"><div className="mx-auto max-w-7xl"><p id="partners-title" className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">In good company with partners who believe in possibility</p><div className="mt-8 grid grid-cols-2 items-center gap-6 text-center font-serif text-xl text-muted-foreground/70 sm:grid-cols-4 lg:grid-cols-6"><span>impact<span className="text-primary">lab</span></span><span>BRIDGE</span><span>green<span className="text-[#2EA812]">roots</span></span><span>Common Ground</span><span className="hidden lg:block">Open Future</span><span className="hidden lg:block">NOVA</span></div></div></section>

    <section aria-labelledby="news-title" className="bg-muted/40 px-5 py-20 lg:px-8 lg:py-28"><div className="mx-auto max-w-7xl"><div className="flex items-end justify-between gap-4"><div><p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">From DAVO</p><h2 id="news-title" className="mt-3 font-serif text-4xl tracking-tight sm:text-5xl">Latest news</h2></div><Link href="/news" className="hidden font-semibold text-primary sm:block">See all news <ArrowRight className="ml-1 inline h-4 w-4" /></Link></div><div className="mt-12 grid gap-5 md:grid-cols-3">{news.map((item) => <article key={item.title} className="group overflow-hidden rounded-2xl border border-border bg-background"><div className={`h-36 ${item.color}`}><div className="flex h-full items-end p-6"><span className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">{item.category}</span></div></div><div className="p-6"><p className="text-xs text-muted-foreground">{item.date}</p><h3 className="mt-4 font-serif text-2xl leading-tight group-hover:text-primary">{item.title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{item.copy}</p><Link href="/news" className="mt-6 inline-flex items-center text-sm font-semibold text-primary">Read more <ArrowRight className="ml-2 h-4 w-4" /></Link></div></article>)}</div></div></section>

    <section aria-labelledby="newsletter-title" className="bg-[#EAF5FF] px-5 py-16 dark:bg-[#132A43] lg:px-8 lg:py-20"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 lg:flex-row lg:items-center"><div><p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Stay close to the work</p><h2 id="newsletter-title" className="mt-3 max-w-xl font-serif text-4xl leading-tight sm:text-5xl">Good news for people who care.</h2><p className="mt-4 max-w-lg text-muted-foreground">Get occasional stories, updates, and ways to take action in your inbox.</p></div><form className="flex w-full max-w-md flex-col gap-3 sm:flex-row"><label htmlFor="home-email" className="sr-only">Email address</label><input id="home-email" type="email" placeholder="Your email address" className="min-w-0 flex-1 rounded-full border border-border bg-background px-5 py-3.5 text-sm outline-none focus:ring-2 focus:ring-primary" /><button type="submit" className="rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90">Subscribe</button></form></div></section>
  </main>
}
