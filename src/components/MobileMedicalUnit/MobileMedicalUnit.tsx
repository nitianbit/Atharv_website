import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import LandingOverviewSection from "./LandingOverviewSection";
import StatsSection from "./StatsSection";
import WhatIsOHCSection from "./WhatIsOHCSection";
import StaffingSection from "./StaffingSection";
import BenefitsSection from "./BenefitsSection";
import HowItWorksSection from "./HowItWorksSection";
import Companies from "../Homepage/Companies";
import FullWidthImageSection from "./FullWidthImageSection";
import SecondStatsSection from "./SecondStatSection";
import MMUUseCases from "./MMUUseCases";
import ExperienceSection from "./ExperienceSection";
import MMUServicesSection from "./MMUServiceSection";
import FAQ from "./FAQ";
import CTACallback from "../Shared/CTACallback";

const MobileMedicalUnit = () => {
    return (
        <div className="overflow-hidden">
            <Navbar />
            <LandingOverviewSection />
            <StatsSection />
            <FullWidthImageSection />
            <WhatIsOHCSection />
            <MMUServicesSection/>
            <StaffingSection />
            <MMUUseCases/>
            <BenefitsSection />
            <HowItWorksSection />
            <SecondStatsSection/>
            <ExperienceSection/>
            <Companies/>
            <FAQ/>
            <CTACallback
                title="Partner With Atharv Healthcare for Mobile Medical Unit Programs "
                description="Structured deployment. Operational discipline. Pan-India capability. "
                buttonText="Request an MMU Program Proposal"
                imagePosition="bottom"
                buttonWidth="361px"
                useResponsiveBottom={true}
            />
            <Footer />
        </div>
    );
};

export default MobileMedicalUnit;
