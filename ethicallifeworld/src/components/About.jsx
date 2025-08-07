import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const About = () => {
  const aboutRef = useRef(null)

  useEffect(() => {
    const cards = aboutRef.current.querySelectorAll('.stats-card')
    const features = aboutRef.current.querySelectorAll('.feature-card')
    
    gsap.from(cards, {
      duration: 1,
      y: 50,
      opacity: 0,
      stagger: 0.2,
      scrollTrigger: {
        trigger: aboutRef.current,
        start: 'top 70%',
        end: 'bottom 30%',
        toggleActions: 'play none none reverse'
      }
    })

    gsap.from(features, {
      duration: 1,
      x: -50,
      opacity: 0,
      stagger: 0.3,
      scrollTrigger: {
        trigger: features[0],
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    })
  }, [])

  const stats = [
    { number: '10K+', label: 'Lives Impacted' },
    { number: '50+', label: 'Organizations' },
    { number: '95%', label: 'Success Rate' },
    { number: '24/7', label: 'Support' }
  ]

  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Ethical Framework',
      description: 'Comprehensive ethical guidelines and frameworks for decision-making in personal and professional contexts.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Community Building',
      description: 'Connect with like-minded individuals and organizations committed to ethical practices and positive change.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: 'Educational Resources',
      description: 'Access comprehensive learning materials, workshops, and courses on ethical leadership and decision-making.'
    }
  ]

  return (
    <section id="about" ref={aboutRef} className="section-padding bg-white">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            About <span className="gradient-text">EthicalLifeWorld</span>
          </h2>
          <p className="text-xl text-secondary-600 leading-relaxed">
            We are dedicated to fostering ethical awareness and responsible decision-making 
            across all aspects of life and business.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="stats-card text-center">
              <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-6 card">
                <h3 className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.number}
                </h3>
                <p className="text-secondary-600 font-medium">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
              Why Choose Our Approach?
            </h3>
            <p className="text-lg text-secondary-600 mb-8 leading-relaxed">
              Our comprehensive approach combines time-tested ethical principles with modern 
              practical applications, creating sustainable positive impact in communities worldwide.
            </p>
            
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="feature-card flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-secondary-900 mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-secondary-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* About Image Placeholder */}
          <div className="relative">
            <div className="w-full h-96 md:h-[500px] bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-2xl shadow-lg flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-24 h-24 bg-secondary-300 rounded-full mx-auto flex items-center justify-center">
                  <svg className="w-12 h-12 text-secondary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <p className="text-secondary-700 font-medium">About Image Placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About