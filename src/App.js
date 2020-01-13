import React from "react";
import logo from "./logo.svg";
import { Config } from "@baltimorecounty/javascript-utilities";
import ServiceList from "./components/ServiceList";
import "@baltimorecounty/dotgov-components/lib/styles/dotgov.min.css";
import "./App.css";

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
    <div className="App">
      <div>
        <ServiceList />
      </div>
    </div>
  );
}

export default App;
