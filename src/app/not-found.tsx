import React from 'react';
import Link from 'next/link';
import { MoveLeft } from 'lucide-react';
import "@/app/globals.css"

const Notfound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#905635] via-[#642d0c] to-[#a4420a] flex flex-col items-center justify-center text-white px-4">
      <h1 className="text-[8rem] font-extrabold drop-shadow-lg animate-bounce">404</h1>
      <h2 className="text-3xl md:text-4xl font-semibold mb-4">Oops! Page Not Found</h2>
      <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-md text-center">
        The page you’re looking for doesn’t exist or has been moved.
      </p>
      <Link href="/">
        <span className="inline-flex items-center gap-2 px-5 py-3 bg-[#1E1E1E] text-white font-semibold rounded-full hover:bg-[#441e07] hover:scale-110 transition-all duration-200">
          <MoveLeft className="w-5 h-5" />
          Go back home
        </span>
      </Link>
    </div>
  );
};

export default Notfound;