import { useEffect, useState } from 'react'

export const notify = (message) => window.dispatchEvent(new CustomEvent('app-notice', { detail: message }))

export default function UiNotice() {
  const [message, setMessage] = useState('')
  useEffect(() => {
    const show = (event) => {
      setMessage(event.detail)
      window.clearTimeout(show.timer)
      show.timer = window.setTimeout(() => setMessage(''), 3500)
    }
    window.addEventListener('app-notice', show)
    return () => window.removeEventListener('app-notice', show)
  }, [])
  if (!message) return null
  return <div role="status" className="fixed right-4 top-4 z-[100] max-w-sm rounded-xl border border-[#3D4F62] bg-[#F8FAFC] px-5 py-4 text-sm font-medium text-[#3D4F62] shadow-xl" onClick={() => setMessage('')}>{message}</div>
}
