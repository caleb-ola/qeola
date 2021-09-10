import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import "./contact.css";

const DashContact = (props) => {
  const [shrink, setShrink] = useState({
    mail: "",
    name: "",
    Num: "",
    proj: "",
    brief: "",
  });
  const [name, setName] = useState();
  const [category, setCategory] = useState();
  const [image, setImage] = useState();
  const [cat, setCat] = useState();
  const [catId, setCatId] = useState();
  const [dataForm, setDataForm] = useState();

  const ShrinkName = () => {
    setShrink({ mail: "", name: "shrink", Num: "", proj: "", brief: "" });
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

  let token = "";
  const Tokena = useSelector((state) => state.output);
  if (Tokena) {
    token = Tokena.token;
  }

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  };

  const Submit = (e) => {
    e.preventDefault();

    let formData = new FormData();
    formData.append("image", image);
    formData.append("name", name);
    formData.append("category", category);

    // setDataForm(formData);
    // console.log(formData.keys());

    axios
      .post(
        "https://qeola-api.herokuapp.com/api/v1/clients",
        {
          formData,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      );
  };
  console.log(image, name, category);
  const Options = () => {
    axios.get("https://qeola-api.herokuapp.com/api/v1/categories").then(
      (response) => {
        console.log(response);
        const tration = response.data.data.map((item) => {
          if (item) {
            // console.log(item.id + item.name);
            return (
              <option value={item.id} key={item.id}>
                {item.name}
              </option>
            );
          }
        });
        setCat(tration);
      },
      (error) => {
        console.log(error);
      }
    );
  };
  useEffect(() => {});
  // Options();
  return (
    <section id="contact" className="py-3">
      <div className="container">
        <div className="contact-header py-3 mx-auto">
          <h1 className="fs-2 fs-sm-1 fw-bold text-center">{props.title}</h1>
        </div>
        <div>
          <form onSubmit={Submit}>
            <div className="row pt-4 pb-2">
              <div
                className="col-12 col-md-6 my-3"
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
                  Client Name*
                </label>
                <br />
                <input
                  type="name"
                  name="name"
                  placeholder="Name of the client you want to add"
                  className="w-100 p-2 my-1 border-0 border-2 border-bottom"
                  onChange={(e) => setName(e.target.value)}
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
                    shrink.proj == "shrink"
                      ? `fs-6 fw-bold ${shrink.proj}`
                      : `fs-6 fw-bold`
                  }
                >
                  Category
                </label>
                <br />
                <select
                  id="project-type"
                  name="project-type"
                  className="w-100 p-2 my-2 border-0 border-2 border-bottom"
                  onChange={(e) => setCategory(e.target.value)}
                  onClick={Options}
                >
                  <option value="" disabled selected className="primary">
                    Make your selection
                  </option>
                  {cat}
                  {/* <option value="Branding" className="branding">
                    Branding
                  </option>
                  <option value="UI/UX Design">UI/UX Design</option>
                  <option value="Case Sturd">Case Sturdy</option>
                  <option value="Software Development">
                    Software Development
                  </option> */}
                </select>
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
                  Client Logo{" "}
                </label>
                <br />
                <div className="input-group my-1">
                  <input
                    type="text"
                    id="project-brief"
                    className="form-control rounded-0"
                    placeholder={`Attach the client's logo here `}
                    aria-label="Text input with attach button "
                    onChange={(e) => setImage(e.target.value)}
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
                        onChange={(e) => setImage(e.target.value)}
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
                  Post
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default DashContact;
