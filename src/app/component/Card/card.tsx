// src/app/component/Card/card.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaTools } from "react-icons/fa";
import Popup from "@/app/component/PopupBox/popup";
import ContactForm from "@/app/component/Form/Cxform";

export type HomeService = {
  id?: number;
  title: string;
  scope?: string[];
  price?: number;
};

export type Service = {
  name: string;
  icon?: React.ComponentType<any>;
  desc?: string;
  type?: string; // route key like "construction", "renovation", ...
  subServices?: HomeService[];
};

export type CardProps = {
  services?: Service[];
  type?: string;
};

export default function Card({ services, type }: CardProps) {
  const [showForm, setShowForm] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <>
      {services?.map((service, idx) => {
        const Icon = service.icon ?? FaTools;
        const targetType = type ?? service.type ?? "";
        const href = `/servicedetails?type=${encodeURIComponent(
          targetType
        )}&q=${encodeURIComponent(service.name)}`;

        return (
          <div
            key={idx}
            className="bg-[#b04400]/10 rounded-2xl p-6 flex flex-col items-center text-center border border-[#b04400]/40 transition duration-300 hover:scale-105"
          >
            <div className="text-4xl text-[#b04400]">
              <Icon />
            </div>

            <h4 className="mt-4 text-lg font-semibold text-gray-900">
              {service.name}
            </h4>
            <p className="text-gray-600 text-sm p-3">{service.desc}</p>

            {/* Action Buttons */}
            <div className="flex gap-4 mt-4">
              {/* View Details */}
              <Link
                href={href}
                className="px-4 py-2 rounded-full border border-[#b04400] text-[#b04400] font-medium hover:bg-[#b04400]/10 transition"
              >
                View Details
              </Link>

              {/* Book Now (opens popup) */}
              <button
                onClick={() => {
                  setSelectedService(service);
                  setShowForm(true);
                }}
                className="px-4 py-2 rounded-full bg-[#b04400] text-white font-medium hover:bg-[#993300] transition shadow-md"
              >
                Book Now
              </button>
            </div>
          </div>
        );
      })}

      {/* Popup Contact Form */}
      {selectedService && (
        <Popup
          isOpen={showForm}
          onClose={() => setShowForm(false)}
          title={`Book: ${selectedService.name}`}
        >
          <ContactForm />
        </Popup>
      )}
    </>
  );
}
