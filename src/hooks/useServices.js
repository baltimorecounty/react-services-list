import { useEffect, useState } from "react";

import { GetServices } from "../services/ApiService";

const useServices = () => {
  const [serviceItems, setServiceItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    GetServices().then(response => {
      setServiceItems(response);
      setIsLoading(false);
    });
  }, []);

  return [serviceItems, isLoading];
};

export default useServices;
