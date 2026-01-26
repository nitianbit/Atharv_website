import styles from './ohc.module.css';

const OverviewSection = () => {
    return (
        <div className="w-full bg-white py-12 md:py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <h2 className={`${styles.headingSerif} ${styles.headingSerifMedium} text-center mb-6 max-w-4xl mx-auto`}>
                    Occupational Health Centre (OHC) Setup & Management Services Across India
                </h2>

                <div className="max-w-4xl mx-auto space-y-6">
                    <p className={`${styles.bodyText} text-center text-base md:text-lg leading-relaxed`}>
                        End-to-end onsite medical facility setup, staffing, health checkups, and statutory compliance support for factories, plants, and industrial establishments.
                    </p>

                    <p className={`${styles.bodyText} text-center text-base md:text-lg leading-relaxed font-semibold`}>
                        A non-compliant or poorly managed Occupational Health Centre is not "just a gap" — it is a legal, financial, and safety risk. Atharv Healthcare sets up and operates fully functional, compliant OHCs designed specifically for Indian industrial environments — urban, semi-urban, and rural.
                    </p>

                    <p className={`${styles.primaryBlue} text-center text-base md:text-lg leading-relaxed`}>
                        <strong>We don't just supply staff.</strong> We build, run, and audit complete OHCs that actually work.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default OverviewSection;
