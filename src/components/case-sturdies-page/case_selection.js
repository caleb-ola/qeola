import { useState } from "react";
import ProjectRow from "../Reusable-components/project_row";
import ProjectRow2 from "../Reusable-components/project_row2";

const CaseSelection = () => {
  const [active, setActive] = useState({
    Allworks: "active",
    Branding: "",
    WebDesign: "",
    MobileApp: "",
    Marketing: "",
  });
  const [sturdies, setSturdies] = useState(
    <div>
      <ProjectRow2
        title={"Eridan"}
        content={
          "Eridan is a unique venture-building company located in Lagos."
        }
        image={"images/Case-study/eridan.jpg"}
      />
      <ProjectRow
        title={"Trifold App"}
        content={
          "Trifold is an all-encompassing marriage app that gives curated faith-based answers to prevailing issues."
        }
        image={"images/Case-study/trifold.jpg"}
      />
      <ProjectRow2
        title={"The Soul Clinic"}
        content={
          "The Soul Clinic is a company created to serve as a funnel for emotional health and mental rejuvenation."
        }
        image={"images/Case-study/tsc.jpg"}
      />
      <ProjectRow
        title={"Challengerec"}
        content={
          "ChallengeRec: Creating an Online Presence for a FinTech Recruitment Agency"
        }
        image={"images/Case-study/challengerec.jpg"}
      />
      <ProjectRow2
        title={"R.O's Branding"}
        content={
          "Remi Odunsi is a Nigerian Social Entrepreneur and Philanthropist, with business interests in the FMCG, Financial Services (banking and insurance), and automobile sectors."
        }
        image={"images/Case-study/R.O..jpg"}
      />
    </div>
  );

  const Allworks = () => {
    setActive({
      Allworks: "active",
      Branding: "",
      WebDesign: "",
      MobileApp: "",
      Marketing: "",
    });
    setSturdies(
      <div>
        <ProjectRow2
          title={"Eridan"}
          content={
            "Eridan is a unique venture-building company located in Lagos."
          }
          image={"images/Case-study/eridan.jpg"}
        />
        <ProjectRow
          title={"Trifold App"}
          content={
            "Trifold is an all-encompassing marriage app that gives curated faith-based answers to prevailing issues."
          }
          image={"images/Case-study/trifold.jpg"}
        />
        <ProjectRow2
          title={"The Soul Clinic"}
          content={
            "The Soul Clinic is a company created to serve as a funnel for emotional health and mental rejuvenation."
          }
          image={"images/Case-study/tsc.jpg"}
        />
        <ProjectRow
          title={"Challengerec"}
          content={
            "ChallengeRec: Creating an Online Presence for a FinTech Recruitment Agency"
          }
          image={"images/Case-study/challengerec.jpg"}
        />
        <ProjectRow2
          title={"R.O's Branding"}
          content={
            "Remi Odunsi is a Nigerian Social Entrepreneur and Philanthropist, with business interests in the FMCG, Financial Services (banking and insurance), and automobile sectors."
          }
          image={"images/Case-study/R.O..jpg"}
        />
      </div>
    );
  };

  const Branding = () => {
    setActive({
      Allworks: "",
      Branding: "active",
      WebDesign: "",
      MobileApp: "",
      Marketing: "",
    });
    setSturdies(
      <div>
        <ProjectRow2
          title={"Eridan"}
          content={
            "Eridan is a unique venture-building company located in Lagos."
          }
          image={"images/Case-study/eridan.jpg"}
        />

        <ProjectRow
          title={"R.O's Branding"}
          content={
            "Remi Odunsi is a Nigerian Social Entrepreneur and Philanthropist, with business interests in the FMCG, Financial Services (banking and insurance), and automobile sectors."
          }
          image={"images/Case-study/R.O..jpg"}
        />
      </div>
    );
  };

  const WebDesign = () => {
    setActive({
      Allworks: "",
      Branding: "",
      WebDesign: "active",
      MobileApp: "",
      Marketing: "",
    });
    setSturdies(
      <div>
        <ProjectRow
          title={"Trifold App"}
          content={
            "Trifold is an all-encompassing marriage app that gives curated faith-based answers to prevailing issues."
          }
          image={"images/Case-study/trifold.jpg"}
        />
        <ProjectRow2
          title={"The Soul Clinic"}
          content={
            "The Soul Clinic is a company created to serve as a funnel for emotional health and mental rejuvenation."
          }
          image={"images/Case-study/tsc.jpg"}
        />
        <ProjectRow
          title={"Challengerec"}
          content={
            "ChallengeRec: Creating an Online Presence for a FinTech Recruitment Agency"
          }
          image={"images/Case-study/challengerec.jpg"}
        />
      </div>
    );
  };

  const MobileApp = () => {
    setActive({
      Allworks: "",
      Branding: "",
      WebDesign: "",
      MobileApp: "active",
      Marketing: "",
    });
    setSturdies(
      <div>
        <ProjectRow
          title={"Trifold App"}
          content={
            "Trifold is an all-encompassing marriage app that gives curated faith-based answers to prevailing issues."
          }
          image={"images/Case-study/trifold.jpg"}
        />
      </div>
    );
  };

  const Marketing = () => {
    setActive({
      Allworks: "",
      Branding: "",
      WebDesign: "",
      MobileApp: "",
      Marketing: "active",
    });
    setSturdies(
      <div>
        <ProjectRow2
          title={"Trifold App"}
          content={
            "Trifold is an all-encompassing marriage app that gives curated faith-based answers to prevailing issues."
          }
          image={"images/Case-study/trifold.jpg"}
        />
        <ProjectRow
          title={"The Soul Clinic"}
          content={
            "The Soul Clinic is a company created to serve as a funnel for emotional health and mental rejuvenation."
          }
          image={"images/Case-study/tsc.jpg"}
        />
        <ProjectRow2
          title={"R.O's Branding"}
          content={
            "Remi Odunsi is a Nigerian Social Entrepreneur and Philanthropist, with business interests in the FMCG, Financial Services (banking and insurance), and automobile sectors."
          }
          image={"images/Case-study/R.O..jpg"}
        />
      </div>
    );
  };
  return (
    <div>
      <section id="case-study">
        <div className="container">
          <div className="my-5 pt-5">
            <button
              className={`shadow-none px-3 py-2 ${active.Allworks}`}
              onClick={Allworks}
            >
              All Works
            </button>
            <button
              className={`shadow-none px-3 py-2 ${active.Branding}`}
              onClick={Branding}
            >
              Branding
            </button>
            <button
              className={`shadow-none px-3 py-2 ${active.WebDesign}`}
              onClick={WebDesign}
            >
              Web Design
            </button>
            <button
              className={`shadow-none px-3 py-2 ${active.MobileApp}`}
              onClick={MobileApp}
            >
              Mobile App
            </button>
            <button
              className={`shadow-none px-3 py-2 ${active.Marketing}`}
              onClick={Marketing}
            >
              Marketing
            </button>
          </div>
          <div className="my-5">{sturdies}</div>
        </div>
      </section>
    </div>
  );
};

export default CaseSelection;
