import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Brain, FlaskConical, MessageSquare, Globe, TrendingUp } from 'lucide-react'

const projects = [
  {
    title: 'Stock Price Prediction',
    description: 'ML model to predict future stock prices using historical market data and regression techniques. Achieved good accuracy and insights into market trends.',
    tags: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib','Machine Learning'],
    icon: TrendingUp,
    color: '#6366f1',
    accent: '#818cf8',
    category: 'Machine Learning',
  },
  {
    title: 'Weather Modeling & Environmental Forecasting',
    description: 'ML model for weather prediction and environmental forecasting using historical data, regression techniques, and visualization for insights into climate patterns.',
    tags: ['Python', 'Scikit-learn', 'Matplotlib', 'NumPy', 'Pandas','Machine Learning','Streamlit'],
    icon: FlaskConical,
    color: '#22d3ee',
    accent: '#67e8f9',
    category: 'Machine Learning',
  },
  {
    title: 'Car Rental Website',
    description: 'Responsive web-based car rental platform that allows users to browse, book, and manage vehicle reservations online.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'React'],
    icon: MessageSquare,
    color: '#a855f7',
    accent: '#c084fc',
    category: 'Web Dev',
  },
  {
    title: 'Portfolio Website',
    description: 'Personal developer portfolio with 3D animations, modern UI design, and responsive layout showcasing skills, projects, and experience.',
    tags: ['React', 'Three.js', 'Framer Motion', 'Tailwind'],
    icon: Globe,
    color: '#f59e0b',
    accent: '#fbbf24',
    category: 'Web Dev',
  },
]

function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false)
  const Icon = project.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ y: -8 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="card-glass rounded-2xl p-6 relative overflow-hidden group cursor-default"
      style={{
        border: `1px solid ${hovered ? project.color + '60' : project.color + '20'}`,
        boxShadow: hovered ? `0 0 30px ${project.color}20, 0 20px 40px rgba(0,0,0,0.3)` : 'none',
        transition: 'border-color 0.3s, box-shadow 0.3s',
      }}
    >
      {/* Background glow */}
      <motion.div
        className="absolute -top-10 -right-10 w-32 h-32 rounded-full blur-2xl"
        style={{ background: project.color }}
        animate={{ opacity: hovered ? 0.12 : 0.04 }}
        transition={{ duration: 0.3 }}
      />

      {/* Category badge */}
      <div className="flex items-center justify-between mb-4">
        <span
          className="text-xs font-mono px-2.5 py-1 rounded-full"
          style={{ background: `${project.color}15`, color: project.color, border: `1px solid ${project.color}30` }}
        >
          {project.category}
        </span>
        <motion.div
          animate={{ rotate: hovered ? 360 : 0 }}
          transition={{ duration: 0.5 }}
          className="w-9 h-9 rounded-lg flex items-center justify-center"
          style={{ background: `${project.color}15` }}
        >
          <Icon size={18} style={{ color: project.color }} />
        </motion.div>
      </div>

      <h3 className="text-lg font-bold text-white mb-3 group-hover:text-indigo-300 transition-all">
        {project.title}
      </h3>

      <p className="text-slate-400 text-sm leading-relaxed mb-5">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs font-mono px-2 py-0.5 rounded bg-slate-800/80 text-slate-400 border border-slate-700"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Action row */}
      <div className="flex items-center gap-3 pt-4 border-t border-slate-800">
        <motion.a
          href="#"
          className="flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-white transition-colors"
          whileHover={{ x: 2 }}
        >
          <Github size={14} />
          View Code
        </motion.a>
        <motion.a
          href="#"
          className="flex items-center gap-1.5 text-xs font-medium ml-auto"
          style={{ color: project.color }}
          whileHover={{ x: 2 }}
        >
          <ExternalLink size={14} />
          Demo
        </motion.a>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-indigo-400 font-mono text-sm tracking-widest uppercase mb-3">What I've Built</p>
          <h2 className="text-4xl md:text-5xl font-black text-white">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto text-sm">
            A collection of ML models and applications built with Python, Scikit-learn, and modern web technologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
