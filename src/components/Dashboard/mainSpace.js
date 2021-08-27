import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state";
import Add from "./add";
import Edit from "./edit";

const MainSpace = (props) => {
  const output = useSelector((state) => state.output);
  const dispatch = useDispatch();

  const { showBlogs, addBlog } = bindActionCreators(actionCreators, dispatch);
  return (
    <main className="P-5">
      <div className="p-5 py-3">
        <div className="row justify-content-center mb-4">
          <div className="col-12 col-sm-6 mx-auto" onClick={() => showBlogs()}>
            <Edit icon={"app_registration"} label={props.texta} />
          </div>
          <div className="col-12 col-sm-6" onClick={() => addBlog()}>
            <Add icon={"playlist_add"} label={props.textb} />
          </div>
        </div>
        {props.output}
      </div>
    </main>
  );
};
export default MainSpace;
