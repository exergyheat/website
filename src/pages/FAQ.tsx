import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Plus, Minus, Search, MessageCircle, ArrowRight } from 'lucide-react'

const FAQ = () => {
  const [openSections, setOpenSections] = useState<Set<string>>(
    new Set(['basics', 'results', 'economics', 'technical', 'working'])
  )
  const [searchQuery, setSearchQuery] = useState('')

  const faqSections = [
    {
      id: 'basics',
      title: 'The Basics',
      questions: [
        {
          q: 'What is building-integrated mining?',
          a: 'Building-integrated mining means using Bitcoin miners as your building\'s heating infrastructure — not as a side project, but as the primary heat source. Bitcoin miners convert electricity into heat with 100% efficiency, the same as any electric heater. The difference: miners also earn Bitcoin for the electricity they consume. Every joule becomes heat AND sats. No waste, no separate cost.'
        },
        {
          q: 'Do I need to understand Bitcoin to use this?',
          a: 'No. You need to understand that your heating system earns you something instead of nothing. Whether you think of that as Bitcoin, digital cash, or just a heating rebate is up to you. We can set up payouts in ways that feel familiar — including converting earnings to dollars automatically. The Bitcoin is the mechanism. The heat is the product.'
        },
        {
          q: 'Is this the same as a space heater?',
          a: 'Conceptually, yes — every watt of electricity becomes heat. But building-integrated mining goes further: the miner connects to your existing heating distribution (ductwork, radiant floors, hydronic loops, pool systems) rather than just heating one room. It responds to your thermostat, tracks your solar generation, and switches operating modes based on real-time economics. A space heater doesn\'t have an API. This does.'
        },
        {
          q: 'Why Bitcoin and not another cryptocurrency?',
          a: 'Bitcoin is the only proof-of-work network large enough and stable enough to support a heating use case at scale. The reward is proportional to energy contributed — which tracks directly with heat demand. No other network has the same combination of decentralization, longevity, and energy-to-reward relationship. It\'s also the most widely held and understood.'
        },
        {
          q: 'Is it bad for the environment?',
          a: 'Building-integrated mining displaces fossil fuel heating with electric heating that earns money. If you replace a propane furnace, you eliminate propane combustion entirely. The electricity used is 100% converted to heat — nothing wasted. And the Bitcoin earnings offset the electric cost, often dramatically. For solar owners, the miner converts curtailed solar generation (energy that would otherwise go to the grid at a loss) into Bitcoin directly.'
        }
      ]
    },
    {
      id: 'results',
      title: 'Does It Actually Work?',
      questions: [
        {
          q: 'Does a Bitcoin miner heat as well as a furnace?',
          a: 'It heats differently, but effectively. In our Colorado Mountain Home install, a single 4,000W miner handled 98.6% of the home\'s heat demand over a 43-day heating season — the gas furnace only ran for 4.4 hours total. The miner runs at longer duty cycles than a gas furnace (it\'s smaller in BTU terms), which actually keeps temperatures more stable. The backup furnace exists for peak cold days.'
        },
        {
          q: 'What happens on the coldest days?',
          a: 'The miner is sized to handle the average heat load, not the peak. On the coldest days, a backup system (your existing furnace, boiler, or electric resistance) picks up the difference. This is intentional — it\'s called the buddy system. The miner runs as many hours as possible at high duty cycle; backup handles the peaks. Across every install, the backup system rarely fired.'
        },
        {
          q: 'How does this interact with my existing heating system?',
          a: 'The miner integrates as stage 1 heat. Your existing furnace or boiler becomes stage 2 backup. Home Assistant controls the sequencing: when the thermostat calls for heat, the miner fires first. If the miner can\'t maintain setpoint (coldest days only), the backup fires. Your existing system stays in place — it\'s still there when you need it.'
        },
        {
          q: 'Is it noisy?',
          a: 'Liquid-cooled systems (like the HS05 boiler) are nearly silent — the miner itself makes no noise, only the water circulator pump runs. Air-cooled miners are similar in noise level to a forced-air furnace fan. For in-duct installations, the miner sits in the mechanical room and the ductwork distributes heat silently. For zone space heaters, noise levels are around 45dB — comparable to a quiet conversation.'
        },
        {
          q: 'What\'s the maintenance like?',
          a: 'Miners have fewer moving parts than a furnace — no combustion, no heat exchanger to crack, no gas valves. Primary maintenance is air filter cleaning (for air-cooled units) and periodic firmware updates. Our Exergy Relay monitoring service watches for performance degradation and alerts you before you notice a problem. Most customers go months without touching the system.'
        }
      ]
    },
    {
      id: 'economics',
      title: 'The Economics',
      questions: [
        {
          q: 'Will my electric bill go up?',
          a: 'Yes — and that\'s expected. Here\'s the full picture: your electric bill goes up, your gas or propane bill drops to near-zero, and you accumulate Bitcoin. Whether the net position is better or worse than today depends on your current fuel costs and what you do with the Bitcoin. For customers on expensive propane or heating oil, the net result is often strongly positive even before counting Bitcoin. For natural gas customers with cheap rates, it\'s better framed as a Bitcoin stacking strategy than a savings play. Our Exergy Audit shows you exactly where you land before you commit to anything.'
        },
        {
          q: 'What\'s a realistic ROI?',
          a: 'It varies significantly based on your current fuel, electricity rate, and Bitcoin price. Our calculators at calc.exergyheat.com let you run the math with your actual inputs. Real results from our installs: the all-electric mountain home achieved a 45% reduction in effective heating cost ($0.049/kWh vs $0.09/kWh straight electric resistance). The solar home earned 3.3× more value from excess solar routed through the miner versus exported to the grid — at their $0.01/kWh net metering rate, one of the weakest possible deals. Your actual advantage depends on your local net metering rate. An Exergy Audit gives you a personalized monthly model.'
        },
        {
          q: 'Do Bitcoin earnings slow down over time?',
          a: 'Yes — as the Bitcoin network grows and difficulty increases, each terahash earns slightly less Bitcoin over time. This is a known dynamic. The counter-forces: Bitcoin\'s price has historically appreciated, and building-integrated miners are insulated from the industrial profitability pressure that shuts down data center miners (your miner just needs to be useful, not profitable). Think of it like a Framework laptop — the chassis lasts, you upgrade the compute when the economics call for it.'
        },
        {
          q: 'Can I get paid in dollars instead of Bitcoin?',
          a: 'Yes. We can configure payouts to convert automatically to USD, or blend Bitcoin and USD. If you\'d rather see a heating rebate than accumulate Bitcoin, that\'s a valid choice. We do recommend holding at least some Bitcoin — historically the appreciation has made a meaningful difference to total returns — but it\'s your system and your choice.'
        },
        {
          q: 'What does Exergy Relay cost?',
          a: 'Exergy Relay costs a 5% hashrate split — five cents of every dollar your system earns goes to Exergy, and the other 95% goes directly to your wallet. No subscription, no invoice, no credit card. The system pays for its own monitoring. If your miner earns $200/month, Relay costs you $10 — and in exchange you get remote monitoring, automated alerts, a monthly performance report, and priority support. You can disable it at any time; your system continues heating and mining normally without it.'
        }
      ]
    },
    {
      id: 'technical',
      title: 'Technical Setup',
      questions: [
        {
          q: 'What is Home Assistant and do I need it?',
          a: 'Home Assistant is open-source smart home software that runs on local hardware — no cloud, no subscription. It\'s the control layer for every Exergy system: it reads your thermostat, tracks solar generation, monitors miner performance, and makes real-time decisions about when to heat and when to mine. For Self-Serve customers doing their own install, you set it up yourself. For Guided and Done-For-You customers, we configure it as part of the service.'
        },
        {
          q: 'What is the CTRL1 Hub?',
          a: 'The CTRL1 is Exergy\'s purpose-built Home Assistant control hub — a Raspberry Pi 5 with Zigbee antenna, NVMe SSD, and aluminum case, pre-loaded with Exergy\'s open-source integrations. You plug it in, it shows your network IP on the display, and you\'re into Home Assistant with Exergy\'s miner integrations already installed. It\'s the brain of every Exergy install. Currently it comes included in Tier 2 and Tier 3 service installs — standalone purchase is coming soon.'
        },
        {
          q: 'What are the five ways to integrate a miner into a building?',
          a: '1) Smart Zone Heaters — standalone miners as space heaters per zone, no plumbing. 2) In-Duct (Forced Air) — miner in the HVAC return duct, air handler distributes heat. 3) Hydronic/Radiant — miner heats a water loop for radiant floors or baseboard heat. 4) Water, Pool & Spa — dedicated miner heats pools, hot tubs, or domestic water. 5) Excess Solar — miner as a dispatchable load that absorbs excess solar generation before it goes to the grid.'
        },
        {
          q: 'What are the four operating modes?',
          a: 'Mine to Heat — miner runs whenever heat is called, regardless of economics (maximizes Bitcoin accumulation). Cheapest BTU — system picks the lowest-cost heat source in real time (gas vs. electric vs. miner) based on live pricing. Solar First — miner prioritizes absorbing excess solar generation before buying grid power. Always On — miner runs continuously, heat is the byproduct (for customers who want maximum hashrate uptime). Most systems use a combination of modes depending on time of day and season.'
        },
        {
          q: 'Does this work with solar panels?',
          a: 'Yes — solar integration is one of the strongest use cases. When your solar array produces more power than your building uses, that excess typically goes to the grid at low net-metering rates (sometimes as low as $0.01/kWh). Routing that same power through the miner earns Bitcoin at a rate that was 3.3× more valuable than grid export in our Solar Home case study, where the net metering rate was $0.01/kWh — a particularly weak deal. At higher net metering rates the gap narrows, at lower rates it widens. The miner also throttles its wattage to exactly match surplus generation, so nothing is wasted and nothing goes to the grid at a loss.'
        }
      ]
    },
    {
      id: 'working',
      title: 'Working With Exergy',
      questions: [
        {
          q: 'How do I know if my building is a good fit?',
          a: 'Start with our free calculator at calc.exergyheat.com — it runs your heating load, electricity rate, and solar inputs through the same model we use internally. Strong fits: buildings on propane, heating oil, or expensive electric resistance heat. Buildings with solar and low net-metering rates. Buildings with sustained heat loads (pools, hot tubs, radiant floors, large spaces). Weaker fits: cheap natural gas with high electricity rates, heat pumps in mild climates, buildings that rarely need heat.'
        },
        {
          q: 'What does the Exergy Audit include?',
          a: 'A monthly-resolution thermo-economic model of your building: heat load by month using heating degree days, Bitcoin mining economics at current network conditions, optimal system sizing, estimated Bitcoin earnings, estimated savings vs. your current heating, and ROI projections. You walk away with a clear picture of what system fits your building, what it will cost, and what you\'ll earn. Residential audits are $500, commercial are $2,500. The audit fee is credited toward hardware if you proceed.'
        },
        {
          q: 'Are you available outside of Colorado?',
          a: 'Exergy Audit and Guided services are available anywhere — we deliver reports and consult remotely, and hardware ships anywhere in the US. Done-For-You installation is local only, within ~100 miles of Denver. If you\'re outside that radius, we\'ll help you find and train a local HVAC contractor, or guide you and your own trades through the install remotely.'
        },
        {
          q: 'What does a typical Done-For-You install look like?',
          a: 'It starts with an Exergy Audit (or we use one you already have). We design the integration, specify all hardware, and coordinate the trades: HVAC for ductwork or hydronic connections, electrician for 240V circuit, low-voltage for networking and controls. We deliver the hardware, oversee the mechanical install, configure Home Assistant and the CTRL1 Hub, and bring the system fully online. Most installs take 1–2 days on-site.'
        },
        {
          q: 'How do I get started?',
          a: 'Four paths: 1) Run the calculator yourself at calc.exergyheat.com — it tells you if you\'re a fit and what the economics look like. 2) Join our free weekly office hours — Wednesdays at 10am Mountain Time at meet.jit.si/ExergyHomeAssistant. Ask anything, no commitment. 3) Book a free 15-minute intro call — we\'ll ask a few questions and tell you which tier makes sense. 4) Contact us directly with your situation and we\'ll route you to the right next step.'
        }
      ]
    }
  ]

  const toggleSection = (sectionId: string) => {
    setOpenSections(prev => {
      const next = new Set(prev)
      if (next.has(sectionId)) {
        next.delete(sectionId)
      } else {
        next.add(sectionId)
      }
      return next
    })
  }

  const filteredSections = faqSections.map(section => ({
    ...section,
    questions: section.questions.filter(q =>
      q.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.a.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(section => section.questions.length > 0)

  return (
    <div className="bg-surface-50 dark:bg-surface-900 min-h-screen">
      <Helmet>
        <title>EXERGY | FAQ — Building-Integrated Mining Questions Answered</title>
        <meta name="description" content="Real Q&amp;A about building-integrated mining: how it works, what it costs, ROI, technical setup, and whether your building is a good fit." />
        <link rel="canonical" href="https://exergyheat.com/faq" />
        <meta property="og:title" content="FAQ | Building-Integrated Mining — Exergy" />
        <meta property="og:description" content="Real Q&amp;A about building-integrated mining: how it works, what it costs, ROI, technical setup, and whether your building is a good fit." />
        <meta property="og:url" content="https://exergyheat.com/faq" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="FAQ | Building-Integrated Mining — Exergy" />
        <meta name="twitter:description" content="Real Q&amp;A about building-integrated mining: how it works, what it costs, ROI, and whether your building is a good fit." />
        <meta name="keywords" content="building-integrated mining FAQ, bitcoin miner heater questions, EXERGY FAQ, hashrate heating answers, bitcoin heating system, CTRL1 hub, Exergy Relay" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqSections.flatMap(section =>
              section.questions.map(item => ({
                "@type": "Question",
                "name": item.q,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": item.a
                }
              }))
            )
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#4970A5] to-[#718EBC] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MessageCircle className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Real questions from real customers — answered honestly.
          </p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="bg-white dark:bg-surface-800 rounded-lg shadow-lg p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-surface-400" />
            <input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-surface-300 dark:border-surface-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100"
            />
          </div>
        </div>
      </div>

      {/* FAQ Sections */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {filteredSections.map((section) => (
          <div key={section.id} className="mb-8">
            <button
              onClick={() => toggleSection(section.id)}
              className="w-full flex items-center justify-between bg-white dark:bg-surface-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h2 className="text-2xl font-semibold text-surface-900 dark:text-surface-100">
                {section.title}
              </h2>
              {openSections.has(section.id) ? (
                <Minus className="h-6 w-6 text-primary-500 dark:text-primary-400 flex-shrink-0" />
              ) : (
                <Plus className="h-6 w-6 text-primary-500 dark:text-primary-400 flex-shrink-0" />
              )}
            </button>

            {openSections.has(section.id) && (
              <div className="mt-4 space-y-4">
                {section.questions.map((qa, index) => (
                  <div key={index} className="bg-white dark:bg-surface-800 rounded-lg shadow-md p-6">
                    <h3 className="text-lg font-semibold text-surface-900 dark:text-surface-100 mb-3">
                      {qa.q}
                    </h3>
                    <p className="text-surface-600 dark:text-surface-400">
                      {qa.a}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Contact Section */}
      <div className="bg-white dark:bg-surface-800 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-surface-900 dark:text-surface-100 mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl text-surface-600 dark:text-surface-400 mb-8">
            Our team is here to help you with any questions you might have about our technology.
          </p>
          <div className="mb-6">
            <a
              href="https://support.exergyheat.com/c/faq/5"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-surface-100 dark:bg-surface-700 text-surface-900 dark:text-surface-100 rounded-lg hover:bg-surface-200 dark:hover:bg-surface-600 transition-colors text-base font-subheading"
            >
              See more FAQ on the Exergy Forum
            </a>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-base font-subheading"
            >
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="/book-call"
              className="inline-flex items-center px-8 py-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-base font-subheading"
            >
              Book an Intro Call
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQ
