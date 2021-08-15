export const allWorks = () => {
  return (dispatch) => {
    dispatch({
      type: "ALL_WORKS",
      payload: [],
    });
  };
};
