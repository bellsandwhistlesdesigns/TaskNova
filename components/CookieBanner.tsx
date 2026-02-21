'use client'

import { useEffect, useState } from 'react'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = document.cookie
      .split('; ')
      .find(row => row.startsWith('tasknova_consent='))

    if (!consent) {
      setVisible(true)
    }
  }, [])

  const setConsent = (value: string) => {
    document.cookie = `tasknova_consent=${value}; path=/; max-age=31536000; SameSite=Lax`
    setVisible(false)
    window.location.reload() // ensures analytics loads if accepted
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 w-full bg-slate-900 text-white p-6 text-center z-50 shadow-lg">
      <p className="max-w-2xl mx-auto">
        TaskNova uses cookies to ensure secure login and improve performance.
        You can accept analytics cookies or use only essential cookies.
      </p>

      <div className="mt-4 space-x-3">
        <button
          onClick={() => setConsent('all')}
          className="bg-yellow-400 text-black px-5 py-2 rounded-lg font-semibold"
        >
          Accept All
        </button>

        <button
          onClick={() => setConsent('essential')}
          className="bg-gray-600 px-5 py-2 rounded-lg"
        >
          Essential Only
        </button>
      </div>

      <p className="mt-3 text-sm">
        <a href="/cookie-policy" className="underline">
          Read our Cookie Policy
        </a>
      </p>
    </div>
  )
}
