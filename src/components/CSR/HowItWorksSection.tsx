import styles from './ohc.module.css';

const HowItWorksSection = () => {
    const steps = [
    {
        number: '1',
        title: 'CSR objective & scope assessment',
        description: 'Understanding program intent, geography and compliance needs.'
    },
    {
        number: '2',
        title: 'Program design & planning',
        description: 'Defining healthcare focus, delivery model and governance framework.'
    },
    {
        number: '3',
        title: 'Execution & coordination',
        description: 'Managing on-ground delivery with medical oversight.'
    },
    {
        number: '4',
        title: 'Documentation & reporting',
        description: 'Maintaining records, MIS and summaries for CSR reporting.'
    },
    {
        number: '5',
        title: 'Review & scale-up',
        description: 'Optimising or expanding programs based on outcomes.'
    }
];



    return (
        <div className={`w-full py-12 md:py-20 px-4 bg-[#0F58A1] `}>
            <div className="max-w-8xl mx-auto">
               <h2 className={`${styles.headingSerif} ${styles.headingSerifMedium} text-center text-white max-w-4xl mx-auto`}>
    <span className="text-white">How CSR Engagements Work  </span>
</h2>
<p className="text-center text-white max-w-3xl mx-auto mt-4 mb-16 font-normal">
    Our CSR healthcare engagements follow a structured approach: 
</p>


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
                <h3 className="text-white font-medium text-base lg:text-lg mb-2 max-w-[160px]">
                    {step.title}
                </h3>

                {/* DESCRIPTION */}
                    <p className="text-white/90 font-light leading-relaxed">
      {index === 0 && (
        <>
          <span className="text-xs lg:text-sm">Understanding Program</span><br/>
          <span className="text-sm lg:text-base">Intent, Geography and Complia</span><br/>
          <span className="text-base lg:text-base">nce Needs.</span>
        </>
      )}
      {index === 1 && (
        <>
          <span className="text-xs lg:text-sm">Defining Healthcare Focus,</span><br/>
          <span className="text-sm lg:text-base">Delivery Model And Governa,</span><br/>
          <span className="text-base lg:text-base">ce Framework.</span>
        </>
      )}
      {index === 2 && (
        <>
          <span className="text-xs lg:text-sm">Managing On-Ground</span><br/>
          <span className="text-sm lg:text-base">Delivery With Medical </span><br/>
          <span className="text-base lg:text-base">Oversize.</span>
        </>
      )}
      {index === 3 && (
        <>
          <span className="text-xs lg:text-sm">Maintaining</span><br/>
          <span className="text-sm lg:text-base"> Records, MIS And Summar</span><br/>
          <span className="text-base lg:text-base">ies For CSR reporting.</span>
        </>
      )}
      {index === 4 && (
        <>
          <span className="text-xs lg:text-sm">Optimising Or expanding</span><br/>
          <span className="text-sm lg:text-base"> Programs Based</span><br/>
          <span className="text-base lg:text-base">On Outcomes.</span>
        </>
      )}
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
