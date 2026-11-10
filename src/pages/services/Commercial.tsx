import ServiceLayout from '../../components/ServiceLayout'

const Commercial = () => {
  return (
    <ServiceLayout
      title="Commercial Building-Integrated Mining"
      lede="Building energy systems powered by bitcoin miners. Heat recovery and solar monetization are separate value streams. You can stop after any phase."
      description="Commercial consulting for building-integrated bitcoin mining. A phased engagement from a free feasibility check through audit, engineering coordination, commissioning, and optional monitoring."
      path="/services/commercial"
      intro="This is the lead practice. Bitcoin miners are industrial equipment in today's ecosystem, and the buildings that can use them well are commercial: offices, shops, venues, and new projects that already have a mechanical engineer on the team. Exergy does not sell you a box. We plug in beside your architect, MEP engineer, and general contractor as the building-integrated mining specialist."
      steps={[
        {
          title: 'Phase 0 — Feasibility Check',
          body: 'Free. Send about twelve months of utility bills. We do napkin math and tell you go or no-go. This phase is its own conversation, not a contract for the work that follows.',
        },
        {
          title: 'Phase 1 — Exergy Audit',
          body: 'A study of the energy, the heat, and the bitcoin economics. You leave with one to three system options and an estimated budget. Heat recovery and solar monetization are modeled as separate value streams, not one blended promise. Its own agreement.',
        },
        {
          title: 'Phase 2 — Engineering Coordination',
          body: 'We work with the MEP engineers, contractors, and controls trades to finalize the design and the costs. Integration is hydronic or forced air, matched to the plant. Exergy does not replace the design team. We own the mining integration inside it. Its own agreement.',
        },
        {
          title: 'Phase 3 — Procurement and Commissioning',
          body: 'We help specify what gets purchased and then commission the system so it heats, mines, and reports the way the design said it would. Exergy does not sell the hardware. Its own agreement.',
        },
        {
          title: 'Phase 4 — Monitoring and Warranty',
          body: 'Optional. Ongoing watch on the system and a warranty path written into that agreement. Skip it and the building still runs. Its own agreement.',
        },
      ]}
      ctaLabel="Send us your utility bills"
      ctaTo="/contact?intent=phase-0"
    >
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="rounded-xl bg-white dark:bg-surface-800 border border-surface-200 dark:border-surface-700 p-5">
          <h2 className="font-semibold text-surface-900 dark:text-surface-100 mb-2">New construction</h2>
          <p className="text-sm text-surface-600 dark:text-surface-400 leading-relaxed">
            The miner and the heat recovery are drawn into the mechanical system before the walls close. We start with the design team, not after the equipment schedule is frozen.
          </p>
        </div>
        <div className="rounded-xl bg-white dark:bg-surface-800 border border-surface-200 dark:border-surface-700 p-5">
          <h2 className="font-semibold text-surface-900 dark:text-surface-100 mb-2">Retrofit</h2>
          <p className="text-sm text-surface-600 dark:text-surface-400 leading-relaxed">
            We work with the heating plant and the distribution you already have. Hydronic loops or forced air. The existing plant stays in place as backup.
          </p>
        </div>
      </div>
      <p className="mt-6 text-surface-600 dark:text-surface-400 leading-relaxed">
        Each phase is a separate agreement. A no-go at Phase 0 costs you the time to send the bills. A yes at Phase 1 does not obligate engineering, procurement, or monitoring.
      </p>
    </ServiceLayout>
  )
}

export default Commercial
