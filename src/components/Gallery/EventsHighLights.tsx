import { useState, useEffect } from 'react';

const Events = [
    {
        id: 1,
        title: "CSR Health Camps",
        location: "Kolkata",
        img: "/Gallery/Event1.png",
    },
    {
        id: 2,
        title: "CSR Health Camps",
        location: "Kolkata",
        img: "/Gallery/Event2.png",
    },
    {
        id: 3,
        title: "CSR Health Camps",
        location: "Kolkata",
        img: "/Gallery/Event1.png",
    },
    {
        id: 4,
        title: "CSR Health Camps",
        location: "Kolkata",
        img: "/Gallery/Event2.png",
    }
];

const EventsHighLights = () => {
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
        <div
            style={{
                width: '100%',
                height: '610px',
                background: 'linear-gradient(126.19deg, #176EC6 21.84%, #0F58A1 78.16%)',
                padding: '0',
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            <div style={{ maxWidth: '1512px', height: '610px', margin: '0 auto', position: 'relative' }}>
                {/* Left Text Section */}
                <div
                    style={{
                        width: '475px',
                        height: '238.05px',
                        position: 'absolute',
                        top: '82.89px',
                        left: '100px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '18px'
                    }}
                >
                    {/* Heading */}
                    <div
                        style={{
                            width: '286px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '0'
                        }}
                    >
                        <h2
                            style={{
                                fontFamily: "'Source Serif Pro', serif",
                                fontWeight: 600,
                                fontSize: '46px',
                                lineHeight: '100%',
                                letterSpacing: '0.02em',
                                textTransform: 'capitalize',
                                color: '#FFFFFF',
                                margin: 0,
                                padding: 0
                            }}
                        >
                            Past Events
                        </h2>
                        <h2
                            style={{
                                fontFamily: "'Source Serif Pro', serif",
                                fontWeight: 600,
                                fontSize: '46px',
                                lineHeight: '100%',
                                letterSpacing: '0.02em',
                                textTransform: 'capitalize',
                                color: '#FFFFFF',
                                margin: 0,
                                padding: 0
                            }}
                        >
                            & Highlights
                        </h2>
                    </div>

                    {/* Description */}
                    <p
                        style={{
                            width: '410px',
                            height: '90px',
                            fontFamily: "'DM Sans', sans-serif",
                            fontWeight: 300,
                            fontSize: '18px',
                            lineHeight: '30px',
                            letterSpacing: '0',
                            color: '#FFFFFF',
                            margin: 0,
                            padding: 0
                        }}
                    >
                        View moments from our recent CSR initiatives, MMU activities, diagnostic camps and awareness programs conducted across India.
                    </p>
                </div>

                {/* Carousel Container */}
                <div
                    style={{
                        width: '793.5px',
                        height: '484.6px',
                        position: 'absolute',
                        top: '46.76px',
                        left: '617.25px',
                        overflow: 'hidden'
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            width: 'max-content',
                            gap: '44.54px',
                            transform: `translateX(-${[0, 418.54, 837.08, 1255.62, 1674.16][activeIndex]}px)`,
                            transition: isTransitioning ? 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)' : 'none',
                            willChange: 'transform'
                        }}
                    >
                        {[...Events, Events[0]].map((item, index) => (
                            <div
                                key={`${item.id}-${index}`}
                                style={{
                                    width: '374px',
                                    height: '484.6px',
                                    boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
                                    flexShrink: 0,
                                    cursor: 'pointer',
                                    transition: 'box-shadow 0.3s ease',
                                    position: 'relative'
                                }}
                                className="hover:shadow-lg"
                                onClick={() => handleDotClick(index % 4)}
                            >
                                {/* Image */}
                                <div
                                    style={{
                                        width: '373.53px',
                                        height: '484.6px',
                                        overflow: 'hidden',
                                        position: 'relative'
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

                                {/* Text Box Overlay */}
                                <div
                                    style={{
                                        width: '374px',
                                        height: '78.64px',
                                        background: 'rgba(255, 255, 255, 0.9)',
                                        position: 'absolute',
                                        bottom: 0,
                                        left: 0,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '11px',
                                        padding: '11px 0'
                                    }}
                                >
                                    <h3
                                        style={{
                                            width: '363px',
                                            height: '26px',
                                            fontFamily: "'DM Sans', sans-serif",
                                            fontWeight: 700,
                                            fontSize: '20px',
                                            lineHeight: '100%',
                                            letterSpacing: '0',
                                            textAlign: 'center',
                                            textTransform: 'capitalize',
                                            color: '#1566B7',
                                            margin: 0
                                        }}
                                    >
                                        {item.title}
                                    </h3>
                                    <p
                                        style={{
                                            width: '363px',
                                            height: '30px',
                                            fontFamily: "'DM Sans', sans-serif",
                                            fontWeight: 300,
                                            fontSize: '18px',
                                            lineHeight: '30px',
                                            letterSpacing: '0',
                                            textAlign: 'center',
                                            color: '#142349',
                                            margin: 0
                                        }}
                                    >
                                        {item.location}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Pagination Dots */}
                <div
                    style={{
                        position: 'absolute',
                        bottom: '40px',
                        left: '617.25px',
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
                                background: (activeIndex % 4) === index ? '#FFFFFF' : 'rgba(255, 255, 255, 0.5)',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                flexShrink: 0
                            }}
                        ></span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default EventsHighLights;
