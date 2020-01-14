import React from "react";
import FilterList from "../components/FilterList";
import useServicesList from "../hooks/useServicesList";
import {
  Card,
  CardContent,
  CardFooter
} from "@baltimorecounty/dotgov-components";

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
  const serviceItems = useServicesList().sort(compare);
  let starImg = {
    fontSize: ".2em",
    float: "right",
    marginTop: "0px",
    width: "10px"
  };
  const serviceCard = ({ name, department, url, icon, rank }) => (
    <div className="d-flex col-lg-4 col-md-6 col-sm-6">
      <Card>
        <CardContent>
          <div className="dg_icon-container">
            <i className={icon} aria-hidden="true"></i>
            <i className="rank" style={starImg} aria-hidden="true" />
          </div>
          <h3>{name}</h3>
        </CardContent>
        <CardFooter>
          <a href={url}> {department}</a>
        </CardFooter>
      </Card>
    </div>
  );

  return (
    <div className="container">
      <div className="row">
        <div className=" col-md-8 col-sm-12">
          <div id="dg_main-content">
            <div className="row">
              <FilterList items={serviceItems} renderItem={serviceCard} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceList;
