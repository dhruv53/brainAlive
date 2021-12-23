import React from "react";
import "./App.css";
import TopNavbar from "./pages/components/TopNavbar";

import Footer from "./pages/components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Career from "./pages/Career/Career";
import Contact from "./pages/Contact/Contact";
import Science from "./pages/Science/Science";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <TopNavbar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/career">
            <Career />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/science">
            <Science />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
