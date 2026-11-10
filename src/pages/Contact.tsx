import { cloneElement, isValidElement, useEffect, useId, useState, type FormEvent, type ReactElement, type ReactNode } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useTheme } from '../theme'
import { Button } from '../components/Button'
import { Plate } from '../components/Plate'
import { Seo } from '../components/Seo'
import { BOOKING_URL } from '../lib/site'
import { submitLead, type Intent } from '../lib/submitLead'

const BUILDING_TYPES = ['Office', 'Warehouse', 'Multifamily', 'Retail', 'Industrial', 'Mixed use', 'Other'] as const

const CHIPS: { intent: Intent; label: string }[] = [
  { intent: 'owner', label: 'Commercial building' },
  { intent: 'manufacturer', label: 'Hardware partner' },
  { intent: 'operations', label: 'Operations help' },
  { intent: 'homeowner', label: 'Homeowner pilot' },
]

const SOLAR = [
  { value: 'yes', label: 'Yes' },
  { value: 'no', label: 'No' },
  { value: 'planned', label: 'Planned' },
] as const

function intentFromQuery(value: string | null): Intent {
  switch (value) {
    case 'partner':
      return 'manufacturer'
    case 'operations':
      return 'operations'
    case 'pilot':
      return 'homeowner'
    default:
      return 'owner'
  }
}

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const FALLBACK_TIME_ZONE = 'America/Denver'

function visitorTimeZone() {
  try {
    const zone = Intl.DateTimeFormat().resolvedOptions().timeZone
    if (!zone) return FALLBACK_TIME_ZONE
    Intl.DateTimeFormat('en-US', { timeZone: zone }).format()
    return zone
  } catch {
    return FALLBACK_TIME_ZONE
  }
}

