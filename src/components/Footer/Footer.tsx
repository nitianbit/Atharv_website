import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import { HiMail, HiLocationMarker } from 'react-icons/hi';
import { Link } from 'react-router-dom';



const Footer = () => {
    return (
        <div className="relative w-full mt-[60px]">
            {/* Centered Logo */}
            <div
                className="absolute left-1/2 -translate-x-1/2 z-30 flex items-center justify-center bg-white rounded-full
                w-[160px] h-[160px] -top-[40px]
                md:w-[200px] md:h-[200px] md:-top-[50px]
                xl:w-[240px] xl:h-[240px] xl:-top-[60px]"
            >
                <img
                    src="/Homepage/Logo.png"
                    alt="Atharv Healthcare"
                    // className="object-contain
                    // w-[110px] h-[110px]
                    // md:w-[140px] md:h-[140px]
                    // xl:w-[180px] xl:h-[180px]"
                />
            </div>

            {/* Main Footer with Curved Wave */}
            <footer className="relative w-full min-h-[520px]">
                {/* Curved Wave SVG Background */}
                <div className="absolute inset-0 w-full h-full z-[1]">
                    <svg
                        viewBox="0 0 1440 520"
                        className="w-full h-full"
                        preserveAspectRatio="none"
                    >
                        <defs>
                            <linearGradient id="footer-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="21.84%" stopColor="#176EC6" />
                                <stop offset="78.16%" stopColor="#0F58A1" />
                            </linearGradient>
                        </defs>
                        <path
                            d="M 0,110 Q 380,120 720,40 Q 1080,120 1440,110 L 1440,520 L 0,520 Z"
                            fill="url(#footer-gradient)"
                        />
                    </svg>
                </div>

                {/* Content Container */}
                <div
                    className="relative z-10 w-full max-w-[1400px] mx-auto text-white items-start
                    grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-[1.3fr_0.85fr_1.35fr_1.35fr_1.5fr]
                    gap-10 xl:gap-[50px]
                    px-6 py-32 md:p-[180px_50px_45px_50px] xl:p-[200px_70px_45px_70px]
                    text-center sm:text-left"
                >
                    {/* Column 1: Copyright */}
                    <div className="flex flex-col items-center sm:items-start">
                        <p className="hidden sm:block  font-['Inter'] font-normal text-white
                            text-base xl:text-[18px] leading-[26px] xl:leading-[30px]
                            max-w-[280px] xl:max-w-[230px]"
                        >
                            © 2025 Atharv Healthcare. All Rights Reserved. | Privacy Policy | Terms & Conditions
                        </p>
                    </div>

                    {/* Column 2: Home */}
                    <div className="flex flex-col gap-[18px]">
                        <h3 className="font-['DM_Sans'] font-bold underline text-white m-0
                            text-lg xl:text-[18px] leading-[30px]"
                        >
                            Home
                        </h3>
                        <div className="flex flex-col gap-[12px]">
                            <Link to="/about-us" className="footer-link font-['DM_Sans'] text-base xl:text-[18px] leading-[30px] text-white hover:opacity-75 transition-opacity">About us</Link>
                            <Link to="/services" className="footer-link font-['DM_Sans'] text-base xl:text-[18px] leading-[30px] text-white hover:opacity-75 transition-opacity">Services</Link>
                            <Link to="/industries" className="footer-link font-['DM_Sans'] text-base xl:text-[18px] leading-[30px] text-white hover:opacity-75 transition-opacity">Industries</Link>
                            <Link to="/why-choose-us" className="footer-link font-['DM_Sans'] text-base xl:text-[18px] leading-[30px] text-white hover:opacity-75 transition-opacity">Why Choose Us</Link>
                            <Link to="/testimonials" className="footer-link font-['DM_Sans'] text-base xl:text-[18px] leading-[30px] text-white hover:opacity-75 transition-opacity">Testimonials</Link>
                        </div>
                    </div>

                    {/* Column 3: Services */}
                    <div className="flex flex-col gap-[18px]">
                        <h3 className="font-['DM_Sans'] font-bold underline text-white m-0
                            text-lg xl:text-[18px] leading-[30px]"
                        >
                            Services
                        </h3>
                        <div className="flex flex-col gap-[12px]">
                            {[
                                'Diagnostics',
                                'Doctor Consultation',
                                'Ambulance',
                                'Pharmacy',
                                'Occupational Health Centres (OHCs)',
                                'Mobile Medical Units (MMUs)',
                                'CSR Community Health Programs',
                                'Homecare & Eyecare'
                            ].map((item) => (
                                <Link
                                    key={item}
                                    to={`/services/${item.toLowerCase().replace(/\s+/g, '-')}`}
                                    className="footer-link font-['DM_Sans'] text-base xl:text-[18px] leading-[30px] text-white hover:opacity-75 transition-opacity"
                                >
                                    {item}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Column 4: Industries */}
                    <div className="flex flex-col gap-[18px]">
                        <h3 className="font-['DM_Sans'] font-bold underline text-white m-0
                            text-lg xl:text-[18px] leading-[30px]"
                        >
                            Industries
                        </h3>
                        <div className="flex flex-col gap-[12px]">
                            {[
                                'Manufacturing & Industrial Units',
                                'Corporate Offices & Workplaces',
                                'Rural Communities & NGOs',
                                'Case Studies / Success Stories by Industry'
                            ].map((item) => (
                                <Link
                                    key={item}
                                    to={`/industries/${item.toLowerCase().replace(/\s+/g, '-')}`}
                                    className="footer-link font-['DM_Sans'] text-base xl:text-[18px] leading-[30px] text-white hover:opacity-75 transition-opacity"
                                >
                                    {item}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Column 5: Contact Us */}
                    <div className="flex flex-col gap-[18px]">
                        <h3 className="font-['DM_Sans'] font-bold underline text-white m-0
                            text-lg xl:text-[18px] leading-[30px]"
                        >
                            Contact Us
                        </h3>
                        <div className="flex flex-col gap-4">
                            {/* Email */}
                            <div className="flex items-center justify-center sm:justify-start gap-3">
                                <HiMail size={22} color="#FFFFFF" className="shrink-0" />
                                <a
                                    href="mailto:info@atharvhealthcare.com"
                                    className="font-['DM_Sans'] text-base xl:text-[18px] leading-[30px] text-white hover:opacity-75 transition-opacity"
                                >
                                    info@atharvhealthcare.com
                                </a>
                            </div>

                            {/* Address */}
                            <div className="flex items-center sm:items-start justify-center sm:justify-start gap-3">
                                <HiLocationMarker size={22} color="#FFFFFF" className="shrink-0 mt-1" />
                                <p className="font-['DM_Sans'] text-base xl:text-[18px] leading-[30px] text-white m-0 text-left">
                                    Unit No: ANR 033, Astra Tower, Action Area 2C, New Town, Kolkata – 700161
                                </p>
                            </div>

                            {/* Social Icons */}
                            <div className="flex justify-center sm:justify-start gap-3 mt-2">
                                {[
                                    { Icon: FaFacebookF, url: 'https://facebook.com' },
                                    { Icon: FaInstagram, url: 'https://instagram.com' },
                                    { Icon: FaYoutube, url: 'https://youtube.com' },
                                    { Icon: FaLinkedinIn, url: 'https://linkedin.com' }
                                ].map(({ Icon, url }, index) => (
                                    <a
                                        key={index}
                                        href={url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#1566B7] shrink-0
                                        transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_6px_16px_rgba(255,255,255,0.3)]"
                                    >
                                        <Icon size={18} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
