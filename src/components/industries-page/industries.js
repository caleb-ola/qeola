import Footer from "../Reusable-components/footer";
import NavBar2 from "../Reusable-components/navbar2";
import OtherHero from "../Reusable-components/otherHero";
import IndustrySelection from "./industry_selection";

const Industries = () => {
  return (
    <div>
      <NavBar2 />
      <OtherHero
        title={"Industries We"}
        titleb={"Have Served"}
        text="Deserunt labore officia ut proident nisi fugiat voluptate aliquip aliquip laboris."
      />
      <IndustrySelection />
      <Footer />
    </div>
  );
};

export default Industries;
