import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Info from "./header/Info";
import NavBar from "./header/Nav";
import GetStarted from "../pages/GetStarted";
import Home from "./home/Home";
import About from "../pages/About";
import Career from "../pages/Career";
import Partners from "../pages/Partners";
import Portal from "../pages/Portal";
import Gallery from "../pages/Gallery";
import Relocation from "../pages/Relocation";
import Contact from "../pages/Contact";
import News from "../pages/News";
import Events from "../pages/Events";

function Main(props) {
  return (
    <div>
      <Router>
        <Info />
        <Switch>
          <NavBar />
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/partners" component={Partners} />
          <Route path="/career" component={Career} />
          <Route path="/portal" component={Portal} />
          <Route path="/contact" component={Contact} />
          <Route path="/news-event" component={Events} />
          <Route path="/portal" component={Portal} />
          <Route path="/relocation" component={Relocation} />
        </Switch>
      </Router>
    </div>
  );
}

export default Main;
