import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Header = () => {
  const [hamburger, setHamburger] = useState(false);
  const [navbg, setNavbg] = useState(false);
  const [proj, setProj] = useState(false);

  const ToggleHamburger = (e) => {
    setHamburger(hamburger ? false : true);
  };

  const ToggleNavBg = (e) => {
    setNavbg(window.pageYOffset > 100 ? "bg-dark" : "");
  };

  const ChangeBg = () => {
    if (window.scrollY >= 100) {
      setNavbg(true);
    } else {
      setNavbg(false);
    }
  };

  window.addEventListener("scroll", ChangeBg);
  // useEffect(window.addEventListener("scroll", ToggleNavBg));

  const OpenNav = () => {
    // document.getElementById("myNav").style.width = "100%";
    setProj(true);
  };

  const CloseNav = () => {
    // document.getElementById("myNav").style.width = "0%";
    setProj(false);
  };
  return (
    <section id="navbar" className="m-0">
      <div id="myNav" className={proj ? "over visible" : "over hidden"}>
        <div className="row align-items-center justify-content-center">
          <div
            className="col-12 col-md-8 left"
            style={{
              objectFit: "cover",
              height: "100vh",
            }}
          >
            <img
              src="images/Home/menu.jpg"
              alt="menu image"
              className=" menu-img img-fluid"
              style={{
                objectFit: "cover",
                // height: "100vh",
              }}
            />
          </div>
          <div
            className="col-12 col-md-4 position-relative d-flex flex-column"
            style={{
              objectFit: "cover",
              height: "100vh",
            }}
          >
            <a
              href="javascript:void(0)"
              className="closebtn fw-bold nav-link nav-linkB fs-5"
              onClick={CloseNav}
            >
              CLOSE {"  "} <i class="fas fa-times px-2"></i>
            </a>
            <div class="over-content text-center ">
              <Link to="/clients" className="fw-bold my-3 fs-3 nav-linkB">
                CLIENTS
              </Link>
              <Link to="/industries" className="fw-bold my-3 fs-3 nav-linkB ">
                INDUSTRIES
              </Link>
              <Link to="/blog" className="fw-bold my-3 fs-3 nav-linkB ">
                BLOG
              </Link>
            </div>
            <div className="row d-inline-block my-2 fs-4 text-center mt-auto ">
              <i className="fab fa-behance d-inline mx-2 social-icons"></i>
              <i className="fab fa-instagram d-inline mx-2 social-icons"></i>
              <i className="fab fa-twitter d-inline mx-2 social-icons"></i>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <nav
          class={
            navbg
              ? `navbar fixed-top navbar-expand-lg navbar-light bg-light py-sm-4 bg-transparent active`
              : `navbar fixed-top navbar-expand-lg navbar-light bg-light py-sm-4 bg-transparent`
          }
        >
          <div class="container">
            <Link class="navbar-brand me-auto" to="/">
              <img
                src={"images/white_logo.png"}
                alt="Qeola's logo"
                className="img-fluid w-50"
              />
            </Link>
            <button
              onClick={ToggleHamburger}
              class="navbar-toggler custom-toggler shadow-none border-0"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <div class={hamburger ? "animated-icon1 open" : "animated-icon1"}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>
            <div class="collapse navbar-collapse " id="navbarNavDropdown">
              <ul class="navbar-nav ms-auto">
                <li class="nav-item px-2 mx-2 fs-6">
                  <Link
                    class={
                      window.location.hash == "#/about"
                        ? "nav-link proj active"
                        : "nav-link proj"
                    }
                    aria-current="page"
                    to="/about"
                  >
                    About Us
                  </Link>
                </li>
                <li class="nav-item px-2 mx-2 fs-6">
                  <Link
                    class={
                      window.location.hash == "#/project"
                        ? "nav-link proj active"
                        : "nav-link proj"
                    }
                    to="/case-study"
                  >
                    Case Studies
                  </Link>
                </li>
                <li class="nav-item px-2 mx-2 fs-6">
                  <Link
                    class={
                      window.location.hash == "#/contact"
                        ? "nav-link proj active"
                        : "nav-link proj"
                    }
                    to="/contact"
                  >
                    Talk to us
                  </Link>
                </li>
                <li class="nav-item ps-md-3  px-3 px-sm-0 py-md-0 fs-6 ">
                  {/* <Link
                    class=""
                    to="/contact"
                  >
                    Talk to us
                  </Link> */}
                  <Link
                    style={{ cursor: "pointer" }}
                    className="nav-link "
                    onClick={OpenNav}
                  >
                    Menu &#9776;
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Header;
