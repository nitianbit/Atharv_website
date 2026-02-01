import { useNavigate } from 'react-router-dom';
import styles from './ohc.module.css';

const LandingOverviewSection = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className={`relative w-full ${styles.gradientBg} pt-32 md:pt-50 pb-6`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-4">

            <h1 className={`${styles.headingSerif} ${styles.headingSerifLarge} mb-4`}>
              Community Connect for <br /> Corporate Social Responsibility
            </h1>

            <img
              src="/Aboutus/LineStraight.png"
              alt="line"
              className="mx-auto mb-4 w-64 md:w-80"
            />

            <p className={`${styles.bodyTextLight} text-base md:text-lg leading-relaxed max-w-3xl mx-auto`}>
              <span className="block font-medium">
                CSR Healthcare Program Design Execution and Governance Across India.
              </span>
              <span className="block font-medium">
                Compliant, accountable healthcare programs aligned with corporate CSR objectives.
              </span>
            </p>

            <p className={`${styles.bodyTextLight} text-base md:text-lg leading-relaxed max-w-4xl mx-auto mt-6`}>
              Atharv Healthcare partners with corporates, PSUs and institutions to plan and execute CSR healthcare
              <br />
              initiatives with clarity, compliance and measurable impact.
            </p>

            <button
              onClick={() => navigate('/contact')}
              className="
          mt-6
          px-8 py-3
          rounded-full
          border-2 border-[#2F80ED]
          text-[#00000]
          font-semibold
          text-sm md:text-base
          uppercase
          tracking-wide
          bg-white
          transition-all duration-300
          hover:bg-[#2F80ED]
          hover:text-white
          hover:shadow-md
        "
            >
              Discuss CSR Healthcare Program Requirements
            </button>

          </div>
        </div>
      </div>
    </>
  )
};

export default LandingOverviewSection;
