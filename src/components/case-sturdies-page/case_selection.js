import axios from "axios";
import { useEffect, useState } from "react";
import ProjectRow from "../Reusable-components/project_row";
import ProjectRow2 from "../Reusable-components/project_row2";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state";
import { useDispatch } from "react-redux";

const CaseSelection = () => {
  const dispatch = useDispatch();
  const { openCasestudy } = bindActionCreators(actionCreators, dispatch);

  const [active, setActive] = useState({
    Allworks: "active",
    Branding: "",
    WebDesign: "",
    MobileApp: "",
    Marketing: "",
  });
  const [sturdies, setSturdies] = useState();
  const url = "https://qeola-api.herokuapp.com/api/v1/projects?page=1&limit=5";

  useEffect(() => {
    axios.get(url).then(
      (response) => {
        console.log(response);
        setSturdies(
          response &&
            response.data.data.map((item, i) => {
              return i % 2 === 0 ? (
                <ProjectRow2
                  title={item.title}
                  content={item.description}
                  image={item.image}
                  key={item._id}
                  project={() => openCasestudy(item.id)}
                  path={`/project/${item.id}`}
                />
              ) : (
                <ProjectRow
                  title={item.title}
                  content={item.description}
                  image={item.image}
                  key={item._id}
                  project={() => openCasestudy(item.id)}
                  path={`/project/${item.id}`}
                />
              );
            })
        );
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  const Allworks = () => {
    setActive({
      Allworks: "active",
      Branding: "",
      WebDesign: "",
      MobileApp: "",
      Marketing: "",
    });

    axios.get(url).then(
      (response) => {
        console.log(response);
        setSturdies(
          response &&
            response.data.data.map((item, i) => {
              return i % 2 === 0 ? (
                <ProjectRow2
                  title={item.title}
                  content={item.description}
                  image={item.image}
                  key={item._id}
                  project={() => openCasestudy(item.id)}
                />
              ) : (
                <ProjectRow
                  title={item.title}
                  content={item.description}
                  image={item.image}
                  key={item._id}
                  project={() => openCasestudy(item.id)}
                />
              );
            })
        );
      },
      (error) => {
        console.log(error);
      }
    );
  };

  const Branding = () => {
    setActive({
      Allworks: "",
      Branding: "active",
      WebDesign: "",
      MobileApp: "",
      Marketing: "",
    });
    axios.get(url).then(
      (response) => {
        console.log(response);
        setSturdies(
          response &&
            response.data.data.map((item, i) => {
              if (item.category.name === "Branding") {
                return i % 2 === 0 ? (
                  <ProjectRow2
                    title={item.title}
                    content={item.description}
                    image={item.image}
                    key={item._id}
                    project={() => openCasestudy(item.id)}
                  />
                ) : (
                  <ProjectRow
                    title={item.title}
                    content={item.description}
                    image={item.image}
                    key={item._id}
                    project={() => openCasestudy(item.id)}
                  />
                );
              }
            })
        );
      },
      (error) => {
        console.log(error);
      }
    );
  };

  const WebDesign = () => {
    setActive({
      Allworks: "",
      Branding: "",
      WebDesign: "active",
      MobileApp: "",
      Marketing: "",
    });
    axios.get(url).then(
      (response) => {
        console.log(response);
        setSturdies(
          response &&
            response.data.data.map((item, i) => {
              if (item.category.name === "Web Design") {
                return i % 2 === 0 ? (
                  <ProjectRow2
                    title={item.title}
                    content={item.description}
                    image={item.image}
                    key={item._id}
                    project={() => openCasestudy(item.id)}
                  />
                ) : (
                  <ProjectRow
                    title={item.title}
                    content={item.description}
                    image={item.image}
                    key={item._id}
                    project={() => openCasestudy(item.id)}
                  />
                );
              }
            })
        );
      },
      (error) => {
        console.log(error);
      }
    );
  };

  const MobileApp = () => {
    setActive({
      Allworks: "",
      Branding: "",
      WebDesign: "",
      MobileApp: "active",
      Marketing: "",
    });
    axios.get(url).then(
      (response) => {
        console.log(response);
        setSturdies(
          response &&
            response.data.data.map((item, i) => {
              if (item.category.name === "Mobile App") {
                return i % 2 === 0 ? (
                  <ProjectRow2
                    title={item.title}
                    content={item.description}
                    image={item.image}
                    key={item._id}
                    project={() => openCasestudy(item.id)}
                  />
                ) : (
                  <ProjectRow
                    title={item.title}
                    content={item.description}
                    image={item.image}
                    key={item._id}
                    project={() => openCasestudy(item.id)}
                  />
                );
              }
            })
        );
      },
      (error) => {
        console.log(error);
      }
    );
  };

  const Marketing = () => {
    setActive({
      Allworks: "",
      Branding: "",
      WebDesign: "",
      MobileApp: "",
      Marketing: "active",
    });
    axios.get(url).then(
      (response) => {
        console.log(response);
        setSturdies(
          response &&
            response.data.data.map((item, i) => {
              if (item.category.name === "Marketing") {
                return i % 2 === 0 ? (
                  <ProjectRow2
                    title={item.title}
                    content={item.description}
                    image={item.image}
                    key={item._id}
                    project={() => openCasestudy(item.id)}
                  />
                ) : (
                  <ProjectRow
                    title={item.title}
                    content={item.description}
                    image={item.image}
                    key={item._id}
                    project={() => openCasestudy(item.id)}
                  />
                );
              }
            })
        );
      },
      (error) => {
        console.log(error);
      }
    );
  };

  // const openProject = (id) => {
  //   axios.get(`https://qeola-api.herokuapp.com/api/v1/projects/${id}`).then(
  //     (response) => {
  //       console.log(response);
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   );
  // };
  return (
    <div>
      <section id="case-study">
        <div className="container">
          <div className="my-5 pt-5">
            <button
              className={`shadow-none px-1 mx-2 py-1 ${active.Allworks}`}
              onClick={Allworks}
            >
              All Works
            </button>
            <button
              className={`shadow-none px-1 mx-2 py-1 ${active.Branding}`}
              onClick={Branding}
            >
              Branding
            </button>
            <button
              className={`shadow-none px-1 mx-2 py-1 ${active.WebDesign}`}
              onClick={WebDesign}
            >
              Web Design
            </button>
            <button
              className={`shadow-none px-1 mx-2 py-1 ${active.MobileApp}`}
              onClick={MobileApp}
            >
              Mobile App
            </button>
            <button
              className={`shadow-none px-1 mx-2 py-1 ${active.Marketing}`}
              onClick={Marketing}
            >
              Marketing
            </button>
          </div>
          <div className="my-5 pb-5">{sturdies}</div>
        </div>
      </section>
    </div>
  );
};

export default CaseSelection;
