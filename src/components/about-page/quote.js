// import { Link } from "react-router-dom";
import Cta1 from "../Reusable-components/cta1";

const Quote = () => {
  return (
    <section
      id="quote"
      className=""
      style={{
        backgroundImage: `url("images/About/banner_image.jpg")`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      <div className="container text-center position-relative">
        <div className="quote text-center mx-auto d-flex flex-column justify-content-center align-items-center">
          <p className="fw-bold fs-1 pb-3 lh-base ">
            We strive to create technological solutions that will help advance
            our client's business and solve real-life problems. But we go beyond
            and provide strategic guidance through advancements in technology.
          </p>

          <Cta1 text={"Send us your brief"} path={"contact"} />
        </div>
      </div>
    </section>
  );
};

export default Quote;
