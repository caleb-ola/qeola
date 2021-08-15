import Header from "../Reusable-components/navbar";
import Hero from "./hero";
import MoreClients from "./more_clients";
import Projects from "./projects";
import Industries from "./industries";
// import Contact from "./contact";
import Contact from "../Reusable-components/contact";
import Footer from "../Reusable-components/footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <MoreClients />
      <Projects />
      <Industries />
      <Contact
        title={
          "This is your chance to not only build your dreams but build a future."
        }
      />
      <Footer />
    </div>
  );
};
export default Home;
