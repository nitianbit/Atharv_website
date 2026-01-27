import styles from '../OccupationalHealthCentres/ohc.module.css';

const ServiceModelSection = () => {
    const models = [
        'Wholesale Pharmacy Services - focused on pan-India institutional and industrial medicine supply',
        'Retail Pharmacy Services - operated on a limited, location-specific basis to support local healthcare delivery'
    ];

    return (
        <div className="w-full bg-white py-12 md:py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Image Section */}
                    <div>
                        <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden relative">
                            <img
                                src="/Pharmacy/pharmacy-model.png"
                                alt="Pharmacy Service Model"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Text Section */}
                    <div>
                        <h2 className={`${styles.headingSerif} ${styles.headingSerifMedium} mb-6`}>
                            Pharmacy Service Model <span className={styles.primaryBlue}>At Atharv Healthcare</span>
                        </h2>

                        <p className={`${styles.bodyText} text-lg mb-6 leading-relaxed`}>
                            Atharv Healthcare's pharmacy operations function under two distinct models.
                        </p>

                        <ul className="space-y-4 mb-6">
                            {models.map((model, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <span className={`${styles.primaryBlue} font-bold text-xl shrink-0`}>•</span>
                                    <span className={`${styles.bodyText} text-lg leading-relaxed`}>{model}</span>
                                </li>
                            ))}
                        </ul>

                        <p className={`${styles.bodyText} text-lg leading-relaxed`}>
                            This separation ensures <strong>regulatory compliance, clarity of service scope and reliable healthcare support</strong>.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceModelSection;
