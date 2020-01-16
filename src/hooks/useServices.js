import { useEffect, useState } from "react";

import { GetServices } from "../services/ApiService";

const useServices = () => {
  const [serviceItems, setServiceItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    GetServices()
      .then(response => {
        setServiceItems(response);
      })
      .catch(() => {
        setHasError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return { hasError, serviceItems, isLoading };
};

export default useServices;
