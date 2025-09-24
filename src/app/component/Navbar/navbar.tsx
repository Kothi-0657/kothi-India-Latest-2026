"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaSignInAlt, FaChevronUp, FaChevronDown } from "react-icons/fa";
import "@/app/globals.css";
import Popup from "../PopupBox/popup"; // ✅ default import
import { useAppSelector } from "@/Redux/store";
import UserMenu from "@/app/user/component/Profilelist";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

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

  return (
    <>
      {/* Navbar Wrapper */}
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

            {/* Contact button */}
            <li>
              <button
                onClick={() => setShowPopup(true)}
                className="px-2 py-2 backgroundcolorhover hover:rounded transition-all duration-200"
              >
                Contact
              </button>
            </li>
          </ul>

          {/* Auth / Book Button */}
          {/*<div className="hidden lg:block">
            {token ? (
              <UserMenu />
            ) : (
              <Link
                href="/auth"
                className="px-4 py-2 flex items-center gap-2 bg-white text-[#b04400] font-semibold rounded hover:bg-gray-100 transition"
              >
                Book Now
                <FaSignInAlt size={18} />
              </Link>
            )}
          </div>*/}

          {/* Mobile Menu Button */}
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

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="flex flex-col gap-4 px-6 pb-4 font-medium text-white lg:hidden">
            {/* Profile */}
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

            {/* Navigation Items */}
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

            {/* Contact */}
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

          {/* ✅ Google Sheet Form */}
          <form
            className="space-y-3"
            action="YOUR_GOOGLE_APPS_SCRIPT_URL"
            method="POST"
            target="_blank"
          >
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
            ></textarea>
            <textarea
              name="requirements"
              placeholder="Detail Requirements"
              className="w-full p-3 border rounded-lg backgroundcolorfocus"
              rows={4}
            ></textarea>
            <button
              type="submit"
              className="w-full backgroundcolor2 text-white font-semibold py-3 rounded-lg backgroundcolor2hover transition-all"
            >
              Submit
            </button>
          </form>
        </div>
      </Popup>
    </>
  );
}

export default Navbar;
