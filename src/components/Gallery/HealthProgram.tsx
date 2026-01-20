const HealthProgram = () => {
    return (
        <div className="w-full bg-white py-12 xl:py-[80px] xl:pb-[120px] flex justify-center relative">
            <div className="w-full px-4 flex flex-col gap-8 xl:block xl:w-[1316px] xl:h-[805px] xl:px-0 xl:gap-0 xl:relative xl:mx-auto">

                {/* Header Section */}
                <div className="flex flex-col items-center gap-4 text-center xl:gap-[5px] xl:absolute xl:top-0 xl:left-[167px] xl:w-[983px] xl:h-[123px]">
                    <h2 className="font-['Source_Serif_Pro'] font-semibold capitalize text-[#142349] leading-tight
                                   text-3xl md:text-4xl
                                   xl:w-[983px] xl:h-[58px] xl:text-[46px] xl:leading-[100%] xl:tracking-[0.02em] xl:m-0">
                        Our <span className="text-[#1566B7]">Healthcare Programs</span> In Action
                    </h2>
                    <p className="font-['DM_Sans'] font-light text-black
                                  text-base md:text-lg leading-relaxed max-w-3xl
                                  xl:w-[983px] xl:h-[60px] xl:text-[18px] xl:leading-[30px] xl:tracking-0 xl:max-w-none xl:m-0">
                        Recent photographs from Atharv Healthcare's on-ground programs including CSR health camps, mobile medical unit services, workplace health initiatives, and community medical outreach across India.
                    </p>
                </div>

                {/* Images Section - Responsive Grid for Mobile, Absolute Collage for Desktop */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full
                                xl:block xl:absolute xl:top-[163px] xl:left-0 xl:w-[1316px] xl:h-[642px]">

                    {/* Image 4 - Bottom Left Small */}
                    <div className="rounded-[10px] overflow-hidden aspect-square w-full h-full xl:aspect-auto
                                    xl:w-[254px] xl:h-[254px] xl:absolute xl:top-[106px] xl:left-0">
                        <img src="/Gallery/4.png" alt="Healthcare Initiative" className="w-full h-full object-cover block" />
                    </div>

                    {/* Image 1 - Center Top Large */}
                    <div className="rounded-[10px] overflow-hidden aspect-[4/3] w-full h-full xl:aspect-auto
                                    xl:w-[444px] xl:h-[317px] xl:absolute xl:top-0 xl:left-[282px]">
                        <img src="/Gallery/1.png" alt="CSR Health Camp Speaker" className="w-full h-full object-cover block" />
                    </div>

                    {/* Image 2 - Right Top Small */}
                    <div className="rounded-[10px] overflow-hidden aspect-[3/4] w-full h-full xl:aspect-auto
                                    xl:w-[208.95px] xl:h-[254px] xl:absolute xl:top-[63px] xl:left-[756px]">
                        <img src="/Gallery/2.png" alt="Mobile Medical Unit" className="w-full h-full object-cover block" />
                    </div>

                    {/* Image 3 - Right Top Corner */}
                    <div className="rounded-[10px] overflow-hidden aspect-video w-full h-full xl:aspect-auto
                                    xl:w-[319px] xl:h-[171px] xl:absolute xl:top-[112px] xl:left-[993px]">
                        <img src="/Gallery/3.png" alt="Medical Equipment Testing" className="w-full h-full object-cover block" />
                    </div>

                    {/* Image 5 - Bottom Left Corner */}
                    <div className="rounded-[10px] overflow-hidden aspect-video w-full h-full xl:aspect-auto
                                    xl:w-[254px] xl:h-[155px] xl:absolute xl:top-[381px] xl:left-0">
                        <img src="/Gallery/5.png" alt="Healthcare Service Center" className="w-full h-full object-cover block" />
                    </div>

                    {/* Image 6 - Bottom Center Left */}
                    <div className="rounded-[10px] overflow-hidden aspect-square w-full h-full xl:aspect-auto
                                    xl:w-[352px] xl:h-[262px] xl:absolute xl:top-[347px] xl:left-[295px]">
                        {/* Note: Fix object-fit to cover for better responsive look if needed, kept fill/cover mix as per original intent */}
                        <img src="/Gallery/6.png" alt="Healthcare Program Event" className="w-full h-full object-cover block xl:object-fill xl:w-[50%]" />
                    </div>

                    {/* Image 8 - Bottom Center Right */}
                    <div className="rounded-[10px] overflow-hidden aspect-[3/2] w-full h-full xl:aspect-auto
                                    xl:w-[444px] xl:h-[295px] xl:absolute xl:top-[347px] xl:left-[519px]">
                        <img src="/Gallery/8.png" alt="Healthcare Workspace" className="w-full h-full object-cover block" />
                    </div>

                    {/* Image 7 - Bottom Right */}
                    <div className="rounded-[10px] overflow-hidden aspect-[4/3] w-full h-full xl:aspect-auto
                                    xl:w-[336px] xl:h-[246px] xl:absolute xl:top-[302px] xl:left-[976px]">
                        <img src="/Gallery/7.png" alt="Medical Registration Desk" className="w-full h-full object-cover block" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HealthProgram;
