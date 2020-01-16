import FilterList from "../components/FilterList";
import { MostPopularServiceIconStyles } from "../styles";
import React from "react";
import ServiceIconLink from "../components/ServiceIconLink";
import useServices from "../hooks/useServices";

const ServiceList = () => {
  const { serviceItems = [], isLoading } = useServices();

  let legendText = {
    fontStyle: "italic",
    marginLeft: "5px",
    fontWeight: "900"
  };

  let flex = {
    display: "flex",
    flexDirection: "row"
  };

  return isLoading ? (
    <p>Loading Baltimore County services...</p>
  ) : (
    <div>
      <div style={flex}>
        <i
          className="fas fa-star"
          aria-hidden="true"
          style={MostPopularServiceIconStyles}
        ></i>
        <p style={legendText}> - Indicates a Most Popular Service</p>
      </div>
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
  );
};

export default ServiceList;
