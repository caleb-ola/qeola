import { Link } from "react-router-dom";
import "./admin.css";

const Login = () => {
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
      <div className="overlayb"></div>
      <div className="container">
        <div className="login-card mx-auto p-3 p-sm-4 rounded-3 ">
          <form>
            <div className="my-3 mb-4 text-center">
              <h2 className="fs-3 fw-bold">Admin Login</h2>
            </div>
            <div className="my-3">
              <label for="username" className="fw-bold text-start">
                {" "}
                Username
              </label>{" "}
              <br />
              <input
                id="username"
                className="username w-100 p-1 border-0 border-2 border-bottom"
                type="text"
                name="username"
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
                to="/"
                type="submit"
                className=" btn back-to-home-btn w-100 shadow-none"
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

export default Login;
