import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail, Phone, Linkedin, Github, MessageCircle, CheckCircle } from 'lucide-react'

const socials = [
  { icon: Mail, label: 'Email', value: 'priyanshusingha249@gmail.com', href: 'mailto:priyanshusingha249@gmail.com', color: '#6366f1' },
  { icon: Phone, label: 'Phone', value: '+91 7609012799', href: 'tel:+917609012799', color: '#22d3ee' },
  { icon: Linkedin, label: 'LinkedIn', value: 'Priyanshu Singha', href: 'https://www.linkedin.com/in/priyanshu-singha-a66222325', color: '#0ea5e9' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSent(true)
      setForm({ name: '', email: '', message: '' })
      setTimeout(() => setSent(false), 4000)
    }, 1500)
  }

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-indigo-400 font-mono text-sm tracking-widest uppercase mb-3">Let's Connect</p>
          <h2 className="text-4xl md:text-5xl font-black text-white">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-lg mx-auto text-sm">
            I'm open to internship opportunities, collaborations, and exciting projects. Let's build something together!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="card-glass rounded-2xl p-8 neon-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/20 flex items-center justify-center">
                  <MessageCircle size={18} className="text-indigo-400" />
                </div>
                <h3 className="font-bold text-white">Contact Information</h3>
              </div>

              <div className="space-y-4">
                {socials.map((s) => {
                  const Icon = s.icon
                  return (
                    <motion.a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 4 }}
                      className="flex items-center gap-4 group"
                    >
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                        style={{ background: `${s.color}15`, border: `1px solid ${s.color}30` }}
                      >
                        <Icon size={16} style={{ color: s.color }} />
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 font-mono">{s.label}</p>
                        <p className="text-sm text-slate-300 group-hover:text-white transition-colors">{s.value}</p>
                      </div>
                    </motion.a>
                  )
                })}
              </div>
            </div>

            {/* Availability card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="card-glass rounded-2xl p-6 border border-green-500/20 bg-gradient-to-br from-green-500/5 to-indigo-500/5"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400 font-mono text-sm font-medium">Available for Opportunities</span>
              </div>
              <p className="text-slate-400 text-sm">
                Currently looking for <span className="text-white">internships</span> and
                <span className="text-white"> entry-level positions</span> in AI/ML development.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="card-glass rounded-2xl p-8 neon-border space-y-5">
              <h3 className="font-bold text-white text-lg mb-6">Send a Message</h3>

              {/* Name */}
              <div>
                <label className="block text-xs text-slate-400 font-mono mb-2">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full bg-slate-800/60 border border-slate-700 focus:border-indigo-500 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-colors focus:ring-1 focus:ring-indigo-500/30"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs text-slate-400 font-mono mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="w-full bg-slate-800/60 border border-slate-700 focus:border-indigo-500 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-colors focus:ring-1 focus:ring-indigo-500/30"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs text-slate-400 font-mono mb-2">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about the opportunity..."
                  className="w-full bg-slate-800/60 border border-slate-700 focus:border-indigo-500 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-colors focus:ring-1 focus:ring-indigo-500/30 resize-none"
                />
              </div>

              <motion.button
                type="submit"
                disabled={loading || sent}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold text-sm hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 disabled:opacity-70"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {sent ? (
                  <>
                    <CheckCircle size={18} className="text-green-400" />
                    Message Sent!
                  </>
                ) : loading ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
