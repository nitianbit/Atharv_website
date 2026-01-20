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
        <div className="w-full relative overflow-hidden"
            style={{ background: 'linear-gradient(126.19deg, #176EC6 21.84%, #0F58A1 78.16%)' }}>

            <div className="w-full flex flex-col py-12 xl:block xl:py-0 xl:max-w-[1512px] xl:h-[610px] xl:mx-auto xl:relative">

                {/* Text Section */}
                <div className="px-4 text-center md:text-left mb-8 xl:mb-0
                                xl:w-[475px] xl:h-[238.05px] xl:absolute xl:top-[82.89px] xl:left-[100px] xl:flex xl:flex-col xl:gap-[18px] xl:p-0">

                    {/* Heading */}
                    <div className="flex flex-col gap-0 items-center md:items-start xl:w-[286px]">
                        <h2 className="font-['Source_Serif_Pro'] font-semibold capitalize text-white leading-tight
                                       text-3xl md:text-4xl
                                       xl:text-[46px] xl:leading-[100%] xl:tracking-[0.02em] xl:m-0">
                            Past Events
                        </h2>
                        <h2 className="font-['Source_Serif_Pro'] font-semibold capitalize text-white leading-tight
                                       text-3xl md:text-4xl
                                       xl:text-[46px] xl:leading-[100%] xl:tracking-[0.02em] xl:m-0">
                            & Highlights
                        </h2>
                    </div>

                    {/* Description */}
                    <p className="font-['DM_Sans'] font-light text-white mt-4 md:mt-2
                                  text-base md:text-lg leading-relaxed max-w-2xl mx-auto md:mx-0
                                  xl:w-[410px] xl:h-[90px] xl:text-[18px] xl:leading-[30px] xl:tracking-0 xl:m-0 xl:mt-0">
                        View moments from our recent CSR initiatives, MMU activities, diagnostic camps and awareness programs conducted across India.
                    </p>
                </div>

                {/* Carousel Container */}
                <div className="group relative w-full h-[400px] md:h-[500px] overflow-hidden flex justify-center
                                xl:w-[793.5px] xl:h-[484.6px] xl:absolute xl:top-[46.76px] xl:left-[617.25px] xl:justify-start xl:block">

                    <div className="flex gap-4 xl:gap-[44.54px] w-max px-4 xl:px-0 transition-transform duration-500 ease-out"
                        style={{
                            transform: `translateX(-${activeIndex * (window.innerWidth < 1280 ? 300 : 418.54)}px)`, // Simple adaptive responsive scroll 
                            // Note: In a real app, use a ResizeObserver or media query hook for '300', simplified here for 'sm/md' vs 'xl'
                        }}>

                        {/* Desktop Layout Override: Use specific pixel transform only on XL */}
                        <style>{`
                            @media (min-width: 1280px) {
                                .xl-carousel-track {
                                    transform: translateX(-${[0, 418.54, 837.08, 1255.62, 1674.16][activeIndex]}px) !important;
                                    transition: ${isTransitioning ? 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)' : 'none'} !important;
                                }
                            }
                         `}</style>

                        <div className={`flex gap-4 xl:gap-[44.54px] h-full xl-carousel-track`}
                            style={{
                                // Mobile fallback logic for basic sliding
                                transform: `translateX(-${activeIndex * 100}%)`,
                                transition: isTransitioning ? 'transform 0.5s ease' : 'none',
                            }}>

                        </div>
                    </div>

                    {/* Mobile View: Native Scroll */}
                    <div className="flex xl:hidden w-full overflow-x-auto hide-scrollbar gap-4 px-4 snap-x snap-mandatory">
                        {[...Events].map((item, index) => (
                            <div key={`mob-${index}`} className="snap-center shrink-0 w-[85vw] md:w-[350px] relative rounded-lg overflow-hidden shadow-lg h-[400px]">
                                <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                                <div className="absolute bottom-0 left-0 w-full bg-white/90 py-3 flex flex-col items-center gap-1">
                                    <h3 className="font-['DM_Sans'] font-bold text-[#1566B7] text-lg capitalize">{item.title}</h3>
                                    <p className="font-['DM_Sans'] font-light text-[#142349] text-base">{item.location}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Desktop View: The JS Slider */}
                    <div className="hidden xl:flex w-max gap-[44.54px]"
                        style={{
                            transform: `translateX(-${[0, 418.54, 837.08, 1255.62, 1674.16][activeIndex]}px)`,
                            transition: isTransitioning ? 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)' : 'none',
                        }}>
                        {[...Events, Events[0]].map((item, index) => (
                            <div key={`desk-${index}`}
                                className="w-[374px] h-[484.6px] shrink-0 relative cursor-pointer hover:shadow-lg transition-shadow duration-300 shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)]"
                                onClick={() => handleDotClick(index % 4)}>
                                <div className="w-[373.53px] h-[484.6px] overflow-hidden relative">
                                    <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                                </div>
                                <div className="absolute bottom-0 left-0 w-[374px] h-[78.64px] bg-white/90 flex flex-col items-center justify-center gap-[11px] py-[11px]">
                                    <h3 className="font-['DM_Sans'] font-bold text-[#1566B7] text-[20px] leading-none capitalize m-0 w-[363px] text-center">{item.title}</h3>
                                    <p className="font-['DM_Sans'] font-light text-[#142349] text-[18px] leading-[30px] m-0 w-[363px] text-center">{item.location}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

                {/* Pagination Dots (Desktop Only or Adapted) */}
                <div className="hidden xl:flex absolute bottom-[40px] left-[617.25px] w-[793.5px] justify-center gap-[10px] items-center z-10">
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

            <style>{`
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .hide-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </div>
    );
};

export default EventsHighLights;
