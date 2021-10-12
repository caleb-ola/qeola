import NavBar2 from "../Reusable-components/navbar2";
import OtherHero from "../Reusable-components/otherHero";
import Selection from "../Reusable-components/selection";

import Footer from "../Reusable-components/footer";
// CSS
import "./clients.css";
// import { useEffect } from "react";
const Clients = () => {
  return (
    <div id="clients">
      <NavBar2 />
      <OtherHero
        title={"Our Clients"}
        text={
          "Tempor cupidatat nulla mollit fugiat elit et eiusmod qui aliqua ad ut sint Lorem."
        }
      />
      <Selection />
      <Footer />
    </div>
  );
};

export default Clients;
