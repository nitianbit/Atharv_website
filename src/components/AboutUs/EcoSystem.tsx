const EcoSystem = () => {
    const topServices = [
        {
            id: 1,
            icon: "/Aboutus/1.png",
            title: "Online Consult Doctors"
        },
        {
            id: 2,
            icon: "/Aboutus/2.png",
            title: "Get Medicines Delivered"
        },
        {
            id: 3,
            icon: "/Aboutus/3.png",
            title: "Book Home Sample Collection For Lab Tests"
        },
        {
            id: 4,
            icon: "/Aboutus/5.png",
            title: "Request Ambulance Support When Needed"
        }
    ];

    const bottomServices = [
        {
            id: 5,
            icon: "/Aboutus/4.png",
            title: "OHC Setup And Management"
        },
        {
            id: 6,
            icon: "/Aboutus/7.png",
            title: "MMU Deployment For Outreach"
        },
        {
            id: 7,
            icon: "/Aboutus/6.png",
            title: "Preventive And Community Health Initiatives"
        }
    ];

    return (
        <div
            className="w-full relative overflow-hidden"
            style={{
                background: '#FFFFFF',
                paddingTop: '80px',
                paddingBottom: '80px',
                display: 'flex',
                justifyContent: 'center'
            }}
        >
            {/* Overall Container - 1312px × 463px */}
            <div
                style={{
                    width: '1312px',
                    height: '463px',
                    position: 'relative'
                }}
            >
                {/* Main Heading - 1098px × 58px */}
                <h2
                    style={{
                        width: '1098px',
                        height: '58px',
                        fontFamily: "'Source Serif Pro', serif",
                        fontWeight: 600,
                        fontSize: '46px',
                        lineHeight: '100%',
                        letterSpacing: '0.02em',
                        textTransform: 'capitalize',
                        color: '#142349',
                        margin: 0,
                        marginBottom: '46px'
                    }}
                >
                    One Connected Ecosystem —{' '}
                    <span style={{ color: '#1566B7' }}>Multiple Solutions</span>
                </h2>

                {/* Section 1 - 1312px × 157px */}
                <div
                    style={{
                        width: '1312px',
                        height: '157px',
                        marginBottom: '45px'
                    }}
                >
                    {/* Section Heading - 612px × 26px */}
                    <h3
                        style={{
                            width: '612px',
                            height: '26px',
                            fontFamily: "'DM Sans', sans-serif",
                            fontWeight: 600,
                            fontSize: '20px',
                            lineHeight: '27px',
                            letterSpacing: '0%',
                            textTransform: 'uppercase',
                            color: '#142349',
                            margin: 0,
                            marginBottom: '22px'
                        }}
                    >
                        We Bring Services Together So People Can:
                    </h3>

                    {/* Four Boxes - 1312px × 109px */}
                    <div
                        style={{
                            width: '1312px',
                            height: '109px',
                            display: 'flex',
                            justifyContent: 'space-between'
                        }}
                    >
                        {topServices.map((service) => (
                            <div
                                key={service.id}
                                style={{
                                    width: '318px',
                                    height: '109px',
                                    borderRadius: '8.3px',
                                    background: '#3177E11A',
                                    border: '2px solid #DEDEDE1A',
                                    boxShadow: '0px 0px 4px 0px #00000036',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '20px',
                                    padding: '0 20px',
                                    transition: 'transform 0.3s ease',
                                    cursor: 'pointer'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-3px)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                }}
                            >
                                {/* Icon - 54px × 54px */}
                                <div
                                    style={{
                                        width: '54px',
                                        height: '54px',
                                        flexShrink: 0,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}
                                >
                                    <img
                                        src={service.icon}
                                        alt={service.title}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'contain'
                                        }}
                                    />
                                </div>

                                {/* Title - 206px × 66px */}
                                <h4
                                    style={{
                                        width: '206px',
                                        height: '66px',
                                        fontFamily: "'DM Sans', sans-serif",
                                        fontWeight: 600,
                                        fontSize: '18px',
                                        lineHeight: '25px',
                                        letterSpacing: '0%',
                                        textTransform: 'capitalize',
                                        color: '#142349',
                                        margin: 0,
                                        display: 'flex',
                                        alignItems: 'center'
                                    }}
                                >
                                    {service.title}
                                </h4>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Section 2 - 981px × 157px */}
                <div
                    style={{
                        width: '981px',
                        height: '157px'
                    }}
                >
                    {/* Section Heading - 612px × 26px */}
                    <h3
                        style={{
                            width: '612px',
                            height: '26px',
                            fontFamily: "'DM Sans', sans-serif",
                            fontWeight: 600,
                            fontSize: '20px',
                            lineHeight: '27px',
                            letterSpacing: '0%',
                            textTransform: 'uppercase',
                            color: '#142349',
                            margin: 0,
                            marginBottom: '22px'
                        }}
                    >
                        Alongside This, We Provide:
                    </h3>

                    {/* Three Boxes - 981px × 109px */}
                    <div
                        style={{
                            width: '981px',
                            height: '109px',
                            display: 'flex',
                            justifyContent: 'space-between'
                        }}
                    >
                        {bottomServices.map((service) => (
                            <div
                                key={service.id}
                                style={{
                                    width: '318px',
                                    height: '109px',
                                    borderRadius: '8.3px',
                                    background: '#3177E11A',
                                    border: '2px solid #DEDEDE1A',
                                    boxShadow: '0px 0px 4px 0px #00000036',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '20px',
                                    padding: '0 20px',
                                    transition: 'transform 0.3s ease',
                                    cursor: 'pointer'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-3px)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                }}
                            >
                                {/* Icon - 57px × 54px */}
                                <div
                                    style={{
                                        width: '57px',
                                        height: '54px',
                                        flexShrink: 0,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}
                                >
                                    <img
                                        src={service.icon}
                                        alt={service.title}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'contain'
                                        }}
                                    />
                                </div>

                                {/* Title - 206px × 66px */}
                                <h4
                                    style={{
                                        width: '206px',
                                        height: '66px',
                                        fontFamily: "'DM Sans', sans-serif",
                                        fontWeight: 600,
                                        fontSize: '18px',
                                        lineHeight: '25px',
                                        letterSpacing: '0%',
                                        textTransform: 'capitalize',
                                        color: '#142349',
                                        margin: 0,
                                        display: 'flex',
                                        alignItems: 'center'
                                    }}
                                >
                                    {service.title}
                                </h4>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EcoSystem;
