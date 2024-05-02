import React, { createContext, useContext } from "react";
import useFetchContactInfo from "../components/ContactInfo/hook/useFetchContactInfo";

const ContactInfoContext = createContext();

export const ContactInfoProvider = ({ children }) => {

    const { contactInfo, isLoading, error } = useFetchContactInfo();

    return (
        <ContactInfoContext.Provider value={{contactInfo, isLoading, error}}>
            {children}
        </ContactInfoContext.Provider>
    );
};

export const useContactInfo = () => useContext(ContactInfoContext);