import React from "react";
import FilterList from "../components/FilterList";
import useServices from "../hooks/useServices";
import ServiceCard from "../components/ServiceCard";

const ServiceList = () => {
  const apiResponse = useServices();
  const serviceItems = apiResponse[0];
  const isLoading = apiResponse[1];

  return isLoading ? (
    <p>Loading Baltimore County services...</p>
  ) : (
    <div className="container">
      <div className="row">
        <div className=" col-md-8 col-sm-12">
          <div id="dg_main-content">
            <div className="row">
              <FilterList items={serviceItems} renderItem={ServiceCard} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceList;
