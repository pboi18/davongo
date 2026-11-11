import type { Metadata } from 'next'
import { GetInvolvedPage } from '@/components/get-involved-page'

export const metadata: Metadata = { title: 'Get involved', description: 'Volunteer, partner with DAVO, or explore career opportunities.' }
export default function GetInvolvedRoute() { return <GetInvolvedPage /> }
