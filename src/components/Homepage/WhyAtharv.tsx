'use client';
import { useRef, useEffect } from 'react';

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
        const scrollSpeed = 0.9;
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
        <div className="w-full py-16 px-4">
            {/* Overall Container */}
            <div
                className="w-full mx-auto flex flex-col gap-10 md:gap-[54px] overflow-hidden rounded-[20px] xl:rounded-none
                py-10 xl:py-0
                xl:max-w-[1521px] xl:h-[567px] xl:overflow-visible"
                style={{
                    background: 'rgba(49, 119, 225, 0.1)',
                }}
            >

                {/* Heading */}
                <h2
                    className="w-full max-w-[727px] mx-auto text-center capitalize relative
                    text-[32px] mt-0
                    md:text-[40px]
                    xl:h-[58px] xl:top-[80px] xl:translate-y-[-50%] xl:text-[46px] xl:leading-[100%] xl:tracking-[0.02em] xl:mt-0"
                    style={{
                        fontFamily: "'Source Serif Pro', serif",
                        fontWeight: 600,
                        whiteSpace: "nowrap",
                    }}
                >
                    <span className="text-[#142349]">WHY CHOOSE </span>
                    <span className="text-[#1566B7]">ATHARV HEALTHCARE? </span>
                </h2>

                {/* Box Container - Scrolling */}
                <div
                    ref={scrollRef}
                    className="w-full flex relative gap-5 overflow-x-hidden hide-scrollbar
                    mt-4
                    xl:w-full xl:max-w-[1521px] xl:mx-auto xl:h-[315px] xl:top-[50px] xl:gap-[20px] xl:mt-0"
                    style={{
                        scrollBehavior: 'auto'
                    }}
                >
                    {/* First Set */}
                    {features.map((feature) => (
                        <div
                            key={`first-${feature.id}`}
                            className="flex flex-col items-center justify-center bg-white flex-shrink-0 transition-all duration-300 feature-card
                            w-[260px] h-[260px] p-8 gap-6 rounded-[8px]
                            md:w-[280px] md:h-[280px]
                            xl:w-[315px] xl:h-[315px] xl:gap-[33px] xl:pt-[54px] xl:pb-[54px] xl:rounded-[8.3px]"
                            style={{
                                border: '2px solid rgba(222, 222, 222, 0.1)',
                                boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.21)',
                            }}
                        >
                            {/* Icon */}
                            <div
                                className="flex items-center justify-center
                                w-[70px] h-[70px]
                                md:w-[80px] md:h-[80px]
                                xl:w-[98px] xl:h-[98px]"
                            >
                                <img
                                    src={feature.icon}
                                    alt={feature.title}
                                    className="w-full h-full object-contain"
                                />
                            </div>

                            {/* Title */}
                            <h3
                                className="font-['DM_Sans'] font-semibold text-center align-middle capitalize text-[#142349] flex items-center justify-center m-0
                                text-[16px] leading-snug w-full
                                md:text-[18px]
                                xl:w-[217px] xl:h-[76px] xl:text-[20px] xl:leading-[27px] xl:tracking-normal"
                            >
                                {feature.title}
                            </h3>
                        </div>
                    ))}

                    {/* Duplicate Set for Seamless Loop */}
                    {features.map((feature) => (
                        <div
                            key={`second-${feature.id}`}
                            className="flex flex-col items-center justify-center bg-white flex-shrink-0 transition-all duration-300 feature-card
                            w-[260px] h-[260px] p-8 gap-6 rounded-[8px]
                            md:w-[280px] md:h-[280px]
                            xl:w-[315px] xl:h-[315px] xl:gap-[33px] xl:pt-[54px] xl:pb-[54px] xl:rounded-[8.3px]"
                            style={{
                                border: '2px solid rgba(222, 222, 222, 0.1)',
                                boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.21)',
                            }}
                        >
                            <div
                                className="flex items-center justify-center
                                w-[70px] h-[70px]
                                md:w-[80px] md:h-[80px]
                                xl:w-[98px] xl:h-[98px]"
                            >
                                <img
                                    src={feature.icon}
                                    alt={feature.title}
                                    className="w-full h-full object-contain"
                                />
                            </div>

                            <h3
                                className="font-['DM_Sans'] font-semibold text-center align-middle capitalize text-[#142349] flex items-center justify-center m-0
                                text-[16px] leading-snug w-full
                                md:text-[18px]
                                xl:w-[217px] xl:h-[76px] xl:text-[20px] xl:leading-[27px] xl:tracking-normal"
                            >
                                {feature.title}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                .hide-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }

                .feature-card:hover {
                    box-shadow: 0px 4px 20px rgba(21, 102, 183, 0.25) !important;
                    transform: translateY(-4px);
                }
            `}</style>
        </div>
    );
};

export default WhyAtharv;
