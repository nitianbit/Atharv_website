interface Doctor {
    name: string;
    role: string;
    description: string;
    image: string;
}

interface TeamMember {
    name: string;
    role: string;
    description: string;
    image: string;
}

const doctors: Doctor[] = [
    {
        name: 'CA Poonam Singh',
        role: '(Chief Financial Officer)',
        description: "She manages Atharv Healthcare's financial planning and oversight, ensuring transparency and smooth day-to-day financial operations. Her focus is on responsible growth, compliance and long-term financial stability for the organisation",
        image: '/Aboutus/Poonam.png'
    },
    {
        name: 'Mayur Agarwal',
        role: '(Head Of Clinical Operations)',
        description: 'He oversees clinical operations and care delivery across services, ensuring patient safety and quality standards are consistently met. He works closely with teams to maintain compliant, patient-first healthcare practices.',
        image: '/Aboutus/Mayur.png',
    },
    {
        name: 'Rajdeep',
        role: '(Compliance Head)',
        description: 'He handles regulatory and statutory compliance across all healthcare services, ensuring operations follow legal and ethical guidelines. His role helps maintain safe, compliant and well-governed healthcare delivery.',
        image: '/Aboutus/Rajdeep.png',
    },
];

const teamMembers: TeamMember[] = [
    {
        name: 'Rahul Kundu',
        role: '(Operations Head)',
        description: 'He oversees day-to-day healthcare operations, ensuring services are delivered smoothly and efficiently across all functions.',
        image: '/Aboutus/11.png'
    },
    {
        name: 'Deboshmita',
        role: '(Human Resources)',
        description: 'She manages recruitment, HR operations and people practices, supporting a positive and well-organised work environment.',
        image: '/Aboutus/12.png'
    },
    {
        name: 'Vijay',
        role: '(Sales & Marketing)',
        description: "He manages sales and marketing activities to drive growth and visibility. His role focuses on outreach, partnerships and promoting Atharv Healthcare's services.",
        image: '/Aboutus/13.png'
    },
    {
        name: 'Riya',
        role: '(Accounts)',
        description: 'She handles accounting processes, billing and financial documentation to ensure accuracy and operational continuity.',
        image: '/Aboutus/14.png'
    },
    {
        name: 'Rabi Patwa',
        role: '(Compliance & Collections)',
        description: 'He supports compliance-related activities and manages collections, while ensuring alignment with regulatory requirements.',
        image: '/Aboutus/15.png'
    },
];

