import { Link } from "react-router-dom";
import Cta2 from "../Reusable-components/cta2";
import "./more_clients.css";

const MoreClients = () => {
  return (
    <section id="more-clients" className="my-4">
      <div className="container">
        <div className="row py-2 align-content-center justify-content-center">
          <div className="col-6 col-lg-2 col-md-3  align-self-center text-center px-5 px-md-4 py-4">
            <img
              src="images/Clients/lushly.png"
              alt="client's brand logo"
              className="img-fluid"
            />
          </div>
          <div className="col-6 col-lg-2 col-md-3  align-self-center text-center px-5 px-md-4 py-4">
            <img
              src="images/Clients/awisewoman.png"
              alt="client's brand logo"
              className="img-fluid w-75"
            />
          </div>
          <div className="col-6 col-lg-2 col-md-3  align-self-center text-center px-5 px-md-4 py-4">
            <img
              src="images/Clients/trifold.png"
              alt="client's brand logo"
              className="img-fluid"
            />
          </div>
          <div className="col-6  col-lg-2 col-md-3 align-self-center text-center px-5 px-md-4 py-4">
            <img
              src="images/Clients/eridan.png"
              alt="client's brand logo"
              className="img-fluid"
            />
          </div>
          <div className="col-6 col-lg-2 col-md-3  align-self-center text-center px-5 px-md-4 py-4">
            <img
              src="images/Clients/sg_elton.png"
              alt="client's brand logo"
              className="img-fluid w-50"
            />
          </div>
          <div className="col-lg-2 col-md-6  align-self-center text-center m-0 p-0">
            <Cta2
              path={"/clients"}
              text={"See more clients"}
              xclass={"fw-bold"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoreClients;
