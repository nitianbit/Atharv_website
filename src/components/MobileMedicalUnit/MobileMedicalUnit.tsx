import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Callback from "../Homepage/Callback";
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
            <Callback />
            <Footer />
        </div>
    );
};

export default MobileMedicalUnit;
