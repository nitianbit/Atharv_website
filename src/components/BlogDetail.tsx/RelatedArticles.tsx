import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogs } from '../Blogs/BlogData';

const RelatedArticles = () => {
    // For related articles, ideally filter by category. For now, picking a few.
    // Example: Exclude the current detailed blog (id 1) and show next few.
    const relatedBlogs = blogs.slice(1, 4);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? relatedBlogs.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === relatedBlogs.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="w-full relative py-12 lg:py-0 overflow-hidden">
            {/* =========================================
               MOBILE & TABLET VIEW (< lg)
               Responsive Single Card Carousel
               ========================================= */}
            <div className="lg:hidden w-full px-4 md:px-8 flex flex-col items-center">
                <div className="w-full mb-6">
                    <h2 className="text-3xl sm:text-4xl font-semibold leading-tight capitalize font-['Source_Serif_Pro'] tracking-wide">
                        <span className="text-[#1B1B1B]">Related </span>
                        <span className="text-[#1566B7]">Articles</span>
                    </h2>
                </div>

                <div className="w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                    {/* Image */}
                    <div
                        className="w-full h-[250px] sm:h-[300px] bg-cover bg-center"
                        style={{
                            backgroundImage: `url('${relatedBlogs[currentIndex].image}')`
                        }}
                    />

                    {/* Content */}
                    <div className="p-6">
                        <h4 className="text-[#142349] text-xl font-semibold leading-snug mb-4 font-['DM_Sans'] h-[60px] overflow-hidden">
                            {relatedBlogs[currentIndex].title} {relatedBlogs[currentIndex].subtitle}
                        </h4>

                        <div className="flex justify-between items-center mt-2">
                            <Link
                                to={`/blog-detail/${relatedBlogs[currentIndex].id}`}
                                className="text-[#1566B7] text-base font-semibold uppercase underline font-['DM_Sans'] hover:text-[#0f4c8a]"
                            >
                                Read More...
                            </Link>

                            <div className="flex border border-gray-200 rounded-md overflow-hidden">
                                <button
                                    onClick={handlePrev}
                                    className="p-3 bg-white hover:bg-gray-50 border-r border-gray-200 transition-colors"
                                    aria-label="Previous"
                                >
                                    <ChevronLeft size={20} className="text-[#1B1B1B]" />
                                </button>
                                <button
                                    onClick={handleNext}
                                    className="p-3 bg-white hover:bg-gray-50 transition-colors"
                                    aria-label="Next"
                                >
                                    <ChevronRight size={20} className="text-[#1B1B1B]" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* =========================================
               DESKTOP VIEW (lg+)
               Scaled Absolute Layout (Preserves 1412px design)
               ========================================= */}
            <div className="hidden lg:block w-full">
                {/* Centering Wrapper and Scaler */}
                <div className="w-full flex justify-center lg:h-[400px] xl:h-[480px] 2xl:h-[505px]">
                    <div className="relative w-[1412px] h-[505px] origin-top transform lg:scale-[0.7] xl:scale-[0.9] 2xl:scale-100 mx-auto rounded-tl-[12px]">
                        {/* Heading */}
                        <div className="pt-0 pb-[27px]">
                            <h2
                                className="text-[46px] font-semibold leading-[100%] capitalize"
                                style={{
                                    fontFamily: 'Source Serif Pro, serif',
                                    letterSpacing: '0.02em'
                                }}
                            >
                                <span className="text-[#1B1B1B]">Related </span>
                                <span className="text-[#1566B7]">Articles</span>
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
                                            backgroundImage: `url('${relatedBlogs[currentIndex].image}')`
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
                                            {relatedBlogs[currentIndex].title} {relatedBlogs[currentIndex].subtitle}
                                        </h4>

                                        <Link
                                            to={`/blog-detail/${relatedBlogs[currentIndex].id}`}
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
                                            backgroundImage: `url('${relatedBlogs[(currentIndex + 1) % relatedBlogs.length].image}')`
                                        }}
                                    ></div>
                                </div>

                                {/* Third Card (Only Image) - Partially Visible */}
                                <div className="flex-shrink-0">
                                    <div
                                        className="w-[531.89px] h-[300px] rounded-[12px] bg-cover bg-center"
                                        style={{
                                            backgroundImage: `url('${relatedBlogs[(currentIndex + 2) % relatedBlogs.length].image}')`
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
                </div>
            </div>
        </div>
    );
};

export default RelatedArticles;
