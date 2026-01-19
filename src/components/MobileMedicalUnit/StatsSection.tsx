import styles from './ohc.module.css';

const StatsSection = () => {
    const stats = [
        {
            image: '/MobileMedicalUnit/Mobile-Medical-Units-Currently-in-Operation.png',
            heading: '',
            label: 'Mobile Medical Units Currently in Operation'
        },
        {
            image: '/MobileMedicalUnit/PSU-&-Institutional.png',
            heading: 'PSU & Institutional',
            label: 'MMU Deployments'
        },
        {
            image: '/MobileMedicalUnit/Multi-State.png',
            heading: 'Multi-State',
            label: 'MMU Coverage Across India'
        }
    ];

    return (
        <div className="w-full py-16 md:py-20 px-4">
            <div className="max-w-7xl mx-auto">

                <h2 className={`${styles.headingSerif} ${styles.headingSerifMedium} ${styles.primaryBlue} text-center mb-2`}>
                    MMU Operations <span className={styles.bodyText}>At Scale</span>
                </h2>

                <p className={`${styles.bodyTextLight} text-center text-lg mb-12 max-w-3xl mx-auto`}>
                    Delivering compliant, on-site healthcare across industrial environments.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl p-8 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2 shadow-sm"
                        >
                            {/* Smaller Image */}
                            <img
                                src={stat.image}
                                alt={stat.label}
                                className="w-14 h-14 mx-auto mb-3 object-contain"
                            />

                            {/* Smaller Heading */}
                            <h3
                                className={`${styles.headingSerif} text-xl md:text-2xl font-semibold ${styles.primaryBlue} mb-1`}
                            >
                                {stat.heading}
                            </h3>

                            {/* Smaller Label */}
                            <p
                                className={`${styles.bodyText} text-sm md:text-base leading-relaxed`}
                            >
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default StatsSection;
