import React from "react";
import logo from "./logo.svg";
import { Config } from "@baltimorecounty/javascript-utilities";
import FilterList from "../src/components/FilterList";
import "@baltimorecounty/dotgov-components/lib/styles/dotgov.min.css";
import "./App.css";

const { setConfig } = Config;

const localApiRoot = "//localhost:3000/api";
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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
          <FilterList />
        </div>
      </header>
    </div>
  );
}

export default App;
