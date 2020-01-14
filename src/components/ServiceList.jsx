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
  const [isLoading, setIsLoading] = useState(true);
  const serviceItems = useServicesList().sort(compare);

  return isLoading ? (
    <p>Loading Baltimore County services...</p>
  ) : (
    <FilterList items={serviceItems} renderItem={ServiceCard} />
  );
};

export default ServiceList;
