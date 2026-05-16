"use client"

import { motion, useMotionValue, useTransform } from 'framer-motion'
import { ArrowDown, GitFork, Play } from 'lucide-react'
import { useEffect, useState } from 'react'

const roles = ['Vibecoder', 'Animator', 'Content Creator', 'Web Developer']

function TypewriterText() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout: ReturnType<typeof setTimeout>

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80)
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 40)
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false)
      setRoleIndex((prev) => (prev + 1) % roles.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, isDeleting, roleIndex])

  return (
    <span className="inline-flex items-center">
      <span style={{ background: 'linear-gradient(90deg, #818cf8, #34d399)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
        {displayed}
      </span>
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
        className="ml-0.5 inline-block w-0.5 h-12 md:h-16 bg-indigo-400 align-middle"
      />
    </span>
  )
}

function FloatingOrb({ x, y, size, color, delay }: { x: string, y: string, size: number, color: string, delay: number }) {
  return (
    <motion.div
      className="absolute rounded-full blur-3xl pointer-events-none"
      style={{ left: x, top: y, width: size, height: size, background: color }}
      animate={{ y: [0, -30, 0], x: [0, 15, 0], scale: [1, 1.05, 1] }}
      transition={{ duration: 8 + delay, repeat: Infinity, ease: 'easeInOut', delay }}
    />
  )
}

export default function Hero() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useTransform(mouseY, [-300, 300], [5, -5])
  const rotateY = useTransform(mouseX, [-300, 300], [-5, 5])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    mouseX.set(e.clientX - rect.left - rect.width / 2)
    mouseY.set(e.clientY - rect.top - rect.height / 2)
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden" onMouseMove={handleMouseMove}>
      {/* Floating orbs */}
      <FloatingOrb x="5%" y="20%" size={350} color="rgba(99,102,241,0.12)" delay={0} />
      <FloatingOrb x="70%" y="60%" size={250} color="rgba(16,185,129,0.08)" delay={2} />
      <FloatingOrb x="60%" y="5%" size={200} color="rgba(129,140,248,0.07)" delay={4} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <div className="flex flex-col items-center text-center">

          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-10"
          >
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border text-sm font-medium"
              style={{
                background: 'rgba(99,102,241,0.08)',
                borderColor: 'rgba(99,102,241,0.25)',
                color: 'rgba(199,210,254,0.9)',
              }}
            >
              <motion.span
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 rounded-full bg-emerald-400"
              />
              Open to projects & collaborations
            </div>
          </motion.div>

          {/* Main heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter leading-none mb-4">
              <span style={{ color: 'rgba(255,255,255,0.95)' }}>Hey, I'm </span>
              <motion.span
                style={{ background: 'linear-gradient(135deg, #818cf8 0%, #6366f1 40%, #34d399 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
                whileHover={{ scale: 1.02 }}
              >
                Jinny
              </motion.span>
            </h1>
          </motion.div>

          {/* Typewriter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-8 h-16 flex items-center"
          >
            <TypewriterText />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.6 }}
            className="text-lg text-gray-400 max-w-xl mb-12 leading-relaxed"
          >
            Crafting immersive digital experiences through code, motion, and storytelling.
            From animated YouTube content to pixel-perfect websites.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-4 mb-16"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.04, boxShadow: '0 0 30px rgba(99,102,241,0.35)' }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-3.5 rounded-xl font-semibold text-white text-sm transition-all duration-200"
              style={{ background: 'linear-gradient(135deg, #6366f1, #4f46e5)' }}
            >
              View My Work
            </motion.a>
            <motion.a
              href="https://github.com/Jinny-406"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 flex items-center gap-2 border"
              style={{ borderColor: 'rgba(255,255,255,0.1)', color: 'rgba(209,213,219,1)', background: 'rgba(255,255,255,0.04)' }}
            >
              <GitFork className="w-4 h-4" />
              GitHub
            </motion.a>
            <motion.a
              href="https://www.youtube.com/@J1nny-78"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 flex items-center gap-2 border"
              style={{ borderColor: 'rgba(239,68,68,0.2)', color: 'rgba(252,165,165,1)', background: 'rgba(239,68,68,0.06)' }}
            >
              <Play className="w-4 h-4" />
              YouTube
            </motion.a>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex flex-col items-center gap-2 text-gray-600"
          >
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ArrowDown className="w-4 h-4" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
