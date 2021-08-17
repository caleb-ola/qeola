import { useState } from "react";
import "./contact.css";

const Contact = (props) => {
  const [shrink, setShrink] = useState({
    mail: "",
    name: "",
    Num: "",
    proj: "",
    brief: "",
  });

  const ShrinkMail = () => {
    setShrink({ mail: "shrink", name: "", Num: "", proj: "", brief: "" });
  };
  const ShrinkName = () => {
    setShrink({ mail: "", name: "shrink", Num: "", proj: "", brief: "" });
  };
  const ShrinkNum = () => {
    setShrink({ mail: "", name: "", Num: "shrink", proj: "", brief: "" });
  };
  const ShrinkProj = () => {
    setShrink({ mail: "", name: "", Num: "", proj: "shrink", brief: "" });
  };
  const ShrinkBrief = () => {
    setShrink({ mail: "", name: "", Num: "", proj: "", brief: "shrink" });
  };

  const Enlarge = () => {
    setShrink("");
  };

  return (
    <section id="contact" className="py-3">
      <div className="container">
        <div className="contact-header py-3 mx-auto">
          <h1 className="fs-2 fs-sm-1 fw-bold text-center">{props.title}</h1>
        </div>
        <div>
          <form>
            <div className="row pt-4 pb-2">
              <div
                className={`col-12 col-md-6 my-3`}
                onFocus={ShrinkMail}
                onBlur={Enlarge}
              >
                <label
                  for="email"
                  className={
                    shrink.mail == "shrink" ? `fs-6 ${shrink.mail}` : `fs-6 `
                  }
                >
                  Email Address*
                </label>
                <br />
                <input
                  type="email"
                  name="email"
                  placeholder="youremail@domain.com"
                  className="w-100 p-2 my-1 border-0 border-2 border-bottom"
                />
              </div>
              <div
                className="col-12 col-md-6 my-3"
                onFocus={ShrinkName}
                onBlur={Enlarge}
              >
                <label
                  for="name"
                  className={
                    shrink.name == "shrink" ? `fs-6 ${shrink.name}` : `fs-6`
                  }
                >
                  Name*
                </label>
                <br />
                <input
                  type="name"
                  name="name"
                  placeholder="Chukuema Adekunle"
                  className="w-100 p-2 my-1 border-0 border-2 border-bottom"
                />
              </div>

              <div
                className="col-12 col-md-6 my-3"
                onFocus={ShrinkNum}
                onBlur={Enlarge}
              >
                <label
                  for="number"
                  className={
                    shrink.Num == "shrink" ? `fs-6 ${shrink.Num}` : `fs-6 `
                  }
                >
                  Phone Number*
                </label>
                <br />
                <input
                  type="text"
                  name="text"
                  placeholder="0801 234 5678"
                  className="w-100 p-2 my-1 border-0 border-2 border-bottom "
                />
              </div>
              <div
                className="col-12 col-md-6 my-3"
                onFocus={ShrinkProj}
                onBlur={Enlarge}
              >
                <label
                  for="project-type"
                  className={
                    shrink.proj == "shrink" ? `fs-6 ${shrink.proj}` : `fs-6 `
                  }
                >
                  Project Type*
                </label>
                <br />
                <select
                  id="project-type"
                  name="project-type"
                  className="w-100 p-2 my-1 border-0 border-2 border-bottom"
                >
                  <option value="" disabled selected className="primary">
                    Make your selection
                  </option>
                  <option value="Branding" className="branding">
                    Branding
                  </option>
                  <option value="UI/UX Design">UI/UX Design</option>
                  <option value="Case Sturd">Case Sturdy</option>
                  <option value="Software Development">
                    Software Development
                  </option>
                </select>
              </div>

              <div
                className="col-12 col-md-12 my-3"
                onFocus={ShrinkBrief}
                onBlur={Enlarge}
              >
                <label
                  for="attachfile"
                  className={
                    shrink.brief == "shrink" ? `fs-6 ${shrink.brief}` : `fs-6 `
                  }
                >
                  Project Brief*
                </label>
                <br />
                <input
                  type="file"
                  id="attachfile"
                  name="attachfile"
                  // placeholder="dshfvbk"
                  title=" "
                  multiple
                  className="w-100 p-2 my-1 border-0 border-2 border-bottom"
                />
              </div>

              <div className="col-12 col-md-12 my-2">
                <button
                  type="submit"
                  className="contact-submit shadow-none btn rounded-pill py-3 my-4 w-100"
                >
                  Send us a brief
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;