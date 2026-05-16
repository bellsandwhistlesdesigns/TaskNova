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
            <span className="text-white text-lg md:text-2xl font-bold tracking-wide">
              Here at <span className="text-yellow-400">Task</span>Nova we build Smart Websites and AI-powered systems designed to <span className="text-yellow-400">help your
              business</span> respond faster, save time, and <span className="text-yellow-400">grow smarter.</span>
            </span>
          </>
        }
        subSubtitle={
          <>
            <span className="text-white">
              Save time, respond faster, and turn your website into a 
            </span>
            <span className="text-yellow-400">
              {" "}24/7 business asset..
            </span>
          </>
        }
        heightClass="min-h-[70vh]"
        showButtons={true}
        secondaryctaText="Modernize My Operations"
        secondaryctaLink="/contact?source=generalbusinesshero"
        titleSize="text-4xl sm:text-5xl md:text-6xl"
      />

      {/* PAIN POINTS */}
      <section className="py-20 px-6 md:px-20 max-w-5xl mx-auto text-center">
      <h2 className="text-3xl md:text-5xl font-extrabold mb-10 text-center">
      Your Website Should{" "}
        <span className="text-yellow-400">Help Run</span> Your Business
      </h2>

      <p className="text-gray-300 text-lg leading-relaxed">
      Many small businesses lose valuable leads because of outdated websites,
      missed inquiries, slow follow-ups, and disconnected customer experiences.
      Today’s customers expect fast communication, modern design, and seamless
      online interactions.
      <span className="text-yellow-400"> Task</span>Nova helps businesses
      automate customer workflows, improve responsiveness, and create modern
      AI-powered digital experiences that work around the clock.
    </p>
    </section>  

      {/* BUSINESS TYPES */}
      <section className="py-20 px-6 md:px-20">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

          <div className="p-8 bg-gray-900 rounded-2xl border border-yellow-500/30 hover:shadow-[0_0_25px_white] transition duration-300">
            <h3 className="text-xl font-semibold mb-3 text-yellow-400">
              Local Shops & Retail
            </h3>
            <p className="text-gray-300">
              Create a modern digital experience that keeps customers engaged before they ever walk through the door.
            </p>
          </div>

          <div className="p-8 bg-gray-900 rounded-2xl border border-yellow-500/30 hover:shadow-[0_0_25px_white] transition duration-300">
            <h3 className="text-xl font-semibold mb-3 text-yellow-400">
              Service-Based Businesses
            </h3>
            <p className="text-gray-300">
              Automate inquiries, follow-ups, and client communication so you
              can focus on delivering your services.
            </p>
          </div>

          <div className="p-8 bg-gray-900 rounded-2xl border border-yellow-500/30 hover:shadow-[0_0_25px_white] transition duration-300">
            <h3 className="text-xl font-semibold mb-3 text-yellow-400">
              Contractors & Trades
            </h3>
            <p className="text-gray-300">
              Keep job requests organized, respond faster, and simplify scheduling without extra admin work.
            </p>
          </div>

          <div className="p-8 bg-gray-900 rounded-2xl border border-yellow-500/30 hover:shadow-[0_0_25px_white] transition duration-300">
            <h3 className="text-xl font-semibold mb-3 text-yellow-400">
              Startups & Growing Brands
            </h3>
            <p className="text-gray-300">
              Launch with scalable systems designed to support growth, customer engagement, and operational efficiency.
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
      {/* CORE BENEFITS */}
      <section className="py-20 px-6 md:px-20">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          <div className="p-6 bg-gray-900 rounded-2xl border border-yellow-500/30">
            <h3 className="text-lg text-yellow-400 font-semibold mb-2">
              AI Lead Automation
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Automatically respond to customer inquiries and capture leads
              faster than ever before.
            </p>
          </div>

          <div className="p-6 bg-gray-900 rounded-2xl border border-yellow-500/30">
            <h3 className="text-lg text-yellow-400 font-semibold mb-2">
              Smart Customer Workflows
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Streamline repetitive business tasks with intelligent automation
              systems tailored to your business.
            </p>
          </div>

          <div className="p-6 bg-gray-900 rounded-2xl border border-yellow-500/30">
            <h3 className="text-lg text-yellow-400 font-semibold mb-2">
              Modern AI-Powered Websites
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Build trust and stand out online with a modern website designed
              for speed, performance, and growth.
            </p>
          </div>

        </div>
      </section>

      

      {/* CTA */}
      <section className="py-24 px-6 md:px-20 bg-black text-center border-t border-yellow-500/20">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to <span className="text-yellow-400 font-semibold">Automate</span> Your Business?
        </h2>

        <p className="mb-10 max-w-xl mx-auto bg-black text-gray-300">
          Let’s build an <span className="text-yellow-400 font-semibold">Intelligent Customer Workflow</span> that <span className="text-yellow-400">helps your business</span> save time,
          capture more leads, and <span className="text-yellow-400 font-semibold">grow faster.</span>
        </p>

        <Link
          href="/contact?=generalbusinesscta"
          className="px-10 py-4 rounded-2xl font-semibold
                     bg-yellow-500 text-black
                     border-2 border-yellow-500
                     hover:bg-transparent hover:text-white
                     hover:shadow-[0_0_30px_white]
                     hover:scale-105
                     transition-all duration-300"
        >
          Automate My Business
        </Link>
      </section>

      <Footer />
    </main>
  );
}