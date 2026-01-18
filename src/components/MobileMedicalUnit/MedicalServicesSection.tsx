import styles from './ohc.module.css';

const MedicalServicesSection = () => {
    const services = [
        'Injury and illness management',
        'Emergency first aid',
        'Fitness-to-work assessments',
        'Periodic employee health checkups',
        'Occupational health surveillance',
        'Safety awareness and vaccination support (as required)'
    ];

    return (
        <div className="w-full bg-white py-12 md:py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                    {/* Text Section */}
                    <div>
                        <h2 className={`${styles.headingSerif} ${styles.headingSerifMedium} mb-6`}>
                            Medical Services Under <span className={styles.primaryBlue}>Occupational Health Centre</span>
                        </h2>

                        <p className={`${styles.bodyText} text-lg mb-8 leading-relaxed`}>
                            Atharv-operated OHCs deliver on-site medical care for industrial environments, focused on safety, prevention, and rapid response.
                        </p>

                        <div>
                            <h3 className={`${styles.bodyText} text-xl font-bold mb-4`}>Services include:</h3>
                            <ul className="space-y-3">
                                {services.map((service, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <span className={`${styles.primaryBlue} font-bold text-xl flex-shrink-0`}>•</span>
                                        <span className={`${styles.bodyText} text-lg leading-relaxed`}>{service}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <p className={`${styles.primaryBlue} text-lg font-semibold mt-6`}>
                            Result: Faster incident response, healthier employees, and reduced downtime.
                        </p>
                    </div>

                    {/* Image Section */}
                    <div className="relative">
                        <img 
                            src="/OccupationalHealthCentres/medical-services.png" 
                            alt="Medical Services"
                            className="w-full aspect-[4/3] rounded-2xl mb-4 "
                        />
                        <div className={`${styles.blueGradientBg} opacity-20 rounded-2xl w-full aspect-[4/3] absolute -top-4 -right-4 -z-10`}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MedicalServicesSection;
