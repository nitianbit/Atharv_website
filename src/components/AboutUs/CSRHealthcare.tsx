'use client';
import { useState } from 'react';

const CSRHealthcare = () => {
    const [openSection, setOpenSection] = useState('whatWeDo');

    const toggleSection = (section: any) => {
        setOpenSection(openSection === section ? null : section);
    };

    const sections = [
        {
            id: 'whatWeDo',
            title: 'What we do',
            content: [
                'Rural and tribal health camps',
                'MMU visits in underserved regions',
                'Preventive screenings and diagnostics',
                'School and community awareness programs'
            ]
        },
        {
            id: 'focusAreas',
            title: 'Our focus areas',
            content: []
        },
        {
            id: 'deliverImpact',
            title: 'How we deliver impact',
            content: []
        },
        {
            id: 'drivesUs',
            title: 'What drives us',
            content: []
        }
    ];

    return (
        <div className="w-full relative overflow-hidden bg-white py-12 lg:py-[100px] flex justify-center">
            {/* Overall Container with scaling */}
            <div className="w-full px-4 flex flex-col gap-8 lg:flex lg:justify-center lg:items-center lg:px-0">
                <div className="w-full flex flex-col gap-8 lg:block lg:w-[1508px] lg:h-[550px] lg:gap-0 lg:relative lg:scale-[0.68] xl:scale-[0.85] 2xl:scale-100 lg:origin-center">

                    {/* CSRHealth Image */}
                    <div className="w-full h-auto aspect-[4/3] rounded-[10px] overflow-hidden sm:max-w-md sm:mx-auto lg:max-w-none lg:mx-0
                                    lg:w-[697px] lg:h-[526px] lg:absolute lg:top-[24px] lg:left-[97px]">
                        <img
                            src="/Aboutus/CSRHealth.png"
                            alt="CSR Healthcare"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Right Side Content Container */}
                    <div className="flex flex-col gap-8 lg:block">

                        {/* Header Group */}
                        <div className="flex flex-col gap-4 text-center md:text-left lg:block lg:absolute lg:top-[35px] lg:left-[887px] lg:w-[519px] lg:gap-[42px]">

                            {/* Main Heading */}
                            <div className="lg:w-[519px] lg:h-[112px] lg:mb-[42px]">
                                <h2 className="font-['Source_Serif_Pro'] font-semibold capitalize leading-tight
                                                text-3xl md:text-4xl
                                                lg:text-[46px] lg:leading-[121%] lg:tracking-[-0.02em] lg:m-0">
                                    <span className="text-[#1566B7]">CSR: Healthcare</span>
                                    <br className="hidden lg:block" />
                                    <span className="text-[#142349] block lg:inline"> Where It's Needed Most</span>
                                </h2>
                            </div>

                            {/* Description */}
                            <p className="font-['DM_Sans'] font-light text-black text-base md:text-lg leading-relaxed
                                          lg:w-[514px] lg:h-[47px] lg:text-[18px] lg:leading-[22px] lg:tracking-[0%] lg:m-0">
                                Our CSR programs are designed to bridge healthcare gaps by providing accessible primary care services in remote and underserved communities where medical facilities are limited.
                            </p>
                        </div>

                        {/* Accordion Sections */}
                        <div className="w-full border-t border-b border-[#E5E5E5] lg:w-[503px] lg:h-[268px] lg:absolute lg:top-[275px] lg:left-[888px] lg:border-b lg:border-t">
                            {sections.map((section, index) => (
                                <div
                                    key={section.id}
                                    className={`w-full ${index < sections.length - 1 ? 'border-b border-[#E5E5E5]' : ''} lg:w-[501px]`}
                                >
                                    {/* Section Header */}
                                    <button
                                        onClick={() => toggleSection(section.id)}
                                        className="w-full flex justify-between items-center py-3 bg-transparent border-none cursor-pointer outline-none
                                                   lg:h-[44px] lg:py-[12px]"
                                    >
                                        <h3 className="font-['DM_Sans'] font-medium text-[#142349] text-left
                                                       text-base md:text-lg
                                                       lg:w-[395px] lg:h-[30px] lg:text-[18px] lg:leading-[30px] lg:tracking-[0%] lg:m-0">
                                            {section.title}
                                        </h3>

                                        {/* Chevron Icon */}
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className={`shrink-0 transition-transform duration-300 ease-in-out ${openSection === section.id ? 'rotate-180' : 'rotate-0'}`}
                                        >
                                            <path
                                                d="M5 7.5L10 12.5L15 7.5"
                                                stroke="#142349"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </button>

                                    {/* Section Content - Expanded */}
                                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openSection === section.id && section.content.length > 0 ? 'max-h-[200px] opacity-100 pb-3' : 'max-h-0 opacity-0 pb-0'}`}>
                                        <div className="lg:w-[419px]">
                                            <ul className="list-none p-0 m-0 font-['DM_Sans'] font-light text-[#142349] text-sm leading-relaxed tracking-wide">
                                                {section.content.map((item, i) => (
                                                    <li key={i} className="relative pl-5 mb-1 lg:mb-0">
                                                        <span className="absolute left-0 top-2 w-1 h-1 rounded-full bg-[#142349]" />
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CSRHealthcare;
