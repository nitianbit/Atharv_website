const Companies = () => {
    const companies = [
        { id: 1, name: "Tata Steel", image: "/Homepage/Company2.png" },
        { id: 2, name: "Adani Power", image: "/Homepage/Company1.png" },
        { id: 3, name: "Indian Railways", image: "/Homepage/Company6.png" },
        { id: 4, name: "CPCL", image: "/Homepage/Company3.png" },
        { id: 5, name: "BHEL", image: "/Homepage/Company8.png" },
        { id: 6, name: "MPL", image: "/Homepage/Company5.png" },
        { id: 7, name: "BCPL", image: "/Homepage/Company4.png" },
        { id: 8, name: "NTPC", image: "/Homepage/Company7.png" }
    ];

    return (
        <div className="w-full">
            {/* Overall Container - 1512px × 131px */}
            <div 
                style={{
                    width: '100%',
                    maxWidth: '1512px',
                    height: '131px',
                    margin: '0 auto',
                    background: 'rgba(49, 119, 225, 0.1)',
                    overflow: 'hidden',
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    overflowX: 'hidden',
                }}
            >
                {/* Scrolling Container - 2142px × 106px, gap: 56px */}
                <div 
                    className="animate-scroll"
                    style={{
                        width: '2142px',
                        height: '106px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '56px',
                        position: 'absolute',
                        left: 0
                    }}
                >
                    {/* First Set of Logos */}
                    {companies.map((company) => (
                        <div
                            key={`first-${company.id}`}
                            style={{
                                width: '151px',
                                height: '100px',
                                flexShrink: 0,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <img
                                src={company.image}
                                alt={company.name}
                                style={{
                                    maxWidth: '100%',
                                    maxHeight: '100%',
                                    objectFit: 'contain'
                                }}
                                className="transition-all duration-300 hover:scale-110"
                            />
                        </div>
                    ))}
                    
                    {/* Duplicate Set for Seamless Loop */}
                    {companies.map((company) => (
                        <div
                            key={`second-${company.id}`}
                            style={{
                                width: '151px',
                                height: '100px',
                                flexShrink: 0,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <img
                                src={company.image}
                                alt={company.name}
                                style={{
                                    maxWidth: '100%',
                                    maxHeight: '100%',
                                    objectFit: 'contain'
                                }}
                                className="transition-all duration-300 hover:scale-110"
                            />
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                @keyframes scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(calc(-50% - 28px));
                    }
                }

                .animate-scroll {
                    animation: scroll 25s linear infinite;
                }

                .animate-scroll:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </div>
    );
};

export default Companies;
