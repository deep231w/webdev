import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const Hero = () => {
  const heroRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const buttonRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline()
    
    tl.from(titleRef.current, {
      duration: 1.2,
      y: 100,
      opacity: 0,
      ease: "power3.out"
    })
    .from(subtitleRef.current, {
      duration: 1,
      y: 50,
      opacity: 0,
      ease: "power2.out"
    }, "-=0.5")
    .from(buttonRef.current.children, {
      duration: 0.8,
      y: 30,
      opacity: 0,
      stagger: 0.2,
      ease: "power2.out"
    }, "-=0.3")
  }, [])

  return (
    <section ref={heroRef} className="relative min-h-screen bg-gradient-to-br from-primary-50 via-white to-primary-100 overflow-hidden">
      {/* Navigation */}
      <nav className="relative z-10 container-max section-padding pb-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-primary-600 to-primary-800 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">E</span>
            </div>
            <span className="text-2xl font-bold gradient-text">EthicalLifeWorld</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-secondary-700 hover:text-primary-600 font-medium transition-colors">About</a>
            <a href="#mission" className="text-secondary-700 hover:text-primary-600 font-medium transition-colors">Mission</a>
            <a href="#services" className="text-secondary-700 hover:text-primary-600 font-medium transition-colors">Services</a>
            <a href="#contact" className="text-secondary-700 hover:text-primary-600 font-medium transition-colors">Contact</a>
            <button className="btn-primary">Get Started</button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-secondary-700 hover:text-primary-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="container-max section-padding pt-16 md:pt-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 ref={titleRef} className="text-5xl md:text-6xl lg:text-7xl font-bold text-secondary-900 leading-tight">
              Building an 
              <span className="block gradient-text">Ethical Future</span>
              for All
            </h1>
            
            <p ref={subtitleRef} className="text-xl md:text-2xl text-secondary-600 leading-relaxed max-w-2xl">
              Empowering individuals and organizations to make ethical decisions that create positive impact 
              and build a better world for future generations.
            </p>
            
            <div ref={buttonRef} className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary text-lg px-8 py-4">
                Start Your Journey
              </button>
              <button className="btn-secondary text-lg px-8 py-4">
                Learn More
              </button>
            </div>
          </div>
          
          {/* Hero Image Placeholder */}
          <div className="relative">
            <div className="w-full h-96 md:h-[500px] bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl shadow-2xl flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-24 h-24 bg-primary-300 rounded-full mx-auto flex items-center justify-center">
                  <svg className="w-12 h-12 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <p className="text-primary-700 font-medium">Hero Image Placeholder</p>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary-400 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary-300 rounded-full opacity-10 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero