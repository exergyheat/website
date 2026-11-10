import { CaretDown } from '@phosphor-icons/react'
import { useId, useState, type FormEvent, type ReactNode } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { CtaPair } from '../components/CtaPair'
import { Page, Section } from '../components/Page'
import { Seo } from '../components/Seo'
import { BOOKING_URL } from '../lib/site'
import { submitLead, type Intent } from '../lib/submitLead'

const title = 'Contact | Exergy'
const description = 'Request a free feasibility check, talk partnership, ask for a workflow audit, or apply for the homeowner pilot.'

const QUERY_TO_INTENT: Record<string, Intent> = {
  feasibility: 'owner',
  partner: 'manufacturer',
  operations: 'operations',
  pilot: 'homeowner',
}

const INTENT_TO_QUERY: Record<Intent, string> = {
  owner: 'feasibility',
  manufacturer: 'partner',
  operations: 'operations',
  homeowner: 'pilot',
}

const INTENTS: { id: Intent; label: string; hint: string }[] = [
  { id: 'owner', label: 'Building owner', hint: 'A feasibility check for a commercial building.' },
  { id: 'manufacturer', label: 'Manufacturer', hint: 'Miners, heaters, boilers, or water heaters.' },
  { id: 'operations', label: 'Operations', hint: 'A workflow audit for your company.' },
  { id: 'homeowner', label: 'Homeowner pilot', hint: 'Application only, and small on purpose.' },
]

const BUILDING_TYPES = ['Office', 'Warehouse', 'Multifamily', 'Retail', 'Industrial', 'Mixed use', 'Other']
const HEATING = [
  { value: 'hydronic', label: 'Hydronic' },
  { value: 'forced_air', label: 'Forced air' },
  { value: 'unknown', label: 'Unknown' },
]
const MAKES = ['Miners', 'Heaters', 'Boilers', 'Water heaters', 'Other']
const BUSINESSES = ['HVAC installer', 'Solar installer', 'Property manager', 'Mining operator', 'Other']

const MAX_FILE = 10 * 1024 * 1024
const MAX_FILES = 8
const MAX_TOTAL = 32 * 1024 * 1024
const TYPES = new Set(['application/pdf', 'image/png', 'image/jpeg', 'image/webp', 'image/gif'])
const EXTS = ['.pdf', '.png', '.jpg', '.jpeg', '.webp', '.gif']

function fileOk(file: File) {
  const ext = file.name.slice(file.name.lastIndexOf('.')).toLowerCase()
  return TYPES.has(file.type) || EXTS.includes(ext)
}

function formatSize(bytes: number) {
  if (bytes < 1024 * 1024) return `${Math.max(1, Math.round(bytes / 1024))} KB`
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}

