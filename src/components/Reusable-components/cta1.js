import React, { useState } from "react";

const Cta1 = (props) => {
  const [animate, setAnimate] = useState(false);

  const ActiveAnime = () => {
    setAnimate(true);
  };
  const DeactiveAnime = () => {
    setAnimate(false);
  };
  return (
    <div>
      <a
        href="#"
        className={`btn hero-cta p-0 m-0 my-2 shadow-none ${props.xclass}`}
        onMouseOver={ActiveAnime}
        onMouseOut={DeactiveAnime}
      >
        {props.text}{" "}
        <i
          class={
            animate
              ? `fas fa-arrow-right m-2 animate`
              : `fas fa-arrow-right m-2`
          }
        ></i>
      </a>
    </div>
  );
};
export default Cta1;
