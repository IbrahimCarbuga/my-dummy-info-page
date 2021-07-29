import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { ContactUsPage } from "./ContactUsPage";
import { Footer } from "./Footer/Footer";
import { Home } from "./Home";
import { LoginModal } from "./LoginModal";
import { Navbar } from "./Navbar/Navbar";

export const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={LoginModal} />
        <Route path="/contactUs" component={ContactUsPage} />
      </Switch>
      <Footer/>
    </Router>
  );
};
