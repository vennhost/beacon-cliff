import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Info from "../src/components/header/Info";
import NavBar from "../src/components/header/Nav";
import GetStarted from "../src/pages/GetStarted";
import Home from "../src/components/home/Home";
import About from "../src/pages/About";
import Career from "../src/pages/Career";

import Portal from "../src/pages/Portal";
import Gallery from "../src/pages/Gallery";
import Relocation from "../src/pages/Relocation";
import Events from "./pages/News";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <Router>
        <Info />

        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/getstarted" component={GetStarted} />
          <Route path="/about" component={About} />
          <Route path="/career" component={Career} />
          <Route path="/contact" component={Contact} />
          <Route path="/news-event" component={Events} />
          <Route path="/portal" component={Portal} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/relocation" component={Relocation} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
