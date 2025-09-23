"use client"
import React, { useState } from "react";

import Card from "../component/Card/card";
import services from "../utility/data";

function Page() {
  
  return (
    <section className="py-8 bg-[#b34400]/10 ">
      <div className=" mx-auto px-6">

        <div className="text-2xl py-3 font-semibold mb-8 text-white bg-[#b04400] text-center">
          Home Services
        </div>
        <div className="grid sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 mb-20">
          <Card services={services.homeServices} type="homeServices" />
        </div>

        <div className="text-2xl py-3 font-semibold mb-8 text-white bg-[#b04400] text-center">
          Packers & Movers
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20" >

          <Card services={services.packersAndMovers} type="packersAndMovers"  />

        </div>
        <div className="text-2xl py-3 font-semibold mb-8 text-white bg-[#b04400] text-center">
          House inspection plan
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">

          <Card services={services.inspection} type="inspection" />

        </div>
      </div>
    </section>
  );
}

export default Page;
