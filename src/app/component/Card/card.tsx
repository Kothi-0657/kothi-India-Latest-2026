import React from "react";
import Link from "next/link";
import {

    FaTools,

} from "react-icons/fa";

 export type HomeService = {
    id?:number;
    title: string;
    scope?: string[];
    price?:number;
};

export type Service = {
    name: string;
    icon?: React.ElementType;
    desc?: string;

    subServices?: HomeService[]; 
};
export type ServiceType = "homeServices" | "packersAndMovers" | "inspection";

export type CardProps = {
    services?: Service[];
    type?: ServiceType;
};

function Card({ services,type }: CardProps) {
    
    const handelservicetype = () => {

    }
    return (

        <>
            {services && services.map((service, idx) => {
                const Icon = service.icon || FaTools;

                const cardContent = (
                    <div onClick={() => {
                        handelservicetype()
                    }} className="bg-[#b04400]/10 rounded-2xl p-6 flex flex-col items-center text-center border border-[#b04400]/40 transition duration-300 hover:scale-110">

                        <div className="text-4xl text-[#b04400]">
                            <Icon />
                        </div>

                        <h4 className="mt-4 text-lg font-semibold text-gray-900">
                            {service.name}
                        </h4>
                        <p className="text-gray-600 text-sm text-wrap p-3">{service.desc}</p>
                    </div>
                );


                return service.subServices && service.subServices.length > 0 ? (
                    <Link
                        key={idx}
                        href={`/servicedetails?type=${type}&q=${encodeURIComponent(service.name)}`}
                    >
                        {cardContent}
                    </Link>
                ) : (
                    <div key={idx}>{cardContent}</div>
                );
            })}
        </>
    );
}

export default Card;
