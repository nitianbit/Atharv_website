import React from "react";

type UseCase = {
  title: string;
  description: string;
  icon: string;
};

const useCases: UseCase[] = [
  {
    title: "MMU Services For CSR & Community Health Programs",
    description:
      "Mobile Medical Units support CSR initiatives by enabling organised healthcare outreach, preventive screenings, and health awareness activities in underserved communities.",
    icon: '/MobileMedicalUnit/Use-1.png',
  },
  {
    title: "MMU For Government & PSU Health Initiatives",
    description:
      "MMUs are suitable for public health missions, outreach programs, and population-level screening initiatives where structured execution and reporting are required.",
    icon: '/MobileMedicalUnit/Use-2.png',
  },
  {
    title: "Mobile Medical Units For Rural Healthcare",
    description:
      "MMUs help extend primary healthcare services to rural and remote regions with limited access to hospitals or clinics.",
    icon: '/MobileMedicalUnit/Use-3.png',
  },
  {
    title: "MMU For Industrial & Workforce Outreach",
    description:
      "For industries with remote or dispersed workforces, MMUs enable on-site healthcare access, preventive care, and referral support.",
    icon: '/MobileMedicalUnit/Use-4.png',
  },
];

const MMUUseCases = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-gray-900 mb-12">
          MMU Use Cases
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {useCases.map((item, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Icon */}
              <div className="flex justify-center mt-8">
  <div className="w-20 h-20  flex items-center justify-center">
    <img
      src={item.icon}
      alt={item.title}
      className="w-20 h-20 object-contain"
    />
  </div>
</div>


              {/* Content */}
              {/* Content */}
<div className="px-6 pb-8 pt-6 text-center">
  <h3 className="text-base font-semibold text-gray-900 mb-4">
    {item.title}
  </h3>
  <p className="text-sm text-gray-600 leading-relaxed">
    {item.description}
  </p>
</div>


              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 w-full h-2 bg-[#1566B7] rounded-b-2xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MMUUseCases;
