"use client"

import { motion } from 'framer-motion'
import { GitFork, Play, ArrowUp } from 'lucide-react'

export function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="relative border-t py-12" style={{ borderColor: 'rgba(255,255,255,0.07)', background: 'rgba(5,5,8,0.8)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold text-white"
              style={{ background: 'linear-gradient(135deg, #6366f1, #10b981)' }}
            >
              J
            </div>
            <span className="font-bold text-white tracking-tight">Jinny</span>
            <span className="text-gray-600 text-sm ml-2">— All vibes reserved.</span>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3">
            {[
              { href: 'https://github.com/Jinny-406', icon: <GitFork className="w-4 h-4" />, label: 'GitHub' },
              { href: 'https://www.youtube.com/@J1nny-78', icon: <Play className="w-4 h-4" />, label: 'YouTube' },
            ].map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={link.label}
                className="p-2 rounded-lg border text-gray-400 hover:text-white transition-colors"
                style={{ background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.08)' }}
              >
                {link.icon}
              </motion.a>
            ))}

            {/* Back to top */}
            <motion.button
              onClick={scrollTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Back to top"
              className="p-2 rounded-lg border text-gray-400 hover:text-white transition-colors ml-2"
              style={{ background: 'rgba(99,102,241,0.08)', borderColor: 'rgba(99,102,241,0.2)' }}
            >
              <ArrowUp className="w-4 h-4" />
            </motion.button>
          </div>

          <div className="text-xs text-gray-600">
            Built with Next.js · Framer Motion · Tailwind
          </div>
        </div>
      </div>
    </footer>
  )
}
