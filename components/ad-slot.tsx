"use client"

import Script from 'next/script'
import { useEffect, useRef } from 'react'

// 728x90 leaderboard
export function AdLeaderboard() {
  return (
    <div className="flex justify-center overflow-hidden">
      <Script id="ad-728-init" strategy="afterInteractive">{`
        atOptions = { 'key': 'c19fb647988fa7c4d499505a3aad4add', 'format': 'iframe', 'height': 90, 'width': 728, 'params': {} };
      `}</Script>
      <Script src="https://www.highperformanceformat.com/c19fb647988fa7c4d499505a3aad4add/invoke.js" strategy="afterInteractive" />
    </div>
  )
}

// 300x250 rectangle
export function AdRectangle({ id }: { id: string }) {
  return (
    <div className="flex justify-center overflow-hidden">
      <Script id={`ad-300-init-${id}`} strategy="afterInteractive">{`
        atOptions = { 'key': '7463086cd42face1e09ea46cdf55e47c', 'format': 'iframe', 'height': 250, 'width': 300, 'params': {} };
      `}</Script>
      <Script id={`ad-300-src-${id}`} src="https://www.highperformanceformat.com/7463086cd42face1e09ea46cdf55e47c/invoke.js" strategy="afterInteractive" />
    </div>
  )
}

// 468x60 banner
export function AdBanner468({ id }: { id: string }) {
  return (
    <div className="flex justify-center overflow-hidden">
      <Script id={`ad-468-init-${id}`} strategy="afterInteractive">{`
        atOptions = { 'key': '6bec4bd360e2d0044a5f004e4e955d56', 'format': 'iframe', 'height': 60, 'width': 468, 'params': {} };
      `}</Script>
      <Script id={`ad-468-src-${id}`} src="https://www.highperformanceformat.com/6bec4bd360e2d0044a5f004e4e955d56/invoke.js" strategy="afterInteractive" />
    </div>
  )
}

// 320x50 mobile banner
export function AdMobile({ id }: { id: string }) {
  return (
    <div className="flex justify-center overflow-hidden">
      <Script id={`ad-320-init-${id}`} strategy="afterInteractive">{`
        atOptions = { 'key': '7592f53e8904e380b5303a257c4f4596', 'format': 'iframe', 'height': 50, 'width': 320, 'params': {} };
      `}</Script>
      <Script id={`ad-320-src-${id}`} src="https://www.highperformanceformat.com/7592f53e8904e380b5303a257c4f4596/invoke.js" strategy="afterInteractive" />
    </div>
  )
}

// 160x600 skyscraper
export function AdSkyscraper({ id }: { id: string }) {
  return (
    <div className="flex justify-center overflow-hidden">
      <Script id={`ad-160x600-init-${id}`} strategy="afterInteractive">{`
        atOptions = { 'key': '2fc80d7135b2dff9278813b5294becff', 'format': 'iframe', 'height': 600, 'width': 160, 'params': {} };
      `}</Script>
      <Script id={`ad-160x600-src-${id}`} src="https://www.highperformanceformat.com/2fc80d7135b2dff9278813b5294becff/invoke.js" strategy="afterInteractive" />
    </div>
  )
}

// 160x300 half-page
export function AdHalfPage({ id }: { id: string }) {
  return (
    <div className="flex justify-center overflow-hidden">
      <Script id={`ad-160x300-init-${id}`} strategy="afterInteractive">{`
        atOptions = { 'key': '600910ae731f49449f7a802603b4fcb1', 'format': 'iframe', 'height': 300, 'width': 160, 'params': {} };
      `}</Script>
      <Script id={`ad-160x300-src-${id}`} src="https://www.highperformanceformat.com/600910ae731f49449f7a802603b4fcb1/invoke.js" strategy="afterInteractive" />
    </div>
  )
}

// Adsterra Native Banner
export function AdNative({ id }: { id: string }) {
  return (
    <div className="w-full">
      <Script id={`ad-native-src-${id}`} data-cfasync="false" async src="https://pl29465418.effectivecpmnetwork.com/d31c51a7e7155cef31e0ff4a624fee5e/invoke.js" strategy="afterInteractive" />
      <div id="container-d31c51a7e7155cef31e0ff4a624fee5e" />
    </div>
  )
}

// Placeholder (kept for any remaining slots)
interface AdSlotProps {
  id: string
  label?: string
  height?: string
  className?: string
}

export function AdSlot({ id, label = "Advertisement", height = "90px", className = "" }: AdSlotProps) {
  return (
    <div id={id} className={`flex items-center justify-center ${className}`} style={{ minHeight: height }} />
  )
}
