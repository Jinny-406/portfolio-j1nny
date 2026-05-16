"use client"

import Hero from '@/components/hero'
import About from '@/components/about'
import Projects from '@/components/projects'
import Skills from '@/components/skills'
import Contact from '@/components/contact'
import ScrollProgress from '@/components/scroll-progress'
import {
  AdLeaderboard,
  AdRectangle,
  AdBanner468,
  AdMobile,
  AdSkyscraper,
  AdHalfPage,
  AdNative,
} from '@/components/ad-slot'

export default function Home() {
  return (
    <div className="relative" style={{ background: '#050508' }}>
      <ScrollProgress />

      {/* Background */}
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

      {/* ── STICKY BOTTOM — Mobile 320x50 ────────────────── */}
      <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-center bg-black/80 backdrop-blur-sm py-1">
        <AdMobile id="sticky-bottom" />
      </div>

      <div className="relative z-10 pt-20">

        {/* ── 1. TOP — Leaderboard 728x90 ──────────────────── */}
        <div className="flex justify-center px-4 py-3">
          <AdLeaderboard />
        </div>

        {/* ── 2. BEFORE HERO — 468x60 ──────────────────────── */}
        <div className="flex justify-center px-4 pb-3">
          <AdBanner468 id="before-hero" />
        </div>

        {/* HERO */}
        <Hero />

        {/* ── 3. AFTER HERO — Leaderboard 728x90 ───────────── */}
        <div className="flex justify-center px-4 py-4">
          <AdLeaderboard />
        </div>

        {/* ── 4+5. TWO 300x250 SQUARES ─────────────────────── */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 px-4 pb-4 max-w-4xl mx-auto">
          <AdRectangle id="sq-1" />
          <AdRectangle id="sq-2" />
        </div>

        {/* ── 6. NATIVE BANNER ─────────────────────────────── */}
        <div className="max-w-5xl mx-auto px-4 pb-4">
          <AdNative id="native-1" />
        </div>

        {/* ── 7. BEFORE ABOUT — 468x60 ─────────────────────── */}
        <div className="flex justify-center px-4 pb-4">
          <AdBanner468 id="before-about" />
        </div>

        {/* ABOUT */}
        <About />

        {/* ── 8. AFTER ABOUT — 300x250 ─────────────────────── */}
        <div className="flex justify-center px-4 py-4">
          <AdRectangle id="after-about" />
        </div>

        {/* ── 9+10+11. THREE 300x250 ────────────────────────── */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 px-4 pb-4 max-w-5xl mx-auto">
          <AdRectangle id="triple-1" />
          <AdRectangle id="triple-2" />
          <AdRectangle id="triple-3" />
        </div>

        {/* ── 12. LEADERBOARD ──────────────────────────────── */}
        <div className="flex justify-center px-4 pb-4">
          <AdLeaderboard />
        </div>

        {/* ── 13. BEFORE PROJECTS — 468x60 ─────────────────── */}
        <div className="flex justify-center px-4 pb-4">
          <AdBanner468 id="before-projects" />
        </div>

        {/* PROJECTS */}
        <Projects />

        {/* ── 14. AFTER PROJECTS — Leaderboard ─────────────── */}
        <div className="flex justify-center px-4 py-4">
          <AdLeaderboard />
        </div>

        {/* ── 15+16. 160x600 SKYSCRAPERS SIDE BY SIDE ──────── */}
        <div className="flex justify-center gap-8 px-4 pb-4">
          <AdSkyscraper id="sky-1" />
          <AdSkyscraper id="sky-2" />
        </div>

        {/* ── 17. NATIVE BANNER ────────────────────────────── */}
        <div className="max-w-5xl mx-auto px-4 pb-4">
          <AdNative id="native-2" />
        </div>

        {/* ── 18+19. TWO 160x300 HALF-PAGE ─────────────────── */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 px-4 pb-4 max-w-4xl mx-auto">
          <AdHalfPage id="half-1" />
          <AdHalfPage id="half-2" />
        </div>

        {/* ── 20. BEFORE SKILLS — 468x60 ───────────────────── */}
        <div className="flex justify-center px-4 pb-4">
          <AdBanner468 id="before-skills" />
        </div>

        {/* SKILLS */}
        <Skills />

        {/* ── 21. AFTER SKILLS — Leaderboard ───────────────── */}
        <div className="flex justify-center px-4 py-4">
          <AdLeaderboard />
        </div>

        {/* ── 22+23+24. THREE 300x250 ───────────────────────── */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 px-4 pb-4 max-w-5xl mx-auto">
          <AdRectangle id="mid-1" />
          <AdRectangle id="mid-2" />
          <AdRectangle id="mid-3" />
        </div>

        {/* ── 25. NATIVE BANNER ────────────────────────────── */}
        <div className="max-w-5xl mx-auto px-4 pb-4">
          <AdNative id="native-3" />
        </div>

        {/* ── 26. BEFORE CONTACT — 468x60 ──────────────────── */}
        <div className="flex justify-center px-4 pb-4">
          <AdBanner468 id="before-contact" />
        </div>

        {/* CONTACT */}
        <Contact />

        {/* ── 27. AFTER CONTACT — Leaderboard ──────────────── */}
        <div className="flex justify-center px-4 py-4">
          <AdLeaderboard />
        </div>

        {/* ── 28+29. TWO 300x250 ────────────────────────────── */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 px-4 pb-4 max-w-4xl mx-auto">
          <AdRectangle id="footer-1" />
          <AdRectangle id="footer-2" />
        </div>

        {/* ── 30. FINAL LEADERBOARD ────────────────────────── */}
        <div className="flex justify-center px-4 pb-28">
          <AdLeaderboard />
        </div>

      </div>
    </div>
  )
}
