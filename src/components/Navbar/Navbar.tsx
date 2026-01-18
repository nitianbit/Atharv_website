import { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [mobileActiveDropdown, setMobileActiveDropdown] = useState<string | null>(null);

    const toggleMobileDropdown = (name: string) => {
        setMobileActiveDropdown(mobileActiveDropdown === name ? null : name);
    };

    return (
        <>
            {/* Mobile/Tablet Header */}
            {/* Added max-w-[100vw] and overflow-hidden to outer container to prevent any horizontal scroll on mobile */}
            <div className="xl:hidden fixed w-full max-w-[100vw] top-0 left-0 z-50 px-6 py-4 flex items-center justify-between bg-white/90 backdrop-blur-md shadow-[0_2px_10px_rgba(0,0,0,0.05)] border-b border-white/20">
                <Link to="/" className="w-24 h-auto relative z-50">
                    <img src="/Homepage/AtharvLOGO.png" alt="Atharv Health Care Logo" className="w-full h-full object-contain" />
                </Link>

                <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-[#142349] p-2 relative z-50">
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Mobile Menu Overlay */}
                {isMobileMenuOpen && (
                    <div className="absolute top-10 left-0 w-full h-screen bg-white flex flex-col pt-24 px-6 overflow-y-auto">
                        <div className="flex flex-col gap-6 pb-10">
                            <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-bold text-[#1566B7] font-['DM_Sans']">Home</Link>
                            <Link to="/aboutus" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-bold text-[#142349] font-['DM_Sans']">About Us</Link>

                            {/* Mobile Services */}
                            <div className="flex flex-col gap-3">
                                <button onClick={() => toggleMobileDropdown('services')} className="flex items-center justify-between text-xl font-bold text-[#142349] font-['DM_Sans'] w-full text-left">
                                    Services <ChevronDown className={`w-5 h-5 transition-transform ${mobileActiveDropdown === 'services' ? 'rotate-180' : ''}`} />
                                </button>
                                {mobileActiveDropdown === 'services' && (
                                    <div className="flex flex-col gap-3 pl-4 border-l-2 border-[#1566B7]/20">
                                        <Link to="/services/consultation" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-medium text-[#142349] font-['DM_Sans'] py-1">Online Consultation</Link>
                                        <Link to="/services/pharmacy" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-medium text-[#142349] font-['DM_Sans'] py-1">Pharmacy</Link>
                                        <Link to="/services/lab" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-medium text-[#142349] font-['DM_Sans'] py-1">Lab Tests</Link>
                                        <Link to="/services/ambulance" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-medium text-[#142349] font-['DM_Sans'] py-1">Ambulance Service</Link>
                                    </div>
                                )}
                            </div>

                            {/* Mobile Industries */}
                            <div className="flex flex-col gap-3">
                                <button onClick={() => toggleMobileDropdown('industries')} className="flex items-center justify-between text-xl font-bold text-[#142349] font-['DM_Sans'] w-full text-left">
                                    Industries <ChevronDown className={`w-5 h-5 transition-transform ${mobileActiveDropdown === 'industries' ? 'rotate-180' : ''}`} />
                                </button>
                                {mobileActiveDropdown === 'industries' && (
                                    <div className="flex flex-col gap-3 pl-4 border-l-2 border-[#1566B7]/20">
                                        <Link to="/industries/corporate" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-medium text-[#142349] font-['DM_Sans'] py-1">Corporate Healthcare</Link>
                                        <Link to="/industries/hospitals" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-medium text-[#142349] font-['DM_Sans'] py-1">Hospitals</Link>
                                        <Link to="/industries/clinics" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-medium text-[#142349] font-['DM_Sans'] py-1">Clinics</Link>
                                    </div>
                                )}
                            </div>

                            <Link to="/why-choose-us" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-bold text-[#142349] font-['DM_Sans']">Why Choose Us</Link>
                            <Link to="/gallery" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-bold text-[#142349] font-['DM_Sans']">Gallery</Link>

                            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="mt-4 bg-[#1566B7] text-white text-center py-4 rounded-full font-bold uppercase tracking-wider font-['DM_Sans'] shadow-lg">
                                CONTACT US
                            </Link>
                        </div>
                    </div>
                )}
            </div>

            {/* Desktop Navbar - Refactored for Responsiveness */}
            <nav className="hidden xl:flex absolute top-[17px] left-0 right-0 z-50 items-center justify-between w-full max-w-[1414px] mx-auto px-4 gap-4">

                {/* Logo Section */}
                <div className="relative shrink-0 w-[119px] h-[127px]">
                    <Link to="/" className="block w-full h-full">
                        <img
                            src="/Homepage/AtharvLOGO.png"
                            alt="Atharv Health Care Logo"
                            className="w-full h-full object-contain"
                        />
                    </Link>
                </div>

                {/* Navbar Box - Glassmorphism Container */}
                {/* Made fluid with flex-1 and max-width. Removed strict pixel width to prevent overflow on smaller desktop screens */}
                <div
                    className="relative flex items-center justify-between flex-1 h-[86px] rounded-[45px] bg-white/40 backdrop-blur-[10px] pl-[61px] pr-[28px] max-w-[1251px]"
                >
                    {/* Navigation Links Group */}
                    <div className="flex items-center gap-[20px] 2xl:gap-[30px] whitespace-nowrap">

                        {/* Home Link */}
                        <Link to="/"
                            className="font-['DM_Sans'] font-bold text-[18px] leading-[100%] tracking-[0.04em] capitalize transition-colors text-[#1566B7]"
                        >
                            Home
                        </Link>

                        {/* About Us Link */}
                        <Link to="/aboutus"
                            className="font-['DM_Sans'] font-bold text-[18px] leading-[100%] tracking-[0.04em] capitalize transition-colors text-[#142349]"
                        >
                            About Us
                        </Link>

                        {/* Services Dropdown */}
                        <div
                            className="relative group h-[23px]"
                            onMouseEnter={() => setActiveDropdown('services')}
                            onMouseLeave={() => setActiveDropdown(null)}
                        >
                            <button className="flex items-center gap-1 font-['DM_Sans'] font-bold text-[18px] leading-[100%] tracking-[0.04em] capitalize transition-colors text-[#142349]">
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
                                </div>
                            )}
                        </div>

                        {/* Industries Dropdown */}
                        <div
                            className="relative group h-[23px]"
                            onMouseEnter={() => setActiveDropdown('industries')}
                            onMouseLeave={() => setActiveDropdown(null)}
                        >
                            <button className="flex items-center gap-1 font-['DM_Sans'] font-bold text-[18px] leading-[100%] tracking-[0.04em] capitalize transition-colors text-[#142349]">
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
                            className="font-['DM_Sans'] font-bold text-[18px] leading-[100%] tracking-[0.04em] capitalize transition-colors text-[#142349]"
                        >
                            Why Choose Us
                        </Link>

                        {/* Gallery */}
                        <Link to="/gallery"
                            className="font-['DM_Sans'] font-bold text-[18px] leading-[100%] tracking-[0.04em] capitalize transition-colors text-[#142349]"
                        >
                            Gallery
                        </Link>
                    </div>

                    {/* Contact Us Button */}
                    <div className="shrink-0">
                        <Link
                            to="/contact"
                            className="flex items-center justify-center transition-all hover:opacity-90 hover:scale-105 active:scale-95 text-white bg-[#1566B7] shadow-[1px_4px_12.7px_0px_#3177E13D] uppercase font-['DM_Sans'] font-semibold text-[16px] leading-[100%] rounded-[192px] w-[236px] h-[55px]"
                        >
                            CONTACT US
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
