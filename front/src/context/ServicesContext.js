import React, { createContext, useContext } from "react";

import useFetchServices from "../components/Services/hook/useFetchServices";

const ServicesContext = createContext();

export const DiplomesProvider = ({ children }) => {

    const { diplomes, isLoading, error } = useFetchServices();

    return (
        <ServicesContext.Provider value={{diplomes, isLoading, error}}>
            {children}
        </ServicesContext.Provider>

    );
};

export const useServices = () => useContext(ServicesContext);