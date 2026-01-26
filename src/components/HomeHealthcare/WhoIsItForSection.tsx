import styles from '../OccupationalHealthCentres/ohc.module.css';

const WhoIsItForSection = () => {
    const targetGroups = [
        'Elderly individuals requiring regular medical support',
        'Patients recovering after hospital discharge',
        'Individuals managing chronic health conditions',
        'Working professionals needing convenient care access',
        'Families seeking coordinated medical support at home'
    ];

    return (
        <div className="w-full bg-white py-12 md:py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Text Section */}
                    <div>
                        <h2 className={`${styles.headingSerif} ${styles.headingSerifMedium} mb-4`}>
                            Who Home Healthcare Services <span className={styles.primaryBlue}>Are For</span>
                        </h2>

                        <p className={`${styles.bodyText} text-lg mb-6 leading-relaxed`}>
                            Atharv's home healthcare services are suitable for:
                        </p>

                        <ul className="space-y-4">
                            {targetGroups.map((group, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <span className={`${styles.primaryBlue} font-bold text-xl shrink-0`}>•</span>
                                    <span className={`${styles.bodyText} text-lg leading-relaxed`}>{group}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Image Section */}
                    <div>
                        <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden relative">
                            <img
                                src="/HomeHealthcare/home-healthcare-sevices-3rd-section.png"
                                alt="Who Home Healthcare Services Are For"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhoIsItForSection;
