import React from 'react'
import { motion } from 'framer-motion'
import { Award, ExternalLink, CheckCircle } from 'lucide-react'

const certs = [
  {
    title: 'Joy of Computing using Python',
    issuer: 'NPTEL — IIT',
    description: 'Comprehensive Python programming course covering fundamentals, data structures, and computational thinking by IIT faculty.',
    color: '#6366f1',
    badge: '🏅',
    verified: true,
  },
  {
    title: 'Getting Started with AI',
    issuer: 'IBM',
    description: 'Introduction to Artificial Intelligence concepts, machine learning basics, and AI applications in real-world scenarios.',
    color: '#22d3ee',
    badge: '🤖',
    verified: true,
  },
  {
    title: 'GDG Solution Challenge',
    issuer: 'Google Developer Groups',
    description: 'Participated in Google Developer Groups Solution Challenge, building innovative solutions using Google technologies.',
    color: '#a855f7',
    badge: '🚀',
    verified: true,
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding bg-gradient-to-b from-transparent via-slate-900/20 to-transparent">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-indigo-400 font-mono text-sm tracking-widest uppercase mb-3">Credentials</p>
          <h2 className="text-4xl md:text-5xl font-black text-white">
            <span className="text-gradient">Certifications</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {certs.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="card-glass rounded-2xl p-6 relative overflow-hidden group"
              style={{ border: `1px solid ${cert.color}25` }}
            >
              {/* Top glow bar */}
              <div
                className="absolute top-0 left-0 right-0 h-1 opacity-60"
                style={{ background: `linear-gradient(90deg, transparent, ${cert.color}, transparent)` }}
              />

              {/* Background orb */}
              <div
                className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full blur-2xl opacity-10 group-hover:opacity-20 transition-opacity"
                style={{ background: cert.color }}
              />

              {/* Badge */}
              <div className="text-4xl mb-4">{cert.badge}</div>

              {/* Verified badge */}
              <div className="flex items-center gap-1.5 mb-4">
                <CheckCircle size={14} className="text-green-400" />
                <span className="text-xs text-green-400 font-mono">Verified</span>
              </div>

              <h3 className="font-bold text-white mb-1 text-base leading-snug">{cert.title}</h3>
              <p className="font-mono text-xs mb-3" style={{ color: cert.color }}>{cert.issuer}</p>
              <p className="text-slate-400 text-xs leading-relaxed">{cert.description}</p>

              <motion.button
                whileHover={{ x: 3 }}
                className="mt-5 flex items-center gap-1.5 text-xs font-medium"
                style={{ color: cert.color }}
              >
                <ExternalLink size={12} />
                View Certificate
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
