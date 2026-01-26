import { useState } from 'react';
import styles from '../OccupationalHealthCentres/ohc.module.css';

const ServicesSection = () => {
    const [activeTab, setActiveTab] = useState('consultation');

    const tabs = [
        { id: 'consultation', label: 'ONLINE DOCTOR CONSULTATION' },
        { id: 'pharmacy', label: 'PHARMACY AT YOUR DOORSTEP' },
        { id: 'diagnostics', label: 'DIAGNOSTICS AT HOME' },
        { id: 'ambulance', label: 'AMBULANCE & EMERGENCY SUPPORT' }
    ];

    const services = {
        consultation: {
            title: 'Online Doctor Consultation',
            description: 'Online doctor consultations allow patients to consult qualified medical professionals remotely for non-emergency concerns, follow-ups, and medical guidance.',
            items: [
                'Scheduled virtual consultations',
                'Medical assessment and advice',
                'Follow-up guidance and care planning',
                'Prescription support where applicable'
            ]
        },
        pharmacy: {
            title: 'Pharmacy At Your Doorstep',
            description: 'Get genuine medicines delivered to your doorstep with verified prescriptions and quality assurance.',
            items: [
                'Prescription medicine delivery',
                'Over-the-counter medications',
                'Quality verified products',
                'Timely doorstep delivery'
            ]
        },
        diagnostics: {
            title: 'Diagnostics At Home',
            description: 'Book lab tests and health checkups with home sample collection by certified phlebotomists.',
            items: [
                'Home sample collection',
                'NABL accredited labs',
                'Digital reports',
                'Comprehensive health packages'
            ]
        },
        ambulance: {
            title: 'Ambulance & Emergency Support',
            description: '24/7 ambulance services and emergency medical support when you need it most.',
            items: [
                '24/7 ambulance availability',
                'Emergency response',
                'Hospital coordination',
                'Critical care transport'
            ]
        }
    };

    const currentService = services[activeTab as keyof typeof services];

    return (
        <div className="w-full bg-white py-12 md:py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <h2 className={`${styles.headingSerif} ${styles.headingSerifMedium} text-center mb-4 max-w-3xl mx-auto`}>
                    Our <span className={`${styles.primaryBlue} underline`}>Home Healthcare Services</span>
                </h2>

                <p className={`${styles.bodyText} text-center text-lg mb-12 max-w-3xl mx-auto leading-relaxed`}>
                    Atharv Healthcare delivers structured medical services at home, supported by coordinated workflows and verified service partners.
                </p>

                {/* Image Section */}
                <div className="mb-12">
                    <div className="w-full aspect-[16/9] rounded-2xl overflow-hidden bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                        <span className="text-[#1566B7] font-medium text-center px-4">Home Healthcare Services Image</span>
                    </div>
                </div>

                {/* Tabbed Navigation */}
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-6 py-3 rounded-lg font-semibold text-sm uppercase transition-all duration-300 ${
                                activeTab === tab.id
                                    ? 'bg-[#1566B7] text-white'
                                    : 'bg-white text-[#142349] border border-gray-300 hover:border-[#1566B7]'
                            }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                <div className="max-w-4xl mx-auto">
                    <h3 className={`${styles.headingSerif} text-2xl md:text-3xl mb-4 ${styles.primaryBlue}`}>
                        {currentService.title}
                    </h3>

                    <p className={`${styles.bodyText} text-lg mb-6 leading-relaxed`}>
                        {currentService.description}
                    </p>

                    <div>
                        <h4 className={`${styles.bodyText} text-xl font-bold mb-4 ${styles.primaryBlue}`}>
                            Services Include:
                        </h4>
                        <ul className="space-y-3">
                            {currentService.items.map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <span className={`${styles.primaryBlue} font-bold text-xl shrink-0`}>•</span>
                                    <span className={`${styles.bodyText} text-lg leading-relaxed`}>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesSection;
