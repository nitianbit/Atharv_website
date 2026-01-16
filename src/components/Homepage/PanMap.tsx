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
            style={{
                width: '100%',
                padding: '80px 0',
                minHeight: '150vh',
                display: 'flex',
                justifyContent: 'center',
            }}
        >
            <div style={{
                width: '1290px',
                height: '569px',
                paddingLeft: '83px',
                paddingRight: '83px',
                paddingTop: '70px',
                paddingBottom: '70px',
                borderRadius: '20px',
                background: 'linear-gradient(126.19deg, #176EC6 21.84%, #0F58A1 78.16%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '97px',
                boxSizing: 'border-box',
                overflow: 'hidden',
                position: 'sticky',
                top: '10vh'
            }}>
                {/* Left Section */}
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '30px',
                    flex: '0 0 auto'
                }}>
                    {/* Heading */}
                    <h2 style={{
                        width: '550px',
                        fontFamily: "'Source Serif Pro', serif",
                        fontWeight: 600,
                        fontSize: '46px',
                        lineHeight: '58px',
                        letterSpacing: '0.92px',
                        textTransform: 'capitalize',
                        color: '#FFFFFF',
                        margin: 0
                    }}>
                        Pan-India Online Healthcare Services
                    </h2>

                    {/* States List - Upward Stacking Animation */}
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        position: 'relative',
                        height: '400px'
                    }}>
                        {states.map((state, index) => {
                            // First box is fixed
                            if (index === 0) {
                                return (
                                    <div
                                        key={index}
                                        style={{
                                            width: '393px',
                                            padding: '24px',
                                            borderRadius: '5px',
                                            background: '#FFFFFF',
                                            boxShadow: '0px 0px 11px 0px #00000040',
                                            borderLeft: '4px solid #1566B7',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: '10px',
                                            boxSizing: 'border-box',
                                            cursor: 'pointer',
                                            transition: 'all 0.3s ease',
                                            position: 'relative',
                                            zIndex: 1
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = 'translateY(-2px)';
                                            e.currentTarget.style.boxShadow = '0px 4px 16px 0px #00000050';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = 'translateY(0)';
                                            e.currentTarget.style.boxShadow = '0px 0px 11px 0px #00000040';
                                        }}
                                    >
                                        <h3 style={{
                                            fontFamily: "'DM Sans', sans-serif",
                                            fontWeight: 700,
                                            fontSize: '20px',
                                            lineHeight: '30px',
                                            letterSpacing: '0',
                                            textTransform: 'capitalize',
                                            color: '#142349',
                                            margin: 0
                                        }}>
                                            {state.name}
                                        </h3>
                                        <p style={{
                                            fontFamily: "'DM Sans', sans-serif",
                                            fontWeight: 300,
                                            fontSize: '18px',
                                            lineHeight: '31px',
                                            letterSpacing: '0',
                                            color: '#142349',
                                            margin: 0
                                        }}>
                                            {state.description}
                                        </p>
                                    </div>
                                );
                            }

                            // Boxes 2, 3, 4 move upward and stack
                            const boxIndex = index - 1; // 0, 1, 2 for boxes 2, 3, 4
                            
                            // Start positions (separated far apart)
                            const startPosition = 200 + (boxIndex * 100); // 200, 300, 400
                            
                            // End positions (stacked close together)
                            const endPosition = 180 + (boxIndex * 50); // 160, 170, 180
                            
                            // Move from separated to stacked as scroll progresses
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
                                        zIndex: 2 + boxIndex // z-index: 2, 3, 4 (increasing)
                                    }}
                                    whileHover={{
                                        scale: 1.02,
                                        boxShadow: '0px 4px 16px 0px #00000050',
                                        transition: { duration: 0.2 }
                                    }}
                                >
                                    <h3 style={{
                                        fontFamily: "'DM Sans', sans-serif",
                                        fontWeight: 700,
                                        fontSize: '20px',
                                        lineHeight: '30px',
                                        letterSpacing: '0',
                                        textTransform: 'capitalize',
                                        color: '#142349',
                                        margin: 0
                                    }}>
                                        {state.name}
                                    </h3>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* Right Section - India Map */}
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flex: '1 1 auto'
                }}>
                    <img
                        src="/Homepage/IndianMap.png"
                        alt="India Map"
                        style={{
                            width: '490px',
                            height: '507.7977600097656px',
                            objectFit: 'contain'
                        }}
                    />
                </div>
            </div>

            <style>{`
                @media (max-width: 1400px) {
                    section > div {
                        width: 95% !important;
                        max-width: 1290px !important;
                        height: auto !important;
                        padding: 60px 40px !important;
                        flex-direction: column !important;
                        gap: 50px !important;
                    }

                    section > div > div:first-child > h2 {
                        width: 100% !important;
                    }
                    
                    section > div > div:last-child > img {
                        width: 100% !important;
                        height: auto !important;
                        max-width: 490px !important;
                    }

                    section > div > div:first-child > div {
                        width: 100% !important;
                    }

                    section > div > div:first-child > div > div {
                        width: 100% !important;
                    }
                }

                @media (max-width: 768px) {
                    section > div {
                        padding: 40px 30px !important;
                        border-radius: 15px !important;
                    }

                    section > div > div:first-child > h2 {
                        font-size: 36px !important;
                        line-height: 44px !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default PanMap;
