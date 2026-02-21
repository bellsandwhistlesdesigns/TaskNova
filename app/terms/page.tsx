import Hero from "@/components/Hero";

export default function TermsPage() {
  return (
    <main>
      <Hero
        title="TaskNova"
        subtitle="Our Terms of Service"
        showButtons={false}
        heightClass="min-h-[22vh]"
        bgGradient="from-blue-100 to-blue-200"
      />

      <section className="max-w-3xl mx-auto py-16 px-6 space-y-8">
        <h1 className="text-3xl font-bold">Terms of Service</h1>
        <p className="text-sm text-gray-500">Last updated: January 1, 2026</p>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">1. Acceptance of Terms</h2>
          <p>
            By accessing or using TaskNova (“Service”), you agree to be bound
            by these Terms of Service (“Terms”). If you do not agree to these
            Terms, you may not use the Service.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">2. Description of Service</h2>
          <p>
            TaskNova is a productivity and task management platform designed
            to help individuals and teams organize, manage, and track their
            work. We may update, modify, or discontinue features at any time
            without prior notice.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">3. User Accounts</h2>
          <p>
            To access certain features, you may be required to create an
            account. You agree to provide accurate information and keep your
            login credentials secure. You are responsible for all activity
            under your account.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">4. Acceptable Use</h2>
          <p>You agree not to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Use the Service for unlawful purposes</li>
            <li>Attempt to gain unauthorized access to the platform</li>
            <li>Upload malicious code or harmful content</li>
            <li>Interfere with the performance or security of the Service</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">5. Payments & Subscriptions</h2>
          <p>
            Some features of TaskNova may require payment. By subscribing, you
            agree to pay all applicable fees. Subscription fees are billed in
            advance and are non-refundable unless otherwise stated.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">6. Intellectual Property</h2>
          <p>
            All content, trademarks, logos, and software associated with
            TaskNova are the property of TaskNova or its licensors. You may not
            copy, modify, distribute, or reverse engineer any part of the
            Service without written permission.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">7. Data & Privacy</h2>
          <p>
            Your use of TaskNova is also governed by our Privacy Policy. We
            take reasonable measures to protect your data but cannot guarantee
            absolute security.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">8. Termination</h2>
          <p>
            We reserve the right to suspend or terminate your access to the
            Service at our discretion if you violate these Terms.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">9. Disclaimer of Warranties</h2>
          <p>
            The Service is provided “as is” and “as available.” We make no
            warranties regarding reliability, availability, or fitness for a
            particular purpose.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">10. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, TaskNova shall not be
            liable for any indirect, incidental, or consequential damages
            arising from your use of the Service.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">11. Changes to Terms</h2>
          <p>
            We may update these Terms from time to time. Continued use of the
            Service after changes are posted constitutes acceptance of the
            revised Terms.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">12. Contact Information</h2>
          <p>
            If you have questions about these Terms, please contact us at:
            support@tasknova.ca
          </p>
        </section>
      </section>
    </main>
  );
}
