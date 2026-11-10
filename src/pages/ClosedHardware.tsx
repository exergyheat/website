import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import PageHero from '../components/PageHero'
import ReviewTodo from '../components/ReviewTodo'

const ClosedHardware = () => {
  return (
    <div className="bg-surface-50 dark:bg-surface-900">
      <Helmet>
        <title>Why Mining Hardware Is Closed | Exergy</title>
        <meta
          name="description"
          content="Why bitcoin mining hardware is closed-source and hard to integrate into buildings, and how an open stack changes the interface to thermostats, HVAC, and solar inverters."
        />
        <link rel="canonical" href="https://exergyheat.com/learn/why-mining-hardware-is-closed" />
        <meta property="og:title" content="Why Mining Hardware Is Closed | Exergy" />
        <meta
          property="og:description"
          content="Miners were built for data halls. Closed firmware and proprietary designs are why they do not plug into buildings. Open source is the way through."
        />
        <meta property="og:url" content="https://exergyheat.com/learn/why-mining-hardware-is-closed" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://exergyheat.com/og-image.jpg" />
        <meta name="twitter:title" content="Why Mining Hardware Is Closed | Exergy" />
        <meta
          name="twitter:description"
          content="Why bitcoin miners are hard to put in a building, and what an open stack changes."
        />
        <meta name="twitter:image" content="https://exergyheat.com/og-image.jpg" />
      </Helmet>

      <PageHero
        eyebrow="Learn"
        title="Why mining hardware is closed, and hard to put in a building"
        lede="A bitcoin miner can heat a building. The industry that builds miners mostly will not let you treat one like building equipment. Open source is how that changes."
      />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-6 text-surface-700 dark:text-surface-300 leading-relaxed">
        <p>
          Every watt a bitcoin miner draws becomes heat. That part is physics, and it is why a miner can stand in for electric heat in a hydronic loop or a forced-air system. The difficult part is everything around the watt: how the machine is controlled, who is allowed to change it, and whether a building&apos;s thermostat, air handler, boiler, or solar inverter can tell it what to do.
        </p>

        <h2 className="text-2xl font-bold text-surface-900 dark:text-surface-100 pt-4">Built for a data hall</h2>
        <p>
          The miners on the market were designed to sit in racks, at industrial density, on industrial power, talking to pool software the manufacturer expects. Form factor, acoustics, service access, and network assumptions all follow from that. A mechanical room is the opposite brief. It wants a machine that can follow a heat call, idle when the building is satisfied, and dump or recover heat without a technician on site. Almost nothing shipping today was drawn for that room.
        </p>

        <h2 className="text-2xl font-bold text-surface-900 dark:text-surface-100 pt-4">Closed means you cannot finish the integration</h2>
        <p>
          Firmware on most miners is proprietary. You often cannot audit it, pin it, or extend it when a building needs a behavior the vendor did not ship. APIs, when they exist, are whatever that generation of machine happened to expose. The next model may speak a different dialect. Heating infrastructure is supposed to last decades. A closed miner generation lasts as long as the vendor feels like supporting it.
        </p>
        <p>
          That shows up on the job in ordinary ways. A thermostat wants a heat stage. An inverter wants a load that can track surplus. A boiler plant wants a return-water temperature. A closed miner wants a pool username and a power limit. Someone has to stand between those sentences. Today that someone is an integrator with a pile of one-off glue. That glue is fragile, and it does not transfer to the next manufacturer&apos;s box.
        </p>

        <h2 className="text-2xl font-bold text-surface-900 dark:text-surface-100 pt-4">The market is concentrated, and so are the rules</h2>
        <p>
          A small number of manufacturers and pool operators carry most of the world&apos;s hashrate. When the interface is proprietary, a building design inherits that concentration. Change vendors and you redesign the controls. The regulatory side is its own hurdle: a machine that is happy in a data hall still has to satisfy the electrical gear, the mechanical code, and the listing expectations of a building. There is no shared, open pattern for &quot;this miner is a heating appliance&quot; the way there is for a boiler.
        </p>
        <ReviewTodo>
          The February 2026 board note cites roughly 90% of mining hardware and firmware with one manufacturer, and roughly 90% of hashrate with four pool operators. Confirm those figures are still fair before this page treats them as current.
        </ReviewTodo>

        <h2 className="text-2xl font-bold text-surface-900 dark:text-surface-100 pt-4">What open source changes</h2>
        <p>
          An open stack gives a building a stable interface instead of a vendor dialect. The 256 Foundation, a nonprofit, funds that stack: Ember One as an open hashboard reference, Mujina as open firmware, Libre Board as an open control board that can sit with Home Assistant, and Hydrapool as open pool software. Exergy&apos;s founder and CEO, Tyler Stevens, is president of that board. Exergy the company does not own the foundation, and we do not sell the hardware the foundation&apos;s designs make possible.
        </p>
        <p>
          What we publish ourselves is the building side of the same idea. Home Assistant integrations, free and open source, so a miner can follow heat and solar with local control. On residential pilot systems we install an open-source control hub to tie those pieces together. The hub is how a pilot is run. It is not a product.
        </p>
        <p>
          Open source does not remove the electrician, the mechanical code, or the need to commission a plant. It removes the part where every building is stuck waiting on a closed firmware team to care about a thermostat.
        </p>

        <h2 className="text-2xl font-bold text-surface-900 dark:text-surface-100 pt-4">What we do about it</h2>
        <p>
          For a building owner, the practical path is still a phased commercial engagement: start with utility bills, not with a parts order. For a manufacturer who wants into buildings, the advisory practice exists because the integration problem is real and we have field scars from it. For anyone who wants to try the controls, the tools are free.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 pt-4">
          <Link
            to="/open-tools"
            className="inline-flex items-center justify-center px-5 py-3 bg-primary-600 text-white rounded-lg font-subheading hover:bg-primary-700"
          >
            Use the open tools
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <Link
            to="/services/advisory"
            className="inline-flex items-center justify-center px-5 py-3 border border-primary-600 text-primary-700 dark:text-primary-300 rounded-lg font-subheading hover:bg-primary-50 dark:hover:bg-primary-900/40"
          >
            Manufacturer advisory
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
        <p className="text-sm">
          <Link to="/learn" className="text-primary-600 dark:text-primary-400 hover:underline">
            Back to Learn
          </Link>
        </p>
      </article>
    </div>
  )
}

export default ClosedHardware
