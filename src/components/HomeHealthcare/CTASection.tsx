import styles from '../OccupationalHealthCentres/ohc.module.css';

const CTASection = () => {
    return (
        <div className={`w-full py-12 md:py-16 px-4 ${styles.blueGradientBg}`}>
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Image Section */}
                    <div>
                        <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-blue-200 to-blue-300 flex items-center justify-center relative">
                            <span className="text-white font-medium text-center px-4 z-10">Healthcare Professional Image</span>
                            <div className="absolute inset-0 bg-[#1566B7] opacity-20 rounded-2xl"></div>
                        </div>
                    </div>

                    {/* Text Section */}
                    <div>
                        <h2 className="text-white font-bold text-3xl md:text-4xl mb-4">
                            Get Reliable Home Healthcare Support
                        </h2>

                        <p className="text-white/90 text-lg md:text-xl mb-8 leading-relaxed">
                            Coordinated care. Medical reliability. Delivered at home.
                        </p>

                        <button className="bg-white text-[#1566B7] rounded-[192px] h-[50px] px-8 font-semibold text-base uppercase hover:bg-gray-100 transition-all duration-300">
                            REQUEST HOME HEALTHCARE SUPPORT
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CTASection;
