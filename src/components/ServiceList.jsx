import React from "react";
import FilterList from "../components/FilterList";
import useServicesList from "../hooks/useServicesList";
import { Card, CardContent } from "@baltimorecounty/dotgov-components";

const ServiceList = () => {
  const serviceItems = useServicesList();

  const serviceCard = ({ name, department, url, icon, rank }) => (
    <Card id={name}>
      <CardContent>
        <h3>{name}</h3>
        <p>{department}</p>
        <a href={url}>{name}</a>
      </CardContent>
    </Card>
  );

  return <FilterList items={serviceItems} renderItem={serviceCard} />;
};

export default ServiceList;
