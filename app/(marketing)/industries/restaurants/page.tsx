"use client";

import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function RestaurantsPage() {
  return (
    <main className="bg-black text-white">
      <NavBar />

      {/* HERO */}
      <Hero
        title={
          <>
            AI Automation for{" "}
            <span className="text-yellow-400">
              Restaurants
            </span>,{" "}
            <span className="text-yellow-400">
              Pubs
            </span>{" "}
            &{" "}
            <span className="text-yellow-400">
              Social Houses
            </span>
          </>
        }
        subtitle={
          <>
            <span className="text-white">
              Modern AI-powered websites and automation systems
              designed to help restaurants respond faster,
              streamline bookings, and increase customer engagement.
            </span>
          </>
        }
        subSubtitle={
          <>
            <span className="text-white">
              Automate reservations, customer inquiries,
              menu access, and follow-ups with a
            </span>
            <span className="text-yellow-400">
              {" "}24/7 AI-powered experience.
            </span>
          </>
        }
        heightClass="min-h-[70vh]"
        showButtons={true}
        secondaryctaText="See AI in Action"
        secondaryctaLink="/register?source=restauranthero"
        titleSize="text-4xl sm:text-5xl md:text-6xl"
        sunPosition="right"
      />

      {/* PAIN POINTS */}
      <section className="py-20 px-6 md:px-20 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">
          Your Website Should Help Run Your Restaurant
        </h2>

        <p className="text-gray-400 leading-relaxed">
          Many restaurants lose customers before they ever step through the
          door. Missed calls, slow websites, confusing menus, and outdated
          booking systems create friction that drives customers elsewhere.
          TaskNova helps restaurants automate customer interactions and create
          modern digital experiences that work around the clock.
        </p>
      </section>

      {/* SOLUTIONS */}
      <section className="py-20 px-6 md:px-20">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          <div className="p-8 bg-gray-900 rounded-2xl border border-yellow-500/30 hover:shadow-[0_0_25px_white] transition duration-300">
            <h3 className="text-xl font-semibold mb-3 text-yellow-400">
              AI Reservation Automation
            </h3>
            <p className="text-gray-300">
              Reduce missed bookings with automated reservation requests,
              confirmations, and customer follow-ups.
            </p>
          </div>

          <div className="p-8 bg-gray-900 rounded-2xl border border-yellow-500/30 hover:shadow-[0_0_25px_white] transition duration-300">
            <h3 className="text-xl font-semibold mb-3 text-yellow-400">
              Smart Customer Responses
            </h3>
            <p className="text-gray-300">
              Instantly respond to customer inquiries about menus, hours,
              reservations, and events using AI-powered workflows.
            </p>
          </div>

          <div className="p-8 bg-gray-900 rounded-2xl border border-yellow-500/30 hover:shadow-[0_0_25px_white] transition duration-300">
            <h3 className="text-xl font-semibold mb-3 text-yellow-400">
              Mobile-Optimized Experiences
            </h3>
            <p className="text-gray-300">
              Deliver fast-loading menus, booking systems, and modern website
              experiences designed for mobile-first customers.
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
          Ready to Modernize Your Restaurant?
        </h2>

        <p className="text-gray-400 mb-10">
          Let’s build an AI-powered restaurant system that helps you automate
          bookings, engage customers, and grow your business.
        </p>

        <Link
          href="/register?source=restaurantcta"
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