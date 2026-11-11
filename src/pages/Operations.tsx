import { Button } from '../components/Button'
import { Reveal } from '../components/Reveal'
import { Seo } from '../components/Seo'
import { BOOKING_URL } from '../lib/site'

const STEPS = [
  ['01', 'Look at how the business runs.'],
  ['02', 'Find where time and money leak.'],
  ['03', 'Build the fixes and hand them over.\nAI where it actually helps.'],
] as const

export default function Operations() {
  return (
    <>
      <Seo
        title="Operations"
        description="AI and operations consulting that helps optimize how a business runs."
      />
      <section className="section">
        <div className="frame">
          <div className="prose">
            <p className="label">Services / 03 Operations</p>
            <p className="body-3 who">For businesses that want to run better.</p>
            <h1 className="display">
              <span className="line">Optimize how your</span>
              <span className="line">business runs.</span>
            </h1>
            <p className="body-3">Most businesses lose time and money in how the work itself gets done. We help you see that clearly, and fix it. We use AI where it actually helps — not as a stunt, and not everywhere.</p>
          </div>
        </div>
      </section>
      <section className="section">
        <Reveal>
          <div className="frame">
            <div className="prose">
              <h2 className="heading-1">Who this is for.</h2>
              <p className="body-3">Owners and operators of small and mid-size businesses. People who know the work is leaking somewhere, and want a clear look at where.</p>
            </div>
          </div>
        </Reveal>
      </section>
      <section className="section">
        <Reveal>
          <div className="frame">
            <div className="prose">
              <h2 className="heading-1">How we work.</h2>
              {STEPS.map(([num, text]) => (
                <p className="body-3" key={num}>
                  <span className="label">{num}</span>{' '}
                  {text.split('\n').map((line, index) => (
                    <span key={line}>
                      {index > 0 && <br />}
                      {line}
                    </span>
                  ))}
                </p>
              ))}
            </div>
          </div>
        </Reveal>
      </section>
      <section className="section">
        <Reveal>
          <div className="frame">
            <div className="prose ask">
              <p className="body-3">
                <a className="prose-link" href={BOOKING_URL}>Questions? Book a call.</a>
              </p>
              <p className="body-3">Talk through how the business runs.</p>
              <Button variant="secondary" size="md" href={BOOKING_URL}>Book a 15 min call</Button>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  )
}
