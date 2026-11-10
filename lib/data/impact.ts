export type ImpactStory = { name: string; location: string; quote: string; story: string; image: number }
export type ImpactYear = { year: string; reach: string; milestone: string }

export const impactStats = [
  { value: '12,000+', label: 'people reached' },
  { value: '42', label: 'communities served' },
  { value: '680+', label: 'active volunteers' },
  { value: '12', label: 'years of service' },
]

export const workingStates = ['Kaduna', 'Kano', 'Lagos', 'Oyo', 'FCT', 'Rivers']

export const impactStories: ImpactStory[] = [
  { name: 'Amina Yusuf', location: 'Kaduna State', quote: 'DAVO did not come with answers. They came ready to listen, and helped us build our own.', story: 'Amina now leads a women-led cooperative supporting 36 families in her community.', image: 0 },
  { name: 'Chinedu Okafor', location: 'Lagos State', quote: 'When young people are trusted with real responsibility, we do more than participate. We lead.', story: 'Chinedu mentors teenagers through a DAVO youth leadership circle in Lagos.', image: 1 },
]

export const impactTimeline: ImpactYear[] = [
  { year: '2012', reach: '3 communities', milestone: 'DAVO begins with a community learning project in Kaduna.' },
  { year: '2015', reach: '1,500 people', milestone: 'Women’s livelihoods programme launches across three local government areas.' },
  { year: '2018', reach: '12,000 learners', milestone: 'Youth leadership and skills work expands into Kano and Lagos.' },
  { year: '2021', reach: '28 communities', milestone: 'Community health partnerships help neighbours respond to the pandemic.' },
  { year: '2024', reach: '42 communities', milestone: 'A growing network of local leaders takes change further, together.' },
]
