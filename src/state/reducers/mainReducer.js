// import Main from "../../components/Dashboard/main";
import BriefControl from "../../components/Dashboard/briefControl";
import CaseControl from "../../components/Dashboard/caseControl";
import CategoryControl from "../../components/Dashboard/categoryControl";
import ClientControl from "../../components/Dashboard/clientControl";
import Contact from "../../components/Dashboard/contact";
import DashContact from "../../components/Dashboard/dashContact";
import DashContact2 from "../../components/Dashboard/dashContact2";
import DashContact3 from "../../components/Dashboard/dashContact3";
import Editorial from "../../components/Dashboard/editor";
import EditorProj from "../../components/Dashboard/editorProj";
import IndustryControl from "../../components/Dashboard/industryControl";
import MainSpace from "../../components/Dashboard/mainSpace";
import MediaControl from "../../components/Dashboard/mediaControl";
import Output from "../../components/Dashboard/output";
import Welcome from "../../components/Dashboard/welcome";
// import { caseStudy } from "../actions";

const mainReducer = (state = "", action) => {
  switch (action.type) {
    case "WELCOME":
      return <Welcome api={action.payload} />;
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
    case "CATEGORY":
      return <CategoryControl />;
    case "SHOW_CATEGORIES":
      return <CategoryControl output={<Output />} />;
    case "ADD_CATEGORY":
      return (
        <DashContact3
          title={"Add Categories"}
          btn={"Add Category"}
          // logo={"Industry Logo"}
          name={"Category Name"}
        />
      );
    case "SHOW_BLOGS":
      return (
        <MainSpace
          texta={"Edit/ show blogs"}
          textb={"Add new blog"}
          output={<Output />}
        />
      );
    case "ADD_BLOG":
      return <Editorial title={"MAKE A BLOG POST"} />;
    case "SHOW_BRIEFS":
      return <BriefControl output={<Output />} />;
    case "ADD_BRIEF":
      return <Contact title={"Admin adding brief"} />;
    case "SHOW_CASE":
      return <CaseControl output={<Output />} />;
    case "ADD_CASE":
      return <EditorProj title={"ADD A NEW PROJECT"} />;
    case "SHOW_CLIENT":
      return <ClientControl output={<Output />} />;
    case "ADD_CLIENT":
      return <DashContact title={"Add Client"} posting={action.payload} />;
    case "SHOW_INDUSTRY":
      return <IndustryControl output={<Output />} />;
    case "ADD_INDUSTRY":
      return (
        <DashContact2
          title={"Search User by email"}
          btn={"Search"}
          // logo={"Industry Logo"}
          email={"User's email"}
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
      return <Welcome api={action.payload} />;
  }
};

export default mainReducer;
