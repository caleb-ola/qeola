import { useState } from "react";
import { useSelector } from "react-redux";

// CSS
import "./selection.css";
const Selection = () => {
  const [brands, setBrands] = useState(
    <div className="row py-2 align-content-center justify-content-start my-5">
      <div className="col-6 col-lg-2 col-md-3  align-self-center text-center px-5 px-md-4 py-4">
        <img
          src="images/Clients/lushly.png"
          alt="client's brand logo"
          className="img-fluid"
        />
      </div>
      <div className="col-6 col-lg-2 col-md-3  align-self-center text-center px-5 px-md-4 py-4">
        <img
          src="images/Clients/awisewoman.png"
          alt="client's brand logo"
          className="img-fluid w-75"
        />
      </div>
      <div className="col-6 col-lg-2 col-md-3  align-self-center text-center px-5 px-md-4 py-4">
        <img
          src="images/Clients/trifold.png"
          alt="client's brand logo"
          className="img-fluid"
        />
      </div>
      <div className="col-6  col-lg-2 col-md-3 align-self-center text-center px-5 px-md-4 py-4">
        <img
          src="images/Clients/eridan.png"
          alt="client's brand logo"
          className="img-fluid"
        />
      </div>
      <div className="col-6 col-lg-2 col-md-3  align-self-center text-center px-5 px-md-4 py-4">
        <img
          src="images/Clients/sg_elton.png"
          alt="client's brand logo"
          className="img-fluid w-50"
        />
      </div>
      <div className="col-6 col-lg-2 col-md-3 align-self-center text-center px-5 px-md-4 py-4">
        <img
          src="images/Clients/just_adire.png"
          alt="client's brand logo"
          className="img-fluid w-75"
        />
      </div>

      <div className="col-6 col-lg-2 col-md-3  align-self-center text-center px-5 px-md-4 py-4">
        <img
          src="images/Clients/bramble4-02.png"
          alt="client's brand logo"
          className="img-fluid "
        />
      </div>
      <div className="col-6 col-lg-2 col-md-3  align-self-center text-center px-5 px-md-4 py-4">
        <img
          src="images/Clients/Logo_Restore_Citizenship-02.png"
          alt="client's brand logo"
          className="img-fluid w-100"
        />
      </div>
      <div className="col-6  col-lg-2 col-md-3 align-self-center text-center px-5 px-md-4 py-4">
        <img
          src="images/Clients/teal.png"
          alt="client's brand logo"
          className="img-fluid w-100"
        />
      </div>
      <div className="col-6 col-lg-2 col-md-3  align-self-center text-center px-5 px-md-4 py-4">
        <img
          src="images/Clients/tsc.png"
          alt="client's brand logo"
          className="img-fluid w-75"
        />
      </div>
    </div>
  );

  const [active, setActive] = useState({
    Allworks: "active",
    Branding: "",
    WebDesign: "",
    MobileApp: "",
    Marketing: "",
  });

  const Allworks = () => {
    setActive({
      Allworks: "active",
      Branding: "",
      WebDesign: "",
      MobileApp: "",
      Marketing: "",
    });
    setBrands(
      <div className="row py-2 align-content-center justify-content-start my-5">
        <div className="col-6 col-lg-2 col-md-3  align-self-center text-center px-5 px-md-4 py-4">
          <img
            src="images/Clients/lushly.png"
            alt="client's brand logo"
            className="img-fluid"
          />
        </div>
        <div className="col-6 col-lg-2 col-md-3  align-self-center text-center px-5 px-md-4 py-4">
          <img
            src="images/Clients/awisewoman.png"
            alt="client's brand logo"
            className="img-fluid w-75"
          />
        </div>
        <div className="col-6 col-lg-2 col-md-3  align-self-center text-center px-5 px-md-4 py-4">
          <img
            src="images/Clients/trifold.png"
            alt="client's brand logo"
            className="img-fluid"
          />
        </div>
        <div className="col-6  col-lg-2 col-md-3 align-self-center text-center px-5 px-md-4 py-4">
          <img
            src="images/Clients/eridan.png"
            alt="client's brand logo"
            className="img-fluid"
          />
        </div>
        <div className="col-6 col-lg-2 col-md-3  align-self-center text-center px-5 px-md-4 py-4">
          <img
            src="images/Clients/sg_elton.png"
            alt="client's brand logo"
            className="img-fluid w-50"
          />
        </div>
        <div className="col-6 col-lg-2 col-md-3 align-self-center text-center px-5 px-md-4 py-4">
          <img
            src="images/Clients/just_adire.png"
            alt="client's brand logo"
            className="img-fluid w-75"
          />
        </div>

        <div className="col-6 col-lg-2 col-md-3  align-self-center text-center px-5 px-md-4 py-4">
          <img
            src="images/Clients/bramble4-02.png"
            alt="client's brand logo"
            className="img-fluid "
          />
        </div>
        <div className="col-6 col-lg-2 col-md-3  align-self-center text-center px-5 px-md-4 py-4">
          <img
            src="images/Clients/Logo_Restore_Citizenship-02.png"
            alt="client's brand logo"
            className="img-fluid w-100"
          />
        </div>
        <div className="col-6  col-lg-2 col-md-3 align-self-center text-center px-5 px-md-4 py-4">
          <img
            src="images/Clients/teal.png"
            alt="client's brand logo"
            className="img-fluid w-100"
          />
        </div>
        <div className="col-6 col-lg-2 col-md-3  align-self-center text-center px-5 px-md-4 py-4">
          <img
            src="images/Clients/tsc.png"
            alt="client's brand logo"
            className="img-fluid w-75"
          />
        </div>
      </div>
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
    setBrands(
      <div className="row py-2 align-content-center justify-content-start my-5">
        <div className="col-6 col-lg-2 col-md-3  align-self-center text-center px-5 px-md-4 py-4">
          <img
            src="images/Clients/lushly.png"
            alt="client's brand logo"
            className="img-fluid"
          />
        </div>

        <div className="col-6  col-lg-2 col-md-3 align-self-center text-center px-5 px-md-4 py-4">
          <img
            src="images/Clients/eridan.png"
            alt="client's brand logo"
            className="img-fluid"
          />
        </div>

        <div className="col-6 col-lg-2 col-md-3 align-self-center text-center px-5 px-md-4 py-4">
          <img
            src="images/Clients/just_adire.png"
            alt="client's brand logo"
            className="img-fluid w-75"
          />
        </div>
      </div>
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
    setBrands(
      <div className="row py-2 align-content-center justify-content-start my-5">
        <div className="col-6 col-lg-2 col-md-3  align-self-center text-center px-5 px-md-4 py-4">
          <img
            src="images/Clients/awisewoman.png"
            alt="client's brand logo"
            className="img-fluid w-75"
          />
        </div>

        <div className="col-6 col-lg-2 col-md-3  align-self-center text-center px-5 px-md-4 py-4">
          <img
            src="images/Clients/sg_elton.png"
            alt="client's brand logo"
            className="img-fluid w-50"
          />
        </div>

        <div className="col-6 col-lg-2 col-md-3  align-self-center text-center px-5 px-md-4 py-4">
          <img
            src="images/Clients/bramble4-02.png"
            alt="client's brand logo"
            className="img-fluid "
          />
        </div>
        <div className="col-6 col-lg-2 col-md-3  align-self-center text-center px-5 px-md-4 py-4">
          <img
            src="images/Clients/Logo_Restore_Citizenship-02.png"
            alt="client's brand logo"
            className="img-fluid w-100"
          />
        </div>
        <div className="col-6  col-lg-2 col-md-3 align-self-center text-center px-5 px-md-4 py-4">
          <img
            src="images/Clients/teal.png"
            alt="client's brand logo"
            className="img-fluid w-100"
          />
        </div>
        <div className="col-6 col-lg-2 col-md-3  align-self-center text-center px-5 px-md-4 py-4">
          <img
            src="images/Clients/tsc.png"
            alt="client's brand logo"
            className="img-fluid w-75"
          />
        </div>
      </div>
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
    setBrands(
      <div className="row py-2 align-content-center justify-content-start my-5">
        <div className="col-6 col-lg-2 col-md-3  align-self-center text-center px-5 px-md-4 py-4">
          <img
            src="images/Clients/trifold.png"
            alt="client's brand logo"
            className="img-fluid"
          />
        </div>
        <div className="col-6 col-lg-2 col-md-3  align-self-center text-center px-5 px-md-4 py-4">
          <img
            src="images/Clients/awisewoman.png"
            alt="client's brand logo"
            className="img-fluid w-75"
          />
        </div>

        <div className="col-6 col-lg-2 col-md-3  align-self-center text-center px-5 px-md-4 py-4">
          <img
            src="images/Clients/tsc.png"
            alt="client's brand logo"
            className="img-fluid w-75"
          />
        </div>
      </div>
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
    setBrands(
      <div className="row py-2 align-content-center justify-content-start my-5">
        <div className="col-6 col-lg-2 col-md-3  align-self-center text-center px-5 px-md-4 py-4">
          <img
            src="images/Clients/lushly.png"
            alt="client's brand logo"
            className="img-fluid"
          />
        </div>

        <div className="col-6 col-lg-2 col-md-3  align-self-center text-center px-5 px-md-4 py-4">
          <img
            src="images/Clients/trifold.png"
            alt="client's brand logo"
            className="img-fluid"
          />
        </div>
        <div className="col-6  col-lg-2 col-md-3 align-self-center text-center px-5 px-md-4 py-4">
          <img
            src="images/Clients/eridan.png"
            alt="client's brand logo"
            className="img-fluid"
          />
        </div>

        <div className="col-6 col-lg-2 col-md-3 align-self-center text-center px-5 px-md-4 py-4">
          <img
            src="images/Clients/just_adire.png"
            alt="client's brand logo"
            className="img-fluid w-75"
          />
        </div>

        <div className="col-6 col-lg-2 col-md-3  align-self-center text-center px-5 px-md-4 py-4">
          <img
            src="images/Clients/bramble4-02.png"
            alt="client's brand logo"
            className="img-fluid "
          />
        </div>

        <div className="col-6  col-lg-2 col-md-3 align-self-center text-center px-5 px-md-4 py-4">
          <img
            src="images/Clients/teal.png"
            alt="client's brand logo"
            className="img-fluid w-100"
          />
        </div>
        <div className="col-6 col-lg-2 col-md-3  align-self-center text-center px-5 px-md-4 py-4">
          <img
            src="images/Clients/tsc.png"
            alt="client's brand logo"
            className="img-fluid w-75"
          />
        </div>
      </div>
    );
  };

  //   const state = useSelector((state) => state);

  return (
    <section id="selection">
      {/* {console.log(state)} */}
      <div className="container">
        <div className="my-5 pt-5">
          <button
            className={`shadow-none px-3 py-2 ${active.Allworks}`}
            onClick={Allworks}
          >
            All Works
          </button>
          <button
            className={`shadow-none px-3 py-2 ${active.Branding}`}
            onClick={Branding}
          >
            Branding
          </button>
          <button
            className={`shadow-none px-3 py-2 ${active.WebDesign}`}
            onClick={WebDesign}
          >
            Web Design
          </button>
          <button
            className={`shadow-none px-3 py-2 ${active.MobileApp}`}
            onClick={MobileApp}
          >
            Mobile App
          </button>
          <button
            className={`shadow-none px-3 py-2 ${active.Marketing}`}
            onClick={Marketing}
          >
            Marketing
          </button>
        </div>
        {brands}
      </div>
    </section>
  );
};

export default Selection;
