// import Main from "../../components/Dashboard/main";
import BriefControl from "../../components/Dashboard/briefControl";
import CaseControl from "../../components/Dashboard/caseControl";
import ClientControl from "../../components/Dashboard/clientControl";
import DashContact from "../../components/Dashboard/dashContact";
import DashContact2 from "../../components/Dashboard/dashContact2";
import Editorial from "../../components/Dashboard/editor";
import IndustryControl from "../../components/Dashboard/industryControl";
import MainSpace from "../../components/Dashboard/mainSpace";
import MediaControl from "../../components/Dashboard/mediaControl";
import Output from "../../components/Dashboard/output";
import Welcome from "../../components/Dashboard/welcome";
import Contact from "../../components/Reusable-components/contact";
import { caseStudy } from "../actions";

const mainReducer = (state = "", action) => {
  switch (action.type) {
    case "WELCOME":
      return <Welcome />;
    case "BLOGGING":
      return <MainSpace texta={"Edit/ show blogs"} textb={"Add new blog"} />;
    case "BRIEFING":
      return <BriefControl />;
    case "CASE":
      return <CaseControl />;
    case "CLIENT":
      return <ClientControl />;
    case "INDUSTRY":
      return <IndustryControl />;
    case "MEDIA":
      return <MediaControl />;
    case "SHOW_BLOGS":
      return (
        <MainSpace
          texta={"Edit/ show blogs"}
          textb={"Add new blog"}
          output={<Output />}
        />
      );
    case "ADD_BLOG":
      return <Editorial />;
    case "SHOW_BRIEFS":
      return <BriefControl output={<Output />} />;
    case "ADD_BRIEF":
      return <Contact title={"Admin adding brief"} />;
    case "SHOW_CASE":
      return <CaseControl output={<Output />} />;
    case "ADD_CASE":
      return <Editorial />;
    case "SHOW_CLIENT":
      return <ClientControl output={<Output />} />;
    case "ADD_CLIENT":
      return <DashContact title={"Add Client"} />;
    case "SHOW_INDUSTRY":
      return <IndustryControl output={<Output />} />;
    case "ADD_INDUSTRY":
      return (
        <DashContact2
          title={"Add Industry"}
          btn={"Add Industy"}
          logo={"Industry Logo"}
          name={"Industry's Name"}
        />
      );
    case "SHOW_MEDIA":
      return <MediaControl output={<Output />} />;
    case "ADD_MEDIA":
      return (
        <DashContact2
          title={"Add Media Mention"}
          btn={"Add Media Mention"}
          logo={"Media Agency's Logo"}
          name={"Media Agency's Name"}
        />
      );
    default:
      return <Welcome />;
  }
};

export default mainReducer;
