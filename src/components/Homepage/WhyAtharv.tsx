'use client';
import { useRef, useEffect } from 'react';

const WhyAtharv = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const features = [
        {
            id: 1,
            icon: "/Homepage/ISO.png",
            title: "ISO-Certified Systems"
        },
        {
            id: 2,
            icon: "/Homepage/MapIcon.png",
            title: "Pan-India Presence And Strong Service Network"
        },
        {
            id: 3,
            icon: "/Homepage/HealthCare.png",
            title: "Affordable, Price-Competitive Healthcare"
        },
        {
            id: 4,
            icon: "/Homepage/donationIcon.png",
            title: "Tailor-Made Care Solutions For Patient Needs"
        },
        {
            id: 5,
            icon: "/Homepage/pharmacyIcon.png",
            title: "In-House Pharmacy And Reliable Medicine Availability"
        }
    ];

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        let scrollAmount = 0;
        const scrollSpeed = 0.5;
        let animationId: number;

        const autoScroll = () => {
            scrollAmount += scrollSpeed;

            if (scrollAmount >= scrollContainer.scrollWidth / 2) {
                scrollAmount = 0;
            }

            scrollContainer.scrollLeft = scrollAmount;
            animationId = requestAnimationFrame(autoScroll);
        };

        animationId = requestAnimationFrame(autoScroll);

        const handleMouseEnter = () => {
            cancelAnimationFrame(animationId);
        };

        const handleMouseLeave = () => {
            animationId = requestAnimationFrame(autoScroll);
        };

        scrollContainer.addEventListener('mouseenter', handleMouseEnter);
        scrollContainer.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            cancelAnimationFrame(animationId);
            scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
            scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <div className="w-full py-16 px-4">
            {/* Overall Container - 1521px × 567px, gap: 54px */}
            <div
                style={{
                    width: '100%',
                    maxWidth: '1521px',
                    height: '567px',
                    margin: '0 auto',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '54px',
                    background: 'rgba(49, 119, 225, 0.1)',
                    overflow: 'hidden',
                }}
            >

                {/* Heading - 727px × 58px */}
                <h2
                    style={{
                        width: '727px',
                        height: '58px',
                        margin: '0 auto',
                        position: 'relative',
                        top: '80px',
                        transform: 'translateY(-50%)',
                        fontFamily: "'Source Serif Pro', serif",
                        fontWeight: 600,
                        fontSize: '46px',
                        lineHeight: '100%',
                        letterSpacing: '0.02em',
                        textAlign: 'center',
                        textTransform: 'capitalize'
                    }}
                >
                    <span style={{ color: '#142349' }}>Why Choose </span>
                    <span style={{ color: '#1566B7' }}>Atharv Healthcare?</span>
                </h2>

                {/* Box Container - 1521px × 315px, gap: 20px */}
                <div
                    ref={scrollRef}
                    style={{
                        width: '1521px',
                        height: '315px',
                        display: 'flex',
                        position: 'relative',
                        top: '50px',
                        gap: '20px',
                        overflowX: 'hidden',
                        scrollBehavior: 'auto'
                    }}
                    className="hide-scrollbar"
                >
                    {/* First Set */}
                    {features.map((feature) => (
                        <div
                            key={`first-${feature.id}`}
                            style={{
                                width: '315px',
                                height: '315px',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '33px',
                                paddingTop: '54px',
                                paddingBottom: '54px',
                                borderRadius: '8.3px',
                                border: '2px solid rgba(222, 222, 222, 0.1)',
                                background: '#FFFFFF',
                                boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.21)',
                                flexShrink: 0,
                                transition: 'all 0.3s ease'
                            }}
                            className="feature-card"
                        >
                            {/* Icon - 98px × 98px */}
                            <div
                                style={{
                                    width: '98px',
                                    height: '98px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                            >
                                <img
                                    src={feature.icon}
                                    alt={feature.title}
                                    style={{
                                        width: '98px',
                                        height: '98px',
                                        objectFit: 'contain'
                                    }}
                                />
                            </div>

                            {/* Title - 217px × 76px */}
                            <h3
                                style={{
                                    width: '217px',
                                    height: '76px',
                                    fontFamily: "'DM Sans', sans-serif",
                                    fontWeight: 600,
                                    fontSize: '20px',
                                    lineHeight: '27px',
                                    letterSpacing: '0',
                                    textAlign: 'center',
                                    verticalAlign: 'middle',
                                    textTransform: 'capitalize',
                                    color: '#142349',
                                    margin: 0,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                            >
                                {feature.title}
                            </h3>
                        </div>
                    ))}

                    {/* Duplicate Set for Seamless Loop */}
                    {features.map((feature) => (
                        <div
                            key={`second-${feature.id}`}
                            style={{
                                width: '315px',
                                height: '315px',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '33px',
                                paddingTop: '54px',
                                paddingBottom: '54px',
                                borderRadius: '8.3px',
                                border: '2px solid rgba(222, 222, 222, 0.1)',
                                background: '#FFFFFF',
                                boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.21)',
                                flexShrink: 0,
                                transition: 'all 0.3s ease'
                            }}
                            className="feature-card"
                        >
                            <div
                                style={{
                                    width: '98px',
                                    height: '98px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                            >
                                <img
                                    src={feature.icon}
                                    alt={feature.title}
                                    style={{
                                        width: '98px',
                                        height: '98px',
                                        objectFit: 'contain'
                                    }}
                                />
                            </div>

                            <h3
                                style={{
                                    width: '217px',
                                    height: '76px',
                                    fontFamily: "'DM Sans', sans-serif",
                                    fontWeight: 600,
                                    fontSize: '20px',
                                    lineHeight: '27px',
                                    letterSpacing: '0',
                                    textAlign: 'center',
                                    verticalAlign: 'middle',
                                    textTransform: 'capitalize',
                                    color: '#142349',
                                    margin: 0,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                            >
                                {feature.title}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                .hide-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }

                .feature-card:hover {
                    box-shadow: 0px 4px 20px rgba(21, 102, 183, 0.25);
                    transform: translateY(-4px);
                }
            `}</style>
        </div>
    );
};

export default WhyAtharv;
