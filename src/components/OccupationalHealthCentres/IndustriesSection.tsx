import styles from './ohc.module.css';

const IndustriesSection = () => {
    const industries = [
        {
            name: 'Metal Plants',
            image: '/OccupationalHealthCentres/power-plants-utilities.png'
        },
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
        },
        {
            name: 'large infrastructure and construction projects ',
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

                {/* Scrolling industries strip, similar to Companies section */}
                <div
                    className="w-full mb-8"
                >
                    <div
                        style={{
                            width: '100%',
                            maxWidth: '1512px',
                            margin: '0 auto',
                            overflow: 'hidden',
                            position: 'relative',
                            display: 'flex',
                            alignItems: 'center'
                        }}
                    >
                        <div
                            className="animate-scroll-industries"
                            style={{
                                display: 'flex',
                                alignItems: 'stretch',
                                gap: '24px'
                            }}
                        >
                            {/* first set */}
                            {industries.map((industry, index) => (
                                <div
                                    key={`first-${index}`}
                                    style={{
                                        width: '220px',
                                        flexShrink: 0
                                    }}
                                    className="group cursor-pointer"
                                >
                                    <div className="relative w-full aspect-4/5 shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden ">
                                        <img
                                            src={industry.image}
                                            alt={industry.name}
                                            className="w-full h-full object-cover block"
                                        />
                                        {/* <div className="absolute inset-x-0 bottom-0 bg-[#1566B7] bg-opacity-90 px-3 py-2">
                                            <p className="text-white text-sm font-medium text-center leading-snug">
                                                {industry.name}
                                            </p>
                                        </div> */}
                                    </div>
                                </div>
                            ))}

                            {/* duplicate set for seamless loop */}
                            {industries.map((industry, index) => (
                                <div
                                    key={`second-${index}`}
                                    style={{
                                        width: '220px',
                                        flexShrink: 0
                                    }}
                                    className="group cursor-pointer"
                                >
                                    <div className="relative w-full aspect-4/5 shadow-md hover:shadow-md transition-shadow duration-300 overflow-hidden">
                                        <img
                                            src={industry.image}
                                            alt={industry.name}
                                            className="w-full h-full object-cover block"
                                        />
                                        {/* <div className="absolute inset-x-0 bottom-0 bg-[#1566B7] bg-opacity-90 px-3 py-2">
                                            <p className="text-white text-sm font-medium text-center leading-snug">
                                                {industry.name}
                                            </p>
                                        </div> */}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <style>{`
                        @keyframes scroll-industries {
                            0% {
                                transform: translateX(0);
                            }
                            100% {
                                transform: translateX(-50%);
                            }
                        }

                        .animate-scroll-industries {
                            animation: scroll-industries 30s linear infinite;
                        }

                        .animate-scroll-industries:hover {
                            animation-play-state: paused;
                        }
                    `}</style>
                </div>
            </div>
        </div>
    );
};

export default IndustriesSection;
