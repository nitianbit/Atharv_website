import { useNavigate } from 'react-router-dom';
import styles from './ohc.module.css';

const LandingOverviewSection = () => {
    const navigate = useNavigate();
    return (
        <div className={`relative w-full ${styles.gradientBg} pt-32 md:pt-50 pb-12 md:pb-16`}>
            <div className="max-w-7xl mx-auto px-4">
                {/* Landing Section Content */}
                <div className="text-center mb-12 md:mb-16">
                    <h1 className={`${styles.headingSerif} ${styles.headingSerifLarge} mb-4`}>
                        Mobile Medical Unit (MMU)
                    </h1>

                    <img
                        src="/Aboutus/LineStraight.png"
                        alt="line"
                        className="mx-auto mb-4 w-64 md:w-80"
                    />

                    <p className={`${styles.bodyTextLight} text-center text-base md:text-lg leading-relaxed font-semibold max-w-5xl mx-auto`}>
                        End-to-end mobile medical unit services for CSR healthcare programs, government health initiatives, rural healthcare outreach, and workforce medical support — delivered through structured operations and pan-India deployment.
                    </p>

                    <button
                    onClick={() => navigate('/contact')}
                        className=" mt-12 
        px-8 py-3
        rounded-full
        border-2 border-[#2F80ED]
        text-[#FFFFF]
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
                        Request an MMU Program Proposal
                    </button>

                </div>
            </div>
        </div>
    );
};

export default LandingOverviewSection;
