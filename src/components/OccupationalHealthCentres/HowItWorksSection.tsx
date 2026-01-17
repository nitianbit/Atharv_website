import styles from './ohc.module.css';

const HowItWorksSection = () => {
    const steps = [
        {
            number: '1',
            title: 'Site & Compliance Assessment',
            description: 'Understanding Workforce Size, Risk Profile, Regulations.'
        },
        {
            number: '2',
            title: 'OHC Design & Infrastructure Planning',
            description: 'Space, Equipment, Layout, Supplies.'
        },
        {
            number: '3',
            title: 'Staffing & Deployment',
            description: 'Doctors, Nurses, Paramedics Assigned As Per Requirement.'
        },
        {
            number: '4',
            title: 'OHC Operations & Documentation',
            description: 'Daily Functioning, Incident Handling, And Record Keeping.'
        },
        {
            number: '5',
            title: 'Ongoing Support & Compliance Audits',
            description: 'Periodic Reviews, Upgrades, Health Campaigns, Reporting.'
        }
    ];

    return (
        <div className={`w-full py-12 md:py-20 px-4 ${styles.blueGradientBg}`}>
            <div className="max-w-7xl mx-auto">
                <h2 className={`${styles.headingSerif} ${styles.headingSerifMedium} text-center mb-16 text-white max-w-2xl mx-auto`}>
                    <span className="text-white">How Our OHC Engagement Works</span>
                </h2>

                <div className="relative">
                    <div className="hidden lg:block absolute top-[40px] left-0 right-0 border-t-2 border-dotted border-white/30" style={{ width: 'calc(100% - 160px)', left: '80px', right: '80px' }}></div>
                    
                    <div className="flex flex-col lg:flex-row items-start lg:items-start justify-between gap-8 lg:gap-4">
                        {steps.map((step, index) => (
                            <div key={index} className="flex flex-col items-center text-center flex-1 relative z-10">
                                <div className="w-20 h-20 rounded-full bg-[#1566B7] text-white flex items-center justify-center text-4xl font-bold mb-6 shadow-lg flex-shrink-0 mx-auto">
                                    <span className="flex items-center justify-center w-full h-full leading-none">{step.number}</span>
                                </div>
                                <div className="flex items-start justify-center mb-2">
                                    <h3 className="text-white font-medium text-base lg:text-lg">{step.title}</h3>
                                </div>
                                <p className="text-white/90 font-light text-xs lg:text-sm leading-relaxed">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowItWorksSection;
