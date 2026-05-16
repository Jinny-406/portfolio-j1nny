"use client"

import Hero from '@/components/hero'
import About from '@/components/about'
import Projects from '@/components/projects'
import Skills from '@/components/skills'
import Contact from '@/components/contact'
import ScrollProgress from '@/components/scroll-progress'
import { AdLeaderboard, AdRectangle, AdBanner468, AdMobile, AdSkyscraper, AdHalfPage, AdNative } from '@/components/ad-slot'
import { MoneyInPageA, MoneyInPageB, MoneySmartlink } from '@/components/monetag-slot'

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

      {/* ── STICKY BOTTOM — Adsterra 320x50 ─────────────── */}
      <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-center bg-black/80 backdrop-blur-sm py-1">
        <AdMobile id="sticky-bottom" />
      </div>

      <div className="relative z-10 pt-20">

        {/* ══ ADSTERRA 1 — Leaderboard ─────────────────────── */}
        <div className="flex justify-center px-4 py-3"><AdLeaderboard id="leader-top" /></div>

        {/* ══ MONETAG 1 — Smartlink strip ──────────────────── */}
        <div className="pb-3"><MoneySmartlink id="sm-1" zone="11014504" /></div>

        {/* ══ ADSTERRA 2 — 468x60 ──────────────────────────── */}
        <div className="flex justify-center px-4 pb-3"><AdBanner468 id="banner-1" /></div>

        {/* ══ MONETAG 2 — In-Page Push A ───────────────────── */}
        <div className="px-4 pb-3"><MoneyInPageA id="ipa-1" /></div>

        {/* HERO */}
        <Hero />

        {/* ══ ADSTERRA 3 — Leaderboard ─────────────────────── */}
        <div className="flex justify-center px-4 py-4"><AdLeaderboard id="leader-2" /></div>

        {/* ══ MONETAG 3 — In-Page Push B ───────────────────── */}
        <div className="px-4 pb-4"><MoneyInPageB id="ipb-1" /></div>

        {/* ══ ADSTERRA 4+5 — Two 300x250 ───────────────────── */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 px-4 pb-4 max-w-4xl mx-auto">
          <AdRectangle id="rect-1" />
          <AdRectangle id="rect-2" />
        </div>

        {/* ══ MONETAG 4 — Smartlink strip ──────────────────── */}
        <div className="pb-4"><MoneySmartlink id="sm-2" zone="11014503" /></div>

        {/* ══ ADSTERRA 6 — Native ──────────────────────────── */}
        <div className="max-w-5xl mx-auto px-4 pb-4"><AdNative id="native-1" /></div>

        {/* ══ MONETAG 5 — In-Page Push A ───────────────────── */}
        <div className="px-4 pb-4"><MoneyInPageA id="ipa-2" /></div>

        {/* ══ ADSTERRA 7 — 468x60 ──────────────────────────── */}
        <div className="flex justify-center px-4 pb-4"><AdBanner468 id="banner-2" /></div>

        {/* ══ MONETAG 6 — Smartlink strip ──────────────────── */}
        <div className="pb-4"><MoneySmartlink id="sm-3" zone="11014504" /></div>

        {/* ABOUT */}
        <About />

        {/* ══ ADSTERRA 8 — 300x250 ─────────────────────────── */}
        <div className="flex justify-center px-4 py-4"><AdRectangle id="rect-3" /></div>

        {/* ══ MONETAG 7 — In-Page Push B ───────────────────── */}
        <div className="px-4 pb-4"><MoneyInPageB id="ipb-2" /></div>

        {/* ══ ADSTERRA 9+10+11 — Three 300x250 ────────────── */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 px-4 pb-4 max-w-5xl mx-auto">
          <AdRectangle id="rect-4" />
          <AdRectangle id="rect-5" />
          <AdRectangle id="rect-6" />
        </div>

        {/* ══ MONETAG 8 — In-Page Push A ───────────────────── */}
        <div className="px-4 pb-4"><MoneyInPageA id="ipa-3" /></div>

        {/* ══ ADSTERRA 12 — Leaderboard ────────────────────── */}
        <div className="flex justify-center px-4 pb-4"><AdLeaderboard id="leader-3" /></div>

        {/* ══ MONETAG 9 — Smartlink strip ──────────────────── */}
        <div className="pb-4"><MoneySmartlink id="sm-4" zone="11014503" /></div>

        {/* ══ ADSTERRA 13 — 468x60 ─────────────────────────── */}
        <div className="flex justify-center px-4 pb-4"><AdBanner468 id="banner-3" /></div>

        {/* PROJECTS */}
        <Projects />

        {/* ══ ADSTERRA 14 — Leaderboard ────────────────────── */}
        <div className="flex justify-center px-4 py-4"><AdLeaderboard id="leader-4" /></div>

        {/* ══ MONETAG 10 — In-Page Push B ──────────────────── */}
        <div className="px-4 pb-4"><MoneyInPageB id="ipb-3" /></div>

        {/* ══ ADSTERRA 15+16 — Two Skyscrapers ────────────── */}
        <div className="flex justify-center gap-8 px-4 pb-4">
          <AdSkyscraper id="sky-1" />
          <AdSkyscraper id="sky-2" />
        </div>

        {/* ══ MONETAG 11 — Smartlink strip ─────────────────── */}
        <div className="pb-4"><MoneySmartlink id="sm-5" zone="11014504" /></div>

        {/* ══ ADSTERRA 17 — Native ─────────────────────────── */}
        <div className="max-w-5xl mx-auto px-4 pb-4"><AdNative id="native-2" /></div>

        {/* ══ MONETAG 12 — In-Page Push A ──────────────────── */}
        <div className="px-4 pb-4"><MoneyInPageA id="ipa-4" /></div>

        {/* ══ ADSTERRA 18+19 — Two 160x300 ────────────────── */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 px-4 pb-4 max-w-4xl mx-auto">
          <AdHalfPage id="half-1" />
          <AdHalfPage id="half-2" />
        </div>

        {/* ══ MONETAG 13 — In-Page Push B ──────────────────── */}
        <div className="px-4 pb-4"><MoneyInPageB id="ipb-4" /></div>

        {/* ══ ADSTERRA 20 — 468x60 ─────────────────────────── */}
        <div className="flex justify-center px-4 pb-4"><AdBanner468 id="banner-4" /></div>

        {/* SKILLS */}
        <Skills />

        {/* ══ ADSTERRA 21 — Leaderboard ────────────────────── */}
        <div className="flex justify-center px-4 py-4"><AdLeaderboard id="leader-5" /></div>

        {/* ══ MONETAG 14 — Smartlink strip ─────────────────── */}
        <div className="pb-4"><MoneySmartlink id="sm-6" zone="11014503" /></div>

        {/* ══ ADSTERRA 22+23+24 — Three 300x250 ───────────── */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 px-4 pb-4 max-w-5xl mx-auto">
          <AdRectangle id="rect-7" />
          <AdRectangle id="rect-8" />
          <AdRectangle id="rect-9" />
        </div>

        {/* ══ MONETAG 15 — In-Page Push A ──────────────────── */}
        <div className="px-4 pb-4"><MoneyInPageA id="ipa-5" /></div>

        {/* ══ ADSTERRA 25 — Native ─────────────────────────── */}
        <div className="max-w-5xl mx-auto px-4 pb-4"><AdNative id="native-3" /></div>

        {/* ══ MONETAG 16 — In-Page Push B ──────────────────── */}
        <div className="px-4 pb-4"><MoneyInPageB id="ipb-5" /></div>

        {/* ══ ADSTERRA 26 — 468x60 ─────────────────────────── */}
        <div className="flex justify-center px-4 pb-4"><AdBanner468 id="banner-5" /></div>

        {/* ══ MONETAG 17 — Smartlink strip ─────────────────── */}
        <div className="pb-4"><MoneySmartlink id="sm-7" zone="11014504" /></div>

        {/* CONTACT */}
        <Contact />

        {/* ══ ADSTERRA 27 — Leaderboard ────────────────────── */}
        <div className="flex justify-center px-4 py-4"><AdLeaderboard id="leader-6" /></div>

        {/* ══ MONETAG 18 — In-Page Push A ──────────────────── */}
        <div className="px-4 pb-4"><MoneyInPageA id="ipa-6" /></div>

        {/* ══ ADSTERRA 28+29 — Two 300x250 ────────────────── */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 px-4 pb-4 max-w-4xl mx-auto">
          <AdRectangle id="rect-10" />
          <AdRectangle id="rect-11" />
        </div>

        {/* ══ MONETAG 19 — In-Page Push B ──────────────────── */}
        <div className="px-4 pb-4"><MoneyInPageB id="ipb-6" /></div>

        {/* ══ MONETAG 20 — Smartlink strip ─────────────────── */}
        <div className="pb-4"><MoneySmartlink id="sm-8" zone="11014503" /></div>

        {/* ══ ADSTERRA 30 — Final Leaderboard ─────────────── */}
        <div className="flex justify-center px-4 pb-28"><AdLeaderboard id="leader-7" /></div>

      </div>
    </div>
  )
}
