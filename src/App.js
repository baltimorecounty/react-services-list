import { Config } from "@baltimorecounty/javascript-utilities";
import { FilterList } from "@baltimorecounty/react-filter-list";
import Filters from "./Filters";
import React from "react";
import { Run } from "./Startup";
import ServiceLink from "./components/ServiceLink";

const { getValue } = Config;

Run();

function App() {
  return (
    <div className="bc_services-list-app">
      <FilterList
        title="Baltimore County Services"
        filters={Filters}
        apiEndpoint={getValue("apiRoot")}
        listContainerClassName="items row"
        renderItem={(service) => (
          <div key={service.id} className="col-lg-4 col-md-6 col-sm-6 d-flex">
            <ServiceLink {...service} />
          </div>
        )}
      />
    </div>
  );
}

export default App;
