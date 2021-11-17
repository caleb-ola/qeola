const Media = () => {
  return (
    <section id="media" className="py-5 mb-3 mb-md-5">
      <div className="container">
        <div className="media-header text-center text-lg-start my-4">
          <h2 className="fw-bold fs-1">Media Mention</h2>
          <p>
            We have been recognized by various design professional organizations
            and renowned firms.
          </p>
        </div>
        <div className="row align-items-center  text-center">
          <div className=" col-6 col-md-4 p-2 p-md-3 my-1 ">
            <a
              href="https://www.thisdaylive.com/index.php/2021/11/05/united-nations-kicks-off-hackathon-championship-to-fight-corruption/"
              target="_blank"
              rel="noreferrer"
              className="text-decoration-none"
            >
              <img
                src="images/About/image1.png"
                alt=""
                className="img-fluid w-50"
              />
            </a>
          </div>
          <div className=" col-6 col-md-4 p-2 p-md-3 my-1">
            <a
              href="https://www.google.com/url?sa=t&source=web&rct=j&url=https://thenationonlineng.net/women-win-n1m-lautech-innovation-contest/amp/&ved=2ahUKEwit1_Tul530AhUI-aQKHXGXCCAQFnoECAgQAQ&usg=AOvVaw1pau-xz3wZdXAibU6qfmd_&ampcf=1"
              target="_blank"
              rel="noreferrer"
              className="text-decoration-none"
            >
              {" "}
              <img
                src="images/About/image5.png"
                alt=""
                className="img-fluid w-25"
              />
            </a>
          </div>
          <div className=" col-6 col-md-4 p-2 p-md-3 my-1">
            <a
              href="https://www.google.com/amp/s/www.bellanaija.com/2019/03/how-jesudamilare-adesegun-david-is-decentralising-tech-with-ennovate-lab-bellanaijamcm/amp/"
              target="_blank"
              rel="noreferrer"
              className="text-decoration-none"
            >
              <img
                src="images/About/image6.png"
                alt=""
                className="img-fluid w-50"
              />
            </a>
          </div>
          <div className=" col-6 col-md-4 p-2 p-md-3 my-1">
            <a
              href="https://www.google.com/url?sa=t&source=web&rct=j&url=https://www.sunnewsonline.com/ssss-student-journey-into-tech-world/&ved=2ahUKEwjr8dGUmJ30AhUE2qQKHZlED0kQFnoECAQQAQ&usg=AOvVaw1pJ5SQx6gtRNp_xuUB5PSq"
              target="_blank"
              rel="noreferrer"
              className="text-decoration-none"
            >
              <img
                src="images/About/Layer11.png"
                alt=""
                className="img-fluid w-50"
              />
            </a>
          </div>
          {/* <div className=" col-6 col-md-4 p-2 p-md-3 my-1">
            <img src="images/About/cbn.png" alt="" className="img-fluid w-50" />
          </div>
          <div className=" col-6 col-md-4 p-2 p-md-3 my-1">
            <img src="images/About/sky.png" alt="" className="img-fluid w-50" />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Media;
