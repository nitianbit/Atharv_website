"use client"

import { useState } from 'react';

const MMUMedical = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const carouselData = [
        {
            id: 1,
            image: '/MMU/DoctorCheck1.png',
            alt: 'Outdoor mobile medical unit - Doctor conducting health checkup in rural area',
            caption: 'Vaccination and medicine distribution\n(where applicable)'
        },
        {
            id: 2,
            image: '/MMU/DoctorCheck2.png',
            alt: 'Indoor consultation - Healthcare professionals consulting with patients',
            caption: ''
        },
        {
            id: 3,
            image: '/MMU/DocotrCheck3.png',
            alt: 'Medical professional - Doctor conducting patient examination with stethoscope',
            caption: ''
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % carouselData.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + carouselData.length) % carouselData.length);
    };

    return (
        <div className="w-full bg-white py-16 md:py-20 lg:py-24 px-6 md:px-10 lg:px-20">
            {/* Desktop View - Exact Positioning */}
            <div className="hidden xl:block relative mx-auto" style={{ maxWidth: '1512px' }}>
                <div 
                    className="relative"
                    style={{
                        width: '1312px',
                        height: '612px',
                        left: '100px',
                        // border: '1px solid #EDEEEF',
                        padding: '0',
                    }}
                >
                    {/* Top Section - Heading and Description */}
                    <div className="flex justify-between mb-[46px]">
                        {/* Left - Heading */}
                        <div>
                            <h2 
                                className="font-['Source_Serif_Pro'] font-semibold capitalize"
                                style={{
                                    width: '514px',
                                    height: '116px',
                                    fontSize: '46px',
                                    lineHeight: '100%',
                                    letterSpacing: '0.02em',
                                    color: '#1566B7',
                                }}
                            >
                                Our Mobile Medical Unit Services
                            </h2>

                            {/* Subheading below heading */}
                            <p 
                                className="font-['DM_Sans'] font-semibold mt-[20px]"
                                style={{
                                    width: '437px',
                                    height: '27px',
                                    fontSize: '18px',
                                    lineHeight: '27px',
                                    letterSpacing: '0%',
                                    color: '#142349',
                                }}
                            >
                                Our MMU programs are designed to include:
                            </p>
                        </div>

                        {/* Right - Description */}
                        <div>
                            <p 
                                className="font-['DM_Sans']"
                                style={{
                                    width: '643px',
                                    height: '120px',
                                    fontSize: '18px',
                                    lineHeight: '30px',
                                    letterSpacing: '0%',
                                    color: '#142349',
                                }}
                            >
                                <span style={{ fontWeight: 300 }}>Atharv Healthcare delivers </span>
                                <span style={{ fontWeight: 600 }}>MMU services that are configurable based on program requirements</span>
                                <span style={{ fontWeight: 300 }}>, geography, and target population. Each MMU program is planned with a focus on </span>
                                <span style={{ fontWeight: 600 }}>operational feasibility, compliance, and measurable outreach</span>
                                <span style={{ fontWeight: 300 }}>, rather than fixed, one-size-fits-all offerings.</span>
                            </p>
                        </div>
                    </div>

                    {/* Images Section - Horizontal Layout */}
                    <div 
                        className="relative"
                        style={{
                            width: '1312px',
                            height: '420px',
                            // border: '1px solid #EDEEEF',
                        }}
                    >
                        <div className="flex">
                            {/* Image 1 - DoctorCheck1 */}
                            <div 
                                className="relative"
                                style={{
                                    width: '531.89px',
                                    height: '290px',
                                }}
                            >
                                <img
                                    src="/MMU/DoctorCheck1.png"
                                    alt="Outdoor mobile medical unit - Doctor conducting health checkup in rural area"
                                    className="w-full h-full object-cover"
                                    style={{
                                        borderTopLeftRadius: '12px',
                                        borderTopRightRadius: '12px',
                                    }}
                                />

                                {/* Caption for Image 1 */}
                                <div 
                                    className="absolute font-['DM_Sans'] font-semibold"
                                    style={{
                                        width: '439.30px',
                                        height: '56px',
                                        bottom: '-120px',
                                        left: '25.61px',
                                        fontSize: '20px',
                                        lineHeight: '28px',
                                        letterSpacing: '0%',
                                        color: '#142349',
                                    }}
                                >
                                    Vaccination and medicine distribution<br />
                                    (where applicable)
                                </div>
                            </div>

                            {/* Image 2 - DoctorCheck2 */}
                            <div 
                                className="relative"
                                style={{
                                    width: '531.89px',
                                    height: '300px',
                                    marginLeft: '34.48px',
                                }}
                            >
                                <img
                                    src="/MMU/DoctorCheck2.png"
                                    alt="Indoor consultation - Healthcare professionals consulting with patients"
                                    className="w-full h-full object-cover"
                                    style={{
                                        borderRadius: '12px',
                                    }}
                                />
                            </div>

                            {/* Image 3 - DoctorCheck3 */}
                            <div 
                                className="relative"
                                style={{
                                    width: '179.27px',
                                    height: '300px',
                                    marginLeft: '34.36px',
                                }}
                            >
                                <img
                                    src="/MMU/DocotrCheck3.png"
                                    alt="Medical professional - Doctor conducting patient examination with stethoscope"
                                    className="w-full h-full object-cover"
                                    style={{
                                        borderTopLeftRadius: '12px',
                                        borderBottomLeftRadius: '12px',
                                    }}
                                />
                            </div>
                        </div>

                        {/* Navigation Arrows */}
                        <div 
                            className="absolute flex items-center justify-center gap-[20px]"
                            style={{
                                width: '139.87px',
                                height: '61px',
                                bottom: '-61px',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                border: '1px solid #EDEEEF',
                            }}
                        >
                            {/* Previous Arrow */}
                            <button
                                onClick={prevSlide}
                                className="flex items-center justify-center text-[#142349] hover:text-[#1566B7] transition-all duration-300"
                                aria-label="Previous slide"
                                style={{
                                    width: '40px',
                                    height: '40px',
                                }}
                            >
                                <svg 
                                    className="w-6 h-6" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>

                            {/* Next Arrow */}
                            <button
                                onClick={nextSlide}
                                className="flex items-center justify-center text-[#142349] hover:text-[#1566B7] transition-all duration-300"
                                aria-label="Next slide"
                                style={{
                                    width: '40px',
                                    height: '40px',
                                }}
                            >
                                <svg 
                                    className="w-6 h-6" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Responsive View (Mobile to Large Desktop) */}
            <div className="xl:hidden max-w-[1400px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
                    
                    {/* Left Side - Text Content */}
                    <div className="space-y-6">
                        <div>
                            <h2 className="font-['Source_Serif_Pro'] font-semibold text-[#1566B7] 
                                         text-[32px] md:text-[38px] lg:text-[42px] 
                                         leading-[1.2] mb-5 capitalize">
                                Our Mobile Medical Unit Services
                            </h2>

                            <p className="font-['DM_Sans'] text-[#142349] text-[16px] md:text-[17px] lg:text-[18px] 
                                        leading-[1.5] font-semibold">
                                Our MMU programs are designed to include:
                            </p>
                        </div>
                    </div>

                    {/* Right Side - Description & Images */}
                    <div className="space-y-8">
                        <div>
                            <p className="font-['DM_Sans'] text-[#142349] text-[16px] md:text-[17px] lg:text-[18px] 
                                        leading-[1.67] font-light">
                                Atharv Healthcare delivers{' '}
                                <span className="font-semibold">
                                    MMU services that are configurable based on program requirements
                                </span>, geography, and target population. Each MMU program is planned with a focus on{' '}
                                <span className="font-semibold">
                                    operational feasibility, compliance, and measurable outreach
                                </span>, rather than fixed, one-size-fits-all offerings.
                            </p>
                        </div>

                        {/* Image Carousel */}
                        <div className="relative">
                            <div className="relative overflow-hidden rounded-[12px]">
                                <div className="relative w-full aspect-[16/10] bg-gray-100">
                                    {carouselData.map((slide, index) => (
                                        <div
                                            key={slide.id}
                                            className={`absolute inset-0 transition-opacity duration-500 ${
                                                index === currentSlide ? 'opacity-100' : 'opacity-0'
                                            }`}
                                        >
                                            <img
                                                src={slide.image}
                                                alt={slide.alt}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-5">
                                <p className="font-['DM_Sans'] text-[#142349] text-[16px] md:text-[18px] lg:text-[20px] 
                                            leading-[1.4] font-semibold">
                                    {carouselData[currentSlide].caption || 'Healthcare service delivery'}
                                </p>
                            </div>

                            <div className="flex items-center justify-center gap-4 mt-6 border border-[#EDEEEF] w-fit mx-auto px-6 py-4 rounded-lg">
                                <button
                                    onClick={prevSlide}
                                    className="text-[#142349] hover:text-[#1566B7] transition-colors"
                                    aria-label="Previous slide"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>

                                <button
                                    onClick={nextSlide}
                                    className="text-[#142349] hover:text-[#1566B7] transition-colors"
                                    aria-label="Next slide"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MMUMedical;
