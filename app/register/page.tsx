"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";


export default function RegisterPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);
    setMessage("");
    setIsSuccess(false);

    try {
      const res = await fetch("/api/register-interest", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
        }),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || "Something went wrong.");
      }

      setIsSuccess(true);
      setMessage("Thanks! We'll be in touch soon.");

      // Clear form
      setFirstName("");
      setLastName("");
      setEmail("");
    } catch (error: any) {
      setMessage(error.message || "Submission failed.");
      setIsSuccess(false);
    } finally {
      setIsSubmitting(false);
    }
  };

return (
  <main className="bg-black text-white">
    <NavBar />
    {/* HERO SECTION */}
    <Hero
      title={
          <>
            Contact <span className="text-yellow-400">Task</span>Nova
          </>
          }
      subtitle={
        <>
        <span className="text-white">Want to take Your Company's Website... </span>
        <span className="text-yellow-400 font-semibold"> FURTHER?</span>
        </>
      }
      
      subSubtitle=""
      showButtons={false}
      heightClass="min-h-[60vh]"
      titleSize="text-4xl sm:text-5xl md:text-6xl"
    />

    {/* FORM SECTION */}
    <section className="relative flex justify-center px-6 pb-20 -mt-16 md:-mt-20 overflow-hidden">

    {/* FORM CONTAINER */}
    <div
    className="relative bg-black/40 backdrop-blur-xl p-10 rounded-3xl
               w-full max-w-md border border-yellow-400/60"
               
    >
    <h1 className="text-3xl font-extrabold mb-6 text-center text-white">
      What can we do for you?
    </h1>

    <form onSubmit={handleSubmit} className="flex flex-col gap-5">

      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        required
        className="bg-black/50 text-white border border-yellow-400/40
                   p-4 rounded-xl placeholder-gray-400
                   focus:outline-none focus:ring-2 focus:ring-yellow-400
                   focus:shadow-[0_0_15px_rgba(255,215,0,0.6)]
                   transition"
      />

      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        className="bg-black/50 text-white border border-yellow-400/40
                   p-4 rounded-xl placeholder-gray-400
                   focus:outline-none focus:ring-2 focus:ring-yellow-400
                   focus:shadow-[0_0_15px_rgba(255,215,0,0.6)]
                   transition"
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="bg-black/50 text-white border border-yellow-400/40
                   p-4 rounded-xl placeholder-gray-400
                   focus:outline-none focus:ring-2 focus:ring-yellow-400
                   focus:shadow-[0_0_15px_rgba(255,215,0,0.6)]
                   transition"
      />

      <button
        type="submit"
        disabled={isSubmitting}
        className={`py-4 rounded-2xl font-semibold transition-all duration-300
        ${
          isSubmitting
            ? "bg-gray-500 text-white cursor-not-allowed"
            : "bg-yellow-500 text-black hover:scale-105 hover:shadow-[0_0_25px_rgba(255,215,0,0.7)]"
        }`}
      >
        {isSubmitting ? "Submitting..." : "Request Info"}
      </button>

    </form>

        {message && (
          <p
            className={`mt-6 text-center text-sm ${
              isSuccess ? "text-green-600" : "text-red-500"
            }`}
          >
            {message}
          </p>
        )}
      </div>
    </section>

    {/* FOOTER CTA */}
    <section className="text-center pb-24 px-6">
      <p className="text-gray-400 mb-6">
        Contact <span className="text-yellow-400">Task</span>Nova and see what we can do for your business.
      </p>
    </section>
  </main>
  );
}
