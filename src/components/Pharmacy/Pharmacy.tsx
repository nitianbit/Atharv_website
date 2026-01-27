import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Callback from "./Callback";
import LandingSection from "./LandingSection";
import ServiceModelSection from "./ServiceModelSection";
import WholesaleServicesSection from "./WholesaleServicesSection";
import HowWholesaleWorksSection from "./HowWholesaleWorksSection";
import IndustriesSupplySection from "./IndustriesSupplySection";
import RetailServicesSection from "./RetailServicesSection";
import ComplianceSection from "./ComplianceSection";
import FranchiseSection from "./FranchiseSection";
import FAQSection from "./FAQSection";

const Pharmacy = () => {
    return (
        <div>
            <Navbar />
            <LandingSection />
            <ServiceModelSection />
            <WholesaleServicesSection />
            <HowWholesaleWorksSection />
            <IndustriesSupplySection />
            <RetailServicesSection />
            <ComplianceSection />
            <FranchiseSection />
            <FAQSection />
            <Callback />
            <Footer />
        </div>
    );
};

export default Pharmacy;
