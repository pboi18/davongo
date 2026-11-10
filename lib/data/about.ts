export type Person = { name: string; role: string; imageIndex: number }
export type TimelineItem = { year: string; title: string; description: string }

export const aboutData = {
  story: { eyebrow: 'Our story', title: 'Change is stronger when it starts close to home.', copy: 'DAVO began with a simple belief: communities understand their own challenges best. Since 2012, we have worked alongside local leaders, young people, and families across Nigeria to turn that insight into practical, lasting progress.', imageIndex: 0 },
  mission: 'To partner with communities to expand opportunity, strengthen local leadership, and build a more equitable Nigeria.',
  vision: 'A Nigeria where every person has the freedom, resources, and support to thrive.',
  values: [
    { title: 'Listen first', description: 'We start with curiosity, respect, and the knowledge already present in a community.' },
    { title: 'Build together', description: 'We share power, credit, and responsibility with the people closest to the work.' },
    { title: 'Stay accountable', description: 'We measure what matters, learn openly, and do what we say we will do.' },
    { title: 'Keep going', description: 'We choose patient, practical progress over quick fixes or easy answers.' },
  ],
  timeline: [
    { year: '2012', title: 'DAVO is founded', description: 'A small team begins partnering with youth leaders in Kaduna.' },
    { year: '2015', title: 'Growing local leadership', description: 'Our first community action network reaches five new communities.' },
    { year: '2019', title: 'A wider lens', description: 'Programs expand to include livelihoods, health, and climate resilience.' },
    { year: '2022', title: '10 years of progress', description: 'We mark a decade of learning and collective action with our partners.' },
    { year: '2024', title: 'The work continues', description: 'A growing network of volunteers and local leaders carries the work forward.' },
  ] as TimelineItem[],
  team: [
    { name: 'Amaka Okafor', role: 'Executive Director', imageIndex: 0 },
    { name: 'Tunde Bello', role: 'Director of Programs', imageIndex: 1 },
    { name: 'Zainab Ibrahim', role: 'Community Partnerships Lead', imageIndex: 0 },
    { name: 'Chinedu Eze', role: 'Learning & Impact Lead', imageIndex: 1 },
  ] as Person[],
  board: ['Dr. Ngozi Okeke', 'Musa Abdullahi', 'Lola Adebayo', 'Chukwuemeka Nwosu'],
  partners: ['impactlab', 'BRIDGE', 'greenroots', 'Common Ground', 'Open Future', 'NOVA'],
}
