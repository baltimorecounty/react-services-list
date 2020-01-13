import React from "react";
import FilterList from "../components/FilterList";
import useServicesList from "../hooks/useServicesList";
import { Card, CardContent } from "@baltimorecounty/dotgov-components";

const ServiceList = () => {
  const serviceItems = useServicesList();

  const serviceCard = ({ name, department, url, icon, rank }) => (
    <Card>
      <CardContent>
        <h3>{name}</h3>
        <p>{department}</p>
        <a href={url}>{name}</a>
      </CardContent>
    </Card>
  );

  return (
    <div>
      <FilterList items={serviceItems} renderItem={serviceCard} />
    </div>
  );
};

export default ServiceList;
