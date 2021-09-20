import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Cta2 from "../Reusable-components/cta2";
import Cta3 from "../Reusable-components/cta3";

const ProjBody = (props) => {
  const proj = useSelector((state) => state.output);
  const [body, setBody] = useState();

  const createMarkup = () => {
    return { __html: props.content };
  };

  return (
    <section id="project-body" className="">
      <div className="container">
        <div className="row justify-content-center">
          <div
            className="text-Justify pt-5 pb-3 mt-md-4"
            dangerouslySetInnerHTML={createMarkup()}
          />
          {/* <h1 className="fs-3 fw-bold">The Challenge</h1>
            <p>
              The company needed a brand identity to reflect its vision, mission
              and values. It needed design brand strategies with a long term
              view.
            </p>
          </div>
          <img
            src="images/Eridan/Stationary.jpg"
            alt="project image"
            className="img-fluid"
          />
        </div>
        <div className="second-header text-start py-4 mt-4">
          <h1 className="fs-3 fw-bold">The Solution</h1>
          <p>
            Brand Strategy <br /> Visual Identity
            <br /> Web Strategy and Design
          </p>
        </div>
      </div>
      <div className="">
        <img
          src="images/Eridan/wall-design.jpg"
          alt="Project wall design image"
          className="img-fluid"
        />
      </div>
      <div className="container">
        <div className="row my-3">
          <div className="col-12 col-md-6 p-5">
            <img
              src="images/Eridan/mockup.jpg"
              alt="mockup image"
              className="img-fluid"
            />
          </div>
          <div className="col-12 col-md-6 p-5">
            <img
              src="images/Eridan/mockup2.jpg"
              alt="mockup image"
              className="img-fluid"
            />
          </div>
        </div>

        <div className="second-header text-start pb-4">
          <h1 className="fs-3 fw-bold">Visual Identity</h1>
          <p>
            A logo was created for the company. This was translated into
            corporate function materials and visual identity standards and
            guidelines. A visual identity policy document was also developed.
          </p>
        </div>
      </div>

      <div id="visual-identity" className="visual-identity py-3">
        <div className="container">
          <div className="row my-3">
            <div className="col-12 col-md-4 p-5">
              <img
                src="images/Eridan/Eridan-color.jpg"
                alt="Project wall design image"
                className="img-fluid"
              />
            </div>
            <div className="col-12 col-md-4 p-5">
              <img
                src="images/Eridan/Eridan-coolors.jpg"
                alt="Project wall design image"
                className="img-fluid"
              />
            </div>
            <div className="col-12 col-md-4 p-5">
              <img
                src="images/Eridan/Eridan-logos.jpg"
                alt="Project wall design image"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="first-header text-start mt-5 pb-3 pt-5">
            <h1 className="fs-3 fw-bold">Web Strategy and Design</h1>
            <p>
              A highly responsive website which aligned with the brand's design
              policy was developed.
            </p>
          </div>
          <img
            src="images/Eridan/Responsive.jpg"
            alt="project image"
            className="img-fluid"
          />
        </div>
        <div className="text-center my-4 pt-5"> */}
          {/* <Link
            to="/project"
            className="btn prev-btn shadow-none p-0 text-decoration-none fw-bold pe-5"
          >
            <i class="fas fa-arrow-left m-2"></i> Previous Project
          </Link>
          <Link
            to="/project"
            className="btn next-btn shadow-none p-0 text-decoration-none fw-bold ps-5"
          >
            Next Project <i class="fas fa-arrow-right m-2"></i>
          </Link> */}

          <div className="text-center">
            <Cta3 textA={"Previous Project"} textB={"Next Project"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjBody;
