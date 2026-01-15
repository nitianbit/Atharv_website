const ThreeStep = () => {
    return (
        <div className="w-full relative mx-auto " style={{ height: '538px', maxWidth: '1511px', marginTop: '100px' }}>
            {/* Unified Blue Gradient Background */}
            <div
                className="absolute"
                style={{
                    width: 'calc(100% - 210px)',
                    height: '100%',
                    left: '210px',
                    top: '0px',
                    background: 'linear-gradient(126.19deg, #2B7FD8 21.84%, #4A96F0 78.16%)',
                    zIndex: 1
                }}
            ></div>

            {/* Doctor Image */}
            <img
                src="/Homepage/indian-male.png"
                alt="Doctor"
                className="absolute object-contain"
                style={{
                    width: '467px',
                    height: '657px',
                    top: '-90px',
                    left: '0px',
                    zIndex: 10,
                }}
            />

            <div
                className="absolute flex flex-col items-center"
                style={{
                    width: '100%',
                    maxWidth: '1009px',
                    height: '412px',
                    left: '467px',
                    top: '75px',
                    gap: '56px',
                    zIndex: 20
                }}
            >
                {/* Title */}
                <div style={{
                    width: '100%',
                    maxWidth: '727px',
                    textAlign: 'center',
                }}>
                    <h2 style={{
                        fontFamily: "'Source Serif Pro', serif",
                        fontWeight: 600,
                        fontSize: '46px',
                        lineHeight: '100%',
                        letterSpacing: '0.02em',
                        textTransform: 'capitalize',
                        color: '#FFFFFF',
                        marginBottom: '10px',
                    }}>
                        Book Healthcare Services Online <br />
                        <span style={{
                            fontFamily: "'Source Serif Pro', serif",
                            fontWeight: 600,
                            fontSize: '46px',
                            lineHeight: '100%',
                            letterSpacing: '0.02em',
                            textTransform: 'capitalize',
                            color: '#FFFFFF',
                        }}>In 3 Simple Steps</span>
                    </h2>
                </div>

                {/* Step Container */}
                <div
                    className="relative flex justify-center w-full"
                    style={{
                        width: '100%',
                        maxWidth: '1009px',
                        height: '240px',
                        gap: '62px',
                    }}
                >
                    {/* Dashed Line Left */}
                    <div
                        className="absolute"
                        style={{
                            width: '250px',
                            height: '0px',
                            borderTopWidth: '2px',
                            borderTopStyle: 'dashed',
                            borderColor: 'rgba(255, 255, 255, 0.5)',
                            top: '50px',
                            left: '180px',
                        }}
                    ></div>

                    {/* Dashed Line Right */}
                    <div
                        className="absolute"
                        style={{
                            width: '250px',
                            height: '0px',
                            borderTopWidth: '2px',
                            borderTopStyle: 'dashed',
                            borderColor: 'rgba(255, 255, 255, 0.5)',
                            top: '50px',
                            right: '180px',
                        }}
                    ></div>

                    {/* Step 1 */}
                    <div className="relative flex flex-col items-center z-10" style={{ gap: '20px' }}>
                        <div style={{
                            width: '320px',
                            height: '130px',
                            fontFamily: "'DM Sans', sans-serif",
                            fontWeight: 900,
                            fontSize: '100px',
                            lineHeight: '100%',
                            textAlign: 'center',
                            textTransform: 'uppercase',
                            color: '#FFFFFF',
                        }}>
                            1
                        </div>
                        <div style={{
                            width: '232px',
                            height: '104px',
                            fontFamily: "'DM Sans', sans-serif",
                            fontWeight: 600,
                            fontSize: '20px',
                            lineHeight: '120%',
                            textAlign: 'center',
                            textTransform: 'capitalize',
                            color: '#FFFFFF',
                        }}>
                            Select The Service — Doctor Consultation, Pharmacy, Diagnostics Or Ambulance
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="relative flex flex-col items-center z-10" style={{ gap: '20px' }}>
                        <div style={{
                            width: '320px',
                            height: '130px',
                            fontFamily: "'DM Sans', sans-serif",
                            fontWeight: 900,
                            fontSize: '100px',
                            lineHeight: '100%',
                            textAlign: 'center',
                            textTransform: 'uppercase',
                            color: '#FFFFFF',
                        }}>
                            2
                        </div>
                        <div style={{
                            width: '232px',
                            height: '104px',
                            fontFamily: "'DM Sans', sans-serif",
                            fontWeight: 600,
                            fontSize: '20px',
                            lineHeight: '120%',
                            textAlign: 'center',
                            textTransform: 'capitalize',
                            color: '#FFFFFF',
                        }}>
                            Share Basic Details And Preferred Time
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="relative flex flex-col items-center z-10" style={{ gap: '20px' }}>
                        <div style={{
                            width: '320px',
                            height: '130px',
                            fontFamily: "'DM Sans', sans-serif",
                            fontWeight: 900,
                            fontSize: '100px',
                            lineHeight: '100%',
                            textAlign: 'center',
                            textTransform: 'uppercase',
                            color: '#FFFFFF',
                        }}>
                            3
                        </div>
                        <div style={{
                            width: '232px',
                            height: '104px',
                            fontFamily: "'DM Sans', sans-serif",
                            fontWeight: 600,
                            fontSize: '20px',
                            lineHeight: '120%',
                            textAlign: 'center',
                            textTransform: 'capitalize',
                            color: '#FFFFFF',
                        }}>
                            Confirm Booking — We Handle The Rest
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ThreeStep;
