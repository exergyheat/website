import React, { useEffect, useState } from 'react'
import { Calendar, ArrowRight, X } from 'lucide-react'
import { getCalApi } from "@calcom/embed-react"

const BookCall = () => {
  const [selectedMember, setSelectedMember] = useState<string | null>(null)

  const team = [
    {
      name: 'Tyler Stevens',
      role: 'CEO & Chief Engineer',
      image: '/TylerS_headshot.png',
      description: 'Chat with Tyler to discuss new projects or technical aspects of hashrate heating.',
      calLink: 'tylerkstevens/meeting'
    },
    {
      name: 'Dylan S',
      role: 'COO & CFO',
      image: '/DylanS_headshot.jpeg',
      description: 'Schedule time with Dylan to discuss new projects or operations and the numbers.',
      calLink: 'dylan-exergy/meeting'
    },
    {
      name: 'Mike C',
      role: 'CRO',
      image: '/MikeC_headshot.png',
      description: 'Connect with Mike to discuss new projects or explore partnership opportunities.',
      calLink: 'exergy-mike'
    }
  ]

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"meeting"});
      cal("ui", {
        "cssVarsPerTheme": {
          "light": {"cal-brand": "#4970a5"},
          "dark": {"cal-brand": "#2f3b69"}
        },
        "hideEventTypeDetails": false,
        "layout": "month_view"
      });
    })();
  }, [])

  const openCalModal = (calLink: string) => {
    setSelectedMember(calLink)
  }

  const closeModal = () => {
    setSelectedMember(null)
  }

  return (
    <div className="bg-surface-50 dark:bg-surface-900 min-h-screen">
      {/* Hero Section with Custom Gradient */}
      <div className="bg-gradient-to-r from-[#4970A5] to-[#718EBC] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Book a Call</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Consult with our team to discuss your hashrate heating needs
          </p>
        </div>
      </div>

      {/* Team Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member) => (
            <div key={member.name} className="bg-white dark:bg-surface-800 rounded-lg shadow-xl overflow-hidden">
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
                <p className="text-surface-600 dark:text-surface-400 mb-6">
                  {member.description}
                </p>
                <button 
                  onClick={() => openCalModal(member.calLink)}
                  className="w-full bg-primary-600 text-white py-3 px-4 rounded-lg hover:bg-primary-700 transition-colors flex items-center justify-center text-base font-subheading"
                >
                  <Calendar className="h-5 w-5 mr-2" />
                  Schedule Call
                  <ArrowRight className="h-5 w-5 ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cal.com Modal */}
      {selectedMember && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div 
              className="fixed inset-0 transition-opacity cursor-pointer" 
              aria-hidden="true"
              onClick={closeModal}
            >
              <div className="absolute inset-0 bg-surface-900 opacity-75"></div>
            </div>

            <div className="inline-block align-bottom bg-white dark:bg-surface-900 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
              <div className="bg-white dark:bg-surface-900 px-4 pt-5 pb-4 sm:p-6">
                {/* Header */}
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-bold text-surface-900 dark:text-surface-100">
                    Schedule a Call
                  </h3>
                  <button
                    onClick={closeModal}
                    className="text-surface-500 hover:text-surface-700 dark:text-surface-400 dark:hover:text-surface-200 p-2 rounded-lg hover:bg-surface-100 dark:hover:bg-surface-800 transition-colors"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
                
                {/* Cal.com Embed */}
                <div className="w-full h-[600px]">
                  <button
                    data-cal-namespace="meeting"
                    data-cal-link={selectedMember}
                    data-cal-config='{"layout":"month_view"}'
                    className="hidden"
                    id="cal-booking-button"
                  >
                    Book Call
                  </button>
                  
                  {/* Cal.com will inject the booking interface here */}
                  <div 
                    data-cal-namespace="meeting"
                    data-cal-link={selectedMember}
                    data-cal-config='{"layout":"month_view"}'
                    style={{ width: "100%", height: "100%", overflow: "scroll" }}
                  ></div>
                </div>
                
                {/* Instructions */}
                <div className="text-center mt-4">
                  <p className="text-sm text-surface-500 dark:text-surface-400">
                    Click outside or press X to close
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default BookCall