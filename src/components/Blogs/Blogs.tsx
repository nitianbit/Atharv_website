import Footer from "../Footer/Footer";
import Callback from "../Homepage/Callback";
import Navbar from "../Navbar/Navbar";
import AllBlogs from "./AllBlogs";
import BlogIntro from "./BlogIntro";
import LandingPageBlog from "./LandingPageBlog";
import LatestBlogs from "./LatestBlogs";

const Blogs = () => {
    return (
        <div>
            <Navbar />
            <LandingPageBlog />
            <BlogIntro />
            <LatestBlogs />
            <AllBlogs />
            <Callback />
            <Footer />
        </div>
    );
};

export default Blogs;