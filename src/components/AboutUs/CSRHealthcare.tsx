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
        <div
            className="w-full relative overflow-hidden"
            style={{
                background: '#FFFFFF',
                paddingTop: '100px',
                paddingBottom: '100px',
                display: 'flex',
                justifyContent: 'center'
            }}
        >
            {/* Overall Container - 1508px × 550px */}
            <div
                style={{
                    width: '1508px',
                    height: '550px',
                    position: 'relative'
                }}
            >
                {/* CSRHealth Image - 697px × 526px */}
                <div
                    style={{
                        width: '697px',
                        height: '526px',
                        position: 'absolute',
                        top: '24px',
                        left: '97px',
                        borderRadius: '10px',
                        overflow: 'hidden'
                    }}
                >
                    <img
                        src="/Aboutus/CSRHealth.png"
                        alt="CSR Healthcare"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                        }}
                    />
                </div>

                {/* Right Side Content - 519px × 201px with 42px gap */}
                <div
                    style={{
                        width: '519px',
                        position: 'absolute',
                        top: '35px',
                        left: '887px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '42px'
                    }}
                >
                    {/* Main Heading - 519px × 112px */}
                    <div
                        style={{
                            width: '519px',
                            height: '112px'
                        }}
                    >
                        <h2
                            style={{
                                fontFamily: "'Source Serif Pro', serif",
                                fontWeight: 600,
                                fontSize: '46px',
                                lineHeight: '121%',
                                letterSpacing: '-2%',
                                textTransform: 'capitalize',
                                margin: 0
                            }}
                        >
                            <span style={{ color: '#1566B7' }}>CSR: Healthcare</span>
                            <br />
                            <span style={{ color: '#142349' }}>Where It's Needed Most</span>
                        </h2>
                    </div>

                    {/* Description - 514px × 87px */}
                    <p
                        style={{
                            width: '514px',
                            height: '47px',
                            fontFamily: "'DM Sans', sans-serif",
                            fontWeight: 300,
                            fontSize: '18px',
                            lineHeight: '22px',
                            letterSpacing: '0%',
                            color: '#000000',
                            margin: 0
                        }}
                    >
                        Our CSR programs are designed to bridge healthcare gaps by providing accessible primary care services in remote and underserved communities where medical facilities are limited.
                    </p>
                </div>

                {/* Accordion Sections - 503px × 268px */}
                <div
                    style={{
                        width: '503px',
                        height: '268px',
                        position: 'absolute',
                        top: '275px',
                        left: '888px',
                        borderTop: '1px solid #E5E5E5',
                        borderBottom: '1px solid #E5E5E5'
                    }}
                >
                    {sections.map((section, index) => (
                        <div
                            key={section.id}
                            style={{
                                width: '501px',
                                borderBottom: index < sections.length - 1 ? '1px solid #E5E5E5' : 'none'
                            }}
                        >
                            {/* Section Header */}
                            <button
                                onClick={() => toggleSection(section.id)}
                                style={{
                                    width: '100%',
                                    height: openSection === section.id && section.content.length > 0 ? 'auto' : '44px',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    padding: '12px 0',
                                    background: 'transparent',
                                    border: 'none',
                                    cursor: 'pointer'
                                }}
                            >
                                <h3
                                    style={{
                                        width: '395px',
                                        height: '30px',
                                        fontFamily: "'DM Sans', sans-serif",
                                        fontWeight: 500,
                                        fontSize: '18px',
                                        lineHeight: '30px',
                                        letterSpacing: '0%',
                                        color: '#142349',
                                        margin: 0,
                                        textAlign: 'left'
                                    }}
                                >
                                    {section.title}
                                </h3>

                                {/* Chevron Icon */}
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    style={{
                                        transform: openSection === section.id ? 'rotate(180deg)' : 'rotate(0deg)',
                                        transition: 'transform 0.3s ease',
                                        flexShrink: 0
                                    }}
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
                            {openSection === section.id && section.content.length > 0 && (
                                <div
                                    style={{
                                        width: '419px',
                                        height: '80px',
                                        paddingBottom: '12px'
                                    }}
                                >
                                    <ul
                                        style={{
                                            listStyle: 'none',
                                            padding: 0,
                                            margin: 0,
                                            fontFamily: "'DM Sans', sans-serif",
                                            fontWeight: 300,
                                            fontSize: '14px',
                                            lineHeight: '20px',
                                            letterSpacing: '0.02em',
                                            color: '#142349'
                                        }}
                                    >
                                        {section.content.map((item, index) => (
                                            <li
                                                key={index}
                                                style={{
                                                    paddingLeft: '20px',
                                                    position: 'relative',
                                                    marginBottom: '0px'
                                                }}
                                            >
                                                {/* Bullet Dot */}
                                                <span
                                                    style={{
                                                        position: 'absolute',
                                                        left: '0',
                                                        top: '8px',
                                                        width: '4px',
                                                        height: '4px',
                                                        borderRadius: '50%',
                                                        background: '#142349'
                                                    }}
                                                />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CSRHealthcare;
