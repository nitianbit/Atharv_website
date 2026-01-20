import { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const faqs = [
  {
    question: "Is an Occupational Health Centre mandatory for factories in India?",
    answer:
      "In many industries and workforce sizes, yes. Legal obligations exist under the Factories Act and OSHWC Code. We help you understand exact requirements for your site.",
  },
  {
    question: "Do you only provide medical staff, or complete OHC setup?",
    answer:
      "We provide both — full OHC setup and staffing, or staffing only, based on your need.",
  },
  {
    question: "Do you deploy AFIH-qualified doctors?",
    answer:
      "Yes, wherever legally required or client-preferred.",
  },
  {
    question: "Can you operate OHCs outside metro cities?",
    answer:
      "Yes. We specialize in semi-urban, rural, and industrial belts across India.",
  },
  {
    question: "Do you conduct periodic medical examinations for workers?",
    answer:
      "Yes, including pre-employment, annual, and risk-based checkups.",
  },
  {
    question: "Can you support government and third-party audits?",
    answer:
      "Yes. Compliance documentation and audit-readiness are part of our offering.",
  },
];


  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="mx-auto max-w-[1512px]">
        <div className="mx-auto max-w-[907px] flex flex-col gap-8">
          {/* Heading */}
          <h2 className="text-center font-semibold text-[46px] leading-none tracking-[0.02em] font-serif">
            <span className="text-[#142349]">Frequently Asked </span>
            <span className="text-[#1566B7]">Questions</span>
          </h2>

          {/* FAQ List */}
          <div>
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-t border-b border-[#E5E5E5] cursor-pointer"
                onClick={() => toggleAccordion(index)}
              >
                {/* Question Row */}
                <div className="flex items-center justify-between py-4 px-1">
                  <span className="font-['DM Sans'] text-[18px] leading-[30px] text-[#141414]">
                    {faq.question}
                  </span>

                  <span className="text-[22px] font-light text-[#141414]">
                    {activeIndex === index ? "×" : "+"}
                  </span>
                </div>

                {/* Answer */}
                {activeIndex === index && (
                  <div className="pb-6 px-1 max-w-[716px]">
                    <p className="font-['DM Sans'] text-[14px] leading-[20px] tracking-[0.02em] text-[#142349]">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
