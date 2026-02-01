import { useNavigate } from 'react-router-dom';
import styles from './ohc.module.css';

const FinalCTASection = () => {
    const navigate = useNavigate();
    return (
        <div className="w-full bg-gray-50 py-16 md:py-20 px-4">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className={`${styles.headingSerif} ${styles.headingSerifMedium} mb-6`}>
                    Set up or upgrade your <span className={styles.primaryBlue}>Occupational Health Centre</span> with Atharv Healthcare
                </h2>

                <div className="flex flex-wrap justify-center gap-3 mb-8">
                    {['Compliant', 'Staffed', 'Fully Functional', 'Pan-India Capable'].map((tag, index) => (
                        <span
                            key={index}
                            className={`${styles.buttonPrimary} px-4 py-2 text-sm h-auto`}
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <button
                    onClick={() => navigate('/contact')}
                    className={`${styles.buttonPrimary} min-w-[280px] h-[55px] px-10`}
                >
                    Request a Proposal
                </button>
            </div>
        </div>
    );
};

export default FinalCTASection;
