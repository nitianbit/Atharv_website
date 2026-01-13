// import React from 'react';

const ThreeStep = () => {
    return (
        <div className="w-full relative mx-auto" style={{ height: '638px', maxWidth: '1511px', marginTop: '100px' }}>
            <div
                className="absolute inset-0"
                style={{
                    width: '1511px',
                    height: '638px',
                    left: '1px',
                    background: 'linear-gradient(126.19deg, #2B7FD8 21.84%, #4A96F0 78.16%)',
                    borderRadius: '0px',
                }}
            >
                {/* Doctor Image */}
                <img
                    src="/Homepage/indian-male.png"
                    alt="Doctor"
                    className="absolute z-20 object-cover object-top"
                    style={{
                        width: '467px',
                        height: '637px',
                        top: '0px',
                        left: '1px',
                        boxShadow: '4px 2px 13px 0px #00000040',
                    }}
                />

                <div
                    className="absolute flex flex-col items-center"
                    style={{
                        width: '1009px',
                        height: '412px',
                        left: '415px',
                        top: '70px',
                        gap: '56px',
                    }}
                >
                    {/* Title */}
                    <div style={{
                        width: '727px',
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
                            Book healthcare services online <br />
                            <span style={{
                                fontFamily: "'Source Serif Pro', serif",
                                fontWeight: 600,
                                fontSize: '46px',
                                lineHeight: '100%',
                                letterSpacing: '0.02em',
                                textTransform: 'capitalize',
                                color: '#FFFFFF',
                            }}>in 3 simple steps</span>
                        </h2>
                    </div>

                    {/* Step Container */}
                    <div
                        className="relative flex justify-center w-full"
                        style={{
                            width: '1009px',
                            height: '240px',
                            gap: '62px', // Gap between flex items
                        }}
                    >
                        {/* Dashed Line */}
                        <div
                            className="absolute"
                            style={{
                                width: '655px',
                                height: '0px',
                                borderTopWidth: '2px',
                                borderTopStyle: 'dashed',
                                borderColor: 'rgba(255, 255, 255, 0.5)',
                                top: '65px',
                                left: '177px',
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
                                lineHeight: '100%',
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
                                // Matching dimensions from step 1 for consistency
                                width: '232px',
                                height: '104px',
                                fontFamily: "'DM Sans', sans-serif",
                                fontWeight: 600,
                                fontSize: '20px',
                                lineHeight: '100%',
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
                                lineHeight: '100%',
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
        </div>
    );
};

export default ThreeStep;
