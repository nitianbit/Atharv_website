import styles from '../OccupationalHealthCentres/ohc.module.css';

const WhyChooseSection = () => {
    const features = [
        {
            icon: '🏠',
            title: 'Integrated Medical And Pharmacy Support'
        },
        {
            icon: '🏢',
            title: 'Experience Across Multiple Healthcare Delivery Models'
        },
        {
            icon: '🗺️',
            title: 'Pan-India Operational Capability'
        },
        {
            icon: '⚙️',
            title: 'Coordination Across Consultation, Diagnostics, And Medicine Supply'
        },
        {
            icon: '📋',
            title: 'Focus On Accountability, Documentation, And Reliability'
        }
    ];

    return (
        <div className="w-full bg-white py-12 md:py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <h2 className={`${styles.headingSerif} ${styles.headingSerifMedium} text-center mb-4 max-w-3xl mx-auto`}>
                    Why Choose <span className={styles.primaryBlue}>Atharv Healthcare</span>
                </h2>

                <p className={`${styles.bodyText} text-center text-lg mb-12 max-w-3xl mx-auto leading-relaxed`}>
                    Atharv Healthcare brings operational discipline and coordination to home healthcare delivery.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
                        >
                            <div className="text-5xl mb-4">{feature.icon}</div>
                            <h3 className={`${styles.bodyText} font-semibold text-lg leading-tight`}>
                                {feature.title}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WhyChooseSection;
