import React from 'react'
import { Calendar, ArrowRight } from 'lucide-react'

const BookCall = () => {
  const team = [
    {
      name: 'Tyler Stevens',
      role: 'CEO & Chief Engineer',
      image: '/IMG_5108.JPG',
      description: 'Book a call with Tyler to discuss new projects or technical aspects of hashrate heating systems.'
    },
    {
      name: 'Dylan',
      role: 'COO & CFO',
      image: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Schedule time with Dylan to discuss business operations and financial considerations.'
    },
    {
      name: 'Mike',
      role: 'CRO',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Connect with Mike to explore partnership opportunities and revenue strategies.'
    }
  ]

  return (
    <div className="bg-surface-50 dark:bg-surface-900 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Book a Call</h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Schedule a one-on-one consultation with our team to discuss your hashrate heating needs
          </p>
        </div>
      </div>

      {/* Team Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member) => (
            <div key={member.name} className="bg-white dark:bg-surface-800 rounded-lg shadow-xl overflow-hidden">
              <div className="aspect-w-3 aspect-h-2">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-48 object-cover"
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
                  className="w-full bg-primary-600 text-white py-3 px-4 rounded-lg hover:bg-primary-700 transition-colors flex items-center justify-center"
                  onClick={() => {/* Calendar link will be added here */}}
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
    </div>
  )
}

export default BookCall