import ServiceLayout from '../../components/ServiceLayout'
import ReviewTodo from '../../components/ReviewTodo'

const Advisory = () => {
  return (
    <ServiceLayout
      title="Manufacturer and Market-Entry Advisory"
      lede="For companies building miners, heaters, boilers, or water heaters that want those products to live in a building."
      description="Advisory for manufacturers entering building and home energy: integration specs, pilot installs, installer channels, certification path, and product-market feedback. Paid discovery sprint, then a fixed-fee monthly pilot."
      path="/services/advisory"
      intro="The mining industry is largely closed-source and proprietary. The machines were built for data halls, not mechanical rooms. They do not plug into a thermostat, a furnace, a hydronic loop, or a solar inverter without someone translating. Electrical, mechanical, and listing rules add another wall. We have done that translation in the field. This practice is for the company that wants to enter building and home energy without pretending the wall is not there."
      steps={[
        {
          title: 'Paid discovery sprint',
          body: 'We learn the product and the building it is trying to enter. The output is an honest map of what already works and what will fail on a real job: controls, heat delivery, electrical, and the path through certification.',
        },
        {
          title: 'Field program',
          body: 'Integration specs for thermostats, HVAC, furnaces, and solar inverters. Pilot installs and field testing. Installer and channel setup. A certification path. Product-market feedback from the people who would actually specify the equipment.',
        },
        {
          title: 'Fixed-fee monthly pilot',
          body: 'After the sprint, a standing monthly engagement runs the field program. The fee is fixed, agreed before the month starts, and scoped to the product. We do not publish that number.',
        },
      ]}
      ctaLabel="Talk partnership"
      ctaTo="/contact?intent=partnership"
    >
      <ReviewTodo>
        Confirm what a discovery sprint includes and how long it runs, and what the fixed monthly pilot covers, before this page is treated as an offer. No fee belongs on the site.
      </ReviewTodo>
      <p className="text-surface-600 dark:text-surface-400 leading-relaxed">
        We will not put your product on a shelf here. Exergy sells no hardware. If the work goes well, your product gets easier for a building to use, and the open tools we publish stay open.
      </p>
    </ServiceLayout>
  )
}

export default Advisory
