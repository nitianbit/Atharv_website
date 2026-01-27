import styles from '../OccupationalHealthCentres/ohc.module.css';

const HowWholesaleWorksSection = () => {
    const steps = [
        {
            icon: '/Pharmacy/direct-engagement.png',
            title: 'Direct Engagement With Atharv Healthcare',
            description: 'To Understand Requirements'
        },
        {
            icon: '/Pharmacy/medicine-categories.png',
            title: 'Assessment Of Medicine Categories, Quantities And Compliance Needs',
            description: ''
        },
        {
            icon: '/Pharmacy/delivery-time.png',
            title: 'Alignment On Supply Schedules',
            description: 'And Delivery Timelines'
        },
        {
            icon: '/Pharmacy/time-management.png',
            title: 'Ongoing Coordination To Ensure Uninterrupted Availability',
            description: ''
        }
    ];

    return (
        <div className="w-full bg-white py-12 md:py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <h2 className={`${styles.headingSerif} ${styles.headingSerifMedium} text-center mb-6 max-w-3xl mx-auto`}>
                    How <span className={styles.primaryBlue}>Wholesale & Institutional Supply</span> Works
                </h2>

                <p className={`${styles.bodyText} text-center text-lg mb-12 max-w-3xl mx-auto leading-relaxed`}>
                    Wholesale and institutional medicine supply is <strong>not transactional</strong> and is not processed through online ordering. Our model supports organisations that require <strong>reliability</strong>, <strong>documentation</strong> and <strong>continuity</strong>, rather than ad-hoc retail purchasing.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
                        >
                            <div className="flex items-start gap-4">
                                <div className="w-16 h-16 rounded-full bg-[#1566B7] flex items-center justify-center shrink-0">
                                    <img
                                        src={step.icon}
                                        alt={step.title}
                                        className="w-10 h-10 object-contain"
                                    />
                                </div>
                                <div className="flex-1">
                                    <h3 className={`${styles.bodyText} font-bold text-lg mb-2 text-[#142349]`}>
                                        {step.title}
                                    </h3>
                                    {step.description && (
                                        <p className={`${styles.bodyText} text-base text-gray-600`}>
                                            {step.description}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HowWholesaleWorksSection;
