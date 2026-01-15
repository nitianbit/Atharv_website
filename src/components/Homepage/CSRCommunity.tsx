import { ArrowRight } from 'lucide-react';

const CSRCommunity = () => {
    return (
        <div className="w-full bg-white py-8 lg:py-16 px-4">
            <div className="mx-auto" style={{ maxWidth: '1512px' }}>

                {/* Main Container */}
                <div
                    className="flex flex-col lg:flex-row items-start"
                    style={{
                        maxWidth: '1308px',
                        gap: '76px',
                        margin: '0 auto'
                    }}
                >

                    {/* Image Section */}
                    <div
                        className="relative flex-shrink-0 w-full lg:w-auto"
                        style={{
                            maxWidth: '606px',
                            aspectRatio: '606 / 486.67'
                        }}
                    >
                        <div
                            className="absolute bg-gradient-to-br from-cyan-300 to-blue-400"
                            style={{
                                top: '-16px',
                                left: '-16px',
                                right: '16px',
                                bottom: '16px',
                                borderRadius: '10px',
                                zIndex: 0
                            }}
                        />

                        <div
                            className="relative overflow-hidden shadow-2xl"
                            style={{
                                borderRadius: '10px',
                                zIndex: 10
                            }}
                        >
                            <img
                                src="/Homepage/Nurse.png"
                                alt="Healthcare worker providing community health services"
                                className="w-full h-full object-cover"
                                style={{ borderRadius: '10px' }}
                            />
                        </div>
                    </div>

                    {/* Content Section */}
                    <div
                        className="flex flex-col w-full lg:w-auto"
                        style={{
                            maxWidth: '626px',
                            gap: '23px'
                        }}
                    >

                        {/* Heading */}
                        <h2
                            className="text-3xl lg:text-[46px]"
                            style={{
                                fontFamily: "'Source Serif Pro', serif",
                                fontWeight: 600,
                                lineHeight: '121%',
                                letterSpacing: '-0.02em',
                                textTransform: 'capitalize',
                                color: '#000000'
                            }}
                        >
                            Community Connect: <span style={{ color: '#1566B7' }}>CSR</span><br />
                            <span style={{ color: '#1566B7' }}>Across India</span>
                        </h2>

                        {/* Description */}
                        <p
                            style={{
                                fontFamily: "'DM Sans', sans-serif",
                                fontWeight: 300,
                                fontSize: '18px',
                                lineHeight: '27px',
                                color: '#000000'
                            }}
                        >
                            We run structured community healthcare programs focused on preventive care, rural outreach and access to essential medical services.
                        </p>

                        {/* List */}
                        <div
                            style={{
                                fontFamily: "'DM Sans', sans-serif",
                                fontWeight: 600,
                                fontSize: '18px',
                                lineHeight: '30px',
                                color: '#000000'
                            }}
                        >
                            <p style={{ marginBottom: '8px', fontWeight: 700 }}>Community Connect has enabled:</p>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                <li className="flex gap-3 mb-1">
                                    <span style={{ color: '#1566B7' }}>•</span>
                                    <span style={{ fontWeight: 400 }}>Healthcare access for communities and families across multiple regions in India</span>
                                </li>
                                <li className="flex gap-3 mb-1">
                                    <span style={{ color: '#1566B7' }}>•</span>
                                    <span style={{ fontWeight: 400 }}>Coverage of villages and remote areas through Mobile Medical Unit (MMU) deployments</span>
                                </li>
                                <li className="flex gap-3 mb-1">
                                    <span style={{ color: '#1566B7' }}>•</span>
                                    <span style={{ fontWeight: 400 }}>Delivery of preventive health check-ups and health awareness programs</span>
                                </li>
                                <li className="flex gap-3">
                                    <span style={{ color: '#1566B7' }}>•</span>
                                    <span style={{ fontWeight: 400 }}>Ambulance support and donations for community healthcare requirements</span>
                                </li>
                            </ul>
                        </div>

                        {/* CTA */}
                        <a
                            href="#csr-initiatives"
                            className="inline-flex items-center gap-2 group hover:opacity-80 transition-opacity"
                            style={{
                                fontFamily: "'Plus Jakarta Sans', sans-serif",
                                fontWeight: 600,
                                fontSize: '15px',
                                lineHeight: '100%',
                                letterSpacing: '0.15em',
                                textTransform: 'uppercase',
                                color: '#1566B7',
                                textDecoration: 'none'
                            }}
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
