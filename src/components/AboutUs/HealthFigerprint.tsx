const HealthFigerprint = () => {
    return (
        <div
            className="w-full relative overflow-hidden"
            style={{
                background: '#FFFFFF',
                paddingTop: '80px',
                paddingBottom: '80px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            {/* Overall Container - 1305px × 544px */}
            <div
                style={{
                    width: '1305px',
                    height: '544px',
                    borderRadius: '30px',
                    background: '#3177E11A',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0 60px',
                    position: 'relative'
                }}
            >
                {/* Left Side - iPhone Image - 645px × 470px */}
                <div
                    style={{
                        width: '645px',
                        height: '470px',
                        position: 'relative',
                        flexShrink: 0
                    }}
                >
                    <img
                        src="/Aboutus/iPhone15.png"
                        alt="Healthcare App"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'contain'
                        }}
                    />
                </div>

                {/* Right Side - Text Content - 623px × 323px */}
                <div
                    style={{
                        width: '650px',
                        height: '323px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '16px',
                        justifyContent: 'flex-start'
                    }}
                >
                    {/* Main Heading - 605px × 56px */}
                    <h2
                        style={{
                            width: '605px',
                            height: '56px',
                            fontFamily: "'Source Serif Pro', serif",
                            fontWeight: 600,
                            fontSize: '42px',
                            lineHeight: '121%',
                            letterSpacing: '-2%',
                            textTransform: 'capitalize',
                            color: '#1566B7',
                            margin: 0
                        }}
                    >
                        Healthcare At Your Fingertips
                    </h2>

                    {/* Subheading and Description - 560.93px × 82px */}
                    <div
                        style={{
                            width: '560.93px',
                            height: '82px'
                        }}
                    >
                        {/* Bold Subheading */}
                        <p
                            style={{
                                fontFamily: "'DM Sans', sans-serif",
                                fontWeight: 700,
                                fontSize: '20px',
                                lineHeight: '27px',
                                letterSpacing: '0%',
                                color: '#142349',
                                margin: 0,
                                marginBottom: '1px'
                            }}
                        >
                            Atharv Healthcare mobile app — coming soon.
                        </p>

                        {/* Description */}
                        <p
                            style={{
                                fontFamily: "'DM Sans', sans-serif",
                                fontWeight: 300,
                                fontSize: '18px',
                                lineHeight: '27px',
                                letterSpacing: '0%',
                                color: '#142349',
                                margin: 0
                            }}
                        >
                            Book consultations, order medicines, schedule lab tests and access reports from one place.
                        </p>
                    </div>

                    {/* Bullet Points List - 560.93px × 120px */}
                    <ul
                        style={{
                            width: '560.93px',
                            height: '120px',
                            listStyle: 'none',
                            padding: 0,
                            margin: 0,
                            fontFamily: "'DM Sans', sans-serif",
                            fontWeight: 300,
                            fontSize: '18px',
                            lineHeight: '30px',
                            letterSpacing: '0%',
                            color: '#142349'
                        }}
                    >
                        {[
                            'Simple, hassle-free online booking',
                            'E-prescriptions and digital test reports',
                            'Secure data storage and privacy protection',
                            'Call and chat support when you need help'
                        ].map((item, index) => (
                            <li
                                key={index}
                                style={{
                                    paddingLeft: '20px',
                                    position: 'relative'
                                }}
                            >
                                {/* Bullet Dot */}
                                <span
                                    style={{
                                        position: 'absolute',
                                        left: '0',
                                        top: '12px',
                                        width: '6px',
                                        height: '6px',
                                        borderRadius: '50%',
                                        background: '#1566B7'
                                    }}
                                />
                                {item}
                            </li>
                        ))}
                    </ul>

                    {/* Final Bold Statement - 600px × 27px */}
                    <p
                        style={{
                            width: '600px',
                            height: '27px',
                            fontFamily: "'DM Sans', sans-serif",
                            fontWeight: 700,
                            fontSize: '20px',
                            lineHeight: '27px',
                            letterSpacing: '0%',
                            color: '#142349',
                            margin: 0
                        }}
                    >
                        Everything you need for primary healthcare — in one app.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HealthFigerprint;
