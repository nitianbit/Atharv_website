const LandingPageGallery = () => {
    return (
        <div
            className="w-full flex items-center justify-center relative
                       h-auto py-16
                       xl:h-[431px] xl:py-0"
            style={{
                background: 'linear-gradient(228deg, #9ADDFC 14.6%, rgba(79, 197, 224, 0) 68.04%)',
            }}
        >
            {/* Center Content Container */}
            <div className="relative flex flex-col items-center gap-6 w-full px-4 text-center
                            xl:block xl:w-[888px] xl:h-[179px] xl:gap-0 xl:px-0 pt-24">


                {/* Heading - Media Gallery */}
                <h1
                    className="font-['Source_Serif_Pro'] font-semibold capitalize text-[#011632]
                               text-4xl leading-tight
                               xl:absolute xl:top-1/2 xl:left-1/2 xl:-translate-x-1/2 xl:-translate-y-1/2
                               xl:w-[651px] xl:h-[68px] xl:text-[60px] xl:leading-[114%] xl:tracking-[-0.02em] xl:whitespace-nowrap"
                >
                    Media Gallery
                </h1>


                {/* Straight Line Image */}
                <img
                    src="/Aboutus/LineStraight.png"
                    alt="line"
                    className="w-3/4 max-w-[250px] h-auto object-contain
                               xl:absolute xl:left-1/2 xl:-translate-x-1/2
                               xl:w-[326px] xl:h-[5px] xl:top-[120px] xl:max-w-none"
                />


                {/* Subtitle Text */}
                <p
                    className="font-['DM_Sans'] font-light text-[#3C4959]
                               text-sm leading-relaxed w-full max-w-2xl mx-auto px-2
                               xl:absolute xl:left-0 xl:mx-0 xl:px-0
                               xl:w-[888px] xl:h-[34px] xl:top-[150px] xl:max-w-none
                               xl:text-[19px] xl:leading-[30px] xl:tracking-[0%]"
                >
                    A visual story of our CSR health camps, mobile medical units, corporate wellness programs and community healthcare initiatives across India.
                </p>


                {/* Book Now Button (Commented out in original, keeping it just in case structure matches) */}
                {/* <div className="hidden xl:block ...">...</div> */}
            </div>
        </div>
    );
};


export default LandingPageGallery;
