import styles from './ohc.module.css';

const WhatIsOHCSection = () => {
    const features = [
        'Immediate care during accidents and medical emergencies',
        'Routine and periodic employee health checkups',
        'Fitness-to-work assessments',
        'Surveillance for occupational disease risks',
        'Medical record keeping for statutory compliance'
    ];

    return (
        <div className="w-full bg-gray-50 py-12 md:py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Image Section */}
                    <div className="order-2 lg:order-1">
                        <img 
                            src="/OccupationalHealthCentres/OHC.png" 
                            alt="Occupational Health Centre"
                            className="w-full "
                        />
                    </div>

                    {/* Text Section */}
                    <div className="order-1 lg:order-2">
                        <h2 className={`${styles.headingSerif} ${styles.headingSerifMedium} mb-6`}>
                            What Is An <span className={styles.primaryBlue}>Occupational Health Centre (OHC)?</span>
                        </h2>

                        <p className={`${styles.bodyText} text-lg mb-8 leading-relaxed`}>
                            An Occupational Health Centre is an onsite medical unit inside a workplace that provides:
                        </p>

                        <ul className="space-y-4">
                            {features.map((feature, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <span className={`${styles.primaryBlue} font-bold text-xl flex-shrink-0`}>•</span>
                                    <span className={`${styles.bodyText} text-lg leading-relaxed`}>{feature}</span>
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
