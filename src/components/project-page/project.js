import Header from "../Reusable-components/navbar";
import Contact from "../Reusable-components/contact";
import ProjectHero from "./project_hero";
import ProjectBody from "./proj_body";
import Footer from "../Reusable-components/footer";

// CSS
import "./project.css";
import axios from "axios";
import { useEffect, useState } from "react";

const Project = (props) => {
  const [hero, setHero] = useState();
  const [next, setNext] = useState();
  const [prev, setPrev] = useState();
  let nxt;
  useEffect(() => {
    // axios.get(`https://qeola-api.herokuapp.com/api/v1/projects`).then(
    //   (response) => {
    //     // console.log(response);
    //     setNext(
    //       response &&
    //         response.data.data.map((item, i) => {
    //           // console.log(item.id + " " + i);
    //           console.log(item[(i + 1) % response.data.data.length]);
    //           if (item.id === props.match.params.id) {
    //             // console.log(item[i]);
    //           }
    //           // return console.log((i + 1) % response.data.data);
    //           // console.log(nxt);
    //         })
    //     );
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );
    // setPrev(
    //   axios.get(`https://qeola-api.herokuapp.com/api/v1/projects`).then(
    //     (response) => {
    //       console.log("prev" + response);
    //       // if(props.match.params.id === ){

    //       // }
    //     },
    //     (error) => {
    //       console.log(error);
    //     }
    //   )
    // );
    axios
      .get(
        `https://qeola-api.herokuapp.com/api/v1/projects/${props.match.params.id}`
      )
      .then(
        (response) => {
          // console.log(response);
          setHero(
            <div>
              <ProjectHero
                image={response.data.data.image}
                title={response.data.data.title}
                description={response.data.data.description}
              />
              <ProjectBody
                content={response.data.data.content}
                // nextPage={next}
                // prevPage={prev}
              />
            </div>
          );
        },
        (error) => {
          console.log(error);
        }
      );
    setNext(
      axios.get(`https://qeola-api.herokuapp.com/api/v1/projects`).then(
        (response) => {
          console.log(response);
          // if(props.match.params.id === ){

          // }
        },
        (error) => {
          console.log(error);
        }
      ),
      setPrev()
    );
  }, []);
  return (
    <div>
      <Header />
      {hero}
      {/* <ProjectHero /> */}
      {/* <ProjectBody /> */}
      <Contact title={"Inspired? Let’s Talk"} />
      <Footer />
    </div>
  );
};

export default Project;
