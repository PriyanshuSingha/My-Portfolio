import React, { useState, useEffect, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { motion } from 'framer-motion'
import { ChevronDown, Download, Eye } from 'lucide-react'
import NeuralScene from '../3d/NeuralScene'

const titles = [
  'AI & ML Engineering Student',
  'Python Developer',
  'Data Scientist in Making',
  'Problem Solver',
]

function TypingText() {
  const [titleIndex, setTitleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    const current = titles[titleIndex]

    if (!deleting && charIndex < current.length) {
      const t = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex + 1))
        setCharIndex((c) => c + 1)
      }, 80)
      return () => clearTimeout(t)
    }

    if (!deleting && charIndex === current.length) {
      const t = setTimeout(() => setDeleting(true), 2000)
      return () => clearTimeout(t)
    }

    if (deleting && charIndex > 0) {
      const t = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex - 1))
        setCharIndex((c) => c - 1)
      }, 40)
      return () => clearTimeout(t)
    }

    if (deleting && charIndex === 0) {
      setDeleting(false)
      setTitleIndex((i) => (i + 1) % titles.length)
    }
  }, [charIndex, deleting, titleIndex])

  return (
    <span className="text-indigo-400 font-mono">
      {displayed}
      <span className="animate-pulse text-cyan-400">|</span>
    </span>
  )
}

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const sectionRef = useRef()

  useEffect(() => {
    const handler = (e) => {
      const { innerWidth, innerHeight } = window
      setMousePos({
        x: (e.clientX / innerWidth - 0.5) * 2,
        y: -(e.clientY / innerHeight - 0.5) * 2,
      })
    }
    window.addEventListener('mousemove', handler)
    return () => window.removeEventListener('mousemove', handler)
  }, [])

  const scrollToNext = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden grid-bg"
    >
      {/* 3D Canvas */}
      <div className="absolute inset-0 z-0">
        <Canvas
          camera={{ position: [0, 0, 5], fov: 60 }}
          gl={{ antialias: true, alpha: true }}
          dpr={[1, 2]}
        >
          <NeuralScene mousePosition={mousePos} />
        </Canvas>
      </div>

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-radial from-transparent via-[#0f172a]/40 to-[#0f172a]/90" />

      {/* Left gradient edge */}
      <div className="absolute left-0 top-0 bottom-0 w-1/2 z-10 bg-gradient-to-r from-[#0f172a] via-[#0f172a]/80 to-transparent" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 lg:px-24 w-full py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-sm font-mono mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Available for Opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-7xl font-black mb-4 leading-tight"
          >
            <span className="text-white">Hi, I'm </span>
            <span className="text-gradient">Priyanshu</span>
            <br />
            <span className="text-white">Singha</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl md:text-2xl font-medium text-slate-300 mb-6 h-8"
          >
            <TypingText />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-slate-400 text-base md:text-lg leading-relaxed mb-10 max-w-lg"
          >
            B.Tech CSE (AIML) student at GIET University, passionate about building
            intelligent systems, solving complex problems with Python, and pushing the
            boundaries of Machine Learning.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap gap-4"
          >
            <motion.a
              href="#projects"
              className="group flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold text-sm hover:shadow-2xl hover:shadow-indigo-500/30 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <Eye size={18} />
              View My Work
            </motion.a>
            <motion.a
              href="mailto:priyanshusingha249@gmail.com"
              className="flex items-center gap-2 px-8 py-4 rounded-xl border border-indigo-500/40 text-indigo-300 font-semibold text-sm hover:bg-indigo-500/10 hover:border-indigo-400 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <Download size={18} />
              Get In Touch
            </motion.a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex gap-8 mt-14"
          >
            {[
              { value: '8.26', label: 'CGPA' },
              { value: '2+', label: 'Internships' },
              { value: '4+', label: 'Projects' },
              { value: '3+', label: 'Certifications' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-bold text-gradient">{stat.value}</div>
                <div className="text-xs text-slate-500 mt-0.5">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-slate-400 hover:text-indigo-400 transition-colors"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown size={28} />
      </motion.button>
    </section>
  )
}
