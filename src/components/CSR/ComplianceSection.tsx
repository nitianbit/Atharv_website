import styles from './ohc.module.css';

const ComplianceSection = () => {
    const complianceAreas = [
        'Factories Act & relevant State Rules',
        'Occupational Safety, Health & Working Conditions (OSHWC) Code',
        'ESIC and labour department guidelines',
        'Client, corporate, and ISO-EHS audit standards'
    ];

    const outcomes = [
        'Avoid penalties and regulatory notices',
        'Remain audit-ready year-round',
        'Maintain accurate employee health records',
        'Standardise OHC operations as per law'
    ];

    const features = [
    { text: 'Program design & structuring aligned with CSR goals' },
    { text: 'Execution planning based on geography, population and risk profile' },
    { text: 'Medical governance to ensure quality and safety' },
    { text: 'On-ground coordination through appropriate delivery models' },
    { text: 'Documentation, MIS and reporting support' },
];


    return (
        <div className="w-full bg-white py-12 md:py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Image Section */}
                    <div className="order-2 lg:order-1">
                        <img 
                            src="/csr/csr-3.png" 
                            alt="CSR Healthcare Program Models"
                            className="w-full aspect-[4/3] rounded-2xl object-contain"
                        />
                    </div>

                    {/* Text Section */}
                    <div className="order-1 lg:order-2">
                        <h2 className={`${styles.headingSerif} ${styles.headingSerifMedium} mb-6 whitespace-nowrap`}>
                        <span className={styles.primaryBlue}>CSR Healthcare</span> Program Models
                        </h2>

                        <div className="space-y-6 mb-8">
                            <p className={`${styles.bodyText} font-normal text-lg leading-relaxed`}>
                                Atharv Healthcare supports a range of CSR-aligned healthcare initiatives, designed based on community needs and corporate objectives. 
                            </p>
                            <p className={`${styles.primaryBlue} font-semibold mb-4`} style={{ fontSize: '18px' }}>
                          Our Role Includes: 
                        </p>

                        <ul className="list-disc list-inside space-y-2" style={{ fontSize: '16px', color: '#ffffff' }}>
    {features.map((item, index) => (
        <li key={index} className={`${styles.bodyText} leading-relaxed style`}>
            {item.text}
        </li>
    ))}
</ul>
<p className={`${styles.bodyText} font-normal text-lg leading-relaxed mb-2`}>
                                <span className="font-semibold">Execution models</span> are selected based on program objectives and geography. 
                            </p>
                            <p className={`${styles.bodyText} font-normal text-lg leading-relaxed mt-2`}>
                                For Mobile Medical Unit–based execution, please refer to our<span className="font-semibold">{' '}Mobile Medical Unit (MMU) Services page</span> 
                            </p>
                            
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ComplianceSection;
