import { Alert } from "@baltimorecounty/dotgov-components";
import FilterList from "../components/FilterList";
import React, { useState } from "react";
import ServiceIconLink from "./ServiceIconLink";
import PopularityFilterCollapse from "./PopularityFilterCollapse";
import useServices from "../hooks/useServices";
import { MostPopularServiceIconStyles } from "../styles";
import { TextInput } from "@baltimorecounty/dotgov-components";

const ServiceList = () => {
  const { hasError, serviceItems = [], isLoading } = useServices();
  const [isMostPopular, setMostPopular] = useState(false);
  const [filteredItems, setFilteredItems] = useState([]);
  const [filterText, setFilterText] = useState([]);
  const [isFiltering, setIsFiltering] = useState(false);

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

  const handleIsPopularFilterChange = item => {
    const checkedValue = item.target.checked;
    setMostPopular(checkedValue);
    setIsFiltering(filterText.length > 0 || checkedValue);
    checkCondition(checkedValue, filterText);
  };

  const handleTextInputFilterChange = event => {
    const searchText = event.target.value;
    setIsFiltering(searchText.length > 0 || isMostPopular);
    setFilterText(searchText);
    checkCondition(isMostPopular, searchText);
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

  let searchItemFound =
    isFiltering === true && filteredItems.length === 0 ? false : true;

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
            <div>
              <TextInput
                id="full-name"
                label="Search for services"
                placeholder="Search for services and more..."
                onChange={handleTextInputFilterChange}
              />
            </div>
            {searchItemFound ? (
              <div>
                <div className="dg_legend_container">
                  <i
                    className="fas fa-star"
                    aria-hidden="true"
                    style={MostPopularServiceIconStyles}
                  ></i>
                  <p className="dg_legend_text">
                    {" "}
                    - Indicates a Most Popular Service
                  </p>
                </div>
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
                <div className="dg_service_counter">
                  <p>{`Showing ${
                    filteredItems.length === 0
                      ? serviceItems.length
                      : filteredItems.length
                  } of ${serviceItems.length} services`}</p>
                </div>
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
