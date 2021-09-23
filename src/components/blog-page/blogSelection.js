import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BlogPost from "../Reusable-components/blog_post";

const BlogSelection = () => {
  const [active, setActive] = useState({
    allTopics: "active",
    branding: "",
    uiux: "",
    caseSturdy: "",
    SD: "",
  });

  const [topics, setTopics] = useState();

  const url = "https://qeola-api.herokuapp.com/api/v1/posts?page=1&limit=5";

  useEffect(() => {
    axios.get(url).then(
      (response) => {
        console.log(response);
        setTopics(
          response &&
            response.data.data.map((item, i) => {
              return (
                <Link
                  to={`/blog-details/${item.id}`}
                  className="text-decoration-none"
                  key={item._id}
                >
                  <BlogPost
                    image={item.image}
                    category={item.category.name}
                    title={item.title}
                    // text={
                    //   "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been ..."
                    // }
                  />
                </Link>
              );
            })
        );
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  const AllTopics = () => {
    setActive({
      allTopics: "active",
      branding: "",
      uiux: "",
      caseSturdy: "",
      SD: "",
    });
    axios.get(url).then(
      (response) => {
        console.log(response);
        setTopics(
          response &&
            response.data.data.map((item, i) => {
              return (
                <Link
                  to={`/blog-details/${item.id}`}
                  className="text-decoration-none"
                  key={item._id}
                >
                  <BlogPost
                    image={item.image}
                    category={item.category.name}
                    title={item.title}
                  />
                </Link>
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
      allTopics: "",
      branding: "active",
      uiux: "",
      caseSturdy: "",
      SD: "",
    });
    axios.get(url).then(
      (response) => {
        console.log(response);
        setTopics(
          response &&
            response.data.data.map((item, i) => {
              if (item.category.name === "Branding") {
                return (
                  <Link
                    to={`/blog-details/${item.id}`}
                    className="text-decoration-none"
                    key={item._id}
                  >
                    <BlogPost
                      image={item.image}
                      category={item.category.name}
                      title={item.title}
                    />
                  </Link>
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
  const UIUX = () => {
    setActive({
      allTopics: "",
      branding: "",
      uiux: "active",
      caseSturdy: "",
      SD: "",
    });
    axios.get(url).then(
      (response) => {
        console.log(response);
        setTopics(
          response &&
            response.data.data.map((item, i) => {
              if (item.category.name === "UI/UX Design") {
                return (
                  <Link
                    to={`/blog-details/${item.id}`}
                    className="text-decoration-none"
                    key={item._id}
                  >
                    <BlogPost
                      image={item.image}
                      category={item.category.name}
                      title={item.title}
                    />
                  </Link>
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
  const CaseSturdy = () => {
    setActive({
      allTopics: "",
      branding: "",
      uiux: "",
      caseSturdy: "active",
      SD: "",
    });
    axios.get(url).then(
      (response) => {
        console.log(response);
        setTopics(
          response &&
            response.data.data.map((item, i) => {
              if (item.category.name === "Case Study") {
                return (
                  <Link
                    to="/blog-details"
                    className="text-decoration-none"
                    key={item._id}
                  >
                    <BlogPost
                      image={item.image}
                      category={item.category.name}
                      title={item.title}
                    />
                  </Link>
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
  const SD = () => {
    setActive({
      allTopics: "",
      branding: "",
      uiux: "",
      caseSturdy: "",
      SD: "active",
    });
    axios.get(url).then(
      (response) => {
        console.log(response);
        setTopics(
          response &&
            response.data.data.map((item, i) => {
              if (item.category.name === "Software Development") {
                return (
                  <Link
                    to="/blog-details"
                    className="text-decoration-none"
                    key={item._id}
                  >
                    <BlogPost
                      image={item.image}
                      category={item.category.name}
                      title={item.title}
                    />
                  </Link>
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
  return (
    <section id="blog-selection">
      <div className="container">
        <div className="containing mx-auto">
          <div className="my-5 pt-5 text-center">
            <button
              className={`shadow-none px-1 mx-2 py-1 ${active.allTopics}`}
              onClick={AllTopics}
            >
              All Topics
            </button>
            <button
              className={`shadow-none px-1 mx-2 py-1 ${active.branding}`}
              onClick={Branding}
            >
              Branding
            </button>
            <button
              className={`shadow-none px-1 mx-2 py-1 ${active.uiux}`}
              onClick={UIUX}
            >
              UI/UX Design
            </button>
            <button
              className={`shadow-none px-1 mx-2 py-1 ${active.caseSturdy}`}
              onClick={CaseSturdy}
            >
              Case Study
            </button>
            <button
              className={`shadow-none px-1 mx-2 py-1 ${active.SD}`}
              onClick={SD}
            >
              Software Development
            </button>
          </div>
          <div className="my-5 pb-5 mx-auto"> {topics}</div>
        </div>
      </div>
    </section>
  );
};

export default BlogSelection;
