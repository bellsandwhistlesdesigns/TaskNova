"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface HeroProps {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
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

interface ExplosionParticle {
  angle: number;
  distance: number;
  size: number;
  duration: number;
  color: string;
  flare: boolean;
}
interface Star {
  startX: number;
  startY: number;
  deltaX: number;
  deltaY: number;
  duration: number;
  delay: number;
}
export default function Hero({
  title = (
    <>
      <span className="text-yellow-400">Task</span>
      <span className="text-white">Nova</span>
    </>
  ),
  subtitle = (
    <>
      <span className="text-white">Taking Your Productivity Into The</span>
      <span className="text-yellow-400"> FUTURE</span>
    </>
  ),
  subSubtitle = "🚧 Becoming a Star 🚧",
  secondaryctaText = "Register",
  secondaryctaLink = "/register",
  showButtons = true,
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
    const generatedParticles: Particle[] = Array.from({ length: 20 }).map(() => ({
      size: Math.random() * 4 + 2,
      startX: Math.random() * width,
      startY: Math.random() * height,
      deltaX: (Math.random() - 0.5) * 200,
      deltaY: (Math.random() - 0.5) * 200,
      duration: 4 + Math.random() * 6,
    }));

    // Shooting stars
    const generatedStars: Star[] = Array.from({ length: 20 }).map(() => ({
      startX: Math.random() * window.innerWidth,
      startY: Math.random() * window.innerHeight,
      deltaX: (Math.random() - 40) * 1200, // moves left or right randomly
      deltaY: (Math.random() - 1) * 100, // moves up or down randomly
      duration: 3 + Math.random() * 3,      // varied speed
      delay: Math.random() * 5,
    }));

    // Exploding particles
    const generatedExplosions: ExplosionParticle[] = Array.from({ length: 20 }).map(() => {
      const angle = Math.random() * Math.PI * 2;
      const flare = Math.random() < 0.18;
      const distance = flare ? 420 + Math.random() * 280 : 200 + Math.random() * 200;
      const colors = ["#ffffff", "#ffe066", "#ffe072"];
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
      className={`${heightClass} relative flex flex-col items-center justify-center text-center px-6 md:px-20 bg-black overflow-x-hidden overflow-y-hidden`}
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
      "radial-gradient(ellipse at center, #fff6c2, #ff5e3a, transparent)",
      filter: "blur(40px)",
      }}
      animate={{ scale: [1, 1.15, 1] }}
      transition={{ duration: 10, repeat: Infinity }}
      >
      {/* subtle rotating + pulsing flares on outer glow */}
      <motion.div
      className="absolute inset-0 rounded-full"
      style={{
        background:"conic-gradient(transparent 0deg,rgba(255,255,255,0.35) 40deg,transparent 80deg,rgba(255,200,120,0.25) 140deg,transparent 200deg,rgba(255,120,40,0.25) 260deg,transparent 320deg)",
        mixBlendMode: "screen",
        filter: "blur(6px)",
      }}
      animate={{
        rotate: 360,
        opacity: [0.5, 0.9, 0.5],
      }}
      transition={{
        rotate: {
          duration: 35,
          repeat: Infinity,
          ease: "linear",
      },
      opacity: {
      duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      },
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
              background: "radial-gradient(circle, #fff6c2 0%, #ffb347 25%, #ff5e3a 55%)",
              boxShadow: "0 0 70px rgba(255,140,60,0.9), 0 0 140px rgba(255,60,30,0.6)",
            }}
            animate={{ scale: [1, 1.08, 0.97, 1.02, 1] }}
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
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                backgroundColor: p.color,
                boxShadow: `0 0 10px ${p.color}, 0 0 20px ${p.color}`,
                
              }}
              animate={{
                x: [0, Math.cos(p.angle) * p.distance * 0.6],
                y: [0, Math.sin(p.angle) * p.distance * 0.6 ],
                opacity: [1, 0],
                scale: p.flare ? [1.8, 0.3] : [1, 0.4],
              }}
              transition={{
                duration: p.duration * 2.5,
                repeat: Infinity,
                delay: Math.random() * 8,
                ease: "easeInOut",
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
        
        <div className="absolute inset-0 z-0 overflow-x-hidden overflow-y-hidden">
        {shootingStars.map((s, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full shadow-[0_0_8px_white]"
          style={{ left: s.startX, top: s.startY }}
          animate={{
          x: [0, s.deltaX, s.deltaX / 2, 0, -s.deltaX / 5], // random-ish path
          y: [0, s.deltaY, -s.deltaY / 2, s.deltaY / 5, 0],
          opacity: [0, 1, 0.8, 1, 0], // subtle fade in/out
        }}
        transition={{
          duration: s.duration,
          repeat: Infinity,
          delay: s.delay,
          ease: "easeInOut",
        }}
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
            className="text-lg md:text-xl mb-6 max-w-2xl text-center mx-auto"
          >
            {subtitle}
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-md md:text-lg mb-10 text-gray-300 text-center mx-auto"
          >
            {subSubtitle}
          </motion.p>

          {showButtons && (
            <div className="flex flex-col md:flex-row gap-6 justify-center">
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