export default function Contact() {
  const formId = useId()
  const [params, setParams] = useSearchParams()
  const intent = QUERY_TO_INTENT[params.get('intent') ?? ''] ?? ''
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [fields, setFields] = useState<Record<string, string>>({})
  const [makes, setMakes] = useState<string[]>([])
  const [files, setFiles] = useState<File[]>([])
  const [fileNotes, setFileNotes] = useState<string[]>([])
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'failed'>('idle')
  const [formError, setFormError] = useState('')
  const [sentEmail, setSentEmail] = useState('')

  const setIntent = (next: Intent) => {
    setParams({ intent: INTENT_TO_QUERY[next] }, { replace: true })
    setErrors({})
    setFormError('')
  }

  const setField = (key: string, value: string) => {
    setFields((current) => ({ ...current, [key]: value }))
  }

  const addFiles = (list: FileList | null) => {
    if (!list) return
    const notes: string[] = []
    const next = [...files]
    for (const file of [...list]) {
      if (!fileOk(file)) {
        notes.push(`${file.name} is not a PDF or an image. Use PDF, PNG, JPG, WEBP, or GIF.`)
        continue
      }
      if (file.size > MAX_FILE) {
        notes.push(`${file.name} is over 10 MB. Choose a smaller file.`)
        continue
      }
      if (next.length >= MAX_FILES) {
        notes.push('You can add up to 8 files.')
        break
      }
      const total = next.reduce((sum, item) => sum + item.size, 0) + file.size
      if (total > MAX_TOTAL) {
        notes.push('Those files together are over 32 MB. Remove one and try again.')
        break
      }
      next.push(file)
    }
    setFiles(next)
    setFileNotes(notes)
  }

  const validate = () => {
    const next: Record<string, string> = {}
    if (!intent) next.intent = 'Choose what you are here for.'
    if (!name.trim()) next.name = 'Enter your name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) next.email = 'Enter a valid email address.'
    if (intent === 'owner') {
      if (!fields.buildingType) next.buildingType = 'Choose a building type.'
      if (!fields.location?.trim()) next.location = 'Enter the city and state.'
      if (!fields.size?.trim()) next.size = 'Enter the size, or a short description.'
      if (!fields.heating) next.heating = 'Choose a heating system.'
      if (!fields.solar) next.solar = 'Say whether the building has solar.'
    }
    if (intent === 'manufacturer') {
      if (!fields.company?.trim()) next.company = 'Enter the company name.'
      if (makes.length === 0) next.makes = 'Choose what you make.'
      if (!fields.note?.trim()) next.note = 'Tell us what you want from a partnership.'
    }
    if (intent === 'operations') {
      if (!fields.business) next.business = 'Choose the kind of business.'
      if (!fields.workflow?.trim()) next.workflow = 'Describe the workflow you want looked at.'
    }
    if (intent === 'homeowner') {
      if (!fields.location?.trim()) next.location = 'Enter the city and state.'
      if (!fields.note?.trim()) next.note = 'Tell us a little about the home.'
    }
    return next
  }

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault()
    const next = validate()
    setErrors(next)
    setFormError('')
    const first = Object.keys(next)[0]
    if (first) {
      document.getElementById(`${formId}-${first}`)?.focus()
      return
    }
    if (!intent) return
    setStatus('sending')
    const payloadFields = { ...fields }
    if (intent === 'manufacturer') payloadFields.makes = makes.join(', ')
    const result = await submitLead({
      intent,
      name: name.trim(),
      email: email.trim(),
      fields: payloadFields,
      files: intent === 'owner' ? files : [],
    })
    if (result.ok) {
      setSentEmail(email.trim())
      setStatus('sent')
    } else {
      setStatus('failed')
      setFormError(result.message)
    }
  }

  return (
    <Page>
      <Seo title={title} description={description} path="/contact" />
      <Section>
        <div className="stack-24 measure">
          <h1 className="heading-3">What are you here for?</h1>
          <p className="title-1">A feasibility check, a partnership, a workflow audit, or the homeowner pilot.</p>
          <CtaPair />
        </div>
      </Section>

      <Section>
        {status === 'sent' ? (
          <div className="stack-16 measure" role="status">
            <h2 className="heading-4">We have your note.</h2>
            <p className="body-3 muted">We will reply at {sentEmail}.</p>
            <a className="btn btn-copper button-md" href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
              Book a 15 minute call
            </a>
          </div>
        ) : (
          <form className="stack-32 measure" onSubmit={onSubmit} noValidate aria-busy={status === 'sending'}>
            <fieldset>
              <legend className="sr-only">What are you here for?</legend>
              {INTENTS.map((item, index) => (
                <label key={item.id} className="intent">
                  <input
                    id={index === 0 ? `${formId}-intent` : undefined}
                    className="sr-only"
                    type="radio"
                    name="intent"
                    value={item.id}
                    checked={intent === item.id}
                    onChange={() => setIntent(item.id)}
                  />
                  <span className="intent-mark" aria-hidden="true" />
                  <span className="stack-8">
                    <span className="title-2">{item.label}</span>
                    <span className="body-6 muted">{item.hint}</span>
                  </span>
                </label>
              ))}
              {errors.intent ? (
                <p className="caption-2 error-text" role="alert">
                  {errors.intent}
                </p>
              ) : null}
            </fieldset>

            <Field label="Name" error={errors.name} id={`${formId}-name`}>
              <input
                id={`${formId}-name`}
                className="field"
                name="name"
                autoComplete="name"
                value={name}
                aria-invalid={Boolean(errors.name)}
                onChange={(event) => setName(event.target.value)}
              />
            </Field>
            <Field label="Email" error={errors.email} id={`${formId}-email`}>
              <input
                id={`${formId}-email`}
                className="field"
                name="email"
                type="email"
                autoComplete="email"
                inputMode="email"
                value={email}
                aria-invalid={Boolean(errors.email)}
                onChange={(event) => setEmail(event.target.value)}
              />
            </Field>

            {intent === 'owner' ? (
              <>
                <Field label="Building type" error={errors.buildingType} id={`${formId}-buildingType`}>
                  <span className="select-wrap">
                    <select
                      id={`${formId}-buildingType`}
                      className="field"
                      value={fields.buildingType ?? ''}
                      aria-invalid={Boolean(errors.buildingType)}
                      onChange={(event) => setField('buildingType', event.target.value)}
                    >
                      <option value="">Select a type</option>
                      {BUILDING_TYPES.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                    <CaretDown size={16} aria-hidden="true" />
                  </span>
                </Field>
                <Field label="Location" error={errors.location} id={`${formId}-location`} hint="City and state.">
                  <input
                    id={`${formId}-location`}
                    className="field"
                    value={fields.location ?? ''}
                    aria-invalid={Boolean(errors.location)}
                    onChange={(event) => setField('location', event.target.value)}
                  />
                </Field>
                <Field label="Size" error={errors.size} id={`${formId}-size`} hint="Floor area, or a short description.">
                  <input
                    id={`${formId}-size`}
                    className="field"
                    value={fields.size ?? ''}
                    aria-invalid={Boolean(errors.size)}
                    onChange={(event) => setField('size', event.target.value)}
                  />
                </Field>
                <fieldset>
                  <legend className="title-4">Heating system</legend>
                  {HEATING.map((item, index) => (
                    <label key={item.value} className="choice">
                      <input
                        id={index === 0 ? `${formId}-heating` : undefined}
                        type="radio"
                        name="heating"
                        value={item.value}
                        checked={fields.heating === item.value}
                        onChange={() => setField('heating', item.value)}
                      />
                      <span className="body-3">{item.label}</span>
                    </label>
                  ))}
                  {errors.heating ? (
                    <p className="caption-2 error-text" role="alert">
                      {errors.heating}
                    </p>
                  ) : null}
                </fieldset>
                <fieldset>
                  <legend className="title-4">Does the building have solar?</legend>
                  {['yes', 'no'].map((value, index) => (
                    <label key={value} className="choice">
                      <input
                        id={index === 0 ? `${formId}-solar` : undefined}
                        type="radio"
                        name="solar"
                        value={value}
                        checked={fields.solar === value}
                        onChange={() => setField('solar', value)}
                      />
                      <span className="body-3">{value === 'yes' ? 'Yes' : 'No'}</span>
                    </label>
                  ))}
                  {errors.solar ? (
                    <p className="caption-2 error-text" role="alert">
                      {errors.solar}
                    </p>
                  ) : null}
                </fieldset>
                <div className="stack-12">
                  <p className="title-4">Utility bills</p>
                  <p className="caption-2 muted">Optional. PDF or images. Up to 8 files, 10 MB each.</p>
                  <label className="btn btn-quiet button-sm file-btn">
                    Add utility bills
                    <input
                      className="sr-only"
                      type="file"
                      multiple
                      accept="application/pdf,image/png,image/jpeg,image/webp,image/gif,.pdf,.png,.jpg,.jpeg,.webp,.gif"
                      onChange={(event) => {
                        addFiles(event.target.files)
                        event.target.value = ''
                      }}
                    />
                  </label>
                  {files.length === 0 ? <p className="caption-2 muted">No bills added. This is optional.</p> : null}
                  {files.map((file) => (
                    <div className="file-row" key={`${file.name}-${file.size}`}>
                      <p className="body-6">
                        {file.name} <span className="mono caption-5 muted">{formatSize(file.size)}</span>
                      </p>
                      <button
                        type="button"
                        className="btn btn-quiet button-xsm"
                        aria-label={`Remove ${file.name}`}
                        onClick={() => setFiles((current) => current.filter((item) => item !== file))}
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                  {fileNotes.map((note) => (
                    <p key={note} className="caption-2 error-text" role="alert">
                      {note}
                    </p>
                  ))}
                  <p className="caption-5 muted">
                    Bills stay with your project file. See the <Link className="inline-link" to="/privacy-policy">privacy policy</Link>.
                  </p>
                </div>
                <Field label="Anything we should know" id={`${formId}-note`}>
                  <textarea
                    id={`${formId}-note`}
                    className="field"
                    value={fields.note ?? ''}
                    onChange={(event) => setField('note', event.target.value)}
                  />
                </Field>
              </>
            ) : null}

            {intent === 'manufacturer' ? (
              <>
                <Field label="Company" error={errors.company} id={`${formId}-company`}>
                  <input
                    id={`${formId}-company`}
                    className="field"
                    value={fields.company ?? ''}
                    aria-invalid={Boolean(errors.company)}
                    onChange={(event) => setField('company', event.target.value)}
                  />
                </Field>
                <fieldset>
                  <legend className="title-4">What you make</legend>
                  {MAKES.map((item, index) => (
                    <label key={item} className="choice">
                      <input
                        id={index === 0 ? `${formId}-makes` : undefined}
                        type="checkbox"
                        checked={makes.includes(item)}
                        onChange={() =>
                          setMakes((current) =>
                            current.includes(item) ? current.filter((value) => value !== item) : [...current, item],
                          )
                        }
                      />
                      <span className="body-3">{item}</span>
                    </label>
                  ))}
                  {errors.makes ? (
                    <p className="caption-2 error-text" role="alert">
                      {errors.makes}
                    </p>
                  ) : null}
                </fieldset>
                <Field label="What you want from a partnership" error={errors.note} id={`${formId}-note`}>
                  <textarea
                    id={`${formId}-note`}
                    className="field"
                    value={fields.note ?? ''}
                    aria-invalid={Boolean(errors.note)}
                    onChange={(event) => setField('note', event.target.value)}
                  />
                </Field>
              </>
            ) : null}

            {intent === 'operations' ? (
              <>
                <Field label="Business" error={errors.business} id={`${formId}-business`}>
                  <span className="select-wrap">
                    <select
                      id={`${formId}-business`}
                      className="field"
                      value={fields.business ?? ''}
                      aria-invalid={Boolean(errors.business)}
                      onChange={(event) => setField('business', event.target.value)}
                    >
                      <option value="">Select one</option>
                      {BUSINESSES.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                    <CaretDown size={16} aria-hidden="true" />
                  </span>
                </Field>
                <Field label="The workflow you want looked at" error={errors.workflow} id={`${formId}-workflow`}>
                  <textarea
                    id={`${formId}-workflow`}
                    className="field"
                    value={fields.workflow ?? ''}
                    aria-invalid={Boolean(errors.workflow)}
                    onChange={(event) => setField('workflow', event.target.value)}
                  />
                </Field>
              </>
            ) : null}

            {intent === 'homeowner' ? (
              <>
                <p className="body-6 muted">The pilot is application only. We read every note, and we cannot take every home.</p>
                <Field label="Location" error={errors.location} id={`${formId}-location`} hint="City and state.">
                  <input
                    id={`${formId}-location`}
                    className="field"
                    value={fields.location ?? ''}
                    aria-invalid={Boolean(errors.location)}
                    onChange={(event) => setField('location', event.target.value)}
                  />
                </Field>
                <Field label="About the home" error={errors.note} id={`${formId}-note`}>
                  <textarea
                    id={`${formId}-note`}
                    className="field"
                    value={fields.note ?? ''}
                    aria-invalid={Boolean(errors.note)}
                    onChange={(event) => setField('note', event.target.value)}
                  />
                </Field>
              </>
            ) : null}

            {formError ? (
              <p className="body-3 error-text" role="alert">
                {formError}
              </p>
            ) : null}

            <div className="cta-pair">
              <button className="btn btn-copper button-md" type="submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending' : 'Send this note'}
              </button>
              <a className="btn btn-copper button-md" href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                Book a 15 minute call
              </a>
            </div>
          </form>
        )}
      </Section>
    </Page>
  )
}

function Field({
  label,
  hint,
  error,
  id,
  children,
}: {
  label: string
  hint?: string
  error?: string
  id: string
  children: ReactNode
}) {
  return (
    <label className="stack-8" htmlFor={id}>
      <span className="title-4">{label}</span>
      {hint ? <span className="caption-2 muted">{hint}</span> : null}
      {children}
      {error ? (
        <span className="caption-2 error-text" role="alert">
          {error}
        </span>
      ) : null}
    </label>
  )
}
