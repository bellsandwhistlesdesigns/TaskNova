import Hero from "@/components/Hero";

export default function MarketingPage() {
  return (
    <main>
      <Hero /> {/* default marketing hero */}

      {/* ===== FEATURES SECTION ===== */}
      <section id="features" className="py-20 px-6 md:px-20 bg-white">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">Why Choose TaskNova?</h2>
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="p-6 bg-blue-50 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Easy Task Tracking</h3>
            <p className="text-blue-700">Create, assign, and manage tasks effortlessly with a simple interface.</p>
          </div>
          <div className="p-6 bg-blue-50 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Team Collaboration</h3>
            <p className="text-blue-700">Keep your team in sync with shared boards, comments, and real-time updates.</p>
          </div>
          <div className="p-6 bg-blue-50 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Timeline & Kanban View</h3>
            <p className="text-blue-700">Visualize your workflow with flexible views that match your style.</p>
          </div>
          <div className="p-6 bg-blue-50 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Insights & Reporting</h3>
            <p className="text-blue-700">Track progress, identify bottlenecks, and make smarter decisions with analytics.</p>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="py-20 px-6 md:px-20 bg-blue-50">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">Loved by Teams Everywhere</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <p className="text-blue-700 italic mb-4">TaskNova transformed our team workflow. It's intuitive and powerful!”</p>
            <span className="text-blue-800 font-semibold">— Sarah L., Product Manager</span>
          </div>
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <p className="text-blue-700 italic mb-4">“We finally have a clear view of all tasks and deadlines. Love it!”</p>
            <span className="text-blue-800 font-semibold">— Mark T., Team Lead</span>
          </div>
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <p className="text-blue-700 italic mb-4">“Simple, clean, and efficient. FlowHive makes managing projects fun!”</p>
            <span className="text-blue-800 font-semibold">— Emily R., Designer</span>
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="py-20 px-6 md:px-20 bg-blue-600 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to simplify your workflow?</h2>
        <p className="mb-8 max-w-xl mx-auto">Get touch with an advisor, and start organizing your projects today.</p>
        <a
          href="/register"
          className="bg-white text-blue-600 px-8 py-4 rounded-lg shadow hover:bg-blue-50 transition font-semibold"
        >
          Find out More
        </a>
      </section>
      
    </main>
  );
}
