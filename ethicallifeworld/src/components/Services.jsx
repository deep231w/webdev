import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Services = () => {
  const servicesRef = useRef(null)

  useEffect(() => {
    const serviceCards = servicesRef.current.querySelectorAll('.service-card')
    
    gsap.from(serviceCards, {
      duration: 1,
      y: 80,
      opacity: 0,
      stagger: 0.3,
      scrollTrigger: {
        trigger: servicesRef.current,
        start: 'top 70%',
        end: 'bottom 30%',
        toggleActions: 'play none none reverse'
      }
    })
  }, [])

  const services = [
    {
      title: 'Ethical Consulting',
      description: 'Professional guidance for organizations looking to implement comprehensive ethical frameworks and practices.',
      features: ['Custom Framework Development', 'Policy Review & Updates', 'Training Programs', 'Compliance Auditing'],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: 'Leadership Development',
      description: 'Comprehensive programs designed to cultivate ethical leaders who can drive positive change in their organizations.',
      features: ['Executive Coaching', 'Leadership Workshops', 'Mentorship Programs', 'Assessment Tools'],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
        </svg>
      )
    },
    {
      title: 'Educational Programs',
      description: 'Interactive learning experiences that make ethical principles accessible and applicable to real-world situations.',
      features: ['Online Courses', 'Workshop Series', 'Certification Programs', 'Resource Library'],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      title: 'Community Building',
      description: 'Facilitating connections between like-minded individuals and organizations committed to ethical practices.',
      features: ['Networking Events', 'Discussion Forums', 'Collaborative Projects', 'Volunteer Opportunities'],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    }
  ]

  return (
    <section id="services" ref={servicesRef} className="section-padding bg-white">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-secondary-600 leading-relaxed">
            Comprehensive solutions designed to help individuals and organizations 
            integrate ethical practices into their daily operations and decision-making processes.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="bg-gradient-to-br from-white to-primary-50 rounded-2xl shadow-lg p-8 h-full card hover:shadow-2xl">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center text-primary-600">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-secondary-900 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-secondary-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                          <span className="text-secondary-700 font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button className="btn-secondary mt-6 w-full">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-3xl shadow-2xl p-12 text-center text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Ethical Journey?
          </h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of individuals and organizations who have transformed their 
            approach to decision-making through our comprehensive ethical framework.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-600 hover:bg-primary-50 font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105">
              Get Started Today
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold px-8 py-4 rounded-lg transition-all duration-300">
              Schedule Consultation
            </button>
          </div>
        </div>

        {/* Services Image Placeholder */}
        <div className="mt-20">
          <div className="w-full h-64 md:h-80 bg-gradient-to-r from-secondary-100 via-secondary-200 to-secondary-100 rounded-2xl shadow-lg flex items-center justify-center">
            <div className="text-center space-y-4">
              <div className="w-24 h-24 bg-secondary-300 rounded-full mx-auto flex items-center justify-center">
                <svg className="w-12 h-12 text-secondary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m8 6V9a2 2 0 00-2-2H10a2 2 0 00-2 2v3.093m8 2.477l1.262 1.262a1 1 0 001.414 0L20 15.465" />
                </svg>
              </div>
              <p className="text-secondary-700 font-medium">Services Image Placeholder</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services