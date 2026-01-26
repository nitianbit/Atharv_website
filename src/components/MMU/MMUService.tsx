"use client"

const MMUService = () => {
    const servicesData = [
        {
            id: 1,
            icon: '/MMU/engineering.png',
            title: 'Pan-India Deployment Capability'
        },
        {
            id: 2,
            icon: '/MMU/delivery-box.png',
            title: 'Experience Across Rural And Industrial Environments'
        },
        {
            id: 3,
            icon: '/MMU/man-avatar.png',
            title: 'Program-Based Healthcare Delivery Model'
        },
        {
            id: 4,
            icon: '/MMU/capsule.png',
            title: 'Integration With Medicine Supply And Follow-Up Care'
        },
        {
            id: 5,
            icon: '/MMU/enrollment.png',
            title: 'Compliance-Oriented Documentation And Reporting'
        },
        {
            id: 6,
            icon: '/MMU/parcel.png',
            title: 'Strong Operational Governance And Accountability'
        }
    ];

    return (
        <div className="w-full bg-gradient-to-br from-[#EEF4FF] via-[#F3F7FF] to-[#E8F0FF] py-16 md:py-20 lg:py-24 px-6 md:px-10 lg:px-20">
            <div className="max-w-[1400px] mx-auto">
                
                {/* Main Heading Section */}
                <div className="text-center mb-12 md:mb-14 lg:mb-16 max-w-[1100px] mx-auto">
                    <h2 className="font-['Source_Serif_4'] font-semibold text-[32px] md:text-[38px] lg:text-[44px] xl:text-[48px] 
                                 leading-[1.2] mb-5 md:mb-6">
                        <span className="text-[#142349]">Why Choose </span>
                        <span className="text-[#1566B7]">Atharv Healthcare For MMU Services</span>
                    </h2>

                    {/* Subtitle */}
                    <p className="font-['DM_Sans'] text-[#142349] text-[16px] md:text-[17px] lg:text-[18px] 
                                leading-[1.7] font-normal">
                        Atharv Healthcare's strength lies in{' '}
                        <span className="font-semibold">execution, scale, and operational reliability</span>. 
                        We focus on{' '}
                        <span className="font-semibold">running MMU programs that work on the ground</span>, 
                        not just deploying vehicles.
                    </p>
                </div>

                {/* Services Grid - 3x2 Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-7">
                    {servicesData.map((service) => (
                        <div
                            key={service.id}
                            className="bg-white rounded-[16px] md:rounded-[18px] lg:rounded-[20px] 
                                     p-6 md:p-7 lg:p-8
                                     shadow-[0px_2px_12px_rgba(0,0,0,0.06)]
                                     hover:shadow-[0px_4px_20px_rgba(0,0,0,0.1)]
                                     transition-all duration-300
                                     flex items-center gap-5 md:gap-6
                                     border border-[#F0F4F8]
                                     min-h-[120px] md:min-h-[130px] lg:min-h-[140px]"
                        >
                            {/* Icon Container */}
                            <div className="w-[60px] h-[60px] md:w-[65px] md:h-[65px] lg:w-[70px] lg:h-[70px] 
                                          flex-shrink-0 flex items-center justify-center">
                                <div className="relative w-full h-full">
                                    <img
                                        src={service.icon}
                                        alt={service.title}
                                        className="object-contain"
                                    />
                                </div>
                            </div>

                            {/* Text Content */}
                            <div className="flex-1">
                                <h3 className="font-['DM_Sans'] font-semibold text-[16px] md:text-[17px] lg:text-[18px] 
                                             text-[#142349] leading-[1.4]">
                                    {service.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MMUService;
