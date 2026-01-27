import styles from '../OccupationalHealthCentres/ohc.module.css';

const WhyChooseSection = () => {
    const features = [
        {
            icon: '/HomeHealthcare/integrated-medical.png',
            title: 'Integrated Medical And Pharmacy Support'
        },
        {
            icon: '/HomeHealthcare/delivery-models.png',
            title: 'Experience Across Multiple Healthcare Delivery Models'
        },
        {
            icon: '/HomeHealthcare/pan-india.png',
            title: 'Pan-India Operational Capability'
        },
        {
            icon: '/HomeHealthcare/coordination.png',
            title: 'Coordination Across Consultation, Diagnostics, And Medicine Supply'
        },
        {
            icon: '/HomeHealthcare/accountability.png',
            title: 'Focus On Accountability, Documentation, And Reliability'
        }
    ];

    return (
        <div className="w-full py-12 md:py-16 px-4" style={{ background: '#F0F7FF' }}>
            <div className="max-w-7xl mx-auto">
                <h2 className={`${styles.headingSerif} ${styles.headingSerifMedium} text-center mb-4 max-w-3xl mx-auto`}>
                    Why Choose <span className={styles.primaryBlue}>Atharv Healthcare</span>
                </h2>

                <p className={`${styles.bodyText} text-center text-lg mb-12 max-w-3xl mx-auto leading-relaxed`}>
                    Atharv Healthcare brings operational discipline and coordination to home healthcare delivery.
                </p>

                <div className="flex flex-wrap justify-center gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] max-w-sm"
                        >
                            <div className="flex items-start gap-4">
                                <div className="w-16 h-16 rounded-full flex items-center justify-center shrink-0">
                                    <img
                                        src={feature.icon}
                                        alt={feature.title}
                                        className="w-10 h-10 object-contain"
                                    />
                                </div>
                                <h3 className={`${styles.bodyText} font-semibold text-lg leading-tight text-[#142349] flex-1`}>
                                    {feature.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WhyChooseSection;
