const Network = () => {
    return (
        <div className="w-full bg-white py-12 md:py-16 xl:py-16">
            {/* Overall Container */}
            <div
                className="w-full relative mx-auto flex flex-col items-center gap-10
                xl:block xl:w-[1550px] xl:h-[633px] xl:overflow-hidden xl:gap-0"
            >

                {/* Heading */}
                <h2
                    className="font-['Source_Serif_Pro'] font-semibold capitalize text-[#142349] text-center
                    text-3xl leading-tight w-full max-w-[600px] z-20
                    md:text-4xl
                    xl:absolute xl:w-[727px] xl:h-[58px] xl:top-0 xl:left-[393px] xl:text-[46px] xl:leading-[100%] xl:tracking-[0.02em] xl:max-w-none"
                >
                    A network you can rely on
                </h2>

                {/* Center Image */}
                <div
                    className="relative w-full max-w-[400px] aspect-square flex-shrink-0 z-10
                    md:max-w-[500px]
                    xl:absolute xl:w-[555px] xl:h-[555px] xl:top-[78px] xl:left-[478px] xl:max-w-none"
                >
                    <img
                        src="/Homepage/DoctorNetwork.png"
                        alt="Healthcare Network"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Background Color Section */}
                <div
                    className="hidden xl:block absolute w-full h-[277px] top-[217px] left-0 pointer-events-none"
                    style={{ background: 'rgba(49, 119, 225, 0.1)' }}
                />

                {/* Mobile Background (Optional adaptation) */}
                <div className="absolute inset-0 w-full h-full bg-[rgba(49,119,225,0.05)] -z-10 xl:hidden" />

                {/* Left Text Container */}
                <div
                    className="flex flex-col items-start gap-4 z-20 w-full max-w-[400px]
                    xl:absolute xl:w-[362px] xl:h-[153px] xl:top-[270px] xl:left-[100px] xl:gap-0"
                >
                    {/* Left Heading */}
                    <h3
                        className="font-['DM_Sans'] font-bold capitalize text-[#142349]
                        text-xl leading-none mb-2
                        xl:w-[216px] xl:h-[26px] xl:text-[20px] xl:mb-[7px]"
                    >
                        We work with:
                    </h3>

                    {/* Left List Items */}
                    <div className="flex flex-col gap-2 xl:gap-0 xl:block xl:w-[336px] xl:h-[120px] xl:pl-[26px] relative">
                        {[
                            "Verified doctors",
                            "Trusted diagnostic laboratories",
                            "Licensed pharmacy partners",
                            "Trained ambulance service providers"
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="flex items-center relative text-black
                                font-['DM_Sans'] font-light text-base leading-snug
                                xl:text-[18px] xl:leading-[30px] xl:mb-0"
                            >
                                <div className="w-[17px] h-[17px] mr-3 xl:absolute xl:left-[-26px] xl:top-[7px] xl:mr-0 flex-shrink-0">
                                    <img
                                        src="/Homepage/check.png"
                                        alt=""
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Text Container */}
                <div
                    className="flex flex-col items-start gap-4 z-20 w-full max-w-[400px]
                    xl:absolute xl:w-[325px] xl:h-[122px] xl:top-[289px] xl:left-[1105px] xl:gap-0"
                >
                    {/* Right Heading */}
                    <h3
                        className="font-['DM_Sans'] font-bold capitalize text-[#142349]
                        text-xl leading-none mb-2
                        xl:w-[234px] xl:h-[26px] xl:text-[20px] xl:mb-[6px]"
                    >
                        Add when available:
                    </h3>

                    {/* Right List Items */}
                    <div className="flex flex-col gap-2 xl:gap-0 xl:block xl:w-[299px] xl:h-[90px] xl:pl-[26px] relative">
                        {[
                            "NABL / ISO certifications",
                            "Number of cities served",
                            "Total patients supported"
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="flex items-center relative text-black
                                font-['DM_Sans'] font-light text-base leading-snug
                                xl:text-[18px] xl:leading-[30px] xl:mb-0"
                            >
                                <div className="w-[17px] h-[17px] mr-3 xl:absolute xl:left-[-26px] xl:top-[7px] xl:mr-0 flex-shrink-0">
                                    <img
                                        src="/Homepage/check.png"
                                        alt=""
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Network;
