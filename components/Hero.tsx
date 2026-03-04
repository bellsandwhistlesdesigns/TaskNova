"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface HeroProps {
  title?: string;
  subtitle?: string;
  subSubtitle?: string;
  primaryctaText?: string;
  primaryctaLink?: string;
  secondaryctaText?: string;
  secondaryctaLink?: string;
  showButtons?: boolean;
  heightClass?: string;
}

interface Particle {
  size: number;
  startX: number;
  startY: number;
  deltaX: number;
  deltaY: number;
  duration: number;
}

interface Star {
  startX: number;
  startY: number;
  duration: number;
  delay: number;
}

export default function Hero({
  title = "TaskNova",
  subtitle = "",
  subSubtitle = "🚧 Currently in Development",
  primaryctaText = "Log In",
  primaryctaLink = "/login",
  secondaryctaText = "Register",
  secondaryctaLink = "/register",
  showButtons = true,
  heightClass = "min-h-screen",
}: HeroProps) {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [shootingStars, setShootingStars] = useState<Star[]>([]);

  useEffect(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    const generatedParticles: Particle[] = Array.from({ length: 40 }).map(() => ({
      size: Math.random() * 4 + 2,
      startX: Math.random() * width,
      startY: Math.random() * height,
      deltaX: (Math.random() - 0.5) * 200,
      deltaY: (Math.random() - 0.5) * 200,
      duration: 4 + Math.random() * 6,
    }));

    const generatedStars: Star[] = Array.from({ length: 10 }).map(() => ({
      startX: Math.random() * width,
      startY: Math.random() * height * 0.5,
      duration: 2 + Math.random() * 1.5,
      delay: Math.random() * 5,
    }));

    setParticles(generatedParticles);
    setShootingStars(generatedStars);
  }, []);

  return (
    <main>
      <section
        className={`${heightClass} relative flex flex-col items-center justify-center text-center px-6 md:px-20 bg-black overflow-hidden`}
      >
        {/* ===== SUPERNOVA GLOW LAYER 1 ===== */}
        <motion.div
          className="absolute rounded-full bg-gradient-radial from-yellow-400/70 via-yellow-300/40 to-transparent"
          style={{
            width: 800,
            height: 800,
            top: "30%",
            left: "50%",
            transform: "translateX(-50%)",
            filter: "blur(100px)",
          }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 6, repeat: Infinity }}
        />

        {/* ===== SUPERNOVA GLOW LAYER 2 ===== */}
        <motion.div
          className="absolute rounded-full bg-gradient-radial from-yellow-400/50 via-yellow-300/20 to-transparent"
          style={{
            width: 1200,
            height: 1200,
            top: "40%",
            left: "50%",
            transform: "translateX(-50%)",
            filter: "blur(150px)",
          }}
          animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        {/* ===== FLOATING PARTICLES ===== */}
        <div className="absolute inset-0 z-0">
          {particles.map((p, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full blur-sm"
              style={{
                width: p.size,
                height: p.size,
                left: p.startX,
                top: p.startY,
                backgroundColor: i % 2 === 0 ? "#FFD700" : "#FFFFFF",
                opacity: 0.7,
              }}
              animate={{
                x: [0, p.deltaX, 0],
                y: [0, p.deltaY, 0],
                opacity: [0.3, 0.9, 0.3],
              }}
              transition={{
                duration: p.duration,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* ===== SHOOTING STARS ===== */}
        <div className="absolute inset-0 z-0">
          {shootingStars.map((s, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full shadow-[0_0_8px_white]"
              style={{
                left: s.startX,
                top: s.startY,
              }}
              animate={{
                x: [0, 800],
                y: [0, 200],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: s.duration,
                repeat: Infinity,
                delay: s.delay,
              }}
            />
          ))}
        </div>

        {/* ===== CONTENT ===== */}
        <div className="relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-7xl md:text-9xl font-extrabold mb-6 text-white"
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-2xl md:text-3xl mb-6 text-yellow-400 max-w-2xl"
          >
            {subtitle}
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-md md:text-lg mb-10 text-gray-300 max-w-xl"
          >
            {subSubtitle}
          </motion.p>

          {showButtons && (
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <a
                href={primaryctaLink}
                className="px-8 py-4 rounded-2xl font-semibold
                           bg-yellow-500 text-black
                           border-2 border-white
                           hover:shadow-[0_0_35px_white]
                           hover:scale-105
                           transition-all duration-300"
              >
                {primaryctaText}
              </a>

              <a
                href={secondaryctaLink}
                className="px-8 py-4 rounded-2xl font-semibold
                           bg-transparent text-white
                           border-2 border-yellow-500
                           hover:bg-yellow-500 hover:text-black
                           hover:shadow-[0_0_35px_white]
                           hover:scale-105
                           transition-all duration-300"
              >
                {secondaryctaText}
              </a>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}