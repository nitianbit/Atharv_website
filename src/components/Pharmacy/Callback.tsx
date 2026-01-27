const Callback = () => {
    return (
        <div className="w-full bg-white py-8 lg:py-12 px-4">
            <div className="mx-auto" style={{ maxWidth: '1512px' }}>
                
                {/* Main Container */}
                <div 
                    className="relative flex items-center overflow-visible mx-auto"
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
                        className="w-full lg:ml-auto flex flex-col p-8 lg:p-0"
                        style={{
                            maxWidth: '593px',
                            gap: '13px',
                            paddingRight: '0',
                            marginLeft: 'auto'
                        }}
                    >
                        
                        {/* Heading */}
                        <h2 
                            className="lg:w-[586px]"
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
                           Contact Us for Institutional & Pharmacy Supply Services
                        </h2>

                     
                        {/* Button */}
                        <button 
                            className="hover:opacity-90 transition-all hover:shadow-xl"
                            style={{
                                width: '267px',
                                height: '50px',
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
                                style={{
                                    fontFamily: "'DM Sans', sans-serif",
                                    fontWeight: 600,
                                    fontSize: '16px',
                                    lineHeight: '100%',
                                    textTransform: 'uppercase',
                                    color: '#142349',
                                    whiteSpace: 'nowrap'
                                }}
                            >
                                REACH OUT TO US
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Callback;
