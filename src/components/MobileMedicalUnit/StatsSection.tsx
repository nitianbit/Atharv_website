import styles from './ohc.module.css';

const StatsSection = () => {
    const stats = [
        {
            number: '8',
            label: 'On-Site Occupational Health Centres (OHCs)'
        },
        {
            number: '45+',
            label: 'Industrial & Workplace Locations Covered'
        },
        {
            number: '2.5 L+',
            label: 'Employees & Workers Supported'
        }
    ];

    return (
        <div className={`w-full py-16 md:py-20 px-4 `}>{/*  ${styles.gradientBg} */}
            <div className="max-w-7xl mx-auto">
                <h2 className={`${styles.headingSerif} ${styles.headingSerifMedium} ${styles.primaryBlue} text-center mb-1`}>
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
                            <div className={`text-6xl md:text-7xl font-bold ${styles.primaryBlue} mb-4`}>
                                {stat.number}
                            </div>
                            <p className={`${styles.bodyText} text-base md:text-lg`}>
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
