const HealthCareVideo = () => {
  return (
    <div className="w-full max-w-[1512px] mx-auto px-4 py-8 sm:py-10 lg:py-12">
      {/* Main Container */}
      <div className="w-full max-w-[1312px] mx-auto">
        {/* Heading */}
        <h1
          className="text-center capitalize py-4 sm:py-6 lg:py-8
                     text-3xl sm:text-4xl lg:text-[46px]"
          style={{
            fontFamily: 'Source Serif Pro, serif',
            fontWeight: 600,
            lineHeight: '100%',
            letterSpacing: '0.02em',
          }}
        >
          <span className="text-[#1566B7]">Videos Of Healthcare </span>
          <span className="text-[#142349]">In Action</span>
        </h1>

        {/* Video Image */}
        <div className="w-full">
          <img
            src="/Gallery/Video.png"
            alt="Video"
            className="
              w-full 
              h-auto 
              rounded-md
              object-cover
              sm:rounded-lg
              lg:h-[563px] lg:rounded-xl
            "
          />
        </div>
      </div>
    </div>
  );
};

export default HealthCareVideo;
