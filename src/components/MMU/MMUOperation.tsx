"use client"

const MMUOperation = () => {
    const operationsData = [
        {
            id: 1,
            icon: '/MMU/8.png', // Number 8 icon
            title: 'Mobile Medical Units',
            subtitle: 'Currently In Operation',
            number: '8'
        },
        {
            id: 2,
            icon: '/MMU/MMU1.png', // Medical building icon
            title: 'PSU & Institutional',
            subtitle: 'MMU Deployments'
        },
        {
            id: 3,
            icon: '/MMU/MMU2.png', // Globe with pins icon
            title: 'Multi-State',
            subtitle: 'MMU Coverage Across India'
        }
    ];

    return (
        <div className="w-full bg-white py-16 md:py-20 lg:py-24 px-6 md:px-10 lg:px-20">
            <div className="max-w-[1400px] mx-auto">
                {/* Heading Section */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="font-['Source_Serif_4'] font-semibold text-[36px] md:text-[42px] lg:text-[48px] leading-[1.2] mb-4">
                        <span className="text-[#1566B7]">MMU Operations</span>{' '}
                        <span className="text-[#142349]">At Scale</span>
                    </h2>
                    <p className="font-['DM_Sans'] text-[#666666] text-[16px] md:text-[17px] lg:text-[18px] leading-[1.6] font-normal max-w-[800px] mx-auto">
                        Delivering compliant, on-site healthcare across industrial environments.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {operationsData.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white rounded-[20px] md:rounded-[24px] p-8 md:p-10 
                                     shadow-[0px_4px_24px_rgba(0,0,0,0.08)] 
                                     hover:shadow-[0px_8px_32px_rgba(0,0,0,0.12)] 
                                     transition-shadow duration-300 
                                     flex flex-col items-center justify-center 
                                     border border-[#F0F0F0]
                                     min-h-[280px] md:min-h-[300px]"
                        >
                            {/* Icon Container */}
                            <div className="w-[100px] h-[100px] md:w-[110px] md:h-[110px] lg:w-[120px] lg:h-[120px] 
                                          rounded-full bg-[#1566B7] 
                                          flex items-center justify-center 
                                          mb-6 md:mb-7
                                          shadow-[0px_4px_16px_rgba(21,102,183,0.2)]">
                                <div className="relative w-[60px] h-[60px] md:w-[65px] md:h-[65px] lg:w-[70px] lg:h-[70px]">
                                    <img
                                        src={item.icon}
                                        alt={item.title}
                                        className="w-full h-full object-contain brightness-0 invert"
                                    />
                                </div>
                            </div>

                            {/* Text Content */}
                            <div className="text-center">
                                <h3 className="font-['DM_Sans'] font-semibold text-[18px] md:text-[19px] lg:text-[20px] 
                                             text-[#142349] leading-[1.3] mb-1">
                                    {item.title}
                                </h3>
                                <p className="font-['DM_Sans'] font-normal text-[15px] md:text-[16px] 
                                            text-[#666666] leading-[1.4]">
                                    {item.subtitle}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MMUOperation;
