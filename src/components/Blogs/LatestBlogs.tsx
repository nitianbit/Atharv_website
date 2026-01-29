import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogs } from './BlogData';

const LatestBlogs = () => {
    // Show all or a subset of blogs
    const latestBlogsData = blogs;
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            // Scroll by card width + gap approximately
            const scrollAmount = direction === 'left' ? -350 : 350;
            current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <div className="w-full py-12 lg:py-16 relative overflow-hidden bg-white">
            <div className="max-w-[1412px] mx-auto px-4 md:px-8 lg:px-6 flex flex-col gap-8 lg:gap-12">

                {/* Header & Controls */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-semibold leading-tight capitalize font-['Source_Serif_Pro'] tracking-wide">
                        <span className="text-[#1B1B1B]">Latest </span>
                        <span className="text-[#1566B7]">Blogs</span>
                    </h2>

                    {/* Navigation Buttons */}
                    <div className="hidden md:flex gap-2">
                        <button
                            onClick={() => scroll('left')}
                            className="w-[50px] h-[50px] rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#1566B7] hover:text-white hover:border-[#1566B7] transition-all duration-300"
                            aria-label="Previous"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            className="w-[50px] h-[50px] rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#1566B7] hover:text-white hover:border-[#1566B7] transition-all duration-300"
                            aria-label="Next"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>

                {/* Carousel Container */}
                <div
                    ref={scrollRef}
                    className="flex gap-6 overflow-x-auto pb-8 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide scroll-smooth snap-x snap-mandatory"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {latestBlogsData.map((blog) => (
                        <div
                            key={blog.id}
                            className="min-w-[300px] sm:min-w-[340px] md:min-w-[380px] lg:min-w-[420px] snap-center flex-shrink-0 bg-white rounded-xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0px_8px_30px_rgba(21,102,183,0.15)] border border-gray-100 overflow-hidden transition-all duration-300 group"
                        >
                            {/* Image */}
                            <div
                                className="w-full h-[200px] sm:h-[240px] lg:h-[260px] bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                                style={{
                                    backgroundImage: `url('${blog.image}')`
                                }}
                            />

                            {/* Content */}
                            <div className="p-6 flex flex-col gap-4">
                                <h4 className="text-[#142349] text-xl font-semibold leading-snug font-['DM_Sans'] line-clamp-2 h-[56px] group-hover:text-[#1566B7] transition-colors">
                                    {blog.title} {blog.subtitle}
                                </h4>

                                <div className="flex justify-between items-center mt-2">
                                    <Link
                                        to={`/blog-detail/${blog.id}`}
                                        className="text-[#1566B7] text-base font-semibold uppercase underline font-['DM_Sans'] hover:text-[#0f4c8a]"
                                    >
                                        Read More...
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LatestBlogs;
