import React, { useState, useEffect } from 'react'
import { GithubIcon, LinkedInIcon, TwitterIcon } from './Icons'
import { motion, AnimatePresence } from 'framer-motion'

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

const NavBar = () => {
  const [activeSection, setActiveSection] = useState('hero')
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      const offsets = sections.map(s => {
        const el = document.getElementById(s.id)
        if (!el) return { id: s.id, top: Infinity }
        return { id: s.id, top: Math.abs(el.getBoundingClientRect().top - 100) }
      })
      const closest = offsets.reduce((a, b) => a.top < b.top ? a : b)
      setActiveSection(closest.id)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    setIsOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`nav-fixed ${isScrolled ? 'nav-scrolled' : ''}`}>
      <div className="max-w-[1200px] mx-auto px-8 py-4 flex items-center justify-between md:px-5">
        {/* Logo */}
        <button onClick={() => scrollTo('hero')} className="text-xl font-bold text-light tracking-tight">
          <span className="gradient-text">H</span>amza<span className="text-light/40">.</span>
        </button>

        {/* Desktop Nav */}
        <nav className="flex items-center gap-8 lg:hidden">
          {sections.map(s => (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              className={`nav-link ${activeSection === s.id ? 'active' : ''}`}
            >
              {s.label}
            </button>
          ))}
        </nav>

        {/* Desktop Social */}
        <div className="flex items-center gap-3 lg:hidden">
          <motion.a href="https://www.linkedin.com/in/hamza-nadeem-khan-420389242/" target="_blank" whileHover={{ y: -2 }} className="social-icon !w-9 !h-9 !rounded-lg">
            <LinkedInIcon />
          </motion.a>
          <motion.a href="https://github.com/hamza301211" target="_blank" whileHover={{ y: -2 }} className="social-icon !w-9 !h-9 !rounded-lg">
            <GithubIcon />
          </motion.a>
        </div>

        {/* Mobile hamburger */}
        <button className="hidden lg:flex flex-col justify-center items-center z-[210]" onClick={() => setIsOpen(!isOpen)}>
          <span className={`bg-light block h-0.5 w-6 rounded-sm transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`} />
          <span className={`bg-light block h-0.5 w-6 rounded-sm my-0.5 transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
          <span className={`bg-light block h-0.5 w-6 rounded-sm transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {sections.map(s => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className={`nav-link ${activeSection === s.id ? 'active' : ''}`}
                style={{ fontSize: '1.5rem' }}
              >
                {s.label}
              </button>
            ))}
            <div className="flex items-center gap-4 mt-6">
              <motion.a href="https://www.linkedin.com/in/hamza-nadeem-khan-420389242/" target="_blank" className="social-icon"><LinkedInIcon /></motion.a>
              <motion.a href="https://github.com/hamza301211" target="_blank" className="social-icon"><GithubIcon /></motion.a>
              <motion.a href="https://twitter.com/hbutt7883" target="_blank" className="social-icon"><TwitterIcon /></motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default NavBar