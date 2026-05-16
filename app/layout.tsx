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
        {/* Monetag site verification — must be in <head> */}
        <meta name="monetag" content="83823ff40d9d2ce9935255f930549e3d" />
      </head>
      <body className="antialiased" suppressHydrationWarning>

        {/* Adsterra Popunder — one per session */}
        <Script
          id="adsterra-popunder"
          src="https://pl29465417.effectivecpmnetwork.com/9d/8b/ad/9d8bad87448adfcb126831505ab24cb8.js"
          strategy="afterInteractive"
        />

        {/* Adsterra Social Bar — floating bar always visible */}
        <Script
          id="adsterra-socialbar"
          src="https://pl29465419.effectivecpmnetwork.com/1b/8c/21/1b8c21f5dbb739c733822e8578b28c6c.js"
          strategy="afterInteractive"
        />

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
