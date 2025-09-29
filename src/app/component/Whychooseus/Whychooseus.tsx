import React from "react";
import { FaRocket, FaUsers, FaShieldAlt, FaStar } from "react-icons/fa";

const reasons = [
  {
    icon: <FaRocket className="text-[#b04400] w-10 h-10" />,
    title: "Fast & Efficient",
    description:
      "We deliver results quickly without compromising on quality, helping your business grow faster.",
  },
  {
    icon: <FaUsers className="text-[#b04400] w-10 h-10" />,
    title: "Expert Team",
    description:
      "Our skilled professionals understand your needs and provide customized solutions every time.",
  },
  {
    icon: <FaShieldAlt className="text-[#b04400] w-10 h-10" />,
    title: "Trusted & Reliable",
    description:
      "We prioritize trust and transparency, ensuring your projects are handled with the utmost care.",
  },
  {
    icon: <FaStar className="text-[#b04400] w-10 h-10" />,
    title: "Proven Results",
    description:
      "Our clients consistently see improved performance and satisfaction from our services.",
  },
];

function WhyChooseUs() {
  return (
    <section className="relative bg-gray-50 py-24">
      <div className="absolute inset-0">
        <img
          src="/building.png"
          alt="Background"
          className="w-full  h-full object-cover"
        />

        <div className="absolute inset-0 bg-black opacity-80"></div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          Why Choose Us
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {reasons.map((reason, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-8 flex flex-col items-center text-center shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-4">{reason.icon}</div>
              <h3 className="text-xl md:text-2xl font-semibold mb-3 text-gray-900">
                {reason.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
