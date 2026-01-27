"use client"

const MMUExperience = () => {
    return (
        <div className="w-full bg-white py-16 md:py-20 lg:py-24 px-6 md:px-10 lg:px-20 mb-8">
            <div className="max-w-[1400px] mx-auto">

                {/* Main Container with Blue Background */}
                <div className="relative bg-gradient-to-br from-[#1976D2] to-[#1565B8] 
                              rounded-[28px] md:rounded-[32px] lg:rounded-[40px] 
                              overflow-hidden
                              px-8 md:px-12 lg:px-16 xl:px-20
                              py-12 md:py-14 lg:py-16 xl:py-20 mb-12" >

                    {/* Decorative Background Circles */}
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] 
                                  bg-white/5 rounded-full blur-3xl 
                                  transform translate-x-1/3 -translate-y-1/3"></div>
                    <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] 
                                  bg-white/5 rounded-full blur-3xl"></div>

                    {/* Content Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-20 items-center relative z-10">

                        {/* Left Side - Text Content */}
                        <div className="space-y-5 md:space-y-6">
                            {/* Main Heading */}
                            <h2 className="font-['Source_Serif_4'] font-semibold text-white 
                                         text-[32px] md:text-[38px] lg:text-[44px] xl:text-[48px] 
                                         leading-[1.2]">
                                Experience & Reach
                            </h2>

                            {/* Description */}
                            <p className="font-['DM_Sans'] text-white text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] 
                                        leading-[1.7] font-normal">
                                Atharv Healthcare has experience supporting{' '}
                                <span className="font-semibold">structured healthcare programs across India</span>,
                                operating in urban, semi-urban, and remote regions.
                            </p>
                        </div>

                        {/* Right Side - Nurse Image with Frame */}
                        <div className="relative flex justify-center lg:justify-end">
                            {/* Image Frame Container */}
                            <div className="relative w-full max-w-[400px] lg:max-w-[450px] xl:max-w-[500px]">
                                {/* White Border Frame */}
                                <div className="relative rounded-[20px] md:rounded-[24px] lg:rounded-[28px] 
                                              border-[3px] md:border-[4px] border-white 
                                              overflow-hidden 
                                              shadow-[0px_8px_32px_rgba(0,0,0,0.15)]
                                              aspect-[4/5]">
                                    <img
                                        src="/MMU/Nurse.png"
                                        alt="Healthcare professional - Atharv Healthcare nurse with stethoscope"
                                        className="object-cover"
                                    />
                                </div>

                                {/* Decorative Oval Background (Optional) */}
                                <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                                              w-[110%] h-[110%] 
                                              bg-white/10 rounded-[30px] md:rounded-[35px] lg:rounded-[40px] 
                                              blur-xl">
                                                <img src="/MMU/OVAL.png" alt="oval" className="w-full h-full "/>
                                              </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default MMUExperience;
