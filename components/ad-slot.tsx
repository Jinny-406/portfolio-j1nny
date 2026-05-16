"use client"

interface AdConfig {
  key: string
  width: number
  height: number
}

// Each ad runs inside its own iframe so atOptions never overwrites another slot
function IframeAd({ id, config }: { id: string; config: AdConfig }) {
  const html = `<!DOCTYPE html><html><head><style>*{margin:0;padding:0;overflow:hidden}</style></head><body><script>atOptions={'key':'${config.key}','format':'iframe','height':${config.height},'width':${config.width},'params':{}}<\/script><script src='https://www.highperformanceformat.com/${config.key}/invoke.js'><\/script></body></html>`

  return (
    <iframe
      id={`ad-${id}`}
      srcDoc={html}
      width={config.width}
      height={config.height}
      frameBorder="0"
      scrolling="no"
      style={{ display: 'block', border: 'none' }}
    />
  )
}

// 728x90
export function AdLeaderboard({ id }: { id: string }) {
  return (
    <div className="flex justify-center overflow-hidden w-full">
      <IframeAd id={id} config={{ key: 'c19fb647988fa7c4d499505a3aad4add', width: 728, height: 90 }} />
    </div>
  )
}

// 300x250
export function AdRectangle({ id }: { id: string }) {
  return (
    <div className="overflow-hidden flex-shrink-0">
      <IframeAd id={id} config={{ key: '7463086cd42face1e09ea46cdf55e47c', width: 300, height: 250 }} />
    </div>
  )
}

// 468x60
export function AdBanner468({ id }: { id: string }) {
  return (
    <div className="flex justify-center overflow-hidden w-full">
      <IframeAd id={id} config={{ key: '6bec4bd360e2d0044a5f004e4e955d56', width: 468, height: 60 }} />
    </div>
  )
}

// 320x50
export function AdMobile({ id }: { id: string }) {
  return (
    <div className="flex justify-center overflow-hidden">
      <IframeAd id={id} config={{ key: '7592f53e8904e380b5303a257c4f4596', width: 320, height: 50 }} />
    </div>
  )
}

// 160x600
export function AdSkyscraper({ id }: { id: string }) {
  return (
    <div className="overflow-hidden flex-shrink-0">
      <IframeAd id={id} config={{ key: '2fc80d7135b2dff9278813b5294becff', width: 160, height: 600 }} />
    </div>
  )
}

// 160x300
export function AdHalfPage({ id }: { id: string }) {
  return (
    <div className="overflow-hidden flex-shrink-0">
      <IframeAd id={id} config={{ key: '600910ae731f49449f7a802603b4fcb1', width: 160, height: 300 }} />
    </div>
  )
}

// Native banner — runs inline (only one instance, Adsterra requirement)
export function AdNative({ id }: { id: string }) {
  const html = `<!DOCTYPE html><html><head><style>*{margin:0;padding:0}</style></head><body><div id="container-d31c51a7e7155cef31e0ff4a624fee5e"></div><script async data-cfasync="false" src="https://pl29465418.effectivecpmnetwork.com/d31c51a7e7155cef31e0ff4a624fee5e/invoke.js"><\/script></body></html>`

  return (
    <iframe
      id={`ad-native-${id}`}
      srcDoc={html}
      width="100%"
      height="120"
      frameBorder="0"
      scrolling="no"
      style={{ display: 'block', border: 'none', width: '100%' }}
    />
  )
}
