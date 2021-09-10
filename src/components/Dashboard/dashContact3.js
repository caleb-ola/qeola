import { useState } from "react";
// import "./contact.css";
import axios from "axios";
import { useSelector } from "react-redux";

const DashContact3 = (props) => {
  const [shrink, setShrink] = useState({
    mail: "",
    name: "",
    Num: "",
    proj: "",
    brief: "",
  });
  const [name, setName] = useState();

  const ShrinkName = () => {
    setShrink({ mail: "", name: "shrink", Num: "", proj: "", brief: "" });
  };

  const Enlarge = () => {
    setShrink("");
  };

  let token = "";
  const Tokena = useSelector((state) => state.output);
  if (Tokena) {
    token = Tokena.token;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://qeola-api.herokuapp.com/api/v1/categories",
        { name },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then(
        (response) => {
          console.log(response);
        },
        (error) => console.log(error)
      );
  };

  return (
    <section id="contact" className="py-3">
      <div className="container">
        <div className="contact-header py-3 mx-auto">
          <h1 className="fs-2 fs-sm-1 fw-bold text-center">{props.title}</h1>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
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
                  placeholder="Name of the category you want to add"
                  className="w-100 p-2 my-1 border-0 border-2 border-bottom"
                  onChange={(e) => setName(e.target.value)}
                />
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

export default DashContact3;
