import styles from '../OccupationalHealthCentres/ohc.module.css';

const RetailServicesSection = () => {
    const services = [
        'Are Prescription-Based',
        'Support Home Delivery Within A Limited Local Vicinity In Kolkata',
        'Are Positioned To Support Ongoing Healthcare And Home Healthcare Needs'
    ];

    return (
        <div className="w-full bg-gray-50 py-12 md:py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Text Section */}
                    <div>
                        <h2 className={`${styles.headingSerif} ${styles.headingSerifMedium} mb-6`}>
                            Retail Pharmacy <span className={styles.primaryBlue}>Services</span>
                        </h2>

                        <p className={`${styles.bodyText} text-lg mb-6 leading-relaxed`}>
                            In addition to wholesale operations, Atharv Healthcare operates a <strong>retail pharmacy unit in Kolkata</strong> under a valid retail licence. Select ethical branded medicines may be available at <strong>preferential pricing</strong>, subject to prescription and availability.
                        </p>

                        <div>
                            <h3 className={`${styles.bodyText} text-xl font-bold mb-4 ${styles.primaryBlue}`}>
                                Retail Pharmacy Services:
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
                                src="/Pharmacy/retail-pharmacy.png"
                                alt="Retail Pharmacy Services"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RetailServicesSection;
