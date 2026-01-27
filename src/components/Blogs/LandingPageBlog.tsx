const LandingPageBlog = () => {
    return (
        <div
            className="w-full relative overflow-hidden"
            style={{
                background: 'linear-gradient(228deg, #9ADDFC 14.6%, rgba(79, 197, 224, 0) 68.04%)',
            }}
        >
            <div className="lg:hidden w-full px-6 py-16 md:py-24 flex flex-col items-center text-center gap-6 md:gap-8">
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
                <div className="w-full flex justify-center lg:h-[360px] xl:h-[440px] 2xl:h-[508px]">
                    <div className="relative w-[1512px] h-[508px] origin-top transform lg:scale-[0.7] xl:scale-[0.85] 2xl:scale-100">

                        {/* Re-implementing EXACT Absolute Positioning for Inner Elements as requested to 'keep same' */}
                        <div className="absolute w-[763px] h-[229px] top-[199px] left-[399px]">
                            <h1 className="absolute top-0 left-0 w-full text-center font-['Source_Serif_Pro'] font-semibold text-[#011632] text-[60px] leading-[114%] tracking-[-0.02em]">
                                Insights & Updates from Atharv Healthcare
                            </h1>
                            <img
                                src="/Aboutus/LineStraight.png"
                                alt="line"
                                className="absolute left-[219px] top-[144px] w-[326px] h-[5px] object-contain"
                            />
                            <p className="absolute top-[169px] left-[12px] w-[706px] h-[60px] text-center font-['DM_Sans'] font-light text-[#3C4959] text-[18px] leading-[30px]">
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
