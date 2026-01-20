const Companies = () => {
    const companies = [
        { id: 1, name: "Tata Steel", image: "/Homepage/Company2.png" },
        { id: 2, name: "Adani Power", image: "/Homepage/Company1.png" },
        { id: 3, name: "Indian Railways", image: "/Homepage/Company6.png" },
        { id: 4, name: "CPCL", image: "/Homepage/Company3.png" },
        { id: 5, name: "BHEL", image: "/Homepage/Company8.png" },
        { id: 6, name: "MPL", image: "/Homepage/Company5.png" },
        { id: 7, name: "BCPL", image: "/Homepage/Company4.png" },
        { id: 8, name: "NTPC", image: "/Homepage/Company7.png" }
    ];

    return (
        <div className="w-full">
            {/* Overall Container */}
            <div
                className="w-full max-w-[1512px] mx-auto relative overflow-hidden flex items-center
                h-[80px] md:h-[100px] xl:h-[131px]"
                style={{
                    background: 'rgba(49, 119, 225, 0.1)',
                }}
            >
                {/* Scrolling Container */}
                <div
                    className="flex items-center absolute left-0 w-max animate-scroll
                    gap-8 md:gap-10 xl:gap-[56px]"
                >
                    {/* First Set of Logos */}
                    {companies.map((company) => (
                        <div
                            key={`first-${company.id}`}
                            className="flex-shrink-0 flex items-center justify-center
                            w-[100px] h-[60px]
                            md:w-[130px] md:h-[80px]
                            xl:w-[151px] xl:h-[100px]"
                        >
                            <img
                                src={company.image}
                                alt={company.name}
                                className="max-w-full max-h-full object-contain transition-all duration-300 hover:scale-110"
                            />
                        </div>
                    ))}

                    {/* Duplicate Set for Seamless Loop */}
                    {companies.map((company) => (
                        <div
                            key={`second-${company.id}`}
                            className="flex-shrink-0 flex items-center justify-center
                            w-[100px] h-[60px]
                            md:w-[130px] md:h-[80px]
                            xl:w-[151px] xl:h-[100px]"
                        >
                            <img
                                src={company.image}
                                alt={company.name}
                                className="max-w-full max-h-full object-contain transition-all duration-300 hover:scale-110"
                            />
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                @keyframes scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }

                .animate-scroll {
                    animation: scroll 25s linear infinite;
                }

                .animate-scroll:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </div>
    );
};

export default Companies;
