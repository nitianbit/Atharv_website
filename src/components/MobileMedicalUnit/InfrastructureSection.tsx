import styles from './ohc.module.css';

const InfrastructureSection = () => {
    return (
        <div className="w-full bg-white py-12 md:py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Image Section */}
                    <div className="relative">
                        <img 
                            src="/OccupationalHealthCentres/infrastructure-equipment.png" 
                            alt="Infrastructure & Equipment"
                            className="w-full  mb-4"
                        />
                        <div className={`${styles.blueGradientBg} opacity-20 rounded-2xl w-full aspect-[4/3] absolute -top-4 -right-4 -z-10`}></div>
                    </div>

                    {/* Text Section */}
                    <div>
                        <h2 className={`${styles.headingSerif} ${styles.headingSerifMedium} mb-6`}>
                            OHC <span className={styles.primaryBlue}>Infrastructure & Equipment</span>
                        </h2>

                        <div className="space-y-6">
                            <p className={`${styles.bodyText} text-lg leading-relaxed`}>
                                Every OHC is planned based on workforce size, risk exposure, and statutory needs — not templates.
                            </p>

                            <p className={`${styles.bodyText} text-lg leading-relaxed`}>
                                We provide essential medical infrastructure such as <strong>examination beds</strong>, <strong>emergency and first-aid equipment</strong>, <strong>oxygen support</strong>, <strong>diagnostic instruments</strong>, <strong>mobility aids</strong>, <strong>PPE</strong>, and <strong>biomedical waste management systems</strong>.
                            </p>

                            <p className={`${styles.bodyText} text-lg leading-relaxed`}>
                                Each setup is <strong className={styles.primaryBlue}>site-specific</strong>, <strong className={styles.primaryBlue}>functional</strong>, and <strong className={styles.primaryBlue}>compliance-ready</strong> from day one.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfrastructureSection;
