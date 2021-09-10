import axios from "axios";
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
  const [email, setEmail] = useState();
  const [Output, setOutput] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`https://qeola-api.herokuapp.com/api/v1/users/get-user`, { email })
      .then(
        (response) => {
          console.log(response);
          const data = response.data.data;
          setOutput(
            response && (
              <div>
                <table>
                  <tr>
                    <th>S/N</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Date Registered</th>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>{data.name}</td>
                    <td>{data.email}</td>
                    <td>{data.createdAt}</td>
                  </tr>
                </table>
              </div>
            )
          );
        },
        (error) => {
          console.log(error);
          setOutput(
            error && (
              <div className="text-center">
                <h3 className="fw-bold">
                  USER NOT FOUND, PLEASE ENSURE THE EMAIL IS CORRECT, THANK YOU.
                </h3>
              </div>
            )
          );
        }
      );
  };

  const ShrinkName = () => {
    setShrink({ mail: "", name: "shrink", Num: "", proj: "", brief: "" });
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
                  {props.email}
                </label>
                <br />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter the user's email "
                  className="w-100 p-2 my-1 border-0 border-2 border-bottom"
                  required
                  onChange={(e) => setEmail(e.target.value)}
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
              <div className="col-12 col-md-12 my-2 text-center">{Output}</div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default DashContact2;
