import { useState } from "react";
const ProcessCard = (props) => {
  const [hov, setHov] = useState(false);

  const HoverEffect = () => {
    setHov(true);
  };

  const HoverOut = () => {
    setHov(false);
  };

  let icon = hov;
  return (
    <div
      className="card py-2 px- m-2 my-3"
      styles={{ width: "17rem" }}
      onMouseOut={HoverOut}
      onMouseOver={HoverEffect}
    >
      <div className="p-5 pb-0 ps-3">
        <img
          src={`images/icons/${icon ? props.image2 : props.image}`}
          className="card-img-top img-fluid w-25 "
          alt={props.alt}
        />
      </div>

      <div className="card-body">
        <h5 className="card-title fs-4 fw-bold">{props.title}</h5>
        <small>
          <p className="card-text">{props.text}</p>
        </small>
      </div>
    </div>
  );
};

export default ProcessCard;
