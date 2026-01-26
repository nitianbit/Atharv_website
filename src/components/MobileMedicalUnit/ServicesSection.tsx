import { motion } from 'framer-motion';
import { useState } from 'react';
import styles from './ohc.module.css';

const ServicesSection = () => {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    const services = [
        {
            id: 1,
            image: '/OccupationalHealthCentres/ohc-design-setup.png',
            title: 'Design And Setup Of OHC Room And Infrastructure'
        },
        {
            id: 2,
            image: '/OccupationalHealthCentres/layer1.png',
            title: 'Medical Equipment And Emergency Supplies'
        },
        {
            id: 3,
            image: '/OccupationalHealthCentres/medical-equipment-supplies.png',
            title: 'Onsite Doctors, Nurses, And Paramedics'
        },
        {
            id: 4,
            image: '/OccupationalHealthCentres/24x7-medical-operation.png',
            title: '24×7 Medical Room Operation (Where Required)'
        },
        {
            id: 5,
            image: '/OccupationalHealthCentres/emergency-response.png',
            title: 'Emergency Response And First-Aid Management'
        },
        {
            id: 6,
            image: '/OccupationalHealthCentres/ambulance.png',
            title: 'Ambulance Tie-Ups And Referral Hospital Coordination'
        },
        {
            id: 7,
            image: '/OccupationalHealthCentres/medical-checkups.png',
            title: 'Pre-Employment And Periodic Medical Checkups'
        },
        {
            id: 8,
            image: '/OccupationalHealthCentres/health-record-management.png',
            title: 'Health Record Management (Digital + Physical)'
        },
        {
            id: 9,
            image: '/OccupationalHealthCentres/statutory-documentation.png',
            title: 'Statutory Documentation For Audits And Inspections'
        }
    ];

    return (
        <div className="w-full py-12 md:py-16 px-4" style={{ background: '#F0F7FF' }}>
            <div className="max-w-7xl mx-auto">
                <h2 className={`${styles.headingSerif} ${styles.headingSerifMedium} text-left mb-4 mx-auto`}>
                    What We Deliver:  Complete OHC Solutions 
                </h2>

                <p className={`${styles.bodyText} text-left text-sm mb-12 mx-auto leading-relaxed`}>
                    Atharv offers <span className={`${styles.bodyText} text-black font-medium`}>turnkey Occupational Health Centre (OHC) setup and management,</span> including:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {services.map((service) => (
                        <motion.div
                            key={service.id}
                            onMouseEnter={() => setHoveredCard(service.id)}
                            onMouseLeave={() => setHoveredCard(null)}
                            className={`bg-white rounded-md p-6 flex items-center gap-4 transition-all duration-300 cursor-pointer border-r-2 border-b-2 border-[#3177E1] ${
                                hoveredCard === service.id 
                                    ? `${styles.cardShadow}` 
                                    : undefined
                            }`}
                            whileHover={{ y: -5 }}
                        >
                            <div className="shrink-0">
                                <img 
                                    src={service.image} 
                                    alt={service.title}
                                    className="w-12 h-12 object-contain"
                                />
                            </div>
                            <p className={`${styles.bodyText} text-base leading-relaxed flex-1 font-medium`}>
                                {service.title}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <p className={`${styles.bodyText} text-center text-lg font-semibold max-w-3xl mx-auto`}>
                    If your current OHC exists only "on paper," we turn it into a centre that is compliant, staffed, stocked, and operational.
                </p>
            </div>
        </div>
    );
};

export default ServicesSection;
