import { useState } from 'react';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const faqs = [
        {
            question: "How do I book an online doctor consultation?",
            answer: "Click \"Consult Doctor Online\", select specialty, share details and confirm your slot."
        },
        {
            question: "Do you offer medicine home delivery?",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            question: "Can I book lab tests at home?",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            question: "Is ambulance service 24×7?",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        }
    ];

    const toggleAccordion = (index: any) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="w-full bg-white py-16 px-4">
            <div className="mx-auto" style={{ maxWidth: '1512px' }}>

                {/* Main Container - 907.1875px × 385.140625px, gap: 29px */}
                <div
                    style={{
                        width: '100%',
                        maxWidth: '907.1875px',
                        margin: '0 auto',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '29px'
                    }}
                >

                    {/* Heading - 907.1875px × 58px */}
                    <h2
                        style={{
                            width: '100%',
                            height: '58px',
                            fontFamily: "'Source Serif Pro', serif",
                            fontWeight: 600,
                            fontSize: '46px',
                            lineHeight: '100%',
                            letterSpacing: '0.02em',
                            textAlign: 'center',
                            textTransform: 'capitalize',
                            margin: 0
                        }}
                    >
                        <span style={{ color: '#142349' }}>Frequently Asked </span>
                        <span style={{ color: '#1566B7' }}>Questions</span>
                    </h2>

                    {/* Questions Dropdown Container - 907.1875px × 298.140625px */}
                    <div
                        style={{
                            width: '100%'
                        }}
                    >
                        {faqs.map((faq, index) => (
                            <div key={index}>
                                {/* Question Box - Open or Closed */}
                                <div
                                    style={{
                                        width: '100%',
                                        height: activeIndex === index ? '88px' : '71.078125px',
                                        borderTop: '1px solid #E5E5E5',
                                        borderBottom: '1px solid #E5E5E5',
                                        position: 'relative',
                                        cursor: 'pointer'
                                    }}
                                    onClick={() => toggleAccordion(index)}
                                >
                                    {/* Question Row */}
                                    <div
                                        style={{
                                            width: '100%',
                                            position: 'relative',
                                            top: '25.67px',
                                            left: '4.11px',
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center'
                                        }}
                                    >
                                        {/* Question Text */}
                                        <span
                                            style={{
                                                width: 'auto',
                                                flex: 1,
                                                height: '30px',
                                                fontFamily: "'DM Sans', sans-serif",
                                                fontWeight: 400,
                                                fontSize: index === 0 ? '20px' : '18px',
                                                lineHeight: '30px',
                                                letterSpacing: '0',
                                                verticalAlign: 'middle',
                                                color: '#141414'
                                            }}
                                        >
                                            {faq.question}
                                        </span>

                                        {/* Icon */}
                                        <span
                                            style={{
                                                fontSize: '20px',
                                                color: '#141414',
                                                fontWeight: 300
                                            }}
                                        >
                                            {activeIndex === index ? '×' : '+'}
                                        </span>
                                    </div>

                                    {/* Answer - Only for Open State */}
                                    {activeIndex === index && faq.answer && (
                                        <div
                                            style={{
                                                width: '716px',
                                                height: '20px',
                                                position: 'absolute',
                                                top: '60px',
                                                left: '5px',
                                                fontFamily: "'DM Sans', sans-serif",
                                                fontWeight: 300,
                                                fontSize: '14px',
                                                lineHeight: '20px',
                                                letterSpacing: '0.02em',
                                                verticalAlign: 'middle',
                                                color: '#142349'
                                            }}
                                        >
                                            {faq.answer}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;
