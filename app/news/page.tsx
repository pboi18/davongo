import type { Metadata } from 'next'
import { NewsIndex } from '@/components/news-index'

export const metadata: Metadata = { title: 'News and stories', description: 'Field notes, community stories, and updates from DAVO’s work across Nigeria.' }
export default function NewsPage() { return <NewsIndex /> }
