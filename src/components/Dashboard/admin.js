import "./admin.css";
import Aside from "./aside";
import Main from "./main";

const Admin = () => {
  return (
    <div className="row m-0">
      <div className="col-12 col-lg-2 m-0 p-0 ">
        <Aside />
      </div>
      <div className="col-12 col-lg-10 m-0 p-0">
        <Main />
      </div>
    </div>
  );
};

export default Admin;
