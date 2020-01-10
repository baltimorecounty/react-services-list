import React, { useState } from "react";
import { GetServices } from "../services/ApiService";

const [serviceItems, setServiceItems] = useState(false);

const FilterList = () => {
  GetServices()
    .then(response => {
      setServiceItems(response);
      console.log(serviceItems);
    })
    .catch(error => {
      console.error(error);
    });
};

export default FilterList;
