import { useNavigate } from 'react-router-dom';
import styles from '../OccupationalHealthCentres/ohc.module.css';

const LandingSection = () => {
    const navigate = useNavigate();
    return (
        <div className={`relative w-full ${styles.gradientBg} pt-32 md:pt-40 pb-12 md:pb-16`}>
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center max-w-4xl mx-auto">
                    <h1 className={`${styles.headingSerif} ${styles.headingSerifLarge} mb-6`}>
                        PHARMACY & MEDICINE SUPPLY <span className={styles.primaryBlue}>ACROSS INDIA</span>
                    </h1>

                    <p className={`${styles.bodyText} text-center text-lg md:text-xl mb-6 font-semibold`}>
                        Licensed Wholesale & Retail Pharmacy Operations
                    </p>

                    <p className={`${styles.bodyText} text-center text-base md:text-lg mb-8 max-w-3xl mx-auto leading-relaxed`}>
                        Atharv Healthcare operates licensed pharmacy services focused on wholesale and institutional medicine supply, with limited retail support for local healthcare needs, supporting various organizations.
                    </p>

                    <button
                        onClick={() => navigate('/contact')}
                        className="bg-transparent border-2 border-[#1566B7] text-[#142349] rounded-[192px] h-[50px] px-8 font-semibold text-base uppercase hover:bg-[#1566B7] hover:text-white transition-all duration-300">
                        CONTACT PHARMACY TEAM
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LandingSection;
