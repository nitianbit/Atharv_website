"use client"

import { useState } from 'react';

const MMUStaffing = () => {
    const [expandedSections, setExpandedSections] = useState({
        operated: true,
        operations: false,
        workflows: false
    });

    const toggleSection = (section: 'operated' | 'operations' | 'workflows') => {
        setExpandedSections(prev => ({
            ...prev,
            [section]: !prev[section]
        }));
    };

    return (
        <div className="w-full bg-white py-16 md:py-20 lg:py-24 overflow-hidden">
            {/* Desktop View - Exact Positioning */}
            <div className="hidden xl:block relative mx-auto" style={{ maxWidth: '1512px' }}>
                <div 
                    className="relative flex"
                    style={{
                        width: '1511px',
                        height: '610px',
                        left: '1px',
                        // border: '1px solid #000000',
                        background: '#3177E11A',
                        padding: '0',
                    }}
                >
                    {/* Left Side - Doctor Image */}
                    <div 
                        className="absolute"
                        style={{
                            width: '516.6px',
                            height: '568px',
                            top: '13px',
                            left: '162px',
                            // border: '1px solid #000000',
                        }}
                    >
                        <img
                            src="/MMU/ManSquare.png"
                            alt="Healthcare professional - Medical officer with stethoscope"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Right Side - Content */}
                    <div 
                        className="absolute"
                        style={{
                            width: '575px',
                            height: '513px',
                            top: '65px',
                            left: '827px',
                        }}
                    >
                        {/* Main Heading */}
                        <h2 
                            className="font-['Source_Serif_Pro'] font-semibold capitalize"
                            style={{
                                width: '573px',
                                height: '56px',
                                fontSize: '46px',
                                lineHeight: '121%',
                                letterSpacing: '-0.02em',
                                marginBottom: '6px',
                            }}
                        >
                            <span style={{ color: '#142349' }}>Staffing & </span>
                            <span style={{ color: '#1566B7' }}>MMU Operations</span>
                        </h2>

                        {/* Subtitle */}
                        <p 
                            className="font-['DM_Sans']"
                            style={{
                                width: '539px',
                                height: '60px',
                                fontWeight: 300,
                                fontSize: '18px',
                                lineHeight: '30px',
                                letterSpacing: '0%',
                                color: '#142349',
                                marginBottom: '32px',
                            }}
                        >
                            Effective MMU programs depend on disciplined operations and trained medical teams.
                        </p>

                        {/* Accordion Sections */}
                        <div 
                            className="space-y-[11px]"
                            style={{
                                width: '535px',
                                height: '359px',
                            }}
                        >
                            {/* Section 1 - MMUs Are Typically Operated With (Expanded) */}
                            <div 
                                className="bg-white overflow-hidden"
                                style={{
                                    width: '535px',
                                    height: expandedSections.operated ? '181px' : '78px',
                                    transition: 'height 0.3s ease',
                                }}
                            >
                                <button
                                    onClick={() => toggleSection('operated')}
                                    className="w-full flex items-center justify-between hover:bg-[#F8FAFC] transition-colors"
                                    style={{
                                        padding: '24px 26.31px',
                                    }}
                                >
                                    <h3 
                                        className="font-['DM_Sans'] font-semibold capitalize text-left"
                                        style={{
                                            width: '380.42px',
                                            height: '30px',
                                            fontSize: '20px',
                                            lineHeight: '30px',
                                            letterSpacing: '0%',
                                            color: '#1566B7',
                                        }}
                                    >
                                        MMUs Are Typically Operated With:
                                    </h3>
                                    <svg
                                        className={`w-6 h-6 text-[#1566B7] transition-transform duration-300 flex-shrink-0 ${
                                            expandedSections.operated ? 'rotate-180' : ''
                                        }`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>

                                {/* Expanded Content */}
                                {expandedSections.operated && (
                                    <div 
                                        className="font-['DM_Sans']"
                                        style={{
                                            width: '475.8px',
                                            height: '104px',
                                            paddingLeft: '26.31px',
                                            paddingBottom: '15px',
                                            fontWeight: 400,
                                            fontSize: '16px',
                                            lineHeight: '165%',
                                            letterSpacing: '0%',
                                            color: '#142349',
                                        }}
                                    >
                                        <ul className="space-y-0">
                                            <li className="flex items-start">
                                                <span className="inline-block w-[6px] h-[6px] rounded-full bg-[#142349] mt-[9px] mr-3 flex-shrink-0"></span>
                                                <span>A qualified Medical Officer</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="inline-block w-[6px] h-[6px] rounded-full bg-[#142349] mt-[9px] mr-3 flex-shrink-0"></span>
                                                <span>Trained nursing staff</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="inline-block w-[6px] h-[6px] rounded-full bg-[#142349] mt-[9px] mr-3 flex-shrink-0"></span>
                                                <span>Supporting technical or field staff</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="inline-block w-[6px] h-[6px] rounded-full bg-[#142349] mt-[9px] mr-3 flex-shrink-0"></span>
                                                <span>Structured deployment schedules and route planning</span>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </div>

                            {/* Section 2 - Operations Include (Collapsed) */}
                            <div 
                                className="bg-white overflow-hidden"
                                style={{
                                    width: '535px',
                                    height: expandedSections.operations ? '181px' : '78px',
                                    transition: 'height 0.3s ease',
                                }}
                            >
                                <button
                                    onClick={() => toggleSection('operations')}
                                    className="w-full flex items-center justify-between hover:bg-[#F8FAFC] transition-colors"
                                    style={{
                                        padding: '24px 26.31px',
                                    }}
                                >
                                    <h3 
                                        className="font-['DM_Sans'] font-semibold capitalize text-left"
                                        style={{
                                            fontSize: '20px',
                                            lineHeight: '30px',
                                            letterSpacing: '0%',
                                            color: '#1566B7',
                                        }}
                                    >
                                        Operations Include:
                                    </h3>
                                    <svg
                                        className={`w-6 h-6 text-[#1566B7] transition-transform duration-300 flex-shrink-0 ${
                                            expandedSections.operations ? 'rotate-180' : ''
                                        }`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>

                                {expandedSections.operations && (
                                    <div 
                                        className="font-['DM_Sans']"
                                        style={{
                                            paddingLeft: '26.31px',
                                            paddingRight: '26.31px',
                                            paddingBottom: '15px',
                                            fontWeight: 400,
                                            fontSize: '16px',
                                            lineHeight: '165%',
                                            color: '#142349',
                                        }}
                                    >
                                        <p>Content for operations section...</p>
                                    </div>
                                )}
                            </div>

                            {/* Section 3 - Program Workflows (Collapsed) */}
                            <div 
                                className="bg-white overflow-hidden"
                                style={{
                                    width: '535px',
                                    height: expandedSections.workflows ? '181px' : '78px',
                                    transition: 'height 0.3s ease',
                                }}
                            >
                                <button
                                    onClick={() => toggleSection('workflows')}
                                    className="w-full flex items-center justify-between hover:bg-[#F8FAFC] transition-colors"
                                    style={{
                                        padding: '24px 26.31px',
                                    }}
                                >
                                    <h3 
                                        className="font-['DM_Sans'] font-semibold capitalize text-left"
                                        style={{
                                            fontSize: '20px',
                                            lineHeight: '30px',
                                            letterSpacing: '0%',
                                            color: '#1566B7',
                                        }}
                                    >
                                        Program Workflows Are Designed To Ensure:
                                    </h3>
                                    <svg
                                        className={`w-6 h-6 text-[#1566B7] transition-transform duration-300 flex-shrink-0 ${
                                            expandedSections.workflows ? 'rotate-180' : ''
                                        }`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>

                                {expandedSections.workflows && (
                                    <div 
                                        className="font-['DM_Sans']"
                                        style={{
                                            paddingLeft: '26.31px',
                                            paddingRight: '26.31px',
                                            paddingBottom: '15px',
                                            fontWeight: 400,
                                            fontSize: '16px',
                                            lineHeight: '165%',
                                            color: '#142349',
                                        }}
                                    >
                                        <p>Content for workflows section...</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Responsive View (Mobile to Large Desktop) */}
            <div className="xl:hidden max-w-[1400px] mx-auto bg-[#F7F9FC] rounded-xl p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                    
                    {/* Left Side - Doctor Image */}
                    <div className="relative flex justify-center lg:justify-start order-2 lg:order-1">
                        <div className="relative w-full max-w-[450px]">
                            <img
                                src="/MMU/ManSquare.png"
                                alt="Healthcare professional - Medical officer with stethoscope"
                                className="w-full h-auto object-cover rounded-lg border"
                            />
                        </div>
                    </div>

                    {/* Right Side - Content */}
                    <div className="space-y-6 order-1 lg:order-2">
                        <div>
                            <h2 className="font-['Source_Serif_Pro'] font-semibold text-[32px] md:text-[38px] lg:text-[42px] leading-[1.2] mb-4 capitalize">
                                <span className="text-[#142349]">Staffing & </span>
                                <span className="text-[#1566B7]">MMU Operations</span>
                            </h2>

                            <p className="font-['DM_Sans'] text-[#142349] text-[16px] md:text-[17px] lg:text-[18px] leading-[1.67] font-light">
                                Effective MMU programs depend on disciplined operations and trained medical teams.
                            </p>
                        </div>

                        {/* Accordion Sections */}
                        <div className="space-y-3">
                            {/* Section 1 */}
                            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                                <button
                                    onClick={() => toggleSection('operated')}
                                    className="w-full flex items-center justify-between p-5 hover:bg-[#F8FAFC] transition-colors"
                                >
                                    <h3 className="font-['DM_Sans'] font-semibold text-[18px] text-[#1566B7] text-left capitalize">
                                        MMUs Are Typically Operated With:
                                    </h3>
                                    <svg
                                        className={`w-6 h-6 text-[#1566B7] transition-transform duration-300 ${
                                            expandedSections.operated ? 'rotate-180' : ''
                                        }`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>

                                {expandedSections.operated && (
                                    <div className="px-5 pb-5 pt-2">
                                        <ul className="space-y-2 font-['DM_Sans'] text-[#142349] text-[15px] leading-[1.65]">
                                            <li className="flex items-start">
                                                <span className="inline-block w-[6px] h-[6px] rounded-full bg-[#142349] mt-[9px] mr-3 flex-shrink-0"></span>
                                                <span>A qualified Medical Officer</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="inline-block w-[6px] h-[6px] rounded-full bg-[#142349] mt-[9px] mr-3 flex-shrink-0"></span>
                                                <span>Trained nursing staff</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="inline-block w-[6px] h-[6px] rounded-full bg-[#142349] mt-[9px] mr-3 flex-shrink-0"></span>
                                                <span>Supporting technical or field staff</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="inline-block w-[6px] h-[6px] rounded-full bg-[#142349] mt-[9px] mr-3 flex-shrink-0"></span>
                                                <span>Structured deployment schedules and route planning</span>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </div>

                            {/* Sections 2 & 3 - Similar structure */}
                            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                                <button
                                    onClick={() => toggleSection('operations')}
                                    className="w-full flex items-center justify-between p-5 hover:bg-[#F8FAFC] transition-colors"
                                >
                                    <h3 className="font-['DM_Sans'] font-semibold text-[18px] text-[#1566B7] text-left capitalize">
                                        Operations Include:
                                    </h3>
                                    <svg className={`w-6 h-6 text-[#1566B7] transition-transform duration-300 ${expandedSections.operations ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                            </div>

                            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                                <button
                                    onClick={() => toggleSection('workflows')}
                                    className="w-full flex items-center justify-between p-5 hover:bg-[#F8FAFC] transition-colors"
                                >
                                    <h3 className="font-['DM_Sans'] font-semibold text-[18px] text-[#1566B7] text-left capitalize">
                                        Program Workflows Are Designed To Ensure:
                                    </h3>
                                    <svg className={`w-6 h-6 text-[#1566B7] transition-transform duration-300 ${expandedSections.workflows ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MMUStaffing;
