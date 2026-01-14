const NewsUpdates = () => {
    const newsItems = [
        {
            id: 1,
            category: "CSR events",
            description: "Lorem ipsum dolor sit amet consectetur.",
            image: "/Homepage/Teeth.png"
        },
        {
            id: 2,
            category: "New OHC openings",
            description: "Lorem ipsum dolor sit amet consectetur.",
            image: "/Homepage/Teeth.png"
        },
        {
            id: 3,
            category: "Partnerships",
            description: "Lorem ipsum dolor sit amet consectetur.",
            image: "/Homepage/Teeth.png"
        },
        {
            id: 4,
            category: "Press mentions",
            description: "Lorem ipsum dolor sit amet consectetur.",
            image: "/Homepage/Teeth.png"
        }
    ];

    return (
        <div className="w-full bg-white py-16 px-4">
            <div style={{ maxWidth: '1512px', margin: '0 auto' }}>

                {/* Overall Container - 1310px × 528px */}
                <div
                    style={{
                        width: '100%',
                        maxWidth: '1310px',
                        height: '528px',
                        margin: '0 auto',
                        position: 'relative',
                        // overflow: 'hidden'
                    }}
                >

                    {/* Top Section - 1308.97px × 118px, gap: 198px */}
                    <div
                        style={{
                            width: '100%',
                            maxWidth: '1308.97px',
                            height: '118px',
                            display: 'flex',
                            justifyContent: 'space-between',
                            gap: '198px',
                            marginBottom: '44px'
                        }}
                    >

                        {/* Left Side - Heading & Description */}
                        <div style={{ flex: 1 }}>
                            {/* Heading */}
                            <h2
                                style={{
                                    width: '727px',
                                    height: '58px',
                                    fontFamily: "'Source Serif Pro', serif",
                                    fontWeight: 600,
                                    fontSize: '46px',
                                    lineHeight: '100%',
                                    letterSpacing: '0.02em',
                                    textTransform: 'capitalize',
                                    margin: 0,
                                    marginBottom: '0px'
                                }}
                            >
                                <span style={{ color: '#142349' }}>Latest </span>
                                <span style={{ color: '#1566B7' }}>News & Updates</span>
                            </h2>

                            {/* Description - 780px × 60px */}
                            <p
                                style={{
                                    width: '780px',
                                    height: '60px',
                                    marginTop: '0px',
                                    fontFamily: "'DM Sans', sans-serif",
                                    fontWeight: 300,
                                    fontSize: '18px',
                                    lineHeight: '30px',
                                    letterSpacing: '0',
                                    color: '#142349',
                                    margin: 0
                                }}
                            >
                                Catch up on company news, CSR activities, MMU deployments, health camps and corporate initiatives from Atharv Healthcare across India.
                            </p>
                        </div>

                        {/* Right Side - Button - 298px × 50px */}
                        <button
                            style={{
                                width: '298px',
                                height: '50px',
                                padding: '16px 28px',
                                borderRadius: '192px',
                                border: '1px solid #1566B7',
                                background: '#FFFFFF',
                                boxShadow: '1px 10px 12.7px 0px rgba(49, 119, 225, 0.24)',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0,
                                alignSelf: 'center'
                            }}
                            className="hover:opacity-90 transition-opacity"
                        >
                            <span
                                style={{
                                    width: '200px',
                                    height: '21px',
                                    fontFamily: "'DM Sans', sans-serif",
                                    fontWeight: 600,
                                    fontSize: '16px',
                                    lineHeight: '100%',
                                    letterSpacing: '0',
                                    textTransform: 'uppercase',
                                    color: '#142349',
                                    whiteSpace: 'nowrap'
                                }}
                            >
                                SEE ALL NEWS & UPDATES
                            </span>
                        </button>
                    </div>

                    {/* Cards Container - 1310px × 366px */}
                    <div
                        style={{
                            width: '100%',
                            maxWidth: '1310px',
                            height: '366px',
                            display: 'flex',
                            justifyContent: 'space-between',
                            gap: '20px',
                            overflowX: 'auto',
                            overflowY: 'hidden'
                        }}
                    >
                        {newsItems.map((item) => (
                            <div
                                key={item.id}
                                style={{
                                    width: '305px',
                                    height: '366px',
                                    borderRadius: '10px',
                                    background: 'rgba(49, 119, 225, 0.1)',
                                    position: 'relative'
                                }}
                                className="cursor-pointer hover:shadow-lg transition-shadow"
                            >
                                {/* Image - 265px × 203.54px */}
                                <div
                                    style={{
                                        width: '265px',
                                        height: '203.54px',
                                        position: 'absolute',
                                        top: '17.7px',
                                        left: '20px',
                                        borderRadius: '10px',
                                        background: '#FFFFFF',
                                        overflow: 'hidden'
                                    }}
                                >
                                    <img
                                        src={item.image}
                                        alt={item.category}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover'
                                        }}
                                    />
                                </div>

                                {/* Category Title - 107px × 24.78px */}
                                <h3
                                    style={{
                                        width: 'auto',
                                        maxWidth: '265px',
                                        height: '24.78px',
                                        position: 'absolute',
                                        top: '241.59px',
                                        left: '20px',
                                        fontFamily: "'DM Sans', sans-serif",
                                        fontWeight: 700,
                                        fontSize: '18px',
                                        lineHeight: '155%',
                                        letterSpacing: '0.015em',
                                        color: '#1566B7',
                                        margin: 0
                                    }}
                                >
                                    {item.category}
                                </h3>

                                {/* Description - 265px × 49.56px */}
                                <p
                                    style={{
                                        width: '265px',
                                        height: '49.56px',
                                        position: 'absolute',
                                        top: '270.8px',
                                        left: '20px',
                                        fontFamily: "'DM Sans', sans-serif",
                                        fontWeight: 400,
                                        fontSize: '18px',
                                        lineHeight: '155%',
                                        letterSpacing: '0.015em',
                                        color: '#3C4959',
                                        margin: 0
                                    }}
                                >
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsUpdates;
