import { Link } from "react-router-dom";
import "./admin.css";

const Edit = (props) => {
  return (
    <Link
      className="card border-0  m-3 me-5 ms-0 text-center "
      style={{ width: "16rem", textDecoration: "none" }}
    >
      <div className="card-body ">
        <div className="card-subtitle mb-2 pt-3">
          <i class="material-icons edit-icon rounded-circle p-3 fs-2">
            {props.icon}
          </i>
        </div>
        <p className="card-text fw-bold py-3">{props.label}</p>
      </div>
    </Link>
  );
};

export default Edit;
