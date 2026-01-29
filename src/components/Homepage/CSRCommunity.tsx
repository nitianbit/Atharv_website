import { ArrowRight } from 'lucide-react';

const CSRCommunity = () => {
    return (
        <div className="w-full bg-white py-8 lg:py-12 xl:py-16 px-4">
            <div className="mx-auto max-w-[1512px]">

                {/* Main Container */}
                <div
                    className="flex flex-col items-start mx-auto
                    lg:flex-row lg:max-w-[940px] lg:gap-[50px]
                    xl:flex-row xl:max-w-[1308px] xl:gap-[76px]"
                >

                    {/* Image Section */}
                    <div
                        className="relative flex-shrink-0 w-full mb-8
                        lg:w-[420px] lg:mb-0
                        xl:w-[606px] xl:mb-0"
                        style={{
                            aspectRatio: '606 / 486.67'
                        }}
                    >
                        <div
                            className="absolute bg-gradient-to-br from-cyan-300 to-blue-400 rounded-[10px] z-0
                            -top-[12px] -left-[12px] -right-[12px] -bottom-[12px]
                            lg:-top-[14px] lg:-left-[14px] lg:right-[14px] lg:bottom-[14px]
                            xl:-top-[16px] xl:-left-[16px] xl:right-[16px] xl:bottom-[16px]"
                        />

                        <div
                            className="relative overflow-hidden shadow-2xl rounded-[10px] z-10"
                        >
                            <img
                                src="/Homepage/Nurse.png"
                                alt="Healthcare worker providing community health services"
                                className="w-full h-full object-cover rounded-[10px]"
                            />
                        </div>
                    </div>

                    {/* Content Section */}
                    <div
                        className="flex flex-col w-full
                        lg:w-[470px] lg:gap-[18px]
                        xl:w-[626px] xl:gap-[23px]"
                    >

                        {/* Heading */}
                        <h2
                            className="font-['Source_Serif_Pro'] font-semibold capitalize text-black
                            text-3xl leading-[121%] tracking-[-0.02em]
                            md:text-4xl
                            lg:text-[38px] lg:leading-[121%]
                            xl:text-[46px] xl:leading-[121%]"
                        >
                            Community Connect: <span className="text-[#1566B7]">CSR</span><br />
                            <span className="text-[#1566B7]">Across India</span>
                        </h2>

                        {/* Description */}
                        <p
                            className="font-['DM_Sans'] font-light text-black
                            text-base leading-[24px]
                            lg:text-[16px] lg:leading-[24px]
                            xl:text-[18px] xl:leading-[27px]"
                        >
                            We run structured community healthcare programs focused on preventive care, rural outreach and access to essential medical services.
                        </p>

                        {/* List */}
                        <div
                            className="font-['DM_Sans'] font-semibold text-black
                            text-base leading-[26px]
                            lg:text-[16px] lg:leading-[28px]
                            xl:text-[18px] xl:leading-[30px]"
                        >
                            <p className="mb-2 font-bold">Community Connect has enabled:</p>
                            <ul className="list-none p-0">
                                <li className="flex gap-3 mb-1">
                                    <span className="text-[#1566B7] flex-shrink-0">•</span>
                                    <span className="font-normal">Healthcare access for communities and families across multiple regions in India</span>
                                </li>
                                <li className="flex gap-3 mb-1">
                                    <span className="text-[#1566B7] flex-shrink-0">•</span>
                                    <span className="font-normal">Coverage of villages and remote areas through Mobile Medical Unit (MMU) deployments</span>
                                </li>
                                <li className="flex gap-3 mb-1">
                                    <span className="text-[#1566B7] flex-shrink-0">•</span>
                                    <span className="font-normal">Delivery of preventive health check-ups and health awareness programs</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-[#1566B7] flex-shrink-0">•</span>
                                    <span className="font-normal">Ambulance support and donations for community healthcare requirements</span>
                                </li>
                            </ul>
                        </div>

                        {/* CTA */}
                        <a
                            href="#csr-initiatives"
                            className="inline-flex items-center gap-2 group hover:opacity-80 transition-opacity
                            font-['Plus_Jakarta_Sans'] font-semibold uppercase text-[#1566B7] no-underline
                            text-sm tracking-[0.15em] leading-[100%]
                            lg:text-[14px]
                            xl:text-[15px]"
                        >
                            EXPLORE CSR INITIATIVES
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CSRCommunity;
