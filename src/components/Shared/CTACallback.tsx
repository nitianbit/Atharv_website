import { useNavigate } from 'react-router-dom';

interface CTACallbackProps {
    title: string;
    description?: string;
    buttonText: string;
    imagePosition?: 'top' | 'bottom';
    buttonWidth?: string;
    useResponsiveBottom?: boolean;
    imageSrc?: string;
    imageAlt?: string;
    linkTo?: string;
    onButtonClick?: () => void;
}

const CTACallback = ({
    title,
    description,
    buttonText,
    imagePosition = 'top',
    buttonWidth,
    useResponsiveBottom = false,
    imageSrc = '/Homepage/maledoctor.png',
    imageAlt = 'Healthcare professional',
    linkTo,
    onButtonClick
}: CTACallbackProps) => {
    const navigate = useNavigate();
    return (
        <>

            <div className="w-full bg-white py-8 lg:py-12 px-4 lg:my-15">
                <div className="mx-auto" style={{ maxWidth: '1512px' }}>

                    {/* Main Container */}
                    <div
                        className={`relative flex flex-col lg:flex-row items-center overflow-hidden lg:overflow-visible mx-auto w-full lg:min-h-[380px]`}
                        style={{
                            maxWidth: '1311px',
                            borderRadius: '20px',
                            background: '#1566B7',
                            border: '3px solid #1566B7'
                        }}
                    >

                        {/* Doctor Image */}
                        <div
                            className={`absolute hidden lg:block ${useResponsiveBottom ? 'doctor-image-cta' : ''}`}
                            style={{
                                width: 'clamp(300px, 40vw, 531px)',
                                height: 'auto',
                                ...(imagePosition === 'bottom'
                                    ? { bottom: '0' }
                                    : { top: '-95px' }
                                ),
                                zIndex: 20,
                                maxHeight: '551px'
                            }}
                        >
                            <img
                                src={imageSrc}
                                alt={imageAlt}
                                className="w-full h-auto max-h-[551px] object-contain"
                                style={{
                                    objectPosition: imagePosition === 'bottom' ? 'bottom' : 'top',
                                    display: 'block',
                                    ...(imagePosition === 'bottom' && { verticalAlign: 'bottom' })
                                }}
                            />
                        </div>

                        {/* Content Section */}
                        <div
                            className="w-full flex flex-col items-center text-center lg:items-start lg:text-left p-6 sm:p-8 lg:p-8 lg:max-w-[593px] lg:ml-auto relative z-10"
                            style={{
                                gap: '13px'
                            }}
                        >

                            {/* Heading */}
                            <h2
                                className="w-full"
                                style={{
                                    fontFamily: "'Source Serif Pro', serif",
                                    fontWeight: 600,
                                    fontSize: 'clamp(28px, 5vw, 46px)',
                                    lineHeight: '121%',
                                    letterSpacing: '-0.02em',
                                    textTransform: 'capitalize',
                                    color: '#FFFFFF',
                                    margin: 0,
                                    wordWrap: 'break-word',
                                    overflowWrap: 'break-word'
                                }}
                                dangerouslySetInnerHTML={{ __html: title }}
                            />

                            {/* Description */}
                            {description && (
                                <p
                                    className="w-full"
                                    style={{
                                        fontFamily: "'DM Sans', sans-serif",
                                        fontWeight: 300,
                                        fontSize: 'clamp(16px, 2vw, 18px)',
                                        lineHeight: '30px',
                                        color: '#FFFFFF',
                                        margin: 0,
                                        wordWrap: 'break-word',
                                        overflowWrap: 'break-word'
                                    }}
                                    dangerouslySetInnerHTML={{ __html: description }}
                                />
                            )}

                            {/* Button */}
                            <button
                                onClick={() => {
                                    if (onButtonClick) {
                                        onButtonClick();
                                    } else if (linkTo) {
                                        navigate(linkTo);
                                    }
                                }}
                                className={`hover:opacity-90 transition-all hover:shadow-xl ${buttonWidth ? '' : 'w-full lg:w-[365px]'} lg:mx-0 mx-auto`}
                                style={{
                                    minHeight: '50px',
                                    borderRadius: '192px',
                                    padding: '16px 28px',
                                    background: '#FFFFFF',
                                    border: '1px solid #1566B7',
                                    boxShadow: '1px 6px 7.7px 0px rgba(49, 119, 225, 0.24)',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    ...(buttonWidth && { width: buttonWidth })
                                }}
                            >
                                <span
                                    className="text-center"
                                    style={{
                                        fontFamily: "'DM Sans', sans-serif",
                                        fontWeight: 600,
                                        fontSize: 'clamp(14px, 2vw, 16px)',
                                        lineHeight: '100%',
                                        textTransform: 'uppercase',
                                        color: '#142349',
                                        whiteSpace: 'normal',
                                        wordBreak: 'break-word'
                                    }}
                                >
                                    {buttonText}
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CTACallback;
