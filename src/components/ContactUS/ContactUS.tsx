'use client';
import { useState } from 'react';


const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyG2HO5rjVUg8tSxxnM8grfO6QOKn91YasREPnVLk5LAd7e4lAhbjtCiMajGcdnTcia/exec";
// const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxycLMTqE_mHUZIrYqFOh5JPA7LObAWHZSCulJxJlUFtenbYfTg8oLEQ4zwQv_VKD7L/exec";

const ContactUs = () => {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        countryCode: 'IN',
        state: '',
        city: '',
        pincode: '',
        query: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });
            setStatus('success');
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phoneNumber: '',
                countryCode: 'IN',
                state: '',
                city: '',
                pincode: '',
                query: '',
                message: ''
            });

            // Reset status after 5 seconds
            setTimeout(() => setStatus('idle'), 5000);

        } catch (error) {
            console.error('Error submitting form:', error);
            setStatus('error');
        }
    };

    return (
        <div
            className="w-full min-h-screen py-8 md:py-12 px-4"
            style={{
                background: 'linear-gradient(228deg, #9ADDFC 14.6%, rgba(79, 197, 224, 0) 68.04%)'
            }}
        >
            <div className="max-w-[1512px] mx-auto pt-32 md:pt-24 lg:pt-28">

                {/* Header Section */}
                <div className="text-center mb-8 md:mb-14">
                    <h1
                        className="text-[#011632] mb-4 md:mb-6 mx-auto text-3xl md:text-5xl lg:text-[60px]"
                        style={{
                            fontFamily: 'Source Serif Pro, serif',
                            fontWeight: 600,
                            lineHeight: '114%',
                            letterSpacing: '-0.02em',
                            textTransform: 'capitalize',
                            maxWidth: '705px'
                        }}
                    >
                        Contact Atharv Healthcare
                    </h1>

                    <p
                        className="text-[#3C4959] mx-auto text-base md:text-lg lg:text-[18px]"
                        style={{
                            fontFamily: 'DM Sans, sans-serif',
                            fontWeight: 300,
                            lineHeight: '30px',
                            letterSpacing: '0%',
                            maxWidth: '888px'
                        }}
                    >
                        Get in touch for online doctor consultation, online pharmacy orders, lab tests at home, ambulance services, OHCs, MMUs and CSR healthcare programs across India.
                    </p>
                </div>

                {/* Main Content - Two Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-[520px_1fr] gap-6 lg:gap-8 max-w-[1200px] mx-auto items-start">

                    {/* Left Column - Contact Information */}
                    <div className="space-y-4 w-full max-w-[503px] mx-auto lg:mx-0">

                        {/* Map Card - Only Image */}
                        <div
                            className="bg-white rounded-[20px] overflow-hidden relative"
                        >
                            <div className="w-full h-[240px] relative">
                                <img
                                    src="/Contact/Map.png"
                                    alt="Office Location Map"
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute inset-0 border-2 border-[#4FC5E0] rounded-[20px] pointer-events-none z-10"></div>

                            {/* Office Address with Icon - Inside Map Card */}
                            {/* <div className="p-5 flex items-start gap-3">
                <div 
                  className="flex-shrink-0 rounded-full flex items-center justify-center"
                  style={{
                    width: '48px',
                    height: '48px',
                    background: '#1566B7'
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="white"/>
                  </svg>
                </div>
                <div>
                  <h3 
                    className="text-[#011632] mb-1"
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: '18px',
                      fontWeight: 700,
                      lineHeight: '140%'
                    }}
                  >
                    Office Address
                  </h3>
                  <p 
                    className="text-[#3C4959]"
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: '14px',
                      fontWeight: 400,
                      lineHeight: '160%'
                    }}
                  >
                    ANR 033, Astra Tower, Action Area-2C,<br />
                    New Town, Kolkata – 700161, India
                  </p>
                </div>
              </div> */}
                        </div>

                        {/* Email Card */}
                        <div
                            className="bg-white rounded-[20px] p-5"
                            style={{
                                border: '2px solid #4FC5E0'
                            }}
                        >
                            <div className="flex items-center gap-3">
                                <div
                                    className="flex-shrink-0 rounded-full flex items-center justify-center"
                                    style={{
                                        width: '48px',
                                        height: '48px',
                                        background: '#1566B7'
                                    }}
                                >
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="white" />
                                    </svg>
                                </div>
                                <div>
                                    <h3
                                        className="text-[#011632] mb-1"
                                        style={{
                                            fontFamily: 'DM Sans, sans-serif',
                                            fontSize: '18px',
                                            fontWeight: 700,
                                            lineHeight: '140%'
                                        }}
                                    >
                                        Email Address
                                    </h3>
                                    <a
                                        href="mailto:info@atharvhealthcare.com"
                                        className="text-[#3C4959] hover:text-[#1566B7] transition-colors underline"
                                        style={{
                                            fontFamily: 'DM Sans, sans-serif',
                                            fontSize: '14px',
                                            fontWeight: 400,
                                            lineHeight: '160%',
                                            textDecoration: 'underline'
                                        }}
                                    >
                                        info@atharvhealthcare.com
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Phone Card */}
                        <div
                            className="bg-white rounded-[20px] p-5"
                            style={{
                                border: '2px solid #4FC5E0'
                            }}
                        >
                            <div className="flex items-center gap-3">
                                <div
                                    className="flex-shrink-0 rounded-full flex items-center justify-center"
                                    style={{
                                        width: '48px',
                                        height: '48px',
                                        background: '#1566B7'
                                    }}
                                >
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.62 10.79C8.06 13.62 10.38 15.93 13.21 17.38L15.41 15.18C15.68 14.91 16.08 14.82 16.43 14.94C17.55 15.31 18.76 15.51 20 15.51C20.55 15.51 21 15.96 21 16.51V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z" fill="white" />
                                    </svg>
                                </div>
                                <div>
                                    <h3
                                        className="text-[#011632] mb-1"
                                        style={{
                                            fontFamily: 'DM Sans, sans-serif',
                                            fontSize: '18px',
                                            fontWeight: 700,
                                            lineHeight: '140%'
                                        }}
                                    >
                                        Phone Number
                                    </h3>
                                    <a
                                        href="tel:+919902844800"
                                        className="text-[#3C4959] hover:text-[#1566B7] transition-colors"
                                        style={{
                                            fontFamily: 'DM Sans, sans-serif',
                                            fontSize: '14px',
                                            fontWeight: 400,
                                            lineHeight: '160%'
                                        }}
                                    >
                                        +91-99028 44800 99393 39933
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Right Column - Contact Form */}
                    <div
                        className="rounded-[20px] w-full max-w-[595px] mx-auto lg:mx-0"
                        style={{
                            background: 'rgba(212, 238, 249, 0.5)',
                            border: '2px solid #4FC5E0',
                            padding: '32px'
                        }}
                    >
                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                            {/* First Name & Last Name Row */}
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label
                                        htmlFor="firstName"
                                        className="block mb-2 text-[#142349]"
                                        style={{
                                            fontFamily: 'DM Sans, sans-serif',
                                            fontSize: '14px',
                                            fontWeight: 500
                                        }}
                                    >
                                        First name<span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        placeholder="First name"
                                        required
                                        style={{
                                            width: '100%',
                                            height: '48px',
                                            borderRadius: '10px',
                                            border: '1px solid #B8D9E8',
                                            padding: '12px 16px',
                                            background: 'rgba(255, 255, 255, 0.7)',
                                            fontFamily: 'DM Sans, sans-serif',
                                            fontSize: '14px',
                                            outline: 'none'
                                        }}
                                        className="focus:border-[#1566B7] transition-colors placeholder:text-gray-400"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="lastName"
                                        className="block mb-2 text-[#142349]"
                                        style={{
                                            fontFamily: 'DM Sans, sans-serif',
                                            fontSize: '14px',
                                            fontWeight: 500
                                        }}
                                    >
                                        Last name<span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        placeholder="Last name"
                                        required
                                        style={{
                                            width: '100%',
                                            height: '48px',
                                            borderRadius: '10px',
                                            border: '1px solid #B8D9E8',
                                            padding: '12px 16px',
                                            background: 'rgba(255, 255, 255, 0.7)',
                                            fontFamily: 'DM Sans, sans-serif',
                                            fontSize: '14px',
                                            outline: 'none'
                                        }}
                                        className="focus:border-[#1566B7] transition-colors placeholder:text-gray-400"
                                    />
                                </div>
                            </div>

                            {/* Email Address */}
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block mb-2 text-[#142349]"
                                    style={{
                                        fontFamily: 'DM Sans, sans-serif',
                                        fontSize: '14px',
                                        fontWeight: 500
                                    }}
                                >
                                    Email Address<span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="you@company.com"
                                    required
                                    style={{
                                        width: '100%',
                                        height: '48px',
                                        borderRadius: '10px',
                                        border: '1px solid #B8D9E8',
                                        padding: '12px 16px',
                                        background: 'rgba(255, 255, 255, 0.7)',
                                        fontFamily: 'DM Sans, sans-serif',
                                        fontSize: '14px',
                                        outline: 'none'
                                    }}
                                    className="focus:border-[#1566B7] transition-colors placeholder:text-gray-400"
                                />
                            </div>

                            {/* Phone Number */}
                            <div>
                                <label
                                    htmlFor="phoneNumber"
                                    className="block mb-2 text-[#142349]"
                                    style={{
                                        fontFamily: 'DM Sans, sans-serif',
                                        fontSize: '14px',
                                        fontWeight: 500
                                    }}
                                >
                                    Phone number<span className="text-red-500">*</span>
                                </label>
                                <div className="flex gap-2">
                                    <div
                                        style={{
                                            width: '60px',
                                            height: '48px',
                                            borderRadius: '10px',
                                            border: '1px solid #B8D9E8',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            background: 'rgba(255, 255, 255, 0.7)',
                                            fontFamily: 'DM Sans, sans-serif',
                                            fontSize: '14px',
                                            color: '#142349'
                                        }}
                                    >
                                        +91
                                    </div>
                                    <input
                                        type="tel"
                                        id="phoneNumber"
                                        name="phoneNumber"
                                        value={formData.phoneNumber}
                                        onChange={handleChange}
                                        placeholder="+91 0000-00000"
                                        required
                                        style={{
                                            flex: 1,
                                            height: '48px',
                                            borderRadius: '10px',
                                            border: '1px solid #B8D9E8',
                                            padding: '12px 16px',
                                            background: 'rgba(255, 255, 255, 0.7)',
                                            fontFamily: 'DM Sans, sans-serif',
                                            fontSize: '14px',
                                            outline: 'none'
                                        }}
                                        className="focus:border-[#1566B7] transition-colors placeholder:text-gray-400"
                                    />
                                </div>
                            </div>

                            {/* State */}
                            <div>
                                <label
                                    htmlFor="state"
                                    className="block mb-2 text-[#142349]"
                                    style={{
                                        fontFamily: 'DM Sans, sans-serif',
                                        fontSize: '14px',
                                        fontWeight: 500
                                    }}
                                >
                                    State<span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="state"
                                    name="state"
                                    value={formData.state}
                                    onChange={handleChange}
                                    placeholder="Enter State"
                                    required
                                    style={{
                                        width: '100%',
                                        height: '48px',
                                        borderRadius: '10px',
                                        border: '1px solid #B8D9E8',
                                        padding: '12px 16px',
                                        background: 'rgba(255, 255, 255, 0.7)',
                                        fontFamily: 'DM Sans, sans-serif',
                                        fontSize: '14px',
                                        outline: 'none'
                                    }}
                                    className="focus:border-[#1566B7] transition-colors placeholder:text-gray-400"
                                />
                            </div>

                            {/* City & Pincode Row */}
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label
                                        htmlFor="city"
                                        className="block mb-2 text-[#142349]"
                                        style={{
                                            fontFamily: 'DM Sans, sans-serif',
                                            fontSize: '14px',
                                            fontWeight: 500
                                        }}
                                    >
                                        City<span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="city"
                                        name="city"
                                        value={formData.city}
                                        onChange={handleChange}
                                        placeholder="Enter City"
                                        required
                                        style={{
                                            width: '100%',
                                            height: '48px',
                                            borderRadius: '10px',
                                            border: '1px solid #B8D9E8',
                                            padding: '12px 16px',
                                            background: 'rgba(255, 255, 255, 0.7)',
                                            fontFamily: 'DM Sans, sans-serif',
                                            fontSize: '14px',
                                            outline: 'none'
                                        }}
                                        className="focus:border-[#1566B7] transition-colors placeholder:text-gray-400"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="pincode"
                                        className="block mb-2 text-[#142349]"
                                        style={{
                                            fontFamily: 'DM Sans, sans-serif',
                                            fontSize: '14px',
                                            fontWeight: 500
                                        }}
                                    >
                                        Pincode<span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="pincode"
                                        name="pincode"
                                        value={formData.pincode}
                                        onChange={handleChange}
                                        placeholder="Enter Pincode"
                                        required
                                        style={{
                                            width: '100%',
                                            height: '48px',
                                            borderRadius: '10px',
                                            border: '1px solid #B8D9E8',
                                            padding: '12px 16px',
                                            background: 'rgba(255, 255, 255, 0.7)',
                                            fontFamily: 'DM Sans, sans-serif',
                                            fontSize: '14px',
                                            outline: 'none'
                                        }}
                                        className="focus:border-[#1566B7] transition-colors placeholder:text-gray-400"
                                    />
                                </div>
                            </div>

                            {/* Select Your Query */}
                            <div>
                                <label
                                    htmlFor="query"
                                    className="block mb-2 text-[#142349]"
                                    style={{
                                        fontFamily: 'DM Sans, sans-serif',
                                        fontSize: '14px',
                                        fontWeight: 500
                                    }}
                                >
                                    Subject / Query<span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="query"
                                    name="query"
                                    value={formData.query}
                                    onChange={handleChange}
                                    placeholder="Enter your query"
                                    required
                                    style={{
                                        width: '100%',
                                        height: '48px',
                                        borderRadius: '10px',
                                        border: '1px solid #B8D9E8',
                                        padding: '12px 16px',
                                        background: 'rgba(255, 255, 255, 0.7)',
                                        fontFamily: 'DM Sans, sans-serif',
                                        fontSize: '14px',
                                        outline: 'none'
                                    }}
                                    className="focus:border-[#1566B7] transition-colors placeholder:text-gray-400"
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <label
                                    htmlFor="message"
                                    className="block mb-2 text-[#142349]"
                                    style={{
                                        fontFamily: 'DM Sans, sans-serif',
                                        fontSize: '14px',
                                        fontWeight: 500
                                    }}
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={4}
                                    style={{
                                        width: '100%',
                                        height: '88px',
                                        borderRadius: '10px',
                                        border: '1px solid #B8D9E8',
                                        padding: '10px 14px',
                                        background: 'rgba(255, 255, 255, 0.7)',
                                        fontFamily: 'DM Sans, sans-serif',
                                        fontSize: '14px',
                                        outline: 'none',
                                        resize: 'none'
                                    }}
                                    className="focus:border-[#1566B7] transition-colors"
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="hover:bg-[#1566B7] hover:text-white transition-all duration-300"
                                style={{
                                    width: '100%',
                                    height: '56px',
                                    borderRadius: '192px',
                                    border: '1.5px solid #1566B7',
                                    background: '#FFFFFF',
                                    fontFamily: 'DM Sans, sans-serif',
                                    fontSize: '16px',
                                    fontWeight: 600,
                                    letterSpacing: '0.02em',
                                    textTransform: 'uppercase',
                                    color: '#142349'
                                }}
                            >
                                {status === 'submitting' ? 'SUBMITTING...' : 'SUBMIT ENQUIRY'}
                            </button>

                            {/* Status Messages */}
                            {status === 'success' && (
                                <div className="text-green-600 text-center font-medium font-['DM_Sans']">
                                    Thank you! Your enquiry has been submitted successfully.
                                </div>
                            )}
                            {status === 'error' && (
                                <div className="text-red-500 text-center font-medium font-['DM_Sans']">
                                    Something went wrong. Please try again later.
                                </div>
                            )}

                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ContactUs;
