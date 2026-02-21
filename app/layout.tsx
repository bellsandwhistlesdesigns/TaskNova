import './globals.css'
import CookieBanner from '@/components/CookieBanner'
import { cookies } from 'next/headers'
import Footer from "@/components/Footer"

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const cookieStore = await cookies()
  const consent = cookieStore.get('tasknova_consent')?.value

  return (
    <html lang="en">
      <body>
        {children}

        {consent === 'all' && (
          <>
            {/* Analytics script will go here later */}
          </>
        )}
        <Footer />
        <CookieBanner />
      </body>
    </html>
  )
}
