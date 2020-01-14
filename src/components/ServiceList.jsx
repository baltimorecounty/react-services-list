import React, { useState } from "react";
import FilterList from "../components/FilterList";
import useServicesList from "../hooks/useServicesList";
import ServiceCard from "../components/ServiceCard";

const compare = (a, b) => {
  const nameA = a.name.toUpperCase();
  const nameB = b.name.toUpperCase();

  let comparison = 0;
  if (nameA > nameB) {
    comparison = 1;
  } else if (nameA < nameB) {
    comparison = -1;
  }
  return comparison;
};

const ServiceList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const serviceItems = useServicesList().sort(compare);

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
