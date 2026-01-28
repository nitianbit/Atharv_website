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
        let timeoutId: any;

        const showNotifications = () => {
            setIsVisible(true);
            // Hide after 6 seconds
            timeoutId = setTimeout(() => {
                setIsVisible(false);
            }, 6000);
        };

        // Show immediately
        showNotifications();

        const notificationCycle = setInterval(showNotifications, 10000); // Total cycle: 6s visible + 4s hidden

        return () => {
            clearInterval(notificationCycle);
            clearTimeout(timeoutId);
        };
    }, []);

    // Variants for parent container
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.4, // 0.2s delay between each notification
                delayChildren: 0.2
            }
        },
        exit: {
            opacity: 1,
            transition: {
                staggerChildren: 0.4,
                staggerDirection: 1
            }
        }
    };

    // Variants for individual notification cards
    const notificationVariants: Variants = {
        hidden: {
            y: 140, // Reduced from 180 to 140 to stay within bottom-36 (144px) buffer and prevent scrollbar toggle
            opacity: 0
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 2.4, // Slower animation
                ease: [0.25, 0.1, 0.25, 1], // Smooth ease curve
                opacity: {
                    duration: 2.4, // Fade in while sliding
                    ease: "easeOut"
                }
            }
        },
        exit: {
            y: -140,
            opacity: 0,
            transition: {
                duration: 2.4, // Slow slide up exit
                ease: [0.42, 0, 0.58, 1], // Smooth ease in-out
                opacity: {
                    duration: 2.4, // Fade out while sliding up
                    ease: "easeIn"
                }
            }
        }
    };
    return (
        <div className="w-full min-h-screen flex justify-center overflow-x-hidden bg-white relative">
            <div className="w-full px-6 py-12 md:px-12 lg:px-20 xl:px-[100px] flex flex-col lg:flex-row items-center justify-between gap-12 bg-[linear-gradient(228deg,#9ADDFC_14.6%,rgba(79,197,224,0)_68.04%)] overflow-hidden">
                {/* Text Content */}
                <div className="w-full lg:w-1/2 space-y-6 md:space-y-8 z-10 text-center lg:text-left pt-24 md:pt-28">
                    <h1 className="font-['Source_Serif_4'] font-semibold text-4xl md:text-5xl lg:text-[52px] xl:text-[60px] text-[#142349] leading-tight capitalize">
                        <span className="text-[#1566B7]">Building Trusted Healthcare </span>
                        Access for India Since 2017
                    </h1>

                    <p className="font-['DM_Sans'] text-[#142349] text-base sm:text-lg md:text-xl lg:text-[18px] leading-relaxed md:leading-[30px] font-light max-w-xl mx-auto lg:mx-0">
                        With <span className="font-semibold">7+ years of experience, Atharv Healthcare</span> delivers dependable primary healthcare services — online doctor consultations, genuine medicines, lab tests at home and ambulance assistance across India.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
                        <button className="flex items-center justify-center gap-[10px] w-full sm:w-auto bg-[#1566B7] text-white px-8 py-4 rounded-full font-['DM_Sans'] font-semibold text-base uppercase shadow-[1px_6px_7.7px_0px_#3177E13D] hover:opacity-90 transition-opacity whitespace-nowrap">
                            Consult Doctor Online
                        </button>
                        <button className="flex items-center justify-center gap-[10px] w-full sm:w-auto bg-white border border-[#1566B7] text-[#142349] px-8 py-4 rounded-full font-['DM_Sans'] font-semibold text-base uppercase shadow-[1px_6px_7.7px_0px_#3177E13D] hover:bg-gray-50 transition-colors whitespace-nowrap">
                            Order Medicines Online
                        </button>
                    </div>
                </div>

                {/* Hero Image */}
                <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0 xl:top-16">
                    <div className="relative w-full max-w-[400px] md:max-w-[500px] lg:max-w-[600px] xl:max-w-[600px] aspect-square">
                        <img
                            src="/Homepage/LandingPage.png"
                            alt="Doctor"
                            className="w-full h-full object-contain"
                        />
                    </div>
                </div>
            </div>

            {/* Notifications */}
            <div className="absolute bottom-50 right-130 lg:bottom-130 lg:right-60 xl:bottom-36 xl:right-[35%] hidden md:block z-20">
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
                                    <div
                                        className="bg-white rounded-[12px] shadow-[0px_4px_20px_rgba(0,0,0,0.15)] flex items-center gap-3 px-3 border border-gray-100 box-border"
                                        style={{ width: '227px', height: '49px' }}
                                    >
                                        <div className="w-[29px] h-[29px] bg-[#1566B7] rounded-[8px] flex items-center justify-center flex-shrink-0">
                                            <img
                                                src={notification.icon}
                                                alt="Notification Icon"
                                                className="w-[16px] h-[16px] object-contain"
                                            />
                                        </div>
                                        <div className="flex flex-col justify-center">
                                            <h3 className="font-['DM_Sans'] font-semibold text-[10px] leading-[12px] text-[#142349] m-0 whitespace-nowrap">
                                                {notification.title}
                                            </h3>
                                            <p className="font-['DM_Sans'] font-normal text-[8px] leading-[10px] text-[#142349] m-0 mt-[2px]">
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
