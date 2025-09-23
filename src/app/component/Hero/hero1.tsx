"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import { Popup } from "../PopupBox/popup";

function Hero1() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const [showPopup, setShowPopup] = useState(false);

  const serviceKeywords = [
    "Maintenance",
    "Renovation",
    "Repairs",
    "Interiors",
    "Landscaping",
    "Plumbing",
    "Electrical",
  ];
  

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex(
        (prevIndex) => (prevIndex + 1) % serviceKeywords.length
      );
    }, 4000);
    return () => clearInterval(interval);
  }, []);

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

      {/* Hero Content */}
      <div className="relative z-10 flex h-screen w-full items-center justify-center px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug tracking-tight text-white">
            Professional{" "}
            <span className="textcolor2dark font-semibold">
              {serviceKeywords[currentWordIndex]}
            </span>{" "}
            Services for Your Property
          </h1>

          <p className="mt-5 text-base sm:text-lg md:text-xl text-slate-200 leading-relaxed">
            From routine maintenance to complete renovations, we help clients
            keep their residential and commercial properties in top condition.  
            Trusted teams, transparent process, and guaranteed quality.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex   items-center justify-center gap-4">
            <Link href="/services">
              <HoverBorderGradient>
                <span className="font-semibold">Book a Service</span>
              </HoverBorderGradient>
            </Link>
            <div onClick={()=>{setShowPopup(true)}}>
              <HoverBorderGradient>
                <span className="font-semibold">Request a Callback</span>
              </HoverBorderGradient>
            </div>
          </div>

          {/* Trust Counters */}
          <div className=" mt-30 lg:mt-10 flex justify-center gap-6 text-white">
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
      </div>
    </div>
    
      <Popup
        isOpen={showPopup}

        onClose={() => setShowPopup(false)}
      >
        <div className="space-y-4">
          {/* Header */}
          <h2 className="text-2xl font-bold text-center textcolor2dark">
            Request a callback
          </h2>
          <p className="text-center text-gray-500 text-sm">
            Fill the form below and our team will contact you.
          </p>

          {/* Form */}
          <form className="space-y-3">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border rounded-lg backgroundcolorfocus"
              required
            />
            <input
              type="tel"
              placeholder="Your Phone Number"
              className="w-full p-3 border rounded-lg backgroundcolorfocus"
              required
            />
            <input
              type="email"
              placeholder="Your Email (optional)"
              className="w-full p-3 border rounded-lg backgroundcolorfocus"
            />
            <textarea
              placeholder="Your address"
              className="w-full p-3 border rounded-lg  backgroundcolorfocus"
              rows={4}
            ></textarea>

            <button
              type="submit"
              className="w-full backgroundcolor2 text-white font-semibold py-3 rounded-lg backgroundcolor2hover secondaryTexthover transition-all duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </Popup>
    </>

    
  );
}

export default Hero1;
