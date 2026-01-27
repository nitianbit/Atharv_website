import Footer from "../Footer/Footer";
import Callback from "../Homepage/Callback";
import Navbar from "../Navbar/Navbar";
import BlogDetail from "./BlogDetail";
import RelatedArticles from "./RelatedArticles";

const BlogDetails = () => {
    return (
        <div>
            <Navbar />
            <BlogDetail />
            <RelatedArticles />
            <Callback />
            <Footer />
        </div>
    );
};

export default BlogDetails;
