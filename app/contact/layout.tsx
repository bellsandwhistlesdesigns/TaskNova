import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Contact TaskNova | AI Automation for Small Businesses",

  description:
    "Contact TaskNova to learn how AI automation can streamline bookings, customer communication, lead handling, and workflows for your small business.",

  keywords: [
    "contact TaskNova",
    "AI automation consultation",
    "small business AI solutions",
    "AI workflow automation Canada",
    "AI workflow automation British Columbia",
    "business automation services",
    "TaskNova",
  ],

  openGraph: {
    title:
      "Contact TaskNova | AI Automation for Small Businesses",

    description:
      "Get in touch with TaskNova to explore AI-powered automation and modern websites for your business.",

    url: "https://tasknova.ca/contact",

    siteName: "TaskNova",

    locale: "en_CA",

    type: "website",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}