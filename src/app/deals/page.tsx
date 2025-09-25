"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaChevronCircleDown } from "react-icons/fa";
import Popup from "../component/PopupBox/popup";

const constructionPlans = [
  { name: "Budget Plan", price: "1650/- Sq.ft" },
  { name: "Basic Plan", price: "1780/- Sq.ft" },
  { name: "Classic Plan", price: "1980/- Sq.ft" },
  { name: "Royal Plan", price: "2172/- Sq.ft" },
  { name: "Luxury Plan", price: "2700/- Sq.ft" },
];

const paintingPlans = [
  { type: "1 BHK", price: "5999/-", cleaning: "Free" },
  { type: "2 BHK", price: "10999/-", cleaning: "Free" },
  { type: "3 BHK", price: "16999/-", cleaning: "Free" },
  { type: "4 BHK", price: "23999/-", cleaning: "Free" },
];

export default function DealsPage() {
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  // ✅ Form handler
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbzD_w93Eys0tlYNV6W_FauHgZr3U7rQyDsuVGzEacZEeFAcrRZometOPjDeCT38e_Ggbg/exec",
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: { "Content-Type": "application/json" },
        }
      );

      const result = await res.json();
      if (result.status === "success") {
        setSuccess(true);
        form.reset();

        // auto-close popup after 2s
        setTimeout(() => {
          setShowPopup(false);
          setSuccess(false);
        }, 2000);
      } else {
        throw new Error(result.message || "Something went wrong");
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Unexpected error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center text-black px-6 py-10"
      style={{ backgroundImage: "url('/Background.mp4')" }} // ✅ replaced mp4 with image
    >
      <div className="flex flex-col lg:flex-row justify-between gap-10 max-w-7xl mx-auto">
        {/* Left: Construction Plans */}
        <div className="w-full lg:w-1/2 relative">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-3xl font-bold text-orange-500 flex items-center gap-2">
              🏗 Constructions Plans
            </h2>
            <div className="w-auto h-auto">
              <Image
                src="/Kothi1.png"
                alt="Blueprint"
                width={420}
                height={320}
                className="object-contain"
              />
            </div>
          </div>

          <div className="space-y-5">
            {constructionPlans.map((plan, index) => (
              <div
                key={index}
                className="flex justify-between items-center bg-gradient-to-r from-white to-gray-100 text-black p-4 rounded-lg shadow-md"
              >
                <div className="flex items-center gap-3">
                  <FaChevronCircleDown className="text-red-500 text-xl" />
                  <span className="font-semibold">{plan.name}</span>
                </div>
                <span className="bg-blue-500 text-white px-4 py-1 rounded-md text-sm shadow-md">
                  {plan.price}
                </span>
              </div>
            ))}
          </div>

          <p className="italic text-sm mt-5 text-gray-500">
            All India Service Available
          </p>
        </div>

        {/* Right: Painting Plans */}
        <div className="w-full lg:w-1/2 relative">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-3xl font-bold text-orange-500 flex items-center gap-2">
              🎨 Painting Plans
            </h2>
            <div className="w-auto h-auto">
              <Image
                src="/Kothi9.png"
                alt="Painting Illustration"
                width={420}
                height={520}
                className="object-contain"
              />
            </div>
          </div>

          <div className="rounded-lg overflow-hidden shadow-lg">
            <div className="grid grid-cols-3 text-center font-semibold bg-orange-500 text-white">
              <div className="p-3">Sale</div>
              <div className="p-3">Re-Painting</div>
              <div className="p-3">Cleaning</div>
            </div>

            {paintingPlans.map((plan, index) => (
              <div
                key={index}
                className="grid grid-cols-3 text-center border-t border-gray-300 bg-black text-white"
              >
                <div className="p-3">{plan.type}</div>
                <div className="p-3">{plan.price}</div>
                <div className="p-3">
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {plan.cleaning}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* CTA button */}
          <div className="mt-6 text-center">
            <button onClick={() => setShowPopup(true)} className="inline-block">
              <Image
                src="/Kothi5.png"
                alt="Get Started Now"
                width={220}
                height={60}
                className="mx-auto cursor-pointer hover:scale-105 transition-transform"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Popup Modal */}
      <Popup isOpen={showPopup} onClose={() => setShowPopup(false)}>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-center textcolor2dark">
            Request a callback
          </h2>
          <p className="text-center text-gray-500 text-sm">
            Fill the form below and our team will contact you.
          </p>

          <form className="space-y-3" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-3 border rounded-lg"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              className="w-full p-3 border rounded-lg"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email Id"
              className="w-full p-3 border rounded-lg"
            />
            <input
              type="text"
              name="city"
              placeholder="Enter Your City"
              className="w-full p-3 border rounded-lg"
            />
            <textarea
              name="address"
              placeholder="Property / Site address"
              className="w-full p-3 border rounded-lg"
              rows={4}
            />
            <textarea
              name="requirements"
              placeholder="Detail Requirements"
              className="w-full p-3 border rounded-lg"
              rows={4}
            />
            <button
              type="submit"
              className="w-full bg-orange-600 text-white font-semibold py-3 rounded-lg"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>

          {success && (
            <p className="text-green-600 text-center font-medium">
              ✅ Form submitted successfully! Closing...
            </p>
          )}
          {error && (
            <p className="text-red-600 text-center font-medium">⚠️ {error}</p>
          )}
        </div>
      </Popup>
    </div>
  );
}
