import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Header = () => {
  const [hamburger, setHamburger] = useState(false);
  const [navbg, setNavbg] = useState("");

  const ToggleHamburger = (e) => {
    setHamburger(hamburger ? false : true);
  };

  const ToggleNavBg = (e) => {
    setNavbg(window.pageYOffset > 100 ? "bg-dark" : "");
  };

  // useEffect(window.addEventListener("scroll", ToggleNavBg));

  return (
    <section id="navbar">
      <div className="">
        <nav
          class={`navbar fixed-top navbar-expand-lg navbar-light bg-light py-sm-4 bg-transparent ${navbg}`}
          onScroll={ToggleNavBg}
        >
          <div class="container">
            <Link class="navbar-brand me-auto" to="/">
              <img
                src="images/logo/white_logo.png"
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
                <li class="nav-item px-2">
                  <Link class="nav-link active" aria-current="page" to="/about">
                    About Us
                  </Link>
                </li>
                <li class="nav-item px-2">
                  <Link class="nav-link" to="/case-study">
                    Case Sturdies
                  </Link>
                </li>
                <li class="nav-item px-2">
                  <Link class="nav-link" to="/blog">
                    Blog
                  </Link>
                </li>
                <li class="nav-item ps-md-4 py-3 py-md-0">
                  <Link
                    class="nav-link cta px-5 py-2 text-center"
                    to="/contact"
                  >
                    Talk to us
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
