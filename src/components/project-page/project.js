import Header from "../Reusable-components/navbar";
import Contact from "../Reusable-components/contact";
import ProjectHero from "./project_hero";
import ProjectBody from "./proj_body";
import Footer from "../Reusable-components/footer";

// CSS
import "./project.css";

const Project = () => {
  return (
    <div>
      <Header />
      <ProjectHero />
      <ProjectBody />
      <Contact title={"Inspired? Let’s Talk"} />
      <Footer />
    </div>
  );
};

export default Project;
