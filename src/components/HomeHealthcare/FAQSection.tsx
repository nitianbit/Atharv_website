import { useState } from 'react';
import styles from '../OccupationalHealthCentres/ohc.module.css';

const FAQSection = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    const faqs = [
        {
            question: "What services are covered under home healthcare?",
            answer: "Home healthcare includes doctor consultations, medicine delivery, diagnostics at home, and ambulance support based on individual requirements."
        },
        {
            question: "Is home healthcare suitable for elderly patients?",
            answer: "Yes, home healthcare is especially suitable for elderly patients who require regular medical support, follow-up care, and convenient access to healthcare services without frequent hospital visits."
        },
        {
            question: "Does home healthcare replace hospital treatment?",
            answer: "No, home healthcare complements hospital treatment. It's ideal for non-emergency care, follow-ups, chronic condition management, and preventive health services. Emergency and critical care should still be handled at hospitals."
        },
        {
            question: "Are medicines delivered only with a prescription?",
            answer: "Yes, prescription medicines are delivered only with a valid prescription from a registered medical practitioner. Over-the-counter medications may be available without prescription."
        },
        {
            question: "Can diagnostics be done at home?",
            answer: "Yes, many diagnostic tests can be done at home with sample collection by certified phlebotomists. Results are provided digitally through secure channels."
        },
        {
            question: "Is medicine delivery available in all locations?",
            answer: "Medicine delivery availability varies by location. We operate across multiple cities in India, with expanding coverage. Please check availability for your specific location when placing an order."
        }
    ];

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="w-full bg-white py-12 md:py-16 px-4">
            <div className="max-w-4xl mx-auto">
                <h2 className={`${styles.headingSerif} ${styles.headingSerifMedium} text-center mb-12 max-w-3xl mx-auto`}>
                    Frequently Asked <span className={styles.primaryBlue}>Questions</span>
                </h2>

                <div className="space-y-0">
                    {faqs.map((faq, index) => (
                        <div key={index}>
                            <div
                                className={`w-full border-t border-b border-[#E5E5E5] relative cursor-pointer transition-all duration-300 ${
                                    activeIndex === index ? 'py-6' : 'py-5'
                                }`}
                                onClick={() => toggleAccordion(index)}
                            >
                                <div className="w-full flex justify-between items-center">
                                    <span className={`${styles.bodyText} text-lg leading-relaxed flex-1 pr-4`}>
                                        {faq.question}
                                    </span>
                                    <span className="text-2xl font-light text-[#141414]">
                                        {activeIndex === index ? '×' : '+'}
                                    </span>
                                </div>

                                {activeIndex === index && faq.answer && (
                                    <div className={`${styles.bodyText} mt-3 text-base text-[#142349] leading-relaxed`}>
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQSection;
