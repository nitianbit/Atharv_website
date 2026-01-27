import styles from '../OccupationalHealthCentres/ohc.module.css';

const WhyIntegratedSection = () => {
    const benefits = [
        'A single point of coordination',
        'Reduced delays between consultation, diagnostics, and treatment',
        'Better follow-up and continuity of care',
        'Improved emergency preparedness'
    ];

    return (
        <div className="w-full bg-gray-50 py-12 md:py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Image Section */}
                    <div>
                        <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden relative">
                            <img
                                src="/HomeHealthcare/integrate-home-healthcare.png"
                                alt="Why Integrated Home Healthcare Matters"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Text Section */}
                    <div>
                        <h2 className={`${styles.headingSerif} ${styles.headingSerifMedium} mb-6`}>
                            Why Integrated <span className={styles.primaryBlue}>Home Healthcare Matters</span>
                        </h2>

                        <p className={`${styles.bodyText} text-lg mb-6 leading-relaxed`}>
                            When consultations, medicines, diagnostics, and emergency services operate independently, healthcare delivery becomes fragmented.
                        </p>

                        <h3 className={`${styles.primaryBlue} text-xl font-bold mb-4`}>
                            Atharv Healthcare's Integrated Model Helps Ensure:
                        </h3>

                        <ul className="space-y-4">
                            {benefits.map((benefit, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <span className={`${styles.primaryBlue} font-bold text-xl shrink-0`}>•</span>
                                    <span className={`${styles.bodyText} text-lg leading-relaxed`}>{benefit}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyIntegratedSection;
