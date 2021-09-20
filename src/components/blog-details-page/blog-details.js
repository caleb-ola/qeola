import NavBar2 from "../Reusable-components/navbar2";
import BlogBody from "./blog-body";
import MoreArticles from "./more-articles";
import Footer from "../Reusable-components/footer";

import "./blog-details.css";
import axios from "axios";
import { useEffect, useState } from "react";

const BlogDetails = (props) => {
  const [body, setBody] = useState();

  useEffect(() => {
    axios
      .get(
        `https://qeola-api.herokuapp.com/api/v1/posts/${props.match.params.id}`
      )
      .then(
        (response) => {
          console.log(response);
          setBody(
            <BlogBody
              category={response.data.data.category.name}
              title={response.data.data.title}
              author={response.data.data.author}
              image={response.data.data.image}
              content={response.data.data.content}
            />
          );
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);

  return (
    <div>
      <NavBar2 />
      {body}
      <MoreArticles />
      <Footer />
    </div>
  );
};

export default BlogDetails;
