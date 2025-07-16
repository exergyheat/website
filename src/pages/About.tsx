import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Users, Target, Lightbulb, X, Search, Wrench, Activity, Headphones } from 'lucide-react'

const About = () => {
  const [selectedModal, setSelectedModal] = useState<string | null>(null)

  const team = [
    {
      name: 'Tyler Stevens',
      role: 'CEO & Chief Engineer',
      image: '/TylerS_headshot.png',
      bio: 'Thermal engineer and Bitcoin advocate leading the hashrate heating revolution.'
    },
    {
      name: 'Dylan S',
      role: 'COO & CFO',
      image: '/DylanS_headshot.jpeg',
      bio: 'Operations and finance expert ensuring sustainable growth and customer success.'
    },
    {
      name: 'Mike C',
      role: 'CRO',
      image: '/MikeC_headshot.png',
      bio: 'Revenue and partnerships leader expanding hashrate heating adoption.'
    }
  ]

  const processSteps = [
    {
      id: 'audit',
      title: 'Heat Audit & Feasibility',
      description: 'We analyze your heating needs and calculate potential savings and ROI.',
      icon: Search,
      modalContent: `
        <div class="space-y-6">
          <div>
            <h3 class="text-xl font-semibold text-surface-900 dark:text-surface-100 mb-4">Heat Audit Process</h3>
            <p class="text-surface-600 dark:text-surface-400 mb-4">Our comprehensive heat audit analyzes your current heating system and calculates the potential for hashrate heating integration.</p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 class="text-lg font-semibold text-surface-900 dark:text-surface-100 mb-3">Analysis Includes</h4>
              <ul class="space-y-2 text-surface-600 dark:text-surface-400">
                <li>• Current heating costs and usage patterns</li>
                <li>• Building specifications and heat load calculations</li>
                <li>• Local energy rates and utility structures</li>
                <li>• Bitcoin mining profitability projections</li>
                <li>• System integration requirements</li>
              </ul>
            </div>
            
            <div>
              <h4 class="text-lg font-semibold text-surface-900 dark:text-surface-100 mb-3">Deliverables</h4>
              <ul class="space-y-2 text-surface-600 dark:text-surface-400">
                <li>• Detailed feasibility report</li>
                <li>• ROI calculations and payback period</li>
                <li>• System sizing recommendations</li>
                <li>• Implementation roadmap</li>
                <li>• Cost-benefit analysis</li>
              </ul>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'procurement',
      title: 'Hardware Procurement',
      description: 'We source and procure the optimal hashrate heating hardware for your specific application.',
      icon: Wrench,
      modalContent: `
        <div class="space-y-6">
          <div>
            <h3 class="text-xl font-semibold text-surface-900 dark:text-surface-100 mb-4">Hardware Solutions</h3>
            <p class="text-surface-600 dark:text-surface-400 mb-6">Exergy offers hardware solutions for a variety of heating systems and applications.</p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 class="text-lg font-semibold text-primary-600 dark:text-primary-400 mb-4">Currently Offering</h4>
              <div class="space-y-4">
                <div>
                  <h5 class="font-semibold text-surface-900 dark:text-surface-100">Space Heaters</h5>
                  <p class="text-sm text-surface-600 dark:text-surface-400">Room Heating</p>
                </div>
                <div>
                  <h5 class="font-semibold text-surface-900 dark:text-surface-100">Hydronic Boilers</h5>
                  <p class="text-sm text-surface-600 dark:text-surface-400">Radiant Baseboards and Floor Heating</p>
                </div>
                <div>
                  <h5 class="font-semibold text-surface-900 dark:text-surface-100">Commercial & Industrial Boilers</h5>
                  <p class="text-sm text-surface-600 dark:text-surface-400">Radiant Heating for Large Applications</p>
                </div>
              </div>
            </div>
            
            <div>
              <h4 class="text-lg font-semibold text-secondary-600 dark:text-secondary-400 mb-4">Coming Soon</h4>
              <div class="space-y-4">
                <div>
                  <h5 class="font-semibold text-surface-900 dark:text-surface-100">Forced Air Furnaces</h5>
                  <p class="text-sm text-surface-600 dark:text-surface-400">HVAC Duct Heating</p>
                </div>
                <div>
                  <h5 class="font-semibold text-surface-900 dark:text-surface-100">Hot Water Heaters</h5>
                  <p class="text-sm text-surface-600 dark:text-surface-400">Domestic Water Tank Heating</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'installation',
      title: 'Installation & Integration',
      description: 'Professional installation and seamless integration with your existing heating infrastructure.',
      icon: Activity,
      modalContent: `
        <div class="space-y-6">
          <div>
            <h3 class="text-xl font-semibold text-surface-900 dark:text-surface-100 mb-4">Installation Process</h3>
            <p class="text-surface-600 dark:text-surface-400 mb-4">Our certified technicians ensure seamless integration of your hashrate heating system.</p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 class="text-lg font-semibold text-surface-900 dark:text-surface-100 mb-3">Installation Steps</h4>
              <ul class="space-y-2 text-surface-600 dark:text-surface-400">
                <li>• Site preparation and safety assessment</li>
                <li>• Hardware installation and positioning</li>
                <li>• Electrical and network connections</li>
                <li>• System integration and testing</li>
                <li>• Performance optimization</li>
              </ul>
            </div>
            
            <div>
              <h4 class="text-lg font-semibold text-surface-900 dark:text-surface-100 mb-3">Quality Assurance</h4>
              <ul class="space-y-2 text-surface-600 dark:text-surface-400">
                <li>• Comprehensive system testing</li>
                <li>• Performance verification</li>
                <li>• Safety compliance checks</li>
                <li>• Customer training and handover</li>
                <li>• Warranty activation</li>
              </ul>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'monitoring',
      title: 'Monitoring & Support',
      description: 'Ongoing monitoring, maintenance, and support to ensure optimal performance and maximum earnings.',
      icon: Headphones,
      modalContent: `
        <div class="space-y-6">
          <div>
            <h3 class="text-xl font-semibold text-surface-900 dark:text-surface-100 mb-4">Ongoing Support</h3>
            <p class="text-surface-600 dark:text-surface-400 mb-4">Our comprehensive monitoring and support services ensure your system operates at peak performance.</p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 class="text-lg font-semibold text-surface-900 dark:text-surface-100 mb-3">24/7 Monitoring</h4>
              <ul class="space-y-2 text-surface-600 dark:text-surface-400">
                <li>• Real-time performance tracking</li>
                <li>• Automated alert systems</li>
                <li>• Predictive maintenance scheduling</li>
                <li>• Remote diagnostics and troubleshooting</li>
                <li>• Performance optimization recommendations</li>
              </ul>
            </div>
            
            <div>
              <h4 class="text-lg font-semibold text-surface-900 dark:text-surface-100 mb-3">Support Services</h4>
              <ul class="space-y-2 text-surface-600 dark:text-surface-400">
                <li>• Technical support hotline</li>
                <li>• Regular maintenance visits</li>
                <li>• Software updates and upgrades</li>
                <li>• Performance reporting</li>
                <li>• Emergency response service</li>
              </ul>
            </div>
          </div>
        </div>
      `
    }
  ]

  const values = [
    {
      icon: Target,
      title: 'Innovation',
      description: 'Pioneering the future of heating technology through Bitcoin integration'
    },
    {
      icon: Users,
      title: 'Customer Success',
      description: 'Dedicated to maximizing your savings and system performance'
    },
    {
      icon: Lightbulb,
      title: 'Sustainability',
      description: 'Creating efficient, profitable, and environmentally conscious heating solutions'
    }
  ]

  useEffect(() => {
    // Check if HubSpot script is already loaded
    const existingScript = document.querySelector('script[src*="hsforms.net"]')
    
    if (!existingScript) {
      // Create and load the HubSpot script
      const script = document.createElement('script')
      script.src = 'https://js-na2.hsforms.net/forms/embed/243159145.js'
      script.defer = true
      document.body.appendChild(script)

      // Initialize the form after script loads
      script.onload = () => {
        if (window.hbspt) {
          window.hbspt.forms.create({
            region: "na2",
            portalId: "243159145",
            formId: "106749ae-0515-4d1a-925d-edf71b3bfcae",
            target: "#hubspot-form-container"
          })
        }
      }
    } else if (window.hbspt) {
      // If script already exists and hbspt is available, just create the form
      window.hbspt.forms.create({
        region: "na2",
        portalId: "243159145",
        formId: "106749ae-0515-4d1a-925d-edf71b3bfcae",
        target: "#hubspot-form-container"
      })
    }

    // Cleanup function to remove script when component unmounts
    return () => {
      const scriptToRemove = document.querySelector('script[src*="hsforms.net"]')
      if (scriptToRemove) {
        document.body.removeChild(scriptToRemove)
      }
    }
  }, [])

  const openModal = (stepId: string) => {
    setSelectedModal(stepId)
  }

  const closeModal = () => {
    setSelectedModal(null)
  }

  const selectedStep = processSteps.find(step => step.id === selectedModal)

  return (
    <div className="bg-surface-50 dark:bg-surface-900">
      {/* Hero Section with Custom Gradient */}
      <div className="bg-gradient-to-r from-[#4970A5] to-[#718EBC] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About EXERGY
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              We're building the future of heating - where every watt pays
            </p>
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="py-20 bg-white dark:bg-surface-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-surface-900 dark:text-surface-100 mb-8">
            Our Mission
          </h2>
          <p className="text-xl text-surface-600 dark:text-surface-400 leading-relaxed">
            To revolutionize heating by making it profitable. We believe every home and business should benefit 
            from the heat they generate, turning a necessary expense into a revenue stream through Bitcoin mining integration.
          </p>
        </div>
      </div>

      {/* Our Process */}
      <div className="py-20 bg-surface-50 dark:bg-surface-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-surface-900 dark:text-surface-100 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-surface-600 dark:text-surface-400">
              From analysis to implementation, we handle every step
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={step.id} className="bg-white dark:bg-surface-800 rounded-lg shadow-lg p-6 relative">
                <div className="flex items-center justify-center w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg mb-4">
                  <step.icon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-lg font-semibold text-surface-900 dark:text-surface-100 mb-2">
                  {step.title}
                </h3>
                <p className="text-surface-600 dark:text-surface-400 mb-4">
                  {step.description}
                </p>
                <button
                  onClick={() => openModal(step.id)}
                  className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                >
                  <span className="mr-2">Example</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-surface-300 dark:text-surface-600" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedModal && selectedStep && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-surface-900 opacity-75"></div>
            </div>

            <div className="inline-block align-bottom bg-white dark:bg-surface-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
              <div className="bg-white dark:bg-surface-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold text-surface-900 dark:text-surface-100">
                    {selectedStep.title}
                  </h3>
                  <button
                    onClick={closeModal}
                    className="text-surface-500 hover:text-surface-700 dark:text-surface-400 dark:hover:text-surface-200"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
                <div 
                  className="text-surface-600 dark:text-surface-400"
                  dangerouslySetInnerHTML={{ __html: selectedStep.modalContent }}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Our Values */}
      <div className="py-20 bg-white dark:bg-surface-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-surface-900 dark:text-surface-100 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-surface-600 dark:text-surface-400">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold text-surface-900 dark:text-surface-100 mb-2">
                  {value.title}
                </h3>
                <p className="text-surface-600 dark:text-surface-400">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-20 bg-surface-50 dark:bg-surface-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-surface-900 dark:text-surface-100 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-surface-600 dark:text-surface-400">
              The experts behind the hashrate heating revolution
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white dark:bg-surface-800 rounded-lg shadow-lg overflow-hidden">
                <div className="aspect-square">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-surface-900 dark:text-surface-100 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary-600 dark:text-primary-400 mb-4">{member.role}</p>
                  <p className="text-surface-600 dark:text-surface-400">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Join the Movement Section with Custom Gradient */}
      <div className="relative py-16 overflow-hidden bg-gradient-to-r from-[#4970A5] to-[#718EBC]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(255,255,255,0.1),transparent_75%)] animate-pulse"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(47,59,105,0.3),transparent_50%)] animate-pulse [animation-delay:1s]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.1),transparent_50%)] animate-pulse [animation-delay:2s]"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-heading text-white mb-4">
            Join the Movement
          </h2>
          <p className="text-xl font-body text-white/90 mb-8">
            Be part of the hashrate heating revolution. Get updates on new products and industry insights.
          </p>
          
          {/* HubSpot Form Container */}
          <div id="hubspot-form-container"></div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-white dark:bg-surface-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-surface-900 dark:text-surface-100 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-surface-600 dark:text-surface-400 mb-8">
            Let's discuss how hashrate heating can transform your energy costs
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-base font-subheading"
            >
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/book-call"
              className="inline-flex items-center px-8 py-4 border border-primary-600 text-primary-600 dark:text-primary-400 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900 transition-colors text-base font-subheading"
            >
              Book a Call
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

// Extend the Window interface to include hbspt
declare global {
  interface Window {
    hbspt: any;
  }
}

export default About