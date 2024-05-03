import React, { createContext, useContext } from "react";

import useFetchServices from "../components/Services/hook/useFetchServices";

const ServicesContext = createContext();

export const ServicesProvider = ({ children }) => {

    const { services, isLoading, error } = useFetchServices();

    return (
        <ServicesContext.Provider value={{services, isLoading, error}}>
            {children}
        </ServicesContext.Provider>

    );
};

export const useServices = () => useContext(ServicesContext);