export type VolunteerOpportunity = { title: string; location: string; skill: string; mode: 'Remote' | 'On-site'; description: string }
export const volunteerOpportunities: VolunteerOpportunity[] = [
  { title: 'Community Storytelling Volunteer', location: 'Lagos', skill: 'Communications', mode: 'On-site', description: 'Help capture the voices and everyday wins of local community partners.' },
  { title: 'Learning Circle Mentor', location: 'Kaduna', skill: 'Education', mode: 'On-site', description: 'Support young people as they build confidence, skills, and a love of learning.' },
  { title: 'Research & Insights Volunteer', location: 'Remote', skill: 'Research', mode: 'Remote', description: 'Turn community feedback into useful insight for better programmes.' },
  { title: 'Digital Community Host', location: 'Remote', skill: 'Community', mode: 'Remote', description: 'Welcome and connect our growing network of people who care.' },
  { title: 'Events Volunteer', location: 'Kano', skill: 'Events', mode: 'On-site', description: 'Make gatherings feel warm, organised, and ready for possibility.' },
]
export const volunteerLocations = ['All locations', 'Lagos', 'Kaduna', 'Kano', 'Remote']
export const volunteerSkills = ['All skills', 'Communications', 'Education', 'Research', 'Community', 'Events']
export const careers = [
  { title: 'Programme Manager, Youth Leadership', location: 'Lagos · Hybrid', type: 'Full-time' },
  { title: 'Community Partnerships Lead', location: 'Kaduna · On-site', type: 'Full-time' },
  { title: 'Finance & Operations Associate', location: 'Lagos · Hybrid', type: 'Full-time' },
]
