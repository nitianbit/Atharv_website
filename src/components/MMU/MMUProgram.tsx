"use client"

const MMUProgram = () => {
    const programSteps = [
        {
            id: 1,
            number: '1',
            title: 'Program Assessment',
            description: 'Understanding Objectives, Geography, Population, And Scope.'
        },
        {
            id: 2,
            number: '2',
            title: 'MMU Configuration & Planning',
            description: 'Designing Services, Staffing, And Deployment Schedules.'
        },
        {
            id: 3,
            number: '3',
            title: 'On-Ground Deployment',
            description: 'Executing Healthcare Delivery As Per Program Design.'
        },
        {
            id: 4,
            number: '4',
            title: 'Documentation & Reporting',
            description: 'Maintaining Records, Summaries, And Referral Tracking.'
        },
        {
            id: 5,
            number: '5',
            title: 'Ongoing Support & Scale-Up',
            description: 'Program Review, Optimisation, And Expansion Where Required.'
        }
    ];

    return (
        <div className="w-full bg-gradient-to-br from-[#1976D2] via-[#1565B8] to-[#1565B8] py-16 md:py-20 lg:py-24 px-6 md:px-10 lg:px-16">
            <div className="max-w-[1500px] mx-auto">
                
                {/* Main Heading */}
                <h2 className="font-['Source_Serif_4'] font-semibold text-white text-[32px] md:text-[40px] lg:text-[46px] xl:text-[52px] 
                             text-center mb-16 md:mb-20 lg:mb-24 leading-[1.2]">
                    How Our MMU Programs Are Delivered
                </h2>

                {/* Timeline Steps - Desktop View */}
                <div className="hidden lg:block relative">
                    {/* Dotted Connecting Lines */}
                    <div className="absolute top-[60px] left-0 right-0 flex justify-between items-center px-[10%]">
                        {[1, 2, 3, 4].map((line) => (
                            <div 
                                key={line}
                                className="flex-1 border-t-2 border-dashed border-white/40 mx-8"
                                style={{ marginTop: '0px' }}
                            ></div>
                        ))}
                    </div>

                    {/* Steps Grid */}
                    <div className="grid grid-cols-5 gap-6 xl:gap-8 relative z-10">
                        {programSteps.map((step) => (
                            <div
                                key={step.id}
                                className="flex flex-col items-center text-center"
                            >
                                {/* Number */}
                                <div className="font-['Source_Serif_4'] font-bold text-white text-[80px] md:text-[90px] lg:text-[100px] xl:text-[120px] 
                                              leading-[1] mb-4 md:mb-5">
                                    {step.number}
                                </div>

                                {/* Title */}
                                <h3 className="font-['DM_Sans'] font-semibold text-white text-[16px] md:text-[17px] lg:text-[18px] xl:text-[19px] 
                                             leading-[1.3] mb-3 min-h-[50px] flex items-center justify-center">
                                    {step.title}
                                </h3>

                                {/* Description */}
                                <p className="font-['DM_Sans'] font-normal text-white/90 text-[13px] md:text-[14px] lg:text-[15px] 
                                            leading-[1.5]">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mobile/Tablet View - Vertical Timeline */}
                <div className="lg:hidden space-y-10 md:space-y-12">
                    {programSteps.map((step, index) => (
                        <div key={step.id} className="relative">
                            {/* Step Content */}
                            <div className="flex flex-col items-center text-center">
                                {/* Number */}
                                <div className="font-['Source_Serif_4'] font-bold text-white text-[70px] md:text-[90px] 
                                              leading-[1] mb-4">
                                    {step.number}
                                </div>

                                {/* Title */}
                                <h3 className="font-['DM_Sans'] font-semibold text-white text-[18px] md:text-[20px] 
                                             leading-[1.3] mb-3">
                                    {step.title}
                                </h3>

                                {/* Description */}
                                <p className="font-['DM_Sans'] font-normal text-white/90 text-[14px] md:text-[16px] 
                                            leading-[1.6] max-w-[400px]">
                                    {step.description}
                                </p>
                            </div>

                            {/* Vertical Dotted Line (except last item) */}
                            {index < programSteps.length - 1 && (
                                <div className="absolute left-1/2 transform -translate-x-1/2 top-full h-10 md:h-12 
                                              border-l-2 border-dashed border-white/40"></div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MMUProgram;
