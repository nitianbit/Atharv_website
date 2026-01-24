import Navbar from "../Navbar/Navbar";
import BlogDetail from "./BlogDetail";
import RelatedArticles from "./RelatedArticles";

const BlogDetails = () => {
    return (
        <div className="pt-[160px]">
            <Navbar />
            <BlogDetail />
            <RelatedArticles />
        </div>
    );
};

export default BlogDetails;
