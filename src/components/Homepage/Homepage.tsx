import Navbar from "../Navbar/Navbar"
import Callback from "./Callback"
import CSRCommunity from "./CSRCommunity"
import LandingPage from "./LandingPage"
import Stats from "./Stats"
import ThreeStep from "./ThreeStep"

const Homepage = () => {
    return (
        <div>
            <Navbar />
            <LandingPage />
            <Stats />
            <ThreeStep />
            <CSRCommunity />
            <Callback />
        </div>
    )
}

export default Homepage
