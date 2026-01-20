import Footer from "../Footer/Footer"
import Navbar from "../Navbar/Navbar"
import Blog from "./Blog"
import Callback from "./Callback"
import Companies from "./Companies"
import CSRCommunity from "./CSRCommunity"
import FAQ from "./FAQ"
import LandingPage from "./LandingPage"
import Network from "./Network"
import NewsUpdates from "./NewsUpdates"
import PanMap from "./PanMap"
import Services from "./Services"
import Stats from "./Stats"
import Testimonials from "./Testimonials"
import ThreeStep from "./ThreeStep"
import WhyAtharv from "./WhyAtharv"

const Homepage = () => {
    return (
        <div className="w-full overflow-x-hidden">
            <Navbar />
            <LandingPage />
            <Companies />
            <Services />
            <Stats />
            <WhyAtharv />
            <ThreeStep />
            <CSRCommunity />
            <Network />
            <Blog />
            <NewsUpdates />
            <PanMap />
            <Testimonials />
            <FAQ />
            <Callback />
            <Footer />
        </div>
    )
}

export default Homepage
