import { Alert } from "@baltimorecounty/dotgov-components";
import FilterList from "../components/FilterList";
import React, { useState } from "react";
import ServiceIconLink from "../components/ServiceIconLink";
import useServices from "../hooks/useServices";
import CheckBox from "./CheckBox";
import Search from "./Search";

const ServiceList = () => {
  const { hasError, serviceItems = [], isLoading } = useServices();
  const [isChecked, setChecked] = useState(false);
  const [searchedItems, setSearchedItems] = useState([]);
  const [searchText, setSearchText] = useState([]);
  const [isFiltering, setIsFiltering] = useState(0);

  const filterItems = (services, searchText) => {
    return services.filter(function(el) {
      return (
        el.name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1 ||
        el.department.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
      );
    });
  };

  const filterByPopularity = item => {
    if (item.rank > 0) {
      return true;
    }
    return false;
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

    setSearchedItems(checkedItems);
  };
  const settingFiltering = (searchText, checkedValue) => {
    setIsFiltering(searchText === 0 && checkedValue === false ? 0 : 1);
  };

  const onHandleChange = item => {
    const checkedValue = item.target.checked;
    setChecked(checkedValue ? true : false);
    settingFiltering(searchText.length, checkedValue);
    checkCondition(checkedValue, searchText);
  };

  const onHandleSearch = event => {
    const checkedValue = isChecked;
    const searchText = event.target.value;
    settingFiltering(searchText.length, checkedValue);
    setSearchText(searchText);
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
    isFiltering === 1 && searchedItems.length === 0 ? false : true;

  return (
    <React.Fragment>
      <Search onChange={onHandleSearch} />
      {isLoading ? (
        <p>Loading Baltimore County services...</p>
      ) : (
        <div>
          <CheckBox onChange={onHandleChange} checked={isChecked} />
          {searchItemFound ? (
            <div>
              <div className="row">
                <FilterList
                  items={
                    searchedItems.length > 0 ? searchedItems : serviceItems
                  }
                  renderItem={props => (
                    <div
                      key={props.name.replace(/\s/, "-")}
                      className="d-flex col-lg-3 col-md-6 col-sm-6"
                    >
                      <ServiceIconLink {...props} checked={isChecked} />
                    </div>
                  )}
                />
              </div>
              <div>
                <p>{`Showing ${
                  searchedItems.length === 0
                    ? serviceItems.length
                    : searchedItems.length
                } of ${serviceItems.length} services`}</p>
              </div>
            </div>
          ) : (
            "Sorry, no services match your search criteria. Please change your search term and try again"
          )}
        </div>
      )}
    </React.Fragment>
  );
};

export default ServiceList;
