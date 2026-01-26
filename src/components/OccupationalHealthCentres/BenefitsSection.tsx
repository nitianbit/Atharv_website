import styles from './ohc.module.css';

const BenefitsSection = () => {
    const benefits = [
        {
            image: '/OccupationalHealthCentres/tailor-made-solutions.png',
            title: 'Tailor-Made OHC Solutions – Not One-Size-Fits-All'
        },
        {
            image: '/OccupationalHealthCentres/price-competitive.png',
            title: 'Price-Competitive Packages'
        },
        {
            image: '/OccupationalHealthCentres/pan-india-presence.png',
            title: 'Pan-India Presence Including Rural Belts'
        },
        {
            image: '/OccupationalHealthCentres/compliance-driven.png',
            title: '100% Compliance-Driven Operations'
        },
        {
            image: '/OccupationalHealthCentres/accountability.png',
            title: 'Strong Culture Of Accountability And Results'
        },
        {
            image: '/OccupationalHealthCentres/pharmacy.png',
            title: 'In-House Pharmacy And Medicine Supply Network'
        },
        {
            image: '/OccupationalHealthCentres/project-management.png',
            title: 'Dedicated Project Management And Support Team'
        }
    ];

    return (
        <div className="w-full py-12 md:py-16 px-4" style={{ background: '#F0F7FF' }}>
            <div className="max-w-7xl mx-auto">
                <h2 className={`${styles.headingSerif} ${styles.headingSerifMedium} text-center mb-4 max-w-3xl mx-auto`}>
                    Why Companies Choose <span className={styles.primaryBlue}>Atharv Healthcare</span>
                </h2>

                <p className={`${styles.bodyText} text-center text-lg mb-12 max-w-3xl mx-auto leading-relaxed font-medium`}>
                   <span className={`${styles.bodyTextLight}`}>We don't just "supply manpower."</span> We run end-to-end OHC operations reliably.
                </p>

                <div className="flex flex-wrap justify-center gap-6">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-gray-100 flex items-center gap-4 w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] max-w-sm"
                        >
                            <div className="flex-shrink-0">
                                <img 
                                    src={benefit.image} 
                                    alt={benefit.title}
                                    className="w-16 h-16 object-contain"
                                />
                            </div>
                            <h3 className={`${styles.bodyText} font-semibold text-base leading-tight flex-1`}>
                                {benefit.title}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BenefitsSection;
