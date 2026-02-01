const NewsUpdates = () => {
    const newsItems = [
  {
    id: 1,
    category: "Vypaar Zone Event",
    description: "Atharv Pharmacy franchise business meeting",
    image: "/Homepage/vypaar.jpeg"
  },
  {
    id: 2,
    category: "Business Meet with Kewal Ji",
    description: "Discussion with Kewal Kishan on automation solutions for Atharv Healthcare",
    image: "/Homepage/Kewal.jpeg"
  },
  {
    id: 3,
    category: "Atharv Pharmacy Launch",
    description: "Inauguration of Atharv Pharmacy in Kolkata",
    image: "/Homepage/atharvPhramacy.png"
  },
  {
    id: 4,
    category: "OHC Expansion",
    description: "Launch of new Occupational Health Centers across India",
    image: "/Homepage/ohc.png"
  }
];


    return (
        <div className="w-full bg-white py-12 px-4 md:py-16 xl:py-16">
            <div className="w-full mx-auto" style={{ maxWidth: '1512px' }}>
                {/* Overall Container */}
                <div
                    className="w-full relative mx-auto flex flex-col gap-10
                    xl:block xl:w-[1310px] xl:h-[528px] xl:gap-0"
                >
                    {/* Top Section */}
                    <div
                        className="w-full flex flex-col gap-6 items-start
                        md:flex-row md:justify-between md:items-center md:gap-10
                        xl:w-[1308.97px] xl:h-[118px] xl:justify-between xl:gap-[198px] xl:mb-[44px]"
                    >
                        {/* Left Side - Heading & Description */}
                        <div className="flex-1 flex flex-col gap-4 xl:block xl:gap-0">
                            {/* Heading */}
                            <h2
                                className="font-['Source_Serif_Pro'] font-semibold capitalize
                                text-3xl leading-tight
                                md:text-4xl
                                xl:w-[727px] xl:h-[58px] xl:text-[46px] xl:leading-[100%] xl:tracking-[0.02em] xl:mb-0"
                            >
                                <span className="text-[#142349]">Latest </span>
                                <span className="text-[#1566B7]">News & Updates</span>
                            </h2>

                            {/* Description */}
                            <p
                                className="font-['DM_Sans'] font-light text-[#142349]
                                text-base leading-relaxed max-w-[600px]
                                md:text-lg
                                xl:w-[780px] xl:h-[60px] xl:text-[18px] xl:leading-[30px] xl:tracking-normal xl:mt-0"
                            >
                                Catch up on <span className="font-semibold" style={{ fontWeight: 600 }}>company news, CSR activities, MMU deployments, health camps and corporate initiatives </span> from Atharv Healthcare across India.
                            </p>
                        </div>

                        {/* Right Side - Button */}
                        <button
                            className="group flex items-center justify-center bg-white border border-[#1566B7] rounded-full
                            px-6 py-3 shadow-[1px_10px_12.7px_0px_rgba(49,119,225,0.24)] cursor-pointer hover:opacity-90 transition-opacity
                            xl:w-[298px] xl:h-[50px] xl:px-[28px] xl:py-[16px] xl:flex-shrink-0 xl:self-center"
                        >
                            <span
                                className="font-['DM_Sans'] font-semibold text-[#142349] uppercase whitespace-nowrap
                                text-sm
                                xl:w-[200px] xl:h-[21px] xl:text-[16px] xl:leading-[100%] xl:tracking-normal"
                            >
                                SEE ALL NEWS & UPDATES
                            </span>
                        </button>
                    </div>

                    {/* Cards Container */}
                    <div
                        className="w-full flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory
                        xl:w-[1310px] xl:h-[366px] xl:justify-between xl:gap-[20px] xl:overflow-hidden xl:pb-0"
                    >
                        {newsItems.map((item) => (
                            <div
                                key={item.id}
                                className="relative flex-shrink-0 bg-[rgba(49,119,225,0.1)] rounded-[10px] cursor-pointer hover:shadow-lg transition-shadow snap-center
                                w-[305px] h-[366px]"
                            >
                                {/* Image */}
                                <div
                                    className="absolute bg-white overflow-hidden rounded-[10px]
                                    top-[17.7px] left-[20px] w-[265px] h-[203.54px]"
                                >
                                    <img
                                        src={item.image}
                                        alt={item.category}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Category Title */}
                                <h3
                                    className="absolute font-['DM_Sans'] font-bold text-[#1566B7] m-0
                                    top-[241.59px] left-[20px] max-w-[265px] h-[24.78px]
                                    text-[18px] leading-[155%] tracking-[0.015em]"
                                >
                                    {item.category}
                                </h3>

                                {/* Description */}
                                <p
                                    className="absolute font-['DM_Sans'] font-normal text-[#3C4959] m-0
                                    top-[270.8px] left-[20px] w-[265px] h-[49.56px]
                                    text-[18px] leading-[155%] tracking-[0.015em]"
                                >
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsUpdates;
