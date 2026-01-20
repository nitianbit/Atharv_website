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
            description: "Order prescription medicines online through our in-house pharmacy. We ensure genuine medicines, proper storage and timely home delivery to support uninterrupted treatment.",
            points: [
                "Order medicines online",
                "Prescription upload",
                "Refills for long-term treatment"
            ],
            buttonText: "ORDER MEDICINES ONLINE"
        },
        {
            id: 3,
            image: "/Homepage/Service3.png",
            title: "Diagnostics & Lab Tests at Home",
            description: "Book lab tests online with convenient home sample collection. Trained technicians collect samples and digital reports are delivered securely for easy access and follow-up.",
            points: [
                "Blood tests at home",
                "Preventive health checkup packages",
                "Digital lab reports"
            ],
            buttonText: "BOOK LAB TEST AT HOME"
        },
        {
            id: 4,
            image: "/Homepage/Service4.png",
            title: "Industrial & Rural Healthcare Services",
            description: "On-ground healthcare solutions for workplaces, communities and underserved regions. We support organizations and public health programs through structured medical services and mobile healthcare delivery.",
            points: [
                "Occupational Health Centers (OHC)",
                "Mobile Medical Units (MMU)",
                "Community and rural healthcare programs"
            ],
            buttonText: "EXPLORE INDUSTRIAL & RURAL HEALTHCARE"
        }
    ];

    return (
        <div className="w-full bg-white py-12 md:py-16 px-4">
            <div className="w-full max-w-[1512px] mx-auto">

                {/* Main Container - 1311px × 1493px (Desktop) */}
                <div className="w-full max-w-[1311px] mx-auto">

                    {/* Heading - "Our Services" */}
                    <h2
                        className="font-['Source_Serif_Pro'] font-semibold text-center text-[#142349] capitalize
                        text-[40px] mb-10
                        md:text-[50px]
                        xl:w-[488px] xl:h-[68px] xl:mx-auto xl:mb-[80px] xl:text-[60px] xl:leading-[114%] -tracking-[0.02em]"
                    >
                        Our Services
                    </h2>

                    {/* Services Grid - 2x2 */}
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-[30px] justify-items-center">

                        {services.map((service) => (
                            <div
                                key={service.id}
                                onMouseEnter={() => setHoveredCard(service.id)}
                                onMouseLeave={() => setHoveredCard(null)}
                                className="relative shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] cursor-pointer group overflow-hidden
                                w-full max-w-[571px] aspect-[571.74/637]
                                xl:w-[571.74px] xl:h-[637px] xl:max-w-none xl:overflow-visible"
                            >
                                {/* Background Image */}
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="absolute top-0 left-0 w-full h-full object-cover"
                                />

                                {/* White Content Box Overlay */}
                                <motion.div
                                    initial={{ opacity: 0, y: 0 }}
                                    animate={{
                                        opacity: hoveredCard === service.id ? 1 : 0,
                                        y: hoveredCard === service.id ? -15 : 0
                                    }}
                                    transition={{ duration: 0.7, ease: 'easeOut' }}
                                    // Using percentages for mobile/tablet to maintain proportions
                                    // Desktop overrides with exact pixels
                                    className="absolute bg-[rgba(255,255,255,0.9)] flex flex-col z-10
                                    w-[90%] left-[5%] top-[21%] p-[5%] gap-[2%]
                                    xl:w-[515px] xl:h-[425px] xl:left-[28px] xl:top-[134.87px] xl:p-[27px] xl:gap-[11px]"
                                >
                                    {/* Title */}
                                    <h3
                                        className="font-['DM_Sans'] font-bold text-[#1566B7] capitalize m-0
                                        text-xl
                                        md:text-2xl
                                        xl:w-[463px] xl:min-h-[38px] xl:text-[29px] xl:leading-[100%] tracking-normal"
                                    >
                                        {service.title}
                                    </h3>

                                    {/* Description */}
                                    <p
                                        className="font-['DM_Sans'] font-normal text-[#142349] m-0
                                        text-sm leading-relaxed
                                        md:text-base md:leading-[1.5]
                                        xl:w-[453px] xl:h-[109px] xl:text-[18px] xl:leading-[27px] tracking-normal"
                                    >
                                        {service.description}
                                    </p>

                                    {/* Bullet Points */}
                                    <ul
                                        className="font-['DM_Sans'] font-light text-[#142349] m-0 p-0 list-none
                                        text-sm leading-relaxed
                                        md:text-base md:leading-[1.5]
                                        xl:w-[469px] xl:h-[97px] xl:text-[18px] xl:leading-[27px] tracking-normal"
                                    >
                                        {service.points.map((point, index) => (
                                            <li key={index} className="flex gap-2">
                                                <span className="text-[#1566B7]">•</span>
                                                <span>{point}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Button */}
                                    <button
                                        className="hover:opacity-90 transition-opacity rounded-[192px] bg-[#1566B7] border-none cursor-pointer flex items-center justify-center mt-auto xl:mt-[11px]
                                        w-[200px] h-[36px]
                                        md:w-[220px]
                                        xl:w-[247px] xl:h-[37px]"
                                    >
                                        <span
                                            className="font-['DM_Sans'] font-semibold uppercase text-white
                                            text-xs
                                            md:text-sm
                                            xl:w-auto xl:h-[18px] xl:text-[14px] xl:leading-[100%] tracking-normal"
                                        >
                                            {service.buttonText}
                                        </span>
                                    </button>
                                </motion.div>

                                {/* Default Text Box at Bottom (Visible when not hovered) */}
                                <motion.div
                                    animate={{ opacity: hoveredCard === service.id ? 0 : 1 }}
                                    transition={{ duration: 0.3 }}
                                    className="absolute bottom-0 left-0 bg-[rgba(255,255,255,0.9)] flex items-center justify-center
                                    w-full h-[100px] p-4
                                    xl:w-[573.54px] xl:h-[123.13px] xl:p-[11px]"
                                >
                                    <h3
                                        className="font-['DM_Sans'] font-bold text-center capitalize text-[#142349] m-0
                                        text-xl w-[95%]
                                        md:text-2xl
                                        xl:text-[29px] xl:leading-[100%] xl:w-[90%] tracking-normal"
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
