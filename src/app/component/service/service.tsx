"use client";

import Link from "next/link";

interface ServiceComponentProps {
  type: string;
}

const serviceData: Record<
  string,
  { title: string; description: string }[]
> = {
  construction: [
    { title: "Home Constructions", description: "Build your dream home with us." },
    { title: "Commercial Constructions", description: "We handle office and retail builds." },
  ],
  renovation: [
    { title: "Kitchen Renovation", description: "Modern kitchen designs." },
    { title: "Bathroom Renovation", description: "Stylish and functional bathrooms." },
  ],
  inspection: [
    { title: "Property Inspection", description: "Ensure property safety." },
  ],
  packersAndMovers: [
    { title: "House Shifting", description: "Safe and reliable moving." },
  ],
  homeServices: [
    { title: "Cleaning", description: "Professional cleaning service." },
  ],
};

export default function ServiceComponent({ type }: ServiceComponentProps) {
  const subServices = serviceData[type] || [];

  if (subServices.length === 0) {
    return <p>No services found for "{type}".</p>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 capitalize">{type} Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {subServices.map((s) => (
          <div
            key={s.title}
            className="border rounded-xl p-6 shadow-md hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold mb-2">{s.title}</h2>
            <p className="mb-4">{s.description}</p>

            <div className="flex gap-4">
              {/* ✅ Book Now goes to booking */}
              <Link
                href={`/booking?service=${encodeURIComponent(s.title)}`}
                className="px-5 py-2 rounded-full bg-[#b04400] text-white font-medium hover:bg-[#993300] transition shadow-md"
              >
                Book Now
              </Link>

              {/* ✅ Learn More goes to details page */}
              <Link
                href={`/servicedetails?type=${encodeURIComponent(
                  type
                )}&q=${encodeURIComponent(s.title)}`}
                className="px-5 py-2 rounded-full border border-[#b04400] text-[#b04400] font-medium hover:bg-[#b04400]/10 transition"
              >
                Learn More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
