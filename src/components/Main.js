import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Info from "./header/Info";
import NavBar from "./header/Nav";
import GetStarted from "./pages/GetStarted";
import Home from "./home/Home";
import About from "./pages/About";
import Career from "./pages/Career";
import Partners from "./pages/Partners";
import Portal from "./pages/Portal";
import Gallery from "./pages/Gallery";
import Relocation from "./pages/Relocation";

function Main(props) {
  return (
    <div>
      <Router>
        <Info />
        <NavBar />
        <Route path="/" exact component={Home} />
        <Route path="/getstarted" component={GetStarted} />
        <Route path="/about" component={About} />
        <Route path="/partners" component={Partners} />
        <Route path="/career" component={Career} />
        <Route path="/portal" component={Portal} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/relocation" component={Relocation} />
      </Router>
    </div>
  );
}

export default Main;
