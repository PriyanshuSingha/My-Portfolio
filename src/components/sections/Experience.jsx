import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, Calendar, ExternalLink, CheckCircle2 } from 'lucide-react'

const experiences = [
  {
    role: 'Machine Learning Intern',
    company: 'iStop.ai',
    period: 'Dec 2025 – Present',
    type: 'Current',
    color: '#22d3ee',
    highlights: [
      'Working on real-world ML model development and deployment',
      'Collaborating on data preprocessing and feature engineering pipelines',
      'Gaining exposure to production-grade AI systems',
      'Implementing and evaluating ML algorithms',
    ],
  },
  {
    role: 'Python Developer Intern',
    company: 'Internpe',
    period: 'May 2025 – June 2025',
    type: 'Completed',
    color: '#6366f1',
    highlights: [
      'Developed Python-based automation scripts and tools',
      'Built and tested data processing workflows',
      'Collaborated with team on software development tasks',
      'Strengthened fundamentals in Python programming',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-indigo-400 font-mono text-sm tracking-widest uppercase mb-3">Career Journey</p>
          <h2 className="text-4xl md:text-5xl font-black text-white">
            Work <span className="text-gradient">Experience</span>
          </h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline spine */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-px" style={{background: 'linear-gradient(to bottom, #6366f1, #a855f7, #22d3ee)'}} />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className={`relative flex gap-6 md:gap-0 mb-12 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            >
              {/* Desktop spacer */}
              <div className="hidden md:block md:w-1/2" />

              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex flex-col items-center z-10">
                <motion.div
                  whileHover={{ scale: 1.3 }}
                  className="w-5 h-5 rounded-full border-2 flex items-center justify-center"
                  style={{
                    borderColor: exp.color,
                    background: `${exp.color}20`,
                    boxShadow: `0 0 12px ${exp.color}60`,
                  }}
                >
                  <div className="w-2 h-2 rounded-full" style={{ background: exp.color }} />
                </motion.div>
              </div>

              {/* Card */}
              <div className={`ml-16 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pl-10' : 'md:pr-10'}`}>
                <motion.div
                  whileHover={{ y: -4, scale: 1.01 }}
                  className="card-glass rounded-2xl p-6"
                  style={{ border: `1px solid ${exp.color}30` }}
                >
                  <div className="flex items-start justify-between mb-4 flex-wrap gap-2">
                    <div>
                      <span
                        className="inline-block px-2.5 py-1 rounded-full text-xs font-mono mb-2"
                        style={{ background: `${exp.color}15`, color: exp.color, border: `1px solid ${exp.color}30` }}
                      >
                        {exp.type}
                      </span>
                      <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                      <p className="font-medium" style={{ color: exp.color }}>{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-400 text-sm">
                      <Calendar size={14} />
                      <span className="font-mono">{exp.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm text-slate-300">
                        <CheckCircle2 size={14} className="mt-0.5 flex-shrink-0" style={{ color: exp.color }} />
                        {h}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
