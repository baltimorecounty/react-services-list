import FilterList from "../components/FilterList";
import React, { useState } from "react";
import ServiceCard from "../components/ServiceCard";
import useServices from "../hooks/useServices";
import CheckBox from "./CheckBox";

const ServiceList = props => {
  const { serviceItems = [], isLoading } = useServices();
  const [isChecked, setChecked] = useState(0);

  return (
    <React.Fragment>
      <CheckBox onChange={() => setChecked(isChecked ? 0 : 1)} />
      {isLoading ? (
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
      )}
    </React.Fragment>
  );
};

export default ServiceList;
