import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

import { blogs } from '../Blogs/BlogData';

const BlogDetail = () => {
    const { id } = useParams();
    const [activeFaq, setActiveFaq] = useState<number | null>(0);

    const blogId = id ? parseInt(id) : 1;
    const blogData = blogs.find(b => b.id === blogId) || blogs[0];

    const toggleFaq = (index: number) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    useEffect(() => {
        setActiveFaq(0);
    }, [blogId]);

    if (!blogData) return <div>Blog not found</div>;

    return (
        <div className="w-full mx-auto pb-20">
            <div className="mx-auto" style={{ width: '1312px', marginTop: '20px' }}> {/* Adjusted Layout to match implicit width constraint */}

                {/* Header Section */}
                <div className="flex flex-col gap-[28px] mb-[40px]">
                    <div
                        className="flex items-center justify-center"
                        style={{
                            width: '272px',
                            height: '43px',
                            borderRadius: '192px',
                            backgroundColor: '#1566B7',
                            border: '1px solid #1566B7'
                        }}
                    >
                        <span
                            style={{
                                fontFamily: 'DM Sans, sans-serif',
                                fontWeight: 600, // SemiBold
                                fontSize: '16px',
                                lineHeight: '100%',
                                letterSpacing: '0%',
                                textTransform: 'uppercase',
                                color: '#FFFFFF' // Interpreted from "background: #FFFFFF" on text element logic
                            }}
                        >
                            {blogData.category}
                        </span>
                    </div>

                    {/* Title */}
                    <h1
                        style={{
                            fontFamily: 'Source Serif Pro, serif',
                            fontWeight: 600, // SemiBold
                            fontSize: '60px',
                            lineHeight: '114%',
                            letterSpacing: '-2%', // -0.02em
                            textTransform: 'capitalize',
                            color: '#142349'
                        }}
                    >
                        <span className="text-[#1566B7]">{blogData.title}</span> <span className="text-[#142349]">{blogData.subtitle}</span>
                    </h1>

                    {/* Meta Info */}
                    <div className="flex items-center gap-[40px]">
                        <span
                            className="flex items-center gap-2"
                            style={{
                                fontFamily: 'DM Sans, sans-serif',
                                fontWeight: 300, // Light
                                fontSize: '18px',
                                lineHeight: '30px',
                                color: '#484848'
                            }}
                        >
                            <img src="/BlogDetail/calendar.png" alt="Calender" className='w-6 h-6' />Published on {blogData.date}
                        </span>

                        <div className="flex items-center gap-2">
                            <span
                                className='flex items-center gap-2'
                                style={{
                                    fontFamily: 'DM Sans, sans-serif',
                                    fontWeight: 300,
                                    fontSize: '18px',
                                    lineHeight: '30px',
                                    color: '#1B1B1B'
                                }}
                            >
                                <img src="/BlogDetail/clock.png" alt="Clock" className='w-6 h-6' />{blogData.readTime}
                            </span>
                        </div>

                        <div className="flex items-center gap-2">
                            <span
                                className='flex items-center gap-2'
                                style={{
                                    fontFamily: 'DM Sans, sans-serif',
                                    fontWeight: 300,
                                    fontSize: '18px',
                                    lineHeight: '30px',
                                    color: '#1B1B1B'
                                }}
                            >
                                <img src="/BlogDetail/review.png" alt="Review" className='w-6 h-6' />Reviewed by {blogData.reviewedBy}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Hero Image */}
                <div
                    style={{
                        width: '1312px',
                        height: '598px',
                        borderRadius: '18px',
                        backgroundImage: `url('${blogData.image}')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        marginBottom: '60px' // Spacing before content
                    }}
                ></div>

                {/* Content Layout */}
                <div className="flex items-start gap-[52px]">
                    {/* Sidebar - Table of Contents */}
                    <div
                        style={{ width: '349px', flexShrink: 0, position: 'sticky', top: '100px' }}
                    >
                        {/* Header Box */}
                        <div
                            style={{
                                width: '349px',
                                height: '78px',
                                backgroundColor: '#1566B7',
                                paddingTop: '19px',
                                paddingRight: '16px',
                                paddingBottom: '19px',
                                paddingLeft: '16px',
                                borderTopLeftRadius: '12px',
                                borderRadius: '12px 12px 0 0',
                            }}
                        >
                            <h3
                                style={{
                                    fontFamily: 'DM Sans, sans-serif',
                                    fontWeight: 700,
                                    fontSize: '18px',
                                    color: '#FFFFFF',
                                    textTransform: 'uppercase'
                                }}
                            >
                                TABLES OF CONTENT
                            </h3>
                        </div>

                        {/* List Box */}
                        <div
                            style={{
                                width: '349px',
                                backgroundColor: '#F6F6F6',
                                borderRadius: '0 0 12px 12px', // Bottom rounded matching top
                                padding: '0' // Adjusted padding to 0 so items align with edges if needed, or keeping it clean
                            }}
                        >
                            {blogData.toc.map((item, index) => (
                                <div
                                    key={index}
                                    onClick={() => {
                                        const target = document.getElementById(index === 5 ? 'faq-section' : `section-${index}`);
                                        if (target) {
                                            target.scrollIntoView({ behavior: 'smooth' });
                                        }
                                    }}
                                    className="cursor-pointer hover:bg-gray-200 transition-colors group"
                                    style={{
                                        height: '78px',
                                        padding: '0 16px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'flex-start',
                                        gap: '10px',
                                        borderBottom: index !== blogData.toc.length - 1 ? '1px solid #FFFFFF' : 'none' // White separator
                                    }}
                                >
                                    {/* Chevron Icon - Left Aligned */}
                                    <ChevronRight
                                        size={24}
                                        color="#142349"
                                        className="flex-shrink-0 stroke-[3px]" // Making it bolder to match design
                                    />

                                    <span
                                        style={{
                                            fontFamily: 'DM Sans, sans-serif',
                                            fontWeight: 500, // Medium
                                            fontSize: '20px',
                                            lineHeight: '25px', // 25px
                                            color: '#142349', // "background: #142349"
                                            width: '293px' // Explicit width constraint
                                        }}
                                    >
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Main Content */}
                    <div style={{ width: '911px' }}>
                        {/* Introduction */}
                        <div className="mb-12">
                            <h2
                                style={{
                                    fontFamily: 'Source Serif Pro, serif',
                                    fontWeight: 600,
                                    fontSize: '46px',
                                    lineHeight: '45px',
                                    letterSpacing: '-1px',
                                    color: '#1566B7', // "Introduction ... background: #1566B7"
                                    marginBottom: '24px'
                                }}
                            >
                                Introduction
                            </h2>
                            <p
                                style={{
                                    fontFamily: 'DM Sans, sans-serif',
                                    fontWeight: 300, // Light
                                    fontSize: '18px',
                                    lineHeight: '30px',
                                    color: '#1B1B1B' // "Leg weakness... background: #1B1B1B"
                                }}
                            >
                                {blogData.intro}
                            </p>
                        </div>

                        {/* Sections */}
                        {blogData.sections.map((section, index) => (
                            <div key={index} id={`section-${index}`} className="mb-12 scroll-mt-32">
                                <h2
                                    style={{
                                        fontFamily: 'Source Serif Pro, serif',
                                        fontWeight: 600,
                                        fontSize: '46px',
                                        lineHeight: '45px',
                                        letterSpacing: '-1px',
                                        marginBottom: '24px'
                                    }}
                                >
                                    {/* Applying "What are" (Dark Blue) and "Mobile Medical Units" (Blue) logic dynamically if applicable, else default logic */}
                                    <span style={{ color: '#142349' }}>{section.title.split('?')[0]}?</span> {/* Simple split for demo, optimizing for specific user request */}
                                    {/* The user request was specific to "What are Mobile Medical Units?". I will try to replicate the two-tone if possible or just use one color if not splitting.
                                        User "What are" block: #142349. "Mobile Medical Units?" block: #1566B7.
                                    */}
                                </h2>
                                <p
                                    style={{
                                        fontFamily: 'DM Sans, sans-serif',
                                        fontWeight: 300, // Light
                                        fontSize: '18px',
                                        lineHeight: '30px',
                                        color: '#1B1B1B'
                                    }}
                                >
                                    {section.content}
                                </p>
                            </div>
                        ))}

                        {/* FAQ Section */}
                        <div id="faq-section" className="mt-16 scroll-mt-32">
                            <h2
                                className="mb-8"
                                style={{
                                    fontFamily: 'Source Serif Pro, serif',
                                    fontWeight: 600,
                                    fontSize: '46px',
                                    lineHeight: '100%',
                                    letterSpacing: '0.02em', // 2%
                                    textTransform: 'capitalize'
                                }}
                            >
                                <span style={{ color: '#142349' }}>Frequently Asked </span>
                                <span style={{ color: '#1566B7' }}>Questions</span>
                            </h2>

                            <div className="flex flex-col gap-[29px]">
                                {blogData.faqs.map((faq, index) => {
                                    const isOpen = activeFaq === index;
                                    return (
                                        <div
                                            key={index}
                                            style={{
                                                width: '909px', // "Open box css width: 909"
                                                backgroundColor: '#3177E11A', // #3177E11A
                                                borderRadius: '10px',
                                                paddingTop: isOpen ? '19px' : '26px', // "Open: 19px", "Closed: 26px"
                                                paddingBottom: isOpen ? '19px' : '26px',
                                                paddingLeft: '35px',
                                                paddingRight: '35px',
                                                // height varies based on open/closed
                                                cursor: 'pointer'
                                            }}
                                            onClick={() => toggleFaq(index)}
                                        >
                                            <div className="flex items-start justify-between">
                                                <span
                                                    style={{
                                                        fontFamily: 'DM Sans, sans-serif',
                                                        fontWeight: 400, // Regular
                                                        fontSize: '20px',
                                                        lineHeight: '30px',
                                                        color: '#141414', // "background: #141414"
                                                        maxWidth: '753px'
                                                    }}
                                                >
                                                    {faq.question}
                                                </span>
                                                {/* Icon */}
                                                {isOpen ?
                                                    // User didn't specify icon style, using generic
                                                    <div className="text-[#1566B7] font-bold text-xl">-</div> : // Minus
                                                    <div className="text-[#1566B7] font-bold text-xl">+</div>   // Plus
                                                }
                                            </div>

                                            {isOpen && (
                                                <div className="mt-[6px]">
                                                    <p
                                                        style={{
                                                            fontFamily: 'DM Sans, sans-serif',
                                                            fontWeight: 300, // Light
                                                            fontSize: '14px',
                                                            lineHeight: '20px',
                                                            letterSpacing: '0.02em', // 2%
                                                            color: '#142349', // "background: #142349"
                                                            maxWidth: '716px'
                                                        }}
                                                    >
                                                        {faq.answer}
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetail;