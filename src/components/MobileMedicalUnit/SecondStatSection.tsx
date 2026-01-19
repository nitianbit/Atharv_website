import styles from './ohc.module.css';

const SecondStatsSection = () => {
  const stats = [
    {
      image: '/MobileMedicalUnit/1.png',
      label: 'Medicine availability through in-house pharmacy support',
    },
    {
      image: '/MobileMedicalUnit/2.png',
      label: 'Referral coordination with fixed healthcare facilities',
    },
    {
      image: '/MobileMedicalUnit/3.png',
      label: 'Continuity across workplace, community, and outreach programs',
    },
  ];

  return (
    <div className="w-full py-16 md:py-20 px-4">
      <div className="max-w-7xl mx-auto">

        <h2 className={`${styles.headingSerif} ${styles.headingSerifMedium} ${styles.primaryBlue} text-center mb-2`}>
          Integrated Healthcare <span className={styles.bodyText}>Support</span>
        </h2>

        <p className={`${styles.bodyTextLight} text-center text-lg mb-12 max-w-3xl mx-auto`}>
          MMU programs can be aligned with Atharv Healthcare’s broader service ecosystem, enabling:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-4 md:p-6 max-w-sm w-full flex flex-col items-start text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 shadow-sm"
              style={{ height: '90%' }} // Box height
            >
              {/* Smaller Image */}
              <img
                src={stat.image}
                alt={stat.label}
                className="w-16 h-16 md:w-12 md:h-12 object-contain mb-4 pl-2" // smaller and more gap
              />

              {/* Text below image */}
              <p className={`${styles.bodyText} text-sm md:text-base leading-snug`}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default SecondStatsSection;
