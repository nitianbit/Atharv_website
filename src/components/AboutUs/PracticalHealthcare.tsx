const PracticalHealthcare = () => {
    return (
        <div className="w-full bg-white relative py-12 lg:py-16 overflow-hidden">
            {/* Overall Container - with proper scaling wrapper */}
            <div className="w-full lg:flex lg:justify-start lg:items-start">
                <div className="w-full flex flex-col gap-12 lg:block lg:relative lg:gap-0 lg:w-[1512px] lg:h-[705px] lg:transform lg:scale-[0.67] lg:origin-left xl:scale-[0.85] 2xl:scale-100">

                    {/* Overall Text Content Top */}
                    <div className="w-full px-4 flex flex-col items-center gap-4 lg:absolute lg:top-0 lg:left-[312px] lg:w-[888px] lg:h-[182px] lg:block lg:px-0 lg:gap-0">

                        {/* Main Heading */}
                        <h2 className="w-full text-center font-['Source_Serif_Pro'] font-semibold text-3xl md:text-4xl text-[#142349] capitalize leading-tight
                                       lg:absolute lg:top-0 lg:left-[81px] lg:w-[727px] lg:h-[116px] lg:text-[46px] lg:leading-[100%] lg:tracking-[0.02em] lg:m-0">
                            <span className="text-[#1566B7]">Building Practical Healthcare</span><br className="hidden lg:block" /> Access For Everyday Life
                        </h2>

                        {/* Subtitle */}
                        <p className="w-full max-w-2xl text-center font-['DM_Sans'] font-light text-base md:text-lg text-[#3C4959] leading-relaxed
                                      lg:absolute lg:top-[122px] lg:left-0 lg:w-[888px] lg:h-[60px] lg:text-[18px] lg:leading-[30px] lg:tracking-0 lg:max-w-none lg:m-0">
                            Atharv Healthcare delivers primary healthcare services across India, combining digital access with on-ground medical support.
                        </p>
                    </div>

                    {/* Bottom Section Wrapper */}
                    <div className="w-full relative flex flex-col items-center gap-10 lg:absolute lg:top-[190px] lg:left-0 lg:w-[1512px] lg:h-[515px] lg:block lg:gap-0">

                        {/* Purple Background Box */}
                        <div className="hidden lg:block lg:absolute lg:top-[140px] lg:left-0 lg:w-[1540px] lg:h-[277px] lg:bg-[#3177E11A]" />

                        {/* Center Image */}
                        <div className="order-1 lg:order-none relative w-full max-w-md md:max-w-lg lg:absolute lg:top-0 lg:left-[521px] lg:w-[499.69px] lg:h-[515px] lg:max-w-none">
                            <img
                                src="/Aboutus/AtharvLogo.png"
                                alt="Healthcare Network"
                                className="w-full h-auto object-contain mx-auto lg:w-full lg:h-full"
                            />
                        </div>

                        {/* Left Text - Our Vision */}
                        <div className="order-2 lg:order-none w-full max-w-lg px-6 flex flex-col gap-4 lg:absolute lg:top-[193px] lg:left-[100px] lg:w-[429px] lg:h-[154px] lg:block lg:px-0 lg:gap-0">
                            <h3 className="font-['DM_Sans'] font-bold text-xl md:text-2xl text-[#142349] capitalize text-center lg:text-left
                                          lg:absolute lg:top-0 lg:left-0 lg:w-[272px] lg:h-[26px] lg:text-[20px] lg:leading-[100%] lg:tracking-0 lg:m-0">
                                Our Vision
                            </h3>

                            <div className="flex flex-col gap-3 lg:absolute lg:top-[34px] lg:left-[26px] lg:w-[403px] lg:h-[120px] lg:block lg:gap-0">
                                {[
                                    "Care is easier to reach",
                                    "Medicines and diagnostics are closer to home",
                                    "Timely medical help is accessible",
                                    "Healthcare remains responsible and dependable"
                                ].map((text, i) => (
                                    <div key={i} className="flex items-start gap-3 lg:block lg:relative lg:h-[30px] lg:gap-0 pl-2 lg:pl-0">
                                        <img src="/Homepage/check.png" alt="" className="w-5 h-5 mt-1 lg:absolute lg:w-[17px] lg:h-[17px] lg:left-[-26px] lg:top-[6px] lg:mt-0" />
                                        <span className="font-['DM_Sans'] font-light text-base text-black leading-relaxed lg:text-[18px] lg:leading-[30px]">{text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Text - Our Mission */}
                        <div className="order-3 lg:order-none w-full max-w-lg px-6 flex flex-col gap-4 lg:absolute lg:top-[186px] lg:left-[1036px] lg:w-[455px] lg:h-[182px] lg:block lg:px-0 lg:gap-0">
                            <h3 className="font-['DM_Sans'] font-bold text-xl md:text-2xl text-[#142349] capitalize text-center lg:text-left
                                          lg:absolute lg:top-0 lg:left-0 lg:w-[208.76px] lg:h-[26px] lg:text-[20px] lg:leading-[100%] lg:tracking-0 lg:m-0">
                                Our Mission
                            </h3>

                            <div className="flex flex-col gap-3 lg:absolute lg:top-[32px] lg:left-[22.3px] lg:w-[450px] lg:h-[150px] lg:block lg:gap-0">
                                {[
                                    "Simplify access to doctors, medicines and diagnostics",
                                    "Bring essential care closer to homes and workplaces",
                                    "Deliver ethical, compliant and dependable services",
                                    "Support communities through outreach and awareness"
                                ].map((text, i) => (
                                    <div key={i} className="flex items-start gap-3 lg:block lg:relative lg:h-[30px] lg:gap-0 pl-2 lg:pl-0">
                                        <img src="/Homepage/check.png" alt="" className="w-5 h-5 mt-1 lg:absolute lg:w-[17px] lg:h-[17px] lg:left-[-22.3px] lg:top-[6px] lg:mt-0" />
                                        <span className="font-['DM_Sans'] font-light text-base text-black leading-relaxed lg:text-[18px] lg:leading-[30px]">{text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default PracticalHealthcare;
