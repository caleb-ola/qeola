import MainSpace from "../../components/Dashboard/mainSpace";
import Output from "../../components/Dashboard/output";

const displayReducer = (state = "", action) => {
  switch (action.type) {
    // case "SHOW_BLOGS":
    //   return (
    //     <MainSpace
    //       texta={"Edit/ show blogs"}
    //       textb={"Add new blog"}
    //       output={<Output />}
    //     />
    //   );
    default:
      return state;
  }
};

export default displayReducer;
