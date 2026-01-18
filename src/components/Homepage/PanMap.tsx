"use client"

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const PanMap = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start center", "end center"]
    });

    const states = [
        {
            name: 'Madhya Pradesh',
            description: 'Online doctor consultation (pan-India) Online pharmacy & medicine home delivery serviceable pin',
            expanded: true
        },
        { name: 'Madhya Pradesh', expanded: false },
        { name: 'Madhya Pradesh', expanded: false },
        { name: 'Madhya Pradesh', expanded: false }
    ];

    return (
        <section
            ref={sectionRef}
            className="w-full py-12 px-4 md:py-20 xl:py-[50px] min-h-screen xl:min-h-[10
            0vh] flex justify-center"
        >
            <div
                className="w-full flex flex-col items-center box-border overflow-hidden sticky top-[10vh]
                rounded-[20px] bg-[linear-gradient(126.19deg,#176EC6_21.84%,#0F58A1_78.16%)]
                p-6 gap-8
                md:p-10 md:gap-12
                xl:w-[1290px] xl:h-[569px] xl:flex-row xl:justify-between xl:items-center 
                xl:pl-[83px] xl:pr-[83px] xl:pt-[70px] xl:pb-[70px] xl:gap-[97px]"
            >
                {/* Left Section */}
                <div className="flex flex-col gap-6 w-full max-w-[550px] shrink-0 xl:gap-[30px]">
                    {/* Heading */}
                    <h2
                        className="font-['Source_Serif_Pro'] font-semibold capitalize text-white m-0
                        text-3xl leading-tight text-center
                        md:text-4xl
                        xl:text-left xl:w-[550px] xl:text-[46px] xl:leading-[58px] xl:tracking-[0.92px]"
                    >
                        Pan-India Online Healthcare Services
                    </h2>

                    {/* --- MOBILE/TABLET STATIC LIST (Visible < xl) --- */}
                    <div className="flex flex-col gap-4 xl:hidden w-full">
                        {states.map((state, index) => (
                            <div
                                key={`mobile-${index}`}
                                className="w-full bg-white rounded-[5px] shadow-[0px_0px_11px_0px_#00000040] border-l-4 border-[#1566B7]
                                p-4 flex flex-col gap-2 relative z-10 box-border"
                            >
                                <h3 className="font-['DM_Sans'] font-bold text-[#142349] text-lg leading-snug capitalize m-0">
                                    {state.name}
                                </h3>
                                {index === 0 && (
                                    <p className="font-['DM_Sans'] font-light text-[#142349] text-base leading-relaxed m-0">
                                        {state.description}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* --- DESKTOP ANIMATED LIST (Visible >= xl) --- */}
                    <div className="hidden xl:flex flex-col relative h-[400px]">
                        {states.map((state, index) => {
                            // First box is fixed
                            if (index === 0) {
                                return (
                                    <div
                                        key={index}
                                        className="w-[393px] p-6 rounded-[5px] bg-white shadow-[0px_0px_11px_0px_#00000040]
                                        border-l-4 border-[#1566B7] flex flex-col gap-[10px] box-border cursor-pointer
                                        transition-all duration-300 relative z-[1]
                                        hover:-translate-y-[2px] hover:shadow-[0px_4px_16px_0px_#00000050]"
                                    >
                                        <h3 className="font-['DM_Sans'] font-bold text-[20px] leading-[30px] text-[#142349] capitalize m-0">
                                            {state.name}
                                        </h3>
                                        <p className="font-['DM_Sans'] font-light text-[18px] leading-[31px] text-[#142349] m-0">
                                            {state.description}
                                        </p>
                                    </div>
                                );
                            }

                            // Boxes 2, 3, 4 move upward and stack
                            const boxIndex = index - 1;
                            const startPosition = 200 + (boxIndex * 100);
                            const endPosition = 180 + (boxIndex * 50);

                            // Using standard component scope variables for hook consistency (always call hooks)
                            const y = useTransform(
                                scrollYProgress,
                                [0, 0.7],
                                [startPosition, endPosition]
                            );

                            return (
                                <motion.div
                                    key={index}
                                    style={{
                                        width: '393px',
                                        padding: '16px 28px',
                                        borderRadius: '5px',
                                        background: '#FFFFFF',
                                        boxShadow: '0px 0px 11px 0px #00000040',
                                        borderLeft: '4px solid #1566B7',
                                        display: 'flex',
                                        alignItems: 'center',
                                        boxSizing: 'border-box',
                                        cursor: 'pointer',
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        y: y,
                                        zIndex: 2 + boxIndex
                                    }}
                                    whileHover={{
                                        scale: 1.02,
                                        boxShadow: '0px 4px 16px 0px #00000050',
                                        transition: { duration: 0.2 }
                                    }}
                                >
                                    <h3 className="font-['DM_Sans'] font-bold text-[20px] leading-[30px] text-[#142349] capitalize m-0">
                                        {state.name}
                                    </h3>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* Right Section - India Map */}
                <div className="flex items-center justify-center flex-1 w-full max-w-[400px] xl:max-w-none xl:w-auto">
                    <img
                        src="/Homepage/IndianMap.png"
                        alt="India Map"
                        className="w-full h-auto object-contain
                        xl:w-[490px] xl:h-[507.7977600097656px]"
                    />
                </div>
            </div>
        </section>
    );
};

export default PanMap;
