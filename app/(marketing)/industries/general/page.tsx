"use client";

import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Link from "next/link";

export const metadata = {
  title: "Websites for Small Businesses | TaskNova",
  description:
    "Professional websites for any small business. Increase customers, showcase your services, and grow your business with TaskNova.",
};

export default function GeneralBusinessPage() {
  return (
    <main className="bg-black text-white">
      <NavBar />

      {/* HERO */}
      <Hero
        title={
          <>
            Websites for <span className="text-yellow-400">Small Businesses</span>
          </>
        }
        subtitle={
          <>
            <span className="text-white">Professional websites that help you </span>
            <span className="text-yellow-400 font-semibold">grow and stand out</span>
          </>
        }
        heightClass="min-h-[70vh]"
        showButtons={false}
        titleSize="text-4xl md:text-5xl"
      />

      {/* WHO THIS IS FOR */}
      <section className="py-20 px-6 md:px-20 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">
          Built for Businesses Like Yours
        </h2>

        <p className="text-gray-400 leading-relaxed">
          Whether you're running a local shop, service business, or growing brand,
          your website should work as hard as you do. We build modern, reliable
          websites that help customers find you, trust you, and choose you.
        </p>
      </section>

      {/* BUSINESS TYPES */}
      <section className="py-20 px-6 md:px-20">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

          <div className="p-6 bg-gray-900 rounded-2xl border border-yellow-500/30">
            <h3 className="text-lg text-yellow-400 font-semibold mb-2">
              Local Shops & Retail
            </h3>
            <p className="text-gray-300">
              Bring customers through your doors with a strong online presence.
            </p>
          </div>

          <div className="p-6 bg-gray-900 rounded-2xl border border-yellow-500/30">
            <h3 className="text-lg text-yellow-400 font-semibold mb-2">
              Service-Based Businesses
            </h3>
            <p className="text-gray-300">
              Showcase your services clearly and convert visitors into clients.
            </p>
          </div>

          <div className="p-6 bg-gray-900 rounded-2xl border border-yellow-500/30">
            <h3 className="text-lg text-yellow-400 font-semibold mb-2">
              Contractors & Trades
            </h3>
            <p className="text-gray-300">
              Build trust with professional design and clear contact options.
            </p>
          </div>

          <div className="p-6 bg-gray-900 rounded-2xl border border-yellow-500/30">
            <h3 className="text-lg text-yellow-400 font-semibold mb-2">
              Startups & New Ventures
            </h3>
            <p className="text-gray-300">
              Launch with confidence using a modern, scalable foundation.
            </p>
          </div>

        </div>
      </section>

      {/* CORE BENEFITS */}
      <section className="py-20 px-6 md:px-20">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          <div className="p-8 bg-gray-900 rounded-2xl border border-yellow-500/30">
            <h3 className="text-xl text-yellow-400 font-semibold mb-3">
              Professional Design
            </h3>
            <p className="text-gray-300">
              Make a strong first impression with a clean, modern website.
            </p>
          </div>

          <div className="p-8 bg-gray-900 rounded-2xl border border-yellow-500/30">
            <h3 className="text-xl text-yellow-400 font-semibold mb-3">
              Mobile Optimization
            </h3>
            <p className="text-gray-300">
              Ensure your site looks and works perfectly on all devices.
            </p>
          </div>

          <div className="p-8 bg-gray-900 rounded-2xl border border-yellow-500/30">
            <h3 className="text-xl text-yellow-400 font-semibold mb-3">
              SEO Foundations
            </h3>
            <p className="text-gray-300">
              Help customers find your business through search engines.
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center border-t border-yellow-500/20 px-6">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Grow Your Business Online?
        </h2>

        <p className="text-gray-400 mb-10">
          Let’s build a website that supports your goals and drives results.
        </p>

        <Link
          href="/register"
          className="px-10 py-4 rounded-2xl font-semibold
                     bg-yellow-500 text-black
                     hover:shadow-[0_0_25px_rgba(255,215,0,0.7)]
                     transition"
        >
          Get Started
        </Link>
      </section>
    </main>
  );
}