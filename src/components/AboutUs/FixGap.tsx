const FixGap = () => {
    const challenges = [
        {
            id: 1,
            icon: '/Aboutus/insurance.png',
            title: 'Long Travel And Waiting For Basic Medical Care',
            alt: 'Insurance icon'
        },
        {
            id: 2,
            icon: '/Aboutus/capsule.png',
            title: 'Difficulty Accessing Genuine Medicines',
            alt: 'Capsule icon'
        },
        {
            id: 3,
            icon: '/Aboutus/schedule.png',
            title: 'Limited Diagnostic Facilities Nearby',
            alt: 'Schedule icon'
        },
        {
            id: 4,
            icon: '/Aboutus/pandemic.png',
            title: 'Lack Of Organised Healthcare In Remote Regions',
            alt: 'Pandemic icon'
        }
    ];

    return (
        <section className="w-full max-w-[1507px] mx-auto flex flex-col items-center justify-center bg-[#3177E11A] gap-10 py-10 lg:gap-[75px] lg:py-[75px]">
            
            {/* Heading Section */}
            <div className="flex flex-col items-center justify-center gap-3 w-full px-4 lg:px-0">
                {/* Main Heading */}
                <h2 className="text-center capitalize font-['Source_Serif_Pro'] font-semibold text-[#142349] 
                    w-full max-w-[928px] h-auto text-[28px] leading-tight
                    md:text-[36px]
                    lg:w-[928px] lg:h-[58px] lg:text-[46px] lg:leading-[100%] lg:tracking-[0.02em]">
                    Fixing Gaps In Real-World Healthcare
                </h2>

                {/* Subheading */}
                <p className="text-center font-['DM_Sans'] font-light text-[#3C4959]
                    w-full max-w-[928px] h-auto text-[16px] leading-normal
                    md:text-[17px]
                    lg:w-[928px] lg:h-[30px] lg:text-[18px] lg:leading-[30px] lg:tracking-[0em]">
                    Challenges we set out to solve:
                </p>
            </div>

            {/* Horizontal Scroll Container */}
            <div className="w-full overflow-x-auto scrollbar-hide">
                <div className="flex gap-6 px-4 lg:px-8 pb-4 snap-x snap-mandatory min-w-min lg:justify-center">
                    {challenges.map((challenge) => (
                        <div
                            key={challenge.id}
                            className="flex flex-col items-center justify-start bg-white rounded-[8.3px] shadow-[0px_0px_4px_0px_#00000036] border-[2px] border-[#DEDEDE1A]
                            snap-center flex-shrink-0
                            w-[280px] h-auto gap-6 py-8
                            sm:w-[300px]
                            lg:w-[293px] lg:h-[315px] lg:gap-[33px] lg:py-[54px]"
                        >
                            {/* Icon */}
                            <div className="flex items-center justify-center w-[80px] h-[80px] lg:w-[96px] lg:h-[96px]">
                                <img
                                    src={challenge.icon}
                                    alt={challenge.alt}
                                    className="w-full h-full object-contain"
                                />
                            </div>

                            {/* Title */}
                            <h3 className="text-center capitalize flex items-center justify-center font-['DM_Sans'] font-semibold text-[#142349]
                                w-full max-w-[257px] px-4 text-[18px] leading-snug
                                lg:w-[257px] lg:h-[83px] lg:text-[20px] lg:leading-[27px] lg:tracking-[0em] lg:px-0">
                                {challenge.title}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>

            {/* Add this to your global CSS or Tailwind config for scrollbar-hide */}
            <style >{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </section>
    );
};

export default FixGap;
