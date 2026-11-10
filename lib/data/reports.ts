export type Report = { year: string; title: string; type: 'Annual report' | 'Audited financial statement'; pages: string; href: string }
export const reportYears = ['All years', '2024', '2023', '2022', '2021']
export const reports: Report[] = [
  { year: '2024', title: 'Annual Report 2024', type: 'Annual report', pages: '36 pages', href: '/reports/annual-report-2024.pdf' },
  { year: '2024', title: 'Audited Financial Statements 2024', type: 'Audited financial statement', pages: '18 pages', href: '/reports/financial-statements-2024.pdf' },
  { year: '2023', title: 'Annual Report 2023', type: 'Annual report', pages: '32 pages', href: '/reports/annual-report-2023.pdf' },
  { year: '2023', title: 'Audited Financial Statements 2023', type: 'Audited financial statement', pages: '17 pages', href: '/reports/financial-statements-2023.pdf' },
  { year: '2022', title: 'Annual Report 2022', type: 'Annual report', pages: '28 pages', href: '/reports/annual-report-2022.pdf' },
  { year: '2021', title: 'Annual Report 2021', type: 'Annual report', pages: '24 pages', href: '/reports/annual-report-2021.pdf' },
]
