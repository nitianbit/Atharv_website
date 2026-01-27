import styles from './ohc.module.css';

const SocialProofSection2 = () => {
    return (
        <div className="w-full bg-white py-12 md:py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Text Section */}
                    <div>
                        <h2 className={`${styles.headingSerif} ${styles.headingSerifMedium} mb-6`}>
                            Experience &<span className={styles.primaryBlue}>{' '}Program <br/>Footprint</span> 
                        </h2>

                        <p className={`${styles.bodyText} text-lg mb-8 leading-relaxed`}>
                            Atharv Healthcare has supported community and CSR healthcare initiatives for <b>corporates, PSUs and institutions across<br/> India</b>, operating in urban, semi-urban and remote regions.
                        </p>

                        <ul className="space-y-4">
                            {[
                                'Community healthcare programs',
                                'CSR-aligned outreach initiatives',
                                'Rural and underserved population health support '
                            ].map((item, index) => (
                                <li key={index} className="flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-full bg-[#E8F4FD] text-[#1566B7] font-bold text-lg flex items-center justify-center flex-shrink-0">✓</span>
                                    <span className={`${styles.bodyText} text-lg`}>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Image Section */}
                    <div className="relative">
                        <img 
                            src="/OccupationalHealthCentres/social-proof.png" 
                            alt="Social Proof - Consultation and Ambulance Services"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SocialProofSection2;
