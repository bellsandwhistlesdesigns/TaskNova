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
            AI Automation for{" "}
            <span className="text-yellow-400">Pet Businesses</span>
          </>
        }
        subtitle={
          <>
            <span className="text-white">
              Modern AI-powered websites and automation systems designed to help
              pet businesses increase bookings, streamline customer communication,
              and build lasting trust with pet owners.
            </span>
          </>
        }
        subSubtitle={
          <>
            <span className="text-white">
              Automate bookings, appointment reminders, customer inquiries,
              and follow-ups with a
            </span>
            <span className="text-yellow-400">
              {" "}24/7 AI-powered experience.
            </span>
          </>
        }
        showButtons={true}
        secondaryctaText="See AI in Action"
        secondaryctaLink="/register?source=petservicesmain"
        titleSize="text-4xl sm:text-5xl md:text-6xl"
        heightClass="min-h-[70vh]"
      />

      {/* ===== PROBLEMS ===== */}
      <section className="px-6 md:px-20 py-20 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-10 text-center">
          Your Website Should Help Grow Your Business
        </h2>

        <div className="grid md:grid-cols-3 gap-8 text-gray-300">

          <div className="p-6 bg-gray-900 rounded-2xl border border-yellow-500/20">
            Missed calls and outdated booking systems can cost valuable
            appointments and repeat customers.
          </div>

          <div className="p-6 bg-gray-900 rounded-2xl border border-yellow-500/20">
            Customers expect fast responses, easy scheduling, and clear
            information about your services.
          </div>

          <div className="p-6 bg-gray-900 rounded-2xl border border-yellow-500/20">
            Without a modern online presence, it’s difficult to stand out
            from other local pet businesses.
          </div>

        </div>
      </section>

      {/* ===== SOLUTIONS ===== */}
      <section className="px-6 md:px-20 py-20 bg-black/60">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-12 text-center">
          AI Systems Built for Pet Businesses
        </h2>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto text-gray-300">

          <div className="p-6 bg-gray-900 rounded-2xl border border-yellow-500/20">
            AI-powered appointment booking and automated scheduling workflows
          </div>

          <div className="p-6 bg-gray-900 rounded-2xl border border-yellow-500/20">
            Smart customer responses for service inquiries, pricing, and bookings
          </div>

          <div className="p-6 bg-gray-900 rounded-2xl border border-yellow-500/20">
            Mobile-first websites designed to build trust and increase conversions
          </div>

          <div className="p-6 bg-gray-900 rounded-2xl border border-yellow-500/20">
            Local SEO optimization to help nearby pet owners discover your business
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
          <p>More appointments and recurring customers</p>
          <p>Faster communication and improved customer experiences</p>
          <p>A modern AI-powered business that stands out online</p>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="px-6 py-24 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
          Ready to Modernize Your Pet Business?
        </h2>

        <p className="text-gray-400 mb-10">
          Let’s build an AI-powered system that helps automate bookings,
          improve customer experiences, and grow your business.
        </p>

        <a
          href="/register?source=petservices"
          className="px-10 py-4 rounded-2xl font-semibold
                     bg-yellow-500 text-black
                     hover:scale-105 hover:shadow-[0_0_25px_rgba(255,215,0,0.7)]
                     transition-all duration-300"
        >
          Book a Free Demo
        </a>
      </section>

      <Footer />
    </main>
  );
}