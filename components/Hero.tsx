"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface HeroProps {
  title?: string;
  subtitle?: string;
  primaryctaText?: string;
  primaryctaLink?: string;
  secondaryctaText?: string;
  secondaryctaLink?: string;
  showButtons?: boolean;
  bgGradient?: string;
  heightClass?: string;
}

export default function Hero({
  title = "TaskNova",
  subtitle = "Project Management Software for Project Managers",
  primaryctaText = "Log In",
  primaryctaLink = "/login",
  secondaryctaText = "Find out More",
  secondaryctaLink = "/register",
  showButtons = true,
  bgGradient = "from-blue-50 to-blue-100",
  heightClass = "min-h-screen",
}: HeroProps) {
  return (
    <main>
      <section className={`${heightClass} flex flex-col items-center justify-center text-center px-6 md:px-20 bg-gradient-to-br ${bgGradient}`}
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
        className="text-lg md:text-xl mb-8 text-blue-800 max-w-2xl"
      >
        {subtitle}
      </motion.p>

      {showButtons && (
        <div className="flex flex-col md:flex-row gap-4">
          <a
            href={primaryctaLink}
            className="w-full md:w-auto bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition text-center"
          >
            {primaryctaText}
          </a>

          {secondaryctaText && secondaryctaLink && (
            <a
              href={secondaryctaLink}
              className="w-full md:w-auto bg-white text-blue-600 px-6 py-3 rounded-lg shadow hover:bg-blue-50 transition text-center"
            >
              {secondaryctaText}
            </a>
          )}
        </div>
      )}
      </section>
    </main>
  );
}
