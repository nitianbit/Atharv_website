import styles from './ohc.module.css';

const LandingOverviewSection = () => {
    return (
        <div className={`relative w-full ${styles.gradientBg} pt-32 md:pt-50 pb-12 md:pb-16`}>
            <div className="max-w-7xl mx-auto px-4">
                {/* Landing Section Content */}
                <div className="text-center mb-12 md:mb-16">
                    <h1 className={`${styles.headingSerif} ${styles.headingSerifLarge} mb-4`}>
                        Occupational Health Centres(OHCs)
                    </h1>

                    <img
                        src="/Aboutus/LineStraight.png"
                        alt="line"
                        className="mx-auto mb-4 w-64 md:w-80"
                    />

                    <p className={`${styles.bodyText} font-medium mb-8 text-base md:text-lg max-w-3xl mx-auto leading-relaxed`}>
                        End-to-end onsite medical facility setup, staffing, health checkups, and statutory compliance support for factories, plants, and industrial establishments.
                    </p>



                    <p className={`${styles.bodyTextLight} text-center text-base md:text-lg leading-relaxed font-semibold`}>
                        Atharv Healthcare sets up and operates fully functional, compliant OHCs designed specifically for Indian industrial environments — urban, semi-urban, and rural.
                    </p>

                    <p className={`${styles.bodyTextLight} text-center text-base md:text-lg leading-relaxed`}>
                        We don't just supply staff. We build, run, and audit <span className='font-medium'>complete OHCs that actually work.</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LandingOverviewSection;
