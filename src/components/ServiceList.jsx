import FilterList from "../components/FilterList";
import React from "react";
import ServiceCard from "../components/ServiceCard";
import useServices from "../hooks/useServices";

const ServiceList = () => {
  const { serviceItems = [], isLoading } = useServices();

  let legendStar = {
    fontSize: "20px",
    color: "gray",
    textAlign: "left",
    marginTop: "4px"
  };

  let legendText = {
    fontStyle: "italic"
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
        <i className="fas fa-star" aria-hidden="true" style={legendStar}></i>
        <p style={legendText}>-Indicates a Most Popular Service</p>
      </div>
      <div className="row">
        <FilterList
          items={serviceItems}
          renderItem={props => (
            <div
              key={props.name.replace(/\s/, "-")}
              className="d-flex col-lg-3 col-md-6 col-sm-6"
            >
              <ServiceCard {...props} />
            </div>
          )}
        />
      </div>
    </div>
  );
};

export default ServiceList;
