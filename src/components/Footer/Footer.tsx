import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import { HiMail, HiLocationMarker } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div style={{ position: 'relative', width: '100%', marginTop: '60px' }}>
            {/* Centered Logo */}
            <div
                style={{
                    position: 'absolute',
                    top: '-60px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    zIndex: 30,
                    width: '240px',
                    height: '240px',
                    borderRadius: '50%',
                    background: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '8px solid #2DC335',
                    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.15)',
                }}
            >
                <img
                    src="/Homepage/Logo.png"
                    alt="Atharv Healthcare"
                    style={{
                        width: '180px',
                        height: '180px',
                        objectFit: 'contain'
                    }}
                />
            </div>

            {/* Main Footer with Curved Wave */}
            <footer style={{ position: 'relative', width: '100%', minHeight: '520px' }}>
                {/* Curved Wave SVG Background */}
                <svg
                    viewBox="0 0 1440 520"
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        zIndex: 1
                    }}
                    preserveAspectRatio="none"
                >
                    <defs>
                        <linearGradient id="footer-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="21.84%" stopColor="#176EC6" />
                            <stop offset="78.16%" stopColor="#0F58A1" />
                        </linearGradient>
                    </defs>
                    {/* Curved wave path - creates smooth wave that rises in center */}
                    <path
                        d="M 0,110 Q 380,120 720,40 Q 1080,120 1440,110 L 1440,520 L 0,520 Z"
                        fill="url(#footer-gradient)"
                    />
                </svg>

                {/* Content Container */}
                <div
                    style={{
                        position: 'relative',
                        zIndex: 10,
                        maxWidth: '1400px',
                        margin: '0 auto',
                        padding: '200px 70px 45px 70px',
                        display: 'grid',
                        gridTemplateColumns: '1.3fr 0.85fr 1.35fr 1.35fr 1.5fr',
                        gap: '50px',
                        color: '#FFFFFF',
                        alignItems: 'start'
                    }}
                >
                    {/* Column 1: Copyright */}
                    <div>
                        <p style={{
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: 400,
                            fontSize: '18px',
                            lineHeight: '30px',
                            color: '#FFFFFF',
                            margin: 0,
                            maxWidth: '230px'
                        }}>
                            © 2025 Atharv Healthcare. All Rights Reserved. | Privacy Policy | Terms & Conditions
                        </p>
                    </div>

                    {/* Column 2: Home */}
                    <div style={colStyle}>
                        <h3 style={headingStyle}>Home</h3>
                        <div style={linksContainerStyle}>
                            <Link to="/about-us" className="footer-link" style={linkStyle}>About us</Link>
                            <Link to="/services" className="footer-link" style={linkStyle}>Services</Link>
                            <Link to="/industries" className="footer-link" style={linkStyle}>Industries</Link>
                            <Link to="/why-choose-us" className="footer-link" style={linkStyle}>Why Choose Us</Link>
                            <Link to="/testimonials" className="footer-link" style={linkStyle}>Testimonials</Link>
                        </div>
                    </div>

                    {/* Column 3: Services */}
                    <div style={colStyle}>
                        <h3 style={headingStyle}>Services</h3>
                        <div style={linksContainerStyle}>
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
                                    className="footer-link"
                                    style={linkStyle}
                                >
                                    {item}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Column 4: Industries */}
                    <div style={colStyle}>
                        <h3 style={headingStyle}>Industries</h3>
                        <div style={linksContainerStyle}>
                            {[
                                'Manufacturing & Industrial Units',
                                'Corporate Offices & Workplaces',
                                'Rural Communities & NGOs',
                                'Case Studies / Success Stories by Industry'
                            ].map((item) => (
                                <Link
                                    key={item}
                                    to={`/industries/${item.toLowerCase().replace(/\s+/g, '-')}`}
                                    className="footer-link"
                                    style={linkStyle}
                                >
                                    {item}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Column 5: Contact Us */}
                    <div style={colStyle}>
                        <h3 style={headingStyle}>Contact Us</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            {/* Email */}
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <HiMail size={22} color="#FFFFFF" style={{ flexShrink: 0 }} />
                                <a
                                    href="mailto:info@atharvhealthcare.com"
                                    className="footer-link"
                                    style={linkStyle}
                                >
                                    info@atharvhealthcare.com
                                </a>
                            </div>

                            {/* Address */}
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                                <HiLocationMarker size={22} color="#FFFFFF" style={{ marginTop: '4px', flexShrink: 0 }} />
                                <p style={{ ...linkStyle, margin: 0 }}>
                                    Unit No: ANR 033, Astra Tower, Action Area 2C, New Town, Kolkata – 700161
                                </p>
                            </div>

                            {/* Social Icons */}
                            <div style={{ display: 'flex', gap: '12px', marginTop: '8px' }}>
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
                                        className="social-icon"
                                        style={socialIconStyle}
                                    >
                                        <Icon size={18} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            <style>{`
                .footer-link {
                    text-decoration: none;
                    transition: opacity 0.25s ease;
                }
                .footer-link:hover {
                    opacity: 0.75;
                }
                .social-icon {
                    transition: all 0.3s ease;
                }
                .social-icon:hover {
                    transform: translateY(-4px) scale(1.05);
                    box-shadow: 0 6px 16px rgba(255, 255, 255, 0.3);
                }

                @media (max-width: 1280px) {
                    footer > div:last-child {
                        grid-template-columns: repeat(3, 1fr) !important;
                        gap: 40px !important;
                    }
                }

                @media (max-width: 1024px) {
                    footer > div:last-child {
                        grid-template-columns: repeat(2, 1fr) !important;
                        padding: 180px 50px 40px 50px !important;
                    }
                }

                @media (max-width: 640px) {
                    footer > div:last-child {
                        grid-template-columns: 1fr !important;
                        text-align: center !important;
                        padding: 160px 30px 35px 30px !important;
                    }
                }
            `}</style>
        </div>
    );
};

const colStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '18px'
};

const linksContainerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
};

const linkStyle: React.CSSProperties = {
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 400,
    fontSize: '18px',
    lineHeight: '30px',
    color: '#FFFFFF',
    textDecoration: 'none'
};

const headingStyle: React.CSSProperties = {
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 700,
    fontSize: '18px',
    lineHeight: '30px',
    textDecoration: 'underline',
    color: '#FFFFFF',
    margin: 0
};

const socialIconStyle: React.CSSProperties = {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    background: '#FFFFFF',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s ease',
    color: '#1566B7',
    flexShrink: 0,
    textDecoration: 'none'
};

export default Footer;