export default function DoctorList() {
    return (
        <div className="w-full relative overflow-hidden">
            {/* Background Image Layer */}
            <div
                className="absolute inset-0 z-0 w-full h-[2000px] pointer-events-none"
                style={{
                    backgroundImage: 'url(/Aboutus/BackgroundImage.png)',
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    opacity: 99,
                    // transform: 'rotate(-180deg)',
                    top: '-250px',
                }}
            />
            <div className="absolute inset-0 bg-white/10 z-[1] pointer-events-none" />

            {/* MOBILE & TABLET VIEW (< lg) - Horizontal Scroll */}
            <div className="lg:hidden relative z-10 w-full py-16 flex flex-col gap-12">
                {/* Leadership Section */}
                <div className="w-full">
                    <h1 className="text-center font-['Source_Serif_Pro'] font-semibold capitalize text-3xl sm:text-4xl text-[#142349] leading-tight mb-8 px-4">
                        Leadership & <span className="text-[#1566B7]">Healthcare Operations</span>
                    </h1>

                    <div className="w-full overflow-x-auto pb-8 px-4 flex gap-6 snap-x snap-mandatory scrollbar-hide">
                        {doctors.map((doctor, index) => (
                            <div
                                key={index}
                                className="snap-center min-w-[300px] w-[300px] bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-blue-100 shadow-sm flex flex-col items-center flex-shrink-0"
                            >
                                <div className="relative w-[260px] h-[280px] rounded-[20px] border border-[#FEF5D8] overflow-hidden bg-gradient-to-br from-[#4575f0] via-[#3b6fd9] to-[#2856d6] mb-6 flex-shrink-0">
                                    <img src="/Aboutus/OVAL.png" alt="CirclePattern" className="w-full h-full object-cover opacity-50" />
                                    <div className="absolute z-10 bottom-0 left-1/2 -translate-x-1/2 w-[85%] h-[85%]">
                                        <img src={doctor.image} alt={doctor.name} className="w-full h-full object-contain object-bottom" />
                                    </div>
                                </div>

                                <div className="text-center w-full">
                                    <h2 className="font-['DM_Sans'] font-bold text-xl text-[#1566B7] capitalize mb-1">{doctor.name}</h2>
                                    <p className="font-['DM_Sans'] font-light text-sm text-[#142349] capitalize mb-4">{doctor.role}</p>
                                    <p className="font-['DM_Sans'] font-light text-base text-black leading-relaxed line-clamp-4">{doctor.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Team Members Section */}
                <div className="w-full bg-[#1566B7] py-12">
                    <h2 className="text-center font-['Source_Serif_Pro'] font-semibold text-2xl text-white mb-8 px-4">Our Team</h2>
                    <div className="w-full overflow-x-auto pb-4 px-4 flex gap-6 snap-x snap-mandatory scrollbar-hide">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="snap-center min-w-[260px] w-[260px] flex flex-col items-center flex-shrink-0">
                                <div className="w-[140px] h-[140px] rounded-full border-[3px] border-white overflow-hidden bg-white mb-6 shadow-md flex-shrink-0">
                                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                                </div>
                                <div className="text-center text-white w-full">
                                    <h3 className="font-['DM_Sans'] font-bold text-xl capitalize mb-1">{member.name}</h3>
                                    <p className="font-['DM_Sans'] font-light text-sm capitalize mb-4 opacity-90">{member.role}</p>
                                    <p className="font-['DM_Sans'] font-light text-base leading-relaxed line-clamp-4">{member.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* DESKTOP & IPAD PRO VIEW (lg+) */}
            <div className="hidden lg:block w-full relative z-20 py-12 lg:py-16">
                <div className="w-full flex flex-col items-center">

                    {/* TOP SECTION - Leadership (Scaled Container) */}
                    <div className="w-full max-w-[1514px] mx-auto px-4 lg:px-8 mb-16 lg:mb-20">
                        <div className="w-full flex flex-col items-center">

                            {/* Main Heading */}
                            <h1 className="text-center font-['Source_Serif_Pro'] font-semibold capitalize text-[#142349] mb-12 lg:mb-16
                                           text-3xl lg:text-4xl xl:text-[46px] 
                                           leading-tight lg:leading-[100%] 
                                           tracking-wide lg:tracking-[0.02em]
                                           max-w-[90%] lg:max-w-[814px]">
                                Leadership & <span className="text-[#1566B7]">Healthcare Operations</span>
                            </h1>

                            {/* Three Cards Container */}
                            <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-6 xl:gap-12">
                                {doctors.map((doctor, index) => (
                                    <div
                                        key={index}
                                        className="flex flex-col items-center w-full max-w-[340px] lg:max-w-[300px] xl:max-w-[385px]"
                                    >
                                        {/* Card Image */}
                                        <div className="relative w-full aspect-square max-w-[320px] lg:max-w-[280px] xl:max-w-[365px] rounded-[20px] border border-[#FEF5D8] overflow-hidden bg-gradient-to-br from-[#4575f0] via-[#3b6fd9] to-[#2856d6] mb-6">
                                            <img src="/Aboutus/OVAL.png" alt="CirclePattern" className="w-full h-full object-cover" />
                                            <div className="absolute z-10 bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[80%]">
                                                <img src={doctor.image} alt={doctor.name} className="w-full h-full object-contain object-bottom" />
                                            </div>
                                        </div>

                                        {/* Text */}
                                        <div className="flex flex-col items-center text-center w-full gap-3 lg:gap-4">
                                            <h2 className="font-['DM_Sans'] font-bold text-[#1566B7] capitalize 
                                                           text-lg lg:text-xl xl:text-[20px] 
                                                           leading-tight lg:leading-[121%] 
                                                           tracking-tight lg:tracking-[-0.02em]">
                                                {doctor.name}
                                            </h2>
                                            <p className="font-['DM_Sans'] font-light text-[#142349] capitalize 
                                                          text-sm lg:text-base xl:text-[16px] 
                                                          leading-tight lg:leading-[121%] 
                                                          tracking-tight lg:tracking-[-0.02em]">
                                                {doctor.role}
                                            </p>
                                            <p className="font-['DM_Sans'] font-light text-black 
                                                          text-sm lg:text-base xl:text-[18px] 
                                                          leading-relaxed lg:leading-[26px] 
                                                          px-2 lg:px-0">
                                                {doctor.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* BOTTOM SECTION - Team Members (Blue Background) */}
                    <div className="w-full bg-[#1566B7] py-12 lg:py-16">
                        <div className="w-full max-w-[1513px] mx-auto px-4 lg:px-6">
                            <div className="w-full flex flex-nowrap items-center justify-center gap-2 lg:gap-1 xl:gap-2">
                                {teamMembers.map((member, index) => (
                                    <div
                                        key={index}
                                        className="flex flex-col items-center w-full max-w-[260px] lg:max-w-[170px] xl:max-w-[285px] py-6 flex-shrink-0"
                                    >
                                        {/* Circular Image */}
                                        <div className="w-[120px] h-[120px] lg:w-[90px] lg:h-[90px] xl:w-[158px] xl:h-[158px] rounded-full border-[3px] border-white overflow-hidden bg-white flex-shrink-0 mb-4 lg:mb-5">
                                            <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                                        </div>

                                        {/* Text Content */}
                                        <div className="flex flex-col items-center text-center text-white w-full gap-2 lg:gap-3">
                                            <h3 className="font-['DM_Sans'] font-bold capitalize 
                                       text-lg lg:text-sm xl:text-[20px] 
                                       leading-tight lg:leading-[121%] 
                                       tracking-tight lg:tracking-[-0.02em]">
                                                {member.name}
                                            </h3>
                                            <p className="font-['DM_Sans'] font-light capitalize 
                                      text-sm lg:text-xs xl:text-[16px] 
                                      leading-tight lg:leading-[121%] 
                                      tracking-tight lg:tracking-[-0.02em]">
                                                {member.role}
                                            </p>
                                            <p className="font-['DM_Sans'] font-light 
                                      text-sm lg:text-xs xl:text-[16px] 
                                      leading-relaxed lg:leading-[20px] xl:leading-[23px] 
                                      px-1 lg:px-0">
                                                {member.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
