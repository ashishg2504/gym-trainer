import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./View/Home";
import ContactUs from "./View/Contact Us/index"
import AboutUs from "./View/AboutUs/index"
import SignUp from "./View/Sign Up/index"
import Trainers from "./View/Trainers/index"

const App = () => {
  return (
    <Router>
      <Header />
      <div className="content-wrapper">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/contact-us" component={ContactUs} />
          <Route exact path="/about-us" component={AboutUs} />
          <Route exact path="/sign-up" component={SignUp} />
          <Route exact path="/trainers" component={Trainers} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
