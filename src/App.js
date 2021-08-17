import { Route, HashRouter, Switch } from "react-router-dom";

// CSS
import "./App.css";

// COMPONENTS
import Home from "./components/home-page/Home";
import ContactPage from "./components/contact-page/contact";
import Clients from "./components/clients-page/clients";
import Blog from "./components/blog-page/blog";
import CaseStudy from "./components/case-sturdies-page/case_study";
import About from "./components/about-page/about";
import BlogDetails from "./components/blog-details-page/blog-details";
import Project from "./components/project-page/project";

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/project" component={Project} />
        <Route exact path="/blog-details" component={BlogDetails} />
        <Route exact path="/about" component={About} />
        <Route exact path="/case-study" component={CaseStudy} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/clients" component={Clients} />
        <Route exact path="/contact" component={ContactPage} />
        <Route exact path="/" component={Home} />
      </Switch>
    </HashRouter>
  );
}

export default App;
