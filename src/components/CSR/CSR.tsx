import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Callback from "./Callback";
import WhatIsCSRSection from "./WhatIsCSRSection";
import ComplianceSection from "./ComplianceSection";
import MedicalServicesSection from "./MedicalServicesSection";
import InfrastructureSection from "./InfrastructureSection";

import BenefitsSection from "./BenefitsSection";
import HowItWorksSection from "./HowItWorksSection";
import SocialProofSection from "./SocialProofSection";
// import FinalCTASection from "./FinalCTASection";
import FAQ from "./FAQ";
import Companies from "../Homepage/Companies";
import LandingOverviewSection from "./LandingOverviewSection";
import SocialProofSection2 from "./SocialProofSection2";

const CSR = () => {
    return (
        <div>
            <Navbar />
            <LandingOverviewSection />
            <WhatIsCSRSection />
            <SocialProofSection />
            <ComplianceSection/>
            <MedicalServicesSection/>
            <InfrastructureSection/>
            
            <BenefitsSection/>
            <HowItWorksSection />
            <SocialProofSection2/>
            <Companies/>
            <FAQ />
            {/* <FinalCTASection /> */}
            <Callback />
            <Footer />
        </div>
    );
};

export default CSR;
