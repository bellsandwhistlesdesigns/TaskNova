"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import Hero from "@/components/Hero";

const supabase = createClient();

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);
    setMessage("");

    try {
      const { error } = await supabase.auth.signInWithOtp({
        email,
        options: {
          emailRedirectTo: `${window.location.origin}/auth/callback`,
        },
      });

      if (error) throw error;

      setMessage("Check your email for the magic link!");
    } catch (err: any) {
      setMessage(err.message || "Failed to send magic link.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
  <main className="bg-black text-white min-h-screen">

    {/* ===== HERO SECTION ===== */}
    <Hero
      title="Welcome Back to TaskNova"
      showButtons={false}
      heightClass="min-h-[50vh]"
    />

    {/* ===== LOGIN CARD ===== */}
    <section className="flex justify-center px-6 pb-24 -mt-20 relative z-10">
  <div
    className="w-full max-w-md p-10 rounded-3xl
               bg-white/5 backdrop-blur-xl
               border border-white/10
               shadow-[0_0_40px_rgba(255,215,0,0.15)]"
  >
    {/* Subtitle centered above form */}
    <div className="text-center mb-8">
      <h2 className="text-xl md:text-2xl text-yellow-400 font-semibold">
       
        Sign in with your email and continue managing your workflow.
      </h2>
    </div>

    <form onSubmit={handleLogin} className="flex flex-col gap-5">
      <input
        type="email"
        placeholder="Email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="bg-black/40 border border-white/20 text-white
                   p-4 rounded-xl
                   focus:outline-none focus:ring-2
                   focus:ring-yellow-400 focus:border-transparent
                   transition"
      />

      <button
        type="submit"
        disabled={isSubmitting}
        className={`py-4 rounded-xl font-semibold transition mt-2 ${
          isSubmitting
            ? "bg-gray-500 text-white cursor-not-allowed"
            : "bg-yellow-500 text-black hover:shadow-[0_0_30px_white] hover:scale-105"
        }`}
      >
        {isSubmitting ? "Sending..." : "Send Magic Link"}
      </button>
    </form>

        {message && (
          <p
            className={`mt-6 text-center text-sm ${
              message.includes("Check your email")
                ? "text-green-400"
                : "text-red-400"
            }`}
          >
            {message}
          </p>
        )}

        <div className="mt-8 text-center text-gray-400 text-sm">
          Don’t have an account?{" "}
          <a
            href="/register"
            className="text-yellow-400 hover:text-yellow-300 transition"
          >
            Find out More
          </a>
        </div>
      </div>
    </section>

    {/* ===== FOOTER SECTION ===== */}
    <section className="py-20 px-6 md:px-20 text-center border-t border-white/10">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        Simplifying your workflow
      </h2>

      <p className="mb-8 max-w-xl mx-auto text-gray-400">
        Thanks for choosing TaskNova.
      </p>

      <a
        href="/register"
        className="bg-yellow-500 text-black px-8 py-4 rounded-2xl
                   hover:shadow-[0_0_35px_white]
                   hover:scale-105 transition font-semibold"
      >
        Find out More
      </a>
    </section>

  </main>
);
}
