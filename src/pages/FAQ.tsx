import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Plus, Minus, Search, MessageCircle, ArrowRight } from 'lucide-react'
import ReviewTodo from '../components/ReviewTodo'

function FAQ() {
  const [openSections, setOpenSections] = useState<Set<string>>(
    new Set(['basics', 'fit', 'working', 'technical'])
  )
  const [searchQuery, setSearchQuery] = useState('')

  const faqSections = [
    {
      id: 'basics',
      title: 'The Basics',
      questions: [
        {
          q: 'What is building-integrated mining?',
          a: 'It means the bitcoin miner is part of the building\'s energy system, not a machine in a spare room. Electricity in becomes heat out, the same as any electric heater, and the miner also earns bitcoin. We integrate that heat as hydronic or forced air. Heat recovery and solar monetization are two different value streams. We account for them separately.',
        },
        {
          q: 'What does "exergy" mean?',
          a: 'In thermodynamics, exergy is the share of an energy flow that can still do useful work. The rest is still energy, but it can no longer do work. We are named for the useful share. The job is to find that share in a building\'s energy and in a company\'s operations, and to stop paying for the waste.',
        },
        {
          q: 'Do I need to understand bitcoin?',
          a: 'You need to understand that the heating system can earn something instead of nothing. We can talk about payouts in bitcoin or in a form that feels more like a rebate. The heat is what the building needed. The bitcoin is the useful work a plain heater never did.',
        },
        {
          q: 'Is it bad for the environment?',
          a: 'A miner used as heat displaces heat the building was going to make some other way. If that other way was burning propane or oil, the combustion goes away for the hours the miner carries the load. The electricity still comes from whatever supplies the building, including on-site solar when there is surplus. We will not call that carbon-free unless your power actually is.',
        },
      ],
    },
    {
      id: 'fit',
      title: 'Who It Is For',
      questions: [
        {
          q: 'Is my commercial building a fit?',
          a: 'Start there. This is the lead practice. A fit usually has a real heating load, a mechanical system we can tie into (hydronic or forced air), and a project team — architect, MEP, contractor — we can sit beside. New construction and retrofits are both in scope, and they are handled differently. Phase 0 is a free go or no-go from about twelve months of utility bills. You can stop after that phase.',
        },
        {
          q: 'We build miners, heaters, boilers, or water heaters. Can you help us enter buildings?',
          a: 'Yes. That is a separate practice from building consulting. The mining industry is largely closed-source, the products do not plug into buildings cleanly, and the regulatory path is a real hurdle. We offer field experience: integration specs for thermostats, HVAC, furnaces, and solar inverters; pilot installs; installer and channel setup; a certification path; and product-market feedback. The shape is a paid discovery sprint, then a fixed-fee monthly pilot. Scoped per engagement.',
        },
        {
          q: 'Can you do this in my house?',
          a: 'Only through the residential pilot, and only by application. These are alpha systems for owners who want to be early. They are not a catalog and they are not the headline of the company. Guidance is remote anywhere in the US. Within about 100 miles of Denver we can do the work ourselves. Pricing is premium and custom, scoped per project. The three homes in our work section are pilot installs.',
        },
        {
          q: 'Why don\'t you sell hardware?',
          a: 'Because a closed box is the problem, not the product we want to be. Miners change every generation. Buildings do not. Selling a hub or a miner would lock clients to our inventory and fight the open stack we are aligned with. We specify, coordinate, and commission. On pilot systems we install an open-source control hub to tie the system together, and we monitor with Exergy Relay. Neither is for sale. The free tools are on the Open Tools page. The 256 Foundation funds the open mining hardware and firmware underneath the industry.',
        },
        {
          q: 'What about operations, not energy?',
          a: 'We also apply the same idea to workflows at energy-adjacent small businesses: HVAC and solar installers, property managers, and mining operators. Find the wasted work, automate it, measure the return. That engagement is a paid workflow audit, a build, and an optional retainer. It does not require a mining project.',
        },
      ],
    },
    {
      id: 'working',
      title: 'Working With Exergy',
      questions: [
        {
          q: 'What does it cost?',
          a: 'Scoped per project. We are resetting pricing and we do not publish fees, retainers, or hardware prices. Phase 0, the commercial feasibility check, is free. Everything after that is its own agreement, and you can stop after any phase. There is no audit credit toward a purchase, because we do not sell the equipment.',
        },
        {
          q: 'What are the commercial phases?',
          a: 'Phase 0 is a free feasibility check from your utility bills. Phase 1 is an Exergy Audit: energy, heat, and bitcoin economics, with one to three system options and an estimated budget. Phase 2 is engineering coordination with the MEP team, contractors, and controls. Phase 3 is procurement support and commissioning. We still do not sell the hardware. Phase 4 is optional monitoring and warranty. Each phase is a separate agreement.',
        },
        {
          q: 'How is a pilot system monitored?',
          a: 'Exergy Relay is how we watch a pilot: alerts, a view of performance, and a regular report. It is part of running the pilot, not an add-on for sale. The arrangement is a 5% hashrate split. The rest of the hashrate is yours. It is not a subscription catalog item.',
        },
        {
          q: 'Are you outside Colorado?',
          a: 'Commercial phases are coordinated remotely with the project team, wherever the building is. Say so in the Phase 0 note if the site is outside the US — we have not published a foreign-project policy. Residential guidance is remote anywhere in the US. Hands-on residential work is within about 100 miles of Denver.',
        },
        {
          q: 'How do I start?',
          a: 'Commercial buildings: send utility bills and start Phase 0. Manufacturers: talk partnership. Houses: apply for the pilot. If you are not sure which door is yours, book the free 15-minute intro call and we will point you at one of them. The calculators and integrations are free if you want to look before any of that.',
        },
      ],
    },
    {
      id: 'technical',
      title: 'How the Systems Behave',
      questions: [
        {
          q: 'Does a bitcoin miner actually heat a building?',
          a: 'Yes. In the Colorado mountain home pilot, one miner carried almost the entire heating season and the gas furnace barely ran. The miner is sized to the typical load, not the coldest hour. The existing plant stays as backup and covers the peak. That house is a pilot, not a guarantee for the next building.',
        },
        {
          q: 'How does it sit with the heating system I have?',
          a: 'Hydronic: the miner adds heat to the water loop and the boiler sees warmer return water. Forced air: heat is delivered into the duct the air handler already uses. In both cases the miner is the first stage and the existing equipment is the backup. We do not rip out a working plant to make a point.',
        },
        {
          q: 'Is it noisy?',
          a: 'A hydronic integration keeps the miner in the mechanical space and moves heat with a circulator, so occupied rooms stay quiet. A forced-air integration sounds like the air handler it works with. A miner used as a zone heater is in the room, and it is closer to equipment than to silence. We are not publishing a decibel number in this draft.',
        },
        {
          q: 'What controls it?',
          a: 'Home Assistant, running locally. Our integrations are open source and free to install through HACS. They speak to miners and pool software including Braiins OS, LuxOS, Whatsminer, BitAxe, Ocean, Public Pool, and DATUM. Pilot systems also get an open-source control hub that we install to tie the miner, the thermostat, and the monitoring together. That hub is not a product.',
        },
        {
          q: 'What are the operating modes?',
          a: 'Mode 1, Mine to Heat: the miner runs when the building calls for heat. Mode 2, Solar First: surplus solar is absorbed before grid power is bought for hashing. Mode 3, Cheapest BTU: the controls pick the lowest-cost heat source from the inputs they can see. Mode 4, Always On: the miner runs for hashrate and heat is the byproduct. Most buildings use more than one mode across the year.',
        },
        {
          q: 'Does this work with solar?',
          a: 'Yes, and we keep it separate from the heating result. When the array makes more than the building is using, that surplus can be hashed instead of exported. In the solar home pilot the same kilowatt-hours were worth 3.3× the export credit. Your multiple depends on your export rate. The heating season and the solar surplus are different seasons of the same machine, not one blended claim.',
        },
      ],
    },
  ]

  const toggleSection = (sectionId: string) => {
    setOpenSections((prev) => {
      const next = new Set(prev)
      if (next.has(sectionId)) next.delete(sectionId)
      else next.add(sectionId)
      return next
    })
  }

  const filteredSections = faqSections
    .map((section) => ({
      ...section,
      questions: section.questions.filter(
        (q) =>
          q.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
          q.a.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter((section) => section.questions.length > 0)

  return (
    <div className="bg-surface-50 dark:bg-surface-900 min-h-screen">
      <Helmet>
        <title>FAQ | Exergy</title>
        <meta
          name="description"
          content="Questions about commercial building-integrated mining, manufacturer advisory, the residential pilot, and why Exergy does not sell hardware. Engagements are scoped per project."
        />
        <link rel="canonical" href="https://exergyheat.com/faq" />
        <meta property="og:title" content="FAQ | Exergy" />
        <meta
          property="og:description"
          content="Commercial fit, manufacturer partnerships, the residential pilot, and why Exergy sells no hardware."
        />
        <meta property="og:url" content="https://exergyheat.com/faq" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://exergyheat.com/og-image.jpg" />
        <meta name="twitter:title" content="FAQ | Exergy" />
        <meta
          name="twitter:description"
          content="Commercial fit, manufacturer partnerships, the residential pilot, and why Exergy sells no hardware."
        />
        <meta name="twitter:image" content="https://exergyheat.com/og-image.jpg" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqSections.flatMap((section) =>
              section.questions.map((item) => ({
                '@type': 'Question',
                name: item.q,
                acceptedAnswer: { '@type': 'Answer', text: item.a },
              }))
            ),
          })}
        </script>
      </Helmet>

      <div className="bg-gradient-to-r from-[#4970A5] to-[#718EBC] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MessageCircle className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Commercial buildings first, then manufacturers, then the residential pilot. No price list.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="bg-white dark:bg-surface-800 rounded-lg shadow-lg p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-surface-400" />
            <input
              type="text"
              placeholder="Search questions..."
              aria-label="Search questions"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-surface-300 dark:border-surface-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100"
            />
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <ReviewTodo>
          Confirm operating-mode numbers. This draft uses Mode 1 Mine to Heat, Mode 2 Solar First, Mode 3 Cheapest BTU, Mode 4 Always On. The commercial office had been labeled Mode 2 Cheapest BTU while the all-electric pilot was Mode 3 Cheapest BTU. Both Cheapest BTU installs are now Mode 3. Say if the numbering should be the other way around.
        </ReviewTodo>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {filteredSections.map((section) => (
          <div key={section.id} className="mb-8">
            <button
              onClick={() => toggleSection(section.id)}
              className="w-full flex items-center justify-between bg-white dark:bg-surface-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h2 className="text-2xl font-semibold text-surface-900 dark:text-surface-100">{section.title}</h2>
              {openSections.has(section.id) ? (
                <Minus className="h-6 w-6 text-primary-500 dark:text-primary-400 flex-shrink-0" />
              ) : (
                <Plus className="h-6 w-6 text-primary-500 dark:text-primary-400 flex-shrink-0" />
              )}
            </button>

            {openSections.has(section.id) && (
              <div className="mt-4 space-y-4">
                {section.questions.map((qa) => (
                  <div key={qa.q} className="bg-white dark:bg-surface-800 rounded-lg shadow-md p-6">
                    <h3 className="text-lg font-semibold text-surface-900 dark:text-surface-100 mb-3">{qa.q}</h3>
                    <p className="text-surface-600 dark:text-surface-400">{qa.a}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="bg-white dark:bg-surface-800 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-surface-900 dark:text-surface-100 mb-6">Still have questions?</h2>
          <p className="text-xl text-surface-600 dark:text-surface-400 mb-8">
            Pick the door that matches the work. The 15-minute intro call is free if you are not sure which door.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-base font-subheading"
            >
              Contact
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/book-call"
              className="inline-flex items-center px-8 py-4 border border-primary-600 text-primary-700 dark:text-primary-300 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/30 transition-colors text-base font-subheading"
            >
              Book a 15-minute call
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQ
