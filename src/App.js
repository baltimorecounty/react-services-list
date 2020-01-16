import "@baltimorecounty/dotgov-components/lib/styles/dotgov.min.css";
import "./App.css";

import { Config } from "@baltimorecounty/javascript-utilities";
import React from "react";
import ServiceList from "./components/ServiceList";

const { setConfig } = Config;

const testApiRoot = "https://testservices.baltimorecountymd.gov/api";
const prodApiRoot = "https://services.baltimorecountymd.gov/api";

// HACK - the Config utiltiy does not account for beta.
const localApiRoot =
  window.location.hostname.indexOf("beta") > -1
    ? testApiRoot
    : "//localhost:54727/api";

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
    <div className="bc_services-list-app">
      <ServiceList />
    </div>
  );
}

export default App;
