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

const IndustryControl = (props) => {
  const output = useSelector((state) => state.output);
  const dispatch = useDispatch();
  const [Output, setOutput] = useState();

  // PAGINATION
  const [loading, setLoading] = useState(false);
  const [loadingB, setLoadingB] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const itemsPerPage = 5;

  const [posts, setPosts] = useState();
  const [PostsB, setPostsB] = useState();

  const { showIndustry, addIndustry } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const all = () => {
    axios.get("https://qeola-api.herokuapp.com/api/v1/users").then(
      (response) => {
        console.log({ all: response });
        setLoadingB(true);
        setPostsB(Math.ceil(response.data.data.length / itemsPerPage));
      },
      (error) => {
        console.log(error);
      }
    );
  };
  console.log(PostsB);

  const renderUsers = (page, limit) => {
    all();
    axios
      .get(
        `https://qeola-api.herokuapp.com/api/v1/users?page=${page}&limit=${limit}`
      )
      .then(
        (response) => {
          console.log(response);
          if (response) {
            console.log(response);
            setPosts(...[response.data.data]);
            setLoading(true);

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
          }
        },
        (error) => {
          // console.log(error);
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
    renderUsers(selected + 1, itemsPerPage);
    // console.log(selected + 1);
  };

  return (
    <main className="P-5">
      <div className="p-5 py-3">
        <ReactNotification />

        <div className="row justify-content-center mb-4">
          <div
            className="col-12 col-sm-6 mx-auto"
            onClick={() => renderUsers(pageNumber, itemsPerPage)}
          >
            <Edit icon={"app_registration"} label={"Show all Users"} />
          </div>
          <div className="col-12 col-sm-6" onClick={() => addIndustry()}>
            <Add icon={"playlist_add"} label={"Search User by email"} />
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
export default IndustryControl;
