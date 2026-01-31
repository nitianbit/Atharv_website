import styles from './ohc.module.css';

const HowItWorksSection = () => {
    const steps = [
    {
        number: '1',
        title: 'Program Assessment',
        description: 'Understanding objectives, geography, population, and scope.'
    },
    {
        number: '2',
        title: 'MMU Configuration & Planning',
        description: 'Designing services, staffing, and deployment schedules.'
    },
    {
        number: '3',
        title: 'On-ground Deployment',
        description: 'Executing healthcare delivery as per program design.'
    },
    {
        number: '4',
        title: 'Documentation & Reporting',
        description: 'Maintaining records, summaries, and referral tracking.'
    },
    {
        number: '5',
        title: 'Ongoing Support & Scale-up',
        description: 'Program review, optimisation, and expansion where required.'
    }
];


    return (
        <div className={`w-full py-12 md:py-20 px-4 bg-[#0F58A1]`}>
            <div className="max-w-7xl mx-auto">
                <h2 className={`${styles.headingSerif} ${styles.headingSerifMedium} text-center mb-16 text-white mx-auto`}>
                    <span className="text-white">How Our MMU Programs Are Delivered</span>
                </h2>

                {/* Mobile/tablet: stacked for readability */}
                <div className="lg:hidden space-y-10">
                    {steps.map((step) => (
                        <div key={step.number} className="text-center">
                            <div className="text-white font-extrabold text-6xl leading-none tracking-tight">
                                {step.number}
                            </div>
                            <h3 className="mt-4 text-white font-medium text-base">{step.title}</h3>
                            <p className="mt-2 text-white/90 font-light text-sm leading-relaxed">{step.description}</p>
                        </div>
                    ))}
                </div>

                {/* Desktop: big numbers + dotted connectors (stepper) like the reference UI */}
                <div className="hidden lg:block">
                    <div className="relative">
                        {/* dotted connector line */}
                        <div className="absolute left-32 right-32 top-1/2 -translate-y-1/2 border-t-2 border-dotted border-white/35" />
                        {/* numbers */}
                        <div className="grid grid-cols-5 items-center relative z-10">
                            {steps.map((step) => (
                                <div key={step.number} className="flex justify-center">
                                    <div className="text-white font-extrabold text-7xl xl:text-8xl leading-none tracking-tight bg-[#0F58A1]">
                                        {step.number}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* text */}
                    <div className="mt-8 grid grid-cols-5 gap-x-6">
                        {steps.map((step) => (
                            <div key={step.number} className="text-center px-2">
                                <h3 className="text-white font-semibold text-lg leading-snug">
                                    {step.title}
                                </h3>
                                <p className="mt-3 text-white/90 font-light text-base leading-relaxed max-w-56 mx-auto">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowItWorksSection;
