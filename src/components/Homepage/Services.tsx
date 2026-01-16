import { useState } from 'react';
import { motion } from 'framer-motion';

const Services = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="w-full bg-white py-16 px-4">
            <div className="mx-auto" style={{ maxWidth: '1512px' }}>

                {/* Main Container - 1311px × 1493px */}
                <div
                    style={{
                        width: '100%',
                        maxWidth: '1311px',
                        margin: '0 auto'
                    }}
                >

                    {/* Heading - "Our Services" */}
                    <h2
                        style={{
                            width: '488px',
                            height: '68px',
                            margin: '0 auto 80px',
                            fontFamily: "'Source Serif Pro', serif",
                            fontWeight: 600,
                            fontSize: '60px',
                            lineHeight: '114%',
                            letterSpacing: '-0.02em',
                            textAlign: 'center',
                            textTransform: 'capitalize',
                            color: '#142349'
                        }}
                    >
                        Our Services
                    </h2>

                    {/* Services Grid - 2x2 */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '30px' }}>

                        {/* Card 1: Online Doctor Consultation - Detailed Card with White Overlay Box */}
                        <div
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                            style={{
                                width: '571.74px',
                                height: '637px',
                                position: 'relative',
                                boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
                                cursor: 'pointer'
                            }}
                        >
                            {/* Background Image */}
                            <img
                                src="/Homepage/Service1.png"
                                alt="Online Doctor Consultation"
                                style={{
                                    width: '571.74px',
                                    height: '637px',
                                    objectFit: 'cover',
                                    position: 'absolute',
                                    top: 0,
                                    left: 0
                                }}
                            />

                            {/* White Content Box Overlay */}
                            <motion.div
                                initial={{ opacity: 0, y: 0 }}
                                animate={{
                                    opacity: isHovered ? 1 : 0,
                                    y: isHovered ? -15 : 0
                                }}
                                transition={{ duration: 0.7, ease: 'easeOut' }}
                                style={{
                                    width: '515px',
                                    height: '425px',
                                    position: 'absolute',
                                    top: '134.87px',
                                    left: '28px',
                                    background: 'rgba(255, 255, 255, 0.9)',
                                    padding: '27px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '11px'
                                }}
                            >
                                {/* Title */}
                                <h3
                                    style={{
                                        width: '463px',
                                        height: '38px',
                                        fontFamily: "'DM Sans', sans-serif",
                                        fontWeight: 700,
                                        fontSize: '29px',
                                        lineHeight: '100%',
                                        letterSpacing: '0',
                                        textTransform: 'capitalize',
                                        color: '#1566B7',
                                        margin: 0
                                    }}
                                >
                                    Online Doctor Consultation
                                </h3>

                                {/* Description */}
                                <p
                                    style={{
                                        width: '453px',
                                        height: '109px',
                                        fontFamily: "'DM Sans', sans-serif",
                                        fontWeight: 400,
                                        fontSize: '18px',
                                        lineHeight: '27px',
                                        letterSpacing: '0',
                                        color: '#142349',
                                        margin: 0
                                    }}
                                >
                                    Consult qualified doctors online for everyday health concerns, follow-ups, second opinions and ongoing treatment. Get clear medical guidance and valid e-prescriptions without visiting a clinic.
                                </p>

                                {/* Bullet Points */}
                                <ul
                                    style={{
                                        width: '469px',
                                        height: '97px',
                                        fontFamily: "'DM Sans', sans-serif",
                                        fontWeight: 300,
                                        fontSize: '18px',
                                        lineHeight: '27px',
                                        letterSpacing: '0',
                                        color: '#142349',
                                        margin: 0,
                                        padding: 0,
                                        listStyle: 'none'
                                    }}
                                >
                                    <li style={{ display: 'flex', gap: '8px' }}>
                                        <span style={{ color: '#1566B7' }}>•</span>
                                        <span>General physician online consultations</span>
                                    </li>
                                    <li style={{ display: 'flex', gap: '8px' }}>
                                        <span style={{ color: '#1566B7' }}>•</span>
                                        <span>Specialist consultations (as available)</span>
                                    </li>
                                    <li style={{ display: 'flex', gap: '8px' }}>
                                        <span style={{ color: '#1566B7' }}>•</span>
                                        <span>Follow-up online consultations</span>
                                    </li>
                                </ul>

                                {/* Button */}
                                <button
                                    className="hover:opacity-90 transition-opacity"
                                    style={{
                                        width: '247px',
                                        height: '37px',
                                        borderRadius: '192px',
                                        background: '#1566B7',
                                        border: 'none',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginTop: '11px'
                                    }}
                                >
                                    <span
                                        style={{
                                            width: '180px',
                                            height: '18px',
                                            fontFamily: "'DM Sans', sans-serif",
                                            fontWeight: 600,
                                            fontSize: '14px',
                                            lineHeight: '100%',
                                            letterSpacing: '0',
                                            textTransform: 'uppercase',
                                            color: '#FFFFFF'
                                        }}
                                    >
                                        CONSULT DOCTOR ONLINE
                                    </span>
                                </button>
                            </motion.div>
                        </div>


                        {/* Card 2: Online Pharmacy & Medicine Home Delivery */}
                        <div
                            style={{
                                width: '573.54px',
                                height: '637px',
                                position: 'relative',
                                boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)'
                            }}
                        >
                            {/* Image */}
                            <img
                                src="/Homepage/Service2.png"
                                alt="Online Pharmacy"
                                style={{
                                    width: '571.74px',
                                    height: '637px',
                                    objectFit: 'cover'
                                }}
                            />

                            {/* Text Box at Bottom */}
                            <div
                                style={{
                                    width: '573.54px',
                                    height: '123.13px',
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    background: 'rgba(255, 255, 255, 0.9)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    padding: '11px'
                                }}
                            >
                                <h3
                                    style={{
                                        width: '443px',
                                        height: '76px',
                                        fontFamily: "'DM Sans', sans-serif",
                                        fontWeight: 700,
                                        fontSize: '29px',
                                        lineHeight: '100%',
                                        letterSpacing: '0',
                                        textAlign: 'center',
                                        textTransform: 'capitalize',
                                        color: '#142349',
                                        margin: 0
                                    }}
                                >
                                    Online Pharmacy & Medicine Home Delivery
                                </h3>
                            </div>
                        </div>

                        {/* Card 3: Diagnostics & Lab Tests At Home */}
                        <div
                            style={{
                                width: '573.54px',
                                height: '637px',
                                position: 'relative',
                                boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)'
                            }}
                        >
                            {/* Image */}
                            <img
                                src="/Homepage/Service3.png"
                                alt="Diagnostics & Lab Tests"
                                style={{
                                    width: '571.74px',
                                    height: '637px',
                                    objectFit: 'cover'
                                }}
                            />

                            {/* Text Box at Bottom */}
                            <div
                                style={{
                                    width: '573.54px',
                                    height: '123.13px',
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    background: 'rgba(255, 255, 255, 0.9)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    padding: '11px'
                                }}
                            >
                                <h3
                                    style={{
                                        width: '523px',
                                        height: '38px',
                                        fontFamily: "'DM Sans', sans-serif",
                                        fontWeight: 700,
                                        fontSize: '29px',
                                        lineHeight: '100%',
                                        letterSpacing: '0',
                                        textAlign: 'center',
                                        textTransform: 'capitalize',
                                        color: '#142349',
                                        margin: 0
                                    }}
                                >
                                    Diagnostics & Lab Tests at Home
                                </h3>
                            </div>
                        </div>

                        {/* Card 4: Industrial & Rural Healthcare Services */}
                        <div
                            style={{
                                width: '573.54px',
                                height: '637px',
                                position: 'relative',
                                boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)'
                            }}
                        >
                            {/* Image */}
                            <img
                                src="/Homepage/Service4.png"
                                alt="Industrial & Rural Healthcare"
                                style={{
                                    width: '571.74px',
                                    height: '637px',
                                    objectFit: 'cover'
                                }}
                            />

                            {/* Text Box at Bottom */}
                            <div
                                style={{
                                    width: '573.54px',
                                    height: '123.13px',
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    background: 'rgba(255, 255, 255, 0.9)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    padding: '11px'
                                }}
                            >
                                <h3
                                    style={{
                                        width: '381px',
                                        height: '76px',
                                        fontFamily: "'DM Sans', sans-serif",
                                        fontWeight: 700,
                                        fontSize: '29px',
                                        lineHeight: '100%',
                                        letterSpacing: '0',
                                        textAlign: 'center',
                                        textTransform: 'capitalize',
                                        color: '#142349',
                                        margin: 0
                                    }}
                                >
                                    Industrial & Rural Healthcare Services
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
