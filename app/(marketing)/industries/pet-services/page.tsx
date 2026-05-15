"use client";

import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Link from "next/link";



export default function PetServicesPage() {
  return (
    <main className="bg-black text-white">
      <NavBar />

      {/* ===== HERO ===== */}
      <Hero
        
        title={
          <>
            AI Automation for{" "}
            <span className="text-yellow-400">Pet Businesses</span>
          </>
        }
        subtitle={
          <>
            <span className="text-white">
              Modern AI-powered websites and automation systems <span className="text-yellow-400">designed to help
              pet businesses </span>increase bookings, streamline customer communication,
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
        secondaryctaLink="/contact?source=petserviceshero"
        titleSize="text-4xl sm:text-5xl md:text-6xl"
        heightClass="min-h-[70vh]"
        sunPosition="right"
      />

      {/* ===== PROBLEMS ===== */}
      <section className="px-6 md:px-20 py-20 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-10 text-center">
          Your Website Should Help <span className="text-yellow-400 font-extrabold">Grow Your Business</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8 text-gray-300">

          <div className="p-6 bg-gray-900 rounded-2xl border border-yellow-500/30
                          hover:shadow-[0_0_25px_white] transition duration-300">
            Missed calls and outdated booking systems can cost valuable
            appointments and repeat customers.
          </div>

          <div className="p-6 bg-gray-900 rounded-2xl border border-yellow-500/30
                          hover:shadow-[0_0_25px_white] transition duration-300">
            Customers expect fast responses, easy scheduling, and clear
            information about your services.
          </div>

          <div className="p-6 bg-gray-900 rounded-2xl border border-yellow-500/30
                          hover:shadow-[0_0_25px_white] transition duration-300">
            Without a modern online presence, it’s difficult to stand out
            from other local pet businesses.
          </div>

        </div>
      </section>

      {/* ===== SOLUTIONS ===== */}
      <section className="px-6 md:px-20 py-20 bg-black/60">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-12 text-center">
          AI Systems Built for <span className="text-yellow-400 font-extrabold">Pet Businesses</span>
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
      
      <section className="py-24 px-6 md:px-20 bg-black text-center border-t border-yellow-500/20">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to <span className="text-yellow-400 font-semibold">Modernize</span> Your Pet Business?
        </h2>

        <p className="mb-10 max-w-xl mx-auto bg-black text-gray-300">
          Let’s build an <span className="text-yellow-400 font-semibold">AI-powered system</span> that helps automate bookings,
          improve customer experiences, and <span className="text-yellow-400 font-semibold">grow your business.</span>
        </p>

        <Link
          href="/contact?source=petservicescta"
          className="px-10 py-4 rounded-2xl font-semibold
                     bg-yellow-500 text-black
                     border-2 border-yellow-500
                     hover:bg-transparent hover:text-white
                     hover:shadow-[0_0_30px_white]
                     hover:scale-105
                     transition-all duration-300"
        >
          Transform My Business
        </Link>
      </section>
      <Footer />
    </main>
  );
}