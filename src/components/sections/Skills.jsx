import React from 'react'
import { motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { Float, Text3D, Center } from '@react-three/drei'

const skills = [
  { name: 'Python', level: 90, color: '#6366f1' },
  { name: 'Machine Learning', level: 80, color: '#818cf8' },
  { name: 'Data Preprocessing', level: 85, color: '#22d3ee' },
  { name: 'Model Evaluation', level: 78, color: '#a855f7' },
  { name: 'Java', level: 70, color: '#6366f1' },
  { name: 'Problem Solving', level: 88, color: '#22d3ee' },
  { name: 'Debugging', level: 82, color: '#818cf8' },
]

const techStack = [
  { name: 'Python', icon: '🐍', color: '#6366f1' },
  { name: 'TensorFlow', icon: '🔶', color: '#f59e0b' },
  { name: 'Scikit', icon: '🔬', color: '#22d3ee' },
  { name: 'Pandas', icon: '🐼', color: '#a855f7' },
  { name: 'NumPy', icon: '🔢', color: '#818cf8' },
  { name: 'Java', icon: '☕', color: '#ef4444' },
  { name: 'Git', icon: '🌿', color: '#22c55e' },
  { name: 'Jupyter', icon: '📓', color: '#f97316' },
]

function SkillBar({ skill, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group"
    >
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
          {skill.name}
        </span>
        <span className="text-sm font-mono text-indigo-400">{skill.level}%</span>
      </div>
      <div className="h-2.5 bg-slate-800 rounded-full overflow-hidden neon-border">
        <motion.div
          className="h-full rounded-full relative"
          style={{ background: `linear-gradient(90deg, ${skill.color}, #22d3ee)` }}
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: index * 0.1 + 0.3 }}
        >
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white shadow-lg shadow-indigo-500/50" />
        </motion.div>
      </div>
    </motion.div>
  )
}

function TechCard({ tech, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.4 }}
      whileHover={{ y: -6, scale: 1.05 }}
      className="card-glass rounded-xl p-4 flex flex-col items-center gap-2 neon-border group cursor-default"
      style={{ '--glow-color': tech.color }}
    >
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform"
        style={{ background: `${tech.color}20`, border: `1px solid ${tech.color}40` }}
      >
        {tech.icon}
      </div>
      <span className="text-xs font-mono text-slate-400 group-hover:text-slate-200 transition-colors">
        {tech.name}
      </span>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-gradient-to-b from-transparent via-slate-900/30 to-transparent">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-indigo-400 font-mono text-sm tracking-widest uppercase mb-3">What I Know</p>
          <h2 className="text-4xl md:text-5xl font-black text-white">
            Technical <span className="text-gradient">Skills</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Skill bars */}
          <motion.div
            className="card-glass rounded-2xl p-8 neon-border"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold text-white mb-8 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
              Proficiency Levels
            </h3>
            <div className="space-y-6">
              {skills.map((skill, i) => (
                <SkillBar key={skill.name} skill={skill} index={i} />
              ))}
            </div>
          </motion.div>

          {/* Tech stack grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold text-white mb-8 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              Tools & Technologies
            </h3>
            <div className="grid grid-cols-4 gap-3">
              {techStack.map((tech, i) => (
                <TechCard key={tech.name} tech={tech} index={i} />
              ))}
            </div>

            {/* Additional highlight card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-6 card-glass rounded-xl p-5 border border-purple-500/30 bg-gradient-to-br from-purple-500/5 to-indigo-500/5"
            >
              <p className="text-xs font-mono text-purple-400 uppercase tracking-widest mb-2">Focus Area</p>
              <p className="text-slate-300 text-sm leading-relaxed">
                Specializing in <span className="text-purple-300 font-medium">supervised & unsupervised learning</span>,
                data preprocessing pipelines, and building ML models from scratch with Python.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
