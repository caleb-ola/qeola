import NavBar2 from "../Reusable-components/navbar2";
import OtherHero from "../Reusable-components/otherHero";
import BlogSelection from "./blogSelection";
import Pagination from "../blog-details-page/pagination";
import Footer from "../Reusable-components/footer";

// CSS
import "./blog.css";

const Blog = () => {
  return (
    <div>
      <NavBar2 />
      <OtherHero title="Big Header Text Stays Here" />
      <BlogSelection />
      {/* <Pagination /> */}
      <Footer />
    </div>
  );
};

export default Blog;
