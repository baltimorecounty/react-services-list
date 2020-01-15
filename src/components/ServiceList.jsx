import FilterList from "../components/FilterList";
import React from "react";
import ServiceCard from "../components/ServiceCard";
import useServices from "../hooks/useServices";

const ServiceList = () => {
  const { serviceItems = [], isLoading } = useServices();

  let legendStar = {
    fontSize: "20px",
    color: "gray",
    "text-align": "left",
    width: "100%"
  };

  return isLoading ? (
    <p>Loading Baltimore County services...</p>
  ) : (
    <div>
      <div>
        <i className="fas fa-star" aria-hidden="true" style={legendStar}>
          - Indicates a top 20 popular service
        </i>
        <span className="sr-only">
          {`The star indicates a top 20 popular service`}
        </span>
      </div>
      <div className="row">
        <FilterList
          items={serviceItems}
          renderItem={props => (
            <div className="d-flex col-lg-3 col-md-6 col-sm-6">
              <ServiceCard {...props} />
            </div>
          )}
        />
      </div>
    </div>
  );
};

export default ServiceList;
