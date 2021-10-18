import { Link } from "react-router-dom";

const Add = (props) => {
  return (
    <div>
      <Link
        className="card cardb border-0  text-center  m-3 ms-5 "
        style={{ width: "16rem", textDecoration: "none" }}
      >
        <div className="card-body ">
          <div className="card-subtitle mb-2 pt-3">
            <i class="material-icons rounded-circle p-3 fs-2">{props.icon}</i>
            {/* <i class="material-icons ">add</i> */}
            {/* <i class="material-icons ">input</i> */}
          </div>
          <p className="card-text fw-bold py-3">{props.label}</p>
        </div>
      </Link>
    </div>
  );
};

export default Add;
