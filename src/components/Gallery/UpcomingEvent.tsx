const UpcomingEvent = () => {
    const events = [
        {
            id: 1,
            image: "/Gallery/Up2.png",
            title: "CSR events",
            description: "Short description",
            address: "Address",
            date: "Date",
            isPrimary: true
        },
        {
            id: 2,
            image: "/Gallery/Up1.png",
            title: "CSR events",
            description: "Short description",
            address: "Address",
            date: "Date",
            isPrimary: false
        },
        {
            id: 3,
            image: "/Gallery/Up2.png",
            title: "CSR events",
            description: "Short description",
            address: "Address",
            date: "Date",
            isPrimary: false
        },
        {
            id: 4,
            image: "/Gallery/Up1.png",
            title: "CSR events",
            description: "Short description",
            address: "Address",
            date: "Date",
            isPrimary: false
        }
    ];

    return (
        <div className="w-full bg-white py-12 xl:py-[80px] flex justify-center">
            <div className="w-full px-4 flex flex-col xl:block xl:w-[1310px] xl:h-[564px] xl:px-0 xl:relative xl:mx-auto">

                {/* Header Section */}
                <div className="flex flex-col items-center text-center gap-2 mb-8 xl:block xl:relative xl:w-[1308.97px] xl:h-[88px] xl:mb-[41px] xl:text-left xl:gap-0">
                    <h2 className="font-['Source_Serif_Pro'] font-semibold capitalize text-[#142349] leading-tight
                                   text-3xl md:text-4xl
                                   xl:w-[727px] xl:h-[58px] xl:text-[46px] xl:leading-[100%] xl:tracking-[0.02em] xl:m-0">
                        Upcoming <span className="text-[#1566B7]">Events</span>
                    </h2>
                    <p className="font-['DM_Sans'] font-light text-[#142349]
                                  text-base md:text-lg mt-2
                                  xl:w-[780px] xl:h-[30px] xl:absolute xl:top-[58px] xl:text-[18px] xl:leading-[30px] xl:tracking-0 xl:m-0 xl:mt-0 px-1">
                        Stay updated with Atharv Healthcare's upcoming:
                    </p>
                </div>

                {/* Events Cards Container */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6
                                xl:flex xl:justify-between xl:w-[1310px] xl:h-[435px] xl:gap-0">
                    {events.map((event) => (
                        <div
                            key={event.id}
                            className="group flex flex-col p-5 rounded-[10px] bg-[#3177E11A] h-auto gap-4
                                       xl:block xl:relative xl:w-[305px] xl:h-[435px] xl:p-0 xl:gap-0"
                        >
                            {/* Event Image */}
                            <div className="w-full h-48 rounded-[10px] overflow-hidden bg-white shrink-0
                                            xl:absolute xl:w-[265px] xl:h-[203.54px] xl:top-[17.7px] xl:left-[20px] xl:h-auto">
                                <img
                                    src={event.image}
                                    alt={event.title}
                                    className="w-full h-full object-cover block"
                                />
                            </div>

                            {/* Title */}
                            <h3 className="font-['DM_Sans'] font-bold text-[#1566B7]
                                           text-xl leading-snug
                                           xl:absolute xl:top-[241px] xl:left-[20px] xl:w-[130px] xl:h-[25px] xl:text-[18px] xl:leading-[155%] xl:tracking-[0.015em] xl:m-0">
                                {event.title}
                            </h3>

                            {/* Description */}
                            <p className="font-['DM_Sans'] font-light text-[#3C4959]
                                          text-base leading-relaxed
                                          xl:absolute xl:top-[268px] xl:left-[20px] xl:w-[139px] xl:h-[25px] xl:text-[16px] xl:leading-[30px] xl:tracking-0 xl:m-0">
                                {event.description}
                            </p>

                            {/* Location & Date Group */}
                            <div className="flex flex-col gap-2 mt-auto xl:block xl:mt-0">
                                <div className="flex items-start gap-2 xl:contents">
                                    {/* Location Icon */}
                                    <svg
                                        width="19" height="17" viewBox="0 0 24 24" fill="none"
                                        className="shrink-0 mt-1 xl:absolute xl:top-[301px] xl:left-[21px] xl:mt-0"
                                    >
                                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#1566B7" />
                                    </svg>

                                    {/* Address Text */}
                                    <span className="font-['DM_Sans'] font-normal text-[#3C4959] text-base
                                                     xl:absolute xl:top-[298px] xl:left-[48px] xl:text-[16px] xl:leading-[160%] xl:tracking-[0.015em]">
                                        {event.address}
                                    </span>
                                </div>

                                <div className="flex items-start gap-2 xl:contents">
                                    {/* Date Icon */}
                                    <svg
                                        width="19" height="20" viewBox="0 0 24 24" fill="none"
                                        className="shrink-0 mt-1 xl:absolute xl:top-[327px] xl:left-[21px] xl:mt-0"
                                    >
                                        <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM9 14H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm-8 4H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z" fill="#1566B7" />
                                    </svg>

                                    {/* Date Text */}
                                    <span className="font-['DM_Sans'] font-normal text-[#3C4959] text-base
                                                     xl:absolute xl:top-[322px] xl:left-[48px] xl:text-[16px] xl:leading-[160%] xl:tracking-[0.015em]">
                                        {event.date}
                                    </span>
                                </div>
                            </div>

                            {/* Register Button */}
                            <button
                                className={`w-full h-[38px] rounded-[192px] flex items-center justify-center gap-[10px] uppercase font-['DM_Sans'] font-semibold text-sm transition-all duration-300 mt-4 xl:mt-0
                                            xl:absolute xl:w-[265px] xl:top-[371px] xl:left-[20px] xl:py-[16px]
                                            ${event.isPrimary
                                        ? 'bg-[#1566B7] text-white hover:bg-[#0F58A1] shadow-none border-none'
                                        : 'bg-white text-[#1566B7] border border-[#1566B7] hover:bg-[#EBF4FF] shadow-[1px_6px_7.7px_0px_rgba(49,119,225,0.24)]'
                                    }`}
                            >
                                <span className="xl:block xl:w-[103px] xl:h-[18px] xl:leading-[100%] xl:tracking-0">
                                    REGISTER NOW
                                </span>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default UpcomingEvent;
