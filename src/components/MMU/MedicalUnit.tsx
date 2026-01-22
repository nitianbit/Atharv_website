"use client"

const MedicalUnit = () => {
    const enablePoints = [
        'Mobile healthcare access without hospital dependence',
        'Structured CSR and public health program execution',
        'Preventive screening, early detection, and referrals',
        'Scalable MMU deployment across multiple locations'
    ];

    return (
        <div className="w-full bg-white py-16 md:py-20 lg:py-24 px-6 md:px-10 lg:px-20">
            {/* Desktop View - Exact Positioning */}
            <div className="hidden xl:block relative mx-auto" style={{ maxWidth: '1512px' }}>
                <div 
                    className="relative flex"
                    style={{
                        width: '1308.69px',
                        height: '476.97px',
                        left: '103.08px',
                        gap: '86px',
                    }}
                >
                    {/* Left Side - Image */}
                    <div 
                        className="relative flex-shrink-0"
                        style={{
                            width: '631.83px',
                            height: '476.97px',
                        }}
                    >
                        <img
                            src="/MMU/MobileMedical.png"
                            alt="Mobile Medical Unit - Healthcare team with ambulance in rural area"
                            className="w-full h-full object-cover"
                            style={{
                                borderRadius: '10px',
                            }}
                        />
                        {/* Blue Glow Effect */}
                        <div 
                            className="absolute -inset-4 bg-gradient-to-br from-[#9ADDFC]/20 to-transparent -z-10 blur-xl"
                            style={{
                                borderRadius: '20px',
                            }}
                        ></div>
                    </div>

                    {/* Right Side - Content */}
                    <div 
                        className="flex-shrink-0"
                        style={{
                            width: '590.86px',
                            height: '407.15px',
                        }}
                    >
                        {/* Main Heading */}
                        <h2 
                            className="font-['Source_Serif_Pro'] font-semibold capitalize"
                            style={{
                                width: '561px',
                                height: '112px',
                                fontSize: '46px',
                                lineHeight: '121%',
                                letterSpacing: '-0.02em',
                                marginBottom: '20px',
                            }}
                        >
                            <span style={{ color: '#142349' }}>Why </span>
                            <span style={{ color: '#1566B7' }}>Mobile Medical Units</span>
                            <span style={{ color: '#142349' }}> Matter</span>
                        </h2>

                        {/* Description Paragraph */}
                        <p 
                            className="font-['DM_Sans']"
                            style={{
                                width: '567px',
                                height: '108px',
                                fontWeight: 300,
                                fontSize: '18px',
                                lineHeight: '27px',
                                letterSpacing: '0%',
                                color: '#000000',
                                marginBottom: '30px',
                            }}
                        >
                            Mobile Medical Units (MMUs) deliver primary healthcare in rural areas, remote sites, and locations without fixed medical facilities. They support organised, repeatable healthcare delivery for CSR programs, government initiatives, and workforce outreach.
                        </p>

                        {/* Sub-heading */}
                        <h3 
                            className="font-['DM_Sans'] capitalize"
                            style={{
                                width: '252px',
                                height: '30px',
                                fontWeight: 600,
                                fontSize: '18px',
                                lineHeight: '30px',
                                letterSpacing: '0%',
                                color: '#1566B7',
                                marginBottom: '10px',
                            }}
                        >
                            Mobile Medical Units Enable:
                        </h3>

                        {/* Bullet Points List */}
                        <ul 
                            className="font-['DM_Sans']"
                            style={{
                                width: '523px',
                                height: '104px',
                                fontWeight: 400,
                                fontSize: '16px',
                                lineHeight: '165%',
                                letterSpacing: '0%',
                                color: '#142349',
                            }}
                        >
                            {enablePoints.map((point, index) => (
                                <li 
                                    key={index}
                                    className="flex items-start"
                                >
                                    <span className="inline-block w-[6px] h-[6px] rounded-full bg-[#142349] mt-[9px] mr-3 flex-shrink-0"></span>
                                    <span className="flex-1">{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Responsive View (Mobile to Large Desktop) */}
            <div className="xl:hidden max-w-[1400px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                    
                    {/* Left Side - Image */}
                    <div className="relative w-full order-2 lg:order-1">
                        <div className="relative w-full h-[400px] md:h-[480px] lg:h-[520px]">
                            <img
                                src="/MMU/MobileMedical.png"
                                alt="Mobile Medical Unit - Healthcare team with ambulance in rural area"
                                className="w-full h-full object-cover rounded-[10px]"
                            />
                        </div>
                        {/* Blue Glow Effect */}
                        <div className="absolute -inset-4 bg-gradient-to-br from-[#9ADDFC]/20 to-transparent rounded-[20px] -z-10 blur-xl"></div>
                    </div>

                    {/* Right Side - Content */}
                    <div className="space-y-6 md:space-y-7 order-1 lg:order-2">
                        {/* Main Heading */}
                        <h2 className="font-['Source_Serif_Pro'] font-semibold text-[32px] md:text-[38px] lg:text-[42px] leading-[1.25] capitalize">
                            <span className="text-[#142349]">Why </span>
                            <span className="text-[#1566B7]">Mobile Medical Units</span>
                            <span className="text-[#142349]"> Matter</span>
                        </h2>

                        {/* Description Paragraph */}
                        <p className="font-['DM_Sans'] text-[#000000] text-[16px] md:text-[17px] lg:text-[18px] leading-[1.5] font-light">
                            Mobile Medical Units (MMUs) deliver primary healthcare in rural areas, remote sites, and locations without fixed medical facilities. They support organised, repeatable healthcare delivery for CSR programs, government initiatives, and workforce outreach.
                        </p>

                        {/* Sub-heading */}
                        <div className="pt-2">
                            <h3 className="font-['DM_Sans'] font-semibold text-[#1566B7] text-[17px] md:text-[18px] leading-[1.67] capitalize mb-3">
                                Mobile Medical Units Enable:
                            </h3>

                            {/* Bullet Points List */}
                            <ul className="space-y-3">
                                {enablePoints.map((point, index) => (
                                    <li 
                                        key={index}
                                        className="font-['DM_Sans'] text-[#142349] text-[15px] md:text-[16px] leading-[1.65] font-normal flex items-start"
                                    >
                                        <span className="inline-block w-[6px] h-[6px] rounded-full bg-[#142349] mt-[9px] mr-3 flex-shrink-0"></span>
                                        <span className="flex-1">{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MedicalUnit;
