import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import { HiMail, HiLocationMarker } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="relative w-full mt-[60px]">
            {/* Centered Logo */}
            <div
                className="absolute left-1/2 -translate-x-1/2 z-30 flex items-center justify-center bg-white rounded-full
                w-[120px] h-[120px] -top-[30px]
                sm:w-[140px] sm:h-[140px] sm:-top-[35px]
                md:w-[150px] md:h-[150px] md:-top-[38px]
                lg:w-[200px] lg:h-[200px] lg:-top-[50px]
                xl:w-[240px] xl:h-[240px] xl:-top-[60px]"
            >
                <img
                    src="/Homepage/Logo.png"
                    alt="Atharv Healthcare"
                    className="object-contain w-full h-full p-3 md:p-4"
                />
            </div>

            {/* Main Footer with Curved Wave */}
            <footer className="relative w-full min-h-[520px] md:min-h-[600px] lg:min-h-[520px]">
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
                    grid 
                    grid-cols-1 

                    lg:grid-cols-4
                    xl:grid-cols-4
                    gap-5
                    sm:gap-6 
                    md:gap-6
                    lg:gap-8
                    xl:gap-12
                    px-4
                    pt-24 pb-8
                    sm:px-6 sm:pt-28 sm:pb-10
                    md:px-6 md:pt-[120px] md:pb-[35px]
                    lg:p-[180px_50px_45px_50px]
                    xl:p-[200px_70px_45px_70px]
                    text-center lg:text-left"
                >
                    {/* Column 1: Copyright & ISO Certifications */}
                    <div className="flex flex-col items-center lg:items-start lg:col-span-1 order-last lg:order-first gap-4 lg:gap-5">
                        {/* Copyright Text */}
                        <p className="hidden sm:block font-['Inter'] font-normal text-white
                            text-xs
                            md:text-[13px] 
                            lg:text-[15px] 
                            xl:text-[16px] 
                            leading-[18px]
                            md:leading-[20px] 
                            lg:leading-[24px]
                            xl:leading-[26px]
                            max-w-[240px] 
                            md:max-w-full md:text-center
                            lg:max-w-[280px] lg:text-left
                            xl:max-w-[300px]"
                        >
                            © 2025 Atharv Healthcare. All Rights Reserved. | Privacy Policy | Terms & Conditions
                        </p>

                        {/* ISO Certification Badges */}
                        <div className="flex gap-3 lg:gap-4 items-center justify-center lg:justify-start">
                            <img
                                src="/Footer/Iso11.png"
                                alt="ISO 9001:2015 Certified"
                                className="object-contain"
                                style={{
                                    width: '68px',
                                    height: '85px',
                                    opacity: 1
                                }}
                            />
                            <img
                                src="/Footer/Iso21.png"
                                alt="ISO 45001:2018 Certified"
                                className="object-contain"
                                style={{
                                    width: '68px',
                                    height: '85px',
                                    opacity: 1
                                }}
                            />
                        </div>
                    </div>

                    {/* Column 2: Home */}
                    <div className="relative lg:left-5 flex flex-col gap-[12px] md:gap-[10px] lg:gap-[14px] xl:gap-[16px]">
                        <h3 className="font-['DM_Sans'] font-bold underline text-white m-0
                            text-[15px]
                            md:text-[15px]
                            lg:text-[17px] 
                            xl:text-[18px] 
                            leading-[24px]
                            md:leading-[24px] 
                            lg:leading-[28px]
                            xl:leading-[30px]"
                        >
                            Home
                        </h3>
                        <div className="flex flex-col gap-[6px] md:gap-[6px] lg:gap-[8px] xl:gap-[10px]">
                            <Link to="/aboutus" className="footer-link font-['DM_Sans'] 
                                text-[13px] md:text-[14px] lg:text-[16px] xl:text-[17px] 
                                leading-[22px] md:leading-[22px] lg:leading-[26px] xl:leading-[28px]
                                text-white hover:opacity-75 transition-opacity whitespace-nowrap">
                                About us
                            </Link>
                            {/* <Link to="/services" className="footer-link font-['DM_Sans'] 
                                text-[13px] md:text-[14px] lg:text-[16px] xl:text-[17px] 
                                leading-[22px] md:leading-[22px] lg:leading-[26px] xl:leading-[28px]
                                text-white hover:opacity-75 transition-opacity whitespace-nowrap">
                                Services
                            </Link> */}
                            <Link to="/gallery" className="footer-link font-['DM_Sans'] 
                                text-[13px] md:text-[14px] lg:text-[16px] xl:text-[17px] 
                                leading-[22px] md:leading-[22px] lg:leading-[26px] xl:leading-[28px]
                                text-white hover:opacity-75 transition-opacity whitespace-nowrap">
                                Gallery
                            </Link>
                            <Link to="/blogs" className="footer-link font-['DM_Sans'] 
                                text-[13px] md:text-[14px] lg:text-[16px] xl:text-[17px] 
                                leading-[22px] md:leading-[22px] lg:leading-[26px] xl:leading-[28px]
                                text-white hover:opacity-75 transition-opacity whitespace-nowrap">
                                Blogs
                            </Link>
                            <Link to="/contact" className="footer-link font-['DM_Sans'] 
                                text-[13px] md:text-[14px] lg:text-[16px] xl:text-[17px] 
                                leading-[22px] md:leading-[22px] lg:leading-[26px] xl:leading-[28px]
                                text-white hover:opacity-75 transition-opacity whitespace-nowrap">
                                Contact Us
                            </Link>
                        </div>
                    </div>

                    {/* Column 3: Services */}
                    <div className="relative lg:right-24 flex flex-col gap-[12px] md:gap-[10px] lg:gap-[14px] xl:gap-[16px]">
                        <h3 className="font-['DM_Sans'] font-bold underline text-white m-0
                            text-[15px] md:text-[15px] lg:text-[17px] xl:text-[18px] 
                            leading-[24px] md:leading-[24px] lg:leading-[28px] xl:leading-[30px]
                            whitespace-nowrap">
                            Services
                        </h3>
                        <div className="flex flex-col gap-[6px] md:gap-[6px] lg:gap-[8px] xl:gap-[10px] whitespace-nowrap">
                            <Link to="/occupational-health-centres" className="footer-link font-['DM_Sans'] 
                                text-[13px] md:text-[14px] lg:text-[16px] xl:text-[17px] 
                                leading-[22px] md:leading-[22px] lg:leading-[26px] xl:leading-[28px]
                                text-white hover:opacity-75 transition-opacity">
                                Occupational Health Centres (OHCs)
                            </Link>
                            <Link to="/mobile-medical-units" className="footer-link font-['DM_Sans'] 
                                text-[13px] md:text-[14px] lg:text-[16px] xl:text-[17px] 
                                leading-[22px] md:leading-[22px] lg:leading-[26px] xl:leading-[28px]
                                text-white hover:opacity-75 transition-opacity">
                                Mobile Medical Units (MMUs)
                            </Link>
                            <Link to="/csr" className="footer-link font-['DM_Sans'] 
                                text-[13px] md:text-[14px] lg:text-[16px] xl:text-[17px] 
                                leading-[22px] md:leading-[22px] lg:leading-[26px] xl:leading-[28px]
                                text-white hover:opacity-75 transition-opacity">
                                CSR & Community Connect
                            </Link>
                            <Link to="/home-healthcare" className="footer-link font-['DM_Sans'] 
                                text-[13px] md:text-[14px] lg:text-[16px] xl:text-[17px] 
                                leading-[22px] md:leading-[22px] lg:leading-[26px] xl:leading-[28px]
                                text-white hover:opacity-75 transition-opacity whitespace-nowrap">
                                Home Healthcare
                            </Link>
                            <Link to="/pharmacy" className="footer-link font-['DM_Sans'] 
                                text-[13px] md:text-[14px] lg:text-[16px] xl:text-[17px] 
                                leading-[22px] md:leading-[22px] lg:leading-[26px] xl:leading-[28px]
                                text-white hover:opacity-75 transition-opacity">
                                Pharmacy & Medicine Supply
                            </Link>
                        </div>
                    </div>

                    {/* Column 4: Contact Us */}
                    <div className="flex flex-col gap-[12px] md:gap-[10px] lg:gap-[14px] xl:gap-[16px]">
                        <h3 className="font-['DM_Sans'] font-bold underline text-white m-0
                            text-[15px] md:text-[15px] lg:text-[17px] xl:text-[18px] 
                            leading-[24px] md:leading-[24px] lg:leading-[28px] xl:leading-[30px]
                            whitespace-nowrap">
                            Contact Us
                        </h3>
                        <div className="flex flex-col gap-2.5 md:gap-3 lg:gap-3 xl:gap-4">
                            {/* Email */}
                            <div className="flex items-center justify-center lg:justify-start gap-2">
                                <HiMail className="shrink-0 w-[18px] h-[18px] md:w-[20px] md:h-[20px] lg:w-[22px] lg:h-[22px]" color="#FFFFFF" />
                                <a
                                    href="mailto:info@atharvhealthcare.com"
                                    className="font-['DM_Sans'] 
                                        text-[13px] md:text-[14px] lg:text-[16px] xl:text-[17px] 
                                        leading-[22px] md:leading-[22px] lg:leading-[26px] xl:leading-[28px]
                                        text-white hover:opacity-75 transition-opacity break-all"
                                >
                                    info@atharvhealthcare.com
                                </a>
                            </div>

                            {/* Address */}
                            <div className="flex items-center lg:items-start justify-center lg:justify-start gap-2">
                                <HiLocationMarker className="shrink-0 mt-0.5 w-[18px] h-[18px] md:w-[20px] md:h-[20px] lg:w-[22px] lg:h-[22px]" color="#FFFFFF" />
                                <p className="font-['DM_Sans'] 
                                    text-[13px] md:text-[14px] lg:text-[16px] xl:text-[17px] 
                                    leading-[22px] md:leading-[22px] lg:leading-[26px] xl:leading-[28px]
                                    text-white m-0 text-left">
                                    Unit No: ANR 033, Astra Tower, Action Area 2C, New Town, Kolkata – 700161
                                </p>
                            </div>

                            {/* Social Icons */}
                            <div className="relative lg:left-6 flex justify-center lg:justify-start gap-2 md:gap-2.5 lg:gap-2.5 xl:gap-3 mt-1">
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
                                        className="rounded-full bg-white flex items-center justify-center text-[#1566B7] shrink-0
                                        w-8 h-8 md:w-9 md:h-9 lg:w-[38px] lg:h-[38px] xl:w-10 xl:h-10
                                        transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_6px_16px_rgba(255,255,255,0.3)]"
                                    >
                                        <Icon className="w-[14px] h-[14px] md:w-[16px] md:h-[16px] lg:w-[17px] lg:h-[17px] xl:w-[18px] xl:h-[18px]" />
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
