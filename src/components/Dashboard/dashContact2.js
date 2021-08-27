import { useState } from "react";
// import "./contact.css";

const DashContact2 = (props) => {
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
                className="col-12 col-md-12 my-3"
                onFocus={ShrinkName}
                onBlur={Enlarge}
              >
                <label
                  for="name"
                  className={
                    shrink.name == "shrink"
                      ? `fs-6 fw-bold ${shrink.name}`
                      : `fs-6 fw-bold`
                  }
                >
                  {props.name}
                </label>
                <br />
                <input
                  type="name"
                  name="name"
                  placeholder="Name of the client you want to add"
                  className="w-100 p-2 my-1 border-0 border-2 border-bottom"
                />
              </div>

              <div
                className="col-12 col-md-12 my-3"
                onFocus={ShrinkBrief}
                onBlur={Enlarge}
              >
                <label
                  for="project-brief"
                  className={
                    shrink.brief == "shrink"
                      ? `fs-6 fw-bold ${shrink.brief}`
                      : `fs-6 fw-bold `
                  }
                >
                  {props.logo}{" "}
                </label>
                <br />
                <div className="input-group my-1">
                  <input
                    type="text"
                    id="project-brief"
                    className="form-control rounded-0"
                    placeholder={`Attach the client's logo here `}
                    aria-label="Text input with attach button "
                  />
                  <button
                    type="button"
                    className="btn attach-button rounded-0  shadow-none"
                  >
                    <label>
                      <i className="material-icons attach-btn fs-2">
                        attach_file
                      </i>{" "}
                      <input
                        type="file"
                        name="myfile"
                        style={{ display: "none" }}
                      />
                    </label>
                  </button>
                </div>
              </div>

              <div className="col-12 col-md-12 my-2 text-center">
                <button
                  type="submit"
                  className="contact-submit shadow-none btn rounded-pill py-3 my-4 w-50 fw-bold"
                >
                  {props.btn}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default DashContact2;
