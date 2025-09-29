"use client";

import React, { useState } from "react";
import { FaTruckMoving, FaCheck } from "react-icons/fa";
import ContactForm from "@/app/component/Form/Cxform";

export default function PackersAndMoversPage() {
  const [showForm, setShowForm] = useState(false);

  const features = [
    "Local & intercity shifting",
    "Safe packaging with quality materials",
    "Trained staff & quick relocation",
    "Insurance coverage available",
    "Affordable & transparent pricing",
  ];

  return (
    <div className="bg-[#fff7f3] min-h-screen">
      <div className="bg-[#b04400] text-white py-12 text-center">
        <FaTruckMoving className="mx-auto text-5xl mb-4" />
        <h1 className="text-4xl font-bold">Packers and Movers</h1>
        <p className="mt-3 text-lg">
          Reliable relocation services for homes & offices.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold text-[#b04400] mb-6">
          Why Choose Us?
        </h2>
        <ul className="space-y-3 mb-8">
          {features.map((f, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="bg-[#b04400] text-white p-2 rounded-full">
                <FaCheck size={14} />
              </span>
              <span>{f}</span>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setShowForm(true)}
          className="px-6 py-3 rounded-full bg-[#b04400] text-white font-medium hover:bg-[#993300] transition"
        >
          Book Now
        </button>
      </div>

      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-lg relative">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
              onClick={() => setShowForm(false)}
            >
              ✖
            </button>
            <h2 className="text-xl font-semibold mb-4 text-[#b04400]">
              Book Packers & Movers
            </h2>
            <ContactForm />
          </div>
        </div>
      )}
    </div>
  );
}
