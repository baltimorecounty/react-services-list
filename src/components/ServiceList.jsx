import React, { useState } from "react";
import FilterList from "../components/FilterList";
import { GetServices, ClearServicesCache } from "../services/ApiService";
// import {
//   Card,
//   CardContent,
//   CardFooter
// } from "@baltimorecounty/dotgov-components";

const ServiceList = () => {
  const [serviceItems, setServiceItems] = useState();

  ClearServicesCache();

  GetServices()
    .then(response => {
      setServiceItems(response);
    })
    .catch(error => {
      console.error(error);
    });

  const serviceCard = ({ name, department, url, icon, rank }) => (
    <div>
      <h3>{name}</h3>
      <p>{department}</p>
      <a href={url}>{name}</a>
    </div>
    // <Card>
    //   <CardContent>
    //   </CardContent>
    // </Card>
  );

  return (
    <div>
      <FilterList items={serviceItems} renderItem={serviceCard} />
    </div>
  );
};

export default ServiceList;
