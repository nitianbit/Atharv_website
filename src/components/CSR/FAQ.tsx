import { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What services can a Mobile Medical Unit provide?",
      answer:
        "MMUs can be configured to deliver primary consultations, basic screenings, medicine distribution, referral support, and health awareness activities based on program scope.",
    },
    {
      question: "Are MMUs suitable for CSR and government programs?",
      answer:
        "Yes. MMUs are widely used for CSR initiatives, public health outreach, and institutional healthcare programs.",
    },
    {
      question: "Do MMUs replace hospitals or clinics?",
      answer:
        "No. MMUs complement existing healthcare infrastructure by enabling access, screening, and referrals.",
    },
    {
      question: "Can MMU programs be customised for different regions?",
      answer:
        "Yes. MMU services are designed based on geography, population needs, and program objectives.",
    },
    {
      question: "Can MMU programs be scaled across multiple locations?",
      answer:
        "Yes. Programs can be deployed across regions with structured planning and coordination.",
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
