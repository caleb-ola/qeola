import { Link } from "react-router-dom";

const Add = (props) => {
  return (
    <div>
      <Link
        className="card cardb border-0   m-2 rounded-3 mx-auto"
        style={{ width: "18rem", textDecoration: "none" }}
      >
        <div className="card-body ">
          <div className="card-subtitle mb-2 ">
            <i class="material-icons rounded-circle p-3 fs-2">{props.icon}</i>
            {/* <i class="material-icons ">add</i> */}
            {/* <i class="material-icons ">input</i> */}
          </div>
          <p className="card-text fw-bold py-2">{props.label}</p>
        </div>
      </Link>
    </div>
  );
};

export default Add;
