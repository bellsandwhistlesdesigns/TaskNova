"use client";

import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function SalonPage() {
  return (
    <main className="bg-black text-white">
      <NavBar />

      {/* HERO */}
      <Hero
        title={
          <>
            Websites for <span className="text-yellow-400">Hair Salons</span> & <span className="text-yellow-400">Barbers</span>
          </>
        }
        subtitle={
          <>
            <span className="text-white">Turn your online visitors into </span>
            <span className="text-yellow-400 font-semibold">booked appointments</span>
          </>
        }
        heightClass="min-h-[70vh]"
        showButtons={true}
        secondaryctaText="Get Started"
        secondaryctaLink="/register?source=salonhero"
        titleSize="text-4xl sm:text-5xl md:text-6xl"
      />

      {/* PAIN POINTS */}
      <section className="py-20 px-6 md:px-20 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">
          Tired of Missed Calls & Empty Time Slots?
        </h2>

        <p className="text-gray-400 leading-relaxed">
          Clients do not want to call or wait. In todays world clients want to book instantly.
          Without a proper online presence, <span className="text-yellow-400">are you losing appointments</span> to competitors who are making it easier? 
        </p>
      </section>

      {/* SOLUTIONS */}
      <section className="py-20 px-6 md:px-20">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          <div className="p-8 bg-gray-900 rounded-2xl border border-yellow-500/30">
            <h3 className="text-xl text-yellow-400 font-semibold mb-3">
              Online Booking System
            </h3>
            <p className="text-gray-300">
              Let clients book appointments anytime! No more missed calls, no friction, no lost business.
            </p>
          </div>

          <div className="p-8 bg-gray-900 rounded-2xl border border-yellow-500/30">
            <h3 className="text-xl text-yellow-400 font-semibold mb-3">
              The Ability to Showcase Your Work
            </h3>
            <p className="text-gray-300">
              Highlight your styles, cuts, and transformations with a clean, modern gallery.
            </p>
          </div>

          <div className="p-8 bg-gray-900 rounded-2xl border border-yellow-500/30">
            <h3 className="text-xl text-yellow-400 font-semibold mb-3">
              Local SEO Presence
            </h3>
            <p className="text-gray-300">
              Get discovered by people searching for salons and barbers in your area.
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center border-t border-yellow-500/20 px-6">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Fill Your Schedule?
        </h2>

        <p className="text-gray-400 mb-10">
          Let’s build a site that keeps your chairs full and your business growing.
        </p>

        <Link
          href="/register?source=salonmain"
          className="px-10 py-4 rounded-2xl font-semibold
                     bg-yellow-500 text-black
                     hover:shadow-[0_0_25px_rgba(255,215,0,0.7)]
                     transition"
        >
          Get Started
        </Link>
      </section>
      <Footer />
    </main>
  );
}