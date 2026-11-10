'use client'

import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps'
import { MapPin } from 'lucide-react'
import { workingStates } from '@/lib/data/impact'

const geoUrl = 'https://raw.githubusercontent.com/deldersveld/topojson/master/countries/africa/nigeria/nigeria-states.json'
const markers = [{ name: 'Kaduna', coordinates: [7.44, 10.52] }, { name: 'Kano', coordinates: [8.52, 12.0] }, { name: 'Lagos', coordinates: [3.38, 6.52] }, { name: 'Oyo', coordinates: [3.93, 7.84] }, { name: 'FCT', coordinates: [7.49, 9.07] }, { name: 'Rivers', coordinates: [6.9, 4.85] }]

export function ImpactMap() {
  return <div className="relative rounded-[2rem] border border-border bg-[#EAF5FF] p-4 dark:bg-[#132A43]"><ComposableMap projection="geoMercator" projectionConfig={{ scale: 2800, center: [8, 9] }} className="h-auto w-full"><Geographies geography={geoUrl}>{({ geographies }) => geographies.map((geo) => <Geography key={geo.rsmKey} geography={geo} fill="hsl(var(--background))" stroke="#3AA0FF" strokeWidth={0.5} className="dark:fill-[#0B1220]" />)}</Geographies>{markers.map(({ name, coordinates }) => <Marker key={name} coordinates={coordinates as [number, number]}><circle r={6} fill="#2EA812" stroke="#fff" strokeWidth={2} /><title>{name} — DAVO works here</title></Marker>)}</ComposableMap><div className="absolute bottom-6 left-6 rounded-xl border border-border bg-background/90 px-4 py-3 text-sm backdrop-blur"><p className="font-semibold">Where we work</p><div className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-xs text-muted-foreground">{workingStates.map((state) => <span key={state}><MapPin className="mr-1 inline h-3 w-3 text-[#2EA812]" />{state}</span>)}</div></div></div>
}
