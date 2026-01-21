"use client"

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Variants } from 'framer-motion';

const LandingPage = () => {
    const [isVisible, setIsVisible] = useState(false);

    const notifications = [
        {
            id: 1,
            icon: '/Homepage/Not1.png',
            title: 'Online Doctor Consultation',
            subtitle: 'Booked Successfully'
        },
        {
            id: 2,
            icon: '/Homepage/Not2.png',
            title: 'Medicine Order Confirmed',
            subtitle: 'For Home Delivery'
        }
    ];

    useEffect(() => {
        const notificationCycle = setInterval(() => {
            setIsVisible(true);

            // Hide after 4 seconds
            setTimeout(() => {
                setIsVisible(false);
            }, 5000);

        }, 9000); // Total cycle: 4s visible + 3s hidden

        return () => clearInterval(notificationCycle);
    }, []);

    // Variants for parent container
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3, // 0.2s delay between each notification
                delayChildren: 0.2
            }
        },
        exit: {
            opacity: 1,
            transition: {
                staggerChildren: 0.25,
                staggerDirection: 1
            }
        }
    };

    // Variants for individual notification cards
    const notificationVariants: Variants = {
        hidden: {
            y: 180,
            opacity: 0
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 2.2, // Slower animation
                ease: [0.25, 0.1, 0.25, 1], // Smooth ease curve
                opacity: {
                    duration: 2.2, // Fade in while sliding
                    ease: "easeOut"
                }
            }
        },
        exit: {
            y: -180,
            opacity: 0,
            transition: {
                duration: 1.8, // Slow slide up exit (was 1s)
                ease: [0.42, 0, 0.58, 1], // Smooth ease in-out
                opacity: {
                    duration: 1.8, // Fade out while sliding up
                    ease: "easeIn"
                }
            }
        }
    };
    return (
        <div className="w-full min-h-screen flex justify-center overflow-x-hidden bg-white relative">
            {/* Responsive View (Mobile to Laptop) */}
            <div className="xl:hidden w-full px-6 py-12 flex flex-col lg:flex-row lg:items-center lg:justify-between lg:px-20 gap-12 bg-[linear-gradient(228deg,#9ADDFC_14.6%,rgba(79,197,224,0)_68.04%)]">
                <div className="space-y-8 max-w-2xl mx-auto lg:mx-0 lg:max-w-xl">
                    <h1 className="font-['Source_Serif_4'] font-semibold text-4xl md:text-5xl lg:text-[56px] text-[#142349] leading-tight capitalize">
                        <span className="text-[#1566B7]">Building Trusted Healthcare </span>
                        Access for India Since 2017
                    </h1>

                    <p className="font-['DM_Sans'] text-[#142349] text-lg leading-[30px] font-light">
                        With <span className="font-semibold">7+ years of experience, Atharv Healthcare</span> delivers dependable primary healthcare services — online doctor consultations, genuine medicines, lab tests at home and ambulance assistance across India.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <button className="flex items-center justify-center gap-[10px] w-full sm:w-auto bg-[#1566B7] text-white px-7 py-4 rounded-[192px] font-['DM_Sans'] font-semibold text-base uppercase shadow-[1px_6px_7.7px_0px_#3177E13D] hover:opacity-90 transition-opacity whitespace-nowrap">
                            Consult Doctor Online
                        </button>
                        <button className="flex items-center justify-center gap-[10px] w-full sm:w-auto bg-white border border-[#1566B7] text-[#142349] px-7 py-4 rounded-[192px] font-['DM_Sans'] font-semibold text-base uppercase shadow-[1px_6px_7.7px_0px_#3177E13D] hover:bg-gray-50 transition-colors whitespace-nowrap">
                            Order Medicines Online
                        </button>
                    </div>
                </div>

                <div className="relative w-full max-w-[500px] lg:max-w-[600px] aspect-square mx-auto lg:mx-0 mt-8 lg:mt-0">
                    <img src="/Homepage/LandingPage.png" alt="Doctor" className="w-full h-full object-contain sm:object-cover" />
                </div>
            </div>

            {/* Desktop View (XL+) */}
            <div className="hidden xl:block relative shrink-0 text-left"
                style={{
                    width: '100%',
                    maxWidth: '1512.5px',
                    height: '768px',
                    background: 'linear-gradient(228deg, #9ADDFC 14.6%, rgba(79, 197, 224, 0) 68.04%)',
                }}
            >
                <div className="absolute flex flex-col gap-[26px]"
                    style={{
                        width: '90%',
                        maxWidth: '630px',
                        height: 'auto',
                        top: '254px',
                        left: '102px',
                    }}
                >
                    <h1 className="font-['Source_Serif_4'] font-semibold text-[#142349] capitalize"
                        style={{
                            width: '100%',
                            maxWidth: '620px',
                            fontSize: '60px',
                            lineHeight: '114%',
                            letterSpacing: '-0.02em',
                        }}
                    >
                        <span className="text-[#1566B7]">Building Trusted Healthcare </span>Access for India Since 2017
                    </h1>

                    <div className="font-['DM_Sans'] text-[#142349]"
                        style={{
                            width: '100%',
                            maxWidth: '630px',
                            height: 'auto',
                            fontSize: '18px',
                            lineHeight: '30px',
                            fontWeight: 300,
                        }}
                    >
                        With <span className="font-semibold" style={{ fontWeight: 600 }}>7+ years of experience, Atharv Healthcare</span> delivers dependable primary healthcare services — online doctor consultations, genuine medicines, lab tests at home and ambulance assistance across India.
                    </div>

                    <div className="flex gap-[18px]"
                        style={{
                            width: '553px',
                            height: '50px',
                        }}
                    >
                        <button className="flex items-center justify-center gap-[10px] bg-[#1566B7] text-white rounded-[192px] hover:opacity-95 transition-opacity"
                            style={{
                                width: '268px',
                                height: '50px',
                                padding: '16px 28px',
                                boxShadow: '1px 6px 7.7px 0px #3177E13D',
                                fontFamily: 'DM Sans',
                                fontWeight: 600,
                                fontSize: '16px',
                                lineHeight: '100%',
                                textTransform: 'uppercase',
                                cursor: 'pointer',
                            }}
                        >
                            Consult Doctor Online
                        </button>

                        <button className="flex items-center justify-center gap-[10px] bg-white border border-[#1566B7] text-[#142349] rounded-[192px] hover:bg-gray-50 transition-colors"
                            style={{
                                width: '267px',
                                height: '50px',
                                padding: '16px 28px',
                                boxShadow: '1px 6px 7.7px 0px #3177E13D',
                                fontFamily: 'DM Sans',
                                fontWeight: 600,
                                fontSize: '16px',
                                lineHeight: '100%',
                                textTransform: 'uppercase',
                                cursor: 'pointer',
                            }}
                        >
                            Order Medicines Online
                        </button>
                    </div>
                </div>

                <div className="absolute"
                    style={{
                        width: '618px',
                        height: '618px',
                        top: '138px',
                        left: '818px',
                        borderWidth: '0px',
                        borderColor: '#4C5D87',
                        borderStyle: 'solid',
                    }}
                >
                    <img src="/Homepage/LandingPage.png" alt="Doctor" className="w-full h-full object-cover" />
                </div>
            </div>

            <div className="absolute bottom-36 right-96 hidden md:block">
                <AnimatePresence mode="wait">
                    {isVisible && (
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="flex flex-col gap-3"
                        >
                            {notifications.map((notification) => (
                                <motion.div
                                    key={notification.id}
                                    variants={notificationVariants}
                                >
                                    <div className="bg-white rounded-[16px] shadow-[0px_4px_20px_rgba(0,0,0,0.15)] 
                                                    flex items-center gap-4 p-4 pr-6 min-w-[320px] border border-gray-100">
                                        {/* Icon */}
                                        <div className="w-[48px] h-[48px] bg-[#1566B7] rounded-[12px] flex items-center justify-center flex-shrink-0">
                                            <img
                                                src={notification.icon}
                                                alt="Notification Icon"
                                                className="w-[28px] h-[28px] object-contain"
                                            />
                                        </div>

                                        {/* Text Content */}
                                        <div className="flex flex-col">
                                            <h3 className="font-['DM_Sans'] font-semibold text-[15px] leading-[20px] text-[#142349] m-0">
                                                {notification.title}
                                            </h3>
                                            <p className="font-['DM_Sans'] font-normal text-[14px] leading-[18px] text-[#142349] m-0 mt-1">
                                                {notification.subtitle}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default LandingPage;
