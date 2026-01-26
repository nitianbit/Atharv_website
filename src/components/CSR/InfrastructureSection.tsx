import styles from './ohc.module.css';
const  Infrastructure= [
    'Defined objectives and measurable outputs',
    'Tracking of screenings, referrals and follow-ups',
    'Periodic program reviews and optimisation',
    'Clear accountability for execution and reporting'
];

const InfrastructureSection = () => {
    return (
        <div className="w-full bg-white py-12 md:py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Image Section */}
                    <div className="relative">
                        <img 
                            src="/csr/csr-5.png" 
                            alt="Infrastructure & Equipment"
                            className="w-full  mb-4"
                        />
                        <div className={`${styles.blueGradientBg} opacity-20 rounded-2xl w-full aspect-[4/3] absolute -top-4 -right-4 -z-10`}></div>
                    </div>

                    {/* Text Section */}
                    <div>
                        <h2 className={`${styles.headingSerif} ${styles.headingSerifMedium} mb-6`}>
                            Impact Measurement<span className={styles.primaryBlue}><br/>& Accountability</span>
                        </h2>

                        <div className="space-y-6 mb-4">
                            <p className={`${styles.bodyText} text-lg leading-relaxed`}>
                                CSR healthcare must demonstrate outcomes and not just<br/> activities. We measure impact through defined program objectives,<br/> service outputs and structured CSR reporting. 
                            </p>
                        </div>
                        <div>
                            <h3 className={`${styles.bodyText} ${styles.primaryBlue} text-xl font-bold mb-4`}>Atharv Healthcare supports CSR programs with: </h3>
                            <ul className="space-y-3">
                                {Infrastructure.map((Infrastructure, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <span className={`${styles.primaryBlue} font-bold text-xl flex-shrink-0 `}>•</span>
                                        <span className={`${styles.bodyText} text-base leading-relaxed`}>{Infrastructure}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfrastructureSection;
