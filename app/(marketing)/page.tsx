"use client";

import Hero from "@/components/Hero";


export default function MarketingPage() {
  return (
    <main className="bg-black text-white">
      
      {/* ===== HERO ===== */}
      <Hero
  title={
    <>
      <span className="text-yellow-400">Task</span>Nova
    </>
    }
    />

      {/* ===== FEATURES SECTION ===== */}
      <section
        id="features"
        className="py-24 px-6 md:px-20 bg-black"
      >
        <h2 className="text-4xl font-bold text-center mb-16">
          Why Choose <span className="text-yellow-400">Task</span>Nova?
        </h2>

        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          
          <div className="p-8 bg-gray-900 rounded-2xl border border-yellow-500/30 
                          hover:shadow-[0_0_25px_white] transition duration-300">
            <h3 className="text-xl font-semibold mb-3 text-yellow-400">
              Easy Task Tracking
            </h3>
            <p className="text-gray-300">
              Create, assign, and manage tasks effortlessly with a clean and intuitive interface.
            </p>
          </div>

          <div className="p-8 bg-gray-900 rounded-2xl border border-yellow-500/30 
                          hover:shadow-[0_0_25px_white] transition duration-300">
            <h3 className="text-xl font-semibold mb-3 text-yellow-400">
              Team Collaboration
            </h3>
            <p className="text-gray-300">
              Keep your team in sync with shared boards, comments, and real-time updates.
            </p>
          </div>

          <div className="p-8 bg-gray-900 rounded-2xl border border-yellow-500/30 
                          hover:shadow-[0_0_25px_white] transition duration-300">
            <h3 className="text-xl font-semibold mb-3 text-yellow-400">
              Timeline & Kanban View
            </h3>
            <p className="text-gray-300">
              Visualize your workflow with flexible views that match your process.
            </p>
          </div>

          <div className="p-8 bg-gray-900 rounded-2xl border border-yellow-500/30 
                          hover:shadow-[0_0_25px_white] transition duration-300">
            <h3 className="text-xl font-semibold mb-3 text-yellow-400">
              Insights & Reporting
            </h3>
            <p className="text-gray-300">
              Track progress, identify bottlenecks, and make smarter decisions with analytics.
            </p>
          </div>

        </div>
      </section>
      
      <section>
        <div className="relative z-10 flex justify-center">
          <div className="w-24 h-1 bg-yellow-400 rounded-full shadow-[0_0_15px_#FFD700]"></div>
        </div>
      </section>
                  
      {/* Center gold line for bling */}
		  <section>
        <div className="relative z-10 flex justify-center">
          <div className="w-24 h-1 bg-yellow-400 rounded-full shadow-[0_0_15px_#FFD700]"></div>
        </div>
      </section>
      
      {/* ===== CTA BANNER ===== */}
      <section className="py-24 px-6 md:px-20 bg-black text-center border-t border-yellow-500/20">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to simplify your workflow?
        </h2>

        <p className="mb-10 max-w-xl mx-auto bg-black text-gray-300">
          Get in touch with an advisor and start organizing your projects today.
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
