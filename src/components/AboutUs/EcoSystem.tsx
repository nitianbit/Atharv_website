const EcoSystem = () => {
    const topServices = [
        {
            id: 1,
            icon: "/Aboutus/1.png",
            title: "Online Consult Doctors"
        },
        {
            id: 2,
            icon: "/Aboutus/2.png",
            title: "Get Medicines Delivered"
        },
        {
            id: 3,
            icon: "/Aboutus/3.png",
            title: "Book Home Sample Collection For Lab Tests"
        },
        {
            id: 4,
            icon: "/Aboutus/5.png",
            title: "Request Ambulance Support When Needed"
        }
    ];

    const bottomServices = [
        {
            id: 5,
            icon: "/Aboutus/4.png",
            title: "OHC Setup And Management"
        },
        {
            id: 6,
            icon: "/Aboutus/7.png",
            title: "MMU Deployment For Outreach"
        },
        {
            id: 7,
            icon: "/Aboutus/6.png",
            title: "Preventive And Community Health Initiatives"
        }
    ];

    return (
        <div className="w-full relative overflow-hidden bg-white py-16 xl:py-[80px] flex justify-center">
            {/* Overall Container */}
            <div className="w-full px-4 flex flex-col gap-12 xl:block xl:w-[1312px] xl:h-[463px] xl:px-0 xl:gap-0 xl:relative">

                {/* Main Heading */}
                <h2 className="font-['Source_Serif_Pro'] font-semibold capitalize text-[#142349] text-center md:text-left
                               text-3xl md:text-4xl leading-tight mb-8
                               xl:w-[1098px] xl:h-[58px] xl:text-[46px] xl:leading-[100%] xl:tracking-[0.02em] xl:mb-[46px] xl:m-0 xl:block">
                    One Connected Ecosystem —{' '}
                    <span className="text-[#1566B7]">Multiple Solutions</span>
                </h2>

                {/* Section 1 */}
                <div className="w-full xl:w-[1312px] xl:h-[157px] xl:mb-[45px]">
                    {/* Section Heading */}
                    <h3 className="font-['DM_Sans'] font-semibold uppercase text-[#142349] mb-6 text-center md:text-left
                                   text-lg
                                   xl:w-[612px] xl:h-[26px] xl:text-[20px] xl:leading-[27px] xl:tracking-[0%] xl:mb-[22px] xl:m-0">
                        We Bring Services Together So People Can:
                    </h3>

                    {/* Four Boxes Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 xl:flex xl:justify-between xl:w-[1312px] xl:h-[109px] xl:gap-0">
                        {topServices.map((service) => (
                            <div
                                key={service.id}
                                className="group flex items-center gap-5 px-5 py-4 rounded-[8.3px] bg-[#3177E11A] border-2 border-[#DEDEDE1A] shadow-sm transition-transform duration-300 hover:-translate-y-1 cursor-pointer
                                           w-full h-auto min-h-[100px]
                                           xl:w-[318px] xl:h-[109px] xl:gap-[20px] xl:px-[20px] xl:py-0 xl:shadow-[0px_0px_4px_0px_#00000036]"
                            >
                                {/* Icon */}
                                <div className="shrink-0 flex items-center justify-center w-[54px] h-[54px]">
                                    <img
                                        src={service.icon}
                                        alt={service.title}
                                        className="w-full h-full object-contain"
                                    />
                                </div>

                                {/* Title */}
                                <h4 className="font-['DM_Sans'] font-semibold text-[#142349] capitalize flex items-center
                                               text-base leading-snug
                                               xl:w-[206px] xl:h-[66px] xl:text-[18px] xl:leading-[25px] xl:tracking-[0%]">
                                    {service.title}
                                </h4>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Section 2 */}
                <div className="w-full xl:w-[981px] xl:h-[157px]">
                    {/* Section Heading */}
                    <h3 className="font-['DM_Sans'] font-semibold uppercase text-[#142349] mb-6 text-center md:text-left
                                   text-lg
                                   xl:w-[612px] xl:h-[26px] xl:text-[20px] xl:leading-[27px] xl:tracking-[0%] xl:mb-[22px] xl:m-0">
                        Alongside This, We Provide:
                    </h3>

                    {/* Three Boxes Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 xl:flex xl:justify-between xl:w-[981px] xl:h-[109px] xl:gap-0">
                        {bottomServices.map((service) => (
                            <div
                                key={service.id}
                                className="group flex items-center gap-5 px-5 py-4 rounded-[8.3px] bg-[#3177E11A] border-2 border-[#DEDEDE1A] shadow-sm transition-transform duration-300 hover:-translate-y-1 cursor-pointer
                                           w-full h-auto min-h-[100px]
                                           xl:w-[318px] xl:h-[109px] xl:gap-[20px] xl:px-[20px] xl:py-0 xl:shadow-[0px_0px_4px_0px_#00000036]"
                            >
                                {/* Icon */}
                                <div className="shrink-0 flex items-center justify-center w-[57px] h-[54px]">
                                    <img
                                        src={service.icon}
                                        alt={service.title}
                                        className="w-full h-full object-contain"
                                    />
                                </div>

                                {/* Title */}
                                <h4 className="font-['DM_Sans'] font-semibold text-[#142349] capitalize flex items-center
                                               text-base leading-snug
                                               xl:w-[206px] xl:h-[66px] xl:text-[18px] xl:leading-[25px] xl:tracking-[0%]">
                                    {service.title}
                                </h4>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default EcoSystem;
