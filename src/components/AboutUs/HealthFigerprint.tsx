const HealthFigerprint = () => {
    return (
        <div className="w-full relative overflow-hidden bg-white py-12 lg:py-[80px] flex justify-center items-center">
            {/* Overall Container */}
            <div className="w-full flex flex-col items-center bg-[#3177E11A] rounded-[30px] p-6 lg:p-12 lg:w-[1305px] lg:h-[544px] lg:flex-row lg:justify-between lg:items-center lg:px-[60px] lg:py-[60px] lg:relative lg:scale-[0.8] xl:scale-100 lg:mx-auto">

                {/* Left Side - iPhone Image */}
                <div className="relative w-[280px] h-[200px] sm:w-[400px] sm:h-[300px] mb-8 lg:mb-0 lg:w-[645px] lg:h-[470px] lg:shrink-0">
                    <img
                        src="/Aboutus/iPhone15.png"
                        alt="Healthcare App"
                        className="w-full h-full object-contain"
                    />
                </div>

                {/* Right Side - Text Content */}
                <div className="flex flex-col gap-4 w-full max-w-lg lg:block lg:w-[650px] lg:h-[323px] lg:gap-[16px] lg:max-w-none">

                    {/* Main Heading */}
                    <h2 className="font-['Source_Serif_Pro'] font-semibold capitalize text-[#1566B7]
                                   text-3xl text-center md:text-left
                                   lg:w-[605px] lg:h-[56px] lg:text-[42px] lg:leading-[121%] lg:tracking-[-0.02em] lg:m-0">
                        Healthcare At Your Fingertips
                    </h2>

                    {/* Subheading and Description */}
                    <div className="flex flex-col gap-2 text-center md:text-left lg:block lg:w-[560.93px] lg:h-[82px] lg:gap-0">
                        <p className="font-['DM_Sans'] font-bold text-[#142349]
                                      text-lg
                                      lg:text-[20px] lg:leading-[27px] lg:tracking-[0%] lg:mb-[1px] lg:m-0">
                            Atharv Healthcare mobile app — coming soon.
                        </p>
                        <p className="font-['DM_Sans'] font-light text-[#142349]
                                      text-base
                                      lg:text-[18px] lg:leading-[27px] lg:tracking-[0%] lg:m-0">
                            Book consultations, order medicines, schedule lab tests and access reports from one place.
                        </p>
                    </div>

                    {/* Bullet Points List */}
                    <ul className="flex flex-col gap-2 text-left w-full pl-4 mt-2 sm:pl-0 lg:block lg:w-[560.93px] lg:h-[120px] lg:mt-0 lg:pl-0 lg:gap-0">
                        {[
                            'Simple, hassle-free online booking',
                            'E-prescriptions and digital test reports',
                            'Secure data storage and privacy protection',
                            'Call and chat support when you need help'
                        ].map((item, index) => (
                            <li key={index} className="relative pl-5 font-['DM_Sans'] font-light text-[#142349]
                                                       text-base leading-snug
                                                       lg:text-[18px] lg:leading-[30px] lg:tracking-[0%]">
                                <span className="absolute left-0 top-[8px] w-[6px] h-[6px] rounded-full bg-[#1566B7] lg:top-[12px]" />
                                {item}
                            </li>
                        ))}
                    </ul>

                    {/* Final Bold Statement */}
                    <p className="font-['DM_Sans'] font-bold text-[#142349] mt-4 text-center md:text-left
                                  text-lg
                                  lg:text-[20px] lg:leading-[27px] lg:tracking-[0%] lg:w-[600px] lg:h-[27px] lg:mt-0 lg:m-0">
                        Everything you need for primary healthcare — in one app.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HealthFigerprint;
