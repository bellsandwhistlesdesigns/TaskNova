"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface HeroProps {
  title?: React.ReactNode;
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

interface ExplosionParticle {
  angle: number;
  distance: number;
  size: number;
  duration: number;
  color: string;
  flare: boolean;
}

export default function Hero({
  title = (
    <>
      <span className="text-yellow-400">Task</span>
      <span className="text-white">Nova</span>
    </>
  ),
  subtitle = "",
  subSubtitle = "🚧 Currently in Development",
  primaryctaText = "Log In",
  primaryctaLink = "/login",
  secondaryctaText = "What we Are",
  secondaryctaLink = "/register",
  showButtons = false,
  heightClass = "min-h-screen",
}: HeroProps) {
  const [mounted, setMounted] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [shootingStars, setShootingStars] = useState<Star[]>([]);
  const [explodingParticles, setExplodingParticles] = useState<ExplosionParticle[]>([]);

  useEffect(() => {
    setMounted(true);

    const width = window.innerWidth;
    const height = window.innerHeight;

    // Floating particles
    const generatedParticles: Particle[] = Array.from({ length: 40 }).map(() => ({
      size: Math.random() * 4 + 2,
      startX: Math.random() * width,
      startY: Math.random() * height,
      deltaX: (Math.random() - 0.5) * 200,
      deltaY: (Math.random() - 0.5) * 200,
      duration: 4 + Math.random() * 6,
    }));

    // Shooting stars
    const generatedStars: Star[] = Array.from({ length: 8 }).map(() => ({
      startX: Math.random() * width,
      startY: Math.random() * height * 0.5,
      duration: 2 + Math.random() * 1.5,
      delay: Math.random() * 5,
    }));

    // Exploding particles
    const generatedExplosions: ExplosionParticle[] = Array.from({ length: 35 }).map(() => {
      const angle = Math.random() * Math.PI * 2;
      const flare = Math.random() < 0.18;
      const distance = flare ? 260 + Math.random() * 200 : 120 + Math.random() * 120;
      const colors = ["#ffffff", "#ffe066", "#ff7a3c"];
      const color = colors[Math.floor(Math.random() * colors.length)];
      return {
        angle,
        distance,
        size: Math.random() * 3 + 1,
        duration: flare ? 2.5 + Math.random() * 1 : 3 + Math.random() * 2,
        color,
        flare,
      };
    });

    setParticles(generatedParticles);
    setShootingStars(generatedStars);
    setExplodingParticles(generatedExplosions);
  }, []);

  if (!mounted) return null;

  return (
    <main>
      <section
        className={`${heightClass} relative flex flex-col items-center justify-center text-center px-6 md:px-20 bg-black overflow-hidden`}
      >
        {/* ===== SUPERNOVA SUN ===== */}
        <div
          className="absolute z-0 top-[5%] right-[25%] sm:right-[15%] w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] md:w-[320px] md:h-[320px]"  
      >
          {/* OUTER GLOW + SUBTLE FLARES */}
      <motion.div
      className="absolute rounded-full"
      style={{
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      background:
      "radial-gradient(circle, rgba(255,200,120,0.6) 0%, rgba(255,120,40,0.3) 40%, transparent 70%)",
      filter: "blur(40px)",
    }}
  animate={{ scale: [1, 1.05, 1] }}
  transition={{ duration: 10, repeat: Infinity }}
>
  {/* subtle rotating + pulsing flares on outer glow */}
  <motion.div
    className="absolute inset-0 rounded-full"
    style={{
      background:
        "conic-gradient(rgba(255,255,255,0.1), rgba(255,255,255,0.05), transparent)",
      mixBlendMode: "screen",
      filter: "blur(12px)",
    }}
    animate={{
      rotate: [0, 360],
      opacity: [0.6, 1, 0.6], // pulse opacity
    }}
    transition={{
      duration: 60,
      repeat: Infinity,
      ease: "linear",
    }}
  />
</motion.div>

          {/* SUN CORE */}
          <motion.div
            className="absolute rounded-full overflow-hidden w-full h-full"
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              background: "radial-gradient(circle, #fff6c2 0%, #ffb347 25%, #ff5e3a 55%, #b31217 90%)",
              boxShadow: "0 0 70px rgba(255,140,60,0.9), 0 0 140px rgba(255,60,30,0.6)",
            }}
            animate={{ scale: [1, 1.03, 0.99, 1.04, 1] }}
            transition={{ duration: 14, repeat: Infinity }}
          >
            {/* EXPLODING PARTICLES */}
            {explodingParticles.map((p, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full"
                style={{
                  width: p.size,
                  height: p.size,
                  top: "53%",
                  left: "53%",
                  backgroundColor: p.color,
                  boxShadow: `0 0 10px ${p.color}, 0 0 20px ${p.color}`,
                }}
                animate={{
                  x: [0, Math.cos(p.angle) * p.distance],
                  y: [0, Math.sin(p.angle) * p.distance],
                  opacity: [1, 0],
                  scale: p.flare ? [1.2, 0.5] : [1, 0.4],
                }}
                transition={{
                  duration: p.duration,
                  repeat: Infinity,
                  delay: Math.random() * 4,
                  ease: "easeOut",
                }}
              />
            ))}

            {/* PLASMA SURFACE */}
            <motion.div
              className="absolute inset-0"
              style={{
                background: "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.25), transparent 40%), radial-gradient(circle at 70% 60%, rgba(255,120,40,0.35), transparent 50%)",
                mixBlendMode: "overlay",
                filter: "blur(8px)",
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>
        </div>

        {/* FLOATING PARTICLES */}
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

        {/* SHOOTING STARS */}
        <div className="absolute inset-0 z-0">
          {shootingStars.map((s, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full shadow-[0_0_8px_white]"
              style={{ left: s.startX, top: s.startY }}
              animate={{ x: [0, 800], y: [0, 200], opacity: [0, 1, 0] }}
              transition={{ duration: s.duration, repeat: Infinity, delay: s.delay }}
            />
          ))}
        </div>

        {/* CONTENT */}
        <div className="relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl sm:text-7xl md:text-9xl font-extrabold mb-6 text-white"
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl sm:text-2xl md:text-3xl mb-6 text-yellow-400 max-w-2xl"
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