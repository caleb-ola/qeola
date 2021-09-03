import NavBar2 from "../Reusable-components/navbar2";
import OtherHero from "../Reusable-components/otherHero";
import Process from "./process";
import Quote from "./quote";
import Media from "./media";
import Footer from "../Reusable-components/footer";

import "./about.css";
const About = () => {
  return (
    <div id="about-section">
      <NavBar2 />

      <OtherHero
        title={"Qeola exists to make you look your best!"}
        text={
          "We are a full-service creative digital agency that helps SMBs take advantage of technology and use it to drive business growth. We combine strategic planning, design craftmanship, marketing expertise, and coding mastery to create online properties with a strong foundation and an eye for innovation."
        }
        cta={`Send us your brief`}
      />
      <Process />
      <Quote />
      <Media />
      <Footer />
    </div>
  );
};

export default About;
