import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state";
import Add from "./add";
import Edit from "./edit";
import ReactPaginate from "react-paginate";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { store } from "react-notifications-component";

const CaseControl = (props) => {
  // const output = useSelector((state) => state.output);
  const dispatch = useDispatch();
  const [Output, setOutput] = useState();

  // PAGINATION
  const [loading, setLoading] = useState(false);
  const [loadingB, setLoadingB] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const itemsPerPage = 5;

  const [posts, setPosts] = useState();
  const [PostsB, setPostsB] = useState();

  const { addCase } = bindActionCreators(actionCreators, dispatch);

  let token;

  const Tokena = useSelector((state) => state.output);
  if (Tokena) {
    token = Tokena.token;
  }
  const all = () => {
    axios.get("https://qeola-api.herokuapp.com/api/v1/projects").then(
      (response) => {
        // console.log({ all: response });
        setLoadingB(true);
        setPostsB(Math.ceil(response.data.data.length / itemsPerPage));
      },
      (error) => {
        // console.log(error);
      }
    );
  };
  // console.log(PostsB);

  const deleteProject = (id) => {
    axios
      .delete(`https://qeola-api.herokuapp.com/api/v1/projects/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(
        (response) => {
          // console.log(response);
          if (response) {
            renderProjects();
          }
        },
        (error) => {
          // console.log(error);
        }
      );
  };
  const renderProjects = (page, limit) => {
    all();
    axios
      .get(
        `https://qeola-api.herokuapp.com/api/v1/projects?page=${page}&limit=${limit}`
      )
      .then(
        (response) => {
          if (response) {
            setPosts(...[response.data.data]);
            setLoading(true);
            setOutput(
              response && (
                <div style={{ overflowX: "auto" }}>
                  <table style={{ width: "100%" }} className="">
                    <tr>
                      <th>S/N</th>
                      <th>Title</th>
                      <th>Date Created</th>
                      <th>Category</th>
                      <th>Reset</th>
                      <th>Delete</th>
                    </tr>
                    {response.data.data.map((item, i) => {
                      // console.log(item);
                      return (
                        <tr>
                          <td>{i + 1}</td>
                          <td className="fw-bold">{item.title}</td>
                          <td>{item.createdAt}</td>
                          <td>
                            {item.category !== null && item.category.name}
                          </td>
                          <td>
                            <i
                              // onClick={() => updateCategory(item.id)}
                              class="material-icons p-1 rounded-circle"
                            >
                              settings
                            </i>
                          </td>
                          <td>
                            <i
                              onClick={() => deleteProject(item._id)}
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
          }
        },
        (error) => {
          store.addNotification({
            title: "Sorry",
            message: "Something went wrong, please try again",
            type: "danger",
            insert: "top",
            container: "top-left",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
              duration: 8000,
              onScreen: true,
            },
          });
        }
      );
  };
  const PageCount = PostsB && PostsB;
  const pageChange = ({ selected }) => {
    setPageNumber(selected);
    renderProjects(selected + 1, itemsPerPage);
  };

  return (
    <main className="P-5">
      <div className="p-5 py-3">
        <div>
          <input type="hidden" value={posts} />
        </div>
        <ReactNotification />

        <div className="row justify-content-center mb-4">
          <div
            className="col-12 col-sm-6 mx-auto"
            onClick={() => renderProjects(pageNumber, itemsPerPage)}
          >
            <Edit icon={"app_registration"} label={"Show case studies"} />
          </div>
          <div className="col-12 col-sm-6" onClick={() => addCase()}>
            <Add icon={"playlist_add"} label={"Add new case study"} />
          </div>
        </div>
        {loading && Output}

        {loadingB && PageCount > 1 ? (
          <ReactPaginate
            previousLabel="Prev"
            nextLabel="Next"
            pageCount={PageCount}
            onPageChange={pageChange}
            containerClassName={"contain"}
            previousLinkClassName={"previous"}
            breakClassName={"page"}
            nextLinkClassName={"next"}
            pageClassName={"page"}
            disabledClassNae={"disabled"}
            activeClassName={"active"}
          />
        ) : (
          <div></div>
        )}
      </div>
    </main>
  );
};
export default CaseControl;
