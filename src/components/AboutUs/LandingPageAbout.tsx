const LandingPageAbout = () => {
    return (
        <div
            className="relative w-full flex items-center justify-center py-16 xl:py-0 xl:h-[431px]"
            style={{
                background: 'linear-gradient(228deg, #9ADDFC 14.6%, rgba(79, 197, 224, 0) 68.04%)',
            }}
        >
            {/* Center Content Container */}
            <div className="relative w-full px-4 flex flex-col items-center gap-6 xl:block xl:w-[888px] xl:h-[179px] xl:px-0 xl:gap-0">

                {/* Heading - About Atharv Healthcare */}
                <h1
                    className="text-center capitalize font-['Source_Serif_Pro'] font-semibold text-[#011632] leading-tight
                               text-3xl sm:text-4xl md:text-5xl lg:text-[50px]
                               xl:absolute xl:top-1/2 xl:left-1/2 xl:-translate-x-1/2 xl:-translate-y-1/2 xl:w-[651px] xl:h-[68px] xl:text-[60px] xl:leading-[114%] xl:tracking-[-0.02em] xl:whitespace-nowrap"
                >
                    About Atharv Healthcare
                </h1>

                {/* Straight Line Image */}
                <img
                    src="/Aboutus/LineStraight.png"
                    alt="line"
                    className="w-[200px] sm:w-[250px] md:w-[300px] h-auto object-contain
                               xl:absolute xl:left-1/2 xl:-translate-x-1/2 xl:w-[326px] xl:h-[5px] xl:top-[120px]"
                />

                {/* Subtitle Text */}
                <p
                    className="text-center font-['DM_Sans'] font-light text-[#3C4959] leading-relaxed
                               text-base sm:text-lg max-w-2xl
                               xl:absolute xl:left-0 xl:max-w-none xl:w-[888px] xl:h-[34px] xl:top-[150px] xl:text-[18px] xl:leading-[30px] xl:tracking-[0%]"
                >
                    Bringing doctors, diagnostics, medicines and care closer to people.
                </p>

                {/* Book Now Button */}
                <button
                    className="hover:bg-[#1566B7] hover:text-white transition-all duration-300
                               bg-white text-black font-semibold rounded-[192px] border border-[#1566B7] shadow-[1px_6px_7.7px_0px_#3177E13D]
                               px-7 py-4 text-sm w-[200px] sm:w-[240px] mt-4
                               xl:absolute xl:left-1/2 xl:-translate-x-1/2 xl:w-[267px] xl:h-[50px] xl:top-[190px] xl:mt-0 xl:px-[28px] xl:py-[16px] xl:text-[14px]"
                >
                    BOOK NOW
                </button>
            </div>
        </div>
    );
};

export default LandingPageAbout;
