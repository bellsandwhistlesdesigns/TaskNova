"use client";

import { useState } from "react";
import Hero from "@/components/Hero";

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
    <>
      {/* Hero */}
      <Hero
        title="Join TaskNova"
        subtitle="Start talking to an advisor about managing your projects effortlessly."
        showButtons={false}// show buttons go here
        heightClass="min-h-[30vh]"
        bgGradient="from-blue-100 to-blue-200"
      />

      {/* Registration Card */}
      <main className="flex flex-col items-center -mt-8 px-6 pb-20">
        <div className="bg-white w-full max-w-md p-10 rounded-3xl shadow-xl">
          <h1 className="text-3xl font-extrabold mb-6 text-center text-gray-800">
            Request Information
          </h1>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              className="w-full border border-gray-300 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />

            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full border border-gray-300 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border border-gray-300 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
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

        {/* Footer CTA */}
        <div className="mt-12 text-center px-6">
          <p className="text-gray-600 mb-4">
            Learn more about TaskNova and see what we can do for your team.
          </p>
          <a
            href="/#features"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition"
          >
            Learn More
          </a>
        </div>
      </main>
    </>
  );
}
