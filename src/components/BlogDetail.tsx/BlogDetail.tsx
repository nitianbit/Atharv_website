import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Calendar, Clock, MessageSquare, ChevronRight, Plus, X } from 'lucide-react';

import { blogs } from '../Blogs/BlogData';

const BlogDetail = () => {
    const { id } = useParams();
    const [activeFaq, setActiveFaq] = useState<number | null>(0);

    // Find blog by id, default to first blog if not found or id is missing
    const blogId = id ? parseInt(id) : 1;
    const blogData = blogs.find(b => b.id === blogId) || blogs[0];

    const toggleFaq = (index: number) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    // Reset active FAQ when blog changes
    useEffect(() => {
        setActiveFaq(0);
    }, [blogId]);

    // Data now comes from the found blogData object

    // If somehow no blog data (empty array), return null or error
    if (!blogData) return <div>Blog not found</div>;

    return (
        <div>
            <div className="w-full max-w-[1312px] mx-auto px-4 py-8">
                {/* Header Section */}
                <div className="mb-8">
                    {/* Badge */}
                    <div className="inline-block bg-[#1566B7] rounded-[19px] px-6 py-2 mb-6">
                        <span className="text-white text-[12px] font-bold uppercase tracking-wider" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                            {blogData.category}
                        </span>
                    </div>

                    {/* Title */}
                    <h1 className="text-[46px] leading-[1.2] mb-6" style={{ fontFamily: 'Source Serif Pro, serif' }}>
                        <span className="text-[#1566B7] font-semibold">{blogData.title} </span>
                        <span className="text-[#142349] font-semibold">{blogData.subtitle}</span>
                    </h1>

                    {/* Meta Info */}
                    <div className="flex items-center gap-8 text-[#5C5C5C] text-[16px]" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                        <div className="flex items-center gap-2">
                            <Calendar size={18} />
                            <span>Published on {blogData.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock size={18} />
                            <span>{blogData.readTime}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <MessageSquare size={18} />
                            <span>Reviewed by {blogData.reviewedBy}</span>
                        </div>
                    </div>
                </div>

                {/* Hero Image */}
                <div
                    className="w-full h-[500px] rounded-[24px] overflow-hidden mb-16 relative bg-cover bg-center"
                    style={{
                        backgroundImage: `url('${blogData.image}')`,
                        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)'
                    }}
                >
                    {/* Optional: Overlay if needed to match specific design requirements */}
                </div>

                {/* Main Content Layout */}
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Sidebar - Table of Contents */}
                    <div className="w-full lg:w-[350px] flex-shrink-0">
                        <div className="bg-[#F8F9FA] rounded-lg overflow-hidden sticky top-8">
                            <div className="bg-[#1566B7] px-6 py-4">
                                <h3 className="text-white font-bold uppercase text-[14px]" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                                    Tables of content
                                </h3>
                            </div>
                            <div className="py-2">
                                {blogData.toc.map((item, index) => (
                                    <div
                                        key={index}
                                        onClick={() => {
                                            // Simple scroll logic
                                            const target = document.getElementById(index === 5 ? 'faq-section' : `section-${index}`);
                                            if (target) {
                                                target.scrollIntoView({ behavior: 'smooth' });
                                            }
                                        }}
                                        className="px-6 py-4 flex items-center justify-between hover:bg-gray-100 cursor-pointer border-b border-gray-100 last:border-0 group transition-colors"
                                    >
                                        <span className="text-[#142349] text-[15px] font-medium leading-tight group-hover:text-[#1566B7]" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                                            {item}
                                        </span>
                                        <ChevronRight size={16} className="text-[#1566B7]" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Blog Content */}
                    <div className="flex-1">
                        {/* Introduction */}
                        <div className="mb-12">
                            <h2 className="text-[#1566B7] text-[32px] font-bold mb-6" style={{ fontFamily: 'Source Serif Pro, serif' }}>
                                Introduction
                            </h2>
                            <p className="text-[#333333] text-[18px] leading-[1.8] font-light" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                                {blogData.intro}
                            </p>
                        </div>

                        {/* Sections */}
                        {blogData.sections.map((section, index) => {
                            return (
                                <div key={index} id={`section-${index}`} className="mb-12 scroll-mt-24">
                                    <h2 className="text-[32px] font-bold mb-6" style={{ fontFamily: 'Source Serif Pro, serif' }}>
                                        {section.title.includes("Mobile Medical Units") ? (
                                            <>
                                                <span className="text-[#142349]">What are </span>
                                                <span className="text-[#1566B7]">Mobile Medical Units?</span>
                                            </>
                                        ) : (
                                            <span className="text-[#142349]">{section.title}</span>
                                        )}
                                    </h2>
                                    <p className="text-[#333333] text-[18px] leading-[1.8] font-light" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                                        {section.content}
                                    </p>
                                </div>
                            );
                        })}

                        {/* FAQ Section */}
                        <div id="faq-section" className="mt-16 scroll-mt-24">
                            <h2 className="text-[32px] font-bold mb-8" style={{ fontFamily: 'Source Serif Pro, serif' }}>
                                <span className="text-[#142349]">Frequently Asked </span>
                                <span className="text-[#1566B7]">Questions</span>
                            </h2>

                            <div className="flex flex-col gap-4">
                                {blogData.faqs.map((faq, index) => (
                                    <div key={index} className="rounded-[12px] overflow-hidden">
                                        <button
                                            onClick={() => toggleFaq(index)}
                                            className={`w-full flex items-center justify-between px-8 py-6 transition-colors ${activeFaq === index ? 'bg-[#EBF5FF]' : 'bg-[#EBF5FF] hover:bg-gray-100'
                                                }`}
                                        >
                                            <span
                                                className="text-[#142349] text-[18px] font-medium text-left"
                                                style={{ fontFamily: 'DM Sans, sans-serif' }}
                                            >
                                                {faq.question}
                                            </span>
                                            {activeFaq === index ? (
                                                <X size={20} className="text-[#142349]" />
                                            ) : (
                                                <Plus size={20} className="text-[#142349]" />
                                            )}
                                        </button>

                                        {activeFaq === index && (
                                            <div className="bg-[#EBF5FF] px-8 pb-6">
                                                <p
                                                    className="text-[#333333] text-[16px] leading-[1.6] font-light"
                                                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                                                >
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetail;