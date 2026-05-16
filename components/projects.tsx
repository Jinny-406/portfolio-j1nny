"use client"

import { motion } from 'framer-motion'
import { ExternalLink, Play, Code, TrendingUp, ArrowUpRight } from 'lucide-react'

const projects = [
  {
    title: "J1nny-78 YouTube",
    description: "Main YouTube channel focused on Minecraft animations, gaming content, and digital storytelling. Goal: 100k subscribers.",
    icon: <Play className="w-5 h-5" />,
    accentColor: '#f87171',
    glowColor: 'rgba(248,113,113,0.12)',
    borderColor: 'rgba(248,113,113,0.2)',
    link: "https://www.youtube.com/@J1nny-78",
    tags: ["Animation", "Gaming", "Storytelling"],
    status: "Growing",
    statusColor: '#4ade80',
  },
  {
    title: "LeoGoons Channel",
    description: "Secondary YouTube channel for experimental content and different animation styles. Working toward monetization.",
    icon: <TrendingUp className="w-5 h-5" />,
    accentColor: '#60a5fa',
    glowColor: 'rgba(96,165,250,0.12)',
    borderColor: 'rgba(96,165,250,0.2)',
    link: "https://www.youtube.com/@LeoGoons",
    tags: ["Experimentation", "Variety", "Monetization"],
    status: "Building",
    statusColor: '#60a5fa',
  },
  {
    title: "ChikkaPlays Channel",
    description: "Third channel exploring different content formats and community engagement strategies.",
    icon: <Play className="w-5 h-5" />,
    accentColor: '#a78bfa',
    glowColor: 'rgba(167,139,250,0.12)',
    borderColor: 'rgba(167,139,250,0.2)',
    link: "https://www.youtube.com/@ChikkaPlays",
    tags: ["Community", "Experiments", "Growth"],
    status: "Launching",
    statusColor: '#a78bfa',
  },
  {
    title: "Vibecode Tools",
    description: "Collection of web development tools and utilities built with modern frameworks and clean animations.",
    icon: <Code className="w-5 h-5" />,
    accentColor: '#34d399',
    glowColor: 'rgba(52,211,153,0.12)',
    borderColor: 'rgba(52,211,153,0.2)',
    link: "https://github.com/Jinny-406",
    tags: ["Next.js", "React", "Tailwind"],
    status: "Active",
    statusColor: '#34d399',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-5 justify-center"
        >
          <div className="h-px w-12" style={{ background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.5))' }} />
          <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: 'rgba(129,140,248,0.8)' }}>Featured Work</span>
          <div className="h-px w-12" style={{ background: 'linear-gradient(90deg, rgba(99,102,241,0.5), transparent)' }} />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-extrabold tracking-tighter text-center mb-5"
        >
          <span className="text-white">Projects That </span>
          <span style={{ background: 'linear-gradient(135deg, #818cf8, #34d399)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Define My Journey</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-center max-w-xl mx-auto mb-16"
        >
          From YouTube channels with growing communities to web apps with smooth animations.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="group relative rounded-2xl border overflow-hidden block cursor-pointer"
              style={{
                background: `radial-gradient(circle at top left, ${project.glowColor}, transparent 60%), rgba(255,255,255,0.02)`,
                borderColor: project.borderColor,
              }}
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-[1px] opacity-60"
                style={{ background: `linear-gradient(90deg, transparent, ${project.accentColor}, transparent)` }}
              />

              <div className="p-7">
                <div className="flex items-start justify-between mb-6">
                  <div className="p-2.5 rounded-xl text-white"
                    style={{ background: `${project.accentColor}20`, color: project.accentColor }}
                  >
                    {project.icon}
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold"
                    style={{ background: `${project.statusColor}15`, color: project.statusColor }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: project.statusColor }} />
                    {project.status}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-200 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 text-xs rounded-lg font-medium"
                      style={{ background: 'rgba(255,255,255,0.05)', color: 'rgba(156,163,175,1)' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-1.5 text-sm font-medium transition-all duration-200 group-hover:gap-2.5"
                  style={{ color: project.accentColor }}
                >
                  View Project
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04, boxShadow: '0 0 40px rgba(99,102,241,0.3)' }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white text-sm"
            style={{ background: 'linear-gradient(135deg, #6366f1, #4f46e5)' }}
          >
            Start a Project With Me
            <ArrowUpRight className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
