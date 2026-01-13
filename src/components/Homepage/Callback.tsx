// import React from 'react';

const Callback = () => {
    return (
        <div className="w-full bg-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                
                {/* Main Container */}
                <div className="relative flex flex-col lg:flex-row items-center bg-gradient-to-r from-[#1E5BA8] via-[#2668B8] to-[#2E75C8] rounded-3xl overflow-visible shadow-2xl">
                    
                    {/* Left Side - Doctor Image (Overlapping) */}
                    <div className="w-full lg:w-[35%] relative z-20 -mb-12 lg:mb-0 lg:-mr-8">
                        <img 
                            src="/Homepage/maledoctor.png" 
                            alt="Healthcare professional ready to assist" 
                            className="w-full h-auto object-contain"
                        />
                    </div>

                    {/* Right Side - Content Section */}
                    <div className="w-full lg:w-[65%] relative z-10 px-8 sm:px-12 lg:px-16 lg:pl-20 py-12 lg:py-16">
                        
                        {/* Main Heading */}
                        <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                            Need Healthcare<br/>
                            Help? We'll Call You Back.
                        </h2>

                        {/* Description Text */}
                        <p className="text-white text-base sm:text-lg leading-relaxed mb-8">
                            Tell us briefly what you need — <strong className="font-bold">online doctor consultation, medicines, lab tests, or ambulance service</strong>.
                        </p>

                        {/* CTA Button */}
                        <button className="bg-white text-gray-900 font-bold text-sm sm:text-base px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 uppercase tracking-wide">
                            REQUEST A CALL BACK
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Callback;
