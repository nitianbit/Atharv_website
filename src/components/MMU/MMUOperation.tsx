"use client"

const MMUOperation = () => {
    const operationsData = [
        {
            id: 1,
            icon: '/MMU/8.png',
            title: 'Mobile Medical Units',
            subtitle: 'Currently In Operation',
            iconWidth: '120px',
            iconHeight: '89px'
        },
        {
            id: 2,
            icon: '/MMU/MMU1.png',
            title: 'PSU & Institutional',
            subtitle: 'MMU Deployments',
            iconWidth: '73px',
            iconHeight: '98px'
        },
        {
            id: 3,
            icon: '/MMU/MMU2.png',
            title: 'Multi-State',
            subtitle: 'MMU Coverage Across India',
            iconWidth: '120px',
            iconHeight: '89px'
        }
    ];

    return (
        <div className="w-full bg-white py-16 md:py-20 lg:py-24 px-6 md:px-10 lg:px-20">
            {/* Desktop View - Exact Positioning */}
            <div className="hidden xl:block relative mx-auto" style={{ maxWidth: '1512px' }}>
                <div 
                    className="relative"
                    style={{
                        width: '1312px',
                        height: '390px',
                        top: '0px',
                        left: '100px',
                    }}
                >
                    {/* Heading Section */}
                    <div className="text-center mb-[50px]">
                        <h2 
                            className="font-['Source_Serif_Pro'] font-semibold capitalize mb-[10px]"
                            style={{
                                width: '822px',
                                height: '57px',
                                margin: '0 auto',
                                fontSize: '60px',
                                lineHeight: '114%',
                                letterSpacing: '-0.02em',
                                textAlign: 'center',
                            }}
                        >
                            <span style={{ color: '#1566B7' }}>MMU Operations</span>{' '}
                            <span style={{ color: '#142349' }}>At Scale</span>
                        </h2>
                        <p 
                            className="font-['DM_Sans']"
                            style={{
                                width: '822px',
                                height: '30px',
                                margin: '0 auto',
                                fontWeight: 300,
                                fontSize: '18px',
                                lineHeight: '30px',
                                letterSpacing: '0%',
                                textAlign: 'center',
                                color: '#040404',
                            }}
                        >
                            Delivering compliant, on-site healthcare across industrial environments.
                        </p>
                    </div>

                    {/* Cards Grid */}
                    <div 
                        className="flex justify-center"
                        style={{
                            width: '1277px',
                            height: '290px',
                            gap: '50px',
                            marginTop: '50px',
                        }}
                    >
                        {operationsData.map((item) => (
                            <div
                                key={item.id}
                                className="flex flex-col items-center justify-center"
                                style={{
                                    width: '390px',
                                    height: '191px',
                                    borderRadius: '20px',
                                    background: '#FFFFFF',
                                    boxShadow: '0px 2px 5px 0px #0000002E',
                                }}
                            >
                                {/* Icon */}
                                <div 
                                    className="mb-[20px]"
                                    style={{
                                        width: item.iconWidth,
                                        height: item.iconHeight,
                                    }}
                                >
                                    <img
                                        src={item.icon}
                                        alt={item.title}
                                        className="w-full h-full object-contain"
                                    />
                                </div>

                                {/* Text Content */}
                                <div className="text-center">
                                    <h3 
                                        className="font-['DM_Sans'] capitalize mb-[5px]"
                                        style={{
                                            fontWeight: 700,
                                            fontSize: '20px',
                                            lineHeight: '100%',
                                            letterSpacing: '0%',
                                            textAlign: 'center',
                                            color: item.id === 2 ? '#1566B7' : '#142349',
                                        }}
                                    >
                                        {item.title}
                                    </h3>
                                    <p 
                                        className="font-['DM_Sans'] capitalize"
                                        style={{
                                            fontWeight: 400,
                                            fontSize: '18px',
                                            lineHeight: '100%',
                                            letterSpacing: '0%',
                                            textAlign: 'center',
                                            color: '#142349',
                                        }}
                                    >
                                        {item.subtitle}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Responsive View (Mobile to Large Desktop) */}
            <div className="xl:hidden max-w-[1400px] mx-auto">
                {/* Heading Section */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="font-['Source_Serif_Pro'] font-semibold text-[36px] md:text-[42px] lg:text-[48px] leading-[1.2] mb-4 capitalize">
                        <span className="text-[#1566B7]">MMU Operations</span>{' '}
                        <span className="text-[#142349]">At Scale</span>
                    </h2>
                    <p className="font-['DM_Sans'] text-[#040404] text-[16px] md:text-[17px] lg:text-[18px] leading-[1.6] font-light max-w-[800px] mx-auto">
                        Delivering compliant, on-site healthcare across industrial environments.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {operationsData.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white rounded-[20px] p-8 
                                     shadow-[0px_2px_5px_0px_#0000002E]
                                     hover:shadow-[0px_4px_10px_0px_#00000040]
                                     transition-shadow duration-300 
                                     flex flex-col items-center justify-center 
                                     min-h-[200px]"
                        >
                            {/* Icon */}
                            <div className="mb-5">
                                <img
                                    src={item.icon}
                                    alt={item.title}
                                    className="w-[100px] h-auto object-contain"
                                />
                            </div>

                            {/* Text Content */}
                            <div className="text-center">
                                <h3 className="font-['DM_Sans'] font-bold text-[18px] md:text-[20px] 
                                             text-[#142349] leading-[1.2] mb-2 capitalize">
                                    {item.title}
                                </h3>
                                <p className="font-['DM_Sans'] font-normal text-[16px] md:text-[18px] 
                                            text-[#142349] leading-[1.2] capitalize">
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
