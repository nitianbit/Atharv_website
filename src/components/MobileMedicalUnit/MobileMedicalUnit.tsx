import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Callback from "../Homepage/Callback";
import LandingOverviewSection from "./LandingOverviewSection";
import StatsSection from "./StatsSection";
import WhatIsOHCSection from "./WhatIsOHCSection";
import ServicesSection from "./ServicesSection";
import ComplianceSection from "./ComplianceSection";
import MedicalServicesSection from "./MedicalServicesSection";
import InfrastructureSection from "./InfrastructureSection";
import StaffingSection from "./StaffingSection";
import IndustriesSection from "./IndustriesSection";
import BenefitsSection from "./BenefitsSection";
import HowItWorksSection from "./HowItWorksSection";
import SocialProofSection from "./SocialProofSection";
// import FinalCTASection from "./FinalCTASection";
import FAQ from "../Homepage/FAQ";
import Companies from "../Homepage/Companies";
import FullWidthImageSection from "./FullWidthImageSection";
import SecondStatsSection from "./SecondStatSection";

const MobileMedicalUnit = () => {
    return (
        <div>
            <Navbar />
            <LandingOverviewSection />
            <StatsSection />
            <WhatIsOHCSection />
            <ServicesSection />

            <ComplianceSection />
            <MedicalServicesSection />
            <InfrastructureSection />
            <StaffingSection />
            <FullWidthImageSection />
            <IndustriesSection />
            <BenefitsSection />
            <HowItWorksSection />
            <SocialProofSection />
            <SecondStatsSection/>
            <Companies/>
            <FAQ />
            {/* <FinalCTASection /> */}
            <Callback />
            <Footer />
        </div>
    );
};

export default MobileMedicalUnit;
