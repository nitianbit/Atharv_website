const ThreeStep = () => {
    return (
        <div className="w-full relative mx-auto mt-[50px] md:mt-[100px] xl:h-[538px] xl:max-w-[1550px]">
            {/* Unified Blue Gradient Background */}
            <div
                className="w-full h-full absolute inset-0 rounded-[20px] xl:rounded-none
                xl:w-[calc(100%-210px)] xl:left-[210px] xl:top-0"
                style={{
                    background: 'linear-gradient(126.19deg, #2B7FD8 21.84%, #4A96F0 78.16%)',
                    zIndex: 1
                }}
            ></div>

            {/* Doctor Image - Hidden on mobile/tablet, visible on desktop */}
            <img
                src="/Homepage/indian-male.png"
                alt="Doctor"
                className="hidden xl:block absolute object-contain z-10
                xl:w-[467px] xl:h-[657px] xl:-top-[90px] xl:left-0"
            />

            {/* Content Container */}
            <div
                className="relative z-20 w-full flex flex-col items-center justify-center py-10 px-4 gap-10
                xl:absolute xl:max-w-[1009px] xl:h-[412px] xl:left-[467px] xl:top-[75px] xl:gap-[56px] xl:py-0 xl:px-0"
            >
                {/* Title */}
                <div className="w-full max-w-[727px] text-center">
                    <h2
                        className="font-['Source_Serif_Pro'] font-semibold text-white
                        text-[32px] leading-tight
                        md:text-[40px]
                        xl:text-[46px] xl:leading-[100%] xl:tracking-[0.02em] xl:mb-[10px]"
                    >
                        Book healthcare services online <br className="hidden md:block" />
                        <span
                            className="font-['Source_Serif_Pro'] font-semibold text-white
                            text-[32px] leading-tight
                            md:text-[40px]
                            xl:text-[46px] xl:leading-[100%] xl:tracking-[0.02em]"
                        >
                            in 3 simple steps
                        </span>
                    </h2>
                </div>

                {/* Step Container */}
                <div
                    className="relative flex flex-col items-center w-full gap-10
                    md:flex-row md:justify-center md:gap-8
                    xl:max-w-[1009px] xl:h-[240px] xl:gap-[62px]"
                >
                    {/* Dashed Line Left - Desktop Only */}
                    <div
                        className="hidden xl:block absolute border-t-2 border-dashed border-[rgba(255,255,255,0.5)]
                        xl:w-[250px] xl:h-0 xl:top-[50px] xl:left-[180px]"
                    ></div>

                    {/* Dashed Line Right - Desktop Only */}
                    <div
                        className="hidden xl:block absolute border-t-2 border-dashed border-[rgba(255,255,255,0.5)]
                        xl:w-[250px] xl:h-0 xl:top-[50px] xl:right-[180px]"
                    ></div>

                    {/* Step 1 */}
                    <div className="relative flex flex-col items-center z-10 gap-4 xl:gap-[20px]">
                        <div
                            className="font-['DM_Sans'] font-black text-white text-center uppercase
                            text-[60px] leading-none
                            md:text-[80px]
                            xl:w-[320px] xl:h-[130px] xl:text-[100px] xl:leading-[100%]"
                        >
                            1
                        </div>
                        <div
                            className="font-['DM_Sans'] font-semibold text-white text-center
                            text-[16px] leading-snug max-w-[300px]
                            md:text-[18px]
                            xl:w-[232px] xl:h-[104px] xl:text-[20px] xl:leading-[120%]"
                        >
                            Select the service - doctor consultation, pharmacy, diagnostics or ambulance
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="relative flex flex-col items-center z-10 gap-4 xl:gap-[20px]">
                        <div
                            className="font-['DM_Sans'] font-black text-white text-center uppercase
                            text-[60px] leading-none
                            md:text-[80px]
                            xl:w-[320px] xl:h-[130px] xl:text-[100px] xl:leading-[100%]"
                        >
                            2
                        </div>
                        <div
                            className="font-['DM_Sans'] font-semibold text-white text-center
                            text-[16px] leading-snug max-w-[200px]
                            md:text-[18px]
                            xl:w-[232px] xl:h-[104px] xl:text-[20px] xl:leading-[120%]"
                        >
                            Share basic details and preferred time
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="relative flex flex-col items-center z-10 gap-4 xl:gap-[20px]">
                        <div
                            className="font-['DM_Sans'] font-black text-white text-center uppercase
                            text-[60px] leading-none
                            md:text-[80px]
                            xl:w-[320px] xl:h-[130px] xl:text-[100px] xl:leading-[100%]"
                        >
                            3
                        </div>
                        <div
                            className="font-['DM_Sans'] font-semibold text-white text-center
                            text-[16px] leading-snug max-w-[200px]
                            md:text-[18px]
                            xl:w-[232px] xl:h-[104px] xl:text-[20px] xl:leading-[120%]"
                        >
                            Confirm booking - we handle the rest
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ThreeStep;
