import { Link } from 'react-router-dom'
import ServiceLayout from '../../components/ServiceLayout'

const ResidentialPilot = () => {
  return (
    <ServiceLayout
      title="Residential Pilot Program"
      lede="An application-only alpha for owners who want to be early. These are not finished consumer products, and they are not the headline of the company."
      description="Exergy's residential pilot is an application-only alpha. Guided remote anywhere in the US. Done with our crew within about 100 miles of Denver. Premium, custom, scoped per project."
      path="/services/residential-pilot"
      intro="Homes are a real application of building-integrated mining. They are also early. The hardware ecosystem is still industrial, the controls are still being proven house by house, and we will not pretend a catalog SKU exists. The pilot is for an owner who understands that, wants the system anyway, and will live with an alpha."
      steps={[
        {
          title: 'Apply',
          body: 'Tell us the house, how it is heated today, whether there is solar, and why you want to be early. Applying is not a purchase.',
        },
        {
          title: 'We decide if it is a fit',
          body: 'Not every house is accepted. A good fit has a real heating load, an owner who wants to be early, and a path to integrate a bitcoin miner as hydronic heat or forced air. We will say no when the house is not ready.',
        },
        {
          title: 'Guided remote, or done with our crew',
          body: 'Accepted pilots are guided remotely anywhere in the United States. Within about 100 miles of Denver we can do the work ourselves. Either way the pricing is premium and custom, scoped to that house. There is no rate card.',
        },
        {
          title: 'How the pilot is run',
          body: 'We install an open-source control hub — the piece we have called CTRL1 — to tie the system together. It is part of how the pilot is built, not a product for sale. Exergy Relay watches the system and reports how it is doing. Relay is a 5% hashrate split — part of how pilot systems are monitored, not an add-on you buy.',
        },
      ]}
      ctaLabel="Apply for the pilot"
      ctaTo="/contact?intent=pilot"
    >
      <p className="mt-6 text-surface-600 dark:text-surface-400 leading-relaxed">
        If you want to study the idea before you apply, the calculators and Home Assistant integrations are free on{' '}
        <Link to="/open-tools" className="text-primary-600 dark:text-primary-400 hover:underline">
          Open Tools
        </Link>
        . The three houses in{' '}
        <Link to="/work" className="text-primary-600 dark:text-primary-400 hover:underline">
          Work
        </Link>{' '}
        are pilot installs, labeled that way on purpose.
      </p>
    </ServiceLayout>
  )
}

export default ResidentialPilot
