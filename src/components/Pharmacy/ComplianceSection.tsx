import styles from '../OccupationalHealthCentres/ohc.module.css';

const ComplianceSection = () => {
    const features = [
        {
            icon: '/Pharmacy/licensed.png',
            title: 'Licensed Wholesale And Retail Pharmacy Operations'
        },
        {
            icon: '/Pharmacy/prescription.png',
            title: 'Prescription-Only Dispensing Protocols'
        },
        {
            icon: '/Pharmacy/documentation.png',
            title: 'Proper Documentation And Record Maintenance'
        },
        {
            icon: '/Pharmacy/regulations.png',
            title: 'Adherence To Applicable Pharmaceutical Regulations'
        }
    ];

    return (
        <div className="w-full bg-white py-12 md:py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <h2 className={`${styles.headingSerif} ${styles.headingSerifMedium} text-center mb-6 max-w-3xl mx-auto`}>
                    Compliance, Quality & <span className={styles.primaryBlue}>Governance</span>
                </h2>

                <p className={`${styles.bodyText} text-center text-lg mb-12 max-w-3xl mx-auto leading-relaxed`}>
                    All pharmacy operations at Atharv Healthcare are governed by structured and compliant processes. Compliance and accountability remain central to Atharv Healthcare's pharmacy services.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
                        >
                            <div className="flex justify-start mb-4">
                                <div className="w-16 h-16 rounded-full bg-[#1566B7] flex items-center justify-center">
                                    <img
                                        src={feature.icon}
                                        alt={feature.title}
                                        className="w-10 h-10 object-contain"
                                    />
                                </div>
                            </div>
                            <h3 className={`${styles.bodyText} font-bold text-lg leading-tight text-[#142349] text-left`}>
                                {feature.title}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ComplianceSection;
