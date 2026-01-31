const CTASection = () => {
    return (
        <div className="w-full bg-white py-8 lg:py-12 px-4">
            <div className="mx-auto" style={{ maxWidth: '1512px' }}>
                
                {/* Main Container */}
                <div 
                    className="relative flex items-center overflow-visible mx-auto w-full"
                    style={{
                        maxWidth: '1311px',
                        minHeight: '346px',
                        borderRadius: '20px',
                        background: '#1566B7',
                        border: '3px solid #1566B7'
                    }}
                >
                    
                    {/* Doctor Image - Overlapping */}
                    <div 
                        className="absolute hidden lg:block"
                        style={{
                            width: '531px',
                            height: '551px',
                            top: '-95px',
                            left: '65px',
                            zIndex: 20
                        }}
                    >
                        <img 
                            src="/Homepage/maledoctor.png" 
                            alt="Healthcare professional"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'contain'
                            }}
                        />
                    </div>

                    {/* Content Section */}
                    <div 
                        className="w-full mx-auto lg:ml-auto lg:mr-0 flex flex-col p-8 lg:pl-0 lg:pr-0 lg:pt-0 lg:pb-0 lg:py-0 lg:max-w-[593px]"
                        style={{
                            gap: '13px'
                        }}
                    >
                        
                        {/* Heading */}
                        <h2 
                            className="w-full lg:w-[586px]"
                            style={{
                                fontFamily: "'Source Serif Pro', serif",
                                fontWeight: 600,
                                fontSize: 'clamp(32px, 5vw, 46px)',
                                lineHeight: '121%',
                                letterSpacing: '-0.02em',
                                textTransform: 'capitalize',
                                color: '#FFFFFF',
                                margin: 0
                            }}
                        >
                            Get Reliable Home Healthcare Support 
                        </h2>

                        {/* Description */}
                        <p 
                            className="w-full lg:w-[540px]"
                            style={{
                                fontFamily: "'DM Sans', sans-serif",
                                fontWeight: 300,
                                fontSize: '18px',
                                lineHeight: '30px',
                                color: '#FFFFFF',
                                margin: 0
                            }}
                        >
                            Coordinated care. Medical reliability. Delivered at home.
                        </p>

                        {/* Button */}
                        <button 
                            className="hover:opacity-90 transition-all hover:shadow-xl w-full lg:w-[365px]"
                            style={{
                                minHeight: '50px',
                                borderRadius: '192px',
                                padding: '16px 28px',
                                background: '#FFFFFF',
                                border: '1px solid #1566B7',
                                boxShadow: '1px 6px 7.7px 0px rgba(49, 119, 225, 0.24)',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <span 
                                className="text-center"
                                style={{
                                    fontFamily: "'DM Sans', sans-serif",
                                    fontWeight: 600,
                                    fontSize: 'clamp(14px, 2vw, 16px)',
                                    lineHeight: '100%',
                                    textTransform: 'uppercase',
                                    color: '#142349',
                                    whiteSpace: 'normal',
                                    wordBreak: 'break-word'
                                }}
                            >
                                REQUEST HOME HEALTHCARE SUPPORT
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CTASection;
