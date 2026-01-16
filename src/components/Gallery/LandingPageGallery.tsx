const LandingPageGallery = () => {
    return (
        <div 
            className="relative w-full h-[431px] flex items-center justify-center"
            style={{
                background: 'linear-gradient(228deg, #9ADDFC 14.6%, rgba(79, 197, 224, 0) 68.04%)',
            }}
        >
            {/* Center Content Container */}
            <div className="relative w-[888px] h-[179px]">
                
                {/* Heading - About Atharv Healthcare */}
                <h1 
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center capitalize"
                    style={{
                        width: '651px',
                        height: '68px',
                        fontFamily: 'Source Serif Pro, serif',
                        fontWeight: 600,
                        fontSize: '60px',
                        lineHeight: '114%',
                        letterSpacing: '-2%',
                        color: '#011632',
                        whiteSpace: 'nowrap'
                    }}
                >
                    Media Gallery
                </h1>

                {/* Straight Line Image */}
                <img 
                    src="/Aboutus/LineStraight.png" 
                    alt="line"
                    className="absolute left-1/2 -translate-x-1/2"
                    style={{
                        width: '326px',
                        height: '5px',
                        top: '120px'
                    }}
                />

                {/* Subtitle Text */}
                <p 
                    className="absolute left-0 text-center"
                    style={{
                        width: '888px',
                        height: '34px',
                        top: '150px',
                        fontFamily: 'DM Sans, sans-serif',
                        fontWeight: 300,
                        fontSize: '19px',
                        lineHeight: '30px',
                        letterSpacing: '0%',
                        color: '#3C4959'
                    }}
                >
                    A visual story of our CSR health camps, mobile medical units, corporate wellness programs and community healthcare initiatives across India. 
                </p>

                {/* Book Now Button */}
                {/* <button 
                    className="absolute left-1/2 -translate-x-1/2 hover:bg-[#1566B7] hover:text-white transition-all duration-300"
                    style={{
                        width: '267px',
                        height: '50px',
                        top: '190px',
                        borderRadius: '192px',
                        border: '1px solid #1566B7',
                        paddingTop: '16px',
                        paddingRight: '28px',
                        paddingBottom: '16px',
                        paddingLeft: '28px',
                        background: '#FFFFFF',
                        boxShadow: '1px 6px 7.7px 0px #3177E13D',
                        fontWeight: 600,
                        fontSize: '14px',
                        color: 'black'
                    }}
                >
                    BOOK NOW
                </button> */}
            </div>
        </div>
    );
};

export default LandingPageGallery;