export default function Contact() {
  const [params] = useSearchParams()
  const { effectiveTheme } = useTheme()
  const [timeZone, setTimeZone] = useState(FALLBACK_TIME_ZONE)
  const [intent, setIntent] = useState<Intent>('owner')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [buildingType, setBuildingType] = useState('')
  const [city, setCity] = useState('')
  const [size, setSize] = useState('')
  const [utilityCost, setUtilityCost] = useState('')
  const [solar, setSolar] = useState('')
  const [note, setNote] = useState('')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')
  const baseId = useId()
  const intentLabel = `${baseId}-intent`
  const solarLabel = `${baseId}-solar`

  useEffect(() => {
    setIntent(intentFromQuery(params.get('intent')))
  }, [params])

  useEffect(() => {
    setTimeZone(visitorTimeZone())
  }, [])

  const schedulerUrl = `${BOOKING_URL}?cal.tz=${encodeURIComponent(timeZone)}`

  const buildingDetails = intent === 'owner' || intent === 'homeowner'
  const owner = intent === 'owner'

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const next: Record<string, string> = {}
    if (!name.trim()) next.name = 'Enter your name.'
    if (!EMAIL.test(email.trim())) next.email = 'Enter a valid email.'
    if (!city.trim()) next.city = 'Enter a city.'
    if (!note.trim()) next.note = 'Enter a message.'
    if (owner && !buildingType) next.buildingType = 'Choose a building type.'
    if (owner && !size.trim()) next.size = 'Enter the building size.'
    if (owner && !solar) next.solar = 'Tell us about solar.'
    setErrors(next)
    if (Object.keys(next).length > 0) {
      setStatus('error')
      setMessage('Check the form. Some fields need attention.')
      const first = Object.keys(next)[0]
      document.getElementById(`${baseId}-${first}`)?.focus()
      return
    }

    setStatus('sending')
    setMessage('')
    const fields: Record<string, string> = { location: city.trim(), note: note.trim() }
    if (buildingType) fields.buildingType = buildingType
    if (buildingDetails && size.trim()) fields.size = size.trim()
    if (buildingDetails && utilityCost.trim()) fields.utilityCost = utilityCost.trim()
    if (buildingDetails && solar) fields.solar = solar

    const result = await submitLead({
      intent,
      name: name.trim(),
      email: email.trim(),
      fields,
      files: [],
    })
    if (result.ok) {
      setStatus('success')
      setMessage(`We have your note. We will reply at ${email.trim()}.`)
      return
    }
    setStatus('error')
    setMessage(result.message)
  }

  return (
    <>
      <Seo
        title="Contact"
        description="Get a free feasibility check, or book a 15 min call."
      />
      <section className="section">
        <div className="frame cta-grid">
          <div className="contact-col">
            <p className="label option-label">Option A</p>
            <h1 className="display">
              <span className="line">Get a free</span>
              <span className="line">feasibility check.</span>
            </h1>
            {status === 'success' ? (
              <div className="form-status" role="status" aria-live="polite">
                <p className="body-3">{message}</p>
                <Button variant="ink" size="md" href={schedulerUrl}>Pick a time</Button>
              </div>
            ) : (
              <form className="form" onSubmit={onSubmit} noValidate>
                <div className="form-grid two">
                  <Field id={`${baseId}-name`} label="Name" error={errors.name}>
                    <input id={`${baseId}-name`} name="name" autoComplete="name" value={name} aria-invalid={!!errors.name} onChange={(event) => setName(event.target.value)} />
                  </Field>
                  <Field id={`${baseId}-email`} label="Email" error={errors.email}>
                    <input id={`${baseId}-email`} name="email" type="email" autoComplete="email" inputMode="email" value={email} aria-invalid={!!errors.email} onChange={(event) => setEmail(event.target.value)} />
                  </Field>
                </div>
                <div className="form-grid two">
                  <Field id={`${baseId}-buildingType`} label="Building type" error={errors.buildingType}>
                    <div className="select-wrap">
                      <select id={`${baseId}-buildingType`} name="buildingType" value={buildingType} aria-invalid={!!errors.buildingType} aria-describedby={errors.buildingType ? `${baseId}-buildingType-error` : undefined} onChange={(event) => setBuildingType(event.target.value)}>
                        <option value="">Select</option>
                        {BUILDING_TYPES.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                      <span className="caret" aria-hidden="true" />
                    </div>
                  </Field>
                  <Field id={`${baseId}-city`} label="City" error={errors.city}>
                    <input id={`${baseId}-city`} name="city" autoComplete="address-level2" value={city} aria-invalid={!!errors.city} onChange={(event) => setCity(event.target.value)} />
                  </Field>
                </div>
                {buildingDetails && (
                  <div className="form-grid two">
                    <Field id={`${baseId}-size`} label="Building size" hint="Square feet, or a short description." error={errors.size}>
                      <input id={`${baseId}-size`} name="size" value={size} aria-invalid={!!errors.size} onChange={(event) => setSize(event.target.value)} />
                    </Field>
                    <Field id={`${baseId}-utility`} label="Monthly utility cost" hint="A recent monthly total is enough. Do not include account numbers.">
                      <input id={`${baseId}-utility`} name="utilityCost" value={utilityCost} onChange={(event) => setUtilityCost(event.target.value)} />
                    </Field>
                  </div>
                )}
                {buildingDetails && (
                  <fieldset className="plain" id={`${baseId}-solar`} tabIndex={-1}>
                    <legend id={solarLabel} className="label">Solar</legend>
                    <div className="chips" role="radiogroup" aria-labelledby={solarLabel} aria-describedby={errors.solar ? `${baseId}-solar-error` : undefined}>
                      {SOLAR.map((option) => (
                        <label className="chip body-3" key={option.value}>
                          <input
                            type="radio"
                            name="solar"
                            value={option.value}
                            checked={solar === option.value}
                            onChange={() => setSolar(option.value)}
                          />
                          {option.label}
                        </label>
                      ))}
                    </div>
                    {errors.solar && <p className="caption field-error" id={`${baseId}-solar-error`}>{errors.solar}</p>}
                  </fieldset>
                )}
                <fieldset className="plain">
                  <legend id={intentLabel} className="label">What are you trying to do?</legend>
                  <div className="chips" role="radiogroup" aria-labelledby={intentLabel}>
                    {CHIPS.map((chip) => (
                      <label className="chip body-3" key={chip.intent}>
                        <input
                          type="radio"
                          name="intent"
                          value={chip.intent}
                          checked={intent === chip.intent}
                          onChange={() => setIntent(chip.intent)}
                        />
                        {chip.label}
                      </label>
                    ))}
                  </div>
                </fieldset>
                {intent === 'homeowner' && (
                  <p className="caption hint">The pilot is application only. We read every note, and we cannot take every home.</p>
                )}
                <Field id={`${baseId}-note`} label="Message" error={errors.note}>
                  <textarea id={`${baseId}-note`} name="note" rows={3} value={note} aria-invalid={!!errors.note} onChange={(event) => setNote(event.target.value)} />
                </Field>
                <div className="form-status" role="status" aria-live="polite">
                  {message && status === 'error' && <p className="body-3">{message}</p>}
                </div>
                <Button variant="primary" size="md" type="submit" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending' : 'Send it'}
                </Button>
              </form>
            )}
          </div>
          <div className="contact-col" id="scheduler">
            <p className="label option-label">Option B</p>
            <h2 className="display">
              <span className="line">Book a</span>
              <span className="line">15 min call.</span>
            </h2>
            <p className="body-3">Talk it through with an engineer.</p>
            <div className="scheduler">
              <iframe
                className="cal-frame"
                title="Book a 15 minute call with Exergy"
                src={`${schedulerUrl}&embed=true&theme=${effectiveTheme}`}
              />
              <a className="see scheduler-link" href={schedulerUrl}>Open the scheduler</a>
            </div>
            <Button variant="ink" size="md" href={schedulerUrl}>Pick a time</Button>
          </div>
        </div>
        <div className="band-art">
          <Plate
            slug="cta-rooftops"
            plain
            ratio="ratio-21-8"
            sizes="100vw"
            alt="Copperplate engraving of brick rooftops with solar arrays and a city beyond, under an open sky."
          />
        </div>
      </section>
    </>
  )
}

function Field({
  id,
  label,
  hint,
  error,
  children,
}: {
  id: string
  label: string
  hint?: string
  error?: string
  children: ReactNode
}) {
  const described = [hint ? `${id}-hint` : '', error ? `${id}-error` : ''].filter(Boolean).join(' ')
  const control = isValidElement(children)
    ? cloneElement(children as ReactElement<{ 'aria-describedby'?: string }>, {
        'aria-describedby': described || undefined,
      })
    : children
  return (
    <div className="field">
      <label className="label" htmlFor={id}>{label}</label>
      {control}
      {hint && <p className="caption hint" id={`${id}-hint`}>{hint}</p>}
      {error && <p className="caption field-error" id={`${id}-error`}>{error}</p>}
    </div>
  )
}
