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

      {/* ── STICKY BOTTOM — 320x50 ───────────────────────── */}
      <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-center bg-black/80 backdrop-blur-sm py-1">
        <AdMobile id="sticky-bottom" />
      </div>

      <div className="relative z-10 pt-20">

        {/* ── 1. TOP Leaderboard ────────────────────────────── */}
        <div className="flex justify-center px-4 py-3"><AdLeaderboard id="leader-top" /></div>

        {/* ── 2. 468x60 before hero ────────────────────────── */}
        <div className="flex justify-center px-4 pb-3"><AdBanner468 id="banner-1" /></div>

        {/* HERO */}
        <Hero />

        {/* ── 3. Leaderboard after hero ────────────────────── */}
        <div className="flex justify-center px-4 py-4"><AdLeaderboard id="leader-2" /></div>

        {/* ── 4+5. Two 300x250 ─────────────────────────────── */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 px-4 pb-4 max-w-4xl mx-auto">
          <AdRectangle id="rect-1" />
          <AdRectangle id="rect-2" />
        </div>

        {/* ── 6. Native ────────────────────────────────────── */}
        <div className="max-w-5xl mx-auto px-4 pb-4"><AdNative id="native-1" /></div>

        {/* ── 7. 468x60 before about ───────────────────────── */}
        <div className="flex justify-center px-4 pb-4"><AdBanner468 id="banner-2" /></div>

        {/* ABOUT */}
        <About />

        {/* ── 8. 300x250 after about ───────────────────────── */}
        <div className="flex justify-center px-4 py-4"><AdRectangle id="rect-3" /></div>

        {/* ── 9+10+11. Three 300x250 ───────────────────────── */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 px-4 pb-4 max-w-5xl mx-auto">
          <AdRectangle id="rect-4" />
          <AdRectangle id="rect-5" />
          <AdRectangle id="rect-6" />
        </div>

        {/* ── 12. Leaderboard ──────────────────────────────── */}
        <div className="flex justify-center px-4 pb-4"><AdLeaderboard id="leader-3" /></div>

        {/* ── 13. 468x60 before projects ───────────────────── */}
        <div className="flex justify-center px-4 pb-4"><AdBanner468 id="banner-3" /></div>

        {/* PROJECTS */}
        <Projects />

        {/* ── 14. Leaderboard after projects ───────────────── */}
        <div className="flex justify-center px-4 py-4"><AdLeaderboard id="leader-4" /></div>

        {/* ── 15+16. Two Skyscrapers 160x600 ───────────────── */}
        <div className="flex justify-center gap-8 px-4 pb-4">
          <AdSkyscraper id="sky-1" />
          <AdSkyscraper id="sky-2" />
        </div>

        {/* ── 17. Native ───────────────────────────────────── */}
        <div className="max-w-5xl mx-auto px-4 pb-4"><AdNative id="native-2" /></div>

        {/* ── 18+19. Two 160x300 ───────────────────────────── */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 px-4 pb-4 max-w-4xl mx-auto">
          <AdHalfPage id="half-1" />
          <AdHalfPage id="half-2" />
        </div>

        {/* ── 20. 468x60 before skills ─────────────────────── */}
        <div className="flex justify-center px-4 pb-4"><AdBanner468 id="banner-4" /></div>

        {/* SKILLS */}
        <Skills />

        {/* ── 21. Leaderboard after skills ─────────────────── */}
        <div className="flex justify-center px-4 py-4"><AdLeaderboard id="leader-5" /></div>

        {/* ── 22+23+24. Three 300x250 ──────────────────────── */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 px-4 pb-4 max-w-5xl mx-auto">
          <AdRectangle id="rect-7" />
          <AdRectangle id="rect-8" />
          <AdRectangle id="rect-9" />
        </div>

        {/* ── 25. Native ───────────────────────────────────── */}
        <div className="max-w-5xl mx-auto px-4 pb-4"><AdNative id="native-3" /></div>

        {/* ── 26. 468x60 before contact ────────────────────── */}
        <div className="flex justify-center px-4 pb-4"><AdBanner468 id="banner-5" /></div>

        {/* CONTACT */}
        <Contact />

        {/* ── 27. Leaderboard after contact ────────────────── */}
        <div className="flex justify-center px-4 py-4"><AdLeaderboard id="leader-6" /></div>

        {/* ── 28+29. Two 300x250 ───────────────────────────── */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 px-4 pb-4 max-w-4xl mx-auto">
          <AdRectangle id="rect-10" />
          <AdRectangle id="rect-11" />
        </div>

        {/* ── 30. Final leaderboard ────────────────────────── */}
        <div className="flex justify-center px-4 pb-28"><AdLeaderboard id="leader-7" /></div>

      </div>
    </div>
  )
}
