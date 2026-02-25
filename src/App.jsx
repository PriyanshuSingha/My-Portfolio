import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Experience from './components/sections/Experience'
import Education from './components/sections/Education'
import Projects from './components/sections/Projects'
import Certifications from './components/sections/Certifications'
import Contact from './components/sections/Contact'
import Footer from './components/Footer'
import LoadingScreen from './components/LoadingScreen'

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence>
        {loading && <LoadingScreen key="loading" />}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative bg-[#0f172a] min-h-screen"
        >
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Education />
            <Projects />
            <Certifications />
            <Contact />
          </main>
          <Footer />
        </motion.div>
      )}
    </>
  )
}
