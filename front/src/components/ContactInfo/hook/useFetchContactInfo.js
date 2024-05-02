import { useState, useEffect } from "react";
import { fetchContactInfo } from "../contactInfoService";

const useFetchContactInfo = () => {

    const [contactInfo, setContactInfo] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);

            try {
                const response = await fetchContactInfo(); 
                  setContactInfo(response);          
            } catch (error) {
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