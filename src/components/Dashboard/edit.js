import { Link } from "react-router-dom";
import "./admin.css";

const Edit = (props) => {
  return (
    <Link
      className="card border-0  m-2 rounded-3 mx-auto"
      style={{ width: "18rem", textDecoration: "none" }}
    >
      <div className="card-body ">
        <div className="card-subtitle mb-2 ">
          <i class="material-icons edit-icon rounded-circle p-3 fs-2">
            {props.icon}
          </i>
        </div>
        <p className="card-text fw-bold py-2">{props.label}</p>
      </div>
    </Link>
  );
};

export default Edit;
