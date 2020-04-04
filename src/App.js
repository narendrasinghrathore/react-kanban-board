import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

/**
 * Components imports
 */
import Dashboard from "./components/statefull/Dashboard/Dashboard";
import About from "./components/statefull/About/About";
import Navigation from './components/stateless/Navigation/Navigation';
import ThemeManager from "./components/stateless/ThemeManager/ThemeManager";

function App() {
  return (
    <Router>
      <div>
        <ThemeManager/>
        <Navigation />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
