'use server'

export type DonationResult = { ok: true; reference: string } | { ok: false; error: string }

export async function createDonation(formData: FormData): Promise<DonationResult> {
  const amount = Number(formData.get('amount'))
  const name = String(formData.get('name') ?? '').trim()
  const email = String(formData.get('email') ?? '').trim()
  if (!Number.isFinite(amount) || amount < 100) return { ok: false, error: 'Please enter a donation of at least ₦100.' }
  if (!name || !email || !email.includes('@')) return { ok: false, error: 'Please check your name and email address.' }
  await new Promise((resolve) => setTimeout(resolve, 700))
  return { ok: true, reference: `DAVO-${Date.now().toString(36).toUpperCase()}` }
}
