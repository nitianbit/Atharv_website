const LandingPageBlog = () => {
    return (
        <div
            className="relative w-full flex items-center justify-center py-16 xl:py-0 xl:w-[1512px] xl:h-[508px] xl:mx-auto overflow-hidden"
            style={{
                background: 'linear-gradient(228deg, #9ADDFC 14.6%, rgba(79, 197, 224, 0) 68.04%)',
            }}
        >
            {/* Center Content Container */}
            <div className="relative w-full px-4 flex flex-col items-center gap-6 xl:block xl:absolute xl:w-[763px] xl:h-[229px] xl:top-[199px] xl:left-[399px] xl:px-0 xl:gap-0">

                {/* Heading - About Atharv Healthcare */}
                <h1
                    className="text-center capitalize font-['Source_Serif_Pro'] font-semibold text-[#011632] leading-tight
                               text-3xl sm:text-4xl md:text-5xl lg:text-[50px]
                               xl:absolute xl:top-0 xl:left-0 xl:w-[763px] xl:h-[136px] xl:text-[60px] xl:leading-[114%] xl:tracking-[-0.02em]"
                >
                    Insights & Updates from Atharv Healthcare
                </h1>

                {/* Straight Line Image */}
                <img
                    src="/Aboutus/LineStraight.png"
                    alt="line"
                    className="w-[200px] sm:w-[250px] md:w-[300px] h-auto object-contain
                               xl:absolute xl:left-[219px] xl:w-[326px] xl:h-[5px] xl:top-[144px]"
                />

                {/* Subtitle Text */}
                <p
                    className="text-center font-['DM_Sans'] font-light text-[#3C4959] leading-relaxed
                               text-base sm:text-lg max-w-2xl
                               xl:absolute xl:left-[12px] xl:max-w-none xl:w-[706px] xl:h-[60px] xl:top-[169px] xl:text-[18px] xl:leading-[30px] xl:tracking-[0%]"
                >
                    Industry insights on occupational health, mobile healthcare delivery, CSR initiatives, and preventive healthcare in India.
                </p>
            </div>
        </div>
    );
};

export default LandingPageBlog;
