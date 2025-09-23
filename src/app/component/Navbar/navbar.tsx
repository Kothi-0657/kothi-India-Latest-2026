"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaSignInAlt, FaCartPlus, FaEdit, FaHistory, FaCog, FaChevronUp, FaChevronDown, FaSignOutAlt } from "react-icons/fa";
import "@/app/globals.css";
import { Popup } from "../PopupBox/popup";
import { useAppSelector, useAppDispatch } from "@/Redux/store";
import UserMenu from "@/app/user/component/Profilelist";
import { selectCartCount } from "@/Redux/slices/addtocart";
import { logout } from "@/Redux/slices/authSlice";
import Addtocart from "../cart/Addtocart";


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const token = useAppSelector((state) => state.auth.token);
  const cartCount = useAppSelector(selectCartCount);
  const dispatch = useAppDispatch();
  const loggedin = false
  const navItems = [
    { tab: "Home", destination: "/" },
    { tab: "Services", destination: "/services" },
    { tab: "Deals", destination: "/deals" },
  ];

  const menuItems = [

    { name: "Edit Profile", path: "/user/editprofile", icon: < FaEdit /> },
    { name: "Purchase History", path: "/user/purchasehistory", icon: <FaHistory /> },
    { name: "Settings", path: "/user/settings", icon: <FaCog /> },

  ];



  const [isProfileOpen, setIsProfileOpen] = useState(false);



  const handleNavClick = (tab: string) => {
    setIsOpen(false);
    if (tab === "/Contact") {
      setShowPopup(true);
    }
  };

  return (
    <>

      <div className="fixed top-0 left-0 w-full z-50 backgroundcolor">
        <div className="flex items-center justify-between px-6 md:px-16 lg:py-2 py-5">
          <div className="flex items-end">
            <Link href="/" className="flex items-end">
              <Image src="/logo.png" width={60} height={50} alt="brandlogo" />
              <span className="ml-2 lg:text-[30px] text-[28px] textcolor uppercase leading-none navbar-logo">
                Kothi INDIA
              </span>
            </Link>
          </div>



          <ul className="hidden lg:flex items-center gap-6 md:gap-10 font-medium text-white">
            {navItems.map((navItem, index) => (
              <li key={index}>
                <Link
                  onClick={() => handleNavClick(navItem.destination)}
                  href={navItem.destination}
                  className="px-2 py-2 backgroundcolorhover hover:rounded transition-all duration-200 cursor-pointer"
                >
                  {navItem.tab}
                </Link>
              </li>
            ))}
            <li>
              <button
                onClick={() => setShowPopup(true)}
                className="px-2 py-2 backgroundcolorhover hover:rounded transition-all duration-200 cursor-pointer"
              >
                Contact
              </button>
            </li>
          </ul>
          <div className="hidden lg:flex gap-3 items-center">


          </div>
          <div className=" flex gap-3 items-center">

            <div onClick={() => setShowCart(true)} className="flex items-center gap-2 text-white cursor-pointer relative">
              <FaCartPlus size={20} />
              <span className="font-semibold">{cartCount}</span>
            </div>

            {showCart && <Addtocart isOpen={showCart} onClose={() => setShowCart(false)} />}

            <div className="lg:block hidden">
              {token ? (<UserMenu />) : (
                <Link
                  href="/auth"
                  className="px-4 py-2 hidden lg:flex items-center gap-2 bg-white text-[#b04400] font-semibold rounded hover:bg-gray-100 transition"
                >
                  Join Us
                  <FaSignInAlt size={18} />
                </Link>

              )}
            </div>
            <button
              className="lg:hidden  text-white transition-all duration-700 ease-in-out relative w-8 h-8"
              onClick={() => setIsOpen(!isOpen)}
            >

              <span
                className={`block w-6 h-0.5 bg-white transform transition-all duration-500 ease-in-out absolute top-2 left-1/2 -translate-x-1/2 ${isOpen ? "rotate-45 translate-y-2" : ""
                  }`}
              />
              <span
                className={`block w-6 h-0.5 bg-white transform transition-all duration-500 ease-in-out absolute top-4 left-1/2 -translate-x-1/2 ${isOpen ? "opacity-0" : ""
                  }`}
              />
              <span
                className={`block w-6 h-0.5 bg-white transform transition-all duration-500 ease-in-out absolute top-6 left-1/2 -translate-x-1/2 ${isOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
              />


            </button>

          </div>






        </div>


        {isOpen && (
          <ul className="flex flex-col gap-4 px-6 pb-4 font-medium text-white lg:hidden">

            <li>
              {token && <button
                onClick={() => {
                  setIsProfileOpen(!isProfileOpen);
                }
                }
                className="flex items-center justify-between w-full px-2 py-2 hover:bg-[#FE904E] hover:rounded transition-all duration-200 cursor-pointer"
              >
                <span>Profile</span>
                {isProfileOpen ? <FaChevronUp /> : <FaChevronDown />}
              </button>}

              {token && isProfileOpen && (
                <ul className="ml-4 mt-2 flex flex-col gap-2">
                  {menuItems?.map((item, idx) => (
                    <li key={idx} >
                      <Link
                        href={item.path}
                        onClick={() => setIsOpen(false)}
                        className="block px-2 py-2 hover:bg-[#FE904E] hover:rounded transition-all duration-200 cursor-pointer"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {navItems.map((navItem, index) => (
              <li key={index}>
                <Link
                  onClick={() => handleNavClick(navItem.tab)}
                  href={navItem.destination}
                  className="block px-2 py-2 hover:bg-[#FE904E] hover:rounded transition-all duration-200 cursor-pointer"
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
                className="block px-2 py-2 hover:bg-[#FE904E] hover:rounded transition-all duration-200 cursor-pointer"
              >
                Contact
              </button>
            </li>

            {/* Auth button */}
            <li className="flex gap-3" onClick={() => setIsOpen(false)}>
              {!token ? (
                <Link
                  href={"/auth"}
                  className="px-4 gap-2 flex items-center py-2 w-50 bg-white text-[#b04400] font-semibold rounded hover:bg-gray-100 transition"
                >
                  Join us
                  <FaSignInAlt />
                </Link>
              ) : (
                <div
                  onClick={() => dispatch(logout())}
                  className="px-4 gap-2 flex items-center py-2 w-50 bg-white text-[#b04400] font-semibold rounded hover:bg-gray-100 transition"
                >
                  Logout
                  <FaSignOutAlt />
                </div>
              )}
            </li>
          </ul>
        )}
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

export default Navbar;
