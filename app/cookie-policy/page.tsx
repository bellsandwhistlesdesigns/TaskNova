"use client";

import Hero from "@/components/Hero";

export default function CookiePolicyPage() {
    return (
        <main>
          <Hero
            title={
            <>
            <span className="text-yellow-400">Task</span>Nova
            </>
            }
            subtitle={
            <>
            <span className="text-white">Our Cookies, </span>
            <span className="text-yellow-400 font-semibold"> Better Design</span>
            </>
            }
            
            heightClass="min-h-[50vh]"
            showButtons={false}
            
      />
    <section className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>

      <p className="mb-6 text-gray-600">
        Effective Date: March 1, {new Date().getFullYear()}
      </p>

      <section className="space-y-6 text-lg leading-relaxed">
        <p>
          This Cookie Policy explains how TaskNova ("we", "our", or "us") uses
          cookies and similar technologies when you access and use our platform
          at tasknova.ca.
        </p>

        <h2 className="text-2xl font-semibold mt-8">1. What Are Cookies?</h2>
        <p>
          Cookies are small text files stored on your device when you visit a
          website. They help websites function properly, improve security, and
          enhance user experience.
        </p>

        <h2 className="text-2xl font-semibold mt-8">
          2. Cookies We Currently Use
        </h2>
        <p>
          TaskNova currently uses <strong>essential cookies only</strong>.
          These cookies are necessary for the platform to operate securely and
          effectively.
        </p>

        <h3 className="text-xl font-semibold mt-6">Essential Cookies</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Authentication and login session management</li>
          <li>Security and fraud prevention</li>
          <li>Maintaining secure user sessions</li>
          <li>Protecting against cross-site request forgery (CSRF)</li>
        </ul>

        <p>
          These cookies are required for TaskNova to function and cannot be
          disabled through our systems.
        </p>

        <h2 className="text-2xl font-semibold mt-8">
          3. Analytics and Marketing Cookies
        </h2>
        <p>
          TaskNova does <strong>not currently use</strong> analytics,
          performance, or marketing cookies.
        </p>

        <p>
          If we introduce analytics tools (such as Google Analytics) or other
          non-essential cookies in the future, we will update this Cookie
          Policy and provide appropriate consent options.
        </p>

        <h2 className="text-2xl font-semibold mt-8">
          4. Managing Cookies in Your Browser
        </h2>
        <p>
          Most web browsers allow you to control cookies through browser
          settings. You may choose to block or delete cookies; however,
          disabling essential cookies may prevent TaskNova from functioning
          properly.
        </p>

        <h2 className="text-2xl font-semibold mt-8">5. Updates to This Policy</h2>
        <p>
          We may update this Cookie Policy from time to time to reflect changes
          in our practices or legal requirements. When we do, we will revise
          the effective date on this page.
        </p>

        <h2 className="text-2xl font-semibold mt-8">6. Contact Us</h2>
        <p>
          If you have questions about this Cookie Policy, please contact us at:
        </p>

        <p className="mt-4 font-medium">
          support@tasknova.ca
        </p>
      </section>
      </section>
      
    </main>
  )
}
