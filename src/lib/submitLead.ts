export type Intent = 'owner' | 'manufacturer' | 'operations' | 'homeowner'

export type LeadInput = {
  intent: Intent
  name: string
  email: string
  fields: Record<string, string>
  files: File[]
}

export type LeadResult = { ok: true } | { ok: false; message: string }

const FAILURE = 'The note did not send. Check your connection and try again, or email contact@exergyheat.com.'

/**
 * Single adapter for the contact form.
 *
 * TODO(tyler): Exergy is moving off HubSpot. Point VITE_LEAD_ENDPOINT at the
 * new intake URL. The request is multipart form data:
 *   intent, name, email, fields (JSON string), files (repeatable file parts).
 * When that host is not this site, add it to connect-src in vercel.json and
 * serve.json before relying on it in production.
 *
 * With no endpoint, dev logs a summary (never file bytes) and reports success.
 * A production build with no endpoint refuses, so a lead is not silently dropped.
 */
export async function submitLead(input: LeadInput): Promise<LeadResult> {
  const endpoint = import.meta.env.VITE_LEAD_ENDPOINT?.trim()
  const summary = {
    intent: input.intent,
    name: input.name,
    email: input.email,
    fields: input.fields,
    files: input.files.map((file) => ({
      name: file.name,
      size: file.size,
      type: file.type,
    })),
  }

  if (!endpoint) {
    if (import.meta.env.DEV) {
      console.info('[submitLead] stub success. Set VITE_LEAD_ENDPOINT to send this for real.', summary)
      return { ok: true }
    }
    return {
      ok: false,
      message: 'The form is not connected yet. Email contact@exergyheat.com and we will take it from there.',
    }
  }

  try {
    const body = new FormData()
    body.set('intent', input.intent)
    body.set('name', input.name)
    body.set('email', input.email)
    body.set('fields', JSON.stringify(input.fields))
    for (const file of input.files) {
      body.append('files', file, file.name)
    }
    const response = await fetch(endpoint, { method: 'POST', body })
    if (!response.ok) return { ok: false, message: FAILURE }
    return { ok: true }
  } catch {
    return { ok: false, message: FAILURE }
  }
}
