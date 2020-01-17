import { Alert } from "@baltimorecounty/dotgov-components";
import FilterList from "../components/FilterList";
import React, { useState, useEffect } from "react";
import ServiceIconLink from "../components/ServiceIconLink";
import useServices from "../hooks/useServices";
import CheckBox from "./CheckBox";
import Search from "./Search";

const ServiceList = () => {
  const { hasError, serviceItems = [], isLoading } = useServices();
  const [isChecked, setChecked] = useState(0);
  const [searchedItems, setSearchedItems] = useState([]);
  const [searchText, setSearchText] = useState([]);
  const [isFiltering, setIsFiltering] = useState(0);

  function filterItems(arr, query) {
    return arr.filter(function(el) {
      return el.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
  }

  function filterByPopularity(item) {
    if (item.rank === 1) {
      return true;
    }
    return false;
  }

  const onHandleChange = item => {
    let checkedItems = [];

    const checkedVal = item.target.checked;
    setChecked(checkedVal ? 1 : 0);
    setIsFiltering(searchText.length === 0 && checkedVal === false ? 0 : 1);
    checkedItems = checkedVal
      ? searchText.length > 0
        ? filterItems(serviceItems.filter(filterByPopularity), searchText)
        : serviceItems.filter(filterByPopularity)
      : (checkedItems =
          searchText.length > 0 ? filterItems(checkedItems, searchText) : []);

    setSearchedItems(checkedItems);
  };

  const onHandleSearch = event => {
    let checkedItems = [];

    const checkedVal = isChecked;
    const searchText = event.target.value;
    setIsFiltering(searchText.length === 0 && isChecked === 0 ? 0 : 1);
    setSearchText(searchText);
    checkedItems = checkedVal
      ? searchText.length > 0
        ? filterItems(serviceItems.filter(filterByPopularity), searchText)
        : serviceItems.filter(filterByPopularity)
      : (checkedItems =
          searchText.length > 0 ? filterItems(serviceItems, searchText) : []);
    setSearchedItems(checkedItems);
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

  let showing = isFiltering === 1 && searchedItems.length === 0 ? false : true;
  //console.log("showing:" + showing);
  return (
    <React.Fragment>
      <Search onChange={onHandleSearch} />
      {isLoading ? (
        <p>Loading Baltimore County services...</p>
      ) : (
        <div>
          <CheckBox onChange={onHandleChange} checked={isChecked} />
          {showing && (
            <div className="row">
              <FilterList
                items={searchedItems.length > 0 ? searchedItems : serviceItems}
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
          )}
        </div>
      )}
    </React.Fragment>
  );
};

export default ServiceList;
