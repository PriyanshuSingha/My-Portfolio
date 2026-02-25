import React from 'react'
import { motion } from 'framer-motion'

export default function LoadingScreen() {
  return (
    <motion.div
      key="loader"
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0f172a]"
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="relative w-24 h-24 mb-8"
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
      >
        <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-indigo-500 border-r-purple-500" />
        <div className="absolute inset-2 rounded-full border-2 border-transparent border-b-cyan-400 border-l-indigo-400" style={{ animationDuration: '1.5s' }} />
        <div className="absolute inset-4 rounded-full bg-gradient-to-br from-indigo-600/30 to-purple-600/30 flex items-center justify-center">
          <span className="text-indigo-400 font-bold text-xl font-mono">PS</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-center"
      >
        <p className="text-indigo-400 font-mono text-sm tracking-widest uppercase">Initializing</p>
        <motion.div className="mt-4 w-48 h-1 bg-slate-800 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 2, ease: 'easeInOut' }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
