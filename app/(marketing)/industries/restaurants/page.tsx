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
              Restaurants,
            </span>{" "}
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
              <span className="text-yellow-400"> designed to help restaurants</span> respond faster,
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
        secondaryctaText="Upgrade my Restaurant"
        secondaryctaLink="/contact?source=restauranthero"
        titleSize="text-4xl sm:text-5xl md:text-6xl"
        sunPosition="right"
      />

      {/* PAIN POINTS */}
      <section className="py-20 px-6 md:px-20 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-10 text-center">
          Your Website Should <span className="text-yellow-400">Help Run</span> Your Restaurant
        </h2>

        <p className="text-gray-300 text-lg leading-relaxed">
          Many restaurants lose customers before they ever step through the
          door. Missed calls, slow websites, confusing menus, and outdated
          booking systems create friction that drives customers elsewhere.
          <span className="text-yellow-400">Task</span>Nova <span className="text-yellow-400">helps restaurants automate</span> customer interactions and create
          modern digital experiences that work around the clock.
        </p>
      </section>
      
      {/* Center gold line */}
      <section>
        <div className="relative z-10 flex justify-center">
          <div className="w-24 h-1 bg-yellow-400 rounded-full shadow-[0_0_15px_#FFD700]"></div>
        </div>
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


      {/* CTA */}
      <section className="py-24 px-6 md:px-20 bg-black text-center border-t border-yellow-500/20">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to <span className="text-yellow-400 font-semibold">Modernize</span> Your Restaurant?
        </h2>

        <p className="mb-10 max-w-xl mx-auto bg-black text-gray-300">
          Let’s build an <span className="text-yellow-400 font-semibold">AI-powered restaurant system that helps you</span> automate
          bookings, engage customers, and <span className="text-yellow-400 font-semibold">grow your business.</span>
        </p>

        <Link
          href="/contact?source=restaurantscta"
          className="px-10 py-4 rounded-2xl font-semibold
                     bg-yellow-500 text-black
                     border-2 border-yellow-500
                     hover:bg-transparent hover:text-white
                     hover:shadow-[0_0_30px_white]
                     hover:scale-105
                     transition-all duration-300"
        >
          Handle More Orders With AI
        </Link>
      </section>
      <Footer />
    </main>
  );
}