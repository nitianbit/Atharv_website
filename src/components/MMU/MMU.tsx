import Footer from "../Footer/Footer"
import Callback from "../Homepage/Callback"
import Companies from "../Homepage/Companies"
import Navbar from "../Navbar/Navbar"
import LandingPageMMU from "./LandingPageMMU"
import MedicalUnit from "./MedicalUnit"
import MMUFAQ from "./MMUFAQ"
import MMUOperation from "./MMUOperation"
import UseCases from "./UseCases"

const MMU = () => {
    return (
        <div>
            <Navbar />
            <LandingPageMMU />
            <MMUOperation />
            <MedicalUnit />
            <UseCases />
            <Companies />
            <MMUFAQ />
            <Callback />
            <Footer />
        </div>
    )
}

export default MMU
