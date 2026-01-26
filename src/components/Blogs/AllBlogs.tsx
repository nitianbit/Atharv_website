import { useState } from 'react';
import { Link } from 'react-router-dom';
import { blogs } from './BlogData';

const filterCategories = [
    'All',
    'CSR & Community Health',
    'Occupational Health',
    'Mobile Medical Units',
    'Compliance',
    'Preventive Healthcare'
];

const AllBlogs = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeFilter, setActiveFilter] = useState('All');
    const [visibleCount, setVisibleCount] = useState(9);

    const filteredBlogs = blogs.filter(blog => {
        const fullTitle = `${blog.title} ${blog.subtitle || ''}`;
        const matchesSearch = fullTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
            blog.description.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesFilter = activeFilter === 'All' || blog.category === activeFilter;
        return matchesSearch && matchesFilter;
    });

    const visibleBlogs = filteredBlogs.slice(0, visibleCount);

    const handleLoadMore = () => {
        setVisibleCount(prev => prev + 3);
    };

    return (
        <div className="w-full max-w-[1312px] mx-auto px-4 py-12">
            {/* Filter Section */}
            <div className="w-full mb-16">
                {/* Filter Text */}
                <p
                    className="text-[#002855] text-[16px] font-medium leading-[150%] mb-4"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                    Filter
                </p>

                <div className="flex flex-wrap items-center gap-3">
                    {/* Search Input */}
                    <div>
                        <input
                            type="text"
                            placeholder="Search"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-[300px] h-[30.56px] px-4 border border-[#D9D9D9] rounded-[9.64px] text-[14px] font-light leading-[125%] text-[#4D5155] placeholder:text-[#999] focus:outline-none focus:border-[#1566B7]"
                            style={{ fontFamily: 'DM Sans, sans-serif' }}
                        />

                        {/* Search Button */}
                        <button
                            onClick={() => {/* Add search logic if needed */ }}
                            className="h-[31.25px] px-[10px] bg-[#1566B7] text-white rounded-[9.64px] text-[14px] font-light leading-[30px] hover:bg-[#0f4d8f] transition-all"
                            style={{ fontFamily: 'DM Sans, sans-serif' }}
                        >
                            Search
                        </button>
                    </div>

                    {/* Filter Category Buttons */}
                    {filterCategories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveFilter(category)}
                            className={`h-[31.25px] px-[13px] rounded-[9.64px] text-[14px] font-light leading-[30px] transition-all flex items-center justify-center whitespace-nowrap ${activeFilter === category
                                ? 'bg-[#1566B7] text-white border-[0.74px] border-[#1566B7]'
                                : 'bg-white text-[#4D5155] border-[0.74px] border-[#4D5155CC] hover:border-[#1566B7]'
                                }`}
                            style={{ fontFamily: 'DM Sans, sans-serif' }}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            {/* All Blogs Heading */}
            <h1
                className="text-center mx-auto mb-16"
                style={{
                    fontFamily: 'Source Serif Pro, serif',
                    fontWeight: 600,
                    fontSize: '46px',
                    lineHeight: '114%',
                    letterSpacing: '-0.02em',
                    color: '#1566B7',
                    textTransform: 'capitalize',
                    // height is auto/intrinsic usually, explicitly setting height might cut off text if not careful, but following constraints
                }}
            >
                All Blogs
            </h1>

            {/* Blog Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem] justify-items-center">
                {visibleBlogs.map((blog) => (
                    <div
                        key={blog.id}
                        className="flex flex-col box-border"
                        style={{
                            maxWidth: '402px',
                            // height: '484px', // Allowing height to be auto to fit content if text wraps differently, but per spec
                            gap: '15px'
                        }}
                    >
                        {/* Blog Image */}
                        <div
                            className="w-full bg-cover bg-center"
                            style={{
                                width: '100%', // responsive match to container, max 400
                                height: '217px',
                                borderRadius: '16px',
                                backgroundImage: `url('${blog.image}')`,
                                backgroundColor: '#CCE9FF' // Fallback/Loading
                            }}
                        ></div>

                        {/* Text Content */}
                        <div className="flex flex-col" style={{ width: '100%' }}>
                            {/* Date */}
                            <p
                                style={{
                                    fontFamily: 'DM Sans, sans-serif',
                                    fontWeight: 300,
                                    fontSize: '13px',
                                    lineHeight: '30px',
                                    color: '#999999',
                                    marginBottom: '4px' // adjusting spacing to match visual gap
                                }}
                            >
                                {blog.date}
                            </p>

                            {/* Title */}
                            <h3
                                style={{
                                    fontFamily: 'DM Sans, sans-serif',
                                    fontWeight: 600,
                                    fontSize: '24px',
                                    lineHeight: '31.99px',
                                    color: '#333333',
                                    fontVariantNumeric: 'lining-nums proportional-nums',
                                    marginBottom: '8px'
                                }}
                            >
                                {blog.title} {blog.subtitle}
                            </h3>

                            {/* Description */}
                            <p
                                style={{
                                    fontFamily: 'DM Sans, sans-serif',
                                    fontWeight: 300,
                                    fontSize: '18px',
                                    lineHeight: '30px',
                                    color: '#222222',
                                    marginBottom: '16px',
                                    // height: '128px', // Optional: fix height if strict compliance needed
                                    // overflow: 'hidden'
                                }}
                            >
                                {blog.description}
                            </p>

                            {/* Read More Link */}
                            <Link
                                to={`/blog-detail/${blog.id}`}
                                style={{
                                    fontFamily: 'DM Sans, sans-serif',
                                    fontWeight: 600,
                                    fontSize: '16px',
                                    lineHeight: '150%',
                                    color: '#1566B7',
                                    textTransform: 'uppercase',
                                    textDecoration: 'underline',
                                    textDecorationStyle: 'solid',
                                    textUnderlineOffset: '0%', // text-decoration-offset
                                    textDecorationThickness: 'auto'
                                }}
                            >
                                READ MORE...
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            {/* Load More Button */}
            {visibleCount < filteredBlogs.length && (
                <div className="flex justify-center mt-16">
                    <button
                        onClick={handleLoadMore}
                        className="flex items-center justify-center transition-all hover:bg-gray-50"
                        style={{
                            width: '299px',
                            height: '43px',
                            gap: '10px',
                            borderRadius: '192px',
                            borderWidth: '1px',
                            paddingTop: '12px',
                            paddingRight: '28px',
                            paddingBottom: '12px',
                            paddingLeft: '28px',
                            backgroundColor: '#FFFFFF',
                            borderColor: '#1566B7', // var(--Primary-colour, #1566B7)
                            boxShadow: '1px 3px 5.7px 0px #3177E13D',
                        }}
                    >
                        <span
                            style={{
                                fontFamily: 'DM Sans, sans-serif',
                                fontWeight: 600,
                                fontSize: '16px',
                                lineHeight: '100%',
                                color: '#142349', // var(--Heading-colour, #142349)
                                textTransform: 'uppercase',
                                verticalAlign: 'middle',
                            }}
                        >
                            LOAD MORE
                        </span>
                    </button>
                </div>
            )}
        </div>
    );
};

export default AllBlogs;

