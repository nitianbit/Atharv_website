// import React from 'react';

const Stats = () => {
    return (
        <div className="w-full py-12 px-4 sm:px-6 lg:px-8 bg-white">
            {/* Main Blue Container */}
            <div className="max-w-7xl mx-auto bg-gradient-to-br from-[#2B7FD8] via-[#3B8BE8] to-[#4A96F0] rounded-[32px] px-6 sm:px-12 py-14 shadow-2xl">
                
                {/* Title */}
                <h2 className="text-white text-4xl sm:text-5xl font-bold text-center mb-12 tracking-wide">
                    Our Statistics
                </h2>

                {/* Stats Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
                    
                    {/* Card 1 - 7+ */}
                    <div className="stat-card bg-blue-600/0 border-[2px] border-blue-400/30 rounded-2xl px-6 py-10 flex flex-col items-center justify-center min-h-[200px] hover:bg-white/10 transition-all duration-300">
                        <h3 className="text-white text-[80px] leading-none font-extrabold mb-3">
                            7+
                        </h3>
                        <p className="text-white text-[13px] font-bold text-center uppercase tracking-wider">
                            Years Of Proven<br/>Healthcare
                        </p>
                    </div>

                    {/* Card 2 - 20+ */}
                    <div className="stat-card bg-blue-600/0 border-[2px] border-blue-400/30 rounded-2xl px-6 py-10 flex flex-col items-center justify-center min-h-[200px] hover:bg-white/10 transition-all duration-300">
                        <h3 className="text-white text-[80px] leading-none font-extrabold mb-3">
                            20+
                        </h3>
                        <p className="text-white text-[13px] font-bold text-center uppercase tracking-wider">
                            Years Of Proven<br/>Healthcare
                        </p>
                    </div>

                    {/* Card 3 - 100+ */}
                    <div className="stat-card bg-blue-600/0 border-[2px] border-blue-400/30 rounded-2xl px-6 py-10 flex flex-col items-center justify-center min-h-[200px] hover:bg-white/10 transition-all duration-300">
                        <h3 className="text-white text-[80px] leading-none font-extrabold mb-3">
                            100+
                        </h3>
                        <p className="text-white text-[13px] font-bold text-center uppercase tracking-wider">
                            Years Of Proven<br/>Healthcare
                        </p>
                    </div>

                    {/* Card 4 - 10+ */}
                    <div className="stat-card bg-blue-600/0 border-[2px] border-blue-400/30 rounded-2xl px-6 py-10 flex flex-col items-center justify-center min-h-[200px] hover:bg-white/10 transition-all duration-300">
                        <h3 className="text-white text-[80px] leading-none font-extrabold mb-3">
                            10+
                        </h3>
                        <p className="text-white text-[13px] font-bold text-center uppercase tracking-wider">
                            Years Of Proven<br/>Healthcare
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stats;
