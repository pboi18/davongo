import type { Metadata } from 'next'
import { HomePage } from '@/components/home-page'

export const metadata: Metadata = { title: 'Building a Nigeria where everyone can thrive', description: 'Explore DAVO’s community-led programmes, impact, stories, and ways to make a difference.' }

export default function Page() {
  return <HomePage />
}
