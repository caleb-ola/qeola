import NavBar2 from "../Reusable-components/navbar2";
import BlogBody from "./blog-body";
import MoreArticles from "./more-articles";
import Footer from "../Reusable-components/footer";

import "./blog-details.css";
const BlogDetails = () => {
  return (
    <div>
      <NavBar2 />
      <BlogBody />
      <MoreArticles />
      <Footer />
    </div>
  );
};

export default BlogDetails;
