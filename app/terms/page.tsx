"use client";

import Hero from "@/components/Hero";

export default function TermsPage() {
  return (
    <main className="bg-black text-gray-300">

      <Hero
        title={
        <>
        <span className="text-yellow-400">Task</span>Nova
        </>
        }
        subtitle={
        <>
        <span className="text-white">Our Terms of Service</span>
        </>
        }
        showButtons={false}
        heightClass="min-h-[60vh]"
        />

      <section className="max-w-3xl mx-auto py-16 px-6 space-y-10">

        <div>
          <h1 className="text-3xl font-bold text-white">Terms of Service</h1>
          <p className="text-sm text-gray-500 mt-2">
            Last updated: January 1, 2026
          </p>
        </div>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">
            1. Acceptance of Terms
          </h2>
          <p className="text-gray-300">
            By accessing or using TaskNova (“Service”), you agree to be bound
            by these Terms of Service (“Terms”). If you do not agree to these
            Terms, you may not use the Service.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">
            2. Description of Service
          </h2>
          <p className="text-gray-300">
            TaskNova is a productivity and task management platform designed
            to help individuals and teams organize, manage, and track their
            work. We may update, modify, or discontinue features at any time
            without prior notice.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">
            3. User Accounts
          </h2>
          <p className="text-gray-300">
            To access certain features, you may be required to create an
            account. You agree to provide accurate information and keep your
            login credentials secure. You are responsible for all activity
            under your account.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">
            4. Acceptable Use
          </h2>
          <p className="text-gray-300">You agree not to:</p>

          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>Use the Service for unlawful purposes</li>
            <li>Attempt to gain unauthorized access to the platform</li>
            <li>Upload malicious code or harmful content</li>
            <li>Interfere with the performance or security of the Service</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">
            5. Payments & Subscriptions
          </h2>
          <p className="text-gray-300">
            Some features of TaskNova may require payment. By subscribing, you
            agree to pay all applicable fees. Subscription fees are billed in
            advance and are non-refundable unless otherwise stated.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">
            6. Intellectual Property
          </h2>
          <p className="text-gray-300">
            All content, trademarks, logos, and software associated with
            TaskNova are the property of TaskNova or its licensors. You may not
            copy, modify, distribute, or reverse engineer any part of the
            Service without written permission.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">
            7. Data & Privacy
          </h2>
          <p className="text-gray-300">
            Your use of TaskNova is also governed by our Privacy Policy. We
            take reasonable measures to protect your data but cannot guarantee
            absolute security.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">
            8. Termination
          </h2>
          <p className="text-gray-300">
            We reserve the right to suspend or terminate your access to the
            Service at our discretion if you violate these Terms.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">
            9. Disclaimer of Warranties
          </h2>
          <p className="text-gray-300">
            The Service is provided “as is” and “as available.” We make no
            warranties regarding reliability, availability, or fitness for a
            particular purpose.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">
            10. Limitation of Liability
          </h2>
          <p className="text-gray-300">
            To the fullest extent permitted by law, TaskNova shall not be
            liable for any indirect, incidental, or consequential damages
            arising from your use of the Service.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">
            11. Changes to Terms
          </h2>
          <p className="text-gray-300">
            We may update these Terms from time to time. Continued use of the
            Service after changes are posted constitutes acceptance of the
            revised Terms.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">
            12. Contact Information
          </h2>
          <p className="text-gray-300">
            If you have questions about these Terms, please contact us at:
          </p>
          <p className="text-yellow-400 font-medium">
            support@tasknova.ca
          </p>
        </section>

      </section>
    </main>
  );
}