const clientReducer = (state = null, action) => {
  switch (action.type) {
    case "ALL_IMAGE":
      return action.payload;
    case "BRANDING":
      return action.payload;
    case "MOBILE_APP":
      return action.payload;
    case "MARKETING":
      return action.payload;
    default:
      return state;
  }
};

export default clientReducer;
