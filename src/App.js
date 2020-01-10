import React from "react";
import "@baltimorecounty/dotgov-components/lib/styles/dotgov.min.css";

import "./index.css";
import Homepage from "./pages/HomePage";
import { HashRouter as Router, Route } from "react-router-dom";
import { Config } from "@baltimorecounty/javascript-utilities";
import PublicWorksLandingPage from "./pages/PublicWorksLandingPage";
import AlertsPage from "./pages/AlertsPage";
import AdoptablePetsPage from "./pages/AdoptablePetsPage";
import ImagesPage from "./pages/ImagesPage";
import AccordionsPage from "./pages/AccordionsPage";
import CardPage from "./pages/CardPage";
import ModalPage from "./pages/ModalPage";

const { setConfig } = Config;

const localApiRoot = "//localhost:54727/api";
const testApiRoot = "http://testservices.baltimorecountymd.gov/api";
const prodApiRoot = "https://services.baltimorecountymd.gov/api";

const configValues = {
  local: {
    apiRoot: localApiRoot
  },
  development: {
    apiRoot: testApiRoot
  },
  staging: {
    apiRoot: testApiRoot
  },
  production: {
    apiRoot: prodApiRoot
  }
};

setConfig(configValues);


function App() {
  return (
    <Router>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/public-works" component={PublicWorksLandingPage} />
      <Route exact path="/adoptable-pets" component={AdoptablePetsPage} />
      <Route exact path="/images" component={ImagesPage} />
      <Route exact path="/accordions" component={AccordionsPage} />
      <Route exact path="/alerts" component={AlertsPage} />
      <Route exact path="/cards" component={CardPage} />
      <Route exact path="/modals" component={ModalPage} />
    </Router>
  );
}

export default App;
