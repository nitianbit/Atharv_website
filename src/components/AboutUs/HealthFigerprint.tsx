const HealthFigerprint = () => {
    return (
        <div className="w-full relative overflow-hidden bg-white py-12 xl:py-[80px] flex justify-center items-center">
            {/* Overall Container */}
            <div className="w-full flex flex-col items-center bg-[#3177E11A] rounded-[30px] p-6 lg:p-12 xl:w-[1305px] xl:h-[544px] xl:flex-row xl:justify-between xl:items-center xl:p-[60px] xl:relative">

                {/* Left Side - iPhone Image */}
                <div className="relative w-[280px] h-[200px] sm:w-[400px] sm:h-[300px] mb-8 xl:mb-0 xl:w-[645px] xl:h-[470px] xl:shrink-0">
                    <img
                        src="/Aboutus/iPhone15.png"
                        alt="Healthcare App"
                        className="w-full h-full object-contain"
                    />
                </div>

                {/* Right Side - Text Content */}
                <div className="flex flex-col gap-4 w-full max-w-lg xl:block xl:w-[650px] xl:h-[323px] xl:gap-[16px] xl:max-w-none">

                    {/* Main Heading */}
                    <h2 className="font-['Source_Serif_Pro'] font-semibold capitalize text-[#1566B7]
                                   text-3xl text-center md:text-left
                                   xl:w-[605px] xl:h-[56px] xl:text-[42px] xl:leading-[121%] xl:tracking-[-0.02em] xl:m-0">
                        Healthcare At Your Fingertips
                    </h2>

                    {/* Subheading and Description */}
                    <div className="flex flex-col gap-2 text-center md:text-left xl:block xl:w-[560.93px] xl:h-[82px] xl:gap-0">
                        <p className="font-['DM_Sans'] font-bold text-[#142349]
                                      text-lg
                                      xl:text-[20px] xl:leading-[27px] xl:tracking-[0%] xl:mb-[1px] xl:m-0">
                            Atharv Healthcare mobile app — coming soon.
                        </p>
                        <p className="font-['DM_Sans'] font-light text-[#142349]
                                      text-base
                                      xl:text-[18px] xl:leading-[27px] xl:tracking-[0%] xl:m-0">
                            Book consultations, order medicines, schedule lab tests and access reports from one place.
                        </p>
                    </div>

                    {/* Bullet Points List */}
                    <ul className="flex flex-col gap-2 text-left w-full pl-4 mt-2 sm:pl-0 xl:block xl:w-[560.93px] xl:h-[120px] xl:mt-0 xl:pl-0 xl:gap-0">
                        {[
                            'Simple, hassle-free online booking',
                            'E-prescriptions and digital test reports',
                            'Secure data storage and privacy protection',
                            'Call and chat support when you need help'
                        ].map((item, index) => (
                            <li key={index} className="relative pl-5 font-['DM_Sans'] font-light text-[#142349]
                                                       text-base leading-snug
                                                       xl:text-[18px] xl:leading-[30px] xl:tracking-[0%]">
                                <span className="absolute left-0 top-[8px] w-[6px] h-[6px] rounded-full bg-[#1566B7] xl:top-[12px]" />
                                {item}
                            </li>
                        ))}
                    </ul>

                    {/* Final Bold Statement */}
                    <p className="font-['DM_Sans'] font-bold text-[#142349] mt-4 text-center md:text-left
                                  text-lg
                                  xl:text-[20px] xl:leading-[27px] xl:tracking-[0%] xl:w-[600px] xl:h-[27px] xl:mt-0 xl:m-0">
                        Everything you need for primary healthcare — in one app.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HealthFigerprint;
