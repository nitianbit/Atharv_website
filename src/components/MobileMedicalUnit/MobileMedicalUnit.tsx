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
import FAQ from "./FAQ";
import Companies from "../Homepage/Companies";
import FullWidthImageSection from "./FullWidthImageSection";
import SecondStatsSection from "./SecondStatSection";
import MMUUseCases from "./MMUUseCases";
import ExperienceSection from "./ExperienceSection";
import MMUServicesSection from "./MMUServiceSection";

const MobileMedicalUnit = () => {
    return (
        <div>
            <Navbar />
            <LandingOverviewSection />
            <StatsSection />
            <FullWidthImageSection />
            <WhatIsOHCSection />
            <MMUServicesSection/>
            {/* <ServicesSection /> */}

            {/* <ComplianceSection /> */}
            {/* <MedicalServicesSection /> */}
            {/* <InfrastructureSection /> */}
            <StaffingSection />
            {/* <IndustriesSection /> */}
            <MMUUseCases/>
            <BenefitsSection />
            <HowItWorksSection />

            {/* <SocialProofSection /> */}
            <SecondStatsSection/>
            <ExperienceSection/>

            <Companies/>
            <FAQ />
            {/* <FinalCTASection /> */}
            <Callback />
            <Footer />
        </div>
    );
};

export default MobileMedicalUnit;
