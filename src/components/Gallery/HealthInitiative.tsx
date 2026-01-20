const HealthInitiative = () => {
    return (
        <div className="w-full bg-[#F8F9FA] py-12 xl:py-[60px] xl:pb-[80px] flex justify-center overflow-hidden">
            <div className="w-full flex flex-col xl:block xl:max-w-[1512px] xl:mx-auto xl:relative">

                {/* Header Section */}
                <div className="flex flex-col items-center text-center px-4 mb-8 xl:mb-[27px] xl:w-[1143px] xl:h-[123px] xl:mx-auto xl:block xl:relative xl:p-0">
                    <h2 className="font-['Source_Serif_Pro'] font-semibold capitalize text-[#142349] leading-tight
                                   text-3xl md:text-4xl
                                   xl:w-[908px] xl:h-[58px] xl:mx-auto xl:text-[46px] xl:leading-[100%] xl:tracking-[0.02em] xl:p-0">
                        Photos From Our <span className="text-[#1566B7]">Healthcare Initiatives</span>
                    </h2>
                    <p className="font-['DM_Sans'] font-light text-black
                                  text-base md:text-lg mt-4 max-w-2xl
                                  xl:w-[1143px] xl:h-[60px] xl:mx-auto xl:mt-[5px] xl:text-[18px] xl:leading-[30px] xl:tracking-0 xl:max-w-none xl:p-0">
                        Browse images from Atharv Healthcare's CSR health camps, MMU deployments, occupational health centres, diagnostics camps, and ambulance services across India. These photos capture our work in bringing primary healthcare services closer to communities.
                    </p>
                </div>

                {/* Horizontal Scrollable Images Container */}
                <div className="w-full px-4 xl:px-0 xl:w-full xl:overflow-x-auto xl:overflow-y-hidden xl:relative custom-scrollbar">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full
                                    xl:block xl:w-[2061px] xl:h-[610px] xl:relative xl:mx-auto">

                        {/* Health1 Image */}
                        <div className="rounded-[10px] overflow-hidden aspect-video w-full h-full relative xl:absolute xl:top-0 xl:left-[293px] xl:w-[273px] xl:h-[190px] xl:aspect-auto">
                            <img src="/Gallery/Health1.png" alt="Healthcare Initiative" className="w-full h-full object-cover block" />
                        </div>

                        {/* Health11 Image - Large Center */}
                        <div className="rounded-[10px] overflow-hidden aspect-video w-full h-full relative xl:absolute xl:top-0 xl:left-[596px] xl:w-[571px] xl:h-[390px] xl:aspect-auto">
                            <img src="/Gallery/Health11.png" alt="Healthcare Program Event" className="w-full h-full object-cover block" />
                        </div>

                        {/* Health8 Image */}
                        <div className="rounded-[10px] overflow-hidden aspect-video w-full h-full relative xl:absolute xl:top-0 xl:left-[1197px] xl:w-[268px] xl:h-[190px] xl:aspect-auto">
                            <img src="/Gallery/Health8.png" alt="Healthcare Office" className="w-full h-full object-cover block" />
                        </div>

                        {/* Health6 Image */}
                        <div className="rounded-[10px] overflow-hidden aspect-video w-full h-full relative xl:absolute xl:top-0 xl:left-[1495px] xl:w-[268px] xl:h-[190px] xl:aspect-auto">
                            <img src="/Gallery/Health6.png" alt="Healthcare Initiative" className="w-full h-full object-cover block" />
                        </div>

                        {/* Health3 Image - Tall */}
                        <div className="rounded-[10px] overflow-hidden aspect-[9/16] xl:aspect-auto w-full h-full relative xl:absolute xl:top-0 xl:left-[1793px] xl:w-[268px] xl:h-[390px]">
                            {/* Width was 50% on desktop in original code */}
                            <img src="/Gallery/Health3.png" alt="Medicine Shop Event" className="bg-gray-200 w-full h-full object-cover block xl:w-[50%]" />
                        </div>

                        {/* Health2 Image - Large */}
                        <div className="rounded-[10px] overflow-hidden aspect-video w-full h-full relative xl:absolute xl:top-[220px] xl:left-[280px] xl:w-[566px] xl:h-[390px] xl:aspect-auto">
                            {/* Width was 50% on desktop in original code */}
                            <img src="/Gallery/Health2.png" alt="Ambulance Service" className="bg-gray-200 w-full h-full object-cover block xl:w-[50%]" />
                        </div>

                        {/* Health10 Image */}
                        <div className="rounded-[10px] overflow-hidden aspect-video w-full h-full relative xl:absolute xl:top-[420px] xl:left-[596px] xl:w-[273px] xl:h-[190px] xl:aspect-auto">
                            <img src="/Gallery/Health10.png" alt="Medical Equipment" className="w-full h-full object-cover block" />
                        </div>

                        {/* Health9 Image */}
                        <div className="rounded-[10px] overflow-hidden aspect-video w-full h-full relative xl:absolute xl:top-[420px] xl:left-[894px] xl:w-[273px] xl:h-[190px] xl:aspect-auto">
                            <img src="/Gallery/Health9.png" alt="Healthcare Professional" className="w-full h-full object-cover block" />
                        </div>

                        {/* Health7 Image - Tall */}
                        <div className="rounded-[10px] overflow-hidden aspect-[9/16] xl:aspect-auto w-full h-full relative xl:absolute xl:top-[220px] xl:left-[1197px] xl:w-[268px] xl:h-[390px]">
                            <img src="/Gallery/Health7.png" alt="Medical Shop" className="w-full h-full object-cover block" />
                        </div>

                        {/* Health5 Image - Tall */}
                        <div className="rounded-[10px] overflow-hidden aspect-[9/16] xl:aspect-auto w-full h-full relative xl:absolute xl:top-[220px] xl:left-[1495px] xl:w-[268px] xl:h-[390px]">
                            <img src="/Gallery/Health5.png" alt="Healthcare Speaker" className="w-full h-full object-cover block" />
                        </div>

                        {/* Health4 Image */}
                        <div className="rounded-[10px] overflow-hidden aspect-video w-full h-full relative xl:absolute xl:top-[420px] xl:left-[1793px] xl:w-[268px] xl:h-[190px] xl:aspect-auto">
                            <img src="/Gallery/Health4.png" alt="Healthcare Distribution" className="w-full h-full object-cover block" />
                        </div>

                    </div>
                </div>
            </div>

            <style>{`
                .custom-scrollbar::-webkit-scrollbar {
                    height: 8px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: #f1f1f1;
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #1566B7;
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: #0F58A1;
                }
                @media (max-width: 1280px) {
                    .custom-scrollbar::-webkit-scrollbar {
                        display: none;
                    }
                }
            `}</style>
        </div>
    );
};

export default HealthInitiative;
