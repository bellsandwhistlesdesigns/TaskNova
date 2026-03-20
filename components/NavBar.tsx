"use client";

import { useState, useRef } from "react";
import Link from "next/link";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const openDropdown = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIndustriesOpen(true);
  };

  const closeDropdown = () => {
    timeoutRef.current = setTimeout(() => {
      setIndustriesOpen(false);
    }, 150); // smooth close delay
  };

  return (
    <nav className="w-full bg-black/80 backdrop-blur-md border-b border-yellow-500/20 text-white sticky top-0 z-50">
      
      {/* Gold top bar */}
      <div className="h-1 w-full bg-yellow-400 shadow-[0_0_10px_#FFD700]" />

      <div className="px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <div className="text-xl font-bold">
          <span className="text-yellow-400">Task</span>Nova
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 items-center relative">
          
          <Link href="/" className="hover:text-yellow-400 transition">
            Home
          </Link>

          {/* Industries Dropdown */}
          <div
            className="relative"
            onMouseEnter={openDropdown}
            onMouseLeave={closeDropdown}
          >
            <button
              onClick={() => setIndustriesOpen(!industriesOpen)}
              className="hover:text-yellow-400 transition"
            >
              Industries{" "}
              <span
                className={`inline-block transition-transform ${
                  industriesOpen ? "rotate-180" : ""
                }`}
              >
                ▾
              </span>
            </button>

            {industriesOpen && (
              <div
                className="absolute top-8 left-0 pt-2"
                onMouseEnter={openDropdown}
                onMouseLeave={closeDropdown}
              >
                <div className="bg-black border border-yellow-500/30 rounded-xl shadow-lg p-4 flex flex-col gap-2 min-w-[220px]">
                  
                  <Link href="/industries/general" className="hover:text-yellow-400">
                    Small Businesses
                  </Link>

                  <Link href="/industries/restaurants" className="hover:text-yellow-400">
                    Restaurants & Bars
                  </Link>

                  <Link href="/industries/hairsalon" className="hover:text-yellow-400">
                    Barbers & Salons
                  </Link>

                  <Link href="/industries/pet-stores" className="hover:text-yellow-400">
                    Pet Stores
                  </Link>

                </div>
              </div>
            )}
          </div>

          <Link href="/contact" className="hover:text-yellow-400 transition">
            Contact
          </Link>

        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-6 flex flex-col gap-4 bg-black">

          <Link href="/" onClick={() => setIsOpen(false)}>
            Home
          </Link>

          {/* Mobile Industries */}
          <button
            className="text-left"
            onClick={() => setIndustriesOpen(!industriesOpen)}
          >
            Industries ▾
          </button>

          {industriesOpen && (
            <div className="pl-4 flex flex-col gap-2">
              <Link href="/industries/general" onClick={() => setIsOpen(false)}>
                Small Businesses
              </Link>
              <Link href="/industries/restaurants" onClick={() => setIsOpen(false)}>
                Restaurants & Bars
              </Link>
              <Link href="/industries/hairsalon" onClick={() => setIsOpen(false)}>
                Barbers & Salons
              </Link>
              <Link href="/industries/pet-stores" onClick={() => setIsOpen(false)}>
                Pet Stores
              </Link>
              
            </div>
          )}

          <Link href="/contact" onClick={() => setIsOpen(false)}>
            Contact
          </Link>

        </div>
      )}
    </nav>
  );
}