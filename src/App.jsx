import { useState, useEffect } from 'react'
import './styles/globals.css'

import Navbar   from './components/Navbar'
import Hero     from './components/Hero'
import Skills   from './components/Skills'
import Projects from './components/Projects'
import About    from './components/About'
import Contact  from './components/Contact'
import Footer   from './components/Footer'

import { navItems } from './data/info'

export default function App() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY + 120
      for (let i = navItems.length - 1; i >= 0; i--) {
        const el = document.getElementById(navItems[i])
        if (el && el.offsetTop <= scrollY) {
          setActiveSection(navItems[i])
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <>
      <div className="scanlines" />

      <Navbar activeSection={activeSection} />

      <main>
        <Hero
          onViewWork={() => scrollTo('projects')}
          onContact={()  => scrollTo('contact')}
        />
        <Skills />
        <Projects />
        <About />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
