import { Link } from "react-router-dom";
import Cta2 from "../Reusable-components/cta2";
import ProjectRow from "../Reusable-components/project_row";
import ProjectRow2 from "../Reusable-components/project_row2";

// CSS
import "./projects.css";

const Projects = () => {
  return (
    <section id="projects" className="py-4 py-sm-5">
      <div className="container">
        <ProjectRow2
          title={"Eridan"}
          content={
            "Eridan is a unique venture-building company located in Lagos."
          }
          image={"images/Home/eridan.jpg"}
        />
        <ProjectRow
          title={"Trifold App"}
          content={
            "Trifold is an all-encompassing marriage app that gives curated faith-based answers to prevailing issues."
          }
          image={"images/Home/trifold.jpg"}
        />
        <ProjectRow2
          title={"The Soul Clinic"}
          content={
            "The Soul Clinic is a company created to serve as a funnel for emotional health and mental rejuvenation."
          }
          image={"images/Home/tsc.jpg"}
        />
        <div className="text-center my-3 my-md-5">
          {/* <Link
            to="/case-study"
            className="btn more-clients-btn p-0 fw-bold shadow-none"
          >
            View more case studies <i class="fas fa-arrow-right m-2"></i>
          </Link> */}
          <Cta2
            text={"View more case studies"}
            xclass={"fw-bold"}
            path={"case-study"}
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
