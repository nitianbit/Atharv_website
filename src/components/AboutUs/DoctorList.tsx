interface Doctor {
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
        name: 'Rajdeep',
        role: '(Head Of Clinical Operations)',
        description: 'He oversees clinical operations and care delivery across services, ensuring patient safety and quality standards are consistently met. He works closely with teams to maintain compliant, patient-first healthcare practices.',
        image: '/Aboutus/FemaleDoctor.png',
    },
    {
        name: 'Vijay',
        role: '(Compliance Head)',
        description: 'He handles regulatory and statutory compliance across all healthcare services, ensuring operations follow legal and ethical guidelines. His role helps maintain safe, compliant and well-governed healthcare delivery.',
        image: '/Aboutus/Rajdeep.png',
    },
];

export default function DoctorList() {
    return (
        <div className="w-full relative py-16 xl:py-[80px] min-h-[804px] flex items-center justify-center overflow-hidden">

            {/* Background Image Layer with Rotation and 20% Opacity */}
            <div
                className="absolute inset-0 z-0 w-full h-full"
                style={{
                    backgroundImage: 'url(/Aboutus/BackgroundImage.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    opacity: 99,
                    transform: 'rotate(0deg)',
                }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-white/10 z-[1]" />

            {/* Overall Container */}
            <div className="w-full relative z-10 px-4 flex flex-col items-center xl:block xl:w-[1514px] xl:h-[804px] xl:px-0">

                {/* Content Box */}
                <div className="w-full flex flex-col items-center gap-12 xl:absolute xl:top-[87px] xl:left-[104px] xl:w-[1309px] xl:h-[687px] xl:block xl:gap-0">

                    {/* Main Heading */}
                    <h1 className="text-center font-['Source_Serif_Pro'] font-semibold capitalize
                                   text-3xl md:text-4xl text-[#142349] leading-tight mb-8
                                   xl:w-[814px] xl:h-[49.71px] xl:text-[46px] xl:leading-[100%] xl:tracking-[0.02em] xl:mx-auto xl:mb-[96px] xl:block">
                        Leadership & <span className="text-[#1566B7]">Healthcare Operations</span>
                    </h1>

                    {/* Three Cards Container */}
                    <div className="w-full flex flex-col items-center gap-10 md:grid md:grid-cols-2 lg:grid-cols-3 xl:flex xl:flex-row xl:justify-between xl:w-[1309px] xl:h-[591px] xl:gap-0">
                        {doctors.map((doctor, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center gap-6 xl:w-[385px] xl:h-[576px] xl:gap-[10px]"
                            >
                                {/* Card Image Container */}
                                <div className="relative w-[300px] h-[310px] sm:w-[364.98px] sm:h-[376.78px] rounded-[20px] border border-[#FEF5D8] overflow-hidden bg-gradient-to-br from-[#4575f0] via-[#3b6fd9] to-[#2856d6]">
                                    <img src="/Aboutus/OVAL.png" alt="CirclePattern" className="w-full h-full object-cover" />

                                    {/* Female Doctor Image */}
                                    <div className="absolute z-10 w-[240px] h-[245px] top-[70px] left-[45px] sm:w-[298px] sm:h-[303px] sm:top-[85.5px] sm:left-[53.5px]">
                                        <img
                                            src={doctor.image}
                                            alt={doctor.name}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                </div>

                                {/* Text Content */}
                                <div className="flex flex-col items-center gap-3 text-center w-full max-w-[360px] xl:w-[397px] xl:h-[162px] xl:gap-[16px]">
                                    {/* Name */}
                                    <h2 className="font-['DM_Sans'] font-bold text-xl text-[#1566B7] capitalize
                                                   xl:w-[247px] xl:h-[16px] xl:text-[20px] xl:leading-[121%] xl:tracking-[-0.02em] xl:m-0">
                                        {doctor.name}
                                    </h2>

                                    {/* Role */}
                                    <p className="font-['DM_Sans'] font-light text-base text-[#142349] capitalize
                                                  xl:w-[283px] xl:h-[19px] xl:text-[16px] xl:leading-[121%] xl:tracking-[-0.02em] xl:m-0">
                                        {doctor.role}
                                    </p>

                                    {/* Description */}
                                    <p className="font-['DM_Sans'] font-light text-base text-black px-2
                                                  xl:w-[363px] xl:h-[100px] xl:text-[18px] xl:leading-[26px] xl:tracking-[0%] xl:px-0 xl:m-0">
                                        {doctor.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
