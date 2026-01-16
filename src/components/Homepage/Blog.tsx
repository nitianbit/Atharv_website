import { useState, useEffect } from 'react';

const blogData = [
    {
        id: 1,
        title: "Benefits of online doctor consultation in India",
        img: "/Homepage/BlogGirl1.png",
        bgColor: "#1566B7",
        textColor: "#FFFFFF",
        width: "374px"
    },
    {
        id: 2,
        title: "How home sample collection works for lab tests",
        img: "/Homepage/BlogGirl2.png",
        bgColor: "rgba(255, 255, 255, 0.9)",
        textColor: "#142349",
        width: "374.71px"
    },
    {
        id: 3,
        title: "Benefits of online doctor consultation in India",
        img: "/Homepage/BlogGirl1.png",
        bgColor: "#1566B7",
        textColor: "#FFFFFF",
        width: "374px"
    },
    {
        id: 4,
        title: "How home sample collection works for lab tests",
        img: "/Homepage/BlogGirl2.png",
        bgColor: "rgba(255, 255, 255, 0.9)",
        textColor: "#142349",
        width: "374.71px"
    }
];

const Blog = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((current) => current + 1);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (activeIndex === 4) {
            const timeout = setTimeout(() => {
                setIsTransitioning(false);
                setActiveIndex(0);
                
                // Force a reflow to ensure the transition is properly disabled
                setTimeout(() => {
                    setIsTransitioning(true);
                }, 50);
            }, 500);

            return () => clearTimeout(timeout);
        }
    }, [activeIndex]);

    const handleDotClick = (index: number) => {
        setIsTransitioning(true);
        setActiveIndex(index);
    };

    return (
        <div className="w-full bg-white py-16 px-4">
            <div style={{ maxWidth: '1512px', margin: '0 auto' }}>
                {/* Overall Container */}
                <div
                    style={{
                        width: '1308.5px',
                        height: '540px',
                        margin: '0 auto',
                        position: 'relative',
                        overflow: 'visible'
                    }}
                >
                    {/* Left Text Section */}
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
                        {/* Heading */}
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

                        {/* Description */}
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

                        {/* Button */}
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
                                    color: '#1566B7'
                                }}
                            >
                                VIEW ALL BLOGS
                            </span>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1566B7" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </a>
                    </div>

                    {/* Carousel Container */}
                    <div
                        style={{
                            width: '793.5px',
                            height: '456px',
                            position: 'absolute',
                            top: 0,
                            left: '515px',
                            overflow: 'hidden'
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                width: 'max-content',
                                gap: '44.79px',
                                transform: `translateX(-${[0, 418.79, 837.58, 1256.37, 1675.16][activeIndex]}px)`,
                                transition: isTransitioning ? 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)' : 'none',
                                paddingLeft: '2px',
                                paddingTop: '2px',
                                willChange: 'transform'
                            }}
                        >
                            {[...blogData, blogData[0]].map((item, index) => (
                                <div
                                    key={`${item.id}-${index}`}
                                    style={{
                                        width: item.width,
                                        height: '456px',
                                        boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
                                        flexShrink: 0
                                    }}
                                    className="cursor-pointer hover:shadow-lg transition-shadow"
                                    onClick={() => handleDotClick(index % 4)}
                                >
                                    {/* Image */}
                                    <div
                                        style={{
                                            width: item.width,
                                            height: '368px',
                                            overflow: 'hidden'
                                        }}
                                    >
                                        <img
                                            src={item.img}
                                            alt={item.title}
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover'
                                            }}
                                        />
                                    </div>

                                    {/* Text Box */}
                                    <div
                                        style={{
                                            width: item.width,
                                            height: '88px',
                                            background: item.bgColor,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            padding: '11px'
                                        }}
                                    >
                                        <h3
                                            style={{
                                                fontFamily: "'DM Sans', sans-serif",
                                                fontWeight: 700,
                                                fontSize: '20px',
                                                lineHeight: '26px',
                                                letterSpacing: '0',
                                                textAlign: 'center',
                                                textTransform: 'capitalize',
                                                color: item.textColor,
                                                margin: 0,
                                                padding: '0 10px'
                                            }}
                                        >
                                            {item.title}
                                        </h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Pagination Dots */}
                    <div
                        style={{
                            position: 'absolute',
                            bottom: '20px',
                            left: '515px',
                            width: '793.5px',
                            display: 'flex',
                            justifyContent: 'center',
                            gap: '10px',
                            alignItems: 'center',
                            zIndex: 10
                        }}
                    >
                        {[0, 1, 2, 3].map((index) => (
                            <span
                                key={index}
                                onClick={() => handleDotClick(index)}
                                style={{
                                    width: (activeIndex % 4) === index ? '32px' : '10px',
                                    height: '10px',
                                    borderRadius: (activeIndex % 4) === index ? '5px' : '50%',
                                    background: (activeIndex % 4) === index ? '#1566B7' : '#D1D5DB',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    flexShrink: 0
                                }}
                            ></span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
