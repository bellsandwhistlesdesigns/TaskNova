"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const MAINTENANCE_MODE = true; 
// Later: process.env.NEXT_PUBLIC_MAINTENANCE_MODE === "true";
// Change the MAINTENANCE_MODE TO false;
//when changing to false, need to add notepoad++ show buttons

interface HeroProps {
  title?: string;
  subtitle?: string;
  bgGradient?: string;
  heightClass?: string;
}

export default function Hero({
  title = "TaskNova",
  subtitle = "The smarter way to manage tasks, teams, and momentum.",
  bgGradient = "from-blue-50 via-blue-100 to-indigo-100",
  heightClass = "min-h-screen",
}: HeroProps) {

  const [email, setEmail] = useState("");

  if (MAINTENANCE_MODE) {
    return (
      <main>
        <section
          className={`${heightClass} relative flex flex-col items-center justify-center text-center px-6 md:px-20 bg-gradient-to-br ${bgGradient}`}
        >
          {/* Soft Blur Background Effect */}
          <div className="absolute inset-0 backdrop-blur-[2px]" />

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 max-w-3xl"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-blue-900">
              {title}
            </h1>

            <p className="text-xl md:text-2xl mb-4 text-blue-800 font-medium">
              We are Launching Soon
            </p>

            <p className="text-lg md:text-xl mb-10 text-blue-700">
              We're building something powerful to help you stay organized,
              focused, and unstoppable.
            </p>

            {/* Email Capture */}
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email for early access"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full md:w-80 px-5 py-3 rounded-lg border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <button
                className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition font-semibold"
              >
                Notify Me
              </button>
            </div>

            <p className="mt-6 text-sm text-blue-600 opacity-80">
              Be the first to experience TaskNova.
            </p>
          </motion.div>
        </section>
      </main>
    );
  }

  // Normal Hero (when live)
  return (
    <main>
    <section
      className={`${heightClass} flex flex-col items-center justify-center text-center px-6 md:px-20 bg-gradient-to-br ${bgGradient}`}
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-6xl font-bold mb-6 text-blue-900"
      >
        {title}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-lg md:text-xl mb-10 text-blue-800 max-w-2xl"
      >
        {subtitle}
      </motion.p>

      {/* Live CTA Buttons */}
      <div className="flex flex-col md:flex-row gap-4">
        <a
          href="/login"
          className="w-full md:w-auto bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition text-center"
        >
          Log In
        </a>

        <a
          href="/register"
          className="w-full md:w-auto border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition text-center"
        >
          Register
        </a>
      </div>
    </section>
  </main>
  );
}