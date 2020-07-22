import React from "react";
import Home from "./components/Home";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DetailsProject from "./components/DetailsProject";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/:name" component={DetailsProject} />
      </Switch>
    </Router>
  );
}

export default App;
