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

const ClientControl = () => {
  const dispatch = useDispatch();
  const [Output, setOutput] = useState();

  // PAGINATION
  const [loading, setLoading] = useState(false);
  const [loadingB, setLoadingB] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const itemsPerPage = 5;

  const [posts, setPosts] = useState();
  const [PostsB, setPostsB] = useState();

  const { addClient } = bindActionCreators(actionCreators, dispatch);

  let token;

  const Tokena = useSelector((state) => state.output);
  if (Tokena) {
    token = Tokena.token;
  }

  const all = () => {
    axios.get("https://qeola-api.herokuapp.com/api/v1/clients").then(
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

  const deleteClient = (id) => {
    axios
      .delete(`https://qeola-api.herokuapp.com/api/v1/clients/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(
        (response) => {
          // console.log(response);
          if (response) {
            renderClients(pageNumber, itemsPerPage);
          }
        },
        (error) => {
          // console.log(error);
        }
      );
  };

  const renderClients = (page, limit) => {
    all();
    axios
      .get(
        `https://qeola-api.herokuapp.com/api/v1/clients?page=${page}&limit=${limit}`
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
                      <th>Client name</th>
                      <th>Date Created</th>
                      <th>Category</th>
                      <th>Reset</th>
                      <th>Delete</th>
                    </tr>
                    {response.data.data.map((item, i) => {
                      return (
                        <tr>
                          <td>{i + 1}</td>
                          <td className="fw-bold">{item.name}</td>
                          <td>{item.createdAt}</td>
                          <td>{item.category.name}</td>
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
                              onClick={() => deleteClient(item.id)}
                              class="material-icons p-1 rounded-circle delete-icon-btn"
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
    renderClients(selected + 1, itemsPerPage);
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
            onClick={() => renderClients(pageNumber, itemsPerPage)}
          >
            <Edit icon={"app_registration"} label={"Show all clients"} />
          </div>
          <div className="col-12 col-sm-6" onClick={() => addClient()}>
            <Add icon={"playlist_add"} label={"Add new client"} />
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
            disabledClassName={"disabled"}
            activeClassName={"active-paginate"}
          />
        ) : (
          <div></div>
        )}
      </div>
    </main>
  );
};
export default ClientControl;
