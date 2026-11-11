import type { Metadata } from 'next'
import { ProgramsIndex } from '@/components/programs-index'

export const metadata: Metadata = { title: 'Our programmes', description: 'Discover DAVO programmes supporting education, livelihoods, health, climate resilience, youth leadership, and community action.' }

export default function ProgramsPage() {
  return <ProgramsIndex />
}
