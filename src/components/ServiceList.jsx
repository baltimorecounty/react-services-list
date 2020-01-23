import { Alert } from "@baltimorecounty/dotgov-components";
import FilterList from "./FilterList";
import React, { useState } from "react";
import ServiceIconLink from "./ServiceIconLink";
import PopularityFilterCollapse from "./PopularityFilterCollapse";
import useServices from "../hooks/useServices";
import ListLegend from "./ListLegend";
import ListCounter from "./ListCounter";
import { TextInput } from "@baltimorecounty/dotgov-components";

const filterByTextInput = (item, searchText) => {
  return (
    item.name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1 ||
    item.department.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
  );
};

const ServiceList = () => {
  const { hasError, serviceItems = [], isLoading } = useServices();
  const [isMostPopular, setMostPopular] = useState(false);
  const [filteredItems, setFilteredItems] = useState([]);
  const [filterText, setFilterText] = useState([]);
  const [isFiltering, setIsFiltering] = useState(false);

  const filterServiceList = (shouldShowMostPopularServices, searchText) => {
    const items = [...serviceItems]
      .filter(item => !shouldShowMostPopularServices || item.rank > 0)
      .filter(item => !searchText.trim || filterByTextInput(item, searchText));
    setFilteredItems(items);
  };

  const handleIsPopularFilterChange = changeEvent => {
    const { checked } = changeEvent.target;
    setMostPopular(checked);
    setIsFiltering(filterText.length > 0 || checked);
    filterServiceList(checked, filterText);
  };

  const handleTextInputFilterChange = changeEvent => {
    const { value } = changeEvent.target;
    setIsFiltering(value.length > 0 || isMostPopular);
    setFilterText(value);
    filterServiceList(isMostPopular, value);
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
              header="Filter"
              id="Popular-filter"
              onChange={handleIsPopularFilterChange}
              checked={isMostPopular}
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
                  icon="fas fa-star"
                  text="- Indicates a Most Popular Service"
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
                  count={
                    filteredItems.length === 0
                      ? serviceItems.length
                      : filteredItems.length
                  }
                  total={serviceItems.length}
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
