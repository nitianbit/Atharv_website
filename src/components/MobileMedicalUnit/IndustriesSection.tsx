import styles from './ohc.module.css';

const IndustriesSection = () => {
    const industries = [
        {
            name: 'Power Plants & Utilities',
            image: '/OccupationalHealthCentres/power-plants-utilities.png'
        },
        {
            name: 'Mining & Mineral Processing',
            image: '/OccupationalHealthCentres/mining-mineral-processing.png'
        },
        {
            name: 'Oil, Gas & Petrochemicals',
            image: '/OccupationalHealthCentres/oil-gas-petrochemicals.png'
        },
        {
            name: 'Logistics Hubs & Warehouses',
            image: '/OccupationalHealthCentres/logistics-warehouses.png'
        }
    ];

    return (
        <div className="w-full bg-white py-12 md:py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <h2 className={`${styles.headingSerif} ${styles.headingSerifMedium} text-center mb-6 max-w-3xl mx-auto`}>
                    Industries <span className={styles.primaryBlue}>We Serve</span>
                </h2>

                <div className="max-w-4xl mx-auto mb-10 space-y-0">
                    <p className={`${styles.bodyText} text-center text-lg leading-relaxed`}>
                        <span className={`${styles.bodyTextLight}`}>We deliver OHC services for industrial clients across India, including</span> <strong>metro cities, semi-urban regions, and remote industrial locations</strong>.
                    </p>
                    <p className={`${styles.bodyTextLight} text-center text-lg leading-relaxed p-0 m-0`}>
                        Atharv Healthcare supports OHCs across diverse sectors, including:
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-4 mb-8">
                    {industries.map((industry, index) => (
                        <div
                            key={index}
                            className="group cursor-pointer w-[200px] flex-shrink-0"
                        >
                            <div className="relative w-full aspect-[3/4] mb-3 shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                                <img 
                                    src={industry.image} 
                                    alt={industry.name}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-[#1566B7] px-3 py-2 border-t-0">

                                </div>
                            </div>
                        </div>
                    ))}
                </div>

 
            </div>
        </div>
    );
};

export default IndustriesSection;
