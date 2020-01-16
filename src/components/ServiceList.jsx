import { Alert } from "@baltimorecounty/dotgov-components";
import FilterList from "../components/FilterList";
import React, { useState } from "react";
import { MostPopularServiceIconStyles } from "../styles";
import ServiceIconLink from "../components/ServiceIconLink";
import useServices from "../hooks/useServices";
import CheckBox from "./CheckBox";

const ServiceList = () => {
  const { hasError, serviceItems = [], isLoading } = useServices();
  const [isChecked, setChecked] = useState(0);

  let legendText = {
    fontStyle: "italic",
    marginLeft: "5px",
    fontWeight: "900"
  };

  let flex = {
    display: "flex",
    flexDirection: "row"
  };

  if (hasError) {
    return (
      <Alert className="status" type="error">
        <p>
          Unable to retrieve the list of Baltimore County services. Please try
          again in a couple of minutes.
        </p>
      </Alert>
    );
  }

  return (
    <React.Fragment>
     
      {isLoading ? (
        <p>Loading Baltimore County services...</p>
      ) : (
        <div> 
        <CheckBox onChange={() => setChecked(isChecked ? 0 : 1)} />      
          <div className="row">
            <FilterList
              items={serviceItems}
              renderItem={props => (
                <div
                  key={props.name.replace(/\s/, "-")}
                  className="d-flex col-lg-3 col-md-6 col-sm-6"
                >
                  <ServiceIconLink {...props} />
                </div>
              )}
            />
          </div>
        </div> 
      )}
    </React.Fragment>
  );
};

export default ServiceList;
