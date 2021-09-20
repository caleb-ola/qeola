import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state";
import propTypes from "prop-types";

const Aside = ({ setToken }) => {
  const dispatch = useDispatch();
  const {
    mainWelcome,
    welcome,
    briefing,
    caseStudy,
    client,
    industry,
    media,
    category,
    Logout,
  } = bindActionCreators(actionCreators, dispatch);

  const cred = useSelector((state) => state.output);

  const handleLogout = (e) => {
    e.preventDefault();
    Logout();
  };

  const [active, setActive] = useState({
    blog: "",
    brief: "",
    case: "",
    client: "",
    industry: "",
    media: "",
    category: "",
  });

  const activeBlog = () => {
    setActive({
      blog: "active",
      brief: "",
      case: "",
      client: "",
      industry: "",
      media: "",
      category: "",
    });
    mainWelcome();
  };

  const activeBrief = () => {
    setActive({
      blog: "",
      brief: "active",
      case: "",
      client: "",
      industry: "",
      media: "",
      category: "",
    });
    briefing();
  };

  const activeCase = () => {
    setActive({
      blog: "",
      brief: "",
      case: "active",
      client: "",
      industry: "",
      media: "",
      category: "",
    });
    caseStudy();
  };

  const activeClient = () => {
    setActive({
      blog: "",
      brief: "",
      case: "",
      client: "active",
      industry: "",
      media: "",
      category: "",
    });
    client();
  };

  const activeIndustry = () => {
    setActive({
      blog: "",
      brief: "",
      case: "",
      client: "",
      industry: "active",
      media: "",
      category: "",
    });
    industry();
  };

  const activeMedia = () => {
    setActive({
      blog: "",
      brief: "",
      case: "",
      client: "",
      industry: "",
      media: "active",
      category: "",
    });
    media();
  };
  const activeCategory = () => {
    setActive({
      blog: "",
      brief: "",
      case: "",
      client: "",
      industry: "",
      media: "",
      category: "active",
    });
    category();
  };

  return (
    <aside className="m-0 position-fixed">
      <div
        className="d-flex flex-column align-items-center mb-auto py-2 aside"
        style={{ height: "100vh" }}
      >
        <div className="avatar my-4 text-center">
          {/* <i class="material-icons fs-1">account_circle</i>{" "} */}
          <img
            src="images/logo.png"
            alt=""
            className="img-fluid w-50 mx-auto"
            onClick={() => welcome()}
          />
        </div>
        <a
          className={
            active
              ? `btn dash-btn  d-flex align-items-center w-100 rounded-0 ${active.blog}`
              : "btn dash-btn  d-flex align-items-center w-100 rounded-0"
          }
          onClick={activeBlog}
        >
          <i class="fas fa-blog me-2 p-0 ms-0"></i>Blog
        </a>

        <a
          className={
            active
              ? `btn dash-btn  d-flex align-items-center w-100 rounded-0 ${active.brief}`
              : "btn dash-btn  d-flex align-items-center w-100 rounded-0"
          }
          onClick={activeBrief}
        >
          <i class="fas fa-business-time me-2 p-0 ms-0 "></i>
          Brief
        </a>
        <a
          className={
            active
              ? `btn dash-btn  d-flex align-items-center w-100 rounded-0 ${active.case}`
              : "btn dash-btn  d-flex align-items-center w-100 rounded-0"
          }
          onClick={activeCase}
        >
          <i class="fas fa-file-alt me-2 p-0 ms-0"></i>Case studies
        </a>
        <a
          className={
            active
              ? `btn dash-btn  d-flex align-items-center w-100 rounded-0 ${active.client}`
              : "btn dash-btn  d-flex align-items-center w-100 rounded-0"
          }
          onClick={activeClient}
        >
          <i class="fas fa-smile-wink me-2 p-0 ms-0"></i>Client
        </a>
        <a
          className={
            active
              ? `btn dash-btn  d-flex align-items-center w-100 rounded-0 ${active.industry}`
              : "btn dash-btn  d-flex align-items-center w-100 rounded-0"
          }
          onClick={activeIndustry}
        >
          <i class="fas fa-industry me-2 p-0 ms-0"></i>Users
        </a>
        {/* <a
          className={
            active
              ? `btn dash-btn  d-flex align-items-center w-100 rounded-0 ${active.media}`
              : "btn dash-btn  d-flex align-items-center w-100 rounded-0"
          }
          onClick={activeMedia}
        >
          <i class="fas fa-medal me-2 p-0 ms-0"></i>Media mentions
        </a> */}
        <a
          className={
            active
              ? `btn dash-btn  d-flex align-items-center w-100 rounded-0 ${active.category}`
              : "btn dash-btn  d-flex align-items-center w-100 rounded-0"
          }
          onClick={activeCategory}
        >
          <i class="fas fa-medal me-2 p-0 ms-0"></i>Category
        </a>
        <Link
          to="/"
          className="btn mt-auto logout-btn align-self-start d-flex align-items-center w-100 rounded-0 d-flex align-items-center fw-bold text-decoration-none shadow-none"
          onClick={handleLogout}
        >
          <i class="material-icons me-2 p-0 ms-0">logout</i> Logout
        </Link>
      </div>
    </aside>
  );
};
// Aside.propTypes = {
//   setToken: propTypes.func.isRequired,
// };

export default Aside;
