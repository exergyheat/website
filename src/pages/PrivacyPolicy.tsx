import { FacingCta } from '../components/FacingCta'
import { Seo } from '../components/Seo'

const points = [
  {
    title: 'Data Protection',
    content: 'We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, alteration, and destruction.',
  },
  {
    title: 'Information Security',
    content: 'All data is securely stored on our private Exergy servers. We avoid big tech platforms to maintain complete control over your data protection.',
  },
  {
    title: 'Data Usage',
    content: 'We only collect and use information that is necessary for providing and improving our services. Your data is never sold to third parties.',
  },
  {
    title: 'Transparency',
    content: 'We are committed to being transparent about our data collection and use practices, ensuring you always know how your information is being handled.',
  },
]

export default function PrivacyPolicy() {
  return (
    <>
      <Seo
        title="Privacy policy"
        description="Privacy policy for exergyheat.com."
      />
      <section className="section">
        <div className="frame">
          <div className="prose-block">
            <p className="label page-kicker">Privacy</p>
            <h1 className="heading-1">Privacy policy</h1>
            <p className="body-3" style={{ marginTop: 24 }}>
              Your privacy is important to us. Learn how we protect and manage your data.
            </p>
          </div>
          {points.map((point) => (
            <article className="ruled prose-block" key={point.title}>
              <h2 className="heading-5">{point.title}</h2>
              <p className="body-3">{point.content}</p>
            </article>
          ))}
          <div className="ruled prose-block">
            <h2 className="heading-4">Detailed privacy policy</h2>
          </div>
          <article className="ruled prose-block">
            <h2 className="heading-5">1. Information We Collect</h2>
            <p className="body-3">We collect information that you provide directly to us, including:</p>
            <ul className="body-3">
              <li>Name and contact information</li>
              <li>System performance data</li>
              <li>Usage statistics</li>
              <li>Project location (when required)</li>
            </ul>
          </article>
          <article className="ruled prose-block">
            <h2 className="heading-5">2. How We Use Your Information</h2>
            <p className="body-3">We use the collected information for:</p>
            <ul className="body-3">
              <li>Providing and maintaining our services</li>
              <li>Processing your transactions</li>
              <li>Sending you important updates</li>
              <li>Improving our products and services</li>
              <li>Responding to your requests and inquiries</li>
            </ul>
          </article>
          <article className="ruled prose-block">
            <h2 className="heading-5">3. Data Sharing and Disclosure</h2>
            <p className="body-3">We may share your information with:</p>
            <ul className="body-3">
              <li>Service providers and business partners</li>
              <li>Legal authorities when required by law</li>
              <li>Third parties with your explicit consent</li>
            </ul>
          </article>
          <article className="ruled prose-block">
            <h2 className="heading-5">4. Your Rights and Choices</h2>
            <p className="body-3">You have the right to:</p>
            <ul className="body-3">
              <li>Access your personal information</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of marketing communications</li>
              <li>Export your data</li>
            </ul>
          </article>
          <article className="ruled prose-block">
            <h2 className="heading-5">5. Contact Us</h2>
            <p className="body-3">If you have any questions about this Privacy Policy, please contact us at:</p>
            <p className="body-3" style={{ marginTop: 16 }}>Email: support@exergyheat.com</p>
          </article>
          <p className="caption prose-block" style={{ marginTop: 32 }}>Last updated: June 4, 2025</p>
        </div>
      </section>
      <FacingCta />
    </>
  )
}
