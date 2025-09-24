"use client";
import React from "react";
import { X } from "lucide-react";

type PopupProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
};

function Popup({ isOpen, onClose, title, children }: PopupProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-50">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 relative animate-fadeIn">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-black"
        >
          <X size={22} />
        </button>

        {/* Title */}
        {title && (
          <h2 className="text-xl font-semibold mb-4 text-center">{title}</h2>
        )}

        {/* Content */}
        {children}
      </div>
    </div>
  );
}

// ✅ Exported both ways
export { Popup };
export default Popup;
