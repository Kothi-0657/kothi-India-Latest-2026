"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import ContactForm from "@/app/component/Form/Cxform";
import Popup from "@/app/component/PopupBox/popup";

// ✅ Strongly typed service data
type ServiceInfo = {
  title: string;
  description: string;
  image: string;
  details: string[];
};

const servicesData: Record<string, ServiceInfo> = {
  construction: {
    title: "Home Constructions",
    description: "We build your dream home with quality and care.",
    image: "/images/construction.jpg",
    details: [
      "Full residential construction",
      "Interior & exterior finishing",
      "Custom design solutions",
    ],
  },
  renovation: {
    title: "Home Renovation",
    description: "Renovate and modernize your existing space.",
    image: "/images/renovation.jpg",
    details: [
      "Kitchen & bathroom remodeling",
      "Flooring & wall improvements",
      "Space optimization",
    ],
  },
  inspection: {
    title: "Home Inspection",
    description: "Detailed inspection for safety and compliance.",
    image: "/images/inspection.jpg",
    details: [
      "Electrical and plumbing check",
      "Structural analysis",
      "Safety certification",
    ],
  },
  packersAndMovers: {
    title: "Moving Services",
    description: "Safe and reliable moving assistance.",
    image: "/images/moving.jpg",
    details: [
      "Local & long-distance moving",
      "Packing & unpacking services",
      "Furniture handling",
    ],
  },
  interior: {
    title: "Interior Designing",
    description: "Stylish interiors that reflect your lifestyle.",
    image: "/images/interior.jpg",
    details: [
      "Custom furniture design",
      "Space planning",
      "Modern & classic themes",
    ],
  },
};

export default function ServiceDetailsPage() {
  const { type } = useParams<{ type: string }>();
  const service = type ? servicesData[type] : null;

  const [showForm, setShowForm] = useState(false);

  if (!service) {
    return (
      <div className="p-10 text-center">
        <h1 className="text-2xl font-bold text-red-600">Service Not Found</h1>
        <a
          href="/services"
          className="text-blue-600 underline block mt-4"
        >
          Go back to Services
        </a>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-5xl mx-auto">
      {/* Hero */}
      <div className="relative">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-64 object-cover rounded-2xl shadow"
        />
        <h1 className="absolute bottom-4 left-6 text-3xl font-bold text-white bg-black/50 px-4 py-2 rounded-lg">
          {service.title}
        </h1>
      </div>

      {/* Description */}
      <p className="mt-6 text-lg text-gray-700">{service.description}</p>

      {/* Details */}
      <ul className="mt-4 list-disc pl-6 space-y-2 text-gray-600">
        {service.details.map((detail, i) => (
          <li key={i}>{detail}</li>
        ))}
      </ul>

      {/* CTA */}
      <div className="mt-8">
        <button
          onClick={() => setShowForm(true)}
          className="bg-[#b04400] text-white px-6 py-3 rounded-lg shadow hover:bg-[#922f00] transition"
        >
          Book This Service
        </button>
      </div>

      {/* Popup with Contact Form */}
      <Popup
        isOpen={showForm}
        onClose={() => setShowForm(false)}
        title={`Book: ${service.title}`}
      >
        <ContactForm />
      </Popup>
    </div>
  );
}
