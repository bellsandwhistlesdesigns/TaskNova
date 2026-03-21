"use client";

import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Link from "next/link";

export const metadata = {
  title: "Websites for Restaurants, Social Houses and Pubs | TaskNova",
  description:
    "Modern restaurant websites that increase online traffic, book reservations, showcase menus, and keep customers coming back.",
};

export default function RestaurantsPage() {
  return (
    <main className="bg-black text-white">
      <NavBar />

      {/* HERO */}
      <Hero
        title={
          <>
            Websites for <span className="text-yellow-400">Restaurants</span> & Pubs
          </>
        }
        subtitle={
          <>
            <span className="text-white">Turn your online visitors into </span>
            <span className="text-yellow-400 font-semibold">paying customers</span>
          </>
        }
        heightClass="min-h-[70vh]"
        showButtons={false}
        titleSize="text-4xl sm:text-5xl md:text-6xl"
        sunPosition="left"
      />

      {/* PAIN POINTS */}
      <section className="py-20 px-6 md:px-20 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">
          Struggling to Stand Out Online?
        </h2>

        <p className="text-gray-400 leading-relaxed">
          Many restaurants lose customers before they ever walk through the door.
          Slow websites, hard-to-find menus, and no clear way to book or reserve a table.
          In todays world, your website is your first impression.
        </p>
      </section>

      {/* SOLUTIONS */}
      <section className="py-20 px-6 md:px-20">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          <div className="p-8 bg-gray-900 rounded-2xl border border-yellow-500/30">
            <h3 className="text-xl text-yellow-400 font-semibold mb-3">
              Mobile-First Menus
            </h3>
            <p className="text-gray-300">
              Clean, fast-loading menus that customers can access instantly on any device.
            </p>
          </div>

          <div className="p-8 bg-gray-900 rounded-2xl border border-yellow-500/30">
            <h3 className="text-xl text-yellow-400 font-semibold mb-3">
              Online Reservations
            </h3>
            <p className="text-gray-300">
              Let customers book your tables easily, no more missed calls or lost business.
            </p>
          </div>

          <div className="p-8 bg-gray-900 rounded-2xl border border-yellow-500/30">
            <h3 className="text-xl text-yellow-400 font-semibold mb-3">
              Local SEO Optimization
            </h3>
            <p className="text-gray-300">
              We can get you to show up when people search for places to eat in your area.
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center border-t border-yellow-500/20 px-6">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Bring in More Customers?
        </h2>

        <p className="text-gray-400 mb-10">
          Let’s build a website that works as hard as you do.
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