import Hero from "@/components/Hero";

export default function PrivacyPage() {
  return (
    <main>
      <Hero
        title="TaskNova"
        subtitle="Our Privacy Policy"
        showButtons={false}
        heightClass="min-h-[22vh]"
        bgGradient="from-blue-100 to-blue-200"
      />

      <section className="max-w-3xl mx-auto py-16 px-6 space-y-8">
        <h1 className="text-3xl font-bold">Privacy Policy</h1>
        <p className="text-sm text-gray-500">Last updated: January 1, 2026</p>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">1. Introduction</h2>
          <p>
            TaskNova ("we", "our", or "us") operates the website tasknova.ca
            and provides a productivity and task management platform.
            This Privacy Policy explains how we collect, use, disclose,
            and safeguard your information when you use our Service.
          </p>
          <p>
            By using TaskNova, you agree to the collection and use of
            information in accordance with this policy.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">2. Information We Collect</h2>

          <h3 className="font-medium">Account Information</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Name</li>
            <li>Email address</li>
            <li>Encrypted authentication credentials</li>
          </ul>

          <h3 className="font-medium">User Content</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Tasks, projects, and productivity data you create</li>
          </ul>

          <h3 className="font-medium">Technical Data</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>IP address</li>
            <li>Browser and device information</li>
            <li>Usage analytics</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">3. How We Use Your Information</h2>
          <p>We use collected information to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide and maintain TaskNova</li>
            <li>Authenticate users securely</li>
            <li>Improve performance and user experience</li>
            <li>Monitor usage and prevent fraud or abuse</li>
            <li>Communicate service-related updates</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">4. Hosting & Third-Party Services</h2>
          <p>
            TaskNova uses third-party service providers to operate the platform:
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>
              Infrastructure and hosting are provided by Netlify.
            </li>
            <li>
              Authentication and database services are provided by Supabase.
            </li>
          </ul>

          <p>
            These providers process data on our behalf and are bound by their
            own privacy and security obligations.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">5. Data Storage & Security</h2>
          <p>
            Your data is stored securely using industry-standard safeguards.
            Authentication is handled via Supabase with encrypted credentials.
            While we implement reasonable security measures, no online system
            can be guaranteed 100% secure.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">6. Data Sharing</h2>
          <p>
            We do not sell your personal information. We may share limited
            information with service providers necessary to operate the
            platform (such as hosting and authentication providers).
          </p>
          <p>
            We may disclose information if required by law or to protect
            our legal rights.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">7. Canadian Privacy Rights</h2>
          <p>
            If you are located in Canada, your information is protected
            under applicable privacy laws, including PIPEDA.
            You have the right to request access to your personal
            information and request corrections where necessary.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">8. International Users</h2>
          <p>
            Your information may be processed in countries outside of
            Canada where our service providers operate. By using TaskNova,
            you consent to such transfers in accordance with applicable laws.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">9. Data Retention</h2>
          <p>
            We retain your information as long as your account is active
            or as necessary to provide the Service. You may request deletion
            of your account at any time.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">10. Cookies</h2>
          <p>
            TaskNova may use cookies or similar technologies for authentication,
            session management, and analytics. You may disable cookies in your
            browser settings, though some features may not function properly.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">11. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Changes will
            be posted on this page with a revised “Last updated” date.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">12. Contact Information</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us at:
            support@tasknova.ca
          </p>
        </section>
      </section>
    </main>
  );
}