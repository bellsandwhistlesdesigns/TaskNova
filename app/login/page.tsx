"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import Hero from "@/components/Hero";

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
    <main className="bg-gray-50 min-h-screen">
      {/* HERO SECTION */}
      <Hero
        title="Welcome Back to TaskNova"
        subtitle="Sign in with your email and continue managing your workflow."
        showButtons={false}// show buttons goes here 
        bgGradient="from-blue-100 to-blue-200"
        heightClass="min-h-[50vh]"
      />

      {/* LOGIN CARD */}
      <section className="flex justify-center px-6 pb-20 -mt-6 md:-mt-10">
        <div className="bg-white p-10 rounded-3xl shadow-xl w-full max-w-md border border-gray-100">

          <form onSubmit={handleLogin} className="flex flex-col gap-5">
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="border border-gray-300 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className={`py-4 rounded-xl font-semibold transition shadow-md mt-2 ${
                isSubmitting
                  ? "bg-gray-400 text-white cursor-not-allowed"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              {isSubmitting ? "Sending..." : "Send Magic Link"}
            </button>
          </form>

          {message && (
            <p
              className={`mt-6 text-center text-sm ${
                message.includes("Check your email") ? "text-green-600" : "text-red-500"
              }`}
            >
              {message}
            </p>
          )}

          <div className="mt-8 text-center text-gray-400 text-sm">
            Don’t have an account?{" "}
            <a href="/register" className="text-blue-600 hover:underline">
              Find out More
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER SECTION */}
      <section className="py-20 px-6 md:px-20 bg-blue-600 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Simplifying your workflow</h2>
        <p className="mb-8 max-w-xl mx-auto">Thanks for choosing TaskNova.</p>
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
