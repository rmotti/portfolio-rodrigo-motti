import { useState } from 'react'

export default function LivePreviewIframe({
  url,
  title,
  fallback = null,
  interactive = false,
  scale = 0.5,
  className = ''
}) {
  const [failed, setFailed] = useState(false)

  if (!url || failed) return fallback

  const SCROLLBAR_WIDTH = 20

  if (interactive) {
    return (
      <div className={`absolute inset-0 overflow-hidden ${className}`}>
        <iframe
          src={url}
          title={title}
          loading="lazy"
          referrerPolicy="no-referrer"
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
          onError={() => setFailed(true)}
          className="absolute top-0 left-0 h-full border-0 bg-background"
          style={{ width: `calc(100% + ${SCROLLBAR_WIDTH}px)` }}
        />
      </div>
    )
  }

  const inversePct = `calc(${(1 / scale) * 100}% + ${SCROLLBAR_WIDTH}px)`
  const heightPct = `${(1 / scale) * 100}%`

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <iframe
        src={url}
        title={title}
        loading="lazy"
        scrolling="no"
        referrerPolicy="no-referrer"
        sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
        onError={() => setFailed(true)}
        className="absolute top-0 left-0 border-0 bg-background pointer-events-none"
        style={{
          width: inversePct,
          height: heightPct,
          transform: `scale(${scale})`,
          transformOrigin: '0 0'
        }}
      />
    </div>
  )
}
