export type Program = {
  number: string
  title: string
  description: string
  color: string
}

export const programs: Program[] = [
  { number: '01', title: 'Education & Skills', description: 'Equipping young people with the knowledge, confidence, and practical skills to shape their futures.', color: 'bg-[#EAF5FF] dark:bg-[#132A43]' },
  { number: '02', title: 'Women & Livelihoods', description: 'Creating pathways to dignified work, entrepreneurship, and financial independence for women.', color: 'bg-[#F0F8E9] dark:bg-[#1D3425]' },
  { number: '03', title: 'Health & Wellbeing', description: 'Making essential health information and community-led support easier to access.', color: 'bg-[#FFF5E7] dark:bg-[#3A2A18]' },
  { number: '04', title: 'Climate Resilience', description: 'Helping communities prepare for a changing climate through local action and better resources.', color: 'bg-[#EAF7F4] dark:bg-[#163531]' },
  { number: '05', title: 'Youth Leadership', description: 'Backing young leaders with the tools and platforms to turn ideas into impact.', color: 'bg-[#F2EEFF] dark:bg-[#2D2546]' },
  { number: '06', title: 'Community Action', description: 'Supporting local solutions that bring neighbours together and make change last.', color: 'bg-[#FFF0F2] dark:bg-[#40252D]' },
]
