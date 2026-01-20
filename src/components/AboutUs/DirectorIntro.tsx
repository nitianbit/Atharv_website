const DirectorIntro = () => {
    return (
        <div className="w-full bg-white relative overflow-hidden py-12 xl:py-0">
            {/* Overall Container - Responsive: Flex Col, Desktop: Fixed 1524px */}
            <div className="w-full flex flex-col items-center xl:block xl:w-[1524px] xl:h-[645.04px] xl:mx-auto xl:relative">

                {/* Right Text Box Background - Desktop Only (recreated/modified for mobile if needed, but usually better as a container on mobile) */}
                <div className="hidden xl:block xl:absolute xl:top-[170px] xl:left-[356.43px] xl:w-[1052.57px] xl:h-[384px] xl:rounded-[30px] xl:bg-[#E5F2FF] xl:z-10" />

                {/* Mobile Text Box Background Container - Visible only on mobile/tablet */}
                <div className="w-full max-w-3xl bg-[#E5F2FF] rounded-[30px] p-8 pb-12 mt-48 relative z-0 xl:hidden">
                    {/* Placeholder for content to be injected via absolute positioning relative to this or just flow content */}
                </div>

                {/* Blue Organic Shape - Box Image */}
                <div className="absolute top-[100px] -left-20 w-[300px] opacity-50 
                                xl:opacity-100 xl:top-[177px] xl:left-0 xl:w-[703.62px] xl:h-[467.74px] xl:z-20">
                    <img
                        src="/Aboutus/Box.png"
                        alt="background"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Doctor Image - Indian Men */}
                <div className="relative z-30 -mb-[400px] w-[280px] h-[380px] sm:w-[350px] sm:h-[480px] 
                                xl:mb-0 xl:absolute xl:top-[15px] xl:left-[132.92px] xl:w-[465.63px] xl:h-[645.04px]">
                    <img
                        src="/Aboutus/Director.png"
                        alt="Pankaj Kumar Singh"
                        className="w-full h-full object-cover rounded-b-3xl xl:rounded-none"
                    />
                </div>

                {/* Text Content */}
                <div className="relative z-40 px-6 pt-[80px] pb-12 flex flex-col items-center text-center
                                xl:items-start xl:text-left xl:p-0 xl:absolute xl:top-[243px] xl:left-[763.09px] xl:w-[557.3px] xl:h-[223px] xl:z-40">

                    {/* Mobile Background Wrapper to simulate the Desktop Box */}
                    <div className="xl:hidden absolute inset-0 bg-[#E5F2FF] rounded-[30px] -z-10 translate-y-[20px]" />

                    {/* Director Name */}
                    <h2 className="font-['DM_Sans'] font-bold text-2xl md:text-3xl text-[#1566B7] capitalize mb-3
                                   xl:text-[20px] xl:leading-[121%] xl:tracking-[-0.02em] xl:w-[388px] xl:h-[24px] xl:mb-[10px] xl:m-0">
                        Pankaj Kumar Singh
                    </h2>

                    {/* Director Title */}
                    <p className="font-['DM_Sans'] font-light text-lg text-[#142349] mb-4
                                  xl:text-[18px] xl:leading-[30px] xl:w-[542px] xl:h-[30px] xl:mb-[9px] xl:m-0">
                        (Director)
                    </p>

                    {/* Description Text */}
                    <p className="font-['DM_Sans'] font-light text-base md:text-lg text-[#142349] leading-relaxed max-w-xl
                                  xl:text-[18px] xl:leading-[30px] xl:w-[542px] xl:h-[150px] xl:max-w-none xl:m-0">
                        Leads strategic direction, service expansion and quality assurance. Focuses on building reliable healthcare systems and strengthening partnerships. Leads strategic direction, service expansion and quality assurance. Focuses on building reliable healthcare systems and strengthening partnerships.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default DirectorIntro;
