import { useState } from 'react';
import { motion } from 'framer-motion';

const Services = () => {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    const services = [
        {
            id: 1,
            image: "/Homepage/Service1.png",
            title: "Online Doctor Consultation",
            description: "Consult qualified doctors online for everyday health concerns, follow-ups, second opinions and ongoing treatment. Get clear medical guidance and valid e-prescriptions without visiting a clinic.",
            points: [
                "General physician online consultations",
                "Specialist consultations (as available)",
                "Follow-up online consultations"
            ],
            buttonText: "CONSULT DOCTOR ONLINE"
        },
        {
            id: 2,
            image: "/Homepage/Service2.png",
            title: "Online Pharmacy & Medicine Home Delivery",
            description: "Order genuine medicines and healthcare products online with doorstep delivery. We ensure authentic pharmaceutical products with easy ordering and tracking.",
            points: [
                "Genuine medicines",
                "Doorstep delivery",
                "Easy re-ordering"
            ],
            buttonText: "ORDER MEDICINES"
        },
        {
            id: 3,
            image: "/Homepage/Service3.png",
            title: "Diagnostics & Lab Tests at Home",
            description: "Book lab tests and health checkups from the comfort of your home. Our certified phlebotomists collect samples safely, ensuring accurate and timely reports.",
            points: [
                "Home sample collection",
                "NABL accredited labs",
                "Digital reports"
            ],
            buttonText: "BOOK LAB TEST"
        },
        {
            id: 4,
            image: "/Homepage/Service4.png",
            title: "Industrial & Rural Healthcare Services",
            description: "Comprehensive healthcare solutions for industries and rural communities, including occupational health centers, mobile medical units, and emergency support.",
            points: [
                "Occupational Health Centers (OHC)",
                "Mobile Medical Units (MMU)",
                "Corporate wellness programs"
            ],
            buttonText: "EXPLORE SERVICES"
        }
    ];

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

                        {services.map((service) => (
                            <div
                                key={service.id}
                                onMouseEnter={() => setHoveredCard(service.id)}
                                onMouseLeave={() => setHoveredCard(null)}
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
                                    src={service.image}
                                    alt={service.title}
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
                                        opacity: hoveredCard === service.id ? 1 : 0,
                                        y: hoveredCard === service.id ? -15 : 0
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
                                        gap: '11px',
                                        zIndex: 10
                                    }}
                                >
                                    {/* Title */}
                                    <h3
                                        style={{
                                            width: '463px',
                                            height: 'auto',
                                            minHeight: '38px',
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
                                        {service.title}
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
                                        {service.description}
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
                                        {service.points.map((point, index) => (
                                            <li key={index} style={{ display: 'flex', gap: '8px' }}>
                                                <span style={{ color: '#1566B7' }}>•</span>
                                                <span>{point}</span>
                                            </li>
                                        ))}
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
                                                width: 'auto',
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
                                            {service.buttonText}
                                        </span>
                                    </button>
                                </motion.div>

                                {/* Default Text Box at Bottom (Visible when not hovered, or behind the overlay) */}
                                <motion.div
                                    animate={{ opacity: hoveredCard === service.id ? 0 : 1 }}
                                    transition={{ duration: 0.3 }}
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
                                            width: '90%',
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
                                        {service.title}
                                    </h3>
                                </motion.div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
