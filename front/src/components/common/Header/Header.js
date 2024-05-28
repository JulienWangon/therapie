import React, { useState } from 'react';
import './header.css';

import Button from '../Button/Button';
import ContactHeader from '../../ContactInfo/ContactHeader/ContactHeader';
import ContactForm from '../../Contact/ContactForm/ContactForm';
import Modal from '../Modal/Modal';

import { useContactInfo } from '../../../context/ContactInfoContext';

const Header = () => {

  const [isModalOpen, setModalOpen] = useState(false);
  const toggleModal = () => setModalOpen(!isModalOpen);

  const { contactInfo } = useContactInfo();
  
  return (
    <header>
        <div className="topHeader">
            <span className="headerName">Marine Ottaviani</span>
            <span className="headerSlogan">Psychopraticienne</span>
        </div>

        <div className="bottomHeader">
            <Button
                text="Contact"
                className="contactBtn"
                type="button"
                colorStyle="whiteBtn"
                onClick={toggleModal}             
            />

            <Modal isOpen={isModalOpen} onClose={toggleModal}>
              <ContactForm />
            </Modal>

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