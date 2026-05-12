"use client";

import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function GeneralBusinessPage() {
  return (
    <main className="bg-black text-white">
      <NavBar />

      {/* HERO */}
      <Hero
        title={
          <>
            AI Automation for{" "}
            <span className="text-yellow-400">Small Businesses</span>
          </>
        }
        subtitle={
          <>
            <span className="text-white">
              Smart websites and AI-powered systems designed to help your
              business respond faster, save time, and grow smarter.
            </span>
          </>
        }
        subSubtitle={
          <>
            <span className="text-white">
              Instantly respond to leads, automate repetitive tasks,
              and turn your website into a
            </span>
            <span className="text-yellow-400">
              {" "}24/7 business assistant.
            </span>
          </>
        }
        heightClass="min-h-[80vh]"
        showButtons={true}
        secondaryctaText="See AI in Action"
        secondaryctaLink="/register?source=generalbusinesshero"
        titleSize="text-4xl sm:text-5xl md:text-6xl"
      />

      {/* WHO THIS IS FOR */}
      <section className="py-20 px-6 md:px-20 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">
          AI Systems Built for Real Businesses
        </h2>

        <p className="text-gray-400 leading-relaxed">
          Whether you run a local shop, service business, or growing company,
          your website should do more than just exist online. We build
          AI-powered websites and automation systems that help businesses
          capture leads, streamline operations, and create better customer
          experiences.
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
              Turn visitors into customers with AI-powered engagement and
              modern online experiences.
            </p>
          </div>

          <div className="p-6 bg-gray-900 rounded-2xl border border-yellow-500/30">
            <h3 className="text-lg text-yellow-400 font-semibold mb-2">
              Service-Based Businesses
            </h3>
            <p className="text-gray-300">
              Automate inquiries, follow-ups, and client communication so you
              can focus on delivering your services.
            </p>
          </div>

          <div className="p-6 bg-gray-900 rounded-2xl border border-yellow-500/30">
            <h3 className="text-lg text-yellow-400 font-semibold mb-2">
              Contractors & Trades
            </h3>
            <p className="text-gray-300">
              Never miss another lead with instant responses, streamlined
              booking requests, and smarter workflows.
            </p>
          </div>

          <div className="p-6 bg-gray-900 rounded-2xl border border-yellow-500/30">
            <h3 className="text-lg text-yellow-400 font-semibold mb-2">
              Startups & Growing Brands
            </h3>
            <p className="text-gray-300">
              Launch with scalable technology designed to support future growth
              and automation from day one.
            </p>
          </div>

        </div>
      </section>

      {/* CORE BENEFITS */}
      <section className="py-20 px-6 md:px-20">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          <div className="p-8 bg-gray-900 rounded-2xl border border-yellow-500/30 hover:shadow-[0_0_25px_white] transition duration-300">
            <h3 className="text-xl font-semibold mb-3 text-yellow-400">
              AI Lead Automation
            </h3>
            <p className="text-gray-300">
              Automatically respond to customer inquiries and capture leads
              faster than ever before.
            </p>
          </div>

          <div className="p-8 bg-gray-900 rounded-2xl border border-yellow-500/30 hover:shadow-[0_0_25px_white] transition duration-300">
            <h3 className="text-xl font-semibold mb-3 text-yellow-400">
              Smart Customer Workflows
            </h3>
            <p className="text-gray-300">
              Streamline repetitive business tasks with intelligent automation
              systems tailored to your business.
            </p>
          </div>

          <div className="p-8 bg-gray-900 rounded-2xl border border-yellow-500/30 hover:shadow-[0_0_25px_white] transition duration-300">
            <h3 className="text-xl font-semibold mb-3 text-yellow-400">
              Modern AI-Powered Websites
            </h3>
            <p className="text-gray-300">
              Build trust and stand out online with a modern website designed
              for speed, performance, and growth.
            </p>
          </div>

        </div>
      </section>

      {/* Center gold line */}
      <section>
        <div className="relative z-10 flex justify-center">
          <div className="w-24 h-1 bg-yellow-400 rounded-full shadow-[0_0_15px_#FFD700]"></div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center border-t border-yellow-500/20 px-6">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Automate Your Business?
        </h2>

        <p className="text-gray-400 mb-10">
          Let’s build an AI-powered system that helps your business save time,
          capture more leads, and grow faster.
        </p>

        <Link
          href="/register?=generalbusinessmain"
          className="px-10 py-4 rounded-2xl font-semibold
                     bg-yellow-500 text-black
                     hover:shadow-[0_0_25px_rgba(255,215,0,0.7)]
                     transition"
        >
          Book a Free Demo
        </Link>
      </section>

      <Footer />
    </main>
  );
}