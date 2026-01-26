import styles from './ohc.module.css';

const WhatIsOHCSection = () => {
    const features = [
        'Mobile healthcare access without hospital dependence ',
        'Structured CSR and public health program execution ',
        'Preventive screening, early detection, and referrals',
        'Scalable MMU deployment across multiple locations',
    ];

    return (
    <div className="w-full bg-gray-50 py-12 md:py-16 px-4">
    <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center"> {/* Increased gap */}

            {/* Image Section */}
            <div className="order-2 lg:order-1">
                <img 
                    src="/MobileMedicalUnit/mmu.png" 
                    alt="Mobile Medical Unit"
                    className="w-full"
                />
            </div>

            {/* Text Section */}
            <div className="order-1 lg:order-2">
                <h2 className={`${styles.headingSerif} ${styles.headingSerifMedium} mb-6 text-lg md:text-xl`}> {/* Smaller heading */}
                    Why <span className={styles.primaryBlue}>Mobile Medical Units</span> Matter
                </h2>

                <p className={`${styles.bodyText} text-sm md:text-base mb-4 leading-relaxed`}> {/* Smaller paragraph */}
                    Mobile Medical Units (MMUs) deliver primary healthcare in rural areas, remote sites, and locations without fixed medical facilities. They support organised, repeatable healthcare delivery for CSR programs, government initiatives, and workforce outreach. 
                </p>

                <p className={`${styles.primaryBlue} text-sm md:text-base font-semibold mb-4`}>
                    Mobile Medical Units enable: 
                </p>

                <ul className="space-y-2"> {/* Smaller gap between list items */}
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm md:text-base"> {/* smaller text */}
                            <span className={`${styles.primaryBlue} font-bold text-lg flex-shrink-0`}>•</span>
                            <span className={`${styles.bodyText} leading-relaxed`}>{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
</div>

);

};
export default WhatIsOHCSection;
