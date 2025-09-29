"use client";
import React, { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string;
  processing?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  text,
  processing = false,
  disabled,
  className,
  ...props
}) => {
  return (
    <button
      className={`w-full py-3 font-bold rounded-xl bg-[#b04400] text-white shadow-md hover:bg-[#992f00] transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
      disabled={disabled || processing}
      {...props}
    >
      {processing ? "Processing..." : text}
    </button>
  );
};

export default Button;
