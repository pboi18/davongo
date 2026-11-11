import type { Metadata } from 'next'
import { EventsPage } from '@/components/events-page'

export const metadata: Metadata = { title: 'Events', description: 'Find upcoming DAVO gatherings, volunteer days, and community conversations.' }
export default function EventsRoute() { return <EventsPage /> }
