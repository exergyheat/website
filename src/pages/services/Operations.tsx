import ServiceLayout from '../../components/ServiceLayout'

const Operations = () => {
  return (
    <ServiceLayout
      title="Operations Optimization"
      lede="The same exergy analysis, applied to the work inside a business. Find the useful work. Eliminate the waste. Measure the return."
      description="Operations optimization for energy-adjacent small businesses. A paid workflow audit, a build, and an optional retainer. For HVAC and solar installers, property managers, and mining operators."
      path="/services/operations"
      intro="Exergy, in thermodynamics, is the share of energy that can still do useful work. A business has the same split. Some of the day produces the thing the customer paid for. The rest is retyping, chasing, and waiting. We look for that wasted work in energy-adjacent shops: HVAC installers, solar installers, property managers, and mining operators. Then we automate it and measure whether the useful share went up."
      steps={[
        {
          title: 'Paid workflow audit',
          body: 'We sit in the work as it actually happens. Proposals, scheduling, procurement, commissioning checklists, customer updates. The deliverable is a map of wasted steps and the ones worth automating first.',
        },
        {
          title: 'Build',
          body: 'We automate the wasted steps. The tools stay understandable to the people who run the job. This is not a slide deck about AI. It is a workflow that takes less of the week.',
        },
        {
          title: 'Measure, then an optional retainer',
          body: 'We compare the work before and after, in hours and in the jobs that now finish. If you want it kept honest as the business changes, a retainer continues the measurement. Scoped per project. The retainer is optional.',
        },
      ]}
      ctaLabel="Book a call"
      ctaTo="/book-call?intent=operations"
    >
      <p className="mt-6 text-surface-600 dark:text-surface-400 leading-relaxed">
        This is the same idea as the building work: stop paying for waste. It is a separate engagement from a mining design. A company can hire one without the other.
      </p>
    </ServiceLayout>
  )
}

export default Operations
