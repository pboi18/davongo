import { ImageResponse } from 'next/og'

export const alt = 'DAVO — building a Nigeria where everyone can thrive'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpenGraphImage() {
  return new ImageResponse(<div style={{ display: 'flex', width: '100%', height: '100%', padding: 72, background: '#0B1220', color: '#fff', flexDirection: 'column', justifyContent: 'space-between', fontFamily: 'sans-serif' }}><div style={{ color: '#4CC22F', fontSize: 26, fontWeight: 700, letterSpacing: 5 }}>DAVO</div><div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}><div style={{ display: 'flex', flexDirection: 'column', fontSize: 68, lineHeight: 1.08, fontWeight: 700 }}>Building a Nigeria<span>where everyone can thrive.</span></div><div style={{ color: '#C7D1DF', fontSize: 27 }}>Opportunity, dignity, and collective action.</div></div><div style={{ display: 'flex', width: 120, height: 7, borderRadius: 7, background: '#4CC22F' }} /></div>, size)
}
