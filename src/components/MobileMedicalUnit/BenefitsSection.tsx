import styles from './ohc.module.css';

const BenefitsSection = () => {
    const benefits = [
    {
        image: '/MobileMedicalUnit/pan-India-deployment-capability.png',
        title: 'Pan-India Deployment Capability'
    },
    {
        image: '/MobileMedicalUnit/experience-across-rural-and-industrial-environments.png',
        title: 'Experience Across Rural And Industrial Environments'
    },
    {
        image: '/MobileMedicalUnit/program-based-healthcare-delivery-model.png',
        title: 'Program-Based Healthcare Delivery Model'
    },
    {
        image: '/MobileMedicalUnit/integration-with-medicine-supply-and-follow-up-care.png',
        title: 'Integration With Medicine Supply And Follow-Up Care'
    },
    {
        image: '/MobileMedicalUnit/compliance-oriented-documentation-and-reporting.png',
        title: 'Compliance-Oriented Documentation And Reporting'
    },
    {
        image: '/MobileMedicalUnit/strong-operational-governance-and-accountability.png',
        title: 'Strong Operational Governance And Accountability'
    }
];



    return (
       <div className="w-full py-12 md:py-16 px-4" style={{ background: '#F0F7FF' }}>
    <div className="max-w-7xl mx-auto">

        {/* Heading */}
       <h2
    className={`${styles.headingSerif} ${styles.headingSerifMedium} mb-4 text-left pl-4 md:pl-8`}
>
    Why Companies Choose <span className={styles.primaryBlue}>Atharv Healthcare For MMU Services</span>
</h2>

<p
  className={`${styles.bodyText} text-left pl-2 md:pl-4 text-base md:text-lg mb-12 leading-relaxed font-medium max-w-4xl mx-auto`}
>
  <span className={styles.bodyTextLight}>
    Atharv Healthcare’s strength lies in
  </span>
  . execution, scale, and operational reliability.{" "}
  <span className={styles.bodyTextLight}>We focus</span> on running MMU
  <br />

  <span className="block pl-28 md:pl-38">
    programs that work on the ground,{" "}
    <span className={styles.bodyTextLight}>not just deploying vehicles.</span>
  </span>
</p>

        {/* Benefits */}
        <div className="flex flex-wrap justify-center gap-6">
            {benefits.map((benefit, index) => (
                <div
                    key={index}
                    className="bg-white rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-gray-100 flex items-center gap-4 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] max-w-sm"
                >
                    <div className="flex-shrink-0">
                        <img
                            src={benefit.image}
                            alt={benefit.title}
                            className="w-16 h-16 object-contain"
                        />
                    </div>
                    <h3 className={`${styles.bodyText} font-semibold text-base leading-tight flex-1`}>
                        {benefit.title}
                    </h3>
                </div>
            ))}
        </div>

    </div>
</div>

    );
};

export default BenefitsSection;
