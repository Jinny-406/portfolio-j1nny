"use client"

import { useEffect, useRef } from 'react'

// Monetag In-Page Push banner — each slot gets its own iframe so zones don't clash
function MoneyIframe({ id, zone, src }: { id: string; zone: string; src: string }) {
  const html = `<!DOCTYPE html><html><head><style>*{margin:0;padding:0;overflow:hidden;background:transparent}</style></head><body><script>(function(s){s.dataset.zone='${zone}',s.src='${src}'})([document.documentElement,document.body].filter(Boolean).pop().appendChild(document.createElement('script')))<\/script></body></html>`

  return (
    <iframe
      id={`monetag-${id}`}
      srcDoc={html}
      width="100%"
      height="100"
      frameBorder="0"
      scrolling="no"
      style={{ display: 'block', border: 'none', width: '100%', minHeight: '80px' }}
    />
  )
}

// In-page push banner zone 11014502
export function MoneyInPageA({ id }: { id: string }) {
  return (
    <div className="w-full max-w-3xl mx-auto overflow-hidden rounded-xl">
      <MoneyIframe id={id} zone="11014502" src="https://nap5k.com/tag.min.js" />
    </div>
  )
}

// In-page push banner zone 11014499
export function MoneyInPageB({ id }: { id: string }) {
  return (
    <div className="w-full max-w-3xl mx-auto overflow-hidden rounded-xl">
      <MoneyIframe id={id} zone="11014499" src="https://nap5k.com/tag.min.js" />
    </div>
  )
}

// Smartlink anchor ad — styled as a glowing CTA strip
export function MoneySmartlink({ id, zone }: { id: string; zone: string }) {
  return (
    <div className="flex justify-center px-4">
      <a
        href={`https://omg10.com/4/${zone}`}
        target="_blank"
        rel="noopener noreferrer"
        id={`monetag-smartlink-${id}`}
        className="block w-full max-w-3xl py-3 text-center text-sm font-semibold rounded-xl border transition-all duration-200 hover:opacity-80"
        style={{
          background: 'linear-gradient(135deg, rgba(99,102,241,0.15), rgba(16,185,129,0.1))',
          borderColor: 'rgba(99,102,241,0.3)',
          color: 'rgba(165,180,252,0.9)',
        }}
      >
        ✦ Sponsored — Check This Out ✦
      </a>
    </div>
  )
}
