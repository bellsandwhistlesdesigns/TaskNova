"use client";

import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import WhoWeHelp from "@/components/WhoWeHelp";
import Footer from "@/components/Footer";
import Link from "next/link";


export default function MarketingPage() {
  return (
    <main className="bg-black text-white">
      <NavBar />
      {/* ===== HERO ===== */}
      <Hero
  title={
    <>
      <span className="text-yellow-400">Task</span>Nova
    </>
    }
    subtitle={
        <>
        <span className="text-white text-lg md:text-2xl font-bold tracking-wide">
        Building <span className="text-yellow-400">AI-powered websites </span>and <span className="text-yellow-400">Automation Systems </span>for small businesses</span>
        </>
      }
    subSubtitle={
      <>
      <span className="mb-10 max-w-xl mx-auto bg-black text-gray-300">
        <span className="text-yellow-400">Automate</span> lead capture, follow-ups, bookings, <span className="text-yellow-400">and </span>customer communications
        <span className="text-white">
        {" "}with modern AI workflows that save time and help <span className="text-yellow-400"> grow your business.</span></span>
        </span>
      </>
    }
      
      heightClass="min-h-[70vh]"
      showButtons={true}
      secondaryctaText = "See What's Possible..."
      secondaryctaLink = "/contact?source=landingPageHeader"
      />
      <WhoWeHelp />
      {/* Gold Bar */}
		  <section>
        <div className="relative z-10 flex justify-center">
          <div className="w-24 h-1 bg-yellow-400 rounded-full shadow-[0_0_15px_#FFD700]"></div>
        </div>
      </section>

      {/* ===== FEATURES SECTION ===== */}
<section
   id="features"
    className="py-24 px-6 md:px-20 bg-black"
  >
  <h2 className="text-4xl font-bold text-center mb-16">
    AI Automation Built for{" "}
    <span className="text-yellow-400">Modern Businesses</span>
  </h2>

  <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">

    <div
      className="p-8 bg-gray-900 rounded-2xl border border-yellow-500/30
                 hover:shadow-[0_0_25px_white] transition duration-300"
    >
      <h3 className="text-xl font-semibold mb-3 text-yellow-400">
        AI Lead Capture
      </h3>

      <p className="text-gray-300">
        Automatically collect, organize, and analyze customer inquiries so no
        potential lead gets missed.
      </p>
    </div>

    <div
      className="p-8 bg-gray-900 rounded-2xl border border-yellow-500/30
                 hover:shadow-[0_0_25px_white] transition duration-300"
    >
      <h3 className="text-xl font-semibold mb-3 text-yellow-400">
        Automated Customer Follow-Ups
      </h3>

      <p className="text-gray-300">
        Streamline communication with intelligent follow-ups, appointment
        reminders, and automated responses.
      </p>
    </div>

    <div
      className="p-8 bg-gray-900 rounded-2xl border border-yellow-500/30
                 hover:shadow-[0_0_25px_white] transition duration-300"
    >
      <h3 className="text-xl font-semibold mb-3 text-yellow-400">
        Smart Website Systems
      </h3>

      <p className="text-gray-300">
        Modern responsive websites designed to help businesses build trust,
        improve conversions, and operate more efficiently.
      </p>
    </div>

    <div
      className="p-8 bg-gray-900 rounded-2xl border border-yellow-500/30
                 hover:shadow-[0_0_25px_white] transition duration-300"
    >
      <h3 className="text-xl font-semibold mb-3 text-yellow-400">
        AI-Powered Workflows
      </h3>

      <p className="text-gray-300">
        Reduce repetitive manual work with intelligent automation systems built
        to save time and support business growth.
      </p>
    </div>

  </div>
  </section>
      {/* ===== CTA BANNER ===== */}
      <section className="py-24 px-6 md:px-20 bg-black text-center border-t border-yellow-500/20">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Is Your Business <span className="text-yellow-400 font-semibold">Ready</span> for AI Power?
        </h2>

        <p className="mb-10 max-w-xl mx-auto bg-black text-gray-300">
          Get in touch with an advisor and <span className="text-yellow-400 font-semibold">start gaining new customers</span> today.
        </p>

        <Link
          href="/contact?source=landingpagecta"
          className="px-10 py-4 rounded-2xl font-semibold
                     bg-yellow-500 text-black
                     border-2 border-yellow-500
                     hover:bg-transparent hover:text-white
                     hover:shadow-[0_0_30px_white]
                     hover:scale-105
                     transition-all duration-300"
        >
          See AI in Action
        </Link>
      </section>
      <Footer />
    </main>
  );
}
