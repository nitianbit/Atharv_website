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
                        <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center relative">
                            <span className="text-[#1566B7] font-medium text-center px-4 z-10">Doctor Consulting Elderly Patient Image</span>
                            <div className="absolute inset-0 bg-[#1566B7] opacity-10 rounded-2xl"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhoIsItForSection;
