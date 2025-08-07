import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Mission = () => {
  const missionRef = useRef(null)

  useEffect(() => {
    const values = missionRef.current.querySelectorAll('.value-card')
    
    gsap.from(values, {
      duration: 1,
      scale: 0.8,
      opacity: 0,
      stagger: 0.2,
      scrollTrigger: {
        trigger: missionRef.current,
        start: 'top 70%',
        end: 'bottom 30%',
        toggleActions: 'play none none reverse'
      }
    })
  }, [])

  const values = [
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
        </svg>
      ),
      title: 'Transparency',
      description: 'We believe in open, honest communication and clear decision-making processes that build trust and accountability.'
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: 'Compassion',
      description: 'Every action we take is guided by empathy and genuine care for the wellbeing of individuals and communities.'
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Integrity',
      description: 'We uphold the highest standards of moral and ethical conduct in all our relationships and endeavors.'
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Innovation',
      description: 'We continuously seek creative solutions and modern approaches to address contemporary ethical challenges.'
    }
  ]

  return (
    <section id="mission" ref={missionRef} className="section-padding bg-gradient-to-br from-primary-50 to-white">
      <div className="container-max">
        {/* Mission Statement */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-8">
            Our <span className="gradient-text">Mission & Vision</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl shadow-lg p-8 card">
              <h3 className="text-2xl font-bold text-secondary-900 mb-4">Mission</h3>
              <p className="text-lg text-secondary-600 leading-relaxed">
                To empower individuals and organizations with ethical frameworks and 
                practical tools that foster responsible decision-making and create 
                lasting positive impact in communities worldwide.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 card">
              <h3 className="text-2xl font-bold text-secondary-900 mb-4">Vision</h3>
              <p className="text-lg text-secondary-600 leading-relaxed">
                A world where ethical considerations are at the heart of every decision, 
                creating a more just, sustainable, and compassionate global society 
                for current and future generations.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
            Our Core Values
          </h3>
          <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
            These fundamental principles guide everything we do and shape our approach 
            to creating positive change in the world.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="value-card">
              <div className="bg-white rounded-2xl shadow-lg p-8 h-full text-center card hover:shadow-2xl">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center mx-auto mb-6 text-primary-600">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-secondary-900 mb-4">
                  {value.title}
                </h4>
                <p className="text-secondary-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Vision Image Placeholder */}
        <div className="mt-20">
          <div className="w-full h-64 md:h-80 bg-gradient-to-r from-primary-100 via-primary-200 to-primary-100 rounded-2xl shadow-lg flex items-center justify-center">
            <div className="text-center space-y-4">
              <div className="w-24 h-24 bg-primary-300 rounded-full mx-auto flex items-center justify-center">
                <svg className="w-12 h-12 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <p className="text-primary-700 font-medium">Mission Vision Image Placeholder</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Mission