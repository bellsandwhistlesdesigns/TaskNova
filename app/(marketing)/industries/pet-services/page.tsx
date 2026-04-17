"use client";

import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function PetServicesPage() {
  return (
    <main className="bg-black text-white">
      <NavBar />

      {/* ===== HERO ===== */}
      <Hero
        sunPosition="right"
        title={
          <>
            Websites for <span className="text-yellow-400">Pet Businesses</span>
          </>
        }
        subtitle={
          <>
            Turn visitors into loyal customers with a site that builds trust and
            drives <span className="text-yellow-400">bookings</span>.
          </>
        }
        subSubtitle="Perfect for groomers, pet stores, trainers, and daycare services."
        showButtons={true}
        secondaryctaText="Get Started"
        secondaryctaLink="/register?source=petservicesmain"
        titleSize="text-4xl sm:text-5xl md:text-6xl"
        heightClass="min-h-[70vh]"
      />

      {/* ===== PROBLEMS ===== */}
      <section className="px-6 md:px-20 py-20 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-10 text-center">
          Is Your Website Holding You Back?
        </h2>

        <div className="grid md:grid-cols-3 gap-8 text-gray-300">
          <div className="p-6 bg-gray-900 rounded-2xl border border-yellow-500/20">
            Customers can’t easily book appointments or contact you.
          </div>
          <div className="p-6 bg-gray-900 rounded-2xl border border-yellow-500/20">
            Your services and pricing aren’t clearly shown.
          </div>
          <div className="p-6 bg-gray-900 rounded-2xl border border-yellow-500/20">
            You’re not standing out from other local pet businesses.
          </div>
        </div>
      </section>

      {/* ===== SOLUTIONS ===== */}
      <section className="px-6 md:px-20 py-20 bg-black/60">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-12 text-center">
          What We Build for You
        </h2>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto text-gray-300">
          <div className="p-6 bg-gray-900 rounded-2xl border border-yellow-500/20">
            Online booking integration to make scheduling effortless
          </div>
          <div className="p-6 bg-gray-900 rounded-2xl border border-yellow-500/20">
            Photo galleries to showcase your work and happy pets
          </div>
          <div className="p-6 bg-gray-900 rounded-2xl border border-yellow-500/20">
            Mobile-first design for customers on the go
          </div>
          <div className="p-6 bg-gray-900 rounded-2xl border border-yellow-500/20">
            Local SEO setup so customers can find you easily
          </div>
        </div>
      </section>

      {/* Center gold line */}
	    <section>
        <div className="relative z-10 flex justify-center">
          <div className="w-24 h-1 bg-yellow-400 rounded-full shadow-[0_0_15px_#FFD700]"></div>
        </div>
        </section>

      {/* ===== RESULTS ===== */}
      <section className="px-6 md:px-20 py-20 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-10">
          The Result?
        </h2>

        <div className="text-gray-300 space-y-4 text-lg">
          <p>More bookings and appointments</p>
          <p>Stronger trust with new customers</p>
          <p>A professional online presence that stands out</p>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="px-6 py-24 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
          Ready to Grow Your Pet Business?
        </h2>

        <p className="text-gray-400 mb-10">
          Let’s build you a website that brings in more customers.
        </p>

        <a
          href="/register?source=petservices"
          className="px-10 py-4 rounded-2xl font-semibold
                     bg-yellow-500 text-black
                     hover:scale-105 hover:shadow-[0_0_25px_rgba(255,215,0,0.7)]
                     transition-all duration-300"
        >
          Get Started
        </a>
      </section>
      <Footer />
    </main>
  );
}