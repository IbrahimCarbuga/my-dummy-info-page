import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { Home } from "./Home";
import { Navbar } from "./Navbar/Navbar";

export const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
      <footer className="footer">
      <div className="container">
        <span className="text-muted">Place sticky footer content here.</span>
      </div>
    </footer>
    </Router>
  );
};
