const Callback = () => {
    return (
        <div className="w-full bg-white py-8 lg:py-12 px-4">
            <div className="mx-auto max-w-[1512px]">
                
                {/* Main Container */}
                <div className="relative flex items-center overflow-visible mx-auto 
                                min-h-[346px] 
                                lg:min-h-[380px] xl:min-h-[340px]
                                rounded-[20px] bg-[#1566B7] border-[3px] border-[#1566B7]
                                max-w-[1311px]">
                    
                    {/* Doctor Image - Overlapping (Moved Left on iPad Pro) */}
                    <div className="absolute hidden lg:block z-20
                                    lg:w-[550px] lg:h-[600px] lg:top-[-100px] lg:left-[-20px]
                                    xl:w-[531px] xl:h-[610px] xl:top-[-105px] xl:left-[65px]">
                        <img 
                            src="/Homepage/maledoctor.png" 
                            alt="Healthcare professional"
                            className="w-full h-full object-contain"
                        />
                    </div>

                    {/* Content Section */}
                    <div className="w-full lg:ml-auto flex flex-col p-8 
                                    lg:p-[50px] lg:pr-[50px] 
                                    xl:pr-[60px] xl:pl-[60px]
                                    lg:max-w-[550px] xl:max-w-[593px] 
                                    gap-[13px]">
                        
                        {/* Heading */}
                        <h2 className="font-['Source_Serif_Pro'] font-semibold capitalize text-white m-0
                                       text-[28px] leading-tight
                                       sm:text-[32px]
                                       lg:text-[42px] lg:leading-[121%] lg:tracking-[-0.02em]
                                       xl:text-[46px]">
                            Need healthcare help?<br/>
                            We'll call you back.
                        </h2>

                        {/* Description */}
                        <p className="font-['DM_Sans'] font-light text-white m-0
                                      text-base leading-relaxed
                                      lg:text-[17px] lg:leading-[28px]
                                      xl:text-[18px] xl:leading-[30px]">
                            Tell us briefly what you need — <span className="font-semibold">online doctor consultation, medicines, lab tests, or ambulance service</span>.
                        </p>

                        {/* Button */}
                        <button className="w-full max-w-[267px] h-[50px] rounded-[192px] px-[28px] py-[16px] 
                                          bg-white border border-[#1566B7] 
                                          shadow-[1px_6px_7.7px_0px_rgba(49,119,225,0.24)] 
                                          cursor-pointer flex items-center justify-center 
                                          hover:opacity-90 transition-all hover:shadow-xl">
                            <span className="font-['DM_Sans'] font-semibold text-[14px] lg:text-[16px] leading-[100%] uppercase text-[#142349] whitespace-nowrap">
                                REQUEST A CALL BACK
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Callback;
