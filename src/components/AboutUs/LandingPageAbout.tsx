import { useNavigate } from 'react-router-dom';

const LandingPageAbout = () => {
    const navigate = useNavigate();
    return (
        <div
            className="relative w-full flex items-center justify-center h-[431px] md:h-[431px] lg:h-[431px]"
            style={{
                background: 'linear-gradient(228deg, #9ADDFC 14.6%, rgba(79, 197, 224, 0) 68.04%)',
            }}
        >
            {/* Center Content Container */}
            <div className="relative w-full px-6 md:px-12 py-12 flex flex-col items-center gap-4 md:gap-4 lg:block lg:w-[888px] h-[179px] md:h-[179px] lg:h-[179px] lg:px-0 lg:gap-0">

                {/* Heading - About Atharv Healthcare */}
                <h1
                    className="text-center capitalize font-['Source_Serif_Pro'] font-semibold text-[#011632] leading-tight
                               text-3xl sm:text-4xl md:text-5xl
                               lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:w-[651px] lg:h-[68px] lg:text-[60px] lg:leading-[114%] lg:tracking-[-0.02em] lg:whitespace-nowrap"
                >
                    About Atharv Healthcare
                </h1>

                {/* Straight Line Image */}
                <img
                    src="/Aboutus/LineStraight.png"
                    alt="line"
                    className="w-[180px] sm:w-[240px] md:w-[280px] h-auto object-contain
                               lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:w-[326px] lg:h-[5px] lg:top-[120px]"
                />

                {/* Subtitle Text */}
                <p
                    className="text-center font-['DM_Sans'] font-light text-[#3C4959] leading-relaxed
                               text-base sm:text-lg md:text-xl max-w-md sm:max-w-xl md:max-w-2xl
                               lg:absolute lg:left-0 lg:max-w-none lg:w-[888px] lg:h-[34px] lg:top-[150px] lg:text-[18px] lg:leading-[30px] lg:tracking-[0%]"
                >
                    Bringing doctors, diagnostics, medicines and care closer to people.
                </p>

                {/* Book Now Button */}
                <button
                    onClick={() => navigate('/contact')}
                    className="hover:bg-[#1566B7] hover:text-white transition-all duration-300
                               bg-white text-black font-semibold rounded-[192px] border border-[#1566B7] shadow-[1px_6px_7.7px_0px_#3177E13D]
                               px-8 py-3.5 text-sm sm:text-base md:px-9 md:py-4 mt-2 md:mt-4
                               lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:w-[267px] lg:h-[50px] lg:top-[190px] lg:mt-0 lg:px-[28px] lg:py-[16px] lg:text-[14px]"
                >
                    BOOK NOW
                </button>
            </div>
        </div>
    );
};

export default LandingPageAbout;
