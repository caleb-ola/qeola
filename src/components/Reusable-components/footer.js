import "./footer.css";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer id="footer" className="pt-4 pb-2">
      <div className="container  my-3">
        <div className="row align-items-center text-center text-sm-start">
          <div className="col-12  col-lg-8">
            <div className="row">
              <div className="col-12 col-sm-6 my-3">
                <p className="my-0 ">
                  <small>Phone</small>
                </p>
                <h6 className="py-2 fs-5">
                  <small>+234 805 176 2471</small>
                </h6>
              </div>
              <div className="col-12 col-sm-6 my-3">
                <p className="my-0 ">
                  <small>Enquiries</small>
                </p>
                <h6 className="py-1 fs-5">
                  <small>consultation@qeola.com</small>
                </h6>
              </div>
            </div>
            <div className="row ">
              <div className="col-12 col-sm-6 my-3">
                <p className="my-0 fs-6">
                  <small>Address</small>
                </p>
                <h6 className="py-1 fs-5">
                  <small>
                    50, Ogbomoso-Ilorin Road, General, Ogbomoso, Oyo-State.
                  </small>
                </h6>
              </div>
              <div className="col-12 col-sm-6 my-3">
                <p className="my-0 ">
                  <small>Follow us</small>
                </p>
                <div className="row d-inline-block py-2">
                  <i className="fab fa-2x fa-behance d-inline"></i>
                  <i className="fab fa-2x fa-instagram d-inline"></i>
                  <i className="fab fa-2x fa-twitter d-inline"></i>
                  <i className="fab fa-2x fa-linkedin d-inline"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 px-3 px-sm-3">
            <p>
              <small>Subscribe to our newsletter</small>
            </p>
            <small>
              <input
                type="email"
                name="email"
                placeholder="yourname@xyx.com"
                className="p-3 w-100 rounded-pill"
              />
            </small>
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
