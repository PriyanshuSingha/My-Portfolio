import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap, MapPin, Mail, Phone, Linkedin, Brain, Code2, Database } from 'lucide-react'

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' },
  }),
}

function InfoCard({ icon: Icon, label, value, href, custom }) {
  const content = (
    <motion.div
      custom={custom}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={{ y: -4, scale: 1.02 }}
      className="card-glass rounded-xl p-4 flex items-center gap-3 neon-border cursor-default group"
    >
      <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-indigo-500/30 transition-colors">
        <Icon size={18} className="text-indigo-400" />
      </div>
      <div>
        <p className="text-xs text-slate-500 font-mono">{label}</p>
        <p className="text-sm text-slate-200 font-medium">{value}</p>
      </div>
    </motion.div>
  )

  return href ? <a href={href} target="_blank" rel="noopener noreferrer">{content}</a> : content
}

export default function About() {
  const ref = useRef()
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-indigo-400 font-mono text-sm tracking-widest uppercase mb-3">Get to Know Me</p>
          <h2 className="text-4xl md:text-5xl font-black text-white">
            About <span className="text-gradient">Me</span>
          </h2>
        </motion.div>

        <div ref={ref} className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="card-glass rounded-2xl p-8 neon-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                  <Brain size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg">Priyanshu Singha</h3>
                  <p className="text-indigo-400 text-sm font-mono">AI & ML Engineering Student</p>
                </div>
              </div>

              <p className="text-slate-300 leading-relaxed mb-4">
                I am a B.Tech Computer Science Engineering student specializing in
                <span className="text-indigo-400 font-medium"> Artificial Intelligence and Machine Learning</span> at
                GIET University, Gunupur.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                I am passionate about AI, Machine Learning, and problem solving. I focus on building
                strong fundamentals in Python, data preprocessing, and ML model development.
              </p>
              <p className="text-slate-300 leading-relaxed">
                I am actively gaining industry exposure through internships and hands-on projects,
                working toward becoming a full-fledged AI engineer.
              </p>

              <div className="flex flex-wrap gap-2 mt-6">
                {['Python', 'ML', 'AI', 'Data Science', 'Deep Learning'].map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full text-xs font-mono bg-indigo-500/10 border border-indigo-500/30 text-indigo-300">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — Info cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <InfoCard icon={Mail} label="Email" value="priyanshusingha249@gmail.com" href="mailto:priyanshusingha249@gmail.com" custom={0} />
            <InfoCard icon={Phone} label="Phone" value="+91 7609012799" href="tel:+917609012799" custom={1} />
            <InfoCard icon={Linkedin} label="LinkedIn" value="Priyanshu Singha" href="https://www.linkedin.com/in/priyanshu-singha-a66222325" custom={2} />
            <InfoCard icon={GraduationCap} label="University" value="GIET University, Gunupur" custom={3} />
            <InfoCard icon={MapPin} label="Location" value="Odisha, India" custom={4} />
            <InfoCard icon={Code2} label="Focus" value="AI / ML Development" custom={5} />

            {/* CGPA highlight card */}
            <motion.div
              custom={6}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="sm:col-span-2 card-glass rounded-xl p-4 border border-cyan-500/30 bg-gradient-to-r from-cyan-500/5 to-indigo-500/5"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Database size={18} className="text-cyan-400" />
                  <span className="text-sm text-slate-300">Current CGPA</span>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-black text-gradient">8.26</span>
                  <span className="text-slate-500 text-sm ml-1">/ 10</span>
                </div>
              </div>
              <div className="mt-3 h-2 bg-slate-800 rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500"
                  initial={{ width: 0 }}
                  whileInView={{ width: '82.6%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: 'easeOut', delay: 0.5 }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
