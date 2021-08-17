import { useState } from "react";
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

  const [topics, setTopics] = useState(
    <div>
      <Link to="/blog-details" className="text-decoration-none">
        <BlogPost
          image={"images/Blog/img1.jpg"}
          category={"Branding"}
          title={"Understanding Visual Identity Deliverables"}
          text={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been ..."
          }
        />
      </Link>

      <BlogPost
        image={"images/Blog/img2.jpg"}
        category={"UI/UX Design"}
        title={"Understanding Visual Identity Deliverables"}
        text={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been ..."
        }
      />
      <BlogPost
        image={"images/Blog/img3.jpg"}
        category={"UI/UX Design"}
        title={"Understanding Visual Identity Deliverables"}
        text={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been ..."
        }
      />
      <BlogPost
        image={"images/Blog/img4.jpg"}
        category={"Case sturdy"}
        title={"Understanding Visual Identity Deliverables"}
        text={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been ..."
        }
      />
      <BlogPost
        image={"images/Blog/img5.jpg"}
        category={"Software Engineering"}
        title={"Understanding Visual Identity Deliverables"}
        text={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been ..."
        }
      />
    </div>
  );

  const AllTopics = () => {
    setActive({
      allTopics: "active",
      branding: "",
      uiux: "",
      caseSturdy: "",
      SD: "",
    });
    setTopics(
      <div>
        <Link to="/blog-details" className="text-decoration-none">
          <BlogPost
            image={"images/Blog/img1.jpg"}
            category={"Branding"}
            title={"Understanding Visual Identity Deliverables"}
            text={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been ..."
            }
          />
        </Link>
        <BlogPost
          image={"images/Blog/img2.jpg"}
          category={"UI/UX Design"}
          title={"Understanding Visual Identity Deliverables"}
          text={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been ..."
          }
        />
        <BlogPost
          image={"images/Blog/img3.jpg"}
          category={"UI/UX Design"}
          title={"Understanding Visual Identity Deliverables"}
          text={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been ..."
          }
        />
        <BlogPost
          image={"images/Blog/img4.jpg"}
          category={"Case sturdy"}
          title={"Understanding Visual Identity Deliverables"}
          text={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been ..."
          }
        />
        <BlogPost
          image={"images/Blog/img5.jpg"}
          category={"Software Engineering"}
          title={"Understanding Visual Identity Deliverables"}
          text={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been ..."
          }
        />
      </div>
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
    setTopics(
      <div>
        <Link to="/blog-details" className="text-decoration-none">
          <BlogPost
            image={"images/Blog/img1.jpg"}
            category={"Branding"}
            title={"Understanding Visual Identity Deliverables"}
            text={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been ..."
            }
          />
        </Link>
      </div>
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
    setTopics(
      <div>
        <BlogPost
          image={"images/Blog/img2.jpg"}
          category={"UI/UX Design"}
          title={"Understanding Visual Identity Deliverables"}
          text={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been ..."
          }
        />
        <BlogPost
          image={"images/Blog/img3.jpg"}
          category={"UI/UX Design"}
          title={"Understanding Visual Identity Deliverables"}
          text={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been ..."
          }
        />
      </div>
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
    setTopics(
      <div>
        <BlogPost
          image={"images/Blog/img4.jpg"}
          category={"Case sturdy"}
          title={"Understanding Visual Identity Deliverables"}
          text={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been ..."
          }
        />
      </div>
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
    setTopics(
      <div>
        <BlogPost
          image={"images/Blog/img5.jpg"}
          category={"Software Engineering"}
          title={"Understanding Visual Identity Deliverables"}
          text={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been ..."
          }
        />
      </div>
    );
  };
  return (
    <section id="blog-selection">
      <div className="container">
        <div className="my-5 pt-5">
          <button
            className={`shadow-none px-3 py-2 ${active.allTopics}`}
            onClick={AllTopics}
          >
            All Topics
          </button>
          <button
            className={`shadow-none px-3 py-2 ${active.branding}`}
            onClick={Branding}
          >
            Branding
          </button>
          <button
            className={`shadow-none px-3 py-2 ${active.uiux}`}
            onClick={UIUX}
          >
            UI/UX Design
          </button>
          <button
            className={`shadow-none px-3 py-2 ${active.caseSturdy}`}
            onClick={CaseSturdy}
          >
            Case Sturdy
          </button>
          <button className={`shadow-none px-3 py-2 ${active.SD}`} onClick={SD}>
            Software Development
          </button>
        </div>
        {topics}
      </div>
    </section>
  );
};

export default BlogSelection;
