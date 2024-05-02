import React, { createContext, useContext } from "react";

import useFetchDiplomes from "../components/Diplomes/hook/useFetchDiplomes";

const DiplomesContext = createContext();

export const DiplomesProvider = ({ children }) => {

    const { diplomes, isLoading, error } = useFetchDiplomes();

    return (
        <DiplomesContext.Provider value={{diplomes, isLoading, error}}>
            {children}
        </DiplomesContext.Provider>

    );
};

export const useDiplomes = () => useContext(DiplomesContext);