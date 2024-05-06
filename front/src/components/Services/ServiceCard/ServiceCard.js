import React from 'react';

import './serviceCard.css';

const ServicesCard = ({ serviceName, pathImage}) => {
  return (
    <div className="servicesCard">
      <img className="serviceImg" src={pathImage} alt={`logo ${serviceName}`}/>
      <h3 className="serviceName">{serviceName}</h3> 
      <button className="serviceBtn" type="button">Découvrir <i className="fas fa-arrow-right"></i></button>     
    </div>
  );
};

export default ServicesCard;