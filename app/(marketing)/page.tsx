"use client";

import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar"
import WhoWeHelp from "@/components/WhoWeHelp";

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
        <span className="text-white">Building modern </span>
        <span className="text-yellow-400 font-semibold">websites</span>
        </>
      }
      heightClass="min-h-[70vh]"
      showButtons={true}
      />
      <WhoWeHelp />
      {/* ===== FEATURES SECTION ===== */}
<section
  id="features"
  className="py-24 px-6 md:px-20 bg-black"
>
  <h2 className="text-4xl font-bold text-center mb-16">
    How <span className="text-yellow-400">Task</span>Nova Builds for the Future
  </h2>

  <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
    
    <div className="p-8 bg-gray-900 rounded-2xl border border-yellow-500/30 
                    hover:shadow-[0_0_25px_white] transition duration-300">
      <h3 className="text-xl font-semibold mb-3 text-yellow-400">
        Modern Frontend Architecture
      </h3>
      <p className="text-gray-300">
        Built with cutting-edge frameworks for speed, responsiveness, and seamless user experiences across all devices.
      </p>
    </div>

    <div className="p-8 bg-gray-900 rounded-2xl border border-yellow-500/30 
                    hover:shadow-[0_0_25px_white] transition duration-300">
      <h3 className="text-xl font-semibold mb-3 text-yellow-400">
        Performance & Optimization
      </h3>
      <p className="text-gray-300">
        Fast load times, optimized assets, and scalable infrastructure designed to keep your site running at peak performance.
      </p>
    </div>

    <div className="p-8 bg-gray-900 rounded-2xl border border-yellow-500/30 
                    hover:shadow-[0_0_25px_white] transition duration-300">
      <h3 className="text-xl font-semibold mb-3 text-yellow-400">
        Collaborative Development
      </h3>
      <p className="text-gray-300">
        Clear communication, agile workflows, and tight feedback loops ensure your vision is delivered without friction.
      </p>
    </div>

    <div className="p-8 bg-gray-900 rounded-2xl border border-yellow-500/30 
                    hover:shadow-[0_0_25px_white] transition duration-300">
      <h3 className="text-xl font-semibold mb-3 text-yellow-400">
        SEO-Driven Foundations
      </h3>
      <p className="text-gray-300">
        From semantic structure to performance tuning, every build is optimized to improve visibility and long-term search rankings.
      </p>
    </div>

  </div>
</section>
      
      <section>
        <div className="relative z-10 flex justify-center">
          <div className="w-24 h-1 bg-yellow-400 rounded-full shadow-[0_0_15px_#FFD700]"></div>
        </div>
      </section>
                  
      {/* Center gold line */}
		  <section>
        <div className="relative z-10 flex justify-center">
          <div className="w-24 h-1 bg-yellow-400 rounded-full shadow-[0_0_15px_#FFD700]"></div>
        </div>
      </section>
      
      {/* ===== CTA BANNER ===== */}
      <section className="py-24 px-6 md:px-20 bg-black text-center border-t border-yellow-500/20">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready for a new Website?
        </h2>

        <p className="mb-10 max-w-xl mx-auto bg-black text-gray-300">
          Get in touch with an advisor and start gaining new customers today.
        </p>

        <a
          href="/register"
          className="inline-block px-10 py-4 rounded-2xl font-semibold
                     bg-yellow-500 text-black
                     border-2 border-white
                     hover:shadow-[0_0_30px_white]
                     hover:scale-105
                     transition-all duration-300"
        >
          Find out More
        </a>
      </section>

    </main>
  );
}
