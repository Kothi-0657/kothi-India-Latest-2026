"use client";
import React, { InputHTMLAttributes, useState, forwardRef } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  important?: boolean;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, important, type, className, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    const isPassword = type === "password";
    const inputType = isPassword && showPassword ? "text" : type;

    return (
      <div className="flex flex-col gap-1 relative">
        {label && (
          <label className="text-gray-700 text-sm">
            {label} {important && <span className="text-red-600">*</span>}
          </label>
        )}
        <div className="relative">
          <input
            ref={ref} // ✅ react-hook-form will attach ref here
            type={inputType}
            {...props} // ✅ allows register(...) to inject value & onChange
            className={`w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#b04400] focus:border-transparent ${className}`}
          />
          {isPassword && (
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          )}
        </div>
      </div>
    );
  },
);

Input.displayName = "Input";
export default Input;
