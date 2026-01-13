// import React from 'react';

const ThreeStep = () => {
    return (
        <div className="w-full bg-white">
            <div className="relative max-w-8xl mx-10">
                
                <div className="flex flex-col lg:flex-row relative">
                    
                    {/* Doctor Image - Highest Z-Index */}
                    <div className="w-full lg:w-[28%] relative z-50">
                        <img 
                            src="/Homepage/indian-male.png" 
                            alt="Healthcare Professional" 
                            className="w-full h-full object-cover object-top min-h-[500px]"
                        />
                    </div>

                    {/* Blue Section - Positioned Behind Image */}
                    <div className="w-full lg:w-[72%] lg:-ml-20 bg-gradient-to-br from-[#2873C8] via-[#3180D8] to-[#3B8BE8] px-8 sm:px-12 lg:pl-28 lg:pr-16 py-12 lg:py-20 relative z-10 rounded-r-2xl">
                        
                        {/* Heading */}
                        <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 leading-snug">
                            Book Healthcare Services Online<br/>
                            In 3 Simple Steps
                        </h2>

                        {/* Three Steps */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 max-w-5xl mx-auto relative">
                            
                            {/* Step 1 */}
                            <div className="text-center relative">
                                <h3 className="text-white text-[90px] sm:text-[110px] font-extrabold leading-none mb-6">1</h3>
                                <p className="text-white text-base sm:text-lg font-semibold leading-relaxed">
                                    Select The Service —<br/>
                                    Doctor Consultation,<br/>
                                    Pharmacy, Diagnostics<br/>
                                    Or Ambulance
                                </p>
                                <div className="hidden sm:block absolute top-12 -right-12 w-24 border-t-[3px] border-dotted border-white/50"></div>
                            </div>

                            {/* Step 2 */}
                            <div className="text-center relative">
                                <h3 className="text-white text-[90px] sm:text-[110px] font-extrabold leading-none mb-6">2</h3>
                                <p className="text-white text-base sm:text-lg font-semibold leading-relaxed">
                                    Share Basic Details And<br/>
                                    Preferred Time
                                </p>
                                <div className="hidden sm:block absolute top-12 -right-12 w-24 border-t-[3px] border-dotted border-white/50"></div>
                            </div>

                            {/* Step 3 */}
                            <div className="text-center">
                                <h3 className="text-white text-[90px] sm:text-[110px] font-extrabold leading-none mb-6">3</h3>
                                <p className="text-white text-base sm:text-lg font-semibold leading-relaxed">
                                    Confirm Booking — We<br/>
                                    Handle The Rest
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ThreeStep;
