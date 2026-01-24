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

    const filteredBlogs = blogs.filter(blog => {
        const fullTitle = `${blog.title} ${blog.subtitle || ''}`;
        const matchesSearch = fullTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
            blog.description.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesFilter = activeFilter === 'All' || blog.category === activeFilter;
        return matchesSearch && matchesFilter;
    });

    return (
        <div className="w-full max-w-[1312px] mx-auto px-4 py-12">
            {/* Filter Section */}
            <div className="mb-16">
                <div className="flex items-center gap-3 mb-6">
                    <p
                        className="text-[#1B1B1B] text-[18px] font-medium mb-2"
                        style={{ fontFamily: 'DM Sans, sans-serif' }}
                    >
                        Filter
                    </p>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                    {/* Search Input and Button */}
                    <div className="flex items-center gap-2">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-[180px] h-[42px] px-4 pr-10 border border-[#E0E0E0] rounded-full text-[14px] focus:outline-none focus:border-[#1566B7]"
                                style={{ fontFamily: 'DM Sans, sans-serif' }}
                            />
                        </div>

                        <button
                            className="h-[42px] px-6 bg-[#1566B7] text-white rounded-full text-[14px] font-medium hover:bg-[#0f4d8f] transition-all"
                            style={{ fontFamily: 'DM Sans, sans-serif' }}
                        >
                            Search
                        </button>
                    </div>

                    {/* Filter Buttons */}
                    {filterCategories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveFilter(category)}
                            className={`h-[42px] px-6 rounded-full text-[14px] font-medium transition-all ${activeFilter === category
                                ? 'bg-[#1566B7] text-white'
                                : 'bg-white text-[#1B1B1B] border border-[#E0E0E0] hover:border-[#1566B7]'
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
                className="text-[#1566B7] text-[52px] font-semibold text-center mb-16 leading-[100%]"
                style={{
                    fontFamily: 'Source Serif Pro, serif',
                    letterSpacing: '0.02em'
                }}
            >
                All Blogs
            </h1>

            {/* Blog Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredBlogs.map((blog) => (
                    <div key={blog.id} className="flex flex-col">
                        {/* Blog Image */}
                        <div
                            className="w-full h-[260px] rounded-[16px] bg-cover bg-center mb-4"
                            style={{
                                backgroundImage: `url('${blog.image}')`
                            }}
                        ></div>

                        {/* Date */}
                        <p
                            className="text-[#999999] text-[14px] font-light mb-3"
                            style={{ fontFamily: 'DM Sans, sans-serif' }}
                        >
                            {blog.date}
                        </p>

                        {/* Title */}
                        <h3
                            className="text-[#1B1B1B] text-[22px] font-semibold leading-[30px] mb-3"
                            style={{ fontFamily: 'DM Sans, sans-serif' }}
                        >
                            {blog.title} {blog.subtitle}
                        </h3>

                        {/* Description */}
                        <p
                            className="text-[#1B1B1B] text-[16px] font-normal leading-[24px] mb-4"
                            style={{ fontFamily: 'DM Sans, sans-serif' }}
                        >
                            {blog.description}
                        </p>

                        {/* Read More Link */}
                        <Link
                            to={`/blog-detail/${blog.id}`}
                            className="text-[#1566B7] text-[16px] font-semibold uppercase hover:underline inline-block"
                            style={{ fontFamily: 'DM Sans, sans-serif' }}
                        >
                            READ MORE...
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllBlogs;
