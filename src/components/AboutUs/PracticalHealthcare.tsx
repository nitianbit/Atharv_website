const PracticalHealthcare = () => {
    return (
        <div className="w-full bg-white relative py-12 xl:py-16 overflow-hidden">
            {/* Overall Container - Responsive: Flex Col, Desktop: Fixed 1512px */}
            <div className="w-full flex flex-col gap-12 xl:block xl:w-[1512px] xl:h-[705px] xl:mx-auto xl:relative xl:gap-0">

                {/* Overall Text Content Top */}
                <div className="w-full px-4 flex flex-col items-center gap-4 xl:absolute xl:top-0 xl:left-[312px] xl:w-[888px] xl:h-[182px] xl:block xl:px-0 xl:gap-0">

                    {/* Main Heading */}
                    <h2 className="w-full text-center font-['Source_Serif_Pro'] font-semibold text-3xl md:text-4xl text-[#142349] capitalize leading-tight
                                   xl:absolute xl:top-0 xl:left-[81px] xl:w-[727px] xl:h-[116px] xl:text-[46px] xl:leading-[100%] xl:tracking-[0.02em] xl:m-0">
                        <span className="text-[#1566B7]">Building Practical Healthcare</span><br className="hidden xl:block" /> Access For Everyday Life
                    </h2>

                    {/* Subtitle */}
                    <p className="w-full max-w-2xl text-center font-['DM_Sans'] font-light text-base md:text-lg text-[#3C4959] leading-relaxed
                                  xl:absolute xl:top-[122px] xl:left-0 xl:w-[888px] xl:h-[60px] xl:text-[18px] xl:leading-[30px] xl:tracking-0 xl:max-w-none xl:m-0">
                        Atharv Healthcare delivers primary healthcare services across India, combining digital access with on-ground medical support.
                    </p>
                </div>

                {/* Bottom Section Wrapper (Image + Vision + Mission) */}
                <div className="w-full relative flex flex-col items-center gap-10 xl:absolute xl:top-[190px] xl:left-0 xl:w-[1512px] xl:h-[515px] xl:block xl:gap-0">

                    {/* Purple Background Box */}
                    <div className="hidden xl:block xl:absolute xl:top-[140px] xl:left-0 xl:w-[1512px] xl:h-[277px] xl:bg-[#3177E11A]" />
                    {/* Mobile Background: simplified or removed if it interferes, keeping simple for now or adding as needed */}

                    {/* Center Image */}
                    <div className="order-1 xl:order-none relative w-full navbar-hide md:max-w-md lg:max-w-lg xl:absolute xl:top-0 xl:left-[521px] xl:w-[499.69px] xl:h-[515px] xl:max-w-none">
                        <img
                            src="/Aboutus/AtharvLogo.png"
                            alt="Healthcare Network"
                            className="w-full h-auto object-contain mx-auto xl:w-full xl:h-full"
                        />
                    </div>

                    {/* Left Text - Our Vision */}
                    <div className="order-2 xl:order-none w-full max-w-lg px-6 flex flex-col gap-4 xl:absolute xl:top-[193px] xl:left-[100px] xl:w-[429px] xl:h-[154px] xl:block xl:px-0 xl:gap-0">
                        <h3 className="font-['DM_Sans'] font-bold text-xl md:text-2xl text-[#142349] capitalize text-center xl:text-left
                                      xl:absolute xl:top-0 xl:left-0 xl:w-[272px] xl:h-[26px] xl:text-[20px] xl:leading-[100%] xl:tracking-0 xl:m-0">
                            Our Vision
                        </h3>

                        <div className="flex flex-col gap-3 xl:absolute xl:top-[34px] xl:left-[26px] xl:w-[403px] xl:h-[120px] xl:block xl:gap-0">
                            {[
                                "Care is easier to reach",
                                "Medicines and diagnostics are closer to home",
                                "Timely medical help is accessible",
                                "Healthcare remains responsible and dependable"
                            ].map((text, i) => (
                                <div key={i} className="flex items-start gap-3 xl:block xl:relative xl:h-[30px] xl:gap-0 pl-2 xl:pl-0">
                                    <img src="/Homepage/check.png" alt="" className="w-5 h-5 mt-1 xl:absolute xl:w-[17px] xl:h-[17px] xl:left-[-26px] xl:top-[6px] xl:mt-0" />
                                    <span className="font-['DM_Sans'] font-light text-base text-black leading-relaxed xl:text-[18px] xl:leading-[30px]">{text}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Text - Our Mission */}
                    <div className="order-3 xl:order-none w-full max-w-lg px-6 flex flex-col gap-4 xl:absolute xl:top-[186px] xl:left-[1036px] xl:w-[455px] xl:h-[182px] xl:block xl:px-0 xl:gap-0">
                        <h3 className="font-['DM_Sans'] font-bold text-xl md:text-2xl text-[#142349] capitalize text-center xl:text-left
                                      xl:absolute xl:top-0 xl:left-0 xl:w-[208.76px] xl:h-[26px] xl:text-[20px] xl:leading-[100%] xl:tracking-0 xl:m-0">
                            Our Mission
                        </h3>

                        <div className="flex flex-col gap-3 xl:absolute xl:top-[32px] xl:left-[22.3px] xl:w-[450px] xl:h-[150px] xl:block xl:gap-0">
                            {[
                                "Simplify access to doctors, medicines and diagnostics",
                                "Bring essential care closer to homes and workplaces",
                                "Deliver ethical, compliant and dependable services",
                                "Support communities through outreach and awareness"
                            ].map((text, i) => (
                                <div key={i} className="flex items-start gap-3 xl:block xl:relative xl:h-[30px] xl:gap-0 pl-2 xl:pl-0">
                                    <img src="/Homepage/check.png" alt="" className="w-5 h-5 mt-1 xl:absolute xl:w-[17px] xl:h-[17px] xl:left-[-22.3px] xl:top-[6px] xl:mt-0" />
                                    <span className="font-['DM_Sans'] font-light text-base text-black leading-relaxed xl:text-[18px] xl:leading-[30px]">{text}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default PracticalHealthcare;
