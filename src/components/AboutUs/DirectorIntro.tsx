const DirectorIntro = () => {
    return (
        <div className="w-full bg-white relative overflow-hidden">
            {/* Overall Container - 1409px × 645px */}
            <div
                style={{
                    width: '1524px',
                    height: '645.04px',
                    margin: '0 auto',
                    position: 'relative'
                }}
            >
                {/* Right Text Box - BEHIND images (lower z-index) */}
                <div
                    style={{
                        position: 'absolute',
                        top: '170px',
                        left: '356.43px',
                        width: '1052.57px',
                        height: '384px',
                        borderRadius: '30px',
                        background: '#E5F2FF',
                        zIndex: 1
                    }}
                />

                {/* Blue Organic Shape Background - Box Image */}
                <div
                    style={{
                        position: 'absolute',
                        top: '177px',
                        left: '0px',
                        width: '703.62px',
                        height: '467.74px',
                        zIndex: 2
                    }}
                >
                    <img
                        src="/Aboutus/Box.png"
                        alt="background"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                        }}
                    />
                </div>

                {/* Doctor Image - Indian Men */}
                <div
                    style={{
                        position: 'absolute',
                        top: '15px',
                        left: '132.92px',
                        width: '465.63px',
                        height: '645.04px',
                        // boxShadow: '-5px 1px 13px 0px rgba(0, 0, 0, 0.15)',
                        zIndex: 3
                    }}
                >
                    <img
                        src="/Aboutus/IndianMen.png"
                        alt="Pankaj Kumar Singh"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                        }}
                    />
                </div>

                {/* Text Content - 557.3px × 223px */}
                <div
                    style={{
                        position: 'absolute',
                        top: '243px',
                        left: '763.09px',
                        width: '557.3px',
                        height: '223px',
                        zIndex: 4
                    }}
                >
                    {/* Director Name - Pankaj Kumar Singh */}
                    <h2
                        style={{
                            width: '388px',
                            height: '24px',
                            fontFamily: "'DM Sans', sans-serif",
                            fontWeight: 700,
                            fontSize: '20px',
                            lineHeight: '121%',
                            letterSpacing: '-2%',
                            textTransform: 'capitalize',
                            color: '#1566B7',
                            margin: 0,
                            marginBottom: '10px'
                        }}
                    >
                        Pankaj Kumar Singh
                    </h2>

                    {/* Director Title - (Director) */}
                    <p
                        style={{
                            width: '542px',
                            height: '30px',
                            fontFamily: "'DM Sans', sans-serif",
                            fontWeight: 300,
                            fontSize: '18px',
                            lineHeight: '30px',
                            letterSpacing: '0%',
                            color: '#142349',
                            margin: 0,
                            marginBottom: '9px'
                        }}
                    >
                        (Director)
                    </p>

                    {/* Description Text */}
                    <p
                        style={{
                            width: '542px',
                            height: '150px',
                            fontFamily: "'DM Sans', sans-serif",
                            fontWeight: 300,
                            fontSize: '18px',
                            lineHeight: '30px',
                            letterSpacing: '0%',
                            color: '#142349',
                            margin: 0
                        }}
                    >
                        Leads strategic direction, service expansion and quality assurance. Focuses on building reliable healthcare systems and strengthening partnerships. Leads strategic direction, service expansion and quality assurance. Focuses on building reliable healthcare systems and strengthening partnerships.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default DirectorIntro;
