"use client"

import Hero from '@/components/hero'
import About from '@/components/about'
import Projects from '@/components/projects'
import Skills from '@/components/skills'
import Contact from '@/components/contact'
import ScrollProgress from '@/components/scroll-progress'
import { AdSlot } from '@/components/ad-slot'

export default function Home() {
  return (
    <div className="relative" style={{ background: '#050508' }}>
      <ScrollProgress />

      {/* Deep space background */}
      <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none">
        <div className="absolute inset-0" style={{ background: '#050508' }} />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] opacity-20 blur-3xl"
          style={{ background: 'radial-gradient(ellipse at center, #6366f1 0%, transparent 70%)' }} />
        <div className="absolute -bottom-40 right-0 w-[600px] h-[400px] opacity-10 blur-3xl"
          style={{ background: 'radial-gradient(ellipse at center, #10b981 0%, transparent 70%)' }} />
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(99,102,241,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.5) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }} />
      </div>

      {/* ── 1. STICKY BOTTOM BAR ─────────────────────────── */}
      <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-center px-4 pb-1">
        <AdSlot id="sticky-bottom" label="Sticky Bottom 728x90" height="60px" className="max-w-3xl rounded-xl overflow-hidden" />
      </div>

      {/* ── 2. STICKY TOP BAR (above content, below nav) ─── */}
      <div className="fixed top-16 left-0 right-0 z-40 flex justify-center px-4">
        <AdSlot id="sticky-top" label="Sticky Top 728x90" height="50px" className="max-w-3xl rounded-lg overflow-hidden opacity-90" />
      </div>

      <div className="relative z-10 pt-16">

        {/* ── 3. TOP LEADERBOARD ───────────────────────────── */}
        <div className="flex justify-center px-4 pt-4 pb-2">
          <AdSlot id="top-leaderboard" label="Leaderboard 970x90" height="90px" className="max-w-5xl rounded-xl overflow-hidden" />
        </div>

        {/* ── 4. BEFORE HERO — FULL WIDTH ─────────────────── */}
        <div className="flex justify-center px-4 pb-2">
          <AdSlot id="before-hero" label="Banner 728x90" height="90px" className="max-w-3xl rounded-xl overflow-hidden" />
        </div>

        {/* HERO SECTION */}
        <Hero />

        {/* ── 5. AFTER HERO LEADERBOARD ────────────────────── */}
        <div className="flex justify-center px-6 py-6">
          <AdSlot id="after-hero" label="Leaderboard 728x90" height="90px" className="max-w-3xl rounded-xl overflow-hidden" />
        </div>

        {/* ── 6 + 7. DOUBLE SQUARE ROW ─────────────────────── */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 px-6 pb-6 max-w-4xl mx-auto">
          <AdSlot id="square-1" label="Square 300x250" height="250px" className="w-full sm:w-[300px] rounded-xl overflow-hidden flex-shrink-0" />
          <AdSlot id="square-2" label="Square 300x250" height="250px" className="w-full sm:w-[300px] rounded-xl overflow-hidden flex-shrink-0" />
        </div>

        {/* ── 8. BEFORE ABOUT ──────────────────────────────── */}
        <div className="flex justify-center px-6 pb-4">
          <AdSlot id="before-about" label="Banner 728x90" height="90px" className="max-w-3xl rounded-xl overflow-hidden" />
        </div>

        {/* ABOUT SECTION */}
        <About />

        {/* ── 9. AFTER ABOUT ───────────────────────────────── */}
        <div className="flex justify-center px-6 py-6">
          <AdSlot id="after-about" label="Rectangle 336x280" height="280px" className="w-full max-w-sm rounded-xl overflow-hidden" />
        </div>

        {/* ── 10 + 11 + 12. TRIPLE SQUARE ROW ─────────────── */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 px-6 pb-6 max-w-5xl mx-auto">
          <AdSlot id="triple-left"   label="Square 300x250" height="250px" className="w-full sm:w-[300px] rounded-xl overflow-hidden flex-shrink-0" />
          <AdSlot id="triple-center" label="Square 300x250" height="250px" className="w-full sm:w-[300px] rounded-xl overflow-hidden flex-shrink-0" />
          <AdSlot id="triple-right"  label="Square 300x250" height="250px" className="w-full sm:w-[300px] rounded-xl overflow-hidden flex-shrink-0" />
        </div>

        {/* ── 13. BEFORE PROJECTS ──────────────────────────── */}
        <div className="flex justify-center px-6 pb-4">
          <AdSlot id="before-projects" label="Leaderboard 970x90" height="90px" className="max-w-5xl rounded-xl overflow-hidden" />
        </div>

        {/* PROJECTS SECTION */}
        <Projects />

        {/* ── 14. AFTER PROJECTS ───────────────────────────── */}
        <div className="flex justify-center px-6 py-6">
          <AdSlot id="after-projects" label="Leaderboard 970x90" height="90px" className="max-w-5xl rounded-xl overflow-hidden" />
        </div>

        {/* ── 15. MID BILLBOARD ────────────────────────────── */}
        <div className="flex justify-center px-6 pb-6">
          <AdSlot id="billboard-1" label="Billboard 970x250" height="250px" className="max-w-5xl rounded-xl overflow-hidden" />
        </div>

        {/* ── 16 + 17. SIDE-BY-SIDE SQUARES ───────────────── */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 px-6 pb-6 max-w-4xl mx-auto">
          <AdSlot id="mid-left"  label="Square 300x250" height="250px" className="w-full sm:w-[300px] rounded-xl overflow-hidden flex-shrink-0" />
          <AdSlot id="mid-right" label="Square 300x250" height="250px" className="w-full sm:w-[300px] rounded-xl overflow-hidden flex-shrink-0" />
        </div>

        {/* ── 18. BEFORE SKILLS ────────────────────────────── */}
        <div className="flex justify-center px-6 pb-4">
          <AdSlot id="before-skills" label="Banner 728x90" height="90px" className="max-w-3xl rounded-xl overflow-hidden" />
        </div>

        {/* SKILLS SECTION */}
        <Skills />

        {/* ── 19. AFTER SKILLS ─────────────────────────────── */}
        <div className="flex justify-center px-6 py-6">
          <AdSlot id="after-skills" label="Banner 728x90" height="90px" className="max-w-3xl rounded-xl overflow-hidden" />
        </div>

        {/* ── 20. SECOND BILLBOARD ─────────────────────────── */}
        <div className="flex justify-center px-6 pb-6">
          <AdSlot id="billboard-2" label="Billboard 970x250" height="250px" className="max-w-5xl rounded-xl overflow-hidden" />
        </div>

        {/* ── 21. BEFORE CONTACT ───────────────────────────── */}
        <div className="flex justify-center px-6 pb-4">
          <AdSlot id="before-contact" label="Banner 728x90" height="90px" className="max-w-3xl rounded-xl overflow-hidden" />
        </div>

        {/* CONTACT SECTION */}
        <Contact />

        {/* ── 22. AFTER CONTACT ────────────────────────────── */}
        <div className="flex justify-center px-6 py-6">
          <AdSlot id="after-contact" label="Leaderboard 728x90" height="90px" className="max-w-3xl rounded-xl overflow-hidden" />
        </div>

        {/* ── 23. PRE-FOOTER LEADERBOARD ───────────────────── */}
        <div className="flex justify-center px-6 pb-6">
          <AdSlot id="pre-footer-leaderboard" label="Leaderboard 970x90" height="90px" className="max-w-5xl rounded-xl overflow-hidden" />
        </div>

        {/* ── 24 + 25 + 26. FOOTER TRIPLE ─────────────────── */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 px-6 pb-6 max-w-5xl mx-auto">
          <AdSlot id="footer-left"   label="Square 300x250" height="250px" className="w-full sm:w-[300px] rounded-xl overflow-hidden flex-shrink-0" />
          <AdSlot id="footer-center" label="Square 300x250" height="250px" className="w-full sm:w-[300px] rounded-xl overflow-hidden flex-shrink-0" />
          <AdSlot id="footer-right"  label="Square 300x250" height="250px" className="w-full sm:w-[300px] rounded-xl overflow-hidden flex-shrink-0" />
        </div>

        {/* ── 27. BOTTOM LEADERBOARD ───────────────────────── */}
        <div className="flex justify-center px-6 pb-24">
          <AdSlot id="bottom-leaderboard" label="Leaderboard 970x90" height="90px" className="max-w-5xl rounded-xl overflow-hidden" />
        </div>

      </div>
    </div>
  )
}
