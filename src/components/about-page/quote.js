import { Link } from "react-router-dom";

const Quote = () => {
  return (
    <section
      id="quote"
      className="py-5 my-2"
      style={{
        backgroundImage: `url("images/About/banner_image.jpg")`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
      }}
    >
      <div className="container">
        <p className="fw-bold fs-4 text-center pt-5 mt-5 pb-3 lh-base">
          We strive to create technological solutions that will help advance our
          client's business and solve real-life problems. But we go beyond and
          provide strategic guidance through advancements in technology.
        </p>
        <div className="text-center pt-4 pb-5">
          <Link to="/contact" className="btn shadow-none quote-cta">
            Send us your brief <i class="fas fa-arrow-right m-2"></i>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Quote;
