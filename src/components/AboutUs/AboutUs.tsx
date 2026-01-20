import Footer from "../Footer/Footer";
import Callback from "../Homepage/Callback";
import Companies from "../Homepage/Companies";
import Navbar from "../Navbar/Navbar";
import CSRHealthcare from "./CSRHealthcare";
import DirectorIntro from "./DirectorIntro";
import DoctorList from "./DoctorList";
import EcoSystem from "./EcoSystem";
import FixGap from "./FixGap";
import HealthFigerprint from "./HealthFigerprint";
import HealthTrust from "./HealthTrust";
import LandingPageAbout from "./LandingPageAbout";
import PracticalHealthcare from "./PracticalHealthcare";

const AboutUs = () => {
    return (
        <div>
            <Navbar />
            <LandingPageAbout />
            <PracticalHealthcare />
            <DirectorIntro />
            <Companies />
            <DoctorList />
            <FixGap />
            <CSRHealthcare />
            <HealthTrust />
            <EcoSystem />
            <HealthFigerprint />
            <Callback />
            <Footer />
        </div>  
    );
};

export default AboutUs;
