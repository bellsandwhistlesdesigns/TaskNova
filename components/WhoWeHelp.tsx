import Link from "next/link";

export default function WhoWeHelp() {
  return (
    <section className="py-24 px-6 md:px-20 bg-black">
      
      <h2 className="text-4xl font-bold text-center mb-16">
        Who <span className="text-yellow-400">Task</span>Nova Helps
      </h2>

      <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">

        <Link href="/industries/general">
          <div className="p-8 bg-gray-900 rounded-2xl border border-yellow-500/30
                          hover:shadow-[0_0_25px_white] hover:scale-105
                          transition duration-300 cursor-pointer">
            <h3 className="text-xl font-semibold mb-3 text-yellow-400">
              Small Businesses Owners
            </h3>
            <p className="text-gray-300">
              Professional websites that build trust and help you stand out locally.
            </p>
          </div>
        </Link>

        <Link href="/industries/restaurants">
          <div className="p-8 bg-gray-900 rounded-2xl border border-yellow-500/30
                          hover:shadow-[0_0_25px_white] hover:scale-105
                          transition duration-300 cursor-pointer">
            <h3 className="text-xl font-semibold mb-3 text-yellow-400">
              Restaurants & Social Houses 
            </h3>
            <p className="text-gray-300">
              Menus, reservations, and mobile-first designs that bring in more customers.
            </p>
          </div>
        </Link>

        <Link href="/industries/hairsalon">
          <div className="p-8 bg-gray-900 rounded-2xl border border-yellow-500/30
                          hover:shadow-[0_0_25px_white] hover:scale-105
                          transition duration-300 cursor-pointer">
            <h3 className="text-xl font-semibold mb-3 text-yellow-400">
              Barbers & Hair Salons
            </h3>
            <p className="text-gray-300">
              Booking-ready websites that remind clients to keep coming back.
            </p>
          </div>
        </Link>

        <Link href="/industries/pet-stores">
          <div className="p-8 bg-gray-900 rounded-2xl border border-yellow-500/30
                          hover:shadow-[0_0_25px_white] hover:scale-105
                          transition duration-300 cursor-pointer">
            <h3 className="text-xl font-semibold mb-3 text-yellow-400">
              Animal Groomers
            </h3>
            <p className="text-gray-300">
              Friendly, visually engaging sites that connect with pet owners and clubs that drive repeat visits.
            </p>
          </div>
        </Link>

      </div>
    </section>
  );
}