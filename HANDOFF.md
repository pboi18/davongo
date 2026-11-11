# DAVO frontend backend handoff

This document inventories the frontend stubs and content fixtures present in this repository. Replace demo behavior with validated, persisted backend behavior before production use. There is no payment-provider integration, database client, CMS SDK, or `/api/chat` route in the current frontend.

## Server actions and routes to replace

Actions are colocated with their consuming route rather than in `/app/actions`.

### `app/donate/actions.ts`

- `createDonation(formData: FormData): Promise<DonationResult>`
- Current inputs read from `FormData`: `amount` (numeric, minimum 100 naira), `name` (required), `email` (required and must contain `@`). The form also sends `phone` (optional), `program` (optional), `anonymous` (checkbox), and `frequency` (`once` or `monthly`).
- Current response: `{ ok: true, reference: string } | { ok: false, error: string }`.
- Replace with secure server-side validation, persistence, idempotency, a real payment workflow if later approved, and a persisted donation receipt/reference. This project intentionally has no payment-provider integration.

### `app/get-involved/actions.ts`

- `submitVolunteerApplication(data: unknown)` — expected input from the volunteer form: `{ name: string, email: string, phone: string, opportunity: string }`. Zod schema: `volunteerSchema` in `components/get-involved-page.tsx`; name min 2, valid email, phone min 7, opportunity min 1. Stub response: `{ ok: true, reference: 'VOL-…' }`.
- `submitPartnerEnquiry(data: unknown)` — expected input: `{ organisation: string, name: string, email: string, message: string }`. Zod schema: `partnerSchema` in `components/get-involved-page.tsx`; organisation/name min 2, valid email, message min 20. Stub response: `{ ok: true, reference: 'PAR-…' }`.
- `submitContactMessage(data: unknown)` — expected input: `{ name: string, email: string, subject: string, message: string }`. Zod schema: `schema` in `components/contact-page.tsx`; name min 2, valid email, subject min 3, message min 10. Stub response: `{ ok: true, reference: 'MSG-…' }`.
- These actions currently accept `unknown` and do not validate; enforce the corresponding schemas again on the server, then persist or deliver messages and return a typed success/error result.

### Chat

- `/api/chat` is **not implemented or referenced by the current app**. No chat UI or chat request schema exists. If the product adds chat, define its request/response contract, model provider, access controls, rate limits, retention, and required credentials before implementation.

## Forms and schemas

- Donate: `components/donation-form.tsx`; native server-action form with `FormData`, no Zod schema today. Inputs are listed above. Add a shared Zod schema and server-side validation when connecting backend storage/payments.
- Volunteer application: `components/get-involved-page.tsx`, `volunteerSchema` as listed above.
- Partner enquiry: same component, `partnerSchema` as listed above.
- Contact form: `components/contact-page.tsx`, `schema` as listed above.
- Event RSVP: `components/events-page.tsx`; current in-memory confirmation only; no server action or Zod schema. Capture event identifier and attendee details once the real RSVP form contract is defined.
- Home newsletter: `components/home-page.tsx`; current UI has no backend action/schema. Define consent, email validation, storage/provider, and unsubscribe handling before wiring it up.
- Careers role enquiry links to `mailto:` and is not a form. Bank transfer tab only copies the displayed account-number placeholder.

## `lib/data` content fixtures and suggested CMS content types

These modules are static TypeScript fixtures; the suggested CMS names are mappings, not a CMS integration already configured.

- `lib/data/about.ts` → `AboutPage`, `Milestone`, `Partner`.
- `lib/data/contact.ts` → `ContactSettings` (office address, phone, email, WhatsApp URL). Current values are placeholders.
- `lib/data/donation.ts` → `DonationSettings`, `DonationProgram`, `DonationFAQ` (amounts, allocation breakdown, FAQs).
- `lib/data/events.ts` → `Event` (dates, venue, category, description, past/upcoming status).
- `lib/data/get-involved.ts` → `VolunteerOpportunity`, `CareerOpening`, plus filter vocabularies.
- `lib/data/images.ts` → `MediaAsset` / `SiteBranding` (logo, image URLs, alt text, dimensions).
- `lib/data/impact.ts` → `ImpactMetric`, `BeneficiaryStory`, `ImpactMilestone`, `WorkingRegion`.
- `lib/data/news.ts` → `NewsArticle`, `NewsCategory`, `Author` (slug, body, author, date, category, media).
- `lib/data/programs.ts` → `Program` (slug, category, overview, objectives, activities, metrics, media).
- `lib/data/reports.ts` → `ReportDocument` (year, report type, page count, downloadable asset URL). The current PDF paths under `/reports/` must be populated with actual files or replaced with CMS asset URLs.

## Environment variables

- `NEXT_PUBLIC_SITE_URL` — public canonical origin used by metadata, `robots.txt`, and `sitemap.xml`. It currently falls back to the v0 preview hostname; set this to the production origin at deployment.
- No database, email, payment, CMS, or chat credentials are referenced by the current application code. Add only the variables required by the selected backend integrations; keep all secrets server-only.
- Existing content placeholders include `[[ADDRESS]]`, `[[PHONE]]`, `[[EMAIL]]`, `[[BANK NAME]]`, `[[ACCOUNT NAME]]`, and `[[ACCOUNT NUMBER]]`; these are data values to replace, not environment-variable names.
