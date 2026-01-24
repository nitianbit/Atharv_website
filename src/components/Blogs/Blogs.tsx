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
        </div>
    );
};

export default Blogs;