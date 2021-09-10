// import Admin from "../../components/Dashboard/admin";
import axios from "axios";

export const allWorks = () => {
  return (dispatch) => {
    dispatch({
      type: "ALL_WORKS",
      payload: "",
    });
  };
};
export const briefAct = () => {
  return (dispatch) => {
    dispatch({
      type: "BRIEF",
      payload: "",
    });
  };
};
export const mainWelcome = () => {
  return (dispatch) => {
    dispatch({
      type: "BLOGGING",
      payload: "",
    });
  };
};
export const welcome = () => {
  return (dispatch) => {
    // const api = axios.get("https://qeola-api.herokuapp.com/api/v1/users").then(
    //   (response) => {
    //     console.log(response);
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );
    dispatch({
      type: "WELCOME",
      payload: "",
    });
  };
};
export const briefing = () => {
  return (dispatch) => {
    dispatch({
      type: "BRIEFING",
      payload: "",
    });
  };
};
export const caseStudy = () => {
  return (dispatch) => {
    dispatch({
      type: "CASE",
      payload: "",
    });
  };
};
export const client = () => {
  return (dispatch) => {
    dispatch({
      type: "CLIENT",
      payload: "",
    });
  };
};
export const industry = () => {
  return (dispatch) => {
    dispatch({
      type: "INDUSTRY",
      payload: "",
    });
  };
};
export const media = () => {
  return (dispatch) => {
    dispatch({
      type: "MEDIA",
      payload: "",
    });
  };
};
export const category = () => {
  return (dispatch) => {
    dispatch({
      type: "CATEGORY",
      payload: "",
    });
  };
};

export const addCategory = () => {
  return (dispatch) => {
    dispatch({
      type: "ADD_CATEGORY",
      payload: "",
    });
  };
};
export const showCategories = (func) => {
  return (dispatch) => {
    axios.get("https://qeola-api.herokuapp.com/api/v1/categories").then(
      (response) => {
        console.log(response);
        dispatch({
          type: "SHOW_CATEGORIES",
          payload: response,
          func: func,
        });
      },
      (error) => {
        console.log(error);
      }
    );
  };
};

export const showBlogs = () => {
  return (dispatch) => {
    dispatch({
      type: "SHOW_BLOGS",
      payload: "",
    });
  };
};

export const addBlog = () => {
  return (dispatch) => {
    dispatch({
      type: "ADD_BLOG",
      payload: "",
    });
  };
};

export const showBriefs = () => {
  return (dispatch) => {
    dispatch({
      type: "SHOW_BRIEFS",
      payload: "",
    });
  };
};

export const addBrief = () => {
  return (dispatch) => {
    dispatch({
      type: "ADD_BRIEF",
      payload: "",
    });
  };
};
export const showCase = () => {
  return (dispatch) => {
    dispatch({
      type: "SHOW_CASE",
      payload: "",
    });
  };
};

export const addCase = () => {
  return (dispatch) => {
    dispatch({
      type: "ADD_CASE",
      payload: "",
    });
  };
};
export const showClients = () => {
  return (dispatch) => {
    dispatch({
      type: "SHOW_CLIENT",
      payload: "",
    });
  };
};

export const addClient = () => {
  const url = "https://qeola-api.herokuapp.com/api/v1/clients?page=1&limit=5";

  return (dispatch) => {
    dispatch({
      type: "ADD_CLIENT",
      payload: url,
    });
  };
};

export const showIndustry = () => {
  return (dispatch) => {
    dispatch({
      type: "SHOW_INDUSTRY",
      payload: "",
    });
  };
};

export const addIndustry = () => {
  return (dispatch) => {
    dispatch({
      type: "ADD_INDUSTRY",
      payload: "",
    });
  };
};

export const showMedia = () => {
  return (dispatch) => {
    dispatch({
      type: "SHOW_MEDIA",
      payload: "",
    });
  };
};

export const addMedia = () => {
  return (dispatch) => {
    dispatch({
      type: "ADD_MEDIA",
      payload: "",
    });
  };
};

export const Login = (email, password) => {
  return (dispatch) => {
    axios
      .post("https://qeola-api.herokuapp.com/api/v1/auth/login", {
        email: email,
        password: password,
      })
      .then(
        (response) => {
          console.log(response);
          if (response) {
            dispatch({
              type: "LOGIN",
              payload: response,
              token: response.data.token,
            });
          }
        },
        (error) => {
          console.log(error);
          dispatch({
            type: "LOGIN",
            payload: error,
          });
        }
      );
  };
};

export const Logout = () => {
  return (dispatch) => {
    axios.post("https://qeola-api.herokuapp.com/api/v1/auth/logout").then(
      (response) => {
        console.log(response);
        dispatch({
          type: "LOGOUT",
          payload: response,
          token: false,
        });
      },
      (error) => {
        console.log(error);
        dispatch({
          type: "LOGOUT",
          payload: error,
        });
      }
    );
  };
};

// export const Token = () => {
//   return (dispatch) => {
//     axios.post;
//   };
// };
