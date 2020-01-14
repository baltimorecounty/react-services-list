import React from "react";
import FilterList from "../components/FilterList";
import useServices from "../hooks/useServices";
import ServiceCard from "../components/ServiceCard";

const ServiceList = () => {
  const apiResponse = useServices();
  const serviceItems = apiResponse.serviceItems;
  const isLoading = apiResponse.isLoading;

  return isLoading ? (
    <p>Loading Baltimore County services...</p>
  ) : (
    <div className="container">
      <div className="row">
        <div id="dg_main-content">
          <div className="row">
            <FilterList items={serviceItems} renderItem={ServiceCard} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceList;
