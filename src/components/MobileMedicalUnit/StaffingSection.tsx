import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import styles from './ohc.module.css';

const StaffingSection = () => {
    const [showDeployment, setShowDeployment] = useState(false);

    const staffTypes = [
        'AFIH / MBBS doctors',
        'Duty medical officers',
        'GNM / ANM / BSc Nursing staff',
        'Paramedics and first responders'
    ];

    const deploymentModels = [
        {
            title: 'Full-time onsite',
            description: 'Dedicated medical staff available throughout working hours'
        },
        {
            title: 'Part-time onsite',
            description: 'Scheduled medical coverage based on operational needs'
        },
        {
            title: 'Hybrid + tele-consultation support',
            description: 'Combination of onsite and remote medical consultation'
        }
    ];

    return (
        <div className="w-full bg[red] py-12 md:py-16 px-4" style={{ background: '#F0F7FF' }}>
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                    {/* Image Section */}
                    <div className="relative overflow-visible p-4">
                        <div className="relative z-10">
                            <img 
                                src="/OccupationalHealthCentres/staffing.png" 
                                alt="Medical Staff"
                                className="w-full  "
                            />
                        </div>
                        <div className={`bg-[#1566B7] rounded-2xl w-full  absolute top-8 right-8 -z-10 opacity-30`}></div>
                    </div>

                    {/* Text Section */}
                    <div>
                        <h2 className={`${styles.headingSerif} ${styles.headingSerifMedium} mb-6`}>
                            Onsite Staffing — <span className={styles.primaryBlue}>Doctors, Nurses & Paramedics</span>
                        </h2>

                        {/* Staffing Options */}
                        <div className="bg-white rounded-xl p-6 mb-4 ">
                            <div className="w-full flex justify-between items-center mb-4">
                                <h3 className={`${styles.primaryBlue} text-lg font-bold`}>Staffing Options Include:</h3>
                                <ChevronUp className={styles.primaryBlue} size={24} />
                            </div>
                            <ul className="space-y-3">
                                {staffTypes.map((type, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <span className={`${styles.primaryBlue} font-bold text-xl flex-shrink-0`}>•</span>
                                        <span className={`${styles.bodyTextLight} text-lg`}>{type}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Deployment Models */}
                        <div className="bg-white rounded-xl p-6   mb-4">
                            <button
                                onClick={() => setShowDeployment(!showDeployment)}
                                className="w-full flex justify-between items-center"
                            >
                                <h3 className={`${styles.primaryBlue} text-lg font-bold`}>Deployment Models:</h3>
                                <ChevronDown
                                    className={`${styles.primaryBlue} transition-transform ${showDeployment ? 'rotate-180' : ''}`}
                                    size={24}
                                />
                            </button>
                            {showDeployment && (
                                <div className="mt-4 space-y-4 animate-fadeIn">
                                    {deploymentModels.map((model, index) => (
                                        <div key={index} className="border-l-4 border-[#1566B7] pl-4">
                                            <h4 className={`${styles.primaryBlue} font-bold text-base mb-1`}>
                                                {model.title}
                                            </h4>
                                            <p className={`${styles.bodyText} text-sm`}>
                                                {model.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        <p className={`${styles.bodyText} text-lg`}>
                            All staff are trained for industrial safety, documentation, and emergency management.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StaffingSection;
