import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const steps = [
    {
        id: 1,
        text: "Select the service - doctor consultation, pharmacy, diagnostics or ambulance"
    },
    {
        id: 2,
        text: "Share basic details and preferred time"
    },
    {
        id: 3,
        text: "Confirm booking - we handle the rest"
    }
];

const ThreeStep = () => {
    const [currentStep, setCurrentStep] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentStep((prev) => (prev + 1) % steps.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="w-full relative mx-auto mt-[50px] md:mt-[100px] 
            lg:h-[450px] lg:w-full lg:max-w-8xl
            xl:h-[538px] xl:w-full xl:max-w-8xl">
            {/* Unified Blue Gradient Background */}
            <div
                className="w-full h-full absolute inset-0 rounded-[20px] 
                lg:rounded-none lg:w-[calc(100%-100px)] lg:left-[150px] lg:top-0
                xl:rounded-none xl:w-[calc(100%-210px)] xl:left-[210px] xl:top-0"
                style={{
                    background: 'linear-gradient(126.19deg, #2B7FD8 21.84%, #4A96F0 78.16%)',
                    zIndex: 1
                }}
            ></div>

            {/* Doctor Image - Hidden on mobile/tablet, visible on lg and xl */}
            <img
                src="/Homepage/indian-male.png"
                alt="Doctor"
                className="hidden 
                lg:block lg:absolute lg:object-contain lg:z-10 lg:w-[400px] lg:h-[565px] lg:-top-[90px] lg:left-0
                xl:block xl:absolute xl:object-contain xl:z-10 xl:w-[467px] xl:h-[657px] xl:-top-[90px] xl:left-0"
            />

            {/* Content Container */}
            <div
                className="relative z-20 w-full flex flex-col items-center justify-center px-4 py-8
                lg:absolute lg:max-w-5xl lg:h-[350px] lg:left-[200px] lg:top-[50px] lg:gap-[12px] lg:py-0 lg:px-0
                xl:absolute xl:max-w-6xl xl:h-[412px] xl:left-[350px] xl:top-[75px] xl:gap-[16px] xl:py-0 xl:px-0"
            >
                {/* Title */}
                <div className="w-full text-center
                    lg:max-w-[600px]
                    xl:max-w-[727px]">
                    <h2
                        className="font-['Source_Serif_Pro'] font-semibold text-white
                        text-[32px] leading-tight
                        md:text-[40px]
                        lg:text-[36px] lg:leading-[100%] lg:tracking-[0.02em] lg:mb-[8px]
                        xl:text-[46px] xl:leading-[100%] xl:tracking-[0.02em] xl:mb-[10px]"
                    >
                        Book healthcare services online <br className="hidden md:block" />
                        <span
                            className="font-['Source_Serif_Pro'] font-semibold text-white
                            text-[32px] leading-tight
                            md:text-[40px]
                            lg:text-[36px] lg:leading-[100%] lg:tracking-[0.02em]
                            xl:text-[46px] xl:leading-[100%] xl:tracking-[0.02em]"
                        >
                            in 3 simple steps
                        </span>
                    </h2>
                </div>

                {/* Animated Step Container */}
                <div className="relative flex flex-col items-center justify-center w-full min-h-[300px] 
                    lg:h-[200px] lg:min-h-0
                    xl:h-[240px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={steps[currentStep].id}
                            className="flex flex-col items-center 
                                gap-4 
                                lg:gap-[16px]
                                xl:gap-[20px]"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.3 } }}
                            transition={{ duration: 0.5 }}
                        >
                            {/* Step Number */}
                            <motion.div
                                className="font-['DM_Sans'] font-black text-white text-center uppercase
                                text-[60px] leading-none
                                md:text-[80px]
                                lg:text-[80px] lg:leading-[100%]
                                xl:text-[100px] xl:leading-[100%]"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                {steps[currentStep].id}
                            </motion.div>

                            {/* Step Description */}
                            <motion.div
                                className="font-['DM_Sans'] font-semibold text-white text-center
                                text-[16px] leading-snug max-w-[500px]
                                md:text-[18px]
                                lg:text-[17px] lg:leading-[120%] lg:max-w-[520px]
                                xl:text-[20px] xl:leading-[120%] xl:max-w-[600px]"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.8 }}
                            >
                                {steps[currentStep].text}
                            </motion.div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default ThreeStep;
