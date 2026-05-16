"use client"

import { motion } from 'framer-motion'
import { Mail, MessageSquare, Play, Code2, Send, ArrowUpRight } from 'lucide-react'
import { useState } from 'react'

const contactMethods = [
  {
    icon: <Mail className="w-5 h-5" />,
    title: "Email",
    handle: "your-email@example.com",
    description: "Project inquiries & collaborations",
    action: "mailto:your-email@example.com",
    color: '#60a5fa',
  },
  {
    icon: <MessageSquare className="w-5 h-5" />,
    title: "Discord",
    handle: "Jinny#0001",
    description: "Quick chats & community",
    action: "https://discord.com/users/712647275788107857",
    color: '#818cf8',
  },
  {
    icon: <Play className="w-5 h-5" />,
    title: "YouTube",
    handle: "@J1nny-78",
    description: "Animations & content",
    action: "https://www.youtube.com/@J1nny-78",
    color: '#f87171',
  },
  {
    icon: <Code2 className="w-5 h-5" />,
    title: "GitHub",
    handle: "Jinny-406",
    description: "Open-source projects & code",
    action: "https://github.com/Jinny-406",
    color: '#34d399',
  },
]

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-5 justify-center"
        >
          <div className="h-px w-12" style={{ background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.5))' }} />
          <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: 'rgba(129,140,248,0.8)' }}>Let's Connect</span>
          <div className="h-px w-12" style={{ background: 'linear-gradient(90deg, rgba(99,102,241,0.5), transparent)' }} />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-extrabold tracking-tighter text-center mb-5"
        >
          <span className="text-white">Ready To </span>
          <span style={{ background: 'linear-gradient(135deg, #818cf8, #34d399)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Create Something Amazing?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-center max-w-xl mx-auto mb-16"
        >
          Whether it's a website project, animation collab, or just to say hi — I'd love to hear from you.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact methods */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-3"
          >
            <h3 className="text-lg font-bold text-white mb-6">Where to Find Me</h3>

            {contactMethods.map((method, index) => (
              <motion.a
                key={method.title}
                href={method.action}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + index * 0.08 }}
                whileHover={{ x: 6, scale: 1.01 }}
                className="flex items-center gap-4 p-4 rounded-xl border group cursor-pointer transition-all duration-200"
                style={{ background: 'rgba(255,255,255,0.02)', borderColor: 'rgba(255,255,255,0.07)' }}
              >
                <div className="p-2.5 rounded-lg flex-shrink-0" style={{ background: `${method.color}15`, color: method.color }}>
                  {method.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-semibold text-white">{method.title}</div>
                  <div className="text-xs text-gray-500 truncate">{method.description}</div>
                </div>
                <ArrowUpRight
                  className="w-4 h-4 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ color: method.color }}
                />
              </motion.a>
            ))}

            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-6 flex items-center gap-3 p-4 rounded-xl border"
              style={{ background: 'rgba(52,211,153,0.05)', borderColor: 'rgba(52,211,153,0.15)' }}
            >
              <motion.span
                animate={{ scale: [1, 1.4, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0"
              />
              <div>
                <div className="text-sm font-semibold text-emerald-300">Available for new projects</div>
                <div className="text-xs text-gray-500">Typically responds within 24 hours</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-2xl border p-7"
            style={{ background: 'rgba(255,255,255,0.02)', borderColor: 'rgba(99,102,241,0.2)' }}
          >
            <h3 className="text-lg font-bold text-white mb-6">Send a Message</h3>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-12 gap-4"
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: 'rgba(52,211,153,0.15)' }}>
                  <Send className="w-5 h-5 text-emerald-400" />
                </div>
                <div className="text-white font-semibold">Message sent!</div>
                <div className="text-gray-500 text-sm text-center">I'll get back to you within 24 hours.</div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {[
                  { id: 'name', label: 'Your Name', type: 'text', placeholder: 'What should I call you?' },
                  { id: 'email', label: 'Email Address', type: 'email', placeholder: 'you@example.com' },
                ].map((field) => (
                  <div key={field.id}>
                    <label htmlFor={field.id} className="block text-sm font-medium text-gray-400 mb-2">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      id={field.id}
                      value={formData[field.id as keyof typeof formData]}
                      onChange={(e) => setFormData({ ...formData, [field.id]: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-gray-600 outline-none transition-all duration-200 border focus:border-indigo-500/50"
                      style={{ background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.08)' }}
                      placeholder={field.placeholder}
                      required
                    />
                  </div>
                ))}

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-gray-600 outline-none transition-all duration-200 border focus:border-indigo-500/50 resize-none"
                    style={{ background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.08)' }}
                    placeholder="Tell me about your project, idea, or just say hello..."
                    required
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(99,102,241,0.3)' }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3.5 rounded-xl font-semibold text-white text-sm flex items-center justify-center gap-2"
                  style={{ background: 'linear-gradient(135deg, #6366f1, #4f46e5)' }}
                >
                  Send Message
                  <Send className="w-4 h-4" />
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
