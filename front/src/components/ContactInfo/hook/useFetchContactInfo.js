import { useState, useEffect } from "react";
import { fetchContactInfo } from "../contactInfoService";

const useFetchContactInfo = () => {

    const [contactInfo, setContactInfo] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
      console.log("useEffect triggered in useFetchContactInfo");
        const fetchData = async () => {
          console.log("Starting fetch process...");
            setIsLoading(true);

            try {
                const response = await fetchContactInfo(); 
                console.log("Data received:", response);
                  setContactInfo(response);          
            } catch (error) {
              console.error("Error fetching contact info:", error);
                setError(error.message)
            } finally {
                setIsLoading(false);
            }  
        };

        fetchData();      
    },[]);

    return {contactInfo, isLoading, error}
}

export default useFetchContactInfo;