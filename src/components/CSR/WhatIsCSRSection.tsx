import styles from './ohc.module.css';

const WhatIsCSRSection = () => {
   const features = [
    'Alignment with CSR Act (Schedule VII) objectives',
    'Clearly defined scope and outcomes',
    'Reliable on-ground execution',
    'Medical governance and quality control',
    'Transparent documentation and reporting',
];


    return (
    <div className="w-full bg-gray-50 py-12 md:py-16 px-4">
    <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center"> {/* Increased gap */}

            {/* Image Section */}
            <div className="order-2 lg:order-1">
                <img 
                    src="/csr/csr-1.png" 
                    alt="CSR HealthCare"
                    className="w-full"
                />
            </div>

            {/* Text Section */}
            <div className="order-1 lg:order-2">
                <h2 className={`${styles.headingSerif} ${styles.headingSerifMedium} mb-6 text-lg md:text-xl  whitespace-nowrap`}> {/* Smaller heading */}
                    What <span className={`${styles.primaryBlue}`}>CSR HealthCare</span> Actually<br/>Requires
                </h2>

                <p className={`${styles.bodyText} text-sm md:text-base mb-4 leading-relaxed`}>
  Corporate Social Responsibility healthcare initiatives are regulated,<br />
  reportable and subject to review. Poorly planned or loosely executed<br />
  programs can expose organizations to{' '}
  <span className="font-bold">
    compliance gaps,<br/> audit observations and reputational risk.
  </span>
</p>

 <p className={`${styles.bodyText} text-sm md:text-base mb-4 leading-relaxed`}>
  CSR healthcare is not “community service.” 
  <span className="font-bold">
   <br/>It is program execution with accountability. 
  </span>
</p>



                <p className={`${styles.primaryBlue} text-sm md:text-base font-semibold mb-4`}>
                   Effective CSR healthcare programs require:
                </p>

                <ul className="space-y-2"> {/* Smaller gap between list items */}
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm md:text-base"> {/* smaller text */}
                            <span className={`${styles.primaryBlue} font-bold text-lg flex-shrink-0`}>•</span>
                            <span className={`${styles.bodyText} leading-relaxed`}>{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
</div>

);

};
export default WhatIsCSRSection;
