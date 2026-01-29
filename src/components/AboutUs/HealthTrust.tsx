'use client';
import { useRef, useEffect } from 'react';

const HealthTrust = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const features = [
        {
            id: 1,
            icon: "/Homepage/ISO.png",
            title: "ISO-Certified Systems"
        },
        {
            id: 2,
            icon: "/Aboutus/7UP.png",
            title: "Years of Operational Experience"
        },
        {
            id: 3,
            icon: "/Aboutus/medical-record.png",
            title: "Standardized Medical Protocols"
        },
        {
            id: 4,
            icon: "/Aboutus/training.png",
            title: "Regular Audits And Training"
        },
        {
            id: 5,
            icon: "/Aboutus/business.png",
            title: "Strong Compliance Culture"
        }
    ];

    useEffect(() => {
        const container = scrollRef.current;
        if (!container) return;

        let animationFrameId: number;
        let currentScroll = container.scrollLeft;
        const speed = 0.5; // Slow speed as requested

        const animate = () => {
            // Move scroll position
            currentScroll += speed;

            // Check if we need to reset (seamless loop)
            // We duplicate the content, so we loop when we reach half the scrollWidth
            if (currentScroll >= container.scrollWidth / 2) {
                currentScroll = 0;
            }

            container.scrollLeft = currentScroll;
            animationFrameId = requestAnimationFrame(animate);
        };

        const startAnimation = () => {
            // Synchronization: Update tracking var to match actual DOM
            if (container) {
                currentScroll = container.scrollLeft;
            }
            // Clear any existing loop to prevent acceleration
            if (animationFrameId) cancelAnimationFrame(animationFrameId);
            animationFrameId = requestAnimationFrame(animate);
        };

        const stopAnimation = () => {
            if (animationFrameId) cancelAnimationFrame(animationFrameId);
        };

        // Start
        startAnimation();

        // Listeners for stopping on interaction
        container.addEventListener('mouseenter', stopAnimation);
        container.addEventListener('mouseleave', startAnimation);
        container.addEventListener('touchstart', stopAnimation);
        container.addEventListener('touchend', startAnimation);

        return () => {
            stopAnimation();
            container.removeEventListener('mouseenter', stopAnimation);
            container.removeEventListener('mouseleave', startAnimation);
            container.removeEventListener('touchstart', stopAnimation);
            container.removeEventListener('touchend', startAnimation);
        };
    }, []);

    return (
        <div className="w-full py-12 xl:py-16">
            {/* Overall Container */}
            <div className="w-full flex flex-col gap-12 bg-[#3177E11A]/10 rounded-xl overflow-hidden py-10
                            xl:bg-[rgba(49,119,225,0.1)] xl:rounded-none xl:py-0
                            xl:w-full xl:max-w-[1521px] xl:h-[567px] xl:mx-auto xl:gap-[54px] xl:block">

                {/* Heading */}
                <h2 className="text-center font-['Source_Serif_Pro'] font-semibold capitalize text-3xl md:text-4xl leading-tight px-4
                               xl:w-[727px] xl:h-[58px] xl:mx-auto xl:relative xl:top-[80px] xl:-translate-y-1/2 xl:text-[46px] xl:leading-[100%] xl:tracking-[0.02em] xl:px-0">
                    <span className="text-[#142349]">HealthCare You Can </span>
                    <span className="text-[#1566B7]">Trust</span>
                </h2>

                {/* Box Container (Scroll Area) */}
                <div
                    ref={scrollRef}
                    className="flex gap-6 overflow-x-auto hide-scrollbar px-4 pb-8
                               xl:w-[1521px] xl:h-[315px] xl:flex xl:relative xl:top-[120px] xl:gap-[20px] xl:overflow-x-hidden xl:px-0 xl:pb-0"
                >
                    {/* First Set */}
                    {features.map((feature) => (
                        <div
                            key={`first-${feature.id}`}
                            className="flex flex-col items-center justify-center gap-6 bg-white rounded-[8.3px] border-2 border-white/10 shadow-sm shrink-0 transition-all duration-300
                                       w-[260px] h-[260px] p-6
                                       xl:w-[315px] xl:h-[315px] xl:gap-[33px] xl:p-[54px] xl:border-[rgba(222,222,222,0.1)] xl:shadow-[0px_0px_4px_0px_rgba(0,0,0,0.21)] feature-card"
                        >
                            {/* Icon */}
                            <div className="flex items-center justify-center w-[70px] h-[70px] xl:w-[98px] xl:h-[98px]">
                                <img
                                    src={feature.icon}
                                    alt={feature.title}
                                    className="w-full h-full object-contain"
                                />
                            </div>

                            {/* Title */}
                            <h3 className="font-['DM_Sans'] font-semibold text-[#142349] capitalize text-center flex items-center justify-center
                                           text-lg leading-snug w-full
                                           xl:w-[217px] xl:h-[76px] xl:text-[20px] xl:leading-[27px] xl:tracking-0"
                            >
                                {feature.title}
                            </h3>
                        </div>
                    ))}

                    {/* Duplicate Set for Seamless Loop - Visible across all for scrolling effect */}
                    {features.map((feature) => (
                        <div
                            key={`second-${feature.id}`}
                            className="flex flex-col items-center justify-center gap-6 bg-white rounded-[8.3px] border-2 border-white/10 shadow-sm shrink-0 transition-all duration-300
                                       w-[260px] h-[260px] p-6
                                       xl:w-[315px] xl:h-[315px] xl:gap-[33px] xl:p-[54px] xl:border-[rgba(222,222,222,0.1)] xl:shadow-[0px_0px_4px_0px_rgba(0,0,0,0.21)] feature-card"
                        >
                            <div className="flex items-center justify-center w-[70px] h-[70px] xl:w-[98px] xl:h-[98px]">
                                <img
                                    src={feature.icon}
                                    alt={feature.title}
                                    className="w-full h-full object-contain"
                                />
                            </div>

                            <h3 className="font-['DM_Sans'] font-semibold text-[#142349] capitalize text-center flex items-center justify-center
                                           text-lg leading-snug w-full
                                           xl:w-[217px] xl:h-[76px] xl:text-[20px] xl:leading-[27px] xl:tracking-0"
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
                    box-shadow: 0px 4px 20px rgba(21, 102, 183, 0.25);
                    transform: translateY(-4px);
                }
            `}</style>
        </div>
    );
};

export default HealthTrust;
