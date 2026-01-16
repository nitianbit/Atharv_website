interface Doctor {
    name: string;
    role: string;
    description: string;
}

const doctors: Doctor[] = [
    {
        name: 'Pravin',
        role: '(Head Of Clinical Operations)',
        description: 'Oversees clinical governance, care protocols, and quality standards across healthcare delivery, ensuring patient-first and compliant care practices.',
    },
    {
        name: 'Rajdeep',
        role: '(Compliance & Regulatory Lead)',
        description: 'Manages regulatory compliance and statutory requirements, supporting safe, ethical, and compliant healthcare operations across services.',
    },
    {
        name: 'Vijay',
        role: '(Sales & Marketing)',
        description: 'Leads business development and outreach initiatives, supporting service adoption across corporate, industrial, and community healthcare segments.',
    },
];


export default function DoctorList() {
    return (
        <div
            style={{
                width: '100%',
                minHeight: '804px',
                position: 'relative',
                backgroundImage: 'url(/Aboutus/BackgroundImage.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                paddingTop: '80px',
                paddingBottom: '80px'
            }}
        >
            {/* Overlay */}
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(255, 255, 255, 0.85)',
                    zIndex: 0
                }}
            />

            {/* Overall Container - 1514px × 804px */}
            <div
                style={{
                    width: '1514px',
                    height: '804px',
                    position: 'relative',
                    zIndex: 1
                }}
            >
                {/* Content Box - 1309px × 687px */}
                <div
                    style={{
                        width: '1309px',
                        height: '687px',
                        position: 'absolute',
                        top: '87px',
                        left: '104px'
                    }}
                >
                    {/* Main Heading - 814px × 49.71px */}
                    <h1
                        style={{
                            width: '814px',
                            height: '49.71px',
                            fontFamily: "'Source Serif Pro', serif",
                            fontWeight: 600,
                            fontSize: '46px',
                            lineHeight: '100%',
                            letterSpacing: '0.02em',
                            textAlign: 'center',
                            textTransform: 'capitalize',
                            margin: '0 auto 96px',
                            display: 'block'
                        }}
                    >
                        <span style={{ color: '#142349' }}>Leadership & </span>
                        <span style={{ color: '#1566B7' }}>Healthcare Operations</span>
                    </h1>

                    {/* Three Cards Container - 1309px × 591px */}
                    <div
                        style={{
                            width: '1309px',
                            height: '591px',
                            display: 'flex',
                            justifyContent: 'space-between'
                        }}
                    >
                        {doctors.map((doctor, index) => (
                            <div
                                key={index}
                                style={{
                                    width: '385px',
                                    height: '576px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    gap: '10px'
                                }}
                            >
                                {/* Card - 364.98px × 376.78px */}
                                <div
                                    style={{
                                        width: '364.98px',
                                        height: '376.78px',
                                        borderRadius: '20px',
                                        border: '1px solid #FEF5D8',
                                        overflow: 'hidden',
                                        position: 'relative',
                                        background: 'linear-gradient(135deg, #4575f0 0%, #3b6fd9 50%, #2856d6 100%)'
                                    }}
                                >
                                    <img src="/Aboutus/OVAL.png" alt="CirclePattern" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    
                                    {/* Female Doctor Image - 298px × 303px */}
                                    <div
                                        style={{
                                            width: '298px',
                                            height: '303px',
                                            position: 'absolute',
                                            top: '85.5px',
                                            left: '53.5px',
                                            zIndex: 10
                                        }}
                                    >
                                        <img
                                            src="/Aboutus/FemaleDoctor.png"
                                            alt={doctor.name}
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover'
                                            }}
                                        />
                                    </div>
                                </div>

                                {/* Text Content - 397px × 162px */}
                                <div
                                    style={{
                                        width: '397px',
                                        height: '162px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        gap: '16px'
                                    }}
                                >
                                    {/* Name - 247px × 24px */}
                                    <h2
                                        style={{
                                            width: '247px',
                                            height: '24px',
                                            fontFamily: "'DM Sans', sans-serif",
                                            fontWeight: 700,
                                            fontSize: '20px',
                                            lineHeight: '121%',
                                            letterSpacing: '-2%',
                                            textAlign: 'center',
                                            textTransform: 'capitalize',
                                            color: '#1566B7',
                                            margin: 0
                                        }}
                                    >
                                        {doctor.name}
                                    </h2>

                                    {/* Role - 283px × 19px */}
                                    <p
                                        style={{
                                            width: '283px',
                                            height: '19px',
                                            fontFamily: "'DM Sans', sans-serif",
                                            fontWeight: 300,
                                            fontSize: '16px',
                                            lineHeight: '121%',
                                            letterSpacing: '-2%',
                                            textAlign: 'center',
                                            textTransform: 'capitalize',
                                            color: '#142349',
                                            margin: 0
                                        }}
                                    >
                                        {doctor.role}
                                    </p>

                                    {/* Description - 363px × 100px */}
                                    <p
                                        style={{
                                            width: '363px',
                                            height: '100px',
                                            fontFamily: "'DM Sans', sans-serif",
                                            fontWeight: 300,
                                            fontSize: '18px',
                                            lineHeight: '26px',
                                            letterSpacing: '0%',
                                            textAlign: 'center',
                                            color: '#000000',
                                            margin: 0
                                        }}
                                    >
                                        {doctor.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
