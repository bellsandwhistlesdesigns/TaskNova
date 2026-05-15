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
            AI Automation for{" "}
            <span className="text-yellow-400">Hair Salons</span> &{" "}
            <span className="text-yellow-400">Barbers</span>
          </>
        }
        subtitle={
          <>
            <span className="text-white">
              Modern AI-powered websites and booking systems designed to help
              salons streamline appointments, reduce missed calls, and keep
              schedules full.
            </span>
          </>
        }
        subSubtitle={
          <>
            <span className="text-white">
              Automate bookings, client inquiries, reminders, and follow-ups
              with a
            </span>
            <span className="text-yellow-400">
              {" "}24/7 AI-powered salon experience.
            </span>
          </>
        }
        heightClass="min-h-[70vh]"
        showButtons={true}
        secondaryctaText="Streamline My Business"
        secondaryctaLink="/contact?source=hairsalonhero"
        titleSize="text-4xl sm:text-5xl md:text-6xl"
      />

      {/* PAIN POINTS */}
      <section className="py-20 px-6 md:px-20 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">
          Your Salon Should Be <span className="text-yellow-400">Booking Clients</span> Even After Hours
        </h2>

        <p className="text-gray-400 leading-relaxed">
          Clients expect <span className="text-yellow-400">instant booking experiences and fast responses. </span>
           Missed calls, outdated websites, and manual scheduling can cost your
          salon valuable appointments every week. <span className="text-yellow-400">We help salons and
          barbers</span> automate customer interactions and create modern digital
          experiences that help <span className="text-yellow-400 font-bold">keep your chairs full.</span>
        </p>
      </section>

      {/* SOLUTIONS */}
      <section className="py-20 px-6 md:px-20">
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

      <div className="p-8 bg-gray-900 rounded-2xl border border-yellow-500/30 hover:shadow-[0_0_25px_white] transition duration-300">
       <h3 className="text-xl font-semibold mb-3 text-yellow-400">
          24/7 Appointment Booking
        </h3>

        <p className="text-gray-300 leading-relaxed">
          Let clients book appointments anytime with automated scheduling,
          confirmations, reminders, and seamless booking experiences that help
          reduce no-shows.
        </p>
      </div>

      <div className="p-8 bg-gray-900 rounded-2xl border border-yellow-500/30 hover:shadow-[0_0_25px_white] transition duration-300">
      <h3 className="text-xl font-semibold mb-3 text-yellow-400">
        Faster Client Communication
      </h3>

      <p className="text-gray-300 leading-relaxed">
        Respond instantly to service inquiries, pricing questions, and booking
        requests without constantly answering calls or messages manually.
      </p>
      </div>

      <div className="p-8 bg-gray-900 rounded-2xl border border-yellow-500/30 hover:shadow-[0_0_25px_white] transition duration-300">
      <h3 className="text-xl font-semibold mb-3 text-yellow-400">
        Modern Salon Experiences
      </h3>

      <p className="text-gray-300 leading-relaxed">
        Showcase your services, transformations, and brand with a modern
        mobile-first website designed to attract new clients and build trust.
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
          Ready to <span className="text-yellow-400">Modernize Your Salon?</span>
        </h2>

        <p className="text-gray-400 mb-10">
          Let’s build an <span className="text-yellow-400">high-conversion digital experience salon system</span> that helps automate your bookings,
          improve your customer experiences, and grow your business.
        </p>

        <Link
          href="/contact?source=hairsaloncta"
          className="inline-block px-8 py-4 rounded-2xl font-semibold
                     bg-yellow-500 text-black
                     border-2 border-yellow-500
                     hover:bg-transparent hover:text-white
                     hover:shadow-[0_0_30px_white]
                     hover:scale-105
                     transition-all duration-300"
        >
          Unlock Smarter Workflows
        </Link>
      </section>

      <Footer />
    </main>
  );
}