const LandingPage = () => {
    return (
        <div className="w-full min-h-screen flex justify-center overflow-x-hidden bg-white">
            <div className="xl:hidden w-full px-6 py-12 flex flex-col gap-8 bg-[linear-gradient(228deg,#9ADDFC_14.6%,rgba(79,197,224,0)_68.04%)]">
                <div className="space-y-8 max-w-2xl mx-auto">
                    <h1 className="font-['Source Serif 4'] font-semibold text-4xl md:text-5xl text-[#142349] leading-tight capitalize">
                        <span className="text-[#1566B7]">Building Trusted Healthcare </span>
                        Access for India Since 2019
                    </h1>


                    <p className="font-['DM_Sans'] text-[#142349] text-lg leading-[30px] font-light">
                        <span className="font-semibold">With 7+ years of experience, Atharv Healthcare</span> delivers dependable primary healthcare services — online doctor consultations, genuine medicines, lab tests at home and ambulance assistance across India.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <button className="flex items-center justify-center gap-[10px] w-full sm:w-auto bg-[#1566B7] text-white px-7 py-4 rounded-[192px] font-['DM_Sans'] font-semibold text-base uppercase shadow-lg hover:opacity-90 transition-opacity">
                            Consult Doctor Online
                        </button>
                        <button className="flex items-center justify-center gap-[10px] w-full sm:w-auto bg-white border border-[#1566B7] text-[#142349] px-7 py-4 rounded-[192px] font-['DM_Sans'] font-semibold text-base uppercase shadow-[1px_6px_7.7px_0px_#3177E13D] hover:bg-gray-50 transition-colors">
                            Order Medicines Online
                        </button>
                    </div>
                </div>

                <div className="relative w-full aspect-square max-h-[500px] mx-auto mt-8">
                    <img src="/Homepage/LandingPage.png" alt="Doctor" className="w-full h-full object-cover rounded-2xl sm:rounded-none" />
                </div>
            </div>


            <div className="hidden xl:block relative shrink-0 text-left"
                style={{
                    width: '100%',
                    maxWidth: '1512.5px',
                    height: '768px',
                    background: 'linear-gradient(228deg, #9ADDFC 14.6%, rgba(79, 197, 224, 0) 68.04%)',
                }}
            >

                <div className="absolute flex flex-col gap-[26px]"
                    style={{
                        width: '90%',
                        maxWidth: '630px',
                        height: 'auto',
                        top: '254px',
                        left: '102px',
                    }}
                >

                    <h1 className="font-['Source_Serif_4'] font-semibold text-[#142349] capitalize"
                        style={{
                            width: '100%',
                            maxWidth: '600px',
                            fontSize: '60px',
                            lineHeight: '114%',
                            letterSpacing: '-0.02em',
                        }}
                    >
                        <span className="text-[#1566B7]">Building Trusted Healthcare </span>Access for India Since 2019
                    </h1>


                    <div className="font-['DM_Sans'] text-[#142349]"
                        style={{
                            width: '100%',
                            maxWidth: '630px',
                            height: 'auto',
                            fontSize: '18px',
                            lineHeight: '30px',
                            fontWeight: 300,
                        }}
                    >
                        <span className="font-semibold" style={{ fontWeight: 600 }}>With 7+ years of experience, Atharv Healthcare</span> delivers dependable primary healthcare services — online doctor consultations, genuine medicines, lab tests at home and ambulance assistance across India.
                    </div>


                    <div className="flex gap-[18px]"
                        style={{
                            width: '553px',
                            height: '50px',
                        }}
                    >

                        <button className="flex items-center justify-center gap-[10px] bg-[#1566B7] text-white rounded-[192px] hover:opacity-95 transition-opacity"
                            style={{
                                width: '268px',
                                height: '50px',
                                padding: '16px 28px',
                                fontFamily: 'DM Sans',
                                fontWeight: 600,
                                fontSize: '16px',
                                lineHeight: '100%',
                                textTransform: 'uppercase',
                            }}
                        >
                            Consult Doctor Online
                        </button>


                        <button className="flex items-center justify-center gap-[10px] bg-white border border-[#1566B7] text-[#142349] rounded-[192px] hover:bg-gray-50 transition-colors"
                            style={{
                                width: '267px',
                                height: '50px',
                                padding: '16px 28px',
                                boxShadow: '1px 6px 7.7px 0px #3177E13D',
                                fontFamily: 'DM Sans',
                                fontWeight: 600,
                                fontSize: '16px',
                                lineHeight: '100%',
                                textTransform: 'uppercase',
                            }}
                        >
                            Order Medicines Online
                        </button>
                    </div>
                </div>


                <div className="absolute"
                    style={{
                        width: '618px',
                        height: '618px',
                        top: '138px',
                        left: '818px',
                        borderWidth: '0px',
                        borderColor: '#4C5D87',
                        borderStyle: 'solid',
                    }}
                >
                    <img src="/Homepage/LandingPage.png" alt="Doctor" className="w-full h-full object-cover" />
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
