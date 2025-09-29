// src/app/booking/page.tsx
"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function BookingPage() {
  const searchParams = useSearchParams();
  const preselectedService = searchParams.get("service") || "";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: preselectedService,
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    // ✅ Replace this with your API call or backend integration
    alert(`Booking submitted for ${formData.service}!`);
  };

  return (
    <div className="min-h-screen bg-[#fff5f0] py-12 px-6">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-md border border-[#b04400]/20">
        <h1 className="text-3xl font-bold text-[#b04400] mb-6 text-center">
          Book Your Service
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#b04400] outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#b04400] outline-none"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium mb-1">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#b04400] outline-none"
            />
          </div>

          {/* Service */}
          <div>
            <label className="block text-sm font-medium mb-1">Service</label>
            <input
              type="text"
              name="service"
              value={formData.service}
              onChange={handleChange}
              readOnly={!!preselectedService} // lock if coming from services
              className="w-full px-4 py-2 border rounded-lg bg-gray-100 text-gray-600"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Add extra details about your request..."
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#b04400] outline-none"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 bg-[#b04400] text-white font-semibold rounded-lg hover:bg-[#993300] transition"
          >
            Submit Booking
          </button>
        </form>
      </div>
    </div>
  );
}
