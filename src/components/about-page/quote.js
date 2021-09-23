import { Link } from "react-router-dom";
import Cta1 from "../Reusable-components/cta1";

const Quote = () => {
  return (
    <section
      id="quote"
      className="py-5"
      style={{
        backgroundImage: `url("images/About/banner_image.jpg")`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      <div className="container my-5 text-center">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <p className="fw-bold fs-2 pt-5 mt-5 pb-3 lh-base ">
            We strive to create technological solutions that will help advance
            our client's business and solve real-life problems. But we go beyond
            and provide strategic guidance through advancements in technology.
          </p>
          {/* <div className="text-center pt-4 pb-5">
          <Link to="/contact" className="btn shadow-none quote-cta fw-bold">
            Send us your brief <i class="fas fa-arrow-right m-2"></i>
          </Link>
        </div> */}
          <Cta1 text={"Send us your brief"} />
        </div>
      </div>
    </section>
  );
};

export default Quote;
