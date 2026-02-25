import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, School, BookOpen, Award } from 'lucide-react'

const education = [
  {
    institution: 'GIET University',
    degree: 'B.Tech — Computer Science Engineering (AI & ML)',
    period: '2024 – 2028',
    detail: 'CGPA: 8.26',
    icon: GraduationCap,
    color: '#6366f1',
    current: true,
  },
  {
    institution: 'Jhadeswar International School',
    degree: 'Higher Secondary Education',
    period: 'Completed',
    detail: 'Science Stream',
    icon: School,
    color: '#22d3ee',
    current: false,
  },
  {
    institution: 'Saint Joseph\'s Convent School',
    degree: 'Secondary Education',
    period: 'Completed',
    detail: 'CBSE Board',
    icon: BookOpen,
    color: '#a855f7',
    current: false,
  },
]

export default function Education() {
  return (
    <section id="education" className="section-padding bg-gradient-to-b from-transparent via-slate-900/20 to-transparent">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-indigo-400 font-mono text-sm tracking-widest uppercase mb-3">Academic Background</p>
          <h2 className="text-4xl md:text-5xl font-black text-white">
            My <span className="text-gradient">Education</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-6">
          {education.map((edu, i) => {
            const Icon = edu.icon
            return (
              <motion.div
                key={edu.institution}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                whileHover={{ y: -4, scale: 1.01 }}
                className="card-glass rounded-2xl p-6 relative overflow-hidden"
                style={{ border: `1px solid ${edu.color}30` }}
              >
                {/* Background accent */}
                <div
                  className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-5"
                  style={{ background: edu.color }}
                />

                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${edu.color}15`, border: `1px solid ${edu.color}30` }}
                  >
                    <Icon size={22} style={{ color: edu.color }} />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-start justify-between flex-wrap gap-2">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-bold text-white text-lg">{edu.institution}</h3>
                          {edu.current && (
                            <span className="px-2 py-0.5 rounded-full text-xs font-mono bg-green-500/15 text-green-400 border border-green-500/30">
                              Current
                            </span>
                          )}
                        </div>
                        <p className="text-slate-300 text-sm">{edu.degree}</p>
                      </div>
                      <span className="font-mono text-sm" style={{ color: edu.color }}>{edu.period}</span>
                    </div>

                    <div className="mt-3 flex items-center gap-2">
                      <Award size={14} style={{ color: edu.color }} />
                      <span className="text-sm font-medium" style={{ color: edu.color }}>{edu.detail}</span>
                    </div>

                    {edu.current && (
                      <div className="mt-4 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full rounded-full"
                          style={{ background: `linear-gradient(90deg, ${edu.color}, #22d3ee)` }}
                          initial={{ width: 0 }}
                          whileInView={{ width: '82.6%' }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, ease: 'easeOut', delay: 0.3 }}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
