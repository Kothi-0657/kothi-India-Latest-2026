"use client";
import { Service, HomeService } from "../Card/card";
import React from "react";
import { useSearchParams } from "next/navigation";
import { FaCheck } from "react-icons/fa";
import services from "@/app/utility/data";
import { useAppDispatch, useAppSelector } from "@/Redux/store";
import { addToCart, removeFromCart, selectCart } from "@/Redux/slices/addtocart";

function ServiceDetailsPage() {
  const dispatch = useAppDispatch();
  const cart = useAppSelector(selectCart); // ✅ use Redux cart instead of local useState
  const searchParams = useSearchParams();
  const serviceName = searchParams.get("q");
  const serviceType = searchParams.get("type");

  let servicelist: Service[] = [];
  if (serviceType === "inspection") {
    servicelist = services.inspection;
  } else if (serviceType === "packersAndMovers") {
    servicelist = services.packersAndMovers;
  } else {
    servicelist = services.homeServices;
  }

  const allServices = servicelist.flat();
  const service: Service | undefined = allServices.find((s) => s.name === serviceName);

  if (!service) {
    return (
      <div className="p-6 min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-6 text-red-600">Service Not Found</h1>
        <a href="/services" className="text-blue-600 underline mt-4 text-lg">
          Go back to services
        </a>
      </div>
    );
  }

  return (
    <div className="bg-[#b34400]/10 min-h-screen pb-12">
      <div className="pt-8 px-6 md:px-12">
        <div className="text-white bg-[#b04400] font-bold p-3 mb-8 rounded-lg shadow">
          You selected: {service.name}
        </div>

        {service.subServices?.length ? (
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {service.subServices.map((sub: HomeService, i: number) => {
              const inCart = cart.find((item) => item.title === sub.title);

              return (
                <div
                  key={i}
                  className="border border-[#b04400]/50 rounded-2xl p-4 bg-[#b04400]/10 shadow-sm hover:shadow-lg transition relative flex flex-col justify-between h-full"
                >
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-[#b04400]">
                      {sub.title}
                    </h3>
                    {sub.price && (
                      <span className="text-base font-medium text-white px-3 py-1 rounded-full bg-[#b04400] mt-2 inline-block">
                        ₹{sub.price}
                      </span>
                    )}
                  </div>

                  <ul className="list-none text-gray-700 space-y-2 mb-12">
                    {sub.scope &&
                      sub.scope.map((point, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2 hover:bg-[#b04400]/10 rounded p-1 transition"
                        >
                          <span className="bg-[#b04400] p-1.5 rounded-full flex-shrink-0 mt-1">
                            <FaCheck className="text-white" size={12} />
                          </span>
                          <span>{point}</span>
                        </li>
                      ))}
                  </ul>

                  {sub.price && (
                    <button
                      onClick={() => {
                        if (inCart) {
                          dispatch(removeFromCart(sub.title));
                        } else {
                          dispatch(addToCart({ id:i, price:sub.price, serviceType:serviceType??"", quantity: 1, title: sub.title}));
                        }

                      }}
                      className={`absolute bottom-4 left-4 right-4 px-4 py-2 rounded-full font-semibold text-sm transition ${
                        inCart
                          ? "bg-[#d8844f] text-white hover:bg-[#b04400]"
                          : "bg-[#b04400] text-white hover:bg-[#993300]"
                      }`}
                    >
                      {inCart
                        ? `In Cart: ${inCart.quantity}`
                        : "Add to Cart"}
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          <p className="text-gray-700 text-lg">
            No subservices available for this service.
          </p>
        )}
      </div>
    </div>
  );
}

export default ServiceDetailsPage;
