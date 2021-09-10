import { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import { EditorState, convertToRaw } from "draft-js";
import axios from "axios";
import { useSelector } from "react-redux";

const Editorial = (props) => {
  const [shrink, setShrink] = useState({
    mail: "",
    name: "",
    Num: "",
    proj: "",
    brief: "",
  });
  const [author, setAuthor] = useState();
  const [title, setTitle] = useState();
  const [category, setCategory] = useState();
  const [image, setImage] = useState();
  const [cat, setCat] = useState();
  const [catId, setCatId] = useState();
  const [editorContent, setEditorContent] = useState();

  const ShrinkName = () => {
    setShrink({ mail: "", name: "shrink", Num: "", proj: "", brief: "" });
  };

  const ShrinkProj = () => {
    setShrink({ mail: "", name: "", Num: "", proj: "shrink", brief: "" });
  };
  const ShrinkBrief = () => {
    setShrink({ mail: "", name: "", Num: "", proj: "", brief: "shrink" });
  };

  const Enlarge = () => {
    setShrink("");
  };

  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };
  // const editorCont = editorState.getCurrentContent().getPlainText();
  const content = draftToHtml(convertToRaw(editorState.getCurrentContent()));
  const Options = () => {
    axios.get("https://qeola-api.herokuapp.com/api/v1/categories").then(
      (response) => {
        console.log(response);
        const tration = response.data.data.map((item) => {
          if (item) {
            // console.log(item.id + item.name);
            return (
              <option value={item.id} key={item.id}>
                {item.name}
              </option>
            );
          }
        });
        setCat(tration);
      },
      (error) => {
        console.log(error);
      }
    );
  };
  console.log(author, title, category, image, content);
  let token = "";
  const Tokena = useSelector((state) => state.output);
  if (Tokena) {
    token = Tokena.token;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image);
    formData.append("title", title);
    formData.append("content", content);
    formData.append("category", category);
    formData.append("author", author);

    // console.log(JSON.stringify(formData));
    axios
      .post(
        "https://qeola-api.herokuapp.com/api/v1/posts",
        {
          formData,
        },
        {
          headers: {
            Authorization: `Bearers ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then(
        (response) => {
          console.log(response);
        },
        (error) => console.log(error)
      );
  };
  return (
    <main className="P-5">
      <div className="p-5 py-3">
        <div className="row justify-content-center mb-4">
          <h3 className="text-center fw-bold">{props.title}</h3>
          <form onSubmit={handleSubmit}>
            <div className="row pt-4 pb-2">
              <div
                className="col-12 col-md-6 my-3"
                onFocus={ShrinkName}
                onBlur={Enlarge}
              >
                <label
                  for="name"
                  className={
                    shrink.name == "shrink"
                      ? `fs-6 fw-bold ${shrink.name}`
                      : `fs-6 fw-bold`
                  }
                >
                  Author*
                </label>
                <br />
                <input
                  type="name"
                  name="name"
                  placeholder="Name of Author"
                  className="w-100 p-2 my-1 border-0 border-2 border-bottom"
                  onChange={(e) => setAuthor(e.target.value)}
                />
              </div>

              <div
                className="col-12 col-md-6 my-3"
                onFocus={ShrinkProj}
                onBlur={Enlarge}
              >
                <label
                  for="project-type"
                  className={
                    shrink.proj == "shrink"
                      ? `fs-6 fw-bold ${shrink.proj}`
                      : `fs-6 fw-bold`
                  }
                >
                  Category
                </label>
                <br />
                <select
                  id="project-type"
                  name="project-type"
                  className="w-100 p-2 my-2 border-0 border-2 border-bottom"
                  onChange={(e) => setCategory(e.target.value)}
                  onClick={Options}
                >
                  <option value="" disabled selected className="primary">
                    Make your selection
                  </option>
                  {cat}
                </select>
              </div>
              <div
                className="col-12 my-3"
                onFocus={ShrinkName}
                onBlur={Enlarge}
              >
                <label
                  for="name"
                  className={
                    shrink.name == "shrink"
                      ? `fs-6 fw-bold ${shrink.name}`
                      : `fs-6 fw-bold`
                  }
                >
                  Title*
                </label>
                <br />
                <input
                  type="name"
                  name="name"
                  placeholder="Title of the post"
                  className="w-100 p-2 my-1 border-0 border-2 border-bottom"
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div
                className="col-12 col-md-12 my-3"
                onFocus={ShrinkBrief}
                onBlur={Enlarge}
              >
                <label
                  for="project-brief"
                  className={
                    shrink.brief == "shrink"
                      ? `fs-6 fw-bold ${shrink.brief}`
                      : `fs-6 fw-bold `
                  }
                >
                  Image
                </label>
                <br />
                <div className="input-group my-1">
                  <input
                    type="text"
                    id="project-brief"
                    className="form-control rounded-0"
                    placeholder={`Attach the client's logo here `}
                    aria-label="Text input with attach button "
                    onChange={(e) => setImage(e.target.value)}
                  />
                  <button
                    type="button"
                    className="btn attach-button rounded-0  shadow-none"
                  >
                    <label>
                      <i className="material-icons attach-btn fs-2">
                        attach_file
                      </i>{" "}
                      <input
                        type="file"
                        name="myfile"
                        style={{ display: "none" }}
                        onChange={(e) => setImage(e.target.value)}
                      />
                    </label>
                  </button>
                </div>
              </div>
            </div>
            <div>
              <Editor
                editorState={editorState}
                toolbarClassName="toolbarClassName"
                wrapperClassName="wrapperClassName"
                editorClassName="editorClassName"
                onEditorStateChange={onEditorStateChange}
              />
            </div>

            <div className="col-12 col-md-12 my-2 text-center">
              <button
                type="submit"
                className="contact-submit shadow-none btn rounded-pill py-3 my-4 w-50 fw-bold"
              >
                POST ARTICLE
              </button>
            </div>
          </form>
        </div>
        {/* {props.output} */}
      </div>
    </main>
  );
};

export default Editorial;
