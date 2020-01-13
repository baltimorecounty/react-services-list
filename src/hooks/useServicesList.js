import { useEffect, useState } from "react";

import { GetServices } from "../services/ApiService";

const useServicesList = () => {
  const [serviceItems, setServiceItems] = useState([]);

  useEffect(() => {
    GetServices().then(response => {
      setServiceItems(response);
    });
  }, []);

  return serviceItems;
};

export default useServicesList;
