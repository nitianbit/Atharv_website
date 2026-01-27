import styles from './ohc.module.css';

const HowItWorksSection = () => {
    const steps = [
    {
        number: '1',
        title: 'Program Assessment',
        description: 'Understanding objectives, geography, population, and scope. '
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
        description: 'Program review, optimisation, and expansion where required.'
    }
];


    return (
        <div className={`w-full py-12 md:py-20 px-4 bg-[#0F58A1] `}>
            <div className="max-w-9xl mx-auto">
                <h2 className={`${styles.headingSerif} ${styles.headingSerifMedium} text-center mb-16 text-white max-w-4xl mx-auto`}>
                    <span className="text-white">How Our MMU Programs Are Delivered </span>
                </h2>

               <div className="relative">

    {/* DOTTED LINE — perfectly centered */}
    <div
        className="hidden lg:block absolute top-[40px] left-32 right-32
                   border-t-2 border-dotted border-white/30 z-0"
    />

    <div className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-4 relative z-10">
        {steps.map((step, index) => (
            <div
                key={index}
                className="flex flex-col items-center text-center flex-1"
            >
                {/* NUMBER */}
                <div className="w-25 h-20 flex items-center justify-center mb-6 relative z-20">
                    <span className="text-white text-6xl lg:text-7xl font-bold leading-none bg-[#0F58A1]">
                        {step.number}
                    </span>
                </div>

                {/* TITLE */}
                <h3 className="text-white font-medium text-base lg:text-lg mb-2 max-w-[170px]">
                    {step.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-white/90 font-light text-xs lg:text-sm leading-relaxed max-w-[200px]">
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
