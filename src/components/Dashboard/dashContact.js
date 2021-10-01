import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { store } from "react-notifications-component";

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
  // const [alert, setAlert] = useState();
  // const [catId, setCatId] = useState();
  // const [dataForm, setDataForm] = useState();
  const [loading, setLoading] = useState(false);

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

  useEffect(() => {
    const timer = setTimeout(() => {
      Options();
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  let token = "";
  const Tokena = useSelector((state) => state.output);
  if (Tokena) {
    token = Tokena.token;
  }

  // const config = {
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //     "Content-Type": "multipart/form-data",
  //   },
  // };

  const Submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // console.log(e.target.input);

    const formdata = new FormData();
    formdata.append("image", image, image.name);
    formdata.append("name", name);
    formdata.append("category", category);
    // for (var pair of formdata.entries()) {
    //   console.log(pair[0] + ", " + pair[1]);
    // }

    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    async function postImage() {
      const res = await fetch(
        "https://qeola-api.herokuapp.com/api/v1/clients",
        requestOptions
      );
      const result = await res.json();
      // console.log(result);
      if (result.status === "success") {
        setLoading(false);
        store.addNotification({
          title: `SUCCESS`,
          message: "You added a new client",
          type: "success",
          insert: "top",
          container: "top-left",
          animationIn: ["animate__animated", "animate__fadeIn"],
          animationOut: ["animate__animated", "animate__fadeOut"],
          dismiss: {
            duration: 8000,
            onScreen: true,
          },
        });
      } else {
        setLoading(false);
        store.addNotification({
          title: `Sorry, check again`,
          message: "Something went wrong please try again",
          type: "danger",
          insert: "top",
          container: "top-left",
          animationIn: ["animate__animated", "animate__fadeIn"],
          animationOut: ["animate__animated", "animate__fadeOut"],
          dismiss: {
            duration: 8000,
            onScreen: true,
          },
        });
      }
      return result;
    }

    await postImage();
  };

  // console.log(image, name, category);
  const Options = () => {
    axios.get("https://qeola-api.herokuapp.com/api/v1/categories").then(
      (response) => {
        const tration = response.data.data.map((item) => {
          return (
            item && (
              <option value={item.id} key={item.id}>
                {item.name}
              </option>
            )
          );
        });
        setCat(tration);
      },
      (error) => {
        // console.log(error);
      }
    );
  };
  return (
    <main>
      <section id="contact" className="py-3">
        <div className="container">
          <div className="contact-header py-3 mx-auto">
            <ReactNotification />
            <h1 className="fs-2 fs-sm-1 mt-5 fw-bold text-center">
              {props.title}
            </h1>
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
                      shrink.name === "shrink"
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
                      shrink.proj === "shrink"
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
                    // onClick={Options}
                  >
                    <option value="" disabled selected className="primary">
                      Make your selection
                    </option>
                    {cat}
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
                      shrink.brief === "shrink"
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
                      onChange={(e) =>
                        setImage(e.target.files && e.target.files[0])
                      }
                      disabled
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
                          onChange={(e) => setImage(e.target.files[0])}
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
                    {loading ? (
                      <span
                        className="spinner-border spinner-border-sm"
                        role="status"
                        aria-hidden="true"
                      ></span>
                    ) : (
                      "Post"
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DashContact;
