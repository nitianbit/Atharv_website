import CTACallback from '../Shared/CTACallback';

const Callback = () => {
    return (
        <CTACallback
            title="Need healthcare help?<br/>We'll call you back."
            description="Tell us briefly what you need — <strong>online doctor consultation, medicines, lab tests, or ambulance service</strong>."
            buttonText="REQUEST A CALL BACK"
            imagePosition="bottom"
            buttonWidth="267px"
            useResponsiveBottom={true}
        />
    );
};

export default Callback;
