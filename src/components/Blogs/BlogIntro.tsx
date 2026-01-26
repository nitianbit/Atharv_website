import { Link } from 'react-router-dom';
import { FeaturedBlog } from './BlogData';

const BlogIntro = () => {
    return (
        <div className="w-[1312px] h-[710px] mx-auto relative">
            {/* Top Banner Section with Background Image */}
            <div
                className="w-[1312px] h-[598px] rounded-[18px] relative bg-cover bg-center"
                style={{
                    backgroundImage: `url('${FeaturedBlog.image}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                {/* You can overlay content here if needed */}
            </div>

            {/* White Card Section */}
            <div
                className="absolute top-[360px] left-[337px] w-[975px] h-[350px] bg-white rounded-[16px] border border-[#EDEDED] px-[41px] py-[29px] shadow-lg"
            >
                {/* Date */}
                <p
                    className="text-[#999999] text-[18px] font-light leading-[30px] mb-[17px]"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                    {FeaturedBlog.date}
                </p>

                {/* Title */}
                <h3
                    className="text-[46px] leading-[45px] mb-[19px]"
                    style={{
                        fontFamily: 'Source Serif Pro, serif',
                        letterSpacing: '-1px'
                    }}
                >
                    <span className="text-[#1566B7] font-semibold">{FeaturedBlog.title} </span>
                    <span className="text-black font-semibold">{FeaturedBlog.subtitle}</span>
                </h3>

                {/* Description */}
                <p
                    className="text-[#1B1B1B] text-[18px] font-light leading-[30px] mb-[32px] max-w-[831px]"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                    {FeaturedBlog.description}
                </p>

                {/* Button */}
                <Link to={`/blog-detail/${FeaturedBlog.id}`}>
                    <button
                        className="w-[207px] h-[43px] bg-white border border-[#1566B7] rounded-[192px] text-[#142349] text-[16px] font-semibold uppercase leading-[100%] hover:bg-[#1566B7] hover:text-white transition-all duration-300"
                        style={{ fontFamily: 'DM Sans, sans-serif' }}
                    >
                        Read more
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default BlogIntro;
