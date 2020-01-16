import FilterList from "../components/FilterList";
import React from "react";
import ServiceCard from "../components/ServiceCard";
import useServices from "../hooks/useServices";
import { Section } from "@baltimorecounty/dotgov-components";

const ServiceList = () => {
  const { serviceItems = [], isLoading } = useServices();

  let legendStar = {
    fontSize: "25px",
    color: "gray",
    textAlign: "left"
  };

  let legendText = {
    fontStyle: "italic",
    marginLeft: "5px",
    fontWeight: "900"
  };

  let flex = {
    display: "flex",
    flexDirection: "row"
  };

  return isLoading ? (
    <p>Loading Baltimore County services...</p>
  ) : (
    <div>
      <div style={flex}>
        <i className="fas fa-star" aria-hidden="true" style={legendStar}></i>
        <p style={legendText}>-Indicates a Most Popular Service</p>
      </div>

      <FilterList
        items={serviceItems}
        renderItem={props => (
          <div style={{ padding: "10px" }}>
            <div key={props.name.replace(/\s/, "-")} className="dg_item-grid">
              <ServiceCard {...props} />
            </div>
          </div>
        )}
      />
    </div>
  );
};

export default ServiceList;
