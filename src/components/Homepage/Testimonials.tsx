// import { IoChatbubblesSharp } from 'react-icons/io5';
import {  FaStar } from 'react-icons/fa';

const Testimonials = () => {
    const testimonials = [
        {
            image: '/Homepage/Client1.png',
            name: 'Ritu',
            role: 'Senior HR Manager',
            rating: 4,
            text: 'Online doctor consultation was quick and helpful. I received my e-prescription and ordered medicines online in minutes.'
        },
        {
            image: '/Homepage/Client2.png',
            name: 'Anil',
            role: 'CSR Program Lead',
            rating: 4,
            text: 'We booked a lab test at home for my father. Home sample collection was professional and reports came digitally.'
        },
        {
            image: '/Homepage/Client3.png',
            name: 'Meera',
            role: 'Corporate Officer',
            rating: 4,
            text: 'Emergency ambulance service was arranged faster than expected. Very supportive coordination.'
        },
        {
            image: '/Homepage/Client4.png',
            name: 'Abhishek',
            role: 'EHS Officer',
            rating: 4,
            text: "Atharv Healthcare's ambulance services and medical staff have helped us strengthen our site safety protocols. They respond fast and maintain excellent standards."
        }
    ];

    return (
        <section style={{
            width: '1512px',
            height: '875px',
            margin: '0 auto',
            background: '#3177E11A',
            position: 'relative',
            padding: '64px 0'
        }}>
            <div style={{
                maxWidth: '1512px',
                margin: '0 auto',
                position: 'relative'
            }}>
                {/* Left Section - Heading */}
                <div style={{
                    width: '616px',
                    position: 'absolute',
                    left: '100px',
                    top: '0',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px'
                }}>
                    {/* Heading */}
                    <h2 style={{
                        width: '616px',
                        fontFamily: "'Source Serif Pro', serif",
                        fontWeight: 600,
                        fontSize: '46px',
                        lineHeight: '100%',
                        letterSpacing: '0.92px',
                        textTransform: 'capitalize',
                        color: '#142349',
                        margin: 0
                    }}>
                        What <span style={{ color: '#1566B7' }}>Our Clients</span> Say
                    </h2>

                    {/* Description */}
                    <p style={{
                        width: '495px',
                        fontFamily: "'DM Sans', sans-serif",
                        fontWeight: 300,
                        fontSize: '18px',
                        lineHeight: '30px',
                        letterSpacing: '0',
                        color: '#142349',
                        margin: 0
                    }}>
                        Real feedback from organizations and communities we support across India.
                    </p>
                </div>

                {/* ClientCircle Image Container */}
                <div style={{
                    width: '527px',
                    height: '558.5037841796875px',
                    position: 'absolute',
                    left: '30px',
                    top: '160px',
                    // background: '#FFFFFF'
                }}>
                    <img
                        src="/Homepage/ClientCircle.png"
                        alt="Client Circle"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'contain'
                        }}
                    />
                </div>

                {/* Right Section - Testimonial Cards */}
                
                {/* Card 1 - Top Left */}
                <div style={{
                    width: '328px',
                    height: '270px',
                    position: 'absolute',
                    left: '626px',
                    top: '163px'
                }}>
                    {/* Icon */}
                    <div style={{
                        width: '78px',
                        height: '71px',
                        position: 'absolute',
                        left: '22px',
                        top: '0',
                        zIndex: 2
                    }}>
                        <img
                            src={testimonials[0].image}
                            alt={testimonials[0].name}
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                borderRadius: '12px'
                            }}
                        />
                    </div>

                    {/* White Box */}
                    <div style={{
                        width: '328px',
                        height: '238px',
                        position: 'absolute',
                        top: '32px',
                        left: '0',
                        borderRadius: '12px',
                        background: '#FFFFFF',
                        boxShadow: '0px 0px 25.9px 0px #0E295105',
                        padding: '52px 16px 16px 16px',
                        boxSizing: 'border-box'
                    }}>
                        {/* Star Rating */}
                        <div style={{
                            display: 'flex',
                            gap: '4px',
                            marginBottom: '12px'
                        }}>
                            {[...Array(5)].map((_, i) => (
                                <div key={i} style={{
                                    width: '20px',
                                    height: '19px',
                                    borderRadius: '0.5px'
                                }}>
                                    <FaStar
                                        size={20}
                                        color={i < testimonials[0].rating ? '#FF9140' : '#E5E7EB'}
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Testimonial Text */}
                        <p style={{
                            width: '296px',
                            fontFamily: "'DM Sans', sans-serif",
                            fontWeight: 300,
                            fontSize: '14px',
                            lineHeight: '100%',
                            letterSpacing: '0.28px',
                            color: '#142349',
                            margin: '0 0 16px 0'
                        }}>
                            {testimonials[0].text}
                        </p>

                        {/* Name */}
                        <h4 style={{
                            width: '155px',
                            fontFamily: "'DM Sans', sans-serif",
                            fontWeight: 500,
                            fontSize: '15px',
                            lineHeight: '100%',
                            letterSpacing: '0',
                            color: '#1566B7',
                            margin: '0 0 4px 0'
                        }}>
                            {testimonials[0].name}
                        </h4>

                        {/* Role */}
                        <p style={{
                            width: '199px',
                            fontFamily: "'DM Sans', sans-serif",
                            fontWeight: 300,
                            fontSize: '12px',
                            lineHeight: '20px',
                            letterSpacing: '0',
                            color: '#7688B6',
                            margin: 0
                        }}>
                            {testimonials[0].role}
                        </p>
                    </div>
                </div>

                {/* Card 2 - Top Right */}
                <div style={{
                    width: '333px',
                    height: '270px',
                    position: 'absolute',
                    left: '996px',
                    top: '133px'
                }}>
                    {/* Icon */}
                    <div style={{
                        width: '78px',
                        height: '71px',
                        position: 'absolute',
                        left: '22px',
                        top: '0',
                        zIndex: 2
                    }}>
                        <img
                            src={testimonials[1].image}
                            alt={testimonials[1].name}
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                borderRadius: '12px'
                            }}
                        />
                    </div>

                    {/* White Box */}
                    <div style={{
                        width: '333px',
                        height: '238px',
                        position: 'absolute',
                        top: '32px',
                        left: '0',
                        borderRadius: '12px',
                        background: '#FFFFFF',
                        boxShadow: '0px 0px 25.9px 0px #0E295105',
                        padding: '52px 16px 16px 16px',
                        boxSizing: 'border-box'
                    }}>
                        {/* Star Rating */}
                        <div style={{
                            display: 'flex',
                            gap: '4px',
                            marginBottom: '12px'
                        }}>
                            {[...Array(5)].map((_, i) => (
                                <div key={i} style={{
                                    width: '20px',
                                    height: '19px',
                                    borderRadius: '0.5px'
                                }}>
                                    <FaStar
                                        size={20}
                                        color={i < testimonials[1].rating ? '#FF9140' : '#E5E7EB'}
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Testimonial Text */}
                        <p style={{
                            width: '296px',
                            fontFamily: "'DM Sans', sans-serif",
                            fontWeight: 300,
                            fontSize: '14px',
                            lineHeight: '100%',
                            letterSpacing: '0.28px',
                            color: '#142349',
                            margin: '0 0 16px 0'
                        }}>
                            {testimonials[1].text}
                        </p>

                        {/* Name */}
                        <h4 style={{
                            width: '155px',
                            fontFamily: "'DM Sans', sans-serif",
                            fontWeight: 500,
                            fontSize: '15px',
                            lineHeight: '100%',
                            letterSpacing: '0',
                            color: '#1566B7',
                            margin: '0 0 4px 0'
                        }}>
                            {testimonials[1].name}
                        </h4>

                        {/* Role */}
                        <p style={{
                            width: '199px',
                            fontFamily: "'DM Sans', sans-serif",
                            fontWeight: 300,
                            fontSize: '12px',
                            lineHeight: '20px',
                            letterSpacing: '0',
                            color: '#7688B6',
                            margin: 0
                        }}>
                            {testimonials[1].role}
                        </p>
                    </div>
                </div>

                {/* Card 3 - Bottom Left */}
                <div style={{
                    width: '328px',
                    height: '270px',
                    position: 'absolute',
                    left: '626px',
                    top: '463px'
                }}>
                    {/* Icon */}
                    <div style={{
                        width: '78px',
                        height: '71px',
                        position: 'absolute',
                        left: '22px',
                        top: '0',
                        zIndex: 2
                    }}>
                        <img
                            src={testimonials[2].image}
                            alt={testimonials[2].name}
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                borderRadius: '12px'
                            }}
                        />
                    </div>

                    {/* White Box */}
                    <div style={{
                        width: '328px',
                        height: '238px',
                        position: 'absolute',
                        top: '32px',
                        left: '0',
                        borderRadius: '12px',
                        background: '#FFFFFF',
                        boxShadow: '0px 0px 25.9px 0px #0E295105',
                        padding: '52px 16px 16px 16px',
                        boxSizing: 'border-box'
                    }}>
                        {/* Star Rating */}
                        <div style={{
                            display: 'flex',
                            gap: '4px',
                            marginBottom: '12px'
                        }}>
                            {[...Array(5)].map((_, i) => (
                                <div key={i} style={{
                                    width: '20px',
                                    height: '19px',
                                    borderRadius: '0.5px'
                                }}>
                                    <FaStar
                                        size={20}
                                        color={i < testimonials[2].rating ? '#FF9140' : '#E5E7EB'}
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Testimonial Text */}
                        <p style={{
                            width: '296px',
                            fontFamily: "'DM Sans', sans-serif",
                            fontWeight: 300,
                            fontSize: '14px',
                            lineHeight: '100%',
                            letterSpacing: '0.28px',
                            color: '#142349',
                            margin: '0 0 16px 0'
                        }}>
                            {testimonials[2].text}
                        </p>

                        {/* Name */}
                        <h4 style={{
                            width: '155px',
                            fontFamily: "'DM Sans', sans-serif",
                            fontWeight: 500,
                            fontSize: '15px',
                            lineHeight: '100%',
                            letterSpacing: '0',
                            color: '#1566B7',
                            margin: '0 0 4px 0'
                        }}>
                            {testimonials[2].name}
                        </h4>

                        {/* Role */}
                        <p style={{
                            width: '199px',
                            fontFamily: "'DM Sans', sans-serif",
                            fontWeight: 300,
                            fontSize: '12px',
                            lineHeight: '20px',
                            letterSpacing: '0',
                            color: '#7688B6',
                            margin: 0
                        }}>
                            {testimonials[2].role}
                        </p>
                    </div>
                </div>

                {/* Card 4 - Bottom Right */}
                <div style={{
                    width: '333px',
                    height: '270px',
                    position: 'absolute',
                    left: '996px',
                    top: '433px'
                }}>
                    {/* Icon */}
                    <div style={{
                        width: '78px',
                        height: '71px',
                        position: 'absolute',
                        left: '22px',
                        top: '0',
                        zIndex: 2
                    }}>
                        <img
                            src={testimonials[3].image}
                            alt={testimonials[3].name}
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                borderRadius: '12px'
                            }}
                        />
                    </div>

                    {/* White Box */}
                    <div style={{
                        width: '333px',
                        height: '238px',
                        position: 'absolute',
                        top: '32px',
                        left: '0',
                        borderRadius: '12px',
                        background: '#FFFFFF',
                        boxShadow: '0px 0px 25.9px 0px #0E295105',
                        padding: '52px 16px 16px 16px',
                        boxSizing: 'border-box'
                    }}>
                        {/* Star Rating */}
                        <div style={{
                            display: 'flex',
                            gap: '4px',
                            marginBottom: '12px'
                        }}>
                            {[...Array(5)].map((_, i) => (
                                <div key={i} style={{
                                    width: '20px',
                                    height: '19px',
                                    borderRadius: '0.5px'
                                }}>
                                    <FaStar
                                        size={20}
                                        color={i < testimonials[3].rating ? '#FF9140' : '#E5E7EB'}
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Testimonial Text */}
                        <p style={{
                            width: '296px',
                            fontFamily: "'DM Sans', sans-serif",
                            fontWeight: 300,
                            fontSize: '14px',
                            lineHeight: '100%',
                            letterSpacing: '0.28px',
                            color: '#142349',
                            margin: '0 0 16px 0'
                        }}>
                            {testimonials[3].text}
                        </p>

                        {/* Name */}
                        <h4 style={{
                            width: '155px',
                            fontFamily: "'DM Sans', sans-serif",
                            fontWeight: 500,
                            fontSize: '15px',
                            lineHeight: '100%',
                            letterSpacing: '0',
                            color: '#1566B7',
                            margin: '0 0 4px 0'
                        }}>
                            {testimonials[3].name}
                        </h4>

                        {/* Role */}
                        <p style={{
                            width: '199px',
                            fontFamily: "'DM Sans', sans-serif",
                            fontWeight: 300,
                            fontSize: '12px',
                            lineHeight: '20px',
                            letterSpacing: '0',
                            color: '#7688B6',
                            margin: 0
                        }}>
                            {testimonials[3].role}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
