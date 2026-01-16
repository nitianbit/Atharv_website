const UpcomingEvent = () => {
    const events = [
        {
            id: 1,
            image: "/Gallery/Up2.png",
            title: "CSR events",
            description: "Short description",
            address: "Address",
            date: "Date",
            isPrimary: true
        },
        {
            id: 2,
            image: "/Gallery/Up1.png",
            title: "CSR events",
            description: "Short description",
            address: "Address",
            date: "Date",
            isPrimary: false
        },
        {
            id: 3,
            image: "/Gallery/Up2.png",
            title: "CSR events",
            description: "Short description",
            address: "Address",
            date: "Date",
            isPrimary: false
        },
        {
            id: 4,
            image: "/Gallery/Up1.png",
            title: "CSR events",
            description: "Short description",
            address: "Address",
            date: "Date",
            isPrimary: false
        }
    ];

    return (
        <div 
            style={{
                width: '100%',
                background: '#FFFFFF',
                padding: '80px 0',
                display: 'flex',
                justifyContent: 'center'
            }}
        >
            <div 
                style={{
                    width: '1310px',
                    height: '564px',
                    position: 'relative',
                    margin: '0 auto'
                }}
            >
                {/* Header Section */}
                <div 
                    style={{
                        width: '1308.97px',
                        height: '88px',
                        position: 'relative',
                        marginBottom: '41px'
                    }}
                >
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
                            color: '#142349',
                            margin: 0,
                            padding: 0
                        }}
                    >
                        Upcoming <span style={{ color: '#1566B7' }}>Events</span>
                    </h2>
                    <p 
                        style={{
                            width: '780px',
                            height: '30px',
                            position: 'absolute',
                            top: '58px',
                            fontFamily: "'DM Sans', sans-serif",
                            fontWeight: 300,
                            fontSize: '18px',
                            lineHeight: '30px',
                            letterSpacing: '0',
                            color: '#142349',
                            margin: 0,
                            padding: 0
                        }}
                    >
                        Stay updated with Atharv Healthcare's upcoming:
                    </p>
                </div>

                {/* Events Cards Container */}
                <div 
                    style={{
                        width: '1310px',
                        height: '435px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        gap: '0'
                    }}
                >
                    {events.map((event) => (
                        <div
                            key={event.id}
                            style={{
                                width: '305px',
                                height: '435px',
                                // border: '1px solid #1566B7',
                                borderRadius: '10px',
                                position: 'relative',
                                background: 'rgba(49, 119, 225, 0.1)'
                            }}
                        >
                            {/* Event Image */}
                            <div 
                                style={{
                                    width: '265px',
                                    height: '203.54px',
                                    position: 'absolute',
                                    top: '17.7px',
                                    left: '20px',
                                    borderRadius: '10px',
                                    overflow: 'hidden',
                                    background: '#FFFFFF'
                                }}
                            >
                                <img 
                                    src={event.image}
                                    alt={event.title}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        display: 'block'
                                    }}
                                />
                            </div>

                            {/* Title */}
                            <h3 
                                style={{
                                    width: '130px',
                                    height: '25px',
                                    position: 'absolute',
                                    top: '241px',
                                    left: '20px',
                                    fontFamily: "'DM Sans', sans-serif",
                                    fontWeight: 700,
                                    fontSize: '18px',
                                    lineHeight: '155%',
                                    letterSpacing: '0.015em',
                                    color: '#1566B7',
                                    margin: 0,
                                    padding: 0
                                }}
                            >
                                {event.title}
                            </h3>

                            {/* Description */}
                            <p 
                                style={{
                                    width: '139px',
                                    height: '25px',
                                    position: 'absolute',
                                    top: '268px',
                                    left: '20px',
                                    fontFamily: "'DM Sans', sans-serif",
                                    fontWeight: 300,
                                    fontSize: '16px',
                                    lineHeight: '30px',
                                    letterSpacing: '0',
                                    color: '#3C4959',
                                    margin: 0,
                                    padding: 0
                                }}
                            >
                                {event.description}
                            </p>

                            {/* Location Icon */}
                            <svg 
                                width="19" 
                                height="17" 
                                viewBox="0 0 24 24" 
                                fill="none"
                                style={{
                                    position: 'absolute',
                                    top: '301px',
                                    left: '21px'
                                }}
                            >
                                <path 
                                    d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" 
                                    fill="#1566B7"
                                />
                            </svg>

                            {/* Date Icon */}
                            <svg 
                                width="19" 
                                height="20" 
                                viewBox="0 0 24 24" 
                                fill="none"
                                style={{
                                    position: 'absolute',
                                    top: '327px',
                                    left: '21px'
                                }}
                            >
                                <path 
                                    d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM9 14H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm-8 4H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z" 
                                    fill="#1566B7"
                                />
                            </svg>

                            {/* Address and Date Text */}
                            <div 
                                style={{
                                    width: '101px',
                                    height: '50px',
                                    position: 'absolute',
                                    top: '298px',
                                    left: '48px',
                                    fontFamily: "'DM Sans', sans-serif",
                                    fontWeight: 400,
                                    fontSize: '16px',
                                    lineHeight: '160%',
                                    letterSpacing: '0.015em',
                                    color: '#3C4959'
                                }}
                            >
                                <div style={{ marginBottom: '6px' }}>{event.address}</div>
                                <div>{event.date}</div>
                            </div>

                            {/* Register Button */}
                            <button
                                style={{
                                    width: '265px',
                                    height: '38px',
                                    position: 'absolute',
                                    top: '371px',
                                    left: '20px',
                                    borderRadius: '192px',
                                    border: event.isPrimary ? 'none' : '1px solid #1566B7',
                                    background: event.isPrimary ? '#1566B7' : '#FFFFFF',
                                    boxShadow: event.isPrimary ? 'none' : '1px 6px 7.7px 0px rgba(49, 119, 225, 0.24)',
                                    padding: '16px 27px 16px 28px',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '10px',
                                    transition: 'all 0.3s ease'
                                }}
                                onMouseEnter={(e) => {
                                    if (event.isPrimary) {
                                        e.currentTarget.style.background = '#0F58A1';
                                    } else {
                                        e.currentTarget.style.background = '#EBF4FF';
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    if (event.isPrimary) {
                                        e.currentTarget.style.background = '#1566B7';
                                    } else {
                                        e.currentTarget.style.background = '#FFFFFF';
                                    }
                                }}
                            >
                                <span
                                    style={{
                                        width: '103px',
                                        height: '18px',
                                        fontFamily: "'DM Sans', sans-serif",
                                        fontWeight: 600,
                                        fontSize: '14px',
                                        lineHeight: '100%',
                                        letterSpacing: '0',
                                        textTransform: 'uppercase',
                                        color: event.isPrimary ? '#FFFFFF' : '#1566B7',
                                        verticalAlign: 'middle'
                                    }}
                                >
                                    REGISTER NOW
                                </span>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default UpcomingEvent;
