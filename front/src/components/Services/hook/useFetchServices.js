import { useState, useEffect } from "react";
import { fetchServices } from "../servicesService";

const useFetchServices = () => {

  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
      const fetchData = async () => {
          setIsLoading(true);

          try {
              const response = await fetchServices(); 
                setServices(response);     
          } catch (error) {
              setError(error.message)
          } finally {
              setIsLoading(false);
          }  
      };

      fetchData();      
  },[]);

  return {services, isLoading, error}
}

export default useFetchServices;