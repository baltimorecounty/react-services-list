import FilterList from "../components/FilterList";
import React from "react";
import ServiceCard from "../components/ServiceCard";
import useServices from "../hooks/useServices";

const ServiceList = () => {
  const apiResponse = useServices();
  const serviceItems = apiResponse.serviceItems;
  const isLoading = apiResponse.isLoading;

  return isLoading ? (
    <p>Loading Baltimore County services...</p>
  ) : (
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
  );
};

export default ServiceList;
