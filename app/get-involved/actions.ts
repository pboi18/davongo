'use server'

export async function submitVolunteerApplication(data: unknown) { await new Promise((resolve) => setTimeout(resolve, 500)); return { ok: true, reference: `VOL-${Date.now().toString().slice(-6)}` } }
export async function submitPartnerEnquiry(data: unknown) { await new Promise((resolve) => setTimeout(resolve, 500)); return { ok: true, reference: `PAR-${Date.now().toString().slice(-6)}` } }
export async function submitContactMessage(data: unknown) { await new Promise((resolve) => setTimeout(resolve, 500)); return { ok: true, reference: `MSG-${Date.now().toString().slice(-6)}` } }
