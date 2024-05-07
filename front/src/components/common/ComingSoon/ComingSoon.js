import React, { useState } from 'react';

import Button from '../Button/Button';
import ContactForm from '../../Contact/ContactForm/ContactForm';
import Modal from '../Modal/Modal';


import './comingSoon.css';
import SocialMedia from '../SocialMedia/SocialMedia';

const ComingSoon = () => {

  const [isModalOpen, setModalOpen] = useState(false);
  const toggleModal = () => setModalOpen(!isModalOpen);

  return (
    <div className="pageWrapper">
      <div className="pageOverlay"></div>
      <h1 className="constructionTitle">Bientôt disponible</h1>
      <p className="comingText">La page est en construction</p>
      <Button text="Contact" colorStyle="whiteBtn" onClick={toggleModal}/>
      <Modal isOpen={isModalOpen} onClose={toggleModal}>
        <ContactForm />
      </Modal>
      <div className="socialWrapper">
      <SocialMedia className="comingMedia"/>
      </div>
      
    </div>
  );
};

export default ComingSoon;