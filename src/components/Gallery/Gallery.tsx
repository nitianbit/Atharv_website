import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import EventsHighLights from "./EventsHighLights";
import HealthInitiative from "./HealthInitiative";
import HealthProgram from "./HealthProgram";
import LandingPageGallery from "./LandingPageGallery";
import UpcomingEvent from "./UpcomingEvent";

const Gallery = () => {
    return (
        <div>
            <Navbar />
            <LandingPageGallery />
            <HealthProgram />
            <EventsHighLights/>
            <UpcomingEvent/>
            <HealthInitiative />
            <Footer />
        </div>
    );
};

export default Gallery;
