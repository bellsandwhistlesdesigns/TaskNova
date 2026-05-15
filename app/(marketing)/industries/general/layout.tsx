import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "TaskNova | AI Automation for Small Businesses",

  description:
    "TaskNova builds AI-powered websites and automation systems for small businesses. Automate customer workflows, lead responses, scheduling, and business operations.",

  keywords: [
    "AI automation",
    "small business websites",
    "AI business solutions",
    "workflow automation",
    "TaskNova",
  ],
  openGraph: {
    title:
      "AI Automation & Websites for Small Business | TaskNova",

    description:
      "Get in touch with TaskNova to explore AI-powered automation and modern websites for your business..",

    url: "https://tasknova.ca/industries/general",

    siteName: "TaskNova",

    locale: "en_CA",

    type: "website",
  },
};


export default function GeneralLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}