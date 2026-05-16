import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Jinny | Vibecoder & Animator',
  description: 'Creative developer specializing in animations, web development, and YouTube content creation.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        {/* Monetag verification */}
        <meta name="monetag" content="83823ff40d9d2ce9935255f930549e3d" />
      </head>
      <body className="antialiased" suppressHydrationWarning>

        {/* ── ADSTERRA GLOBAL (untouched) ─────────────────── */}
        <Script id="adsterra-popunder" src="https://pl29465417.effectivecpmnetwork.com/9d/8b/ad/9d8bad87448adfcb126831505ab24cb8.js" strategy="afterInteractive" />
        <Script id="adsterra-socialbar" src="https://pl29465419.effectivecpmnetwork.com/1b/8c/21/1b8c21f5dbb739c733822e8578b28c6c.js" strategy="afterInteractive" />

        {/* ── MONETAG GLOBAL — Vignette / Interstitial (zone 11014507) */}
        <Script id="monetag-vignette-1" strategy="afterInteractive">{`(function(s){s.dataset.zone='11014507',s.src='https://n6wxm.com/vignette.min.js'})([document.documentElement,document.body].filter(Boolean).pop().appendChild(document.createElement('script')))`}</Script>

        {/* ── MONETAG GLOBAL — Push Notifications (zone 11014506) */}
        <Script id="monetag-push" src="https://5gvci.com/act/files/tag.min.js?z=11014506" data-cfasync="false" strategy="afterInteractive" />

        {/* ── MONETAG GLOBAL — Interstitial (zone 11014505) */}
        <Script id="monetag-interstitial-1" strategy="afterInteractive">{`(function(s){s.dataset.zone='11014505',s.src='https://al5sm.com/tag.min.js'})([document.documentElement,document.body].filter(Boolean).pop().appendChild(document.createElement('script')))`}</Script>

        {/* ── MONETAG GLOBAL — In-Page Push (zone 11014502) */}
        <Script id="monetag-inpage-push-1" strategy="afterInteractive">{`(function(s){s.dataset.zone='11014502',s.src='https://nap5k.com/tag.min.js'})([document.documentElement,document.body].filter(Boolean).pop().appendChild(document.createElement('script')))`}</Script>

        {/* ── MONETAG GLOBAL — OnClick Popunder (zone 239909) */}
        <Script id="monetag-onclick" src="https://quge5.com/88/tag.min.js" data-zone="239909" data-cfasync="false" strategy="afterInteractive" />

        {/* ── MONETAG GLOBAL — Vignette (zone 11014501) */}
        <Script id="monetag-vignette-2" strategy="afterInteractive">{`(function(s){s.dataset.zone='11014501',s.src='https://n6wxm.com/vignette.min.js'})([document.documentElement,document.body].filter(Boolean).pop().appendChild(document.createElement('script')))`}</Script>

        {/* ── MONETAG GLOBAL — Vignette (zone 11014500) */}
        <Script id="monetag-vignette-3" strategy="afterInteractive">{`(function(s){s.dataset.zone='11014500',s.src='https://n6wxm.com/vignette.min.js'})([document.documentElement,document.body].filter(Boolean).pop().appendChild(document.createElement('script')))`}</Script>

        {/* ── MONETAG GLOBAL — In-Page Push (zone 11014499) */}
        <Script id="monetag-inpage-push-2" strategy="afterInteractive">{`(function(s){s.dataset.zone='11014499',s.src='https://nap5k.com/tag.min.js'})([document.documentElement,document.body].filter(Boolean).pop().appendChild(document.createElement('script')))`}</Script>

        {/* ── MONETAG GLOBAL — Interstitial (zone 11014498) */}
        <Script id="monetag-interstitial-2" strategy="afterInteractive">{`(function(s){s.dataset.zone='11014498',s.src='https://al5sm.com/tag.min.js'})([document.documentElement,document.body].filter(Boolean).pop().appendChild(document.createElement('script')))`}</Script>

        {/* ── MONETAG GLOBAL — Push (zone 11014497) */}
        <Script id="monetag-push-2" src="https://5gvci.com/act/files/tag.min.js?z=11014497" data-cfasync="false" strategy="afterInteractive" />

        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Navigation />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
