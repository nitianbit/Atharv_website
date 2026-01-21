"use client"


const UseCases = () => {
    const useCasesData = [
        {
            id: 1,
            icon: '/MMU/Price.png',
            title: 'MMU Services For CSR & Community Health Programs',
            description: 'Mobile Medical Units support CSR initiatives by enabling organised healthcare outreach, preventive screenings, and health awareness activities in underserved communities.'
        },
        {
            id: 2,
            icon: '/MMU/Hospital.png',
            title: 'MMU For Government & PSU Health Initiatives',
            description: 'MMUs are suitable for public health missions, outreach programs, and population-level screening initiatives where structured execution and reporting are required.'
        },
        {
            id: 3,
            icon: '/MMU/House.png',
            title: 'Mobile Medical Units For Rural Healthcare',
            description: 'MMUs help extend primary healthcare services to rural and remote regions with limited access to hospitals or clinics.'
        },
        {
            id: 4,
            icon: '/MMU/Seting.png',
            title: 'MMU For Industrial & Workforce Outreach',
            description: 'For industries with remote or dispersed workforces, MMUs enable on-site healthcare access, preventive care, and referral support.'
        }
    ];

    return (
        <div className="w-full bg-[#FAFAFA] py-16 md:py-20 lg:py-24 px-6 md:px-10 lg:px-20">
            <div className="max-w-[1400px] mx-auto">
                
                {/* Main Heading */}
                <h2 className="font-['Source_Serif_4'] font-semibold text-[36px] md:text-[42px] lg:text-[48px] 
                             text-[#142349] text-center mb-12 md:mb-14 lg:mb-16 leading-[1.2]">
                    MMU Use Cases
                </h2>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5 xl:gap-6">
                    {useCasesData.map((useCase) => (
                        <div
                            key={useCase.id}
                            className="bg-white rounded-[20px] p-6 md:p-7 lg:p-8
                                     shadow-[0px_2px_16px_rgba(0,0,0,0.06)]
                                     hover:shadow-[0px_4px_24px_rgba(0,0,0,0.1)]
                                     transition-all duration-300
                                     border-b-[4px] border-[#1566B7]
                                     flex flex-col items-center text-center
                                     min-h-[420px] md:min-h-[440px] lg:min-h-[460px]"
                        >
                            {/* Icon Container */}
                            <div className="w-[100px] h-[100px] md:w-[110px] md:h-[110px] lg:w-[119px] lg:h-[119px] 
                                          rounded-full bg-[#1566B7] 
                                          flex items-center justify-center 
                                          mb-5 md:mb-6
                                          shadow-[0px_4px_16px_rgba(21,102,183,0.25)]
                                          flex-shrink-0">
                                <div className="relative w-[55px] h-[55px] md:w-[60px] md:h-[60px] lg:w-[65px] lg:h-[65px]">
                                    <img
                                        src={useCase.icon}
                                        alt={useCase.title}
                                        className="object-contain"
                                    />
                                </div>
                            </div>

                            {/* Title */}
                            <h3 className="font-['DM_Sans'] font-semibold text-[17px] md:text-[18px] lg:text-[19px] 
                                         text-[#142349] leading-[1.35] mb-3 md:mb-4">
                                {useCase.title}
                            </h3>

                            {/* Description */}
                            <p className="font-['DM_Sans'] font-normal text-[14px] md:text-[15px] lg:text-[16px] 
                                        text-[#142349] leading-[1.65] opacity-90">
                                {useCase.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default UseCases;
