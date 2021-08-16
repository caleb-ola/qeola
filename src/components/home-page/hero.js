import ReactPlayer from "react-player";
import HeroVideo from "./vid.mp4";
// import { Link } from "react-router-dom";

import "./hero.css";

const Hero = () => {
  return (
    // <header style={{ backgroundImage: `url("images/Home/vid.mp4")` }}></header>
    <div className="hero-container">
      <ReactPlayer
        url={HeroVideo}
        playing
        loop
        muted
        width="100%"
        height="100%"
      />
      <div className="overlay">
        <div className="container">
          <div className="hero-text mx-auto ms-md-0 align-text-center justify-content-center text-center text-md-start">
            <h1 className="fw-bold fs-1">
              Your business is safe in our hands.
            </h1>
            <a href="#" className="btn hero-cta p-0 m-0 my-2">
              See the clients we have served{" "}
              <i class="fas fa-arrow-right m-2"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
