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
        <section
            className="w-full mx-auto flex flex-col items-center justify-center bg-[#3177E11A] gap-10 py-10 xl:gap-[75px] xl:py-[75px] xl:min-h-[673px]"
            style={{
                maxWidth: '1507px', // Keeping max-width as inline or tailwind, tailwind is better: max-w-[1507px]
            }}
        >
            {/* Heading Section */}
            <div className="flex flex-col items-center justify-center gap-3 w-full px-4 xl:px-0">
                {/* Main Heading */}
                <h2
                    className="text-center capitalize font-['Source_Serif_Pro'] font-semibold text-[#142349] 
                    w-full max-w-[928px] h-auto text-[28px] leading-tight
                    md:text-[36px]
                    xl:w-[928px] xl:h-[58px] xl:text-[46px] xl:leading-[100%] xl:tracking-[0.02em]"
                >
                    Fixing Gaps In Real-World Healthcare
                </h2>

                {/* Subheading */}
                <p
                    className="text-center font-['DM_Sans'] font-light text-[#3C4959]
                    w-full max-w-[928px] h-auto text-[16px] leading-normal
                    md:text-[17px]
                    xl:w-[928px] xl:h-[30px] xl:text-[18px] xl:leading-[30px] xl:tracking-[0em]"
                >
                    Challenges we set out to solve:
                </p>
            </div>

            {/* Cards Container */}
            <div
                className="flex flex-wrap items-center justify-center gap-6 
                w-full px-4
                xl:w-[1313px] xl:justify-between xl:gap-0 xl:px-0 xl:min-h-[315px]"
            >
                {challenges.map((challenge) => (
                    <div
                        key={challenge.id}
                        className="flex flex-col items-center justify-start bg-white rounded-[8.3px] shadow-[0px_0px_4px_0px_#00000036] border-[2px] border-[#DEDEDE1A]
                        w-full max-w-[293px] h-auto gap-6 py-8
                        md:max-w-[340px]
                        xl:w-[293px] xl:max-w-none xl:h-[315px] xl:gap-[33px] xl:py-[54px]"
                    >
                        {/* Icon */}
                        <div
                            className="flex items-center justify-center w-[80px] h-[80px] xl:w-[96px] xl:h-[96px]"
                        >
                            <img
                                src={challenge.icon}
                                alt={challenge.alt}
                                className="w-full h-full object-contain"
                            />
                        </div>

                        {/* Title */}
                        <h3
                            className="text-center capitalize flex items-center justify-center font-['DM_Sans'] font-semibold text-[#142349]
                            w-full max-w-[257px] text-[18px] leading-snug
                            xl:w-[257px] xl:h-[83px] xl:text-[20px] xl:leading-[27px] xl:tracking-[0em]"
                        >
                            {challenge.title}
                        </h3>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FixGap;
