import { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const Editorial = () => {
  const [editorState, setEditorState] = useState("");
  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };
  return (
    <main className="P-5">
      <div className="p-5 py-3">
        <div className="row justify-content-center mb-4">
          <div>
            <Editor
              editorState={editorState}
              toolbarClassName="toolbarClassName"
              wrapperClassName="wrapperClassName"
              editorClassName="editorClassName"
              onEditorStateChange={onEditorStateChange}
            />
          </div>
          <button
            type="submit"
            className="btn mt-3 shadow-none contact-submit w-50 fw-bold py-2"
          >
            POST ARTICLE
          </button>
        </div>
        {/* {props.output} */}
      </div>
    </main>
  );
};

export default Editorial;
