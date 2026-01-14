const Network = () => {
    return (
        <div className="w-full bg-white py-16 px-4">
            {/* Overall Container - 1512px × 633px */}
            <div
                style={{
                    width: '100%',
                    maxWidth: '1512px',
                    height: '633px',
                    margin: '0 auto',
                    position: 'relative',
                    overflow: 'hidden'
                }}
            >

                {/* Heading - 727px × 58px */}
                <h2
                    style={{
                        width: '727px',
                        height: '58px',
                        position: 'absolute',
                        top: 0,
                        left: '393px',
                        fontFamily: "'Source Serif Pro', serif",
                        fontWeight: 600,
                        fontSize: '46px',
                        lineHeight: '100%',
                        letterSpacing: '0.02em',
                        textAlign: 'center',
                        textTransform: 'capitalize',
                        color: '#142349',
                        margin: 0
                    }}
                >
                    A network you can rely on
                </h2>

                {/* Center Image - 555px × 555px */}
                <div
                    style={{
                        width: '555px',
                        height: '555px',
                        position: 'absolute',
                        top: '78px',
                        left: '478px'
                    }}
                >
                    <img
                        src="/Homepage/DoctorNetwork.png"
                        alt="Healthcare Network"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                        }}
                    />
                </div>

                {/* Background Color Section - 1512px × 277px */}
                <div
                    style={{
                        width: '100%',
                        height: '277px',
                        position: 'absolute',
                        top: '217px',
                        left: 0,
                        background: 'rgba(49, 119, 225, 0.1)'
                    }}
                />

                {/* Left Text Container - 362px × 153px */}
                <div
                    style={{
                        width: '362px',
                        height: '153px',
                        position: 'absolute',
                        top: '270px',
                        left: '100px'
                    }}
                >
                    {/* Left Heading - "We work with:" */}
                    <h3
                        style={{
                            width: '216px',
                            height: '26px',
                            fontFamily: "'DM Sans', sans-serif",
                            fontWeight: 700,
                            fontSize: '20px',
                            lineHeight: '100%',
                            letterSpacing: '0',
                            textTransform: 'capitalize',
                            color: '#142349',
                            margin: 0,
                            marginBottom: '7px'
                        }}
                    >
                        We work with:
                    </h3>

                    {/* Left List Items */}
                    <div
                        style={{
                            position: 'relative',
                            paddingLeft: '26px'
                        }}
                    >
                        {/* List Container - 336px × 120px */}
                        <div
                            style={{
                                width: '336px',
                                height: '120px',
                                fontFamily: "'DM Sans', sans-serif",
                                fontWeight: 300,
                                fontSize: '18px',
                                lineHeight: '30px',
                                letterSpacing: '0',
                                color: '#000000'
                            }}
                        >
                            {/* Item 1 */}
                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0px', position: 'relative' }}>
                                <img
                                    src="/Homepage/check.png"
                                    alt=""
                                    style={{
                                        width: '17px',
                                        height: '17px',
                                        position: 'absolute',
                                        left: '-26px',
                                        top: '7px'
                                    }}
                                />
                                <span>Verified doctors</span>
                            </div>

                            {/* Item 2 */}
                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0px', position: 'relative' }}>
                                <img
                                    src="/Homepage/check.png"
                                    alt=""
                                    style={{
                                        width: '17px',
                                        height: '17px',
                                        position: 'absolute',
                                        left: '-26px',
                                        top: '7px'
                                    }}
                                />
                                <span>Trusted diagnostic laboratories</span>
                            </div>

                            {/* Item 3 */}
                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0px', position: 'relative' }}>
                                <img
                                    src="/Homepage/check.png"
                                    alt=""
                                    style={{
                                        width: '17px',
                                        height: '17px',
                                        position: 'absolute',
                                        left: '-26px',
                                        top: '7px'
                                    }}
                                />
                                <span>Licensed pharmacy partners</span>
                            </div>

                            {/* Item 4 */}
                            <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
                                <img
                                    src="/Homepage/check.png"
                                    alt=""
                                    style={{
                                        width: '17px',
                                        height: '17px',
                                        position: 'absolute',
                                        left: '-26px',
                                        top: '7px'
                                    }}
                                />
                                <span>Trained ambulance service providers</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Text Container - 325px × 122px */}
                <div
                    style={{
                        width: '325px',
                        height: '122px',
                        position: 'absolute',
                        top: '289px',
                        left: '1105px'
                    }}
                >
                    {/* Right Heading - "Add when available:" */}
                    <h3
                        style={{
                            width: '234px',
                            height: '26px',
                            fontFamily: "'DM Sans', sans-serif",
                            fontWeight: 700,
                            fontSize: '20px',
                            lineHeight: '100%',
                            letterSpacing: '0',
                            textTransform: 'capitalize',
                            color: '#142349',
                            margin: 0,
                            marginBottom: '6px'
                        }}
                    >
                        Add when available:
                    </h3>

                    {/* Right List Items */}
                    <div
                        style={{
                            position: 'relative',
                            paddingLeft: '26px'
                        }}
                    >
                        {/* List Container - 299px × 90px */}
                        <div
                            style={{
                                width: '299px',
                                height: '90px',
                                fontFamily: "'DM Sans', sans-serif",
                                fontWeight: 300,
                                fontSize: '18px',
                                lineHeight: '30px',
                                letterSpacing: '0',
                                color: '#000000'
                            }}
                        >
                            {/* Item 1 */}
                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0px', position: 'relative' }}>
                                <img
                                    src="/Homepage/check.png"
                                    alt=""
                                    style={{
                                        width: '17px',
                                        height: '17px',
                                        position: 'absolute',
                                        left: '-26px',
                                        top: '7px'
                                    }}
                                />
                                <span>NABL / ISO certifications</span>
                            </div>

                            {/* Item 2 */}
                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0px', position: 'relative' }}>
                                <img
                                    src="/Homepage/check.png"
                                    alt=""
                                    style={{
                                        width: '17px',
                                        height: '17px',
                                        position: 'absolute',
                                        left: '-26px',
                                        top: '7px'
                                    }}
                                />
                                <span>Number of cities served</span>
                            </div>

                            {/* Item 3 */}
                            <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
                                <img
                                    src="/Homepage/check.png"
                                    alt=""
                                    style={{
                                        width: '17px',
                                        height: '17px',
                                        position: 'absolute',
                                        left: '-26px',
                                        top: '7px'
                                    }}
                                />
                                <span>Total patients supported</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Network;
