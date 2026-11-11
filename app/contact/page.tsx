import type { Metadata } from 'next'
import { ContactPage } from '@/components/contact-page'

export const metadata: Metadata = { title: 'Contact DAVO', description: 'Get in touch with DAVO about our work, partnerships, volunteering, and community programmes.' }
export default function ContactRoute() { return <ContactPage /> }
