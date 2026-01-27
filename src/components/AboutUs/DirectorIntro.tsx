const DirectorIntro = () => {
    return (
        <div className="w-full bg-white relative overflow-hidden py-16 lg:py-0">

            {/* MOBILE & TABLET VIEW (< lg) */}
            <div className="lg:hidden flex flex-col items-center px-4 relative z-10">
                {/* Background Shape Detail */}
                <div className="absolute top-[-40px] left-[-40px] w-[200px] opacity-40 z-0 pointer-events-none">
                    <img src="/Aboutus/Box.png" alt="bg" className="w-full h-full object-contain" />
                </div>

                {/* Director Image */}
                <div className="relative z-0 mt-4">
                    <img
                        src="/Aboutus/Director.png"
                        alt="Pankaj Kumar Singh"
                        className="w-[280px] sm:w-[340px] h-[360px] sm:h-[420px] object-cover object-top rounded-t-[40px] shadow-sm"
                    />
                </div>

                {/* Content Card (Overlapping) */}
                <div className="relative z-10 w-full max-w-md bg-[#E5F2FF] rounded-[30px] p-8 pb-10 -mt-16 shadow-lg text-center">
                    <h2 className="font-['DM_Sans'] font-bold text-2xl sm:text-3xl text-[#1566B7] capitalize mb-2">
                        Pankaj Kumar Singh
                    </h2>
                    <p className="font-['DM_Sans'] font-medium text-lg text-[#142349] mb-4">
                        (Director)
                    </p>
                    <p className="font-['DM_Sans'] font-light text-base sm:text-lg text-[#142349] leading-relaxed">
                        Leads strategic direction, service expansion and quality assurance. Focuses on building reliable healthcare systems and strengthening partnerships. Leads strategic direction, service expansion and quality assurance.
                    </p>
                </div>
            </div>

            {/* DESKTOP & IPAD PRO VIEW (lg+) */}
            <div className="hidden lg:block w-full overflow-hidden bg-white">
                <div className="w-full flex lg:justify-start xl:justify-center h-[550px] 2xl:h-[646px]">
                    <div className="relative w-[1524px] h-[645.04px] origin-top scale-[0.85] xl:scale-[0.85] 2xl:scale-100 lg:-ml-32 xl:ml-0">
                        
                        {/* Right Text Box Background */}
                        <div className="absolute top-[170px] left-[356.43px] w-[1052.57px] h-[384px] rounded-[30px] bg-[#E5F2FF] z-10" />

                        {/* Blue Organic Shape */}
                        <div className="absolute top-[177px] left-0 w-[703.62px] h-[467.74px] z-20">
                            <img
                                src="/Aboutus/Box.png"
                                alt="background"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Doctor Image */}
                        <div className="absolute top-[15px] left-[132.92px] w-[465.63px] h-[645.04px] z-30">
                            <img
                                src="/Aboutus/Director.png"
                                alt="Pankaj Kumar Singh"
                                className="w-full h-full object-cover rounded-none"
                            />
                        </div>

                        {/* Text Content */}
                        <div className="absolute top-[243px] left-[700px] w-[557.3px] h-[223px] z-40 text-left">
                            <h2 className="font-['DM_Sans'] font-bold text-[#1566B7] capitalize text-[20px] leading-[121%] tracking-[-0.02em] w-[388px] h-[24px] mb-[10px]">
                                Pankaj Kumar Singh
                            </h2>
                            <p className="font-['DM_Sans'] font-light text-[#142349] text-[18px] leading-[30px] w-[542px] h-[30px] mb-[9px]">
                                (Director)
                            </p>
                            <p className="font-['DM_Sans'] font-light text-[#142349] text-[18px] leading-[30px] w-[542px] h-[150px]">
                                Leads strategic direction, service expansion and quality assurance. Focuses on building reliable healthcare systems and strengthening partnerships. Leads strategic direction, service expansion and quality assurance. Focuses on building reliable healthcare systems and strengthening partnerships.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DirectorIntro;
