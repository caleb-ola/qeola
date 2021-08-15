import { Link } from "react-router-dom";

const OtherHero = (props) => {
  return (
    <section id="other-hero">
      <div className="container">
        <div className="text-center  w-75 mx-auto my-3 mt-5 my-sm-5 pt-2 py-sm-3">
          <h1 className="mt-3 mb-3 fs-1 fw-bold">{props.title}</h1>
          <p className="mt-2 mb-3">{props.text}</p>
          <Link
            to="/case-study"
            className="btn more-clients-btn p-0 mt-1 mb-3 fw-bold shadow-none"
          >
            {props.cta} {props.cta && <i class="fas fa-arrow-right m-2"></i>}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OtherHero;
