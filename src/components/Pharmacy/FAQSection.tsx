import { useState } from 'react';
import styles from '../OccupationalHealthCentres/ohc.module.css';

const FAQSection = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    const faqs = [
        {
            question: "Is Atharv Healthcare an online pharmacy?",
            answer: "No. Atharv Healthcare's pharmacy services primarily focus on wholesale and institutional medicine supply. Retail pharmacy services are limited and location-specific."
        },
        {
            question: "Is medicine delivery available across India?",
            answer: "Wholesale and institutional medicine supply is available across India for eligible organizations. Retail pharmacy services with home delivery are currently limited to specific locations in Kolkata."
        },
        {
            question: "Are medicines dispensed only with a prescription?",
            answer: "Yes, all medicines are dispensed only with a valid prescription from a registered medical practitioner, in compliance with pharmaceutical regulations."
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
