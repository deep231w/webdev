import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Hero from './components/Hero'
import About from './components/About'
import Mission from './components/Mission'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import './App.css'

gsap.registerPlugin(ScrollTrigger)

function App() {
  useEffect(() => {
    // Initialize GSAP animations
    gsap.from('.fade-in', {
      duration: 1,
      y: 50,
      opacity: 0,
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.fade-in',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    })
  }, [])

  return (
    <div className="App">
      <Hero />
      <About />
      <Mission />
      <Services />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App
