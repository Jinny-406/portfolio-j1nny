"use client"

import { useEffect, useRef } from 'react'

interface AdConfig {
  key: string
  width: number
  height: number
}

function InjectAd({ id, config }: { id: string; config: AdConfig }) {
  const ref = useRef<HTMLDivElement>(null)
  const injected = useRef(false)

  useEffect(() => {
    if (injected.current || !ref.current) return
    injected.current = true

    // Options script
    const optScript = document.createElement('script')
    optScript.text = `atOptions = { 'key': '${config.key}', 'format': 'iframe', 'height': ${config.height}, 'width': ${config.width}, 'params': {} };`
    ref.current.appendChild(optScript)

    // Invoke script
    const invokeScript = document.createElement('script')
    invokeScript.src = `https://www.highperformanceformat.com/${config.key}/invoke.js`
    invokeScript.async = true
    ref.current.appendChild(invokeScript)
  }, [config])

  return <div ref={ref} id={`ad-${id}`} style={{ display: 'flex', justifyContent: 'center', overflow: 'hidden', minWidth: config.width, minHeight: config.height }} />
}

// 728x90
export function AdLeaderboard({ id }: { id: string }) {
  return <InjectAd id={id} config={{ key: 'c19fb647988fa7c4d499505a3aad4add', width: 728, height: 90 }} />
}

// 300x250
export function AdRectangle({ id }: { id: string }) {
  return <InjectAd id={id} config={{ key: '7463086cd42face1e09ea46cdf55e47c', width: 300, height: 250 }} />
}

// 468x60
export function AdBanner468({ id }: { id: string }) {
  return <InjectAd id={id} config={{ key: '6bec4bd360e2d0044a5f004e4e955d56', width: 468, height: 60 }} />
}

// 320x50
export function AdMobile({ id }: { id: string }) {
  return <InjectAd id={id} config={{ key: '7592f53e8904e380b5303a257c4f4596', width: 320, height: 50 }} />
}

// 160x600
export function AdSkyscraper({ id }: { id: string }) {
  return <InjectAd id={id} config={{ key: '2fc80d7135b2dff9278813b5294becff', width: 160, height: 600 }} />
}

// 160x300
export function AdHalfPage({ id }: { id: string }) {
  return <InjectAd id={id} config={{ key: '600910ae731f49449f7a802603b4fcb1', width: 160, height: 300 }} />
}

// Native banner — unique container id required by Adsterra
export function AdNative({ id }: { id: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const injected = useRef(false)
  const containerId = `container-d31c51a7e7155cef31e0ff4a624fee5e-${id}`

  useEffect(() => {
    if (injected.current || !ref.current) return
    injected.current = true

    const container = document.createElement('div')
    container.id = containerId
    ref.current.appendChild(container)

    const s = document.createElement('script')
    s.src = 'https://pl29465418.effectivecpmnetwork.com/d31c51a7e7155cef31e0ff4a624fee5e/invoke.js'
    s.async = true
    s.dataset.cfasync = 'false'
    ref.current.appendChild(s)
  }, [containerId])

  return <div ref={ref} id={`ad-native-${id}`} className="w-full" />
}
