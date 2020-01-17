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

  const checkCondition = (checkedVal, searchText) => {
    let checkedItems = [];
    checkedItems = checkedVal
      ? searchText.length > 0
        ? filterItems(serviceItems.filter(filterByPopularity), searchText)
        : serviceItems.filter(filterByPopularity)
      : searchText.length > 0
      ? filterItems(serviceItems, searchText)
      : [];

    setSearchedItems(checkedItems);
  };
  const onHandleChange = item => {
    const checkedVal = item.target.checked;
    setChecked(checkedVal ? 1 : 0);
    setIsFiltering(searchText.length === 0 && checkedVal === false ? 0 : 1);
    checkCondition(checkedVal, searchText);
  };

  const onHandleSearch = event => {
    const checkedVal = isChecked;
    const searchText = event.target.value;
    setIsFiltering(searchText.length === 0 && checkedVal === 0 ? 0 : 1);
    setSearchText(searchText);
    checkCondition(checkedVal, searchText);
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

  return (
    <React.Fragment>
      <Search onChange={onHandleSearch} />
      {isLoading ? (
        <p>Loading Baltimore County services...</p>
      ) : (
        <div>
          <CheckBox onChange={onHandleChange} checked={isChecked} />
          {showing ?(
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
          ):"record not found"}
        </div>
      )}
    </React.Fragment>
  );
};

export default ServiceList;
