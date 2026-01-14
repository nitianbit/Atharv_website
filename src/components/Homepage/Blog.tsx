const Blog = () => {
    return (
        <div className="w-full bg-white py-16 px-4">
            <div style={{ maxWidth: '1512px', margin: '0 auto' }}>
                
                {/* Overall Container - 1308.5px × 498.96px */}
                <div 
                    style={{
                        width: '1308.5px',
                        height: '498.96px',
                        margin: '0 auto',
                        position: 'relative',
                        overflow: 'hidden'
                    }}
                >
                    
                    {/* Left Text Section - 475px × 283px, gap: 28px */}
                    <div 
                        style={{
                            width: '475px',
                            height: '283px',
                            position: 'absolute',
                            top: '45px',
                            left: 0,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '28px'
                        }}
                    >
                        {/* Heading - 475px × 58px */}
                        <h2 
                            style={{
                                width: '475px',
                                height: '58px',
                                fontFamily: "'Source Serif Pro', serif",
                                fontWeight: 600,
                                fontSize: '46px',
                                lineHeight: '100%',
                                letterSpacing: '0.02em',
                                textTransform: 'capitalize',
                                margin: 0
                            }}
                        >
                            <span style={{ color: '#142349' }}>From </span>
                            <span style={{ color: '#1566B7' }}>Our Blog</span>
                        </h2>

                        {/* Description - 410px × 150px */}
                        <p 
                            style={{
                                width: '410px',
                                height: '150px',
                                fontFamily: "'DM Sans', sans-serif",
                                fontWeight: 300,
                                fontSize: '18px',
                                lineHeight: '30px',
                                letterSpacing: '0',
                                color: '#142349',
                                margin: 0
                            }}
                        >
                            Stay informed with easy, trusted insights on health, medicines, diagnostics and healthcare services. Explore expert articles, tips and explainers designed to help you make better health decisions.
                        </p>

                        {/* Button - 144px × 19px, gap: 8px */}
                        <a 
                            href="/blog"
                            style={{
                                width: '144px',
                                height: '19px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                borderRadius: '5px',
                                textDecoration: 'none',
                                cursor: 'pointer'
                            }}
                            className="hover:opacity-80 transition-opacity"
                        >
                            <span 
                                style={{
                                    width: '122px',
                                    height: '20px',
                                    fontFamily: "'DM Sans', sans-serif",
                                    fontWeight: 600,
                                    fontSize: '15px',
                                    lineHeight: '100%',
                                    letterSpacing: '0',
                                    textTransform: 'uppercase',
                                    // textDecoration: 'underline',
                                    color: '#1566B7'
                                }}
                            >
                                VIEW ALL BLOGS
                            </span>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1566B7" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7"/>
                            </svg>
                        </a>
                    </div>

                    {/* Girl 1 Card - 374px × 456px */}
                    <div 
                        style={{
                            width: '374px',
                            height: '456px',
                            position: 'absolute',
                            top: 0,
                            left: '515px',
                            boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)'
                        }}
                        className="cursor-pointer hover:shadow-lg transition-shadow"
                    >
                        {/* Image */}
                        <div 
                            style={{
                                width: '374px',
                                height: '368px',
                                overflow: 'hidden'
                            }}
                        >
                            <img 
                                src="/Homepage/BlogGirl1.png"
                                alt="Benefits of online doctor consultation"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'fill'
                                }}
                            />
                        </div>

                        {/* Text Box - 374px × 88px */}
                        <div 
                            style={{
                                width: '374px',
                                height: '88px',
                                background: '#1566B7',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: '11px'
                            }}
                        >
                            <h3 
                                style={{
                                    width: '327px',
                                    height: '52px',
                                    fontFamily: "'DM Sans', sans-serif",
                                    fontWeight: 700,
                                    fontSize: '20px',
                                    lineHeight: '100%',
                                    letterSpacing: '0',
                                    textAlign: 'center',
                                    textTransform: 'capitalize',
                                    color: '#FFFFFF',
                                    margin: 0,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                            >
                                Benefits of online doctor consultation in India
                            </h3>
                        </div>
                    </div>

                    {/* Girl 2 Card - 374.71px × 456px */}
                    <div 
                        style={{
                            width: '374.71px',
                            height: '456px',
                            position: 'absolute',
                            top: 0,
                            left: '933.79px',
                            boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)'
                        }}
                        className="cursor-pointer hover:shadow-lg transition-shadow"
                    >
                        {/* Image - 373.53px × 456px */}
                        <div 
                            style={{
                                width: '373.53px',
                                height: '368px',
                                overflow: 'hidden'
                            }}
                        >
                            <img 
                                src="/Homepage/BlogGirl2.png"
                                alt="How home sample collection works"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'fill'
                                }}
                            />
                        </div>

                        {/* Text Box - 374.71px × 88.14px */}
                        <div 
                            style={{
                                width: '374.71px',
                                height: '88.14px',
                                background: 'rgba(255, 255, 255, 0.9)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: '11px'
                            }}
                        >
                            <h3 
                                style={{
                                    width: '345px',
                                    height: '52px',
                                    fontFamily: "'DM Sans', sans-serif",
                                    fontWeight: 700,
                                    fontSize: '20px',
                                    lineHeight: '100%',
                                    letterSpacing: '0',
                                    textAlign: 'center',
                                    textTransform: 'capitalize',
                                    color: '#142349',
                                    margin: 0,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                            >
                                How home sample collection works for lab tests
                            </h3>
                        </div>
                    </div>

                    {/* Pagination Dots */}
                    <div 
                        style={{
                            position: 'absolute',
                            bottom: '-40px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            display: 'flex',
                            gap: '10px',
                            alignItems: 'center'
                        }}
                    >
                        <span 
                            style={{
                                width: '32px',
                                height: '10px',
                                borderRadius: '5px',
                                background: '#1566B7',
                                cursor: 'pointer'
                            }}
                        ></span>
                        <span 
                            style={{
                                width: '10px',
                                height: '10px',
                                borderRadius: '50%',
                                background: '#D1D5DB',
                                cursor: 'pointer'
                            }}
                        ></span>
                        <span 
                            style={{
                                width: '10px',
                                height: '10px',
                                borderRadius: '50%',
                                background: '#D1D5DB',
                                cursor: 'pointer'
                            }}
                        ></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
