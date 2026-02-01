import { useNavigate } from 'react-router-dom';
import styles from './ohc.module.css';

const LandingSection = () => {
    const navigate = useNavigate();
    return (
        <div className={`relative w-full min-h-[400px] md:h-[431px] flex items-center justify-center py-12 md:py-0 ${styles.gradientBg}`}>
            <div className="relative w-full max-w-4xl px-4">
                <h1 className={`${styles.headingSerif} ${styles.headingSerifLarge} text-center mb-4`}>
                    Mobile Medical Unit (MMU)
                </h1>

                <img
                    src="/Aboutus/LineStraight.png"
                    alt="line"
                    className="mx-auto mb-4 w-64 md:w-80"
                />

                <p className={`${styles.bodyTextLight} text-center mb-6 text-base md:text-lg max-w-3xl mx-auto leading-relaxed`}>
                    End-to-end onsite medical facility setup, staffing, health checkups, and statutory compliance support for factories, plants, and industrial establishments.
                </p>

                <button
                    onClick={() => navigate('/contact')}
                    className={`${styles.buttonSecondary} mx-auto block w-full sm:w-auto min-w-[267px] h-[50px] px-7`}
                >
                    BOOK NOW
                </button>
            </div>
        </div>
    );
};

export default LandingSection;
