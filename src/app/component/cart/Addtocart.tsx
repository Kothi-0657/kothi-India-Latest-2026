"use client";
import React, { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { useAppSelector, useAppDispatch } from "@/Redux/store";
import { selectCart, removeFromCart,clearCart } from "@/Redux/slices/addtocart";
import Link from "next/link";
import { useRouter } from "next/navigation";

type RazorpayPaymentResponse = {
  razorpay_payment_id: string;
  razorpay_order_id: string;
  razorpay_signature: string;
};

interface RazorpayOptions {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description: string;
  handler: (response: RazorpayPaymentResponse) => void;
  prefill?: {
    name?: string;
    email?: string;
    contact?: string;
    vpa?: string;
  };
  theme?: { color?: string };
  method?: {
    upi?: boolean;
    card?: boolean;
    netbanking?: boolean;
    wallet?: boolean;
  };
}

interface RazorpayInstance {
  open: () => void;
}

// Extend Window for Razorpay
declare global {
  interface Window {
    Razorpay: {
      new(options: RazorpayOptions): RazorpayInstance;
    };
  }
}

function Addtocart({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const cart = useAppSelector(selectCart);
  const token = useAppSelector((state) => state.auth.token);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);

  // Slide-in effect
  useEffect(() => {
    if (isOpen) setTimeout(() => setIsVisible(true), 20);
    else setIsVisible(false);
  }, [isOpen]);

  // Cart calculations
  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
  const subTotal = cart.reduce(
    (acc, item) => acc + (item.price || 0) * item.quantity,
    0
  );
  const gstRate = 0.18;
  const gstAmount = subTotal * gstRate;
  const totalPrice = subTotal + gstAmount;

  // Load Razorpay SDK
  const loadRazorpayScript = () =>
    new Promise<boolean>((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });

  // Pay Now Handler
  const handlePayNow = async () => {
    const res = await loadRazorpayScript();
    if (!res) return alert("Razorpay SDK failed to load. Are you online?");

    if (!process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID) {
      return alert("Razorpay Key not found in environment variables");
    }

    const options: RazorpayOptions = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: totalPrice * 100, // in paise
      currency: "INR",
      name: "Kothi INDIA",
      description: "Payment for selected services",
      handler: (response) => {
        alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`),
         dispatch(clearCart());
          router.push("/");
      },

      prefill: {
        name: "Customer Name",
        email: "customer@example.com",
        contact: "9999999999",
        vpa: "testupi@razorpay", // mock UPI for test mode
      },
      theme: { color: "#b04400" },
      method: { upi: true, card: true, netbanking: true, wallet: true },
    };

    const paymentObject: RazorpayInstance = new window.Razorpay(options);
    paymentObject.open();
  };

  // Group cart by service type
  const groupedCart = cart.reduce<Record<string, typeof cart>>((acc, item) => {
    const type = item.serviceType || "Others";
    if (!acc[type]) acc[type] = [];
    acc[type].push(item);
    return acc;
  }, {});

  return (
    <div
      className={`fixed top-0 right-0 h-screen w-full md:w-[30%] bg-gray-50 shadow-2xl overflow-y-auto z-50 transform transition-transform duration-300 ${isVisible ? "translate-x-0" : "translate-x-full"
        }`}
    >
      <div className="p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-[#b04400]">Your Cart</h2>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-800 transition"
          >
            <FaTimes size={24} />
          </button>
        </div>

        {/* Empty cart */}
        {cart.length === 0 ? (
          <p className="text-gray-600 text-lg text-center">Your cart is empty.</p>
        ) : (
          <>
            {Object.entries(groupedCart).map(([serviceType, items]) => (
              <div key={serviceType} className="mb-8 space-y-4">
                {items.map((item, index) => (
                  <div
                    key={index}
                    className="relative p-4 bg-white rounded-2xl shadow hover:shadow-lg transition"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <span className="text-xs font-semibold bg-[#b04400] text-white px-2 py-0.5 rounded-full shadow">
                        {serviceType.toUpperCase()}
                      </span>
                      <button
                        onClick={() => dispatch(removeFromCart(item.title))}
                        className="text-red-500 hover:text-red-700 transition"
                      >
                        <FaTimes />
                      </button>
                    </div>

                    <div className="flex justify-between items-center mt-1">
                      <h4 className="text-lg font-semibold text-[#b04400]">
                        {item.title}
                      </h4>
                      {item.price !== undefined && (
                        <span className="text-gray-700 font-medium">
                          ₹{item.price.toFixed(2)}
                        </span>
                      )}
                    </div>
                    <p className="text-gray-500 text-sm mt-1">
                      Quantity: {item.quantity}
                    </p>
                  </div>
                ))}
              </div>
            ))}

            {/* Summary */}
            <div className="border-t pt-4 mt-4 space-y-2 text-right">
              <p className="font-semibold text-gray-700">
                Total Items: <span className="text-[#b04400]">{totalQuantity}</span>
              </p>
              <p className="font-semibold text-gray-700">
                Subtotal: ₹{subTotal.toFixed(2)}
              </p>
              <p className="font-semibold text-green-600">
                GST (18%): ₹{gstAmount.toFixed(2)}
              </p>
              <p className="text-2xl font-bold text-[#b04400]">
                Total: ₹{totalPrice.toFixed(2)}
              </p>

              {token ? (
                <button
                  onClick={handlePayNow}
                  className="w-full mt-3 px-6 py-3 bg-[#b04400] text-white font-semibold rounded-xl shadow-lg hover:bg-[#993300] transition"
                >
                  Pay Now
                </button>
              ) : (
                <Link
                  href="/auth"
                  onClick={onClose}
                  className="w-full mt-3 px-6 py-3 bg-[#b04400] text-white font-semibold rounded-xl shadow-lg hover:bg-[#993300] transition flex justify-center"
                >
                  Login
                </Link>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Addtocart;
