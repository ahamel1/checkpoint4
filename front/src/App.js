import React from "react";
import Home from "./components/Home";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DetailsProject from "./components/DetailsProject";
import Dashboard from "./backoffice/Dashboard";
import { ThemeProvider } from "styled-components";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/:name" component={DetailsProject} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
