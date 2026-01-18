import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import styles from './ohc.module.css';

const StaffingSection = () => {
  const [activeIndex, setActiveIndex] = useState(0); // first section open by default

  const OperationTypes = [
    'A qualified Medical Officer',
    'Trained nursing staff',
    'Supporting technical or field staff',
    'Structured deployment schedules and route planning',
  ];

  const deploymentModels = [
    {
      title: 'Full-time onsite',
      description: 'Dedicated medical staff available throughout working hours',
    },
    {
      title: 'Part-time onsite',
      description: 'Scheduled medical coverage based on operational needs',
    },
    {
      title: 'Hybrid + tele-consultation support',
      description: 'Combination of onsite and remote medical consultation',
    },
  ];

  // Accordion sections
  const accordionSections = [
    {
      title: 'MMUs are typically operated with:',
      content: (
        <ul className="space-y-3 mt-2">
          {OperationTypes.map((type, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className={`${styles.primaryBlue} font-bold text-xl flex-shrink-0`}>•</span>
              <span className={`${styles.bodyTextLight} text-lg`}>{type}</span>
            </li>
          ))}
        </ul>
      ),
    },
    {
      title: 'Operations include:',
      content: (
        <div className="mt-2 space-y-4">
          {deploymentModels.map((model, index) => (
            <div key={index} className="border-l-4 border-[#1566B7] pl-4">
              <h4 className={`${styles.primaryBlue} font-bold text-base mb-1`}>{model.title}</h4>
              <p className={`${styles.bodyText} text-sm`}>{model.description}</p>
            </div>
          ))}
        </div>
      ),
    },
    {
      title: 'Program workflows are designed to ensure:',
      content: (
        <div className="mt-2 space-y-4">
          {deploymentModels.map((model, index) => (
            <div key={index} className="border-l-4 border-[#1566B7] pl-4">
              <h4 className={`${styles.primaryBlue} font-bold text-base mb-1`}>{model.title}</h4>
              <p className={`${styles.bodyText} text-sm`}>{model.description}</p>
            </div>
          ))}
        </div>
      ),
    },
  ];

  const handleToggle = (index: number) => {
    setActiveIndex(prev => (prev === index ? -1 : index)); // close if same clicked, else open new
  };

  return (
    <div className="w-full py-12 md:py-16 px-4" style={{ background: '#F0F7FF' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image Section */}
          <div className="relative overflow-visible p-4">
            <div className="relative z-10">
              <img
                src="/OccupationalHealthCentres/staffing.png"
                alt="Medical Staff"
                className="w-full"
              />
            </div>
            <div className="bg-[#1566B7] rounded-2xl w-full absolute top-8 right-8 -z-10 opacity-30"></div>
          </div>

          {/* Text Section */}
          <div>
            <h2 className={`${styles.headingSerif} ${styles.headingSerifMedium} mb-3`}>
              Staffing & <span className={styles.primaryBlue}>MMU Operations</span>
            </h2>
            <p className={`${styles.headingSerif} mb-4`}>
              Effective MMU programs depend on disciplined operations and trained medical teams.
            </p>

            {/* Accordion */}
            {accordionSections.map((section, index) => (
              <div key={index} className="bg-white rounded-xl p-6 mb-4">
                <button
                  onClick={() => handleToggle(index)}
                  className="w-full flex justify-between items-center"
                >
                  <h3 className={`${styles.primaryBlue} text-lg font-bold`}>
                    {section.title}
                  </h3>
                  {activeIndex === index ? (
                    <ChevronUp className={styles.primaryBlue} size={24} />
                  ) : (
                    <ChevronDown className={styles.primaryBlue} size={24} />
                  )}
                </button>
                {activeIndex === index && (
                  <div className="mt-4 animate-fadeIn">{section.content}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffingSection;
