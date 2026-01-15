const PanMap = () => {
    const states = [
        {
            name: 'Madhya Pradesh',
            description: 'Online doctor consultation (pan-India) Online pharmacy & medicine home delivery serviceable pin',
            expanded: true
        },
        { name: 'Madhya Pradesh', expanded: false },
        { name: 'Madhya Pradesh', expanded: false },
        { name: 'Madhya Pradesh', expanded: false }
    ];

    return (
        <section style={{
            width: '100%',
            padding: '80px 0',
            display: 'flex',
            justifyContent: 'center',
            // background: '#F8FAFC'
        }}>
            <div style={{
                width: '1290px',
                height: '569px',
                paddingLeft: '83px',
                paddingRight: '83px',
                paddingTop: '70px',
                paddingBottom: '70px',
                borderRadius: '20px',
                background: 'linear-gradient(126.19deg, #176EC6 21.84%, #0F58A1 78.16%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '97px',
                boxSizing: 'border-box',
                overflow: 'hidden'
            }}>
                {/* Left Section */}
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '30px',
                    flex: '0 0 auto'
                }}>
                    {/* Heading */}
                    <h2 style={{
                        width: '550px',
                        fontFamily: "'Source Serif Pro', serif",
                        fontWeight: 600,
                        fontSize: '46px',
                        lineHeight: '58px',
                        letterSpacing: '0.92px',
                        textTransform: 'capitalize',
                        color: '#FFFFFF',
                        margin: 0
                    }}>
                        Pan-India Online Healthcare Services
                    </h2>

                    {/* States List - All Boxes with spacing */}
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '12px'
                    }}>
                        {states.map((state, index) => (
                            <div
                                key={index}
                                style={{
                                    width: '393px',
                                    padding: state.expanded ? '24px' : '16px 28px',
                                    borderRadius: '5px',
                                    background: '#FFFFFF',
                                    boxShadow: '0px 0px 11px 0px #00000040',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: state.expanded ? '10px' : '0',
                                    boxSizing: 'border-box',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-2px)';
                                    e.currentTarget.style.boxShadow = '0px 4px 16px 0px #00000050';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0px 0px 11px 0px #00000040';
                                }}
                            >
                                <h3 style={{
                                    fontFamily: "'DM Sans', sans-serif",
                                    fontWeight: 700,
                                    fontSize: '20px',
                                    lineHeight: '30px',
                                    letterSpacing: '0',
                                    textTransform: 'capitalize',
                                    color: '#142349',
                                    margin: 0
                                }}>
                                    {state.name}
                                </h3>
                                {state.expanded && state.description && (
                                    <p style={{
                                        fontFamily: "'DM Sans', sans-serif",
                                        fontWeight: 300,
                                        fontSize: '18px',
                                        lineHeight: '31px',
                                        letterSpacing: '0',
                                        color: '#142349',
                                        margin: 0
                                    }}>
                                        {state.description}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Section - India Map */}
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flex: '1 1 auto'
                }}>
                    <img
                        src="/Homepage/IndianMap.png"
                        alt="India Map"
                        style={{
                            width: '490px',
                            height: '507.7977600097656px',
                            objectFit: 'contain'
                        }}
                    />
                </div>
            </div>

            <style>{`
                @media (max-width: 1400px) {
                    section > div {
                        width: 95% !important;
                        max-width: 1290px !important;
                        height: auto !important;
                        padding: 60px 40px !important;
                        flex-direction: column !important;
                        gap: 50px !important;
                    }

                    section > div > div:first-child > h2 {
                        width: 100% !important;
                    }
                    
                    section > div > div:last-child > img {
                        width: 100% !important;
                        height: auto !important;
                        max-width: 490px !important;
                    }

                    section > div > div:first-child > div {
                        width: 100% !important;
                    }

                    section > div > div:first-child > div > div {
                        width: 100% !important;
                    }
                }

                @media (max-width: 768px) {
                    section > div {
                        padding: 40px 30px !important;
                        border-radius: 15px !important;
                    }

                    section > div > div:first-child > h2 {
                        font-size: 36px !important;
                        line-height: 44px !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default PanMap;
