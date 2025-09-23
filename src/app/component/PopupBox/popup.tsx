
import React from "react";
import { X } from "lucide-react";

export const Popup = ({ isOpen, onClose, title, children }: { 
  isOpen: boolean; 
  onClose: () => void; 
  title?: string; 
  children: React.ReactNode; 
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-50">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 relative animate-fadeIn">
        
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-black"
        >
          <X size={22} />
        </button>

       
        <h2 className="text-xl font-semibold mb-4 text-center">{title}</h2>

        {children}
      </div>
    </div>
  );
};

// export default function LandingPopupDemo() {
//   const [popupType, setPopupType] = useState<string | null>(null);

//   return (
//     <div className="h-screen flex flex-col items-center justify-center gap-4 bg-gray-100">
   
//       <button
//         onClick={() => setPopupType("quote")}
//         className="px-6 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
//       >
//         Get a Quote
//       </button>
//       <button
//         onClick={() => setPopupType("callback")}
//         className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
//       >
//         Request Call Back
//       </button>
//       <button
//         onClick={() => setPopupType("site")}
//         className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600"
//       >
//         Book Site Visit
//       </button>

//       {/* Popups */}
//       <Popup
//         isOpen={popupType === "quote"}
//         onClose={() => setPopupType(null)}
//         title="Get a Quote"
//       >
//         <form className="space-y-3">
//           <input type="text" placeholder="Your Name" className="w-full p-2 border rounded-lg" />
//           <input type="email" placeholder="Your Email" className="w-full p-2 border rounded-lg" />
//           <textarea placeholder="Project Details" className="w-full p-2 border rounded-lg" />
//           <button className="w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600">
//             Submit
//           </button>
//         </form>
//       </Popup>

//       <Popup
//         isOpen={popupType === "callback"}
//         onClose={() => setPopupType(null)}
//         title="Request a Call Back"
//       >
//         <form className="space-y-3">
//           <input type="text" placeholder="Your Name" className="w-full p-2 border rounded-lg" />
//           <input type="tel" placeholder="Phone Number" className="w-full p-2 border rounded-lg" />
//           <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
//             Request
//           </button>
//         </form>
//       </Popup>

//       <Popup
//         isOpen={popupType === "site"}
//         onClose={() => setPopupType(null)}
//         title="Book a Site Visit"
//       >
//         <form className="space-y-3">
//           <input type="text" placeholder="Your Name" className="w-full p-2 border rounded-lg" />
//           <input type="date" className="w-full p-2 border rounded-lg" />
//           <button className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600">
//             Book Now
//           </button>
//         </form>
//       </Popup>
//     </div>
//   );
// }
