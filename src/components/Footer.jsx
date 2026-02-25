import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Brain, ArrowUp } from 'lucide-react'

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="border-t border-indigo-500/10 bg-[#0a0f1e]/80">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-slate-400 text-sm">
          <Brain size={16} className="text-indigo-400" />
          <span className="font-mono text-gradient font-bold">Priyanshu Singha</span>
          <span>— Built with</span>
          <Heart size={14} className="text-red-400 fill-red-400" />
          <span>& React</span>
        </div>

        <p className="text-slate-500 text-xs font-mono">
          © {new Date().getFullYear()} · AI & ML Engineering Student
        </p>

        <motion.button
          onClick={scrollTop}
          whileHover={{ y: -3, scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="w-9 h-9 rounded-lg bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 hover:bg-indigo-500/30 transition-colors"
        >
          <ArrowUp size={16} />
        </motion.button>
      </div>
    </footer>
  )
}
