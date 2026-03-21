"use client";

import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import { useState } from "react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");
    setIsSuccess(false);

    try {
      const res = await fetch("/api/register-interest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName: name, lastName: "", email }),
      });

      const result = await res.json();
      if (!res.ok) throw new Error(result.error || "Something went wrong.");

      setIsSuccess(true);
      setMessage("Thanks! We'll be in touch soon.");
      setName("");
      setEmail("");
    } catch (err: any) {
      setMessage(err.message || "Submission failed.");
      setIsSuccess(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="bg-black text-white min-h-screen">
      <NavBar />

      {/* Hero Section */}
      <Hero
        title={
          <>
            Contact <span className="text-yellow-400">Task</span>Nova
          </>
        }
        subtitle={
          <>
            Have a question or want to work with us?{" "}
            <span className="text-yellow-400 font-semibold">Reach out!</span>
          </>
        }
        showButtons={false}
        heightClass="min-h-[70vh]"
        titleSize="text-4xl sm:text-5xl md:text-6xl"
        sunPosition="left"
      />

      {/* Contact Form Section */}
      <section className="flex justify-center px-6 py-20">
        <div className="w-full max-w-md bg-black/40 backdrop-blur-xl p-10 rounded-3xl border border-yellow-400/60">
          <h2 className="text-3xl font-extrabold mb-6 text-center">Get in Touch</h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="bg-black/50 text-white border border-yellow-400/40 p-4 rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-black/50 text-white border border-yellow-400/40 p-4 rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
            />
            <textarea
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              className="bg-black/50 text-white border border-yellow-400/40 p-4 rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className={`py-4 rounded-2xl font-semibold transition-all duration-300 ${
                isSubmitting
                  ? "bg-gray-500 text-white cursor-not-allowed"
                  : "bg-yellow-500 text-black hover:scale-105 hover:shadow-[0_0_25px_rgba(255,215,0,0.7)]"
              }`}
            >
              {isSubmitting ? "Submitting..." : "Send Message"}
            </button>
          </form>

          {message && (
            <p
              className={`mt-6 text-center text-sm ${
                isSuccess ? "text-green-600" : "text-red-500"
              }`}
            >
              {isSuccess ? "Thanks! We'll be in touch soon." : message}
            </p>
          )}

          {/* Optional Email Info */}
          <p className="mt-6 text-center text-gray-400 text-sm">
            Or email us directly at{" "}
            <span className="text-yellow-400 font-semibold">
              tasknova2026@outlook.com
            </span>
          </p>
        </div>
      </section>
    </main>
  );
}