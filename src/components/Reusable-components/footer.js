import { useState } from "react";
import "./footer.css";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  const [email, setEmail] = useState("");
  // console.log(email);

  return (
    <footer id="footer" className="pt-4 pb-2 pt-sm-5 pb-sm-4 mt-5 ">
      <div className="container  my-3 my-sm-4">
        <div className="row  text-center text-sm-start">
          <div className="col-12  col-lg-8">
            <div className="row">
              <div className="col-12 col-sm-6 my-3 my-sm-4">
                <p className="my-1 ">
                  <small>Phone</small>
                </p>
                <h6 className="py-2">+234 805 176 2471</h6>
              </div>
              <div className="col-12 col-sm-6 my-3 my-sm-4">
                <p className="my-1 ">
                  <small>Enquiries</small>
                </p>
                <h6 className="py-1">consultation@qeola.com</h6>
              </div>
            </div>
            <div className="row ">
              <div className="col-12 col-sm-6 my-3  my-sm-4">
                <p className="my-1 fs-6">
                  <small>Address</small>
                </p>
                <h6 className="py-1 fs-6">
                  50, Ogbomoso-Ilorin Road, General, Ogbomoso, Oyo-State.
                </h6>
              </div>
              <div className="col-12 col-sm-6 my-3  my-sm-4">
                <p className="my-1 ">
                  <small>Follow us</small>
                </p>
                <div className="row d-inline-block py-1 fs-6">
                  <i className="fab fs-4 fa-behance d-inline mx-1"></i>
                  <i className="fab fs-4 fa-instagram d-inline mx-1"></i>
                  <i className="fab fs-4 fa-twitter d-inline mx-1"></i>
                  <i className="fab fs-4 fa-linkedin d-inline mx-1"></i>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="col-12 col-lg-4 px-3 px-sm-3 ">
            <p>
              <small>Subscribe to our newsletter</small>
            </p>
            <input
              type="email"
              name="email"
              placeholder="yourname@xyx.com"
              className="p-3 w-100 rounded-pill fs-6 form-control"
              aria-describedby="button-addon2"
            />
            <button
              class="btn btn-outline-secondary"
              type="button"
              id="button-addon2"
            >
              Button
            </button>
          </div> */}
          <div className="col-12 col-lg-4 px-3 px-sm-3 subscribe my-3 my-sm-4">
            <p className="my-1 fs-6">
              <small>Address</small>
            </p>
            <div className="input-group mb-3 rounded-pill py-2">
              <input
                type="text"
                value={email}
                className="form-control p-3  fs-6 border-end-0"
                placeholder="yourname@xyx.com"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                className="btn border border-2 border-start-0 pe-4"
                type="submit"
                id="button-addon2"
              >
                <i className="fas fa-2x fa-long-arrow-alt-right"></i>
                {/* <i class="material-icons">arrow_right_alt</i> */}
              </button>
            </div>
          </div>
        </div>
        <div className="row text-center mt-5 ">
          <p>
            <small> &copy; {year} Qeola Limited</small>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
