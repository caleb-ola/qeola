const BlogBody = (props) => {
  const createMarkup = () => {
    return { __html: props.content };
  };
  return (
    <section id="blog-body" className="">
      <div className="container">
        <div className="blog-passage">
          <div className="blog-details-header text-start my-3 ">
            <p className="category p-0 m-0">
              <small>{props.category}</small>
            </p>
            <h2 className="fw-bold fs-1">{props.title} </h2>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation.
            </p>
            <p className="author fw-bold pb-4">
              <small>By {props.author}</small>
            </p>
          </div>
        </div>
      </div>
      <div className="">
        <img src={props.image} alt="blog-image" className="img-fluid" />
      </div>
      <div className="container my-5">
        <div className="blog-passage">
          <div dangerouslySetInnerHTML={createMarkup()} />
          {/* <h3 className="fw-bold fs-4 py-2">What is Lorem Ipsum?</h3>
          <p className="py-2">
            What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>{" "}
          <h3 className="fw-bold fs-4 py-2">Why do we use it?</h3>
          <img
            src="images/Blog-details/img1.jpg"
            alt="blog-image-one"
            className="img-fluid py-2"
          />
          <p className="py-3">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
            <h3 className="fw-bold fs-4 py-4">Where does it come from?</h3>
            <p className="">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a L
            </p>{" "}
          </p>{" "}
          <img
            src="images/Blog-details/img2.jpg"
            alt="blog-image-one"
            className="img-fluid "
          /> */}
        </div>
      </div>
    </section>
  );
};

export default BlogBody;
