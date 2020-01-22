import { Alert } from "@baltimorecounty/dotgov-components";
import FilterList from "./FilterList";
import React, { useState } from "react";
import ServiceIconLink from "./ServiceIconLink";
import PopularityFilterCollapse from "./PopularityFilterCollapse";
import useServices from "../hooks/useServices";
import ListLegend from "./ListLegend";
import ListCounter from "./ListCounter";
import { TextInput } from "@baltimorecounty/dotgov-components";

const filterItems = (services, searchText) => {
  return services.filter(item => {
    const { name, department } = item;
    return (
      name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1 ||
      department.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
    );
  });
};

const filterByPopularity = item => item.rank > 0;

const ServiceList = () => {
  const { hasError, serviceItems = [], isLoading } = useServices();
  const [isMostPopular, setMostPopular] = useState(false);
  const [filteredItems, setFilteredItems] = useState([]);
  const [filterText, setFilterText] = useState([]);
  const [isFiltering, setIsFiltering] = useState(false);

  const checkCondition = (checkedVal, searchText) => {
    let checkedItems = [];
    const searchTextLength = searchText.length > 0;
    checkedItems = checkedVal
      ? searchTextLength
        ? filterItems(serviceItems.filter(filterByPopularity), searchText)
        : serviceItems.filter(filterByPopularity)
      : searchTextLength
      ? filterItems(serviceItems, searchText)
      : [];

    setFilteredItems(checkedItems);
  };

  const handleIsPopularFilterChange = changeEvent => {
    const { checked } = changeEvent.target;
    setMostPopular(checked);
    setIsFiltering(filterText.length > 0 || checked);
    checkCondition(checked, filterText);
  };

  const handleTextInputFilterChange = changeEvent => {
    const { value } = changeEvent.target;
    setIsFiltering(value.length > 0 || isMostPopular);
    setFilterText(value);
    checkCondition(isMostPopular, value);
  };

  if (hasError) {
    return (
      <Alert className="status" type="error">
        <p>
          Unable to retrieve the list of Baltimore County services. Please try
          again in a couple of minutes.
        </p>
      </Alert>
    );
  }

  const hasFilteredResults = !(isFiltering && filteredItems.length === 0);

  return (
    <React.Fragment>
      {isLoading ? (
        <p>Loading Baltimore County services...</p>
      ) : (
        <div className="row">
          <div className="col-md-3 col-xs-12">
            <PopularityFilterCollapse
              header="Categories"
              id="Popular-filter"
              onChange={handleIsPopularFilterChange}
              checked={isMostPopular}
              isExpanded={false}
            />
          </div>
          <div className="col-md-9 col-xs-12">
            <TextInput
              id="full-name"
              label="Search for services"
              placeholder="Search for services and more..."
              onChange={handleTextInputFilterChange}
            />

            {hasFilteredResults ? (
              <div>
                <ListLegend
                  legendicon="fas fa-star"
                  legendtext="- Indicates a Most Popular Service"
                />

                <div className="row">
                  <FilterList
                    items={
                      filteredItems.length > 0 ? filteredItems : serviceItems
                    }
                    renderItem={props => (
                      <div
                        key={props.name.replace(/\s/, "-")}
                        className="d-flex col-lg-3 col-md-6 col-sm-6"
                      >
                        <ServiceIconLink {...props} checked={isMostPopular} />
                      </div>
                    )}
                  />
                </div>
                <ListCounter
                  currentcount={
                    filteredItems.length === 0
                      ? serviceItems.length
                      : filteredItems.length
                  }
                  totalcount={serviceItems.length}
                />
              </div>
            ) : (
              "Sorry, no services match your search criteria. Please change your search term and try again"
            )}
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default ServiceList;
