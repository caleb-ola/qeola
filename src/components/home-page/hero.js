import ReactPlayer from "react-player";
import HeroVideo from "./vid.mp4";
import Typical from "react-typical";
// import Typist from "react-typist";
// import { Link } from "react-router-dom";

import "./hero.css";
import { useEffect, useState } from "react";
import Cta1 from "../Reusable-components/cta1";

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
            <h1 className="fw-bold ">
              We Will Make Your Brand{" "}
              <Typical
                steps={[
                  "Visible",
                  2000,
                  "Memorable",
                  2000,
                  "Lovable",
                  2000,
                  "Accessible",
                  2000,
                  "Powerful",
                  2000,
                ]}
                loop={Infinity}
                wrapper="span"
              />
            </h1>

            <Cta1 text={"See the clients we have served"} xclass={"fw-bold"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
