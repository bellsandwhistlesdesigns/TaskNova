import './globals.css'
import CookieBanner from '@/components/CookieBanner'
import { cookies } from 'next/headers'


export const metadata = {
  title: "TaskNova | AI Automation & Smart Websites for Small Businesses",

  description:
    "TaskNova builds AI-powered websites and automation systems for small businesses. Automate lead responses, streamline customer workflows, and grow with modern AI solutions.",

  keywords: [
    "AI automation for small businesses",
    "AI business automation Canada",
    "AI lead generation websites",
    "AI-powered websites",
    "small business automation",
    "customer workflow automation",
    "AI websites Vancouver",
    "AI automation Coquitlam",
    "small business AI solutions BC",
    "lead automation systems",
    "TaskNova",
  ],
};
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
        <CookieBanner />
      </body>
    </html>
  )
}
