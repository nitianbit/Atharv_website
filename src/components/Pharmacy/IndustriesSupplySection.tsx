import { useState } from 'react';
import styles from '../OccupationalHealthCentres/ohc.module.css';

const IndustriesSupplySection = () => {
    const [expandedBox, setExpandedBox] = useState<number>(0);

    const boxes = [
        {
            title: 'Medicine Supply Support Is Provided For:',
            items: [
                'Factories and manufacturing units',
                'Public sector undertakings (PSUs)',
                'Occupational health centres (OHCs) and on-site medical facilities'
            ]
        },
        {
            title: 'For OHCs, Pharmacy Support Includes:',
            items: [
                'Medicine supply for OHC operations',
                'Emergency medicine stocks',
                'Compliance documentation support'
            ]
        }
    ];

    return (
        <div className="hidden sm:block">
            <div className="w-full py-12 md:py-16 px-4 relative">
                {/* Background Image - Only visible on lg+ */}
                <div 
                    className="hidden lg:block absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: 'url(/Pharmacy/industory-psu.png)'
                    }}
                ></div>
                
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                        {/* Empty left column on desktop - background image shows through */}
                        <div className="hidden lg:block"></div>

                        {/* Text Panel - Right side */}
                        <div className={`${styles.blueGradientBg} p-6 sm:p-8 md:p-12 rounded-2xl flex flex-col justify-center`}>
                            <h2 className="text-white font-bold text-xl sm:text-2xl md:text-3xl mb-4 sm:mb-6">
                                Industries, PSUs & Occupational Health Centre Supply
                            </h2>

                            <p className="text-white/90 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
                                Atharv Healthcare supports industrial and corporate healthcare ecosystems through structured pharmaceutical supply.
                            </p>

                            <div className="space-y-3 sm:space-y-4">
                                {boxes.map((box, index) => (
                                    <div
                                        key={index}
                                        className="bg-white rounded-lg overflow-hidden shadow-sm"
                                    >
                                        <button
                                            onClick={() => setExpandedBox(expandedBox === index ? -1 : index)}
                                            className="w-full px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center text-left gap-3"
                                        >
                                            <span className="text-[#1566B7] font-semibold text-base sm:text-lg flex-1">
                                                {box.title}
                                            </span>
                                            <span className="text-[#1566B7] text-xl sm:text-2xl font-light shrink-0">
                                                {expandedBox === index ? '×' : '+'}
                                            </span>
                                        </button>
                                        {expandedBox === index && (
                                            <div className="px-4 sm:px-6 pb-4">
                                                <ul className="space-y-2">
                                                    {box.items.map((item, itemIndex) => (
                                                        <li key={itemIndex} className="flex items-start gap-2">
                                                            <span className="text-gray-600 font-bold mt-1 shrink-0">•</span>
                                                            <span className="text-gray-600 text-sm sm:text-base">{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
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

export default IndustriesSupplySection;
