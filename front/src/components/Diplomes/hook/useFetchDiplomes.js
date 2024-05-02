import { useState, useEffect } from "react";
import { fetchDiplomes } from "../diplomeService";

const useFetchDiplomes = () => {

  const [diplomes, setDiplomes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
      const fetchData = async () => {
          setIsLoading(true);

          try {
              const response = await fetchDiplomes(); 
                setDiplomes(response);          
          } catch (error) {
              setError(error.message)
          } finally {
              setIsLoading(false);
          }  
      };

      fetchData();      
  },[]);

  return {diplomes, isLoading, error}
}

export default useFetchDiplomes;
