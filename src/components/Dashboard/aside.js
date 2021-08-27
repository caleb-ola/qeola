import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state";

const Aside = () => {
  const dispatch = useDispatch();
  const { mainWelcome, welcome, briefing, caseStudy, client, industry, media } =
    bindActionCreators(actionCreators, dispatch);

  const [active, setActive] = useState({
    blog: "",
    brief: "",
    case: "",
    client: "",
    industry: "",
    media: "",
  });

  const activeBlog = () => {
    setActive({
      blog: "active",
      brief: "",
      case: "",
      client: "",
      industry: "",
      media: "",
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
    });
    media();
  };

  return (
    <aside className="m-0 ">
      <div
        className="d-flex flex-column align-items-center mb-auto py-2"
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
          <i class="fas fa-industry me-2 p-0 ms-0"></i>Industry
        </a>
        <a
          className={
            active
              ? `btn dash-btn  d-flex align-items-center w-100 rounded-0 ${active.media}`
              : "btn dash-btn  d-flex align-items-center w-100 rounded-0"
          }
          onClick={activeMedia}
        >
          <i class="fas fa-medal me-2 p-0 ms-0"></i>Media mentions
        </a>
        <Link
          to="/"
          className="btn mt-auto logout-btn align-self-start d-flex align-items-center w-100 rounded-0 d-flex align-items-center fw-bold text-decoration-none shadow-none"
        >
          <i class="material-icons me-2 p-0 ms-0">logout</i> Logout
        </Link>
      </div>
    </aside>
  );
};

export default Aside;
