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
      <body className="antialiased" suppressHydrationWarning>

        {/* =====================================================
            MONETAG — SITE-WIDE SCRIPT
            Paste your Monetag script src below, replacing the
            placeholder. Get it from: monetag.com → My Sites → Get Code

            Example:
            <Script src="https://alwingulla.com/88/tag.min.js"
                    data-zone="12345" async />
            ===================================================== */}
        {/* <Script src="PASTE_MONETAG_SRC_HERE" async /> */}

        {/* =====================================================
            ADSTERRA — SITE-WIDE SCRIPT
            Paste your Adsterra site verification / global script
            below. Get it from: publishers.adsterra.com → Sites → Script

            Example:
            <Script src="//www.highperformanceformat.com/XXXXXXXX/invoke.js"
                    async />
            ===================================================== */}
        {/* <Script src="PASTE_ADSTERRA_SRC_HERE" async /> */}

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
