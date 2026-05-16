"use client"

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { Video, Code, Palette, User } from 'lucide-react'

interface StatProps {
  icon: React.ReactNode
  value: string
  label: string
  description: string
  delay: number
}

function AnimatedStat({ icon, value, label, description, delay }: StatProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)
  const numericValue = parseInt(value)

  useEffect(() => {
    if (!isInView) return
    const timeout = setTimeout(() => {
      let start = 0
      const end = numericValue
      const duration = 1500
      const step = Math.ceil(end / (duration / 16))
      const timer = setInterval(() => {
        start += step
        if (start >= end) {
          setCount(end)
          clearInterval(timer)
        } else {
          setCount(start)
        }
      }, 16)
      return () => clearInterval(timer)
    }, delay * 1000)
    return () => clearTimeout(timeout)
  }, [isInView, numericValue, delay])

  const suffix = value.replace(/[0-9]/g, '')

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="relative p-6 rounded-2xl border flex flex-col items-center text-center overflow-hidden group cursor-default"
      style={{ background: 'rgba(255,255,255,0.03)', borderColor: 'rgba(255,255,255,0.07)' }}
    >
      {/* Hover glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: 'radial-gradient(circle at 50% 0%, rgba(99,102,241,0.08), transparent 70%)' }}
      />
      <div className="p-3 rounded-xl mb-4 text-white"
        style={{ background: 'linear-gradient(135deg, rgba(99,102,241,0.2), rgba(16,185,129,0.2))' }}
      >
        {icon}
      </div>
      <div className="text-3xl font-extrabold text-white mb-1">
        {isInView ? count : 0}{suffix}
      </div>
      <div className="text-sm font-semibold text-white/80 mb-1">{label}</div>
      <div className="text-xs text-gray-500">{description}</div>
    </motion.div>
  )
}

export default function About() {
  const stats = [
    { icon: <Video className="w-5 h-5" />, label: 'YouTube Channels', value: '3+', description: 'Growing communities' },
    { icon: <Code className="w-5 h-5" />, label: 'Projects Built', value: '20+', description: 'Web & desktop apps' },
    { icon: <Palette className="w-5 h-5" />, label: 'Animations Created', value: '50+', description: 'Minecraft & more' },
    { icon: <User className="w-5 h-5" />, label: 'Years Creating', value: '3+', description: 'Digital experiences' },
  ]

  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-5 justify-center"
        >
          <div className="h-px w-12" style={{ background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.5))' }} />
          <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: 'rgba(129,140,248,0.8)' }}>About Me</span>
          <div className="h-px w-12" style={{ background: 'linear-gradient(90deg, rgba(99,102,241,0.5), transparent)' }} />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-extrabold tracking-tighter text-center mb-16"
        >
          <span className="text-white">The Story Behind </span>
          <span style={{ background: 'linear-gradient(135deg, #818cf8, #34d399)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>The Code</span>
        </motion.h2>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {stats.map((s, i) => (
            <AnimatedStat key={s.label} {...s} delay={i * 0.1} />
          ))}
        </div>

        {/* Two column content */}
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-5"
          >
            <p className="text-gray-300 text-lg leading-relaxed">
              As a <span className="text-white font-semibold">vibecoder</span>, I believe great digital experiences come from understanding both the technical and emotional side of creation.
            </p>
            <p className="text-gray-400 leading-relaxed">
              My journey started with Minecraft animations on YouTube, where I learned the power of storytelling through motion. This evolved into web development where I combine animations with clean code.
            </p>
            <div className="p-5 rounded-xl border"
              style={{ background: 'rgba(99,102,241,0.06)', borderColor: 'rgba(99,102,241,0.2)' }}
            >
              <p className="text-sm font-semibold text-indigo-300 mb-2">My Philosophy</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Code should not only work — it should <span className="text-emerald-400 font-medium">feel</span> right. Animations should enhance, not distract. Every pixel should have intention.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-2xl border p-6 space-y-4"
            style={{ background: 'rgba(255,255,255,0.02)', borderColor: 'rgba(255,255,255,0.07)' }}
          >
            <h3 className="text-lg font-bold text-white mb-5">Currently Focused On</h3>
            {[
              { title: 'YouTube Growth', desc: 'Building multiple channels with engaging animations and content', color: '#f87171' },
              { title: 'Web Development', desc: 'Creating premium websites with smooth animations and clean code', color: '#818cf8' },
              { title: 'Skill Mastery', desc: 'Deepening expertise in Framer Motion, GSAP, and Three.js', color: '#34d399' },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="flex gap-4 p-4 rounded-xl"
                style={{ background: 'rgba(255,255,255,0.03)' }}
              >
                <div className="w-1 rounded-full flex-shrink-0" style={{ background: item.color }} />
                <div>
                  <div className="text-sm font-semibold text-white mb-1">{item.title}</div>
                  <div className="text-xs text-gray-500">{item.desc}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
