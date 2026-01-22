import Footer from "../Footer/Footer"
import Callback from "../Homepage/Callback"
import Companies from "../Homepage/Companies"
import Navbar from "../Navbar/Navbar"
import LandingPageMMU from "./LandingPageMMU"
import MedicalUnit from "./MedicalUnit"
import MMUExperience from "./MMUExperience"
import MMUFAQ from "./MMUFAQ"
import MMUMedical from "./MMUMedical"
import MMUOperation from "./MMUOperation"
import MMUProgram from "./MMUProgram"
import MMUService from "./MMUService"
import MMUStaffing from "./MMUStaffing"
import MMUSupport from "./MMUSupport"
import UseCases from "./UseCases"

const MMU = () => {
    return (
        <div>
            <Navbar />
            <LandingPageMMU />
            <MMUOperation />
            <MedicalUnit />
            <MMUMedical />
            <MMUStaffing />
            <UseCases />
            <MMUService />
            <MMUProgram />
            <MMUSupport />
            <MMUExperience/>
            <Companies />
            <MMUFAQ />
            <Callback />
            <Footer />
        </div>
    )
}

export default MMU
