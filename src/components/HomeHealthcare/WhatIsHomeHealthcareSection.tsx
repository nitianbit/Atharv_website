import styles from '../OccupationalHealthCentres/ohc.module.css';

const WhatIsHomeHealthcareSection = () => {
    return (
        <div className="w-full bg-white py-12 md:py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Image Section */}
                    <div>
                        <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden relative">
                            <img
                                src="/HomeHealthcare/home-healthcare.png"
                                alt="What Is Home Healthcare"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Text Section */}
                    <div>
                        <h2 className={`${styles.headingSerif} ${styles.headingSerifMedium} mb-6`}>
                            What Is <span className={styles.primaryBlue}>Home Healthcare?</span>
                        </h2>

                        <div className="space-y-6">
                            <p className={`${styles.bodyText} text-lg leading-relaxed`}>
                                Home healthcare refers to the delivery of essential medical services at a patient's residence, helping individuals and families access timely care without frequent hospital visits.
                            </p>

                            <p className={`${styles.bodyText} text-lg leading-relaxed`}>
                                It is especially useful for elderly patients, people recovering at home, individuals managing chronic conditions, and working professionals who require reliable and coordinated medical support.
                            </p>

                            <p className={`${styles.bodyText} text-lg leading-relaxed`}>
                                Atharv Healthcare's home healthcare services focus on <strong>continuity of care, coordination, and reliability</strong>, rather than fragmented, one-off solutions.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhatIsHomeHealthcareSection;
