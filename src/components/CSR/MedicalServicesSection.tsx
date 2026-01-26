import styles from './ohc.module.css';

const MedicalServicesSection = () => {
    const complianceSupport = [
    'Alignment to CSR Act and Schedule VII requirements',
    'Program documentation and evidence collection',
    'Periodic MIS and activity summaries',
    'Beneficiary data handling with confidentiality controls',
    'Support during audits, reviews and internal assessments'
];


    return (
        <div className="w-full bg-white py-12 md:py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                    {/* Text Section */}
                    <div>
                        <h2 className={`${styles.headingSerif} ${styles.headingSerifMedium} mb-6`}>
                        Governance, Compliance &<span className={styles.primaryBlue}> CSR Reporting </span>
                        </h2>

                        <p className={`${styles.bodyText} text-lg mb-4 leading-relaxed bold-normal`}>
                            Our approach ensures CSR healthcare initiatives are audit-ready, transparent and consistently reported, not just executed on the ground. 
                        </p>

                        <div>
                            <h3 className={`${styles.bodyText} ${styles.primaryBlue} text-xl font-bold mb-4`}>Atharv Healthcare supports CSR programs with: </h3>
                            <ul className="space-y-3">
                                {complianceSupport.map((complianceSupport, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <span className={`${styles.primaryBlue} font-bold text-xl flex-shrink-0 `}>•</span>
                                        <span className={`${styles.bodyText} text-base leading-relaxed`}>{complianceSupport}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="relative">
                        <img 
                            src="/csr/csr-4.png" 
                            alt="Governance, Compliance & CSR Reporting"
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
