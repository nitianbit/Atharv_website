'use client';
import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const WhyAtharv = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const features = [
        {
            id: 1,
            icon: "/Homepage/ISO.png",
            title: "ISO certified healthcare services"
        },
        {
            id: 2,
            icon: "/Homepage/MapIcon.png",
            title: "7+ years of proven healthcare experience"
        },
        {
            id: 3,
            icon: "/Homepage/HealthCare.png",
            title: "Pan-India presence and strong service network"
        },
        {
            id: 4,
            icon: "/Homepage/donationIcon.png",
            title: "Affordable, price-competitive healthcare"
        },
        {
            id: 5,
            icon: "/Homepage/pharmacyIcon.png",
            title: "Tailor-made care solutions for patient needs"
        },
        {
            id: 6,
            icon: "/Homepage/HealthCare.png",
            title: "In-house pharmacy and reliable medicine availability"
        },
        {
            id: 7,
            icon: "/Homepage/pharmacyIcon.png",
            title: "Accountability-driven, patient-first approach"
        },
    ];

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        let scrollAmount = 0;
        const scrollSpeed = 2;
        let animationId: number;

        const autoScroll = () => {
            scrollAmount += scrollSpeed;

            if (scrollAmount >= scrollContainer.scrollWidth / 2) {
                scrollAmount = 0;
            }

            scrollContainer.scrollLeft = scrollAmount;
            animationId = requestAnimationFrame(autoScroll);
        };

        animationId = requestAnimationFrame(autoScroll);

        const handleMouseEnter = () => {
            cancelAnimationFrame(animationId);
        };

        const handleMouseLeave = () => {
            animationId = requestAnimationFrame(autoScroll);
        };

        scrollContainer.addEventListener('mouseenter', handleMouseEnter);
        scrollContainer.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            cancelAnimationFrame(animationId);
            scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
            scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <div className="w-full py-12 md:py-16 lg:py-20 overflow-hidden">
            {/* Overall Container */}
            <div className="w-full mx-auto flex flex-col gap-8 md:gap-12 lg:gap-16 py-10 md:py-14 lg:py-[60px] rounded-[20px] bg-[rgba(49,119,225,0.1)] relative">

                {/* Heading */}
                <h2 className="w-full px-4 text-center">
                    <span className="block font-['Source_Serif_Pro'] font-semibold text-[#142349] text-1xl md:text-4xl lg:text-[46px] leading-tight tracking-tight uppercase whitespace-nowrap">
                        Why Choose <span className="text-[#1566B7]">Atharv Healthcare?</span>
                    </span>
                </h2>

                {/* Box Container - Scrolling */}
                <div
                    ref={scrollRef}
                    className="w-full flex gap-5 md:gap-6 lg:gap-8 overflow-x-hidden overflow-y-hidden"
                >
                    {/* First Set */}
                    {features.map((feature) => (
                        <motion.div
                            key={`first-${feature.id}`}
                            className="group flex flex-col items-center justify-center bg-white flex-shrink-0 cursor-pointer
                            w-[260px] h-[260px] p-6 gap-6 rounded-[8px]
                            md:w-[280px] md:h-[280px] md:p-8
                            lg:w-[315px] lg:h-[315px] lg:gap-8 lg:py-[54px] lg:rounded-[8px]
                            border-2 border-[rgba(222,222,222,0.1)] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.21)]"
                            whileHover={{ scale: 1.05, boxShadow: "0px 4px 20px rgba(21,102,183,0.25)" }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                            {/* Icon */}
                            <motion.div
                                className="flex items-center justify-center w-[70px] h-[70px] md:w-[80px] md:h-[80px] lg:w-[98px] lg:h-[98px]"
                                variants={{
                                    hover: { scale: 1.1, rotate: 5 }
                                }}
                            >
                                <img
                                    src={feature.icon}
                                    alt={feature.title}
                                    className="w-full h-full object-contain"
                                />
                            </motion.div>

                            {/* Title */}
                            <motion.h3
                                className="font-['DM_Sans'] font-semibold text-center text-[#142349] flex items-center justify-center
                                text-base leading-snug w-full
                                md:text-lg
                                lg:text-[20px] lg:leading-[27px] lg:w-[220px]"
                                variants={{
                                    hover: { y: -5, color: "#1566B7" }
                                }}
                            >
                                {feature.title}
                            </motion.h3>
                        </motion.div>
                    ))}

                    {/* Duplicate Set for Seamless Loop */}
                    {features.map((feature) => (
                        <motion.div
                            key={`second-${feature.id}`}
                            className="group flex flex-col items-center justify-center bg-white flex-shrink-0 cursor-pointer
                            w-[260px] h-[260px] p-6 gap-6 rounded-[8px]
                            md:w-[280px] md:h-[280px] md:p-8
                            lg:w-[315px] lg:h-[315px] lg:gap-8 lg:py-[54px] lg:rounded-[8px]
                            border-2 border-[rgba(222,222,222,0.1)] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.21)]"
                            whileHover={{ scale: 1.05, boxShadow: "0px 4px 20px rgba(21,102,183,0.25)" }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                            <motion.div
                                className="flex items-center justify-center w-[70px] h-[70px] md:w-[80px] md:h-[80px] lg:w-[98px] lg:h-[98px]"
                                variants={{
                                    hover: { scale: 1.1, rotate: 5 }
                                }}
                            >
                                <img
                                    src={feature.icon}
                                    alt={feature.title}
                                    className="w-full h-full object-contain"
                                />
                            </motion.div>

                            <motion.h3
                                className="font-['DM_Sans'] font-semibold text-center text-[#142349] flex items-center justify-center
                                text-base leading-snug w-full
                                md:text-lg
                                lg:text-[20px] lg:leading-[27px] lg:w-[220px]"
                                variants={{
                                    hover: { y: -5, color: "#1566B7" }
                                }}
                            >
                                {feature.title}
                            </motion.h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WhyAtharv;
