import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Reports and resources', description: 'Read DAVO annual reports and audited financial statements.' }

export default function ReportsLayout({ children }: Readonly<{ children: React.ReactNode }>) { return children }
