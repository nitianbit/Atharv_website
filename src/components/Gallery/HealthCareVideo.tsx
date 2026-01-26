const HealthCareVideo = () => {
    return (
        <div className="w-full max-w-[1512px] mx-auto px-4 py-12">
            {/* Main Container */}
            <div 
                className="w-full max-w-[1312px] mx-auto"
            >
                {/* Heading */}
                <h1
                    className="text-center capitalize py-8"
                    style={{
                        fontFamily: 'Source Serif Pro, serif',
                        fontWeight: 600,
                        fontSize: '46px',
                        lineHeight: '100%',
                        letterSpacing: '0.02em'
                    }}
                >
                    <span className="text-[#1566B7]">Videos Of Healthcare </span>
                    <span className="text-[#142349]">In Action</span>
                </h1>

                {/* Video Image */}
                <img 
                    src="/Gallery/Video.png" 
                    alt="Video" 
                    className="w-full h-[563px] object-cover"
                />
            </div>
        </div>
    );
};

export default HealthCareVideo;
