import "../home-page/hero.css";

const ProjectHero = () => {
  return (
    // <header style={{ backgroundImage: `url("images/Home/vid.mp4")` }}></header>
    <div
      className="hero-container"
      style={{
        backgroundImage: `url("images/Eridan/header_image.jpg")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "500px",
      }}
    >
      <div className="">
        <div className="container">
          <div className="hero-text mx-auto ms-md-0 align-text-center justify-content-center text-center text-md-start">
            <h1 className="fw-bold fs-1">Eridan </h1>
            <p className="btn hero-para p-0 m-0 my-2">
              Developing a brand identity for a venture buider{" "}
              {/* <i class="fas fa-arrow-right m-2"></i> */}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectHero;
