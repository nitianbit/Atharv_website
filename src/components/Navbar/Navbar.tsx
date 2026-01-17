import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    return (
        <nav className="absolute z-50 flex items-center justify-between"
            style={{
                width: '1414px',
                height: '127px',
                top: '17px',
                left: '49px',
                opacity: 1,
            }}
        >
            {/* Logo Section */}
            <div className="relative shrink-0"
                style={{
                    width: '119px',
                    height: '127px',
                }}
            >
                <Link to="/" className="block w-full h-full">
                    <img
                        src="/Homepage/AtharvLOGO.png"
                        alt="Atharv Health Care Logo"
                        className="w-full h-full object-contain"
                    />
                </Link>
            </div>

            {/* Navbar Box - The Glassmorphism Container */}
            <div className="relative flex items-center"
                style={{
                    width: '1251px',
                    height: '86px',
                    marginLeft: '-5px',
                    borderRadius: '45px',
                    background: 'rgba(255, 255, 255, 0.4)', // opacity 0.4 on background
                    backdropFilter: 'blur(10px)', // Assuming glassmorphism implied
                }}
            >
                {/* Navigation Links */}
                <div className="flex items-center gap-[30px]" style={{ marginLeft: '61px' }}>

                    {/* Home Link */}
                    <Link to="/"
                        className="font-['DM_Sans'] font-bold text-[18px] leading-[100%] tracking-[0.04em] capitalize transition-colors"
                        style={{ color: '#1566B7' }} // Primary color for active/home
                    >
                        Home
                    </Link>

                    {/* About Us Link */}
                    <Link to="/aboutus"
                        className="font-['DM_Sans'] font-bold text-[18px] leading-[100%] tracking-[0.04em] capitalize transition-colors"
                        style={{ color: '#142349' }}
                    >
                        About Us
                    </Link>

                    {/* Services Dropdown */}
                    <div
                        className="relative group h-[23px]"
                        onMouseEnter={() => setActiveDropdown('services')}
                        onMouseLeave={() => setActiveDropdown(null)}
                    >
                        <button className="flex items-center gap-1 font-['DM_Sans'] font-bold text-[18px] leading-[100%] tracking-[0.04em] capitalize transition-colors"
                            style={{ color: '#142349' }}
                        >
                            Services
                            <ChevronDown className="w-4 h-4 ml-1" />
                        </button>

                        {/* Dropdown Menu */}
                        {activeDropdown === 'services' && (
                            <div className="absolute top-full left-0 mt-6 w-56 bg-white rounded-xl shadow-xl py-3 z-50 border border-gray-100">
                                <Link to="/services/consultation" className="block px-5 py-3 text-[#142349] font-['DM_Sans'] font-medium hover:bg-blue-50 hover:text-[#1566B7] transition-colors">
                                    Online Consultation
                                </Link>
                                <Link to="/services/pharmacy" className="block px-5 py-3 text-[#142349] font-['DM_Sans'] font-medium hover:bg-blue-50 hover:text-[#1566B7] transition-colors">
                                    Pharmacy
                                </Link>
                                <Link to="/services/lab" className="block px-5 py-3 text-[#142349] font-['DM_Sans'] font-medium hover:bg-blue-50 hover:text-[#1566B7] transition-colors">
                                    Lab Tests
                                </Link>
                                <Link to="/services/ambulance" className="block px-5 py-3 text-[#142349] font-['DM_Sans'] font-medium hover:bg-blue-50 hover:text-[#1566B7] transition-colors">
                                    Ambulance Service
                                </Link>
                                <Link to="/occupational-health-centres" className="block px-5 py-3 text-[#142349] font-['DM_Sans'] font-medium hover:bg-blue-50 hover:text-[#1566B7] transition-colors">
                                    Occupational Health Centres
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Industries Dropdown */}
                    <div
                        className="relative group h-[23px]"
                        onMouseEnter={() => setActiveDropdown('industries')}
                        onMouseLeave={() => setActiveDropdown(null)}
                    >
                        <button className="flex items-center gap-1 font-['DM_Sans'] font-bold text-[18px] leading-[100%] tracking-[0.04em] capitalize transition-colors"
                            style={{ color: '#142349' }}
                        >
                            Industries
                            <ChevronDown className="w-4 h-4 ml-1" />
                        </button>

                        {/* Dropdown Menu */}
                        {activeDropdown === 'industries' && (
                            <div className="absolute top-full left-0 mt-6 w-56 bg-white rounded-xl shadow-xl py-3 z-50 border border-gray-100">
                                <Link to="/industries/corporate" className="block px-5 py-3 text-[#142349] font-['DM_Sans'] font-medium hover:bg-blue-50 hover:text-[#1566B7] transition-colors">
                                    Corporate Healthcare
                                </Link>
                                <Link to="/industries/hospitals" className="block px-5 py-3 text-[#142349] font-['DM_Sans'] font-medium hover:bg-blue-50 hover:text-[#1566B7] transition-colors">
                                    Hospitals
                                </Link>
                                <Link to="/industries/clinics" className="block px-5 py-3 text-[#142349] font-['DM_Sans'] font-medium hover:bg-blue-50 hover:text-[#1566B7] transition-colors">
                                    Clinics
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Why Choose Us */}
                    <Link to="/why-choose-us"
                        className="font-['DM_Sans'] font-bold text-[18px] leading-[100%] tracking-[0.04em] capitalize transition-colors"
                        style={{ color: '#142349' }}
                    >
                        Why Choose Us
                    </Link>

                    {/* Gallery */}
                    <Link to="/gallery"
                        className="font-['DM_Sans'] font-bold text-[18px] leading-[100%] tracking-[0.04em] capitalize transition-colors"
                        style={{ color: '#142349' }}
                    >
                        Gallery
                    </Link>
                </div>

                {/* Contact Us Button */}
                <div className="absolute"
                    style={{
                        right: '28px',
                        left: '1000px',
                        top: '16px',
                    }}
                >
                    <Link
                        to="/contact"
                        className="flex items-center justify-center transition-all hover:opacity-90 hover:scale-105 active:scale-95"
                        style={{
                            width: '236px',
                            height: '55px',
                            borderRadius: '192px',
                            backgroundColor: '#1566B7',
                            padding: '16px 28px 16px 28px',
                            boxShadow: '1px 4px 12.7px 0px #3177E13D',
                            fontFamily: "'DM Sans', sans-serif",
                            fontWeight: 600,
                            fontSize: '16px',
                            lineHeight: '100%',
                            letterSpacing: '0%',
                            textTransform: 'uppercase',
                            color: '#FFFFFF',
                        }}
                    >
                        CONTACT US
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
