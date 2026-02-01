import { useNavigate } from 'react-router-dom';
import styles from '../OccupationalHealthCentres/ohc.module.css';

const FranchiseSection = () => {
    const navigate = useNavigate();
    return (
        <div className="w-full bg-white py-12 md:py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Text Section */}
                    <div>
                        <h2 className={`${styles.headingSerif} ${styles.headingSerifMedium} mb-6`}>
                            Pharmacy Franchise <span className={styles.primaryBlue}>Opportunities</span>
                        </h2>

                        <div className="space-y-6 mb-8">
                            <p className={`${styles.bodyText} text-lg leading-relaxed`}>
                                Atharv Healthcare is open to pharmacy franchise partnerships under defined and compliance-driven models.
                            </p>

                            <p className={`${styles.bodyText} text-lg leading-relaxed`}>
                                Franchise opportunities are aligned with Atharv Healthcare's operational standards and regulatory framework.
                            </p>

                            <p className={`${styles.bodyText} text-lg leading-relaxed`}>
                                Interested partners may contact the team for further details.
                            </p>
                        </div>

                        <button
                            onClick={() => navigate('/contact')}
                            className="bg-transparent border-2 border-[#1566B7] text-[#1566B7] rounded-2xl h-[50px] px-8 font-semibold text-base uppercase hover:bg-[#1566B7] hover:text-white transition-all duration-300">
                            CONTACT US
                        </button>
                    </div>

                    {/* Image Section */}
                    <div>
                        <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden relative">
                            <img
                                src="/Pharmacy/franchise.png"
                                alt="Pharmacy Franchise Opportunities"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FranchiseSection;
