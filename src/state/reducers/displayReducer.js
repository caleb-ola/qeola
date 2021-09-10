const displayReducer = (state = null, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, login: action.payload, token: action.token };
    case "LOGOUT":
      return { ...state, logout: action.payload, token: action.token };

    default:
      return state;
  }
};

export default displayReducer;
