import styles from '../OccupationalHealthCentres/ohc.module.css';

const SafetyQualitySection = () => {
    const features = [
        'Trained Medical Professionals And Service Partners',
        'Verified Operational Workflows',
        'Patient Confidentiality And Data Protection',
        'Proper Documentation And Record Management'
    ];

    return (
        <div className="w-full bg-white py-12 md:py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Text Section */}
                    <div>
                        <h2 className={`${styles.headingSerif} ${styles.headingSerifMedium} mb-6`}>
                            Safety, Quality & <span className={styles.primaryBlue}>Reliability</span>
                        </h2>

                        <p className={`${styles.bodyText} text-lg mb-6 leading-relaxed`}>
                            Atharv Healthcare follows structured processes to support safe and responsible service delivery:
                        </p>

                        <ul className="space-y-4">
                            {features.map((feature, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <span className="w-8 h-8 rounded-full bg-[#E8F4FD] text-[#1566B7] font-bold text-lg flex items-center justify-center shrink-0">✓</span>
                                    <span className={`${styles.bodyText} text-lg leading-relaxed`}>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Image Section */}
                    <div className="relative">
                        <div className="relative z-10">
                            <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden relative">
                                <img
                                    src="/HomeHealthcare/safety.png"
                                    alt="Safety, Quality & Reliability"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                        <div className={`${styles.blueGradientBg} opacity-20 rounded-2xl w-full aspect-[4/3] absolute top-8 right-8 -z-10`}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SafetyQualitySection;
