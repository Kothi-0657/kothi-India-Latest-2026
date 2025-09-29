// src/app/component/popup.tsx
"use client";

import React from "react";

type PopupProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
};

export default function Popup({ isOpen, onClose, title, children }: PopupProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-lg relative p-6">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
        >
          ✖
        </button>

        {/* Optional title */}
        {title && (
          <h2 className="text-xl font-semibold mb-4 text-[#b04400]">{title}</h2>
        )}

        {/* Body */}
        <div>{children}</div>
      </div>
    </div>
  );
}
