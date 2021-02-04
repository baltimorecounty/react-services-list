import "./App.css";

import { Config } from "@baltimorecounty/javascript-utilities";
import { FilterList } from "@baltimorecounty/react-filter-list";
import Filters from "./Filters";
import ListLegend from "./components/ListLegend";
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
        staticFilters={[{ targetApiField: "recordsPerPage", value: 1000 }]}
        apiEndpoint={getValue("apiRoot")}
        listContainerClassName="items row"
        includeInputFilter={true}
        includeClearButton={true}
        includeDateFilter={false}
        searchCategory="Services"
        inputFilterPlaceholder="Begin typing to filter by name or department..."
        renderItem={(service) => (
          <div key={service.id} className="col-lg-4 col-md-6 col-sm-6 d-flex">
            <ServiceLink {...service} />
          </div>
        )}
        renderListHeader={(count) => (
          <div className="row">
            <div className="col-md-6 col-xs-12 order-xs-first order-md-last">
              <ListLegend
                icon="fas fa-star"
                text="- Indicates a Most Popular Service"
              />
            </div>
            <div className="col-md-6 col-xs-12 order-xs-last order-md-first ">
              <p style={{ margin: 0 }}>Viewing {count} results</p>
            </div>
          </div>
        )}
      />
    </div>
  );
}

export default App;
