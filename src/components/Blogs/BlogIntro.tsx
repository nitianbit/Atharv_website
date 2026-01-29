import { Link } from 'react-router-dom';
import { FeaturedBlog } from './BlogData';

const BlogIntro = () => {
    return (
        <div className="w-full relative py-12 lg:py-0 overflow-hidden lg:pt-6 xl:pt-8">
            {/* =========================================
               MOBILE & TABLET VIEW (< lg)
               Vertical Stack: Image Top -> White Card Bottom
               ========================================= */}
            <div className="lg:hidden w-full px-4 md:px-8 flex flex-col items-center">
                {/* Image Banner */}
                <div
                    className="w-full h-[280px] sm:h-[350px] md:h-[450px] rounded-[18px] bg-cover bg-center shadow-md relative z-0"
                    style={{
                        backgroundImage: `url('${FeaturedBlog.image}')`,
                        backgroundPosition: 'center',
                        backgroundSize: 'contain'
                    }}
                />

                {/* White Card (Overlapping or Stacked) */}
                <div className="w-full max-w-2xl bg-white rounded-[16px] border border-[#EDEDED] p-6 md:p-10 shadow-lg -mt-16 md:-mt-24 relative z-10 mx-auto">
                    <p className="text-[#999999] text-[14px] md:text-[16px] font-light mb-3 font-['DM_Sans']">
                        {FeaturedBlog.date}
                    </p>
                    <h3 className="text-2xl md:text-4xl leading-tight mb-4 font-['Source_Serif_Pro'] tracking-tight">
                        <span className="text-[#1566B7] font-semibold">{FeaturedBlog.title} </span>
                        <span className="text-black font-semibold">{FeaturedBlog.subtitle}</span>
                    </h3>
                    <p className="text-[#1B1B1B] text-base md:text-lg font-light leading-relaxed mb-6 font-['DM_Sans']">
                        {FeaturedBlog.description}
                    </p>
                    <Link to={`/blog-detail/${FeaturedBlog.id}`}>
                        <button className="w-full sm:w-auto px-8 py-3 bg-white border border-[#1566B7] rounded-full text-[#142349] text-sm md:text-base font-semibold uppercase hover:bg-[#1566B7] hover:text-white transition-all duration-300 font-['DM_Sans']">
                            Read more
                        </button>
                    </Link>
                </div>
            </div>

            {/* =========================================
               DESKTOP VIEW (lg+)
               Scaled Absolute Layout (Preserves 1312px design)
               ========================================= */}
            <div className="hidden lg:block w-full">
                <div className="w-full flex justify-center lg:h-[550px] xl:h-[650px] 2xl:h-[730px]">
                    <div className="relative w-[1312px] h-[710px] origin-top transform lg:scale-[0.7] xl:scale-[0.9] 2xl:scale-100">
                        {/* Top Banner Section */}
                        <div
                            className="w-[1312px] h-[598px] rounded-[18px] relative bg-cover bg-center"
                            style={{
                                backgroundImage: `url('${FeaturedBlog.image}')`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center'
                            }}
                        />

                        {/* White Card Section */}
                        <div
                            className="absolute top-[360px] left-[337px] w-[975px] h-[350px] bg-white rounded-[16px] border border-[#EDEDED] px-[41px] py-[29px] shadow-lg"
                        >
                            <p className="text-[#999999] text-[18px] font-light leading-[30px] mb-[17px] font-['DM_Sans']">
                                {FeaturedBlog.date}
                            </p>
                            <h3 className="text-[46px] leading-[45px] mb-[19px] font-['Source_Serif_Pro'] tracking-[-1px]">
                                <span className="text-[#1566B7] font-semibold">{FeaturedBlog.title} </span>
                                <span className="text-black font-semibold">{FeaturedBlog.subtitle}</span>
                            </h3>
                            <p className="text-[#1B1B1B] text-[18px] font-light leading-[30px] mb-[32px] max-w-[831px] font-['DM_Sans']">
                                {FeaturedBlog.description}
                            </p>
                            <Link to={`/blog-detail/${FeaturedBlog.id}`}>
                                <button className="w-[207px] h-[43px] bg-white border border-[#1566B7] rounded-[192px] text-[#142349] text-[16px] font-semibold uppercase leading-[100%] hover:bg-[#1566B7] hover:text-white transition-all duration-300 font-['DM_Sans']">
                                    Read more
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogIntro;
