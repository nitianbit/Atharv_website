"use client"

const MMUSupport = () => {
    const supportData = [
        {
            id: 1,
            icon: '/MMU/HealthHouse.png',
            title: 'Medicine Availability Through In-House Pharmacy Support'
        },
        {
            id: 2,
            icon: '/MMU/HealthNetwork.png',
            title: 'Referral Coordination With Fixed Healthcare Facilities'
        },
        {
            id: 3,
            icon: '/MMU/HealthMedicine.png',
            title: 'Continuity Across Workplace, Community, And Outreach Programs'
        }
    ];

    return (
        <div className="w-full bg-white py-16 md:py-20 lg:py-24 px-6 md:px-10 lg:px-20">
            <div className="max-w-[1400px] mx-auto">
                
                {/* Heading Section */}
                <div className="text-center mb-12 md:mb-14 lg:mb-16 max-w-[950px] mx-auto">
                    <h2 className="font-['Source_Serif_4'] font-semibold text-[32px] md:text-[38px] lg:text-[44px] xl:text-[48px] 
                                 leading-[1.2] mb-4 md:mb-5">
                        <span className="text-[#1566B7]">Integrated Healthcare</span>{' '}
                        <span className="text-[#142349]">Support</span>
                    </h2>

                    {/* Subtitle */}
                    <p className="font-['DM_Sans'] text-[#666666] text-[15px] md:text-[16px] lg:text-[17px] 
                                leading-[1.6] font-normal">
                        MMU programs can be aligned with Atharv Healthcare's broader service ecosystem, enabling:
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
                    {supportData.map((support) => (
                        <div
                            key={support.id}
                            className="bg-white rounded-[18px] md:rounded-[20px] lg:rounded-[24px] 
                                     p-8 md:p-9 lg:p-10
                                     shadow-[0px_2px_16px_rgba(0,0,0,0.06)]
                                     hover:shadow-[0px_4px_24px_rgba(0,0,0,0.1)]
                                     transition-all duration-300
                                     flex flex-col items-center text-center
                                     border border-[#F5F5F5]
                                     min-h-[280px] md:min-h-[300px]"
                        >
                            {/* Icon Container */}
                            <div className="w-[90px] h-[90px] md:w-[100px] md:h-[100px] lg:w-[110px] lg:h-[110px] 
                                          rounded-full bg-[#1566B7] 
                                          flex items-center justify-center 
                                          mb-6 md:mb-7 lg:mb-8
                                          shadow-[0px_4px_16px_rgba(21,102,183,0.2)]
                                          flex-shrink-0">
                                <div className="relative w-[50px] h-[50px] md:w-[55px] md:h-[55px] lg:w-[60px] lg:h-[60px]">
                                    <img
                                        src={support.icon}
                                        alt={support.title}
                                        className="object-contain"
                                    />
                                </div>
                            </div>

                            {/* Title */}
                            <h3 className="font-['DM_Sans'] font-semibold text-[17px] md:text-[18px] lg:text-[19px] 
                                         text-[#142349] leading-[1.4]">
                                {support.title}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MMUSupport;
