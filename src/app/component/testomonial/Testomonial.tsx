"use client";

import React, { useEffect, useState } from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
const testimonials = [
  {
    name: "Aarav Mehta",
    role: "Marketing Director at Sunrise Textiles",
    message:
      "KothiIndia’s team is professional and responsive. Their work improved our online presence and delivered measurable results.",
    avatar: "/avatar1.png",
  },
  {
    name: "Neha Kapoor",
    role: "Operations Manager at BrightEdge Solutions",
    message:
      "The team understands our business needs perfectly. Their attention to detail and reliability make them stand out every time.",
    avatar: "https://xsgames.co/randomusers/avatar.php?g=female",
  },
  {
    name: "Rahul S",
    role: "Small Business Owner",
    message:
      "Working with KothiIndia is seamless and efficient. They provide high-quality service with minimal hassle and great results.",
    avatar: "https://xsgames.co/randomusers/avatar.php?g=male",
  },
  {
    name: "Priya Sharma",
    role: "Startup Founder",
    message:
      "KothiIndia is proactive, creative, and easy to work with. Their solutions are practical, impactful, and delivered on time.",
    avatar: "https://xsgames.co/randomusers/avatar.php?g=female",
  },
  {
    name: "Amit Verma",
    role: "Product Manager",
    message:
      "The team’s professionalism and responsiveness made a real difference. They consistently exceed expectations in every project.",
    avatar: "/avatar2.png",
  },
  {
    name: "Sneha Reddy",
    role: "Operations Lead",
    message:
      "Reliable, efficient, and detail-oriented. KothiIndia provides high-quality results and truly understands our requirements.",
    avatar: "https://xsgames.co/randomusers/avatar.php?g=female",
  },
];

export const InfiniteMovingTestimonials = ({
  interval = 4000,
}: {
  interval?: number;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [chunkSize, setChunkSize] = useState(3);

  useEffect(() => {
    const updateChunkSize = () => {
      const width = window.innerWidth;
      if (width < 640) setChunkSize(1);
      else if (width < 1024) setChunkSize(2);
      else setChunkSize(3);
    };

    updateChunkSize();
    window.addEventListener("resize", updateChunkSize);
    return () => window.removeEventListener("resize", updateChunkSize);
  }, []);

  const slides = [];
  for (let i = 0; i < testimonials.length; i += chunkSize) {
    slides.push(testimonials.slice(i, i + chunkSize));
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, interval);
    return () => clearInterval(timer);
  }, [slides, interval]);

  return (
    <div className="relative overflow-hidden w-full">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, slideIndex) => (
          <div key={slideIndex} className="min-w-full flex gap-4">
            {slide.map((t, idx) => (
              <div key={idx} className="w-full px-2">
                <div className="bg-white p-6 rounded-2xl  border-[2px] border-[#b04400] flex flex-col items-center text-center">
                  <p className="text-[#331b0d] italic mb-4">
                    <FaQuoteLeft className="text-[#b04400]" />
                    {t.message}
                    <FaQuoteRight className="text-[#b04400]" />{" "}
                  </p>
                  <h3 className="text-lg font-semibold text-[#b04400]">
                    {t.name}
                  </h3>
                  <p className="text-sm text-[#b04400]">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
