import axios from "axios";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state";
import Add from "./add";
import Edit from "./edit";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { store } from "react-notifications-component";

const BriefControl = (props) => {
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

  const { addBrief } = bindActionCreators(actionCreators, dispatch);

  let token;

  const Tokena = useSelector((state) => state.output);
  if (Tokena) {
    token = Tokena.token;
  }

  const all = () => {
    axios.get("https://qeola-api.herokuapp.com/api/v1/briefs").then(
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

  const deleteBrief = (id) => {
    axios
      .delete(`https://qeola-api.herokuapp.com/api/v1/briefs/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(
        (response) => {
          // console.log(response);
          if (response) {
            renderBriefs();
          }
        },
        (error) => {
          // console.log(error);
        }
      );
  };
  const renderBriefs = (page, limit) => {
    all();
    axios
      .get(
        `https://qeola-api.herokuapp.com/api/v1/briefs?page=${page}&limit=${limit}`
      )
      .then(
        (response) => {
          if (response) {
            // console.log(response);
            setPosts(...[response.data.data]);
            setLoading(true);
            setOutput(
              response && (
                <div style={{ overflowX: "auto" }}>
                  <table style={{ width: "100%" }} className="">
                    <tr>
                      <th>S/N</th>
                      <th>Brief Title</th>
                      <th>Date Created</th>
                      <th>Category</th>
                      <th>Reset</th>
                      <th>Delete</th>
                    </tr>
                    {response.data.data.map((item, i) => {
                      // console.log(item);
                      return (
                        <tr key={item._id}>
                          <td>{i + 1}</td>
                          <td className="fw-bold">{item.name}</td>
                          <td>{item.createdAt}</td>
                          <td> {item.category.name}</td>
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
                              onClick={() => deleteBrief(item.id)}
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
    renderBriefs(selected + 1, itemsPerPage);
    // console.log(selected + 1);
  };
  return (
    <main className="P-5">
      <div className="p-5 py-3">
        <div>
          <input type="hidden" value={posts} />
          <input type="hidden" value={pageNumber} />
        </div>
        <ReactNotification />
        <div className="row justify-content-center mb-4">
          <div className="col-12 col-sm-6 mx-auto" onClick={renderBriefs}>
            <Edit icon={"app_registration"} label={"Show all briefs"} />
          </div>
          <div className="col-12 col-sm-6" onClick={() => addBrief()}>
            <Add icon={"playlist_add"} label={"Add new brief"} />
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
export default BriefControl;
