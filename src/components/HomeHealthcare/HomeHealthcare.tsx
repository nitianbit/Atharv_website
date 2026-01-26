import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Companies from "../Homepage/Companies";
import LandingSection from "./LandingSection";
import WhatIsHomeHealthcareSection from "./WhatIsHomeHealthcareSection";
import ServicesSection from "./ServicesSection";
import WhoIsItForSection from "./WhoIsItForSection";
import WhyIntegratedSection from "./WhyIntegratedSection";
import WhyChooseSection from "./WhyChooseSection";
import HowItWorksSection from "./HowItWorksSection";
import SafetyQualitySection from "./SafetyQualitySection";
import FAQSection from "./FAQSection";
import CTASection from "./CTASection";

const HomeHealthcare = () => {
    return (
        <div>
            <Navbar />
            <LandingSection />
            <WhatIsHomeHealthcareSection />
            <ServicesSection />
            <WhoIsItForSection />
            <WhyIntegratedSection />
            <WhyChooseSection />
            <HowItWorksSection />
            <SafetyQualitySection />
            <Companies />
            <FAQSection />
            <CTASection />
            <Footer />
        </div>
    );
};

export default HomeHealthcare;
