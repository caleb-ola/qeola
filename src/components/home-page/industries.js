import CardIndustry from "../Reusable-components/card_industry";
import "./industries.css";

const Industries = () => {
  return (
    <section id="industries" className="industries py-5">
      <div className="container text-center text-md-start">
        <div className="Section-header py-5">
          <h1 className="fs-2 fs-sm-1 fw-bold">Industries we have served</h1>
        </div>
        <div className="row align-items-center ">
          <div className="col-6 col-lg-3 col-md-4 px-1 p-3">
            <CardIndustry
              title={"Eduaction"}
              image={"images/Home/icons/education.png"}
            />
          </div>
          <div className="col-6 col-lg-3 col-md-4 px-1 ">
            <CardIndustry
              title={"Health"}
              image={"images/Home/icons/health.png"}
            />
          </div>
          <div className="col-6 col-lg-3 col-md-4 px-1 ">
            <CardIndustry
              title={"Agriculture"}
              image={"images/Home/icons/agriculture.png"}
            />
          </div>
          <div className="col-6 col-lg-3 col-md-4 px-1 ">
            <CardIndustry
              title={"Startup and Venture Capital"}
              image={"images/Home/icons/startup_and_venture_capital.png"}
            />
          </div>

          <div className="col-6 col-lg-3 col-md-4 px-1">
            <CardIndustry
              title={"Faith"}
              image={"images/Home/icons/faith.png"}
            />
          </div>
          <div className="col-6 col-lg-3 col-md-4 px-1 ">
            <CardIndustry
              title={"Consulting"}
              image={"images/Home/icons/consulting.png"}
            />
          </div>
          <div className="col-6 col-lg-3 col-md-4 px-1 ">
            <CardIndustry
              title={"Social Impact"}
              image={"images/Home/icons/social_impact.png"}
            />
          </div>
          <div className="col-6 col-lg-3 col-md-4 px-1 ">
            <CardIndustry
              title={"Startup and Venture Capital"}
              image={"images/Home/icons/finance_and_insurance.png"}
            />
          </div>
          <div className="col-6 col-lg-3 col-md-4 px-1 ">
            <CardIndustry
              title={"Real Estate"}
              image={"images/Home/icons/real_estate.png"}
            />
          </div>
          <div className="col-6 col-lg-3 col-md-4 px-1 ">
            <CardIndustry
              title={"Talent Outsourcing"}
              image={"images/Home/icons/talent_outsourcing.png"}
            />
          </div>

          {/* <div className="col text-start p-3">
            {" "}
            <img
              src="images/Home/icons/education.png"
              alt="Industry Icon"
              className="img-fluid px-5 py-3"
            />
            <h6>Education</h6>
          </div>
          <div className="col text-start p-3 pl-0">
            <img
              src="images/Home/icons/health.png"
              alt="Industry Icon"
              className="img-fluid px-5 py-3 pl-0"
            />
            <h5>Health</h5>
          </div>
          <div className="col text-start p-3">
            {" "}
            <img
              src="images/Home/icons/agriculture.png"
              alt="Industry Icon"
              className="img-fluid px-5 py-3"
            />
            <h5>Agriculture</h5>
          </div>
          <div className="col text-start p-3">
            {" "}
            <img
              src="images/Home/icons/startup_and_venture_capital.png"
              alt="Industry Icon"
              className="img-fluid px-5 py-3"
            />
            <h5>Startup and Venture Capital</h5>
          </div>
        </div>
        <div className="row">
          <div className="col text-start p-3 mx-3">
            {" "}
            <img
              src="images/Home/icons/education.png"
              alt="Industry Icon"
              className="img-fluid px-5 py-3"
            />
            <h6>Education</h6>
          </div>
          <div className="col text-start p-3 mx-3">
            <img
              src="images/Home/icons/health.png"
              alt="Industry Icon"
              className="img-fluid px-5 py-3"
            />
            <h6>Health</h6>
          </div>
          <div className="col text-start p-3 mx-3">
            {" "}
            <img
              src="images/Home/icons/agriculture.png"
              alt="Industry Icon"
              className="img-fluid px-5 py-3"
            />
            <h6>Agriculture</h6>
          </div>
          <div className="col text-start p-3 mx-3">
            {" "}
            <img
              src="images/Home/icons/startup_and_venture_capital.png"
              alt="Industry Icon"
              className="img-fluid px-5 py-3"
            />
            <h6>Startup and Venture Capital</h6>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Industries;
