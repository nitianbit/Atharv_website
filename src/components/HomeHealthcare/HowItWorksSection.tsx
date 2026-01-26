import styles from '../OccupationalHealthCentres/ohc.module.css';

const HowItWorksSection = () => {
    const steps = [
        {
            number: '1',
            title: 'Service Request',
            description: 'Submit A Request For Home Healthcare Support.'
        },
        {
            number: '2',
            title: 'Assessment & Scheduling',
            description: 'Requirements Are Reviewed And Services Scheduled Based On Medical Need.'
        },
        {
            number: '3',
            title: 'Service Delivery At Home',
            description: 'Consultation, Diagnostics, Medicine Delivery, Or Emergency Support Is Provided.'
        },
        {
            number: '4',
            title: 'Follow-Up & Support',
            description: 'Ongoing Coordination And Guidance Are Provided Where Required.'
        }
    ];

    return (
        <div className={`w-full py-12 md:py-16 px-4 ${styles.blueGradientBg}`}>
            <div className="max-w-7xl mx-auto">
                <h2 className={`${styles.headingSerif} ${styles.headingSerifMedium} text-center mb-12 text-white max-w-3xl mx-auto`}>
                    How Home Healthcare <span className="text-white">Services Work</span>
                </h2>

                <div className="relative">
                    {/* Dotted connecting line - only visible on larger screens */}
                    <div className="hidden lg:block absolute top-[40px] left-0 right-0 border-t-2 border-dotted border-white/30" style={{ width: 'calc(100% - 160px)', left: '80px', right: '80px' }}></div>

                    <div className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-4">
                        {steps.map((step, index) => (
                            <div key={index} className="flex flex-col items-center text-center flex-1 relative z-10">
                                <div className="w-20 h-20 rounded-full bg-white text-[#1566B7] flex items-center justify-center text-4xl font-bold mb-4 shadow-lg">
                                    <span className="flex items-center justify-center w-full h-full leading-none">{step.number}</span>
                                </div>
                                <h3 className="text-white font-bold text-lg mb-2">{step.title}</h3>
                                <p className="text-white/90 text-sm leading-relaxed">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowItWorksSection;
