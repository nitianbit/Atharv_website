import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogs } from './BlogData';

const LatestBlogs = () => {
    // Use the first 4 blogs or specific ones
    const latestBlogsData = blogs.slice(0, 4);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? latestBlogsData.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === latestBlogsData.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="w-[1412px] h-[505px] mx-auto border border-[#EDEEEF] rounded-tl-[12px]">
            {/* Heading */}
            <div className="pt-0 pb-[27px]">
                <h2
                    className="text-[46px] font-semibold leading-[100%] capitalize"
                    style={{
                        fontFamily: 'Source Serif Pro, serif',
                        letterSpacing: '0.02em'
                    }}
                >
                    <span className="text-[#1B1B1B]">Latest </span>
                    <span className="text-[#1566B7]">Blogs</span>
                </h2>
            </div>

            {/* Cards Container */}
            <div className="relative w-[1412px] h-[420px] border border-[#EDEEEF] rounded-tl-[12px] overflow-hidden">
                <div className="flex gap-[34px] px-0">
                    {/* Highlighted Card (Active) */}
                    <div className="flex-shrink-0 w-[532px] h-[409px]">
                        {/* Image */}
                        <div
                            className="w-[531.89px] h-[290px] rounded-tl-[12px] rounded-tr-[12px] bg-cover bg-center"
                            style={{
                                backgroundImage: `url('${latestBlogsData[currentIndex].image}')`
                            }}
                        ></div>

                        {/* White Box with Title and Link */}
                        <div
                            className="bg-white px-[26px] pt-[13px] pb-[16px]"
                            style={{
                                boxShadow: '9px 60px 65px -24px rgba(21, 102, 183, 0.11)'
                            }}
                        >
                            <h4
                                className="text-[#142349] text-[20px] font-semibold leading-[28px] mb-[11px] w-[416px] h-[56px]"
                                style={{ fontFamily: 'DM Sans, sans-serif' }}
                            >
                                {latestBlogsData[currentIndex].title} {latestBlogsData[currentIndex].subtitle}
                            </h4>

                            <Link
                                to={`/blog-detail/${latestBlogsData[currentIndex].id}`}
                                className="text-[#1566B7] text-[16px] font-semibold uppercase leading-[150%] underline inline-block"
                                style={{ fontFamily: 'DM Sans, sans-serif' }}
                            >
                                Read More...
                            </Link>
                        </div>
                    </div>

                    {/* Second Card (Only Image) */}
                    <div className="flex-shrink-0">
                        <div
                            className="w-[531.89px] h-[300px] rounded-[12px] bg-cover bg-center"
                            style={{
                                backgroundImage: `url('${latestBlogsData[(currentIndex + 1) % latestBlogsData.length].image}')`
                            }}
                        ></div>
                    </div>

                    {/* Third Card (Only Image) - Partially Visible */}
                    <div className="flex-shrink-0">
                        <div
                            className="w-[531.89px] h-[300px] rounded-[12px] bg-cover bg-center"
                            style={{
                                backgroundImage: `url('${latestBlogsData[(currentIndex + 2) % latestBlogsData.length].image}')`
                            }}
                        ></div>
                    </div>
                </div>

                {/* Navigation Arrows */}
                <div className="absolute bottom-0 left-[762.38px] w-[139.87px] h-[61px] flex border border-[#EDEEEF]">
                    {/* Left Arrow */}
                    <button
                        onClick={handlePrev}
                        className="w-[60.08px] h-[61px] bg-white border border-[#EDEEEF] flex items-center justify-center hover:bg-gray-50 transition-all"
                        aria-label="Previous"
                    >
                        <ChevronLeft size={24} strokeWidth={2} className="text-[#1B1B1B]" />
                    </button>

                    {/* Right Arrow */}
                    <button
                        onClick={handleNext}
                        className="w-[60.08px] h-[61px] bg-white flex items-center justify-center hover:bg-gray-50 transition-all"
                        style={{
                            boxShadow: '0px -4px 40px 0px rgba(59, 80, 90, 0.10)'
                        }}
                        aria-label="Next"
                    >
                        <ChevronRight size={24} strokeWidth={2} className="text-[#1B1B1B]" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LatestBlogs;
