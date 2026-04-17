"use client";

import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setUserMessage] = useState(""); // user message
  const [statusMessage, setStatusMessage] = useState(""); // system message
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage("");
    setIsSuccess(false);

    try {
      const res = await fetch("/api/register-interest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: name,
          lastName: "",
          email,
          message,
          source: "contact",
        }),
      });

      const result = await res.json();
      if (!res.ok) throw new Error(result.error || "Something went wrong.");

      setIsSuccess(true);
      setStatusMessage(
        "Thanks! We’ve received your message and typically respond within 24 hours."
      );

      // Clear form ONLY on success
      setName("");
      setEmail("");
      setUserMessage("");
    } catch (err: any) {
      setIsSuccess(false);
      setStatusMessage(
        err.message || "Something went wrong. Please try again."
      );
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
            Have an idea, project, or problem to solve? Tell us what you're
            working on.{" "}
            <span className="text-yellow-400 font-semibold">
              We typically respond within 24 hours.
            </span>
          </>
        }
        showButtons={false}
        heightClass="min-h-[65vh]"
        sunPosition="right"
      />

      {/* Contact Form Section */}
      <section className="flex justify-center px-6 py-20">
        <div className="w-full max-w-md bg-black/40 backdrop-blur-xl p-10 rounded-3xl border border-yellow-400/60">
          <h2 className="text-3xl font-extrabold mb-4 text-center">
            Get in Touch
          </h2>

          <p className="text-sm text-gray-400 text-center mb-6">
            Tell us a bit about your project or question. The more detail you
            share, the better we can help.
          </p>

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
              placeholder="Your Message (optional, but recommended)"
              value={message}
              onChange={(e) => setUserMessage(e.target.value)}
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
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>

          {statusMessage && (
            <p
              className={`mt-6 text-center text-sm ${
                isSuccess ? "text-green-500" : "text-red-500"
              }`}
            >
              {statusMessage}
            </p>
          )}

          {/* Optional Email Info */}
          <p className="mt-6 text-center text-gray-400 text-sm">
            Prefer email? Reach us at{" "}
            <span className="text-yellow-400 font-semibold">
              tasknova2026@outlook.com
            </span>
          </p>

          {/* Extra reassurance */}
          <p className="mt-3 text-center text-gray-500 text-xs">
            Based in Coquitlam BC, Canada, working with clients anywhere.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}