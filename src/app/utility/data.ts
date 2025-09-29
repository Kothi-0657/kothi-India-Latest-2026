// src/app/utility/data.ts
import {
  FaHome,
  FaPaintRoller,
  FaTint,
  FaBolt,
  FaHammer,
  FaBath,
  FaBroom,
  FaTruckMoving,
  FaRoute,
  FaCity,
  FaSearch,
  FaCertificate,
  FaClipboardCheck,
  FaBuilding,
} from "react-icons/fa";
import type { IconType } from "react-icons";

// ---- types ----
export type SubService = {
  title: string;
  scope: string[];
  button?: boolean;
  price?: number;
};

export type Service = {
  name: string;
  icon: IconType;
  desc: string;
  subServices?: SubService[];
};

export type ServicesData = {
  construction: Service[]; // e.g. civil, structural, full-construction offerings
  renovation: Service[]; // renovation-specific packages
  inspection: Service[]; // inspection offerings
  packersAndMovers: Service[]; // shifting offerings
  homeServices: Service[]; // small works: electrical, plumbing, carpentry, painting, cleaning, etc.
};

// ---- data ----
// NOTE: I split/organized the entries so each property exists. Feel free to move items between arrays as needed.
const services: ServicesData = {
  // construction: civil/construction-heavy offerings
  construction: [
    {
      name: "Civil Service",
      icon: FaHome,
      desc: "Comprehensive civil services for construction, renovation, and home improvements.",
      subServices: [
        {
          title: "Masonry Work",
          scope: [
            "Brickwork and blockwork",
            "Stone masonry",
            "Plastering (internal and external)",
            "Pointing and finishing",
          ],
        },
        {
          title: "Construction & Structural Work",
          scope: [
            "Foundation and footing construction",
            "RCC works (columns, beams, slabs)",
            "Load-bearing structure work",
          ],
        },
        {
          title: "Waterproofing Services",
          scope: [
            "Bathroom, terrace and basement waterproofing",
            "Wall damp-proofing",
            "Crack filling and leakage sealing",
          ],
        },
      ],
    },
  ],

  // renovation: higher-level remodeling packages
  renovation: [
    {
      name: "Home Renovation Services",
      icon: FaBuilding,
      desc: "Complete home renovation solutions including structural, interior, and finishing work.",
      subServices: [
        {
          title: "Room Remodeling & Expansion",
          scope: [
            "Redesigning room layouts",
            "Wall removal or addition for better space utilization",
            "Flooring and ceiling modifications",
            "Custom furniture integration",
          ],
        },
        {
          title: "Kitchen Renovation",
          scope: [
            "Cabinet replacement or refurbishment",
            "Countertop and sink installation",
            "Modern appliances integration",
          ],
        },
        {
          title: "Bathroom Renovation",
          scope: [
            "Toilet, shower and bathtub installation",
            "Tiling and waterproofing",
            "Ventilation and lighting improvements",
          ],
        },
      ],
    },
  ],

  // inspection: property inspection services
  inspection: [
    {
      name: "Basic Inspection",
      icon: FaSearch,
      desc: "Comprehensive home inspection to identify issues before any work begins.",
      subServices: [
        {
          title: "Electrical Safety Check",
          scope: [
            "Check all sockets, switches, and wiring",
            "Identify potential electrical hazards",
            "Basic troubleshooting of faulty connections",
          ],
        },
        {
          title: "Plumbing Inspection",
          scope: [
            "Check for leaks in taps and pipes",
            "Inspect water pressure and drainage",
            "Identify moisture or seepage issues",
          ],
        },
      ],
    },
    {
      name: "Comprehensive Inspection",
      icon: FaClipboardCheck,
      desc: "Detailed property evaluation covering all key aspects.",
      subServices: [
        {
          title: "Structural Integrity",
          scope: ["Check foundation & walls for cracks", "Inspect beams, slabs, and columns"],
        },
        {
          title: "Electrical Systems",
          scope: ["Wiring & circuit safety check", "Testing switches and outlets"],
        },
      ],
    },
  ],

  // packers and movers
  packersAndMovers: [
    {
      name: "Intercity Shifting",
      icon: FaRoute,
      desc: "Safe relocation between different cities in India.",
      subServices: [
        {
          title: "1 BHK Shifting",
          scope: ["Packing household items", "Loading & unloading", "Transport to destination"],
          price: 8000,
        },
        {
          title: "2 BHK Shifting",
          scope: ["Packing fragile & heavy items", "Loading, transport & unloading", "Basic insurance included"],
        },
      ],
    },
    {
      name: "Intracity Shifting",
      icon: FaCity,
      desc: "Quick & reliable moves within your city.",
      subServices: [],
    },
  ],

  // homeServices: smaller one-off services (electrical, plumbing, carpentry, painting, cleaning, seepage, etc.)
  homeServices: [
    {
      name: "Electrical Service",
      icon: FaBolt,
      desc: "Professional electrical solutions for installation, repair, and smart home integration.",
      subServices: [
        {
          title: "General Electrical Repairs",
          button: true,
          scope: ["Fixing faulty wiring or outlets", "Troubleshooting power issues", "Replacing damaged switches"],
        },
        {
          title: "Lighting Installation & Repair",
          scope: ["Indoor lighting", "Outdoor lighting", "Smart lighting systems"],
        },
      ],
    },

    {
      name: "Plumbing Service",
      icon: FaBath,
      desc: "Reliable plumbing services for repairs, installations, and maintenance.",
      subServices: [
        {
          title: "General Plumbing Repairs",
          scope: ["Leaky taps and faucets", "Dripping pipes or joints", "Water pressure issues"],
        },
        {
          title: "Kitchen Plumbing",
          scope: ["Sink installation or repair", "Tap and faucet replacement", "Dishwasher plumbing setup"],
        },
      ],
    },

    {
      name: "Carpentry Service",
      icon: FaHammer,
      desc: "Expert carpentry services for custom furniture, repairs, and home woodwork solutions.",
      subServices: [
        {
          title: "Furniture Making & Assembly",
          scope: ["Custom-made furniture", "Modular furniture", "Flat-pack furniture assembly"],
        },
        {
          title: "Wardrobes & Storage Units",
          scope: ["Modular wardrobe design and installation", "Wooden almirahs and cabinets"],
        },
      ],
    },

    {
      name: "Painting",
      icon: FaPaintRoller,
      desc: "Professional interior and exterior painting services for a refreshed look.",
      subServices: [
        {
          title: "Interior Wall Painting",
          scope: ["Living room and bedrooms painting", "Ceiling painting", "Wall priming"],
        },
      ],
    },

    {
      name: "Cleaning Service",
      icon: FaBroom,
      desc: "Comprehensive home and office cleaning services for a spotless space.",
      subServices: [
        {
          title: "General House Cleaning",
          scope: ["Dusting and wiping all surfaces", "Vacuuming carpets and rugs", "Mopping floors"],
        },
      ],
    },

    {
      name: "Seepage & Waterproofing",
      icon: FaTint,
      desc: "Effective solutions to prevent water seepage and ensure long-lasting waterproofing for your home.",
      subServices: [
        {
          title: "Waterproofing & Anti-Seepage Treatment",
          scope: ["Applying waterproof coatings to walls and ceilings", "Sealing joints and corners"],
        },
      ],
    },

    {
      name: "Full Interior Services",
      icon: FaHome,
      desc: "Complete interior maintenance, repair, and decoration services for your home.",
      subServices: [
        {
          title: "Interior Wall Cleaning & Preparation",
          scope: ["Deep cleaning of all interior walls", "Surface preparation for painting"],
        },
      ],
    },
  ],
};

export default services;
