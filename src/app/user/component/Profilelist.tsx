"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/Redux/store";
import { logout } from "@/Redux/slices/authSlice";
import { FaUser,FaEdit, FaHistory, FaCog, FaSignOutAlt } from "react-icons/fa";

export default function UserMenu() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const dispatch = useAppDispatch();

  const menuItems = [

      { name: "Edit Profile", path: "/user/editprofile", icon: < FaEdit/> },
    { name: "Purchase History", path: "/user/purchasehistory", icon: <FaHistory /> },
    { name: "Settings", path: "/user/settings", icon: <FaCog /> },
  
  ];

const handleLogout = () => {
  dispatch(logout());

};

  return (
    <div className=" z-[555]">
      
      <button
        onClick={() => setOpen(!open)}
        className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center"
      >
        <FaUser className="text-[#b04400]" />
      </button>

      
      {open && (
        <div className="absolute right-0 mt-2 w-56 bg-white shadow-xl rounded-xl border border-gray-200 animate-fadeIn">
          
          <div className="px-4 py-3 border-b border-gray-200">
            <p className="font-semibold text-gray-800">Utsav</p>
            <p className="text-sm text-gray-500">utsav@email.com</p>
          </div>

          
          <ul className="flex flex-col py-2">
            {menuItems.map((item) => (
              <li
                key={item.name}
                onClick={() => {router.push(item.path)
                  setOpen(false)
                }}
                className="px-4 py-2 flex items-center gap-2 hover:bg-gray-100 cursor-pointer text-gray-700"
              >
                {item.icon}
                {item.name}
              </li>
            ))}
          </ul>

          
          <div className="border-t border-gray-200">
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-2 px-4 py-2 text-red-500 hover:bg-red-100 rounded-b-xl"
            >
              <FaSignOutAlt />
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
