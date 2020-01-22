import { Alert } from "@baltimorecounty/dotgov-components";
import FilterList from "../components/FilterList";
import React, { useState } from "react";
import ServiceIconLink from "./ServiceIconLink";
import FilterCollapse from "./FilterCollapse";
import useServices from "../hooks/useServices";
import { MostPopularServiceIconStyles, LegendText } from "../styles";
import Search from "./Search";

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

  const filterByPopularity = item => {
    return item.rank > 0 ? true : false;
  };

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
  const settingFiltering = (searchText, checkedValue) => {
    setIsFiltering(searchText === 0 && checkedValue === false ? false : true);
  };

  const onHandleChange = item => {
    const checkedValue = item.target.checked;
    setMostPopular(checkedValue ? true : false);
    settingFiltering(filterText.length, checkedValue);
    checkCondition(checkedValue, filterText);
  };

  const onHandleSearch = event => {
    const checkedValue = isMostPopular;
    const searchText = event.target.value;
    settingFiltering(searchText.length, checkedValue);
    setFilterText(searchText);
    checkCondition(checkedValue, searchText);
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
        <div className="row dg_dynamic_search_container">
          <div className="col-3">
            <FilterCollapse
              header="Categories"
              id="PopularSearches"
              onChange={onHandleChange}
              checked={isMostPopular}
              isExpanded={false}
            />
          </div>
          <div className="col-9">
            <div>
              <Search onChange={onHandleSearch} />
            </div>
            {searchItemFound ? (
              <div>
                <div className="flexItem">
                  <i
                    className="fas fa-star"
                    aria-hidden="true"
                    style={MostPopularServiceIconStyles}
                  ></i>
                  <p style={LegendText}> - Indicates a Most Popular Service</p>
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
