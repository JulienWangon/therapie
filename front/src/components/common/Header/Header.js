import React from 'react';
import './header.css';

import Button from '../Button/Button';
import ContactHeader from '../../ContactInfo/ContactHeader/ContactHeader';

import { useContactInfo } from '../../../context/ContactInfoContext';

const Header = () => {

  const { contactInfo } = useContactInfo();
  return (
    <header>
        <div className="topHeader">
            <span className="headerName">Marine Ottaviani</span>
            <span className="headerSlogan">Psychopraticienne</span>
        </div>

        <div className="bottomHeader">
            <Button
                text="contact"
                className="contactBtn"
                type="button"
                colorStyle="whiteBtn"             
            />

            {contactInfo.map((info) => (
              <ContactHeader
                key={info.id}
                numero={info.number}
                rue={info.street}
                codePostal={info.zipCode}
                ville={info.city}
                phone={info.phone}    
              />
            ))}
        </div>   


      
    </header>
  );
};

export default Header;