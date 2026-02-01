import { useNavigate } from 'react-router-dom';
import styles from './ohc.module.css';

const ComplianceSection = () => {
    const navigate = useNavigate();
    const complianceAreas = [
        'Factories Act & relevant State Rules',
        'Occupational Safety, Health & Working Conditions (OSHWC) Code',
        'ESIC and labour department guidelines',
        'Client, corporate, and ISO-EHS audit standards'
    ];

    const outcomes = [
        'Avoid penalties and regulatory notices',
        'Remain audit-ready year-round',
        'Maintain accurate employee health records',
        'Standardise OHC operations as per law'
    ];

    return (
        <div className="w-full bg-white py-12 md:py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Image Section */}
                    <div className="order-2 lg:order-1">
                        <img 
                            src="/OccupationalHealthCentres/compliance-consultation.png" 
                            alt="Compliance Consultation"
                            className="w-full aspect-[4/3] rounded-2xl object-contain"
                        />
                    </div>

                    {/* Text Section */}
                    <div className="order-1 lg:order-2">
                        <h2 className={`${styles.headingSerif} ${styles.headingSerifMedium} mb-6`}>
                            OHC Compliance Support <span className={styles.primaryBlue}>(Factories Act & OHSW Code)</span>
                        </h2>

                        <div className="space-y-6 mb-8">
                            <p className={`${styles.bodyText} text-lg leading-relaxed`}>
                                Compliance is not optional in industrial healthcare. Atharv Healthcare ensures your Occupational Health Centre remains <strong>legally compliant and audit-ready at all times, not just during inspections.</strong>
                            </p>

                            <p className={`${styles.bodyText} text-lg leading-relaxed`}>
                                We align OHC operations with the <strong>Factories Act, OSHWC Code, ESIC norms, and client or ISO-EHS audit standards</strong>, helping organizations reduce regulatory risk and maintain consistent documentation.
                            </p>

                            <div className='flex flex-row items-start gap-2'>
                                <p className={`${styles.bodyText} text-lg font-semibold mb-0 flex-shrink-0`}>Outcome:</p>
                                <p className={`${styles.bodyTextLight} text-lg leading-relaxed mb-0`}>
                                    Fewer penalties, smoother audits, and standardized OHC operations across sites.
                                </p>
                            </div>
                        </div>

                        {/* CTA Block */}
                        <div className={`rounded-2xl p-8 text-white`}>
                            <p className={`${styles.primaryBlue} text-lg text-white font-medium`}>
                                Not sure if your current OHC meets statutory requirements? 
                             </p>
                            <p className={`${styles.bodyTextLight} text-sm mb-6 text-white`}>
                                 Get a quick review of your Occupational Health Centre from our compliance team.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 mb-4">
                                <button onClick={() => navigate('/contact')} className={`${styles.buttonPrimary} flex-1 min-h-[50px] h-[50px] px-6 flex-shrink-0`}>
                                    GET AN OHC ASSESSMENT
                                </button>
                                <button onClick={() => navigate('/contact')} className="bg-transparent border-2 border-[#1566B7] text-black rounded-[192px] min-h-[50px] h-[50px] px-6 font-semibold uppercase hover:text-[#1566B7] transition-all duration-300 flex-1 flex-shrink-0 text-sm flex items-center justify-center">
                                    CHECK COMPLIANCE READINESS
                                </button>
                            </div>

                            <p className="text-sm text-white/90 text-center">
                                (No obligation. Confidential review.)
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ComplianceSection;
