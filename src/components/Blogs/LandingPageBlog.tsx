const LandingPageBlog = () => {
    return (
        <div
            className="w-full relative overflow-hidden lg:pt-6 xl:pt-0"
            style={{
                background: 'linear-gradient(228deg, #9ADDFC 14.6%, rgba(79, 197, 224, 0) 68.04%)',
            }}
        >
            <div className="lg:hidden w-full min-h-[50vh] px-6 flex flex-col items-center justify-center text-center gap-6 md:gap-8 pt-10 md:pt-15 lg:pt-30">
                <h1 className="font-['Source_Serif_Pro'] font-semibold text-[#011632] leading-tight text-3xl sm:text-4xl md:text-5xl">
                    Insights & Updates from Atharv Healthcare
                </h1>

                <img
                    src="/Aboutus/LineStraight.png"
                    alt="line"
                    className="w-[180px] sm:w-[240px] md:w-[300px] h-auto object-contain"
                />

                <p className="font-['DM_Sans'] font-light text-[#3C4959] leading-relaxed text-base sm:text-lg md:text-xl max-w-2xl">
                    Industry insights on occupational health, mobile healthcare delivery, CSR initiatives, and preventive healthcare in India.
                </p>
            </div>

            <div className="hidden lg:block w-full overflow-hidden">
                {/* Container Heights adjusted for scale */}
                <div className="w-full flex justify-center items-center lg:h-[360px] xl:h-[440px] 2xl:h-[508px]">
                    <div className="relative w-[1512px] h-[508px] origin-center transform lg:scale-[0.7] xl:scale-[0.85] 2xl:scale-100">

                        {/* Centered Content */}
                        <div className="absolute w-[763px] h-[229px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-between">
                            <h1 className="text-center font-['Source_Serif_Pro'] font-semibold text-[#011632] text-[60px] leading-[114%] tracking-[-0.02em]">
                                Insights & Updates from Atharv Healthcare
                            </h1>
                            <img
                                src="/Aboutus/LineStraight.png"
                                alt="line"
                                className="w-[326px] h-[5px] object-contain my-6"
                            />
                            <p className="w-[706px] text-center font-['DM_Sans'] font-light text-[#3C4959] text-[18px] leading-[30px]">
                                Industry insights on occupational health, mobile healthcare delivery, CSR initiatives, and preventive healthcare in India.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPageBlog;
