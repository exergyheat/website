import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, Zap, Users, Target, Award, ExternalLink } from 'lucide-react'

const About = () => {
  useEffect(() => {
    // Check if HubSpot script is already loaded
    const existingScript = document.querySelector('script[src="https://js-na2.hsforms.net/forms/embed/243159145.js"]')
    
    if (!existingScript) {
      // Create and load the HubSpot script
      const script = document.createElement('script')
      script.src = 'https://js-na2.hsforms.net/forms/embed/243159145.js'
      script.defer = true
      script.async = true
      document.body.appendChild(script)
    }

    // Cleanup function to remove script when component unmounts
    return () => {
      const scriptToRemove = document.querySelector('script[src="https://js-na2.hsforms.net/forms/embed/243159145.js"]')
      if (scriptToRemove) {
        document.body.removeChild(scriptToRemove)
      }
    }
  }, [])

  const teamMembers = [
    {
      name: "Tyler Stevens",
      role: "Founder & CEO",
      image: "/TylerS_headshot.jpeg",
      description: "Author of 'Bitcoin Mining Heat Reuse' and instigator of the Heatpunk movement."
    },
    {
      name: "Mike Colyer",
      role: "Co-Founder & CTO",
      image: "/MikeC_headshot.png",
      description: "Operations and bitcoin infrastructure expert with an engineering license."
    },
    {
      name: "Dylan Stoll",
      role: "Lead Engineer",
      image: "/DylanS_headshot.jpeg",
      description: "Revenue and growth specialist, bitcoin mining fanatic."
    }
  ]

  const values = [
    {
      icon: Zap,
      title: "Innovation",
      description: "We're pioneering the future of heating technology by combining Bitcoin mining with practical heat generation."
    },
    {
      icon: Users,
      title: "Community",
      description: "We believe in building a community of forward-thinking individuals who see the potential in hashrate heating."
    },
    {
      icon: Target,
      title: "Efficiency",
      description: "Every watt of energy should serve a purpose. We maximize efficiency by making heat generation profitable."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We're committed to delivering the highest quality products and services in the hashrate heating industry."
    }
  ]

  return (
    <div className="bg-surface-50 dark:bg-surface-900">
      <Helmet>
        <title>About EXERGY | Heat That Pays</title>
        <meta name="description" content="Learn about EXERGY's mission to revolutionize heating with hashrate heating technology. Meet our team and discover our vision for the future of Bitcoin mining heat reuse." />
        <meta name="keywords" content="EXERGY team, hashrate heating company, bitcoin mining heat reuse, heating technology innovation" />
      </Helmet>
      
      {/* Hero Section with Custom Gradient */}
      <div className="bg-gradient-to-r from-[#4970A5] to-[#718EBC] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About EXERGY
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            We're building the future of heating technology
          </p>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-surface-900 dark:text-surface-100 mb-6">Our Mission</h2>
          <p className="text-xl text-surface-600 dark:text-surface-400 max-w-4xl mx-auto leading-relaxed">
            EXERGY is revolutionizing the heating industry by creating systems that generate both warmth and Bitcoin rewards. 
            We believe that every watt of energy used for heating should also contribute to securing the Bitcoin network, 
            creating a win-win scenario for homeowners, businesses, and the broader cryptocurrency ecosystem.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-white dark:bg-surface-800 rounded-lg shadow-lg p-6 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full mb-4">
                <value.icon className="h-8 w-8 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold text-surface-900 dark:text-surface-100 mb-3">
                {value.title}
              </h3>
              <p className="text-surface-600 dark:text-surface-400">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Our Team Section */}
      <div className="bg-white dark:bg-surface-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-surface-900 dark:text-surface-100 mb-6">Our Team</h2>
            <p className="text-xl text-surface-600 dark:text-surface-400 max-w-2xl mx-auto">
              Meet the experts behind EXERGY's innovative hashrate heating solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-surface-50 dark:bg-surface-700 rounded-lg shadow-lg p-8 text-center">
                <div className="mb-6">
                  <img
                    src={member.image}
                    alt={`${member.name} - ${member.role} at EXERGY`}
                    className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg"
                  />
                </div>
                <h3 className="text-xl font-bold text-surface-900 dark:text-surface-100 mb-2">
                  {member.name}
                </h3>
                <p className="text-primary-600 dark:text-primary-400 font-semibold mb-4">
                  {member.role}
                </p>
                <p className="text-surface-600 dark:text-surface-400 leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Company Story */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-surface-900 dark:text-surface-100 mb-6">Our Story</h2>
            <div className="space-y-6 text-lg text-surface-600 dark:text-surface-400">
              <p>
                EXERGY was founded on the simple observation that Bitcoin mining generates significant heat as a byproduct, 
                and most heating systems simply convert electricity into warmth. Why not combine these two processes?
              </p>
              <p>
                Our team of engineers and Bitcoin enthusiasts saw an opportunity to create heating systems that not only 
                warm your space but also generate cryptocurrency rewards. This dual-purpose approach maximizes energy 
                efficiency while creating new revenue streams for homeowners and businesses.
              </p>
              <p>
                Today, we're leading the hashrate heating revolution, helping customers across the country reduce their 
                heating costs while contributing to the security and decentralization of the Bitcoin network.
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src="/HRHP_logo_nobackground.png"
              alt="Hashrate Heatpunk Summit Logo - EXERGY's involvement in the hashrate heating community"
              className="max-w-md w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>

      {/* Join the Movement Section with Custom Gradient */}
      <div className="bg-gradient-to-r from-[#4970A5] to-[#718EBC] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Join the Movement
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Be part of the hashrate heating revolution. Get updates on new products, industry insights, and exclusive offers.
          </p>
          
          {/* HubSpot Newsletter Form */}
          <div id="hubspot-form-container" className="max-w-md mx-auto">
            <div 
              className="hs-form-frame" 
              data-region="na2" 
              data-form-id="a123456b-7890-1234-5678-9abcdef01234" 
              data-portal-id="243159145"
            ></div>
          </div>
          
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-primary-600 rounded-lg hover:bg-white/90 transition-colors text-base font-subheading"
            >
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <a
              href="https://heatpunks.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 border border-white text-white rounded-lg hover:bg-white/10 transition-colors text-base font-subheading"
            >
              Visit Heatpunk Forum
              <ExternalLink className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About