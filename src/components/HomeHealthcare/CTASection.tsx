import CTACallback from '../Shared/CTACallback';

const CTASection = () => {
    return (
        <CTACallback
            title="Get Reliable Home Healthcare Support"
            description="Coordinated care. Medical reliability. Delivered at home."
            buttonText="REQUEST HOME HEALTHCARE SUPPORT"
            imagePosition="bottom"
            useResponsiveBottom={true}
            linkTo="/contact"
        />
    );
};

export default CTASection;
