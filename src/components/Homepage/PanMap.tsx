"use client"

import { useState, useEffect } from "react";

const PanMap = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const states = [
        {
            name: 'Karnataka',
            cities: ['Bangalore', 'Kudgi'],
            description: 'Online doctor consultation (pan-India) Online pharmacy & medicine home delivery serviceable pin',
            image: "/Homepage/karnataka.png"
        },
        {
            name: 'Kerala',
            cities: ['Kochi', 'Kozhikode', 'Thiruvananthapuram', 'Thrissur'],
            description: 'Online doctor consultation (pan-India) Online pharmacy & medicine home delivery serviceable pin',
            image: "/Homepage/kerala.png"
        },
        {
            name: 'Gujarat',
            cities: ['Ahmedabad'],
            description: 'Online doctor consultation (pan-India) Online pharmacy & medicine home delivery serviceable pin',
            image: "/Homepage/gujarat.png"
        },
        {
            name: 'Maharashtra',
            cities: ['Mumbai', 'Pune', 'Thane', 'Navi Mumbai', 'Amravati'],
            description: 'Online doctor consultation (pan-India) Online pharmacy & medicine home delivery serviceable pin',
            image: "/Homepage/maharashtra.png"
        },
        {
            name: 'Rajasthan',
            cities: ['Jaipur', 'Udaipur', 'Jodhpur', 'Ajmer', 'Kota'],
            description: 'Online doctor consultation (pan-India) Online pharmacy & medicine home delivery serviceable pin',
            image: "/Homepage/rajasthan.png"
        },
        {
            name: 'Uttar Pradesh',
            cities: ['Lucknow', 'Kanpur', 'Ghaziabad', 'Agra', 'Varanasi'],
            description: 'Online doctor consultation (pan-India) Online pharmacy & medicine home delivery serviceable pin',
            image: "/Homepage/uttarPradesh.png"
        },
        {
            name: 'Bihar',
            cities: ['Patna', 'Gaya', 'Muzaffarpur', 'Darbhanga', 'Bhagalpur'],
            description: 'Online doctor consultation (pan-India) Online pharmacy & medicine home delivery serviceable pin',
            image: "/Homepage/bihar.png"
        },
        {
            name: 'West Bengal',
            cities: ['Kolkata', 'Howrah', 'Asansol', 'Siliguri', 'Durgapur'],
            description: 'Online doctor consultation (pan-India) Online pharmacy & medicine home delivery serviceable pin',
            image: "/Homepage/westBengal.png"
        },
        {
            name: 'Tamil Nadu',
            cities: ['Chennai', 'Coimbatore', 'Madurai', 'Tiruchirappalli'],
            description: 'Online doctor consultation (pan-India) Online pharmacy & medicine home delivery serviceable pin',
            image: "/Homepage/tamilNadu.png"
        },
        {
            name: 'Madhya Pradesh',
            cities: ['Indore', 'Bhopal', 'Jabalpur', 'Gwalior', 'Ujjain'],
            description: 'Online doctor consultation (pan-India) Online pharmacy & medicine home delivery serviceable pin',
            image: "/Homepage/madhyaPradesh.png"
        },
        {
            name: 'Andhra Pradesh',
            cities: ['Visakhapatnam', 'Vijayawada', 'Guntur', 'Nellore'],
            description: 'Online doctor consultation (pan-India) Online pharmacy & medicine home delivery serviceable pin',
            image: "/Homepage/andhraPradesh.png"
        },
    ];

    // Auto-rotate cards every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % states.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [states.length]);

    const calculateTopCardHeight = (citiesCount: any) => {
        const baseHeight = 30 + 28 + 8;
        const cityHeight = citiesCount * 22;
        return baseHeight + cityHeight;
    };

    // Get current top card height
    const currentTopCardHeight = calculateTopCardHeight(states[activeIndex].cities.length);

    return (
        <section className="w-full py-12 px-4 md:py-20 lg:py-[50px] xl:py-[50px] min-h-screen md:min-h-0 lg:min-h-0 xl:min-h-0 flex justify-center">
            <div
                className="w-full flex flex-col items-center box-border overflow-visible
                rounded-[20px] bg-[linear-gradient(126.19deg,#176EC6_21.84%,#0F58A1_78.16%)]
                p-6 gap-8
                md:p-10 md:gap-12
                lg:w-[980px] lg:h-[580px] lg:flex-row lg:justify-between lg:items-center 
                lg:pl-[50px] lg:pr-[50px] lg:pt-[50px] lg:pb-[50px] lg:gap-[40px]
                xl:w-[1290px] xl:h-[669px] xl:flex-row xl:justify-between xl:items-center 
                xl:pl-[83px] xl:pr-[83px] xl:pt-[70px] xl:pb-[70px] xl:gap-[97px]"
            >
                {/* Left Section */}
                <div className="flex flex-col gap-6 w-full max-w-[550px] shrink-0 
                    lg:gap-[8px] lg:max-w-[420px]
                    xl:gap-[10px] xl:max-w-[550px]">
                    {/* Heading */}
                    <h2
                        className="font-['Source_Serif_Pro'] font-semibold capitalize text-white m-0
                        text-3xl leading-tight text-center
                        md:text-4xl
                        lg:text-left lg:w-[420px] lg:text-[38px] lg:leading-[48px] lg:tracking-[0.76px]
                        xl:text-left xl:w-[550px] xl:text-[46px] xl:leading-[58px] xl:tracking-[0.92px]"
                    >
                        Pan-India Online Healthcare Services
                    </h2>

                    {/* Description */}
                    <p className="font-['DM_Sans'] font-light text-white text-base leading-relaxed text-center 
                        lg:text-left lg:text-[15px] lg:leading-[24px]
                        xl:text-left xl:text-[16px] xl:leading-[26px]">
                        We continue expanding our network to improve pan-India healthcare access. Atharv Healthcare provides all services across India.
                    </p>

                    {/* --- MOBILE/TABLET STATIC LIST (Visible < lg) --- */}
                    <div className="flex flex-col gap-4 lg:hidden w-full">
                        {states.map((state, index) => (
                            <div
                                key={`mobile-${index}`}
                                className={`w-full bg-white rounded-[5px] shadow-[0px_0px_11px_0px_#00000040] border-l-4 border-[#1566B7]
                                p-4 flex flex-col gap-2 relative z-10 box-border transition-all duration-300
                                ${index === activeIndex ? 'ring-2 ring-white' : ''}`}
                            >
                                <h3 className="font-['DM_Sans'] font-bold text-[#142349] text-lg leading-snug capitalize m-0">
                                    {state.name}
                                </h3>
                                {state.cities.length > 0 && (
                                    <ul className="list-disc list-inside font-['DM_Sans'] font-normal text-[#142349] text-sm m-0 pl-2">
                                        {state.cities.map((city, idx) => (
                                            <li key={idx}>{city}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* --- DESKTOP STACKED CARDS - DYNAMIC HEIGHT (Visible >= lg) --- */}
                    <div className="hidden lg:block relative lg:w-[320px] xl:w-[393px]" 
                        style={{ height: `${currentTopCardHeight + (5 * 46)}px` }}>
                        {/* Stack of 6 cards - positioned directly below each other with dynamic heights */}
                        {[0, 1, 2, 3, 4, 5].map((cardIndex) => {
                            const isTopCard = cardIndex === 0;
                            const displayIndex = (activeIndex + cardIndex) % states.length;
                            const displayState = states[displayIndex];

                            // Calculate position: top card at 0, then stack directly below
                            const topPosition = cardIndex === 0
                                ? 0
                                : currentTopCardHeight + ((cardIndex - 1) * 46);

                            // Calculate height for top card based on cities count
                            const cardHeight = isTopCard 
                                ? calculateTopCardHeight(displayState.cities.length)
                                : 46;

                            return (
                                <div
                                    key={cardIndex}
                                    className="absolute left-0 bg-white rounded-[5px] shadow-[0px_0px_11px_0px_#00000040]
                                    border-l-4 border-[#1566B7] flex flex-col box-border cursor-pointer
                                    transition-all duration-500 ease-in-out
                                    lg:border-l-[3px]
                                    xl:border-l-4"
                                    style={{
                                        width: window.innerWidth >= 1280 ? '393px' : '320px',
                                        top: `${topPosition}px`,
                                        zIndex: 15 - cardIndex,
                                        padding: isTopCard 
                                            ? (window.innerWidth >= 1280 ? '14px' : '12px')
                                            : (window.innerWidth >= 1280 ? '12px 24px' : '10px 18px'),
                                        height: `${cardHeight}px`
                                    }}
                                    onClick={() => setActiveIndex(displayIndex)}
                                >
                                    {/* State Name - Shows in ALL cards */}
                                    <h3 className="font-['DM_Sans'] font-bold text-[#142349] capitalize m-0
                                        lg:text-[16px] lg:leading-[26px]
                                        xl:text-[18px] xl:leading-[30px]">
                                        {displayState.name}
                                    </h3>

                                    {/* Cities List - Only in Top Card - NO SCROLLBAR */}
                                    {isTopCard && displayState.cities.length > 0 && (
                                        <ul className="list-disc list-inside font-['DM_Sans'] font-normal text-[#142349] m-0 pl-2 mt-2
                                        animate-fadeIn
                                        lg:text-[13px] lg:leading-[20px] lg:mt-1
                                        xl:text-[15px] xl:leading-[22px] xl:mt-2">
                                            {displayState.cities.map((city, idx) => (
                                                <li key={idx}>{city}</li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Right Section - India Map (Changes with active card) */}
                <div className="flex items-center justify-center flex-1 w-full max-w-[400px] 
                    lg:max-w-none lg:w-auto
                    xl:max-w-none xl:w-auto">
                    <img
                        key={activeIndex}
                        src={states[activeIndex].image}
                        alt={`India Map - ${states[activeIndex].name}`}
                        className="w-full h-auto object-contain transition-opacity duration-500
                        lg:w-[380px] lg:h-[395px]
                        xl:w-[490px] xl:h-[507.7977600097656px] animate-fadeIn"
                    />
                </div>
            </div>

            <style>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.5s ease-in-out;
                }
            `}</style>
        </section>
    );
};

export default PanMap;
