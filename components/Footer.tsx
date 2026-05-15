import Link from "next/link";
import SocialLinks from "@/components/SocialLinks";

export default function Footer() {
  return (
    <footer className="relative mt-20 py-8 text-sm text-gray-300 bg-gradient-to-b from-black via-zinc-950 to-black overflow-hidden">
      
      {/* 🌟 Gold top border glow */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-yellow-400/40 shadow-[0_0_25px_#FFD700]" />

      {/* ✨ Animated shimmer sweep */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute top-0 left-[-100%] w-[200%] h-full bg-gradient-to-r from-transparent via-yellow-300/10 to-transparent animate-shimmer" />
      </div>

      {/* 💛 Center gold accent bar */}
      <div className="absolute -top-1 left-1/2 -translate-x-1/2 z-10">
        <div className="w-24 h-1 bg-yellow-400 rounded-full shadow-[0_0_20px_#FFD700]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* COPYRIGHT */}
        <p className="text-yellow-200/70 tracking-wide">
          © 2026 TaskNova. All rights reserved.
        </p>

        <SocialLinks />

        {/* LINKS */}
        <div className="flex space-x-6">
          {[
            ["Terms of Service", "/terms"],
            ["Your Privacy", "/privacy"],
            ["Our Cookies", "/cookie-policy"],
          ].map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="relative text-yellow-300 hover:text-yellow-200 transition-colors
              after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1
              after:h-[2px] after:w-0 after:bg-yellow-300
              hover:after:w-full after:transition-all after:duration-300"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}