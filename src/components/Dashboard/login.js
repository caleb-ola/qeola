import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import propTypes from "prop-types";
import "./admin.css";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const { Login } = bindActionCreators(actionCreators, dispatch);

  const cred = useSelector((state) => state.output);
  // if (cred) {
  //   setToken(cred.login.data.token);
  // }

  useEffect(() => {}, []);

  const Submit = (e) => {
    e.preventDefault();
    return Login(email, password);

    // axios
    //   .post("https://qeola-api.herokuapp.com/api/v1/auth/login", {
    //     email: email,
    //     password: password,
    //   })
    //   .then(
    //     (response) => {
    //       console.log(response);
    //       setToken(response.data.token);
    //     },
    //     (error) => {
    //       console.log(error);
    //     }
    //   );
  };
  return (
    <section
      id="login"
      className="login "
      style={{
        backgroundImage: `url("images/base.jpg")`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      {console.log(cred)}
      <div className="overlayb"></div>
      <div className="container">
        <div className="login-card mx-auto p-3 p-sm-4 rounded-3 ">
          <form onSubmit={Submit}>
            <div className="my-3 mb-4 text-center w-50 mx-auto">
              <img
                src="images/logo.png"
                alt="qeola icon"
                className="img-fluid w-75 my-2"
              />
            </div>
            <h2 className="fs-3 fw-bold my-3  text-center">Login</h2>

            <div className="my-3">
              <label for="username" className="fw-bold text-start">
                {" "}
                Email
              </label>{" "}
              <br />
              <input
                id="username"
                className="username w-100 p-1 border-0 border-2 border-bottom"
                type="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="my-3">
              <label for="password" className="fw-bold">
                {" "}
                Password
              </label>{" "}
              <br />
              <input
                id="password"
                className="password w-100 p-1  border-0 border-2 border-bottom"
                type="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mt-4">
              <button
                type="submit"
                className="my-1 btn contact-submit shadow-none w-100"
              >
                {" "}
                Login
              </button>
            </div>
            <div className="my-1">
              <Link
                to="/register"
                className=" btn back-to-home-btn w-100 shadow-none fs-6"
              >
                {" "}
                Not Registered?, Click to register
                <i class="fas fa-arrow-right m-2"></i>
              </Link>
              <Link
                to="/"
                className=" btn back-to-home-btn w-100 shadow-none fs-6"
              >
                {" "}
                <i class="fas fa-arrow-left m-2"></i> Back to home
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
// Login.propTypes = {
//   setToken: propTypes.func.isRequired,
// };

export default Login;
