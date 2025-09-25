"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaSignInAlt, FaChevronUp, FaChevronDown } from "react-icons/fa";
import "@/app/globals.css";
import Popup from "../PopupBox/popup";
import { useAppSelector } from "@/Redux/store";
import UserMenu from "@/app/user/component/Profilelist";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const token = useAppSelector((state) => state.auth.token);

  const navItems = [
    { tab: "Home", destination: "/" },
    { tab: "Services", destination: "/services" },
    { tab: "Deals", destination: "/deals" },
  ];

  const handleNavClick = (destination: string) => {
    setIsOpen(false);
    if (destination === "/Contact") {
      setShowPopup(true);
    }
  };

  // ✅ Form submission handler
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
        "https://script.google.com/macros/s/AKfycbzD_w93Eys0tlYNV6W_FauHgZr3U7rQyDsuVGzEacZEeFAcrRZometOPjDeCT38e_Ggbg/exec", // ✅ USE /exec
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const result = await res.json();

      if (result.status === "success") {
        setSuccess(true);
        form.reset();

        // Auto close modal after 2s
        setTimeout(() => {
          setShowPopup(false);
          setSuccess(false);
        }, 2000);
      } else {
        throw new Error(result.message || "Something went wrong");
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full z-50 backgroundcolor">
        <div className="flex items-center justify-between px-6 md:px-16 lg:py-2 py-5">
          {/* Logo */}
          <Link href="/" className="flex items-end">
            <Image src="/logo.png" width={60} height={50} alt="brandlogo" />
            <span className="ml-2 lg:text-[30px] text-[28px] textcolor uppercase leading-none navbar-logo">
              Kothi INDIA
            </span>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-4 md:gap-10 font-medium text-white">
            {navItems.map((navItem, index) => (
              <li key={index}>
                <Link
                  onClick={() => handleNavClick(navItem.destination)}
                  href={navItem.destination}
                  className="px-2 py-2 backgroundcolorhover hover:rounded transition-all duration-200"
                >
                  {navItem.tab}
                </Link>
              </li>
            ))}
            <li>
              <button
                onClick={() => setShowPopup(true)}
                className="px-2 py-2 backgroundcolorhover hover:rounded transition-all duration-200"
              >
                Contact
              </button>
            </li>
          </ul>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-white relative w-8 h-8"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span
              className={`block w-6 h-0.5 bg-white absolute top-2 left-1/2 -translate-x-1/2 transition-all ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white absolute top-4 left-1/2 -translate-x-1/2 transition-all ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white absolute top-6 left-1/2 -translate-x-1/2 transition-all ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <ul className="flex flex-col gap-4 px-6 pb-4 font-medium text-white lg:hidden">
            {token && (
              <li>
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex items-center justify-between w-full px-2 py-2 hover:bg-[#FE904E] hover:rounded transition-all"
                >
                  <span>Profile</span>
                  {isProfileOpen ? <FaChevronUp /> : <FaChevronDown />}
                </button>
              </li>
            )}
            {navItems.map((navItem, index) => (
              <li key={index}>
                <Link
                  onClick={() => handleNavClick(navItem.destination)}
                  href={navItem.destination}
                  className="block px-2 py-2 hover:bg-[#FE904E] hover:rounded transition-all"
                >
                  {navItem.tab}
                </Link>
              </li>
            ))}
            <li>
              <button
                onClick={() => {
                  setShowPopup(true);
                  setIsOpen(false);
                }}
                className="block px-2 py-2 hover:bg-[#FE904E] hover:rounded transition-all"
              >
                Contact
              </button>
            </li>
          </ul>
        )}
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
              className="w-full p-3 border rounded-lg backgroundcolorfocus"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              className="w-full p-3 border rounded-lg backgroundcolorfocus"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email Id"
              className="w-full p-3 border rounded-lg backgroundcolorfocus"
            />
            <input
              type="text"
              name="city"
              placeholder="Enter Your City"
              className="w-full p-3 border rounded-lg backgroundcolorfocus"
            />
            <textarea
              name="address"
              placeholder="Property / Site address"
              className="w-full p-3 border rounded-lg backgroundcolorfocus"
              rows={4}
            />
            <textarea
              name="requirements"
              placeholder="Detail Requirements"
              className="w-full p-3 border rounded-lg backgroundcolorfocus"
              rows={4}
            />
            <button
              type="submit"
              className="w-full backgroundcolor2 text-white font-semibold py-3 rounded-lg backgroundcolor2hover transition-all"
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
            <p className="text-red-600 text-center font-medium">
              ⚠️ {error}
            </p>
          )}
        </div>
      </Popup>
    </>
  );
}

export default Navbar;
