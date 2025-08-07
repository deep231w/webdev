import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Testimonials = () => {
  const testimonialsRef = useRef(null)

  useEffect(() => {
    const testimonialCards = testimonialsRef.current.querySelectorAll('.testimonial-card')
    
    gsap.from(testimonialCards, {
      duration: 1,
      x: -80,
      opacity: 0,
      stagger: 0.3,
      scrollTrigger: {
        trigger: testimonialsRef.current,
        start: 'top 70%',
        end: 'bottom 30%',
        toggleActions: 'play none none reverse'
      }
    })
  }, [])

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechForward Inc.',
      content: 'EthicalLifeWorld transformed our company culture. Their framework helped us navigate complex decisions with confidence and integrity. Our team morale and client trust have significantly improved.',
      avatar: 'SJ'
    },
    {
      name: 'Dr. Michael Chen',
      role: 'Director of Ethics, Global Health Alliance',
      content: 'The educational programs are outstanding. They provide practical tools that we use daily in our healthcare decisions. The impact on patient care has been remarkable.',
      avatar: 'MC'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Non-Profit Leader',
      content: 'Working with EthicalLifeWorld gave us the clarity we needed to align our mission with our actions. Their community approach fostered connections that continue to drive our success.',
      avatar: 'ER'
    }
  ]

  const partners = [
    'TechForward Inc.',
    'Global Health Alliance',
    'Community First Foundation',
    'Sustainable Future Corp.',
    'Innovation Labs',
    'Green Earth Initiative'
  ]

  return (
    <section ref={testimonialsRef} className="section-padding bg-gradient-to-br from-secondary-50 to-white">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            What Our <span className="gradient-text">Community</span> Says
          </h2>
          <p className="text-xl text-secondary-600 leading-relaxed">
            Hear from leaders and organizations who have experienced the transformative 
            power of ethical decision-making through our programs.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="bg-white rounded-2xl shadow-lg p-8 h-full card hover:shadow-2xl">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-700 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary-900">{testimonial.name}</h4>
                    <p className="text-secondary-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <div className="mb-6">
                  <svg className="w-8 h-8 text-primary-300 mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-secondary-700 leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                </div>
                <div className="flex text-primary-500">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Partners/Clients */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-secondary-900 mb-8">
            Trusted by Leading Organizations
          </h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner, index) => (
            <div key={index} className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-2xl shadow-md flex items-center justify-center mx-auto mb-4 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-secondary-300 rounded-full flex items-center justify-center">
                  <span className="text-secondary-700 font-bold text-lg">
                    {partner.split(' ').map(word => word[0]).slice(0, 2).join('')}
                  </span>
                </div>
              </div>
              <p className="text-sm text-secondary-600 font-medium">{partner}</p>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-20 bg-white rounded-3xl shadow-lg p-12 text-center">
          <h3 className="text-3xl font-bold text-secondary-900 mb-6">
            Stay Connected with Our Community
          </h3>
          <p className="text-xl text-secondary-600 mb-8 max-w-2xl mx-auto">
            Join our newsletter to receive insights, updates, and resources 
            for ethical living and decision-making.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
            <button className="btn-primary whitespace-nowrap">
              Subscribe Now
            </button>
          </div>
        </div>

        {/* Testimonials Image Placeholder */}
        <div className="mt-20">
          <div className="w-full h-64 md:h-80 bg-gradient-to-r from-primary-100 via-primary-200 to-primary-100 rounded-2xl shadow-lg flex items-center justify-center">
            <div className="text-center space-y-4">
              <div className="w-24 h-24 bg-primary-300 rounded-full mx-auto flex items-center justify-center">
                <svg className="w-12 h-12 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <p className="text-primary-700 font-medium">Community Testimonials Image Placeholder</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials