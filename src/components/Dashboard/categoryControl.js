import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state";
import Add from "./add";
import Edit from "./edit";

const CategoryControl = (props) => {
  const [output, setOutput] = useState();
  // const output = useSelector((state) => state.output);
  const dispatch = useDispatch();
  // console.log({ func: props.func });

  // useEffect(() => {
  //   renderCategories();
  // }, []);
  let token;

  const Tokena = useSelector((state) => state.output);
  if (Tokena) {
    token = Tokena.token;
  }
  const correct = "correct";

  const updateCategory = (id) => {
    axios
      .patch(
        `https://qeola-api.herokuapp.com/api/v1/categories/${id}`,
        { correct },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(
        (response) => {
          console.log(response);
          // response.data.data.name = "new category";
        },
        (error) => {
          console.log(error);
        }
      );
  };

  const deleteCategory = (id) => {
    axios
      .delete(`https://qeola-api.herokuapp.com/api/v1/categories/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(
        (response) => {
          console.log(response);
          if (response) {
            renderCategories();
          }
        },
        (error) => {
          console.log(error);
        }
      );
  };

  const renderCategories = () => {
    axios.get("https://qeola-api.herokuapp.com/api/v1/categories").then(
      (response) => {
        console.log(response);
        setOutput(
          response && (
            <div>
              <table style={{ width: "100%" }} className="">
                <tr>
                  <th>S/N</th>
                  <th>Category</th>
                  <th>Date Created</th>
                  <th>Reset</th>
                  <th>Delete</th>
                </tr>
                {response.data.data.map((item, i) => {
                  console.log(item);
                  return (
                    <tr>
                      <td>{i + 1}</td>
                      <td className="fw-bold">{item.name}</td>
                      <td>{item.createdAt}</td>
                      <td>
                        <i
                          onClick={() => updateCategory(item.id)}
                          class="material-icons p-1 rounded-circle"
                        >
                          settings
                        </i>
                      </td>
                      <td>
                        <i
                          onClick={() => deleteCategory(item.id)}
                          class="material-icons p-1 rounded-circle"
                        >
                          delete
                        </i>
                      </td>
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

  const { showCategories, addCategory } = bindActionCreators(
    actionCreators,
    dispatch
  );
  return (
    <main className="P-5">
      <div className="p-5 py-3">
        <div className="row justify-content-center mb-4">
          <div className="col-12 col-sm-6 mx-auto" onClick={renderCategories}>
            <Edit icon={"app_registration"} label={"Show all categories"} />
          </div>
          <div className="col-12 col-sm-6" onClick={() => addCategory()}>
            <Add icon={"playlist_add"} label={"Add new category"} />
          </div>
        </div>
        {output}
      </div>
    </main>
  );
};
export default CategoryControl;
