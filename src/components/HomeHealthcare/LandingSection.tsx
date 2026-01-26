import styles from '../OccupationalHealthCentres/ohc.module.css';

const LandingSection = () => {
    return (
        <div className={`relative w-full ${styles.gradientBg} pt-32 md:pt-40 pb-12 md:pb-16`}>
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center">
                    <h1 className={`${styles.headingSerif} ${styles.headingSerifLarge} mb-6`}>
                        Home Healthcare Services <span className="underline decoration-[#1566B7]">Across India</span>
                    </h1>

                    <p className={`${styles.bodyText} text-center text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed`}>
                        Doctor consultations, medicines, diagnostics, and emergency support — delivered at home.
                    </p>

                    <button className="bg-transparent border-2 border-[#1566B7] text-[#142349] rounded-[192px] h-[50px] px-8 font-semibold text-base uppercase hover:bg-[#1566B7] hover:text-white transition-all duration-300">
                        REQUEST HOME HEALTHCARE SUPPORT
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LandingSection;
