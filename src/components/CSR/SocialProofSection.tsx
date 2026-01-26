import styles from './ohc.module.css';

const features = [
    { bold: 'Program design & structuring', normal: ' aligned with CSR goals' },
    { bold: 'Execution planning', normal: ' based on geography, population and risk profile' },
    { bold: 'Medical governance', normal: ' to ensure quality and safety' },
    { bold: 'On-ground coordination', normal: ' through appropriate delivery models' },
    { bold: 'Documentation, MIS and reporting support', normal: '' },
];

const SocialProofSection = () => {
    return (
        <div className="w-full bg-[#F0F7FF] py-12 md:py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Text Section */}
                    <div>
                        <h2 className={`${styles.headingSerif} ${styles.headingSerifMedium} mb-6`} style={{ fontSize: '46px', lineHeight: '1.2' }}>
                            <span className={styles.primaryBlue}>Atharv’s Role as a CSR Health</span>{' '}Implementation Partner
                        </h2>

                        <p className={`${styles.bodyText} mb-8 leading-relaxed`} style={{ fontSize: '18px', lineHeight: '1.6' }}>
                           Atharv Healthcare does not operate as a passive vendor or activity coordinator. We take ownership of CSR healthcare programs from planning to execution and reporting. We work closely with CSR teams<br/> to ensure programs are operationally feasible, compliant and defensible<br/> in audits.
                        </p>

                        <p className={`${styles.primaryBlue} font-semibold mb-4`} style={{ fontSize: '18px' }}>
                          Our role includes: 
                        </p>

                        <ul className="list-disc list-inside space-y-2" style={{ fontSize: '16px', color: '#ffffff' }}>
    {features.map((item, index) => (
        <li key={index} className={`${styles.bodyText} leading-relaxed`}>
            <span className="font-bold">{item.bold}</span>{item.normal}
        </li>
    ))}
</ul>



                    </div>

                    {/* Image Section */}
                    <div className="relative">
                        <img 
                            src="/csr/csr-2.png" 
                            alt="Atharv’s healthacare - CSR Health"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SocialProofSection;
