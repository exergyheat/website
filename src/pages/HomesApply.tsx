import { useEffect, useId, useState, type FormEvent } from 'react'
import { Button } from '../components/Button'
import { Field } from '../components/Field'
import { Seo } from '../components/Seo'
import { bookingUrl, visitorTimeZone, FALLBACK_TIME_ZONE } from '../lib/site'
import { submitLead } from '../lib/submitLead'

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const MILES = [
  { value: 'yes', label: 'Yes' },
  { value: 'no', label: 'No' },
] as const

const HEATING = [
  { value: 'boiler', label: 'Boiler' },
  { value: 'furnace', label: 'Furnace' },
  { value: 'both', label: 'Both' },
  { value: 'other', label: 'Other' },
] as const

const SOLAR = [
  { value: 'yes', label: 'Yes' },
  { value: 'no', label: 'No' },
  { value: 'planned', label: 'Planned' },
] as const

const HEARD = [
  { value: 'podcast', label: 'Podcast' },
  { value: 'conference', label: 'Conference' },
  { value: 'other', label: 'Other' },
] as const

export default function HomesApply() {
  const baseId = useId()
  const [timeZone, setTimeZone] = useState(FALLBACK_TIME_ZONE)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [cityState, setCityState] = useState('')
  const [within100Miles, setWithin100Miles] = useState('')
  const [heatingType, setHeatingType] = useState('')
  const [electricalNotes, setElectricalNotes] = useState('')
  const [solar, setSolar] = useState('')
  const [why, setWhy] = useState('')
  const [heardAbout, setHeardAbout] = useState('')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  useEffect(() => {
    setTimeZone(visitorTimeZone())
  }, [])

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const next: Record<string, string> = {}
    if (!name.trim()) next.name = 'Enter your name.'
    if (!EMAIL.test(email.trim())) next.email = 'Enter a valid email.'
    if (!cityState.trim()) next.cityState = 'Enter a city and state.'
    if (!within100Miles) next.within100Miles = 'Choose yes or no.'
    if (!heatingType) next.heatingType = 'Choose a heating type.'
    if (!solar) next.solar = 'Tell us about solar.'
    if (!why.trim()) next.why = 'Tell us why you want in.'
    if (!heardAbout) next.heardAbout = 'Tell us how you heard about us.'
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
    const place = cityState.trim()
    const note = why.trim()
    const result = await submitLead({
      intent: 'homeowner',
      name: name.trim(),
      email: email.trim(),
      fields: {
        cityState: place,
        location: place,
        within100Miles,
        heatingType,
        electricalNotes: electricalNotes.trim(),
        solar,
        why: note,
        note,
        heardAbout,
      },
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

  const schedulerUrl = bookingUrl(timeZone)

  return (
    <>
      <Seo title="Apply" description="Apply for the homeowner pilot." />
      <section className="section">
        <div className="frame">
          <div className="apply">
            <h1 className="display">Apply for the homeowner pilot.</h1>
            <p className="body-3">The pilot is application only. We read every note, and we cannot take every home.</p>
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
                <Field id={`${baseId}-cityState`} label="City / state" error={errors.cityState}>
                  <input id={`${baseId}-cityState`} name="cityState" autoComplete="address-level2" value={cityState} aria-invalid={!!errors.cityState} onChange={(event) => setCityState(event.target.value)} />
                </Field>
                <Choice
                  id={`${baseId}-within100Miles`}
                  label="Within about 100 miles of Denver?"
                  name="within100Miles"
                  options={MILES}
                  value={within100Miles}
                  error={errors.within100Miles}
                  onChange={setWithin100Miles}
                />
                <Choice
                  id={`${baseId}-heatingType`}
                  label="Home heating type"
                  name="heatingType"
                  options={HEATING}
                  value={heatingType}
                  error={errors.heatingType}
                  onChange={setHeatingType}
                />
                <Field id={`${baseId}-electricalNotes`} label="Electrical service notes">
                  <textarea id={`${baseId}-electricalNotes`} name="electricalNotes" rows={3} value={electricalNotes} onChange={(event) => setElectricalNotes(event.target.value)} />
                </Field>
                <Choice
                  id={`${baseId}-solar`}
                  label="Solar"
                  name="solar"
                  options={SOLAR}
                  value={solar}
                  error={errors.solar}
                  onChange={setSolar}
                />
                <Field id={`${baseId}-why`} label="Why you want in" error={errors.why}>
                  <textarea id={`${baseId}-why`} name="why" rows={3} value={why} aria-invalid={!!errors.why} onChange={(event) => setWhy(event.target.value)} />
                </Field>
                <Choice
                  id={`${baseId}-heardAbout`}
                  label="How you heard about us"
                  name="heardAbout"
                  options={HEARD}
                  value={heardAbout}
                  error={errors.heardAbout}
                  onChange={setHeardAbout}
                />
                <div className="form-status" role="status" aria-live="polite">
                  {message && status === 'error' && <p className="body-3">{message}</p>}
                </div>
                <Button variant="primary" size="md" type="submit" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending' : 'Apply'}
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

function Choice({
  id,
  label,
  name,
  options,
  value,
  error,
  onChange,
}: {
  id: string
  label: string
  name: string
  options: readonly { value: string; label: string }[]
  value: string
  error?: string
  onChange: (value: string) => void
}) {
  const legendId = `${id}-legend`
  return (
    <fieldset className="plain" id={id} tabIndex={-1}>
      <legend id={legendId} className="label">{label}</legend>
      <div className="chips" role="radiogroup" aria-labelledby={legendId} aria-describedby={error ? `${id}-error` : undefined}>
        {options.map((option) => (
          <label className="chip body-3" key={option.value}>
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={() => onChange(option.value)}
            />
            {option.label}
          </label>
        ))}
      </div>
      {error && <p className="caption field-error" id={`${id}-error`}>{error}</p>}
    </fieldset>
  )
}
