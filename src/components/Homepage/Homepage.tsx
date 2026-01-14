import Navbar from "../Navbar/Navbar"
import Blog from "./Blog"
import Callback from "./Callback"
import CSRCommunity from "./CSRCommunity"
import FAQ from "./FAQ"
import LandingPage from "./LandingPage"
import Network from "./Network"
import NewsUpdates from "./NewsUpdates"
import Services from "./Services"
import Stats from "./Stats"
import ThreeStep from "./ThreeStep"

const Homepage = () => {
    return (
        <div>
            <Navbar />
            <LandingPage />
            <Services />
            <Stats />
            <ThreeStep />
            <Network />
            <Blog />
            <NewsUpdates />
            <CSRCommunity />
            <FAQ />
            <Callback />
        </div>
    )
}

export default Homepage
