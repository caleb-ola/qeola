import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state";
import Add from "./add";
import Edit from "./edit";

const IndustryControl = (props) => {
  const output = useSelector((state) => state.output);
  const dispatch = useDispatch();
  const [Output, setOutput] = useState();

  const { showIndustry, addIndustry } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const renderUsers = () => {
    axios.get("https://qeola-api.herokuapp.com/api/v1/users").then(
      (response) => {
        console.log(response);
        setOutput(
          response && (
            <div>
              <table style={{ width: "100%" }} className="">
                <tr>
                  <th>S/N</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Date Registered</th>
                </tr>
                {response.data.data.map((item, i) => {
                  console.log(item);
                  return (
                    <tr>
                      <td>{i + 1}</td>
                      <td className="fw-bold">{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.createdAt}</td>
                    </tr>
                  );
                })}
              </table>
            </div>
          )
        );
      },
      (error) => {
        console.log(error);
      }
    );
  };

  return (
    <main className="P-5">
      <div className="p-5 py-3">
        <div className="row justify-content-center mb-4">
          <div className="col-12 col-sm-6 mx-auto" onClick={renderUsers}>
            <Edit icon={"app_registration"} label={"Show all Users"} />
          </div>
          <div className="col-12 col-sm-6" onClick={() => addIndustry()}>
            <Add icon={"playlist_add"} label={"Search User by email"} />
          </div>
        </div>
        {Output}
      </div>
    </main>
  );
};
export default IndustryControl;
