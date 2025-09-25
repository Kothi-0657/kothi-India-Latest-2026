"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { HoverBorderGradient } from "../ui/hover-border-gradient";

function Hero1() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const serviceKeywords = [
    "Maintenance",
    "Renovation",
    "Repairs",
    "Interiors",
    "Landscaping",
    "Plumbing",
    "Electrical",
  ];

  // ✅ Word rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex(
        (prevIndex) => (prevIndex + 1) % serviceKeywords.length
      );
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // ✅ Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage("");

    try {
      const form = new FormData();
      form.append("name", formData.name);
      form.append("phone", formData.phone);
      form.append("email", formData.email);
      form.append("address", formData.address);

      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbzD_w93Eys0tlYNV6W_FauHgZr3U7rQyDsuVGzEacZEeFAcrRZometOPjDeCT38e_Ggbg/exec", // 🔗 Replace with deployed Web App URL
        {
          method: "POST",
          body: form,
        }
      );

      if (response.ok) {
        setSuccessMessage("✅ Thank you! We will contact you shortly.");
        setFormData({ name: "", phone: "", email: "", address: "" });
      } else {
        setSuccessMessage("❌ Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSuccessMessage("❌ Failed to connect. Try again later.");
    }

    setLoading(false);
  };

  return (
    <>
      <div className="relative h-screen w-full overflow-hidden">
        {/* Background Video */}
        <video
          src="/herovideo.mp4"
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover"
        />

        {/* Overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80" />

        {/* Hero Content (Left Side) */}
        <div className="relative z-10 flex h-screen w-full items-center px-6">
          <div className="w-full lg:w-2/3 text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug tracking-tight text-white">
              Professional{" "}
              <span className="textcolor2dark font-semibold">
                {serviceKeywords[currentWordIndex]}
              </span>{" "}
              Services for Your Property
            </h1>

            <p className="mt-5 text-base sm:text-lg md:text-xl text-slate-200 leading-relaxed max-w-2xl">
              From routine maintenance to complete renovations, we help clients
              keep their residential and commercial properties in top condition.
              Trusted teams, transparent process, and guaranteed quality.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex items-center gap-4">
              <Link href="/services">
                <HoverBorderGradient>
                  <span className="font-semibold">Book a Service</span>
                </HoverBorderGradient>
              </Link>
            </div>

            {/* Trust Counters */}
            <div className="mt-10 flex gap-6 text-white">
              <div>
                <p className="text-3xl font-bold">483+</p>
                <p className="text-sm text-slate-300">Clients Served</p>
              </div>
              <div>
                <p className="text-3xl font-bold">1297+</p>
                <p className="text-sm text-slate-300">Properties Renovated</p>
              </div>
              <div>
                <p className="text-3xl font-bold">24/7</p>
                <p className="text-sm text-slate-300">Support Available</p>
              </div>
            </div>
          </div>

          {/* ✅ Popup Form on Right Side */}
          <div className="hidden lg:block w-[400px] bg-white rounded-lg shadow-lg p-6 ml-50">
            <h2 className="text-xl font-bold mb-4 textcolor2dark">
              Request a Callback
            </h2>
            <p className="text-sm text-gray-500 mb-4">
              Fill the form below and our team will contact you.
            </p>

            <form className="space-y-3" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full p-3 border rounded-lg backgroundcolorfocus"
                required
              />
              <input
                type="tel"
                placeholder="Your Phone Number"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="w-full p-3 border rounded-lg backgroundcolorfocus"
                required
              />
              <input
                type="email"
                placeholder="Your Email (optional)"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full p-3 border rounded-lg backgroundcolorfocus"
              />
              <textarea
                placeholder="Your address"
                value={formData.address}
                onChange={(e) =>
                  setFormData({ ...formData, address: e.target.value })
                }
                className="w-full p-3 border rounded-lg backgroundcolorfocus"
                rows={3}
              ></textarea>

              <button
                type="submit"
                disabled={loading}
                className="w-full backgroundcolor2 text-white font-semibold py-3 rounded-lg backgroundcolor2hover transition-all"
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </form>

            {successMessage && (
              <p className="mt-3 text-sm text-center">{successMessage}</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero1;
