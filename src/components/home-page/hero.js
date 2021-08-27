import ReactPlayer from "react-player";
import HeroVideo from "./vid.mp4";
import Typist from "react-typist";
// import { Link } from "react-router-dom";

import "./hero.css";
import { useEffect, useState } from "react";

const Hero = () => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    // document.title = `You clicked ${count} times`;
    console.log("Count: " + count);
    setCount(1);
  }, [count]);
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
              {count ? (
                <Typist avgTypingDelay={60} onTypingDone={() => setCount(0)}>
                  We Will Make Your Brand <span> Visible</span>
                  <Typist.Backspace count={7} delay={2500} />
                  <span> Memorable</span>
                  <Typist.Backspace count={9} delay={2500} />
                  <span> Lovable</span>
                  <Typist.Backspace count={7} delay={2500} />
                  <span> Accessible</span>
                  <Typist.Backspace count={10} delay={2500} />
                  <span> Powerful</span>
                  <Typist.Backspace count={8} delay={2500} />
                </Typist>
              ) : (
                ""
              )}
            </h1>

            <a href="#" className="btn hero-cta p-0 m-0 my-2 shadow-none">
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
