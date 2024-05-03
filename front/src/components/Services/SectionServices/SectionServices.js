import React from "react";

import { useServices } from '../../../context/ServicesContext';
import ServicesCard from "../ServiceCard/ServiceCard";

import './sectionServices.css';


const SectionServices = () => {

    const { services, isLoading, error } = useServices();

    if(isLoading) return <div>Chargement des services...</div>;
    if(error) return <div>Erreur lors du chargement des services: {error}</div>;

    return (
        <>
          <div className="servicesWrapper">
              {services.map((service) => (
                  <ServicesCard
                    key={service.id}
                    serviceName={service.name}
                    pathImage={service.path}                 
                  />
              ))}
          </div>        
        </>
    );
};

export default SectionServices;