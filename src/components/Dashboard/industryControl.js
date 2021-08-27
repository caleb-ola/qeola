import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state";
import Add from "./add";
import Edit from "./edit";

const IndustryControl = (props) => {
  const output = useSelector((state) => state.output);
  const dispatch = useDispatch();

  const { showIndustry, addIndustry } = bindActionCreators(
    actionCreators,
    dispatch
  );
  return (
    <main className="P-5">
      <div className="p-5 py-3">
        <div className="row justify-content-center mb-4">
          <div
            className="col-12 col-sm-6 mx-auto"
            onClick={() => showIndustry()}
          >
            <Edit icon={"app_registration"} label={"Show all Industries"} />
          </div>
          <div className="col-12 col-sm-6" onClick={() => addIndustry()}>
            <Add icon={"playlist_add"} label={"Add new Industry"} />
          </div>
        </div>
        {props.output}
      </div>
    </main>
  );
};
export default IndustryControl;
