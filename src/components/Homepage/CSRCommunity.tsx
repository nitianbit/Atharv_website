// import React from 'react';
import { ArrowRight } from 'lucide-react'; // or use react-icons

const CSRCommunity = () => {
    return (
        <div className="w-full bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                
                {/* Main Container - Two Column Layout */}
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
                    
                    {/* Left Side - Image with Blue Border Overlay */}
                    <div className="w-full lg:w-[45%] relative">
                        {/* Blue Border Overlay */}
                        <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-cyan-300 to-blue-400 rounded-3xl z-0"></div>
                        
                        {/* Main Image */}
                        <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                            <img 
                                src="/Homepage/Nurse.png" 
                                alt="Healthcare worker providing community health services" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Right Side - Content Section */}
                    <div className="w-full lg:w-[55%] relative">
                        
                        {/* Heading */}
                        <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                            <span className="text-blue-600">CSR & Community Health</span>
                            <br/>
                            <span className="text-gray-900">Initiatives</span>
                        </h2>

                        {/* Description Paragraph */}
                        <p className="text-gray-700 text-lg leading-relaxed mb-8">
                            We conduct community <span className="font-bold">health programs, rural outreach and preventive healthcare camps</span> to make healthcare accessible beyond hospitals and cities.
                        </p>

                        {/* Bullet Points List */}
                        <ul className="space-y-3 mb-8">
                            <li className="flex items-start gap-3 text-gray-800 text-base lg:text-lg">
                                <span className="text-blue-600 font-bold mt-1">•</span>
                                <span>Free health check-up camps</span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-800 text-base lg:text-lg">
                                <span className="text-blue-600 font-bold mt-1">•</span>
                                <span>Mobile medical unit outreach in rural areas</span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-800 text-base lg:text-lg">
                                <span className="text-blue-600 font-bold mt-1">•</span>
                                <span>School and community health awareness programs</span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-800 text-base lg:text-lg">
                                <span className="text-blue-600 font-bold mt-1">•</span>
                                <span>Eye-care and primary healthcare support drives</span>
                            </li>
                        </ul>

                        {/* CTA Link/Button */}
                        <a 
                            href="#csr-initiatives" 
                            className="inline-flex items-center gap-2 text-blue-600 font-bold text-lg hover:text-blue-700 transition-colors duration-300 group"
                        >
                            EXPLORE CSR INITIATIVES
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CSRCommunity;
