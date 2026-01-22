"use client"

const LandingPageMMU = () => {
    return (
        <div
            className="relative w-full overflow-x-hidden"
            style={{
                height: '539px',
                background: 'linear-gradient(228deg, #9ADDFC 14.6%, rgba(79, 197, 224, 0) 68.04%)',
            }}
        >
            {/* Main Content Container - Centered at 1512px max width */}
            <div className="relative mx-auto" style={{ maxWidth: '1512px', height: '539px' }}>

                {/* Heading - Mobile Medical Unit (MMU) */}
                <h1
                    className="absolute font-['Source_Serif_Pro'] font-semibold capitalize"
                    style={{
                        width: '1058px',
                        height: '68px',
                        top: '247px',
                        left: '227px',
                        fontSize: '60px',
                        lineHeight: '114%',
                        letterSpacing: '-0.02em',
                        textAlign: 'center',
                        color: '#011632',
                    }}
                >
                    Mobile Medical Unit (MMU)
                </h1>

                {/* Decorative Line */}
                <div
                    className="absolute"
                    style={{
                        width: '326px',
                        height: '5px',
                        top: '325px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                    }}
                >
                    <img
                        src="/Aboutus/LineStraight.png"
                        alt="decorative line"
                        className="w-full h-full object-contain"
                    />
                </div>

                {/* Description Text */}
                <p
                    className="absolute font-['DM_Sans']"
                    style={{
                        width: '1015px',
                        height: '60px',
                        top: '335px',
                        left: '248px',
                        fontWeight: 500,
                        fontSize: '18px',
                        lineHeight: '30px',
                        letterSpacing: '0%',
                        textAlign: 'center',
                        color: '#040404',
                    }}
                >
                    End-to-end mobile medical unit services for CSR healthcare programs, government health initiatives, rural healthcare outreach, and workforce medical support — delivered through structured operations and pan-India deployment.
                </p>

                {/* Request Proposal Button */}
                <button
                    className="absolute font-['DM_Sans'] font-semibold uppercase
                             hover:bg-[#1566B7] hover:text-white transition-all duration-300"
                    style={{
                        width: '389px',
                        height: '50px',
                        top: '418px',
                        left: '562px',
                        padding: '16px 28px',
                        gap: '10px',
                        borderRadius: '192px',
                        border: '1px solid #1566B7',
                        background: '#FFFFFF',
                        boxShadow: '1px 6px 7.7px 0px #3177E13D',
                        fontSize: '16px',
                        color: '#142349',
                    }}
                >
                    Request an MMU Program Proposal
                </button>
            </div>

            {/* Responsive Mobile/Tablet View */}
            <div className="lg:hidden flex flex-col items-center justify-center px-6 py-16 gap-6">
                <h1 className="font-['Source_Serif_Pro'] font-semibold text-[#011632] text-center capitalize
                             text-3xl sm:text-4xl md:text-5xl leading-tight">
                    Mobile Medical Unit (MMU)
                </h1>

                <img
                    src="/Aboutus/LineStraight.png"
                    alt="decorative line"
                    className="w-[250px] sm:w-[300px] h-auto object-contain"
                />

                <p className="font-['DM_Sans'] font-medium text-[#040404] text-center
                            text-base sm:text-lg leading-relaxed max-w-2xl">
                    End-to-end mobile medical unit services for CSR healthcare programs, government health initiatives, rural healthcare outreach, and workforce medical support — delivered through structured operations and pan-India deployment.
                </p>

                <button
                    className="font-['DM_Sans'] font-semibold uppercase
                             bg-white text-[#142349] border border-[#1566B7] rounded-[192px]
                             px-7 py-4 text-sm w-full max-w-[300px]
                             hover:bg-[#1566B7] hover:text-white transition-all duration-300
                             shadow-[1px_6px_7.7px_0px_#3177E13D]"
                >
                    Request an MMU Program Proposal
                </button>
            </div>
        </div>
    );
};

export default LandingPageMMU;
