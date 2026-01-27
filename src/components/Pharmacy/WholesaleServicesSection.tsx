import styles from '../OccupationalHealthCentres/ohc.module.css';

const WholesaleServicesSection = () => {
    const services = [
        'Bulk Procurement And Institutional Medicine Supply',
        'Scheduled And Recurring Replenishment For Healthcare Programs',
        'Supply Support For Industries, PSUs And Occupational Health Centres',
        'Compliant Documentation And Controlled Distribution Processes'
    ];

    return (
        <div className={`w-full py-12 md:py-16 px-4`} style={{ background: '#F0F7FF' }}>
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Text Section */}
                    <div>
                        <h2 className={`${styles.headingSerif} ${styles.headingSerifMedium} mb-6`}>
                            Wholesale Pharmacy Services <span className={styles.primaryBlue}>(Pan-India)</span>
                        </h2>

                        <div className="space-y-6 mb-8">
                            <p className={`${styles.bodyText} text-lg leading-relaxed`}>
                                Atharv Healthcare's wholesale pharmacy services form the core of its pharmaceutical operations, structured for B2B and institutional healthcare use.
                            </p>

                            <p className={`${styles.bodyText} text-lg leading-relaxed`}>
                                Operating under a valid wholesale drug license across India, our services are designed to support large-scale healthcare delivery programs, industrial medical facilities, and institutional requirements.
                            </p>
                        </div>

                        <div>
                            <h3 className={`${styles.bodyText} text-xl font-bold mb-4 ${styles.primaryBlue}`}>
                                Wholesale Services Include:
                            </h3>
                            <ul className="space-y-4">
                                {services.map((service, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <span className="w-8 h-8 rounded-full bg-[#E8F4FD] text-[#1566B7] font-bold text-lg flex items-center justify-center shrink-0">✓</span>
                                        <span className={`${styles.bodyText} text-lg leading-relaxed`}>{service}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div>
                        <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden relative">
                            <img
                                src="/Pharmacy/wholesale-pharmacy.png"
                                alt="Wholesale Pharmacy Services"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WholesaleServicesSection;
