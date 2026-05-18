import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

if (typeof window !== 'undefined') {
  const banner = '%c~ Curious? Let\'s talk.'
  const accent = 'background:linear-gradient(135deg,#a855f7,#ec4899,#f59e0b);color:#fff;font-weight:600;padding:6px 12px;border-radius:6px;font-size:13px'
  const meta = '%c rmotti99@gmail.com  ·  https://github.com/rmotti'
  const metaStyle = 'color:#a8badb;font-family:monospace;font-size:12px;padding:6px 0'
  // eslint-disable-next-line no-console
  console.log(banner, accent)
  // eslint-disable-next-line no-console
  console.log(meta, metaStyle)
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
