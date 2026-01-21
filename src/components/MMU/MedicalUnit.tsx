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
            <div className="max-w-[1400px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-20 items-center">
                    
                    {/* Left Side - Image */}
                    <div className="relative w-full order-2 lg:order-1">
                        <div className="relative w-full h-[400px] md:h-[480px] lg:h-[520px]">
                            <img
                                src="/MMU/MobileMedical.png"
                                alt="Mobile Medical Unit - Healthcare team with ambulance in rural area"
                                className="object-cover"
                            />
                        </div>
                        {/* Blue Glow Effect */}
                        <div className="absolute -inset-4 bg-gradient-to-br from-[#9ADDFC]/20 to-transparent rounded-[36px] md:rounded-[40px] lg:rounded-[44px] -z-10 blur-xl"></div>
                    </div>

                    {/* Right Side - Content */}
                    <div className="space-y-6 md:space-y-7 order-1 lg:order-2">
                        {/* Main Heading */}
                        <h2 className="font-['Source_Serif_4'] font-semibold text-[32px] md:text-[38px] lg:text-[42px] xl:text-[46px] leading-[1.25] text-[#142349]">
                            Why <span className="text-[#1566B7]">Mobile Medical Units</span> Matter
                        </h2>

                        {/* Description Paragraph */}
                        <p className="font-['DM_Sans'] text-[#142349] text-[16px] md:text-[17px] lg:text-[18px] leading-[1.7] font-normal">
                            Mobile Medical Units (MMUs) deliver primary healthcare in rural areas, remote sites, and locations without fixed medical facilities. They support organised, repeatable healthcare delivery for CSR programs, government initiatives, and workforce outreach.
                        </p>

                        {/* Sub-heading */}
                        <div className="pt-2">
                            <h3 className="font-['DM_Sans'] font-semibold text-[#1566B7] text-[18px] md:text-[19px] lg:text-[20px] leading-[1.4] mb-4">
                                Mobile Medical Units Enable:
                            </h3>

                            {/* Bullet Points List */}
                            <ul className="space-y-3 md:space-y-3.5">
                                {enablePoints.map((point, index) => (
                                    <li 
                                        key={index}
                                        className="font-['DM_Sans'] text-[#142349] text-[15px] md:text-[16px] lg:text-[17px] leading-[1.6] font-normal flex items-start"
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
