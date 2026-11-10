export type EventItem = { id: string; day: string; month: string; date: string; title: string; location: string; type: string; description: string; past?: boolean }

export const events: EventItem[] = [
  { id: 'community-action-day-kaduna', day: '14', month: 'SEP', date: 'Saturday, September 14, 2024', title: 'Community Action Day', location: 'Barnawa, Kaduna', type: 'Volunteer day', description: 'Join local volunteers for a day of community clean-up, learning, and connection.' },
  { id: 'youth-leadership-forum', day: '28', month: 'SEP', date: 'Saturday, September 28, 2024', title: 'Youth Leadership Forum', location: 'Lagos Island, Lagos', type: 'Forum', description: 'A day of honest conversations and practical workshops for emerging community leaders.' },
  { id: 'partner-roundtable', day: '11', month: 'OCT', date: 'Friday, October 11, 2024', title: 'Partner Roundtable', location: 'Virtual event', type: 'Conversation', description: 'A shared space for partners to exchange ideas on building resilient local systems.' },
  { id: 'volunteer-open-house', day: '22', month: 'JUN', date: 'Saturday, June 22, 2024', title: 'Volunteer Open House', location: 'Yaba, Lagos', type: 'Past event', description: 'An afternoon of introductions, stories, and ways to get involved.', past: true },
  { id: 'community-health-workshop', day: '18', month: 'MAY', date: 'Saturday, May 18, 2024', title: 'Community Health Workshop', location: 'Kano Municipal, Kano', type: 'Past event', description: 'Local health advocates shared practical tools for healthier communities.', past: true },
]
