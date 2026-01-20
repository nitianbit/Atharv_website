import { useState } from 'react';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    const faqs = [
        {
            question: "How do I book an online doctor consultation?",
            answer: "Click \"Consult Doctor Online\", select specialty, share details and confirm your slot."
        },
        {
            question: "Do you offer medicine home delivery?",
            answer: "Yes - through our online pharmacy. Upload prescription, order medicines online, and get doorstep delivery where available."
        },
        {
            question: "Can I book lab tests at home?",
            answer: "Yes. You can book lab tests online with home sample collection and secure digital reports."
        },
        {
            question: "Is ambulance service 24×7?",
            answer: "Emergency ambulance service availability depends on your city. Check availability while booking."
        }
    ];

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="w-full bg-white py-12 px-4 xl:py-16">
            <div className="w-full mx-auto xl:max-w-[1512px]">

                {/* Main Container */}
                <div className="w-full max-w-3xl mx-auto flex flex-col gap-8 xl:w-[907.1875px] xl:max-w-none xl:gap-[29px]">

                    {/* Heading */}
                    <h2 className="w-full font-['Source_Serif_Pro'] font-semibold text-3xl md:text-4xl text-center capitalize text-[#142349] m-0 xl:h-[58px] xl:text-[46px] xl:leading-[100%] xl:tracking-[0.02em]">
                        Frequently Asked <span className="text-[#1566B7]">Questions</span>
                    </h2>

                    {/* Questions Dropdown Container */}
                    <div className="w-full">
                        {faqs.map((faq, index) => (
                            <div key={index}>
                                {/* Question Box */}
                                <div
                                    className={`w-full border-t border-b border-[#E5E5E5] relative cursor-pointer transition-all duration-300 select-none outline-none focus:outline-none focus:ring-0
                                                ${activeIndex === index ? 'py-6 xl:py-0 xl:h-[104px]' : 'py-5 xl:py-0 xl:h-[71.078125px]'}`}
                                    onClick={() => toggleAccordion(index)}
                                    style={{ WebkitTapHighlightColor: 'transparent' }}
                                >
                                    {/* Question Row */}
                                    <div className="w-full flex justify-between items-center xl:absolute xl:top-[25.67px] xl:left-[4.11px] xl:w-full xl:pr-4">
                                        {/* Question Text */}
                                        <span className={`font-['DM_Sans'] font-normal text-lg text-[#141414] leading-[30px] flex-1 pr-4 
                                                        xl:h-[30px] xl:text-[20px] xl:tracking-0 xl:p-0
                                                        ${index !== 0 ? 'xl:text-[18px]' : ''}`}>
                                            {faq.question}
                                        </span>

                                        {/* Icon */}
                                        <span className="text-xl md:text-2xl font-light text-[#141414]">
                                            {activeIndex === index ? '×' : '+'}
                                        </span>
                                    </div>

                                    {/* Answer - Only for Open State */}
                                    {activeIndex === index && faq.answer && (
                                        <div className="w-full mt-2 font-['DM_Sans'] font-light text-sm md:text-base text-[#142349] leading-relaxed tracking-[0.02em]
                                                        xl:mt-0 xl:absolute xl:top-[60px] xl:left-[5px] xl:w-[716px] xl:h-[20px] xl:text-[14px] xl:leading-[20px]">
                                            {faq.answer}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;
