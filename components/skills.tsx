"use client"

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code2, Palette, Film, Users, Zap } from 'lucide-react'

const skills = [
  {
    category: "Animation & Motion",
    icon: <Film className="w-5 h-5" />,
    color: '#a78bfa',
    technologies: [
      { name: "Framer Motion", level: 85 },
      { name: "GSAP", level: 80 },
      { name: "Three.js", level: 60 },
      { name: "Lottie", level: 70 },
    ],
  },
  {
    category: "Web Development",
    icon: <Code2 className="w-5 h-5" />,
    color: '#818cf8',
    technologies: [
      { name: "Next.js", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 95 },
      { name: "React", level: 90 },
    ],
  },
  {
    category: "Design & UI/UX",
    icon: <Palette className="w-5 h-5" />,
    color: '#38bdf8',
    technologies: [
      { name: "Design Systems", level: 80 },
      { name: "Figma", level: 75 },
      { name: "Accessibility", level: 85 },
      { name: "Responsive Design", level: 90 },
    ],
  },
  {
    category: "Content Creation",
    icon: <Users className="w-5 h-5" />,
    color: '#f87171',
    technologies: [
      { name: "YouTube Management", level: 85 },
      { name: "Video Editing", level: 80 },
      { name: "Minecraft Animation", level: 90 },
      { name: "Storytelling", level: 85 },
    ],
  },
  {
    category: "Performance",
    icon: <Zap className="w-5 h-5" />,
    color: '#34d399',
    technologies: [
      { name: "Web Performance", level: 85 },
      { name: "Bundle Optimization", level: 80 },
      { name: "Image Optimization", level: 90 },
      { name: "Animation Performance", level: 75 },
    ],
  },
]

interface SkillBarProps {
  name: string
  level: number
  color: string
  delay: number
}

function SkillBar({ name, level, color, delay }: SkillBarProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-gray-300">{name}</span>
        <span className="text-xs font-mono" style={{ color }}>{level}%</span>
      </div>
      <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.05)' }}>
        <motion.div
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}80, ${color})` }}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-5 justify-center"
        >
          <div className="h-px w-12" style={{ background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.5))' }} />
          <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: 'rgba(129,140,248,0.8)' }}>Skills & Expertise</span>
          <div className="h-px w-12" style={{ background: 'linear-gradient(90deg, rgba(99,102,241,0.5), transparent)' }} />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-extrabold tracking-tighter text-center mb-5"
        >
          <span className="text-white">Tools & Techniques </span>
          <span style={{ background: 'linear-gradient(135deg, #818cf8, #34d399)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Behind The Magic</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-center max-w-xl mx-auto mb-16"
        >
          From smooth animations to performant websites — here's how I bring digital experiences to life.
        </motion.p>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((skillGroup, groupIndex) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: groupIndex * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-2xl border p-6 overflow-hidden group"
              style={{
                background: 'rgba(255,255,255,0.02)',
                borderColor: 'rgba(255,255,255,0.07)',
              }}
            >
              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `radial-gradient(circle at 50% 0%, ${skillGroup.color}10, transparent 70%)` }}
              />
              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-[1px] opacity-40"
                style={{ background: `linear-gradient(90deg, transparent, ${skillGroup.color}, transparent)` }}
              />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg" style={{ background: `${skillGroup.color}20`, color: skillGroup.color }}>
                    {skillGroup.icon}
                  </div>
                  <h3 className="font-bold text-white">{skillGroup.category}</h3>
                </div>

                <div className="space-y-4">
                  {skillGroup.technologies.map((tech, techIndex) => (
                    <SkillBar
                      key={tech.name}
                      name={tech.name}
                      level={tech.level}
                      color={skillGroup.color}
                      delay={groupIndex * 0.08 + techIndex * 0.08}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Philosophy card — spans 2 columns on lg */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-2 rounded-2xl border p-6"
            style={{ background: 'linear-gradient(135deg, rgba(99,102,241,0.08), rgba(52,211,153,0.04))', borderColor: 'rgba(99,102,241,0.2)' }}
          >
            <h3 className="text-lg font-bold text-white mb-6 text-center">My Development Philosophy</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { num: '01', label: 'Performance First', desc: 'Every animation runs at 60fps. Every page loads instantly.', color: '#34d399' },
                { num: '02', label: 'Intentional Motion', desc: 'Animations guide the user, not distract them. Movement has meaning.', color: '#818cf8' },
                { num: '03', label: 'Clean Code', desc: 'Readable, maintainable, elegant. The best code disappears.', color: '#38bdf8' },
              ].map((item) => (
                <div key={item.num} className="text-center p-4">
                  <div className="text-3xl font-extrabold mb-2" style={{ color: item.color }}>{item.num}</div>
                  <div className="font-semibold text-white mb-2">{item.label}</div>
                  <div className="text-sm text-gray-500">{item.desc}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
