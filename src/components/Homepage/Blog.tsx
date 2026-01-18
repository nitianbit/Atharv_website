import { useState, useEffect } from 'react';

const Blog = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(true);

    // Desktop configuration
    const desktopCardWidth = 374;
    const desktopGap = 44.79;

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((current: number) => current + 1);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (activeIndex === 4) {
            const timeout = setTimeout(() => {
                setIsTransitioning(false);
                setActiveIndex(0);
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

    const blogData = [
        {
            id: 1,
            title: "Benefits of online doctor consultation in India",
            img: "/Homepage/BlogGirl1.png",
            bgColor: "#1566B7",
            textColor: "#FFFFFF",
        },
        {
            id: 2,
            title: "How home sample collection works for lab tests",
            img: "/Homepage/BlogGirl2.png",
            bgColor: "rgba(255, 255, 255, 0.9)",
            textColor: "#142349",
        },
        {
            id: 3,
            title: "Benefits of online doctor consultation in India",
            img: "/Homepage/BlogGirl1.png",
            bgColor: "#1566B7",
            textColor: "#FFFFFF",
        },
        {
            id: 4,
            title: "How home sample collection works for lab tests",
            img: "/Homepage/BlogGirl2.png",
            bgColor: "rgba(255, 255, 255, 0.9)",
            textColor: "#142349",
        }
    ];

    return (
        <div className="w-full bg-white py-12 px-4 md:py-16 xl:py-16">
            <div className="w-full mx-auto" style={{ maxWidth: '1512px' }}>
                {/* Overall Container */}
                <div
                    className="relative w-full flex flex-col gap-10
                    xl:w-[1308.5px] xl:h-[540px] xl:mx-auto xl:block xl:gap-0"
                >
                    {/* Left Text Section */}
                    <div
                        className="flex flex-col gap-6 w-full max-w-[600px] mx-auto text-center items-center
                        xl:absolute xl:top-[45px] xl:left-0 xl:w-[475px] xl:h-[283px] xl:text-left xl:items-start xl:gap-[28px] xl:mx-0 xl:max-w-none"
                    >
                        {/* Heading */}
                        <h2
                            className="font-['Source_Serif_Pro'] font-semibold capitalize text-3xl
                            md:text-4xl
                            xl:w-[475px] xl:h-[58px] xl:text-[46px] xl:leading-[100%] xl:tracking-[0.02em] xl:m-0"
                        >
                            <span className="text-[#142349]">From </span>
                            <span className="text-[#1566B7]">Our Blog</span>
                        </h2>

                        {/* Description */}
                        <p
                            className="font-['DM_Sans'] font-light text-[#142349] text-base leading-relaxed
                            md:text-lg
                            xl:w-[410px] xl:h-[150px] xl:text-[18px] xl:leading-[30px] xl:tracking-normal xl:m-0"
                        >
                            Stay informed with easy, trusted insights on health, medicines, diagnostics and healthcare services. Explore expert articles, tips and explainers designed to help you make better health decisions.
                        </p>

                        {/* Button */}
                        <a
                            href="/blog"
                            className="group flex items-center gap-2 rounded-[5px] decoration-0 cursor-pointer hover:opacity-80 transition-opacity
                            xl:w-[144px] xl:h-[19px]"
                        >
                            <span
                                className="font-['DM_Sans'] font-semibold text-[#1566B7] uppercase text-sm
                                xl:w-[122px] xl:h-[20px] xl:text-[15px] xl:leading-[100%] xl:tracking-normal"
                            >
                                VIEW ALL BLOGS
                            </span>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1566B7" strokeWidth="2" className="group-hover:translate-x-1 transition-transform">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </a>
                    </div>

                    {/* Mobile/Tablet Card List (Simple Scroll) */}
                    <div className="flex xl:hidden overflow-x-auto gap-4 pb-4 w-full snap-x snap-mandatory">
                        {blogData.map((item, index) => (
                            <div
                                key={index}
                                className="min-w-[300px] w-[85vw] max-w-[380px] snap-center flex-shrink-0 shadow-md rounded-lg overflow-hidden"
                            >
                                <div className="h-[250px] w-full overflow-hidden">
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div
                                    className="h-[88px] flex items-center justify-center p-3"
                                    style={{ background: item.bgColor }}
                                >
                                    <h3
                                        className="font-['DM_Sans'] font-bold text-lg text-center capitalize px-2 leading-tight"
                                        style={{ color: item.textColor }}
                                    >
                                        {item.title}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Desktop Carousel Container - EXACT XL DESIGN */}
                    <div
                        className="hidden xl:block absolute top-0 left-[515px] w-[793.5px] h-[456px] overflow-hidden"
                    >
                        <div
                            style={{
                                display: 'flex',
                                width: 'max-content',
                                gap: `${desktopGap}px`,
                                transform: `translateX(-${activeIndex * (desktopCardWidth + desktopGap)}px)`,
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
                                        width: `${desktopCardWidth}px`,
                                        height: '456px',
                                        boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
                                        flexShrink: 0
                                    }}
                                    className="cursor-pointer hover:shadow-lg transition-shadow"
                                    onClick={() => handleDotClick(index % 4)}
                                >
                                    {/* Image */}
                                    <div style={{ width: `${desktopCardWidth}px`, height: '368px', overflow: 'hidden' }}>
                                        <img
                                            src={item.img}
                                            alt={item.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    {/* Text Box */}
                                    <div
                                        style={{
                                            width: `${desktopCardWidth}px`,
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

                    {/* Pagination Dots - Desktop Only */}
                    <div
                        className="hidden xl:flex absolute bottom-[20px] left-[515px] w-[793.5px] justify-center gap-[10px] items-center z-10"
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
