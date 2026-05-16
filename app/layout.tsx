import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Jinny | Vibecoder & Animator',
  description: 'Creative developer specializing in animations, web development, and YouTube content creation.',
  other: {
    // Monetag site verification
    monetag: '7b68f3121dab2fec8233b1ff178b7d47',
  },
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
        <meta name="monetag" content="7b68f3121dab2fec8233b1ff178b7d47" />
      </head>
      <body className="antialiased" suppressHydrationWarning>

        {/* Adsterra — Popunder (fires once per session) */}
        <Script src="https://pl29465417.effectivecpmnetwork.com/9d/8b/ad/9d8bad87448adfcb126831505ab24cb8.js" strategy="afterInteractive" />

        {/* Adsterra — Social Bar (floating icons on edge of screen) */}
        <Script src="https://pl29465419.effectivecpmnetwork.com/1b/8c/21/1b8c21f5dbb739c733822e8578b28c6c.js" strategy="afterInteractive" />

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
