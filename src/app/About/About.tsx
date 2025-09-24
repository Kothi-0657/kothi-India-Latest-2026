import React from "react";

function About() {
  return (
    <section className="py-20 bg-gradient-to-r from-gray-50 via-white to-gray-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
        
        <div className="space-y-9">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
            About{"   "}
            <span className="text-[#b04400] font-extrabold navbar-logo">
              Kothi India
            </span>
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Kothi India has quickly become a trusted name
            in home renovation and construction. Our modern design approach,
            attention to detail, and commitment to quality set us apart. We
            provide personalized solutions including expert home renovations,
            reliable construction work, creative interior and exterior planning,
            and detailed home inspection reports.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            With a growing team of skilled professionals and a client-first
            mindset, we strive to redefine home improvement in India. Our goal
            is to deliver innovative, reliable, and stylish solutions that
            exceed expectations and create lasting value for every homeowner.
          </p>
          <button className="mt-6 px-8 py-3 bg-[#b04400] text-white font-semibold rounded-xl shadow-md hover:bg-[#8c3500] transition-all duration-300">
            Book Visit Now
          </button>
        </div>

    
        <div className="hidden lg:flex justify-center md:justify-end">
          <div className="bg-offwhite p-0.1 rounded-3xl shadow-xl">
            <img
              src="/kothi.png"
              alt="Company Building"
              className="rounded-2xl w-full max-w-md hover:scale-165 transition-transform duration-200"
            />
          </div>
        </div>
      </div>

 
      <div className="absolute top-0 left-0 w-80 h-80 bg-[#b04400]/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#b04400]/30 rounded-full blur-3xl"></div>
    </section>
  );
}

export default About;
