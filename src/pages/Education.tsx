import React from 'react'
import { BookOpen, Video, FileText, Award } from 'lucide-react'

const Education = () => {
  const courses = [
    {
      title: "Introduction to Hashrate Heating",
      description: "Learn the basics of how hashrate heating works and its benefits",
      duration: "2 hours",
      level: "Beginner",
      image: "https://images.pexels.com/photos/7567473/pexels-photo-7567473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      title: "Advanced System Integration",
      description: "Deep dive into integrating hashrate heating with existing infrastructure",
      duration: "4 hours",
      level: "Advanced",
      image: "https://images.pexels.com/photos/8293778/pexels-photo-8293778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      title: "Optimization Techniques",
      description: "Learn how to optimize your system for maximum efficiency",
      duration: "3 hours",
      level: "Intermediate",
      image: "https://images.pexels.com/photos/7567620/pexels-photo-7567620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ]

  const resources = [
    {
      title: "Video Tutorials",
      description: "Watch step-by-step guides and explanations",
      icon: Video
    },
    {
      title: "Documentation",
      description: "Detailed technical documentation and guides",
      icon: FileText
    },
    {
      title: "Certification",
      description: "Get certified in hashrate heating technology",
      icon: Award
    }
  ]

  return (
    <div className="bg-surface-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <BookOpen className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Educational Resources
          </h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Master the technology of hashrate heating through our comprehensive educational platform
          </p>
        </div>
      </div>

      {/* Featured Courses */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-surface-900 mb-12">Featured Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-primary-600 font-medium">
                    {course.level}
                  </span>
                  <span className="text-sm text-surface-600">
                    {course.duration}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-surface-900 mb-2">
                  {course.title}
                </h3>
                <p className="text-surface-600 mb-4">
                  {course.description}
                </p>
                <button className="w-full bg-primary-600 text-white py-2 rounded-lg hover:bg-primary-700 transition-colors">
                  Start Learning
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Resources */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-surface-900 mb-12">Learning Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center p-3 bg-primary-100 rounded-lg mb-4">
                  <resource.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-surface-900 mb-2">
                  {resource.title}
                </h3>
                <p className="text-surface-600">
                  {resource.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Learning Path */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-surface-900 mb-12">Learning Path</h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-200"></div>
          <div className="space-y-12">
            {[
              { step: 1, title: "Fundamentals", content: "Learn the basics of hashrate heating" },
              { step: 2, title: "System Design", content: "Understanding system components and design principles" },
              { step: 3, title: "Integration", content: "Learn how to integrate with existing infrastructure" },
              { step: 4, title: "Optimization", content: "Master advanced optimization techniques" }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="flex items-center">
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary-600 rounded-full text-white flex items-center justify-center">
                    {item.step}
                  </div>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                    <h3 className="text-xl font-semibold text-surface-900 mb-2">{item.title}</h3>
                    <p className="text-surface-600">{item.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